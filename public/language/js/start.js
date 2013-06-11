/**
 * @class: Start
 * @description:  Start website here
 * @version: 1.0 
 **/

/**
 * Global variables
 */
var ServiceMide = ServiceMide || {};
ServiceMide.addPicklist = '/interviewer/dashboard/addpicklist';

function validateEmail(value){
	var regex = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
	return regex.test(value);
};

$.fn.actionLink = function(options){
	var defaults = {
		frm:null
	};
	options = $.extend(defaults,options);
	
	return this.each(function(){
		var jtrig = $(this),
			frm = $(options.frm);
			
		if (!frm.length) return;
		jtrig.unbind('click.changeAction').bind('click.changeAction',function(e){
			e.preventDefault();
			e.stopPropagation();
			
			frm.attr('action',jtrig.attr('href'));
			// frm[0].submit();
			frm.submit();
		});
	});
};

/**
 * Website start here
 **/
 
$.fn.kMap = function(options){
	var defaults = {
		radDist:null,
		zoomLev:null,
		pUpdate:'.centerLayer',
		srcIconBluePoint:'/images/ico_point_blue.png',
		srcIconRedPoint:'/images/ico_point_red.png',
		srcIconCenterPoint:'/images/ico_point_center.png',
		centerPoint:null,
		bluePoint:null,
		redPoint:null,
		centerPointFn:null,
		bluePointFn:null,
		redPointFn:null,
		onInitPopupInfo:null,
		dfZoom:10,
		radDist:5, //5KM
		sKmUnit:1
	};
	options = $.extend(defaults,options);
	
	return this.each(function(){
		var smap = $(this),
			radDist = $(options.radDist),
			zoomLev = $(options.zoomLev),
			pInfo = $('#popupInterviewer');
		
		var map,
			curMarker,
			markers = [];
		
		var SingleElementOverlay = function(options, overlayedObject, point) {
				this.setValues(options);
				this.div_ = overlayedObject;
				this.div_point_ = point;				
			},
			displayPoint = function(map,objectDiv,cMarker){									
				new SingleElementOverlay( { map: map }, objectDiv, cMarker.getPosition() );					
			};
		
		function initAddToMyPickList(btnAdd,pInfos){
			if (btnAdd.length){
				btnAdd.unbind('click.addToList').bind('click.addToList',function(e){
					var ktrig = $(this);					
					
					$.ajax({
						type:'POST',
						url:ServiceMide.addPicklist,
						data:'&id=' + pInfos.novisit,
						beforeSend:function(){
							
						},
						success:function(response){
							window.location.href = window.location.href;
						}
						
					});
				});
			}
		}
		
		var initPopupInfo = function(pInfos){
			var interviewer = 'interviewer',
				sClient = pInfos.client,
				sCity = pInfos.city,
				sNoOfVisit = pInfos.novisit,
				sDistance = pInfos.distance,
				is_pick_list = pInfos.is_pick_list;				
			
			var pInfoIn = $('<input type="hidden" name="sClient" value="'+ sClient +'" />'+
				'<input type="hidden" name="sCity" value="'+ sCity +'" />'+
				'<input type="hidden" name="sNoOfVisit" value="'+ sNoOfVisit +'" />'+
				'<input type="hidden" name="sDistance" value="'+ sDistance +'" />'+
				'<input type="hidden" name="is_pick_list" value="'+ is_pick_list +'" />'+				
				'<h5><img class="uiIcon initIcon-38" alt="New Contact" src="/images/dummy.gif"/>'+ interviewer +'</h5>'+
			   '<dl class="odd">'+
				'<dt>Client:</dt>'+
					'<dd class="sName">' + sClient + '</dd>'+
			   '</dl>' +
			   '<dl class="even">'+
				'<dt>City:</dt>'+
					'<dd class="sAddress">' + sCity + '</dd>'+
			   '</dl>' +
			   '<dl class="odd">'+
				'<dt>No of visits:</dt>'+
					'<dd class="sPhone">' + sNoOfVisit + '</dd>'+
			   '</dl>' +
			   '<dl class="even">'+
				'<dt>Distance:</dt>'+
					'<dd class="sRating"> ' + sDistance + '</dd>'+
			   '</dl>' + 
				((parseInt(is_pick_list) == 0) ? '<ul class="lstNavType02"><li><a class="btnAdd add" href="javascript:void(0);"><img class="uiIcon initIcon-25" alt="New Contact" src="/images/dummy.gif"/>Add to my pick list</a></li></ul>' : '')
			);			
			pInfo.find(options.pUpdate).html(pInfoIn);
			var btnAdd = pInfo.find('.btnAdd');
			initAddToMyPickList(btnAdd,pInfos);
		};
		
		if (typeof options.onInitPopupInfo == 'function'){
			initPopupInfo = options.onInitPopupInfo;
		}
		
		function clearMarker(){
			if (markers.length > 0){
				for(var i=0; i<markers.length; i++){			
					markers[i].setMap(null);			
				}
				markers.length = 0;
			}
		};
		
		function createMarker(settings, pInfos) {			
			var marker = new google.maps.Marker(settings);
			
			markers.push(marker);					
			
			google.maps.event.addListener(marker, 'click', function() {	
				if (typeof initPopupInfo == 'function'){
					initPopupInfo(pInfos);
				}				
				displayPoint(map,pInfo[0],marker);
				curMarker = marker;
			});
		}
		
		function addMarkers(centerPoint,otherPoint,srcIcon) {
			var bounds = map.getBounds();
			var southWest = bounds.getSouthWest();
			var northEast = bounds.getNorthEast();
			var lngSpan = northEast.lng() - southWest.lng();
			var latSpan = northEast.lat() - southWest.lat();
			
			for (var i = 0; i < otherPoint.length; i++) {
				var latLng = new google.maps.LatLng(otherPoint[i].lat, otherPoint[i].lng);
				var p1 = new LatLon(Geo.parseDMS(centerPoint.lat), Geo.parseDMS(centerPoint.lng));
				var p2 = new LatLon(Geo.parseDMS(otherPoint[i].lat), Geo.parseDMS(otherPoint[i].lng));
				var dist = p1.distanceTo(p2);
				var radDistNo = (radDist.length) ? parseInt(radDist.val()) : options.radDist;
				radDistNo = radDistNo * options.sKmUnit;
				if(dist * 1000 < radDistNo){						
					createMarker({map:map,position:latLng,icon:srcIcon}, otherPoint[i]);
				}
			}			
		}
		
		function initialize(centerPoint,bluePoint,redPoint) {
			if (!centerPoint) return;
			if (markers.length > 0){
				clearMarker();			
			}			
			var zoom = (zoomLev.length) ? parseInt(zoomLev.val()) : options.dfZoom;
			var myLatlon = new google.maps.LatLng(centerPoint.lat, centerPoint.lng);				
			
			map = new google.maps.Map(smap[0], {
				center: myLatlon,
				zoom:parseInt(zoom),
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				navigationControl: true,
				navigationControlOptions: {
					style: google.maps.NavigationControlStyle.LARGE
				},
				zoom_changed: function(){
					if (zoomLev.length){
						zoomLev.val(map.getZoom());
					}
					if (curMarker){
						displayPoint(map,pInfo[0],curMarker);						
					}
				}
			});
			
			var marker = new google.maps.Marker({
				position: myLatlon,
				map: map,
				icon:options.srcIconCenterPoint
			});
			
			markers.push(marker);						
			if (bluePoint.length){
				google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
					addMarkers(centerPoint,bluePoint,options.srcIconBluePoint);
				});				
			}
			if (redPoint.length){
				google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
					addMarkers(centerPoint,redPoint,options.srcIconRedPoint);
				});				
			}
			
			var radDistNo = (radDist.length) ? parseInt(radDist.val()) : options.radDist;			
			var circle = new google.maps.Circle({
				center: new google.maps.LatLng(centerPoint.lat, centerPoint.lng),
				map: map,
				radius: Number(radDistNo * options.sKmUnit),
				fillColor: 'green',
				strokeColor: '#ffffff',
				strokeWeight: 1
			});	 
			
			SingleElementOverlay.prototype = new google.maps.OverlayView();			
			SingleElementOverlay.prototype.onAdd = function() {
				var pane = this.getPanes().floatPane;						
				pane.appendChild(this.div_);   				
				
				this.div_.style.display = 'block';
				this.div_.style.visibility = 'visible';
				
				var offHeight = this.div_.offsetHeight;
				var offWidth = this.div_.offsetWidth;
				
				var curOffset = this.getProjection().fromLatLngToDivPixel(this.div_point_);

				this.div_.style.position = 'absolute';
				this.div_.style.top = (Math.floor(curOffset.y) - offHeight - 40) + 'px';					
				this.div_.style.left = Math.floor(curOffset.x - 26) + 'px';
				
				pInfo = $(this.div_);
				
				var btnClose = pInfo.find('.btnClose');
				btnClose.unbind('click.closePopup').bind('click.closePopup',function(e){
					e.preventDefault();
					pInfo.css({
						display:'none'
					});
				});
			};
			SingleElementOverlay.prototype.onRemove = function() {
				this.div_.parentNode.removeChild(this.div_);
				this.div_ = null;
			};
			SingleElementOverlay.prototype.draw = function() {};
						
			// google.maps.event.addListener(marker, 'click', function() {			
				// displayPoint(map,pInfo[0],marker);
				// curMarker = marker;
			// });				
		};
		
		//excute function
		initialize(options.centerPoint,options.bluePoint,options.redPoint);
		
		if (radDist.length){
			radDist.unbind('change.skmap').bind('change.skmap',function(){				
				
					zoomLev[0].selectedIndex = this.selectedIndex;
					initialize(options.centerPoint,options.bluePoint,options.redPoint);
				
			});
		}
		if (zoomLev.length){
			zoomLev.unbind('change.skmap').bind('change.skmap',function(){
				initialize(options.centerPoint,options.bluePoint,options.redPoint);				
			});
		}
	});
};
 
$.fn.initGoogleMap = function(options) {
		var defaults = {	
			showZoom: 17
		};
		var options = $.extend(defaults, options);
		return this.each(function() {
			var pGeofindPanel = $('#pGeofindPanel');
			// var pInfo = $('#pInfoMarker');
			if (!pGeofindPanel.length) return;
			
			var radiusSelect = $('#slRadius');
			var zoomSelect = $('#slMapZoom');
			var lstContainer = pGeofindPanel.find('.lstContainer');			
			var visitid = pGeofindPanel.find('.visitid');
			var unitAddress = pGeofindPanel.find('.unitAddress');
			
			if (lstContainer.length && lstContainer.children().length){
				lstContainer.html('');
			}
			var frmExport = pGeofindPanel.find('#frmExport');
			if (frmExport.length){
				var btnExportToExel = frmExport.find('.btnExportToExel');
				btnExportToExel.unbind('click.exportToExel').bind('click.exportToExel',function(e){
					e.preventDefault();
					frmExport.submit();
				});
			}
			var myLatlng,map,curMarker,markers = [];
			
			if (!radiusSelect.length || !zoomSelect.length){
				return;
			}		
			
			/* var SingleElementOverlay = function(options, overlayedObject, point) {
				this.setValues(options);
				this.div_ = overlayedObject;
				this.div_point_ = point;				
			},
			displayPoint = function(map,objectDiv,cMarker){									
				new SingleElementOverlay( { map: map }, objectDiv, cMarker.getPosition() );					
			}; */
			
			function clearMarker(){
				if (markers.length > 0){
					for(var i=0; i<markers.length; i++){			
						markers[i].setMap(null);			
					}
					markers.length = 0;
				}
			};
			
			function initialize(vnposition,arrPoint) {
				if (!vnposition) return;
				if (markers.length > 0){
					clearMarker();			
				}				
				var mapDiv = document.getElementById('mapView');
				var zoom = parseInt(zoomSelect.val());					
				var myLatlon = new google.maps.LatLng(vnposition.lat, vnposition.lng);				
				
				map = new google.maps.Map(mapDiv, {
					center: myLatlon,
					scrollwheel: false,
					zoom:Number(zoom),
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					navigationControl: true,
					navigationControlOptions: {
						style: google.maps.NavigationControlStyle.LARGE
					},
					zoom_changed: function(){					
						zoomSelect.val(map.getZoom());
						/* if (curMarker){
							displayPoint(map,pInfo[0],curMarker);						
						} */
					}
				});
				var marker = new google.maps.Marker({
					position: myLatlon,
					map: map,
					icon:'../images/ico_pos_blue.png'
				});
				
				markers.push(marker);
				if (arrPoint){
					google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
						addMarkers(vnposition,arrPoint);
					});				
				}
				
				var radDist = parseInt(radiusSelect.val());			
				var circle = new google.maps.Circle({
					center: new google.maps.LatLng(vnposition.lat, vnposition.lng),
					map: map,
					radius: Number(radDist * 1000),
					fillColor: 'green',
					strokeColor: '#ffffff',
					strokeWeight: 1
				});	 
				
				/* SingleElementOverlay.prototype = new google.maps.OverlayView();			
				SingleElementOverlay.prototype.onAdd = function() {
					var pane = this.getPanes().floatPane;						
					pane.appendChild(this.div_);   				
					
					this.div_.style.display = 'block';
					this.div_.style.visibility = 'visible';
					
					var offHeight = this.div_.offsetHeight;
					var offWidth = this.div_.offsetWidth;
					
					var curOffset = this.getProjection().fromLatLngToDivPixel(this.div_point_);

					this.div_.style.position = 'absolute';
					this.div_.style.top = (Math.floor(curOffset.y) - offHeight - 49) + 'px';					
					this.div_.style.left = Math.floor(curOffset.x - 26) + 'px';
					
					pInfo = $(this.div_);
					
					var btnClose = pInfo.find('.btnClose');
					btnClose.unbind('click.closePopup').bind('click.closePopup',function(e){
						e.preventDefault();
						pInfo.css({
							display:'none'
						});
					});
				};
				SingleElementOverlay.prototype.onRemove = function() {
					this.div_.parentNode.removeChild(this.div_);
					this.div_ = null;
				};
				SingleElementOverlay.prototype.draw = function() {}; */
				
				// google.maps.event.addListener(map, 'zoom_changed', function() {
					// if (curMarker){
						// displayPoint(map,pInfo[0],curMarker);						
					// }
				// });
				/* google.maps.event.addListener(marker, 'click', function() {
					var address = vnposition.address,
						visitid = vnposition.visitid,
						unit = vnposition.unit,
						phone = vnposition.phone,
						rating = vnposition.rating;
						
					initPopupInfo(true,visitid,unit,address,phone,rating);
					displayPoint(map,pInfo[0],marker);
					curMarker = marker;
				});	 */			
			};
			
			function addMarkers(vnposition,arrPoint) {
				var bounds = map.getBounds();
				var southWest = bounds.getSouthWest();
				var northEast = bounds.getNorthEast();
				var lngSpan = northEast.lng() - southWest.lng();
				var latSpan = northEast.lat() - southWest.lat();

				function createMarker(map, position, dist,pInfos) {
					var marker = new google.maps.Marker({
						position: position,
						map: map,
						icon:'../images/ico_pos_red.png'
					});
					
					markers.push(marker);					
					initAddToMyPickList(pInfos);
					// google.maps.event.addListener(marker, 'click', function() {	
						// var name = pInfos.name,							
							// address = pInfos.address,
							// phone = pInfos.phone,
							// rating = pInfos.rating,
							// city = pInfos.city,
							// zip = pInfos.zip;							
							
						// initPopupInfo(false,null,name,address,phone,rating,dist,city,zip,marker);
						// displayPoint(map,pInfo[0],marker);
						// curMarker = marker;
					// });
				}				
				lstContainer.html('');
				frmExport.find('input[type=hidden]').remove();
				for (var i = 0; i < arrPoint.length; i++) {
					var latLng = new google.maps.LatLng(arrPoint[i].lat, arrPoint[i].lng);				
									
					var p1 = new LatLon(Geo.parseDMS(vnposition.lat), Geo.parseDMS(vnposition.lng));
					var p2 = new LatLon(Geo.parseDMS(arrPoint[i].lat), Geo.parseDMS(arrPoint[i].lng));
					var dist = p1.distanceTo(p2);
					var radDist = parseInt(document.getElementById('slRadius').value);								
					if(dist < radDist){						
						createMarker(map, latLng, dist,arrPoint[i]);
					}
				}			
			}
			
			function initAddToMyPickList(pInfos){
				// if (btnAdd.length){
					// btnAdd.unbind('click.addToList').bind('click.addToList',function(e){
						// var ktrig = $(this);
						
						// var kParent = ktrig.closest('.centerLayer');
						// if (kParent.length){
							// var sName = kParent.find('input[name=sName]'),
								// sAddress = kParent.find('input[name=sAddress]'),
								// sPhone = kParent.find('input[name=sPhone]'),
								// sRating = kParent.find('input[name=sRating]'),
								// sCity = kParent.find('input[name=sCity]'),
								// sZip = kParent.find('input[name=sZip]');

							var sName = pInfos.name,							
								sAddress = pInfos.address,
								sPhone = pInfos.phone,
								sRating = pInfos.rating,
								sCity = pInfos.city,
								sZip = pInfos.zip;	
								
							var kInfo = '<ul class="listGrid ">'+
											'<li class="cell01">' + sName + '</li>' +
											'<li class="cell02">' + sAddress + '</li>'+
											'<li class="cell03">' + sZip + '</li>'+
											'<li class="cell04">' + sCity + '</li>'+
											'<li class="cell05">' + sPhone + '</li>'+
										'</ul>';
							var addToExel = '<input type="hidden" name="kName[]" value="'+ sName +'" />'+
											'<input type="hidden" name="kAddress[]" value="'+ sAddress +'" />'+
											'<input type="hidden" name="kPhone[]" value="'+ sPhone +'" />'+
											'<input type="hidden" name="kRating[]" value="'+ sRating +'" />'+
											'<input type="hidden" name="kCity[]" value="'+ sCity +'" />'+
											'<input type="hidden" name="kZip[]" value="'+ sZip +'" />';
							// if (lstContainer.html().indexOf(kInfo) == -1){
								lstContainer.append($(kInfo));
								if (frmExport.length){
									frmExport.append($(addToExel));
								}
							// }
						// }													
						// return false;
					// });
				// }
			}
			
			/* function initPopupInfo(center,visitid,sName,sAddress,sPhone,sRating,sDistance,sCity,sZip,marker){
				if (center){
					var pInfoIn = $('<h5><img class="uiIcon initIcon-38" alt="New Contact" src="../images/dummy.gif"/>Visit ID: ' + visitid +'</h5>'+
					   '<dl class="odd">'+
						'<dt>Unit:</dt>'+
							'<dd class="sName">' + sName + '</dd>'+
					   '</dl>' +
					   '<dl class="even">'+
						'<dt>Address:</dt>'+
							'<dd class="sAddress">' + sAddress + '</dd>'+
					   '</dl>' +
					   '<dl class="odd">'+
						'<dt>Phone:</dt>'+
							'<dd class="sPhone">' + sPhone + '</dd>'+
					   '</dl>' +
					   '<dl class="even">'+
						'<dt>Rating:</dt>'+
							'<dd class="sRating"> ' + sRating + '</dd>'+
					   '</dl>'				
					);
				}else{
					var pInfoIn = $('<input type="hidden" name="sName" value="'+ sName +'" />'+
						'<input type="hidden" name="sAddress" value="'+ sAddress +'" />'+
						'<input type="hidden" name="sPhone" value="'+ sPhone +'" />'+
						'<input type="hidden" name="sRating" value="'+ sRating +'" />'+
						'<input type="hidden" name="sCity" value="'+ sCity +'" />'+
						'<input type="hidden" name="sZip" value="'+ sZip +'" />'+
						'<h5><img class="uiIcon initIcon-38" alt="New Contact" src="../images/dummy.gif"/>Interviewer</h5>'+
					   '<dl class="odd">'+
						'<dt>Name:</dt>'+
							'<dd class="sName">' + sName + '</dd>'+
					   '</dl>' +
					   '<dl class="even">'+
						'<dt>Address:</dt>'+
							'<dd class="sAddress">' + sAddress + '</dd>'+
					   '</dl>' +
					   '<dl class="odd">'+
						'<dt>Phone:</dt>'+
							'<dd class="sPhone">' + sPhone + '</dd>'+
					   '</dl>' +
					   '<dl class="even">'+
						'<dt>Rating:</dt>'+
							'<dd class="sRating"> ' + sRating + '</dd>'+
					   '</dl>' +
						((sDistance != null) ? ('<dl class="odd"><dt>Distance:</dt><dd class="sDistance">' + sDistance + '</dd></dl>') : '') +
						'<ul class="lstNavType02"><li><a class="btnAdd add" href="javascript:void(0);"><img class="uiIcon initIcon-25" alt="New Contact" src="../images/dummy.gif"/>Add to my pick list</a></li></ul>'
					);
				}
				pInfo.find('.centerLayer').html(pInfoIn);
				var btnAdd = pInfo.find('.btnAdd');
				initAddToMyPickList(btnAdd,marker);
			};			 */
			
			var btnFind = $('.btnGeofind');			
			btnFind.unbind('click.showmap').bind('click.showmap',function(e){
				e.preventDefault();
				var visitedIds = [], roundIds = [];
				var checkedChks = $('.horScrollBar').find('input[type="checkbox"]:checked');
				for(var i = 0 ; i < checkedChks.length ; i++){
					var visitID = $(checkedChks[i]).parent().parent().find('.VisitID').val();
					var roundID = $(checkedChks[i]).parent().parent().find('.RoundID').val();
					visitedIds.push(visitID);
					roundIds.push(roundID);
				}
				$.ajax({
					url: $(this).attr('href'),
					type: 'POST',
					data: {
						'visitids': visitedIds.join(','),
						'roundids': roundIds.join(',')
					},
					beforeSend:function(){
					
					},
					success: function(resp){
						var obj = jQuery.parseJSON(resp);
						var status = obj.status;
						var message = obj.message;
						var blue = obj.blue;
						var red = obj.red;
						if (lstContainer.length && lstContainer.children().length){
							lstContainer.html('');
						}
						if(status == 0){
							var btnOK = $('#pCheckRemovePanel').find('.btnRemove');
							$('#pCheckRemovePanel').find('.innerContent').html(message);
							showPopupLayer('#pCheckRemovePanel', '');
							btnOK.unbind('click').bind('click',function(e){
								e.preventDefault();
								$('#pCheckRemovePanel').find('.btnClose').trigger('click');
							});
						}
						else if(status == 1){
							$('#slRadius').find('option').eq(1).attr('selected','selected');
							$('#slMapZoom').find('option').eq(1).attr('selected','selected');
							initialize(blue,red);							
							visitid.text('Visit id: ' + blue.visitid);
							unitAddress.text('Unit adress: ' + blue.address);
							showPopupLayer('#pGeofindPanel', '',function(){
								clearMarker();
								btnResetView.trigger('click.gm');
							});
							radiusSelect.unbind('change.initG').bind('change.initG',function(){
								zoomSelect[0].selectedIndex = this.selectedIndex;
								initialize(blue,red);
							});
							zoomSelect.unbind('change.initG').bind('change.initG',function(){
								initialize(blue,red);
							});
							
							var btnResetView = $('#pGeofindPanel .btnResetView');
							btnResetView.unbind('click.gm').bind('click.gm',function(e){
								if(e) e.preventDefault();
								$('#slRadius').find('option').eq(1).attr('selected','selected');
								$('#slMapZoom').find('option').eq(1).attr('selected','selected');
								initialize(blue,red);
							});
						}
					}
				});
			});
		});
	}; 

function initMapInterviewer(){
	var mapInterviewer = $('#mapInterviewer');	
	if (!mapInterviewer.length){return;}	
	
	var radDist = $('#radDist');
	var zoomLev = $('#zoomLev');
	if (!radDist.length || !zoomLev.length) {return;}
	
	var cpoint = point;
	var bpoint = blue;
	var rpoint = red;
	if (cpoint == null) {return;}
	
	mapInterviewer.kMap({
		centerPoint:cpoint,
		bluePoint:bpoint,
		redPoint:rpoint,
		radDist:radDist,
		zoomLev:zoomLev
	});
};
	
$(document).ready(function(){
	
	showAlertForm.init();
	$.fn.initForm();
	$.fn.initCustomElement();
	$.fn.initFuncFooter();
	$.fn.initFarbtastic();
	$.fn.initDatePicker();	
	$.fn.initElements();
	
	$('#textSearch').initSearch({
		initText: L10N.init.keyword,
		classText: 'wthSelcType2'
	});
	$('#txtSearch').initSearch({
		initText: L10N.init.keyword,
		classText: 'wthSelcType2'
	});
	$('#txtEditgroup').initSearch({
		initText: L10N.init.continent,
		classText: 'wthSelcType5'
	});
	$('#slHours').initSearch({
		initText: L10N.init.hours,
		classText: 'slHours'
	});
	$('#txtEmailForgot').initSearch({
		initText: L10N.init.email,
		classText: 'inputtype03'
	});
	if(typeof(strAjaxLoadList)!='undefined'){
		eval(strAjaxLoadList);
	}
	$('#txtBOD').datepicker({ changeMonth: true, changeYear: true, yearRange: '1900:2011', dateFormat: 'dd/mm/yy' });
	
	$('#FormEditVisit #txtEarlyPopup').datepicker({ dateFormat: 'dd/mm/yy' });
	$('#FormEditVisit .calEarly').unbind('click').bind('click',function(e){
		if(e) e.preventDefault();
		$('#FormEditVisit #txtEarlyPopup').datepicker('show');
	});
	
	$('#txtFrmDate1').datepicker({ dateFormat: 'dd/mm/yy' });
	$('#txtFrmDate1').next().unbind('click').bind('click',function(e){
		if(e) e.preventDefault();
		$('#txtFrmDate1').datepicker('show');
	});
	
	$('#txtToDate1').datepicker({ dateFormat: 'dd/mm/yy' });
	$('#txtToDate1').next().unbind('click').bind('click',function(e){
		if(e) e.preventDefault();
		$('#txtToDate1').datepicker('show');
	});
	
	$('#txtFrmDate2').datepicker({ dateFormat: 'dd/mm/yy' });
	$('#txtFrmDate2').next().unbind('click').bind('click',function(e){
		if(e) e.preventDefault();
		$('#txtFrmDate2').datepicker('show');
	});
	
	$('#txtToDate2').datepicker({ dateFormat: 'dd/mm/yy' });
	$('#txtToDate2').next().unbind('click').bind('click',function(e){
		if(e) e.preventDefault();
		$('#txtToDate2').datepicker('show');
	});
	
	$('#lstSurveyTemplateCont .lstPagging').jPaging();
	$('#mapView').initGoogleMap({});
	$('.question').initLayer();
	$('#typeID').setSelectType();
	
	initMapInterviewer();
	
});


