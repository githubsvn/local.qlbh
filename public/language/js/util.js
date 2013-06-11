/************************************************************************************/
/*********************************** Main Function **********************************/
/************************************************************************************/

/**
 * @class: Util
 * @description: Defines Util functions
 * @version: 1.0
 **/
 
(function($){
	
	$.fn.divAlign = function(options){
		if($('.errorMsg').length){
			$('.errorMsg').css({
				'position': 'fixed',
				'top': ($(window).height() - $('.errorMsg').height()) / 2,
				'left': ($(window).width() - $('.errorMsg').width()) / 2
			});
			
			$(window).resize(function(){
				$('.errorMsg').css({
					'position': 'fixed',
					'top': ($(window).height() -  $('.errorMsg').height()) / 2,
					'left': ($(window).width() -  $('.errorMsg').width()) / 2	
				});
			});
			$('.errorMsg').find('.btnClose').unbind('click').bind('click',function(e){
				if(e) e.preventDefault();
				$('.errorMsg').css({
					'top': -10000,
					'left': -10000
				});
				$(window).unbind('resize');
			});
		}
		
	};
	$.fn.setSelectType = function(options){
		var defaults = {
		};
		var options = $.extend(defaults, options);
		var that = $(this);
		var selectOpt = $('#slcType');
		selectOpt.attr('value',that.val());
	};
	
	$.fn.initLayer = function(options){
		var defaults = {
		};
		var options = $.extend(defaults, options);
		return this.each(function(){
			var that = $(this);
			var questionPopup = $('#pInfoMarker');
			that.unbind('mouseenter').bind('mouseenter',function(e){
				if(e) e.preventDefault();
				var questionEl = $(this);
				var offset = questionEl.offset();
				var spanText = questionEl.find('span').text();
				questionPopup.find('.centerLayer').html(spanText);
				questionPopup.css({
					'top': offset.top - questionPopup.height() - 15,
					'left': offset.left - 20
				});
			});
			that.unbind('mouseleave').bind('mouseleave',function(e){
				if(e) e.preventDefault();
				questionPopup.css({
					'top': -10000,
					'left': -10000
				});
			});
		});
	};
	$.fn.initAccordion = function(options){
		var defaults = {
			speed: 300
		};
		var options = $.extend(defaults,options);
		return this.each(function(){
			var that = $(this);
			var current = 0;
			that.vars = {
				titleCollapse: null,
				contentCollapse: null
			};
			that.vars.titleCollapse = that.find('.hightlightMain');
			that.vars.contentCollapse = that.find('.wrapContent');
			that.vars.contentCollapse.css('min-height',0);
			that.vars.contentCollapse.find('.content').css('min-height',0);
			that.vars.titleCollapse.each(function(index){
				var title = $(this);
				title.unbind('click').bind('click',function(e){
					title.next().slideToggle(options.speed);
				});
			});
		});
	};
	
	$.fn.jPaging = function(options){
		var that = $(this);
		var pageItems = that.find('li a');
		pageItems.each(function(index){
			var pageItem = $(this);
			if(pageItem.hasClass('active')){
				if(index == 1){
					pageItems.eq(0).find('img').css('opacity',0.5);
				}
				else if(index == pageItems.length-2){
					pageItems.eq(pageItems.length-1).find('img').css('opacity',0.5);
				}
				else{
					pageItems.eq(0).find('img').css('opacity',1);
					pageItems.eq(pageItems.length-1).find('img').css('opacity',1);
				}
			}
		});
	};
	$.fn.initSearch = function(options){
		var defaults = {
			initText: L10N.init.addValue,
			classText: 'cell16'
		};
		options = $.extend(defaults,options);
		var that = $(this);
		that.unbind('click').bind('click',function(){
			var textbox = $(this);
			if(textbox.attr('value') == options.initText){
				textbox.attr('value', "");
			}
		});
		$(document).click(function(e){
			if(!$(e.target).hasClass(options.classText) && that.attr('value') == ""){
				that.attr('value', options.initText);
			}
		});
	};
	$.fn.initFormAddLang = function(){
		var strId = 'frmAddLang';
		var elements = [{
			field: 'country_lang',
			valid: 'required',
			messages: L10N.required.language
		}];
		jValidateForm(strId, elements, {
			type: 'layer',
			customError: '#frmLogin .txtRed'
		});
	};
	$.fn.initFormImportLang = function(){
		var strId = 'frmImportLang';
		var elements = [{
			field: 'fileUpload',
			valid: 'required',
			messages: L10N.required.fileUpload
		}];
		jValidateForm(strId, elements, {
			type: 'layer',
			customError: '#frmLogin .txtRed'
		});
	};
	$.fn.initForm = function(){
		$.fn.initFormAddLang();	
		$.fn.initFormImportLang();
	};
	
	$.fn.initCustomElement = function(){
		jCustomRadiobox();
		jCustomCheckbox();
		jSelectItemMove('.blockTagCenter');	
	};

	$.fn.initFarbtastic = function(){
		 if($('#pickupColor .colorCont').length > 0){						
			//init color pick
			ServiceMide.fbColor = $.farbtastic('#pickupColor .colorCont', function(color){
				ServiceMide.fbColor.valColor = color;
			});
			$('#pickupColor .btnOK').unbind('click').bind('click', function(e){
				e.preventDefault();
				if(ServiceMide.fbColor.icoColor && ServiceMide.fbColor.icoColor.hasClass('initColorIcon')){
					ServiceMide.fbColor.elColor.val(ServiceMide.fbColor.valColor);
					ServiceMide.fbColor.icoColor.parent().next().css('background-color', ServiceMide.fbColor.valColor);
				}
				hideLayer('#pickupColor');
			});
		}
		
		//icon to show
		if($('.initColorIcon').length > 0){			
			$('.initColorIcon').each(function(pos, icon){
				if($(icon).hasClass('colorsettings')){
					return;
				}
				$(icon).unbind('click').bind('click', function(e){
					e.preventDefault();
					showPopupLayer('#pickupColor');
					ServiceMide.fbColor.elColor = $(this).parent().prev();
					ServiceMide.fbColor.icoColor = $(this);
				});
			});
		} 
	};
	
	$.fn.initDatePicker = function(){
		var dp = $('.date-pick');		
		if(dp.length > 0){
			$('.date-pick').datePicker({
				startDate: '1/1/1950',
				closeOnSelect  : true			
			});
		}
	};
	
	
	
	$.fn.initElements = function(){
		initLanguageManager();
		initLanguageAdmin();
	};

})(jQuery);

function initLanguageManager(){
	var btnAddnew = $('.btnAddnew');
	btnAddnew.unbind('click').bind('click',function(e){
		if(e) e.preventDefault();
		showPopupLayer('#addLabel');
	});
}
function initLanguageAdmin(){
	var btnAddLanguage = $('.addLanguage');
	var btnImport = $('.import');
	btnAddLanguage.unbind('click').bind('click',function(e){
		if(e) e.preventDefault();
		var frm = $('#frmAddLang');
		var btnCancel = frm.find('.btnCancel');
		showPopupLayer('#pAddLanguage');
		btnCancel.unbind('click').bind('click',function(e){
			if(e) e.preventDefault();
			$('#pAddLanguage').find('.btnClose').trigger('click');
		});
	});
	btnImport.unbind('click').bind('click',function(e){
		if(e) e.preventDefault();
		var btnImp = $(this);
		$('#importLanguage').find('#id').val(btnImp.attr('rel'));
		showPopupLayer('#importLanguage');
	});
}
$.fn.initFuncFooter = function(){
	getWidthHeightScreen = function(){
		var windowWidth, windowHeight;
		if (self.innerHeight) {	// all except Explorer
			windowWidth = self.innerWidth;
			windowHeight = self.innerHeight;
		} else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
			windowWidth = document.documentElement.clientWidth;
			windowHeight = document.documentElement.clientHeight;
		} else if (document.body) { // other Explorers
			windowWidth = document.body.clientWidth;
			windowHeight = document.body.clientHeight;
		}
		var arr = new Array();
		arr[0] = windowWidth;
		arr[1] = windowHeight;
		return arr;
	}
	
	var arrScreen = getWidthHeightScreen();
	var theHeightFooter = arrScreen[1] - ($('#header').height() + $('#main').height() + $('#footer').css('padding-bottom') + 61 );
	if(theHeightFooter < 35 ) {
		$('#footer').css('height', 'auto');
	} else {	
		$('#footer').css('height', theHeightFooter);
	}	
	$(window).bind('resize' , function() {
		var arrScreen = getWidthHeightScreen();
		var theHeightFooter = arrScreen[1] - ($('#header').height() + $('#main').height() + $('footer').css('padding-bottom') + 61 );
		if(theHeightFooter < 35 ) {
			$('#footer').css('height', 'auto');
		} else {	
			$('#footer').css('height', theHeightFooter);
		}
	});
};
/**
 * Validate Form
 * @param {string} id
 * @param {object} object 
 */
function jValidateForm(id, elements, erConfig){
	var frmObj = $('#' + id);	
	if(frmObj.length > 0){
		//initialize
		if(typeof(erConfig) == 'undefined'){
			var errorConfig = {
				type: 'layer',	//3 type: layer or showhide or multierror
				customError: 'alertForm' + id
			}
			var erLayer = $('<div id="'+ errorConfig.customError +'"><p class="message"></p></div>').appendTo($(document.body));			
			//create layer
			erLayer.find('.message').css({
				'font-size': '11px',
				'padding': 0
			});
			erLayer.css({
				'padding':  '3px 10px',
				'background': '#e10061',
				'color': '#ffffff',
				'height': 'auto',
				'position': 'absolute',
				'top': -15000,
				'z-index': 2000
			});
			frmObj.data('alertForm', erLayer);
		}else{
			var errorConfig = erConfig;
			var erLayer = $(errorConfig.customError);
		}
		var showErrorTimeout = null;
		
		//init elements
		function initFormElements(els){
			for(var i=0; i<els.length; i++){												
				var elObj = frmObj.find('[name="'+ els[i].field +'"]');
				if(!elObj.length){
					elObj = frmObj.find('.'+ els[i].field);
				}
				if(elObj.length > 0 && !elObj.parent().hasClass('hidden')){
					elObj.data('initVal', els[i].init);				
					if(typeof(els[i].init)!='undefined' && els[i].init != ''){
						elObj.val(els[i].init);
						elObj.unbind('focus').bind('focus', function(e){
							var _this = $(this);
							if($.trim(_this.val()) == _this.data('initVal')){
								_this.val('');
							}
						});
						elObj.unbind('blur').bind('blur', function(e){
							var _this = $(this);
							if($.trim(_this.val()) == ''){
								_this.val(_this.data('initVal'));
							}
						});
					}
				}
			}
		}		
		initFormElements(elements);
		
		//add event
		frmObj.unbind('submit').bind('submit', function(e){
			//reset error
			$(errorConfig.customError).addClass('hidden');
			//valid error
			var errorObj = validElements(elements);
			if(errorObj.length > 0){				
				if(errorConfig.type == 'layer'){
					
					showLayer(errorObj[0].element, errorObj[0].message);				
				}else if(errorConfig.type == 'showhide'){
					
					showHideError(errorObj[0].element, errorObj[0].message);
				}else{
					
					showElementError(errorObj[0].element, errorObj[0].message, errorObj[0].errEl);
				}
				return false;
			}else{
				$(errorConfig.customError).addClass('hidden');				
				if(typeof(errorConfig.onSubmit)!='undefined'){
					e.preventDefault();					
					e.stopPropagation();
					errorConfig.onSubmit();					
				}
			}
			
		});
		//add event submit
		if(frmObj.find('.btnSubmit').length > 0){
			frmObj.find('.btnSubmit').unbind('click').bind('click', function(e){ 
				e.preventDefault();
				frmObj.data('dirty', 0);
				frmObj.trigger('submit');
			});
			
			$(document).unbind('keydown').bind('keydown', function(e){
				var keyCode = e.keyCode;
				if(keyCode == 13){
					frmObj.trigger('submit');
				}
			});
		}

		function validElements(els){
			var errorEl = [];
			for(var i=0; i<els.length; i++){				
				var elObj = frmObj.find('[name="'+ els[i].field +'"]');
				if(!elObj.length){
					elObj = frmObj.find('.'+ els[i].field);
				}
				if(!elObj.length){
					elObj = frmObj.find('#'+ els[i].field);
				}				
				if(elObj.length > 0 && !elObj.parent().hasClass('hidden')){			
					var msgpos = isValidElement(els[i]);
					var msg = els[i].messages.split('|');
					var err = frmObj.find(errorConfig.customError)[i];
					
					if(msgpos != -1){	//error					
						if(errorConfig.type == 'multierror'){
							errorEl.push({
								'element': els[i].field, 
								'message': msg[msgpos],
								'errEl': $(err)
							});

						}else{
							errorEl.push({
								'element': els[i].field, 
								'message': msg[msgpos]
							});
						}
						break;
					}
				}
			}			
			return errorEl;
		}
		function isValidElement(el){				
			var pos_error = -1;
			var elObj = frmObj.find('[name="'+ el.field +'"]');
			if(!elObj.length){
				elObj = frmObj.find('.'+ el.field);
			}
			var startDate = frmObj.find('*[name=txtStartdate]');
			var endDate = frmObj.find('*[name=txtEnddate]');
			var deadline = frmObj.find('*[name=txtDeadline]');
			var commSurvey1 = frmObj.find('#txtComment5');
			var amountSurvey1 = frmObj.find('#txtDDK5');
			var commSurvey2 = frmObj.find('#txtComment6');
			var amountSurvey2 = frmObj.find('#txtDDK6');
			var visit_start_date = frmObj.find('#visit_start_date').html();
			var visit_end_date = frmObj.find('#visit_end_date').html();
			var reNumber = /^([0-1][0-9]|[2]?[0-3])[,.]?([0-5]?[0-9])?$/;
			
			var valid = el.valid.split('|');
			for(i=0; i<valid.length; i++){
				if(valid[i] == 'required'){
					if(isBlank(jQuery.trim(elObj.val())) || jQuery.trim(elObj.val()) == L10N.init.continent){
						pos_error = i;
						break;
					}
				}
				if(valid[i] == 'email'){
					if(jQuery.trim(elObj.val()) != '' && !isEmail(jQuery.trim(elObj.val()))){
						pos_error = i;
						break;
					}
				}
				if(valid[i] == 'number'){
					if(jQuery.trim(elObj.val()) != '' && !isNumber(jQuery.trim(elObj.val()))){
						pos_error = i;
						break;
					}
				}
				if(valid[i] == 'uploadExcel'){
					if(!isUploadExcel(jQuery.trim(elObj.val()))){
						pos_error = i;
						break;
					}
				}
				if(valid[i] == 'hour'){
					if(jQuery.trim(elObj.val()) !=  L10N.init.hours && !isHour(jQuery.trim(elObj.val()))){
						pos_error = i;
						break;
					}
				}
				if(valid[i] == 'validHour'){
					if(parseFloat(elObj.val()) <= 0 || parseFloat(elObj.val()) >= 24){
						pos_error = i;
						break;
					}
				}
				if(valid[i] == 'numset'){
					if(parseFloat(elObj.val()) < 0 || !reNumber.test(jQuery.trim(elObj.val()))){
						pos_error = i;
						break;
					}
				}
				if(valid[i] == 'name'){
					if(!isSpecialCharacter(jQuery.trim(elObj.val()))){
						pos_error = i;
						break;
					}
				}
				if(valid[i] == 'url'){
					if(!isUrl(jQuery.trim(elObj.val()))){
						pos_error = i;
						break;
					}
				}
				if(valid[i] == 'date'){
					if(jQuery.trim(startDate.val()) != '' && jQuery.trim(endDate.val()) != ''){
						if(!isValidDate(jQuery.trim(startDate.val()),jQuery.trim(endDate.val()))){
							pos_error = i;
							break;
						}
					}
				}
				if(valid[i] == 'date1'){
					if(jQuery.trim(startDate.val()) != '' && jQuery.trim(deadline.val()) != ''){
						if(!isValidDate(jQuery.trim(startDate.val()),jQuery.trim(deadline.val()))){
							pos_error = i;
							break;
						}
					}
				}
				if(valid[i] == 'dateE'){
					if(jQuery.trim(startDate.val()) != '' && jQuery.trim(endDate.val()) != ''){
						if(!isValidDateE(jQuery.trim(startDate.val()),jQuery.trim(endDate.val()))){
							pos_error = i;
							break;
						}
					}
				}
				if(valid[i] == 'birthday'){
					if(jQuery.trim(elObj.val()) != ''){
						if(!isValidDateBirthday(jQuery.trim(elObj.val()))){
							pos_error = i;
							break;
						}
					}
				}
				if(valid[i] == 'book'){
					if(jQuery.trim(elObj.val()) != ''){
						if(!isValidDateBook(visit_start_date,visit_end_date,jQuery.trim(elObj.val()))){
							pos_error = i;
							break;
						}
					}
				}
				if(valid[i] == 'surveycomm1'){
					if(jQuery.trim(elObj.val()) == '' && !isValidateSurveyComm(jQuery.trim(elObj.val()),jQuery.trim(amountSurvey1.val()))){
						pos_error = i;						
						break;
					}
				}
				if(valid[i] == 'surveycomm2'){
					if(jQuery.trim(elObj.val()) == '' && !isValidateSurveyComm(jQuery.trim(commSurvey1.val()),jQuery.trim(elObj.val()))){
						pos_error = i;						
						break;
					}
				}
				if(valid[i] == 'surveycomm3'){
					if(jQuery.trim(elObj.val()) == '' && !isValidateSurveyComm(jQuery.trim(elObj.val()),jQuery.trim(amountSurvey2.val()))){
						pos_error = i;
						break;
					}
				}
				if(valid[i] == 'surveycomm4'){
					if(jQuery.trim(elObj.val()) == '' && !isValidateSurveyComm(jQuery.trim(commSurvey2.val()),jQuery.trim(elObj.val()))){
						pos_error = i;
						break;
					}
				}
			}
			return pos_error;
		}
		function isValidateSurveyComm(commSurvey,amountSurvey){
			if((commSurvey != '' && amountSurvey == '') || (commSurvey == '' && amountSurvey != '')) return false;
			else return true;
		}
		function isValidDateBirthday(birtday){
			var DateArr = birtday.split('/'),
				CurrentDate = new Date(),
				monthCurr = CurrentDate.getMonth() + 1,
				dayCurr = CurrentDate.getDate(),
				yearCurr = CurrentDate.getFullYear(),
				day = DateArr[0],
				month = DateArr[1],
				year = DateArr[2];
			if(parseInt(year) < parseInt(yearCurr)){
				return true;
			}			
			if(parseInt(year) == parseInt(yearCurr)){
				if(month < monthCurr){
					return true;
				}
				else if(month == monthCurr){
					if(day < dayCurr){
						return true;
					}
					else{
						return false;
					}
				}
				else{
					return false;
				}
			}
			else if (parseInt(year) > parseInt(yearCurr)){
				return false;
			}
		}
		function isValidDateBook(startDate,endDate,bookDate){
			var SDateArr = startDate.split('.'),
				Sday = SDateArr[0],
				Smonth = SDateArr[1],
				Syear = SDateArr[2];
			var EDateArr = endDate.split('.'),
				Eday = EDateArr[0],
				Emonth = EDateArr[1],
				Eyear = EDateArr[2];
			var bookDate = bookDate.split('/'),
				Bday = bookDate[0],
				Bmonth = bookDate[1],
				Byear = bookDate[2];
			
			if(parseInt(Byear) <= parseInt(Eyear) && parseInt(Byear) >= parseInt(Syear)){ 
				if(Bmonth <= Emonth){
					if(Bmonth > Smonth){
						if(Bday > Sday && Bday < Eday){
							return true;
						}
						else{
							return false;
						}
					}
					else if(Bmonth == Smonth){
						if(Bday > Sday){
							return true;
						}
						else{
							return false;
						}
					}
				}
				else{
					return false;
				}
			}
			else{
				return false;
			}
		}
		function isValidDate(startDate,endDate){
			var SDateArr = startDate.split('/'),
				Sday = SDateArr[0],
				Smonth = SDateArr[1],
				Syear = SDateArr[2];
			var EDateArr = endDate.split('/'),
				Eday = EDateArr[0],
				Emonth = EDateArr[1],
				Eyear = EDateArr[2];

			if(parseInt(Syear) < parseInt(Eyear)){
				return true;
			}			
			if(parseInt(Syear) == parseInt(Eyear)){
				if(Smonth < Emonth){
					return true;
				}
				else if(Smonth == Emonth){
					if(Sday < Eday){
						return true;
					}
					else{
						return false;
					}
				}
				else{
					return false;
				}
			}
			else if (parseInt(Syear) > parseInt(Eyear)){
				return false;
			}
		};
		function isValidDateE(startDate,endDate){
			var SDateArr = startDate.split(/[\/-]/),
				Sday = parseInt(SDateArr[0]),
				Smonth = parseInt(SDateArr[1]),
				Syear = parseInt(SDateArr[2]);
			var EDateArr = endDate.split(/[\/-]/),
				Eday = parseInt(EDateArr[0]),
				Emonth = parseInt(EDateArr[1]),
				Eyear = parseInt(EDateArr[2]);
			if(parseInt(Syear) < parseInt(Eyear)){
				return true;
			}			
			if(parseInt(Syear) == parseInt(Eyear)){
				if(Smonth < Emonth){
					return true;
				}
				else if(Smonth == Emonth){
					if(Sday <= Eday){
						return true;
					}
					else{
						return false;
					}
				}
				else{
					return false;
				}
			}
			else if (parseInt(Syear) > parseInt(Eyear)){
				return false;
			}
		};
		function isBlank(value){
			if(value == '' || value == '0' || value == L10N.init.hours ||  value == L10N.init.des || value == L10N.init.email || value == L10N.init.keyword)return true;
		};
		function isUploadExcel(value){
			var ext = value.substring(value.lastIndexOf('.') + 1).toLowerCase(),
				allowExt = ['xlsx', 'xls'];
				
			for(var i = 0, len = allowExt.length; i < len; i++){
				if(ext == allowExt[i]){
					return true;
				}
				else return false;
			}
		}
		function isEmail(value){
			var re = new RegExp("^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]{2,4}$");
			return (value.search(re) != -1);
		}
		function isSpecialCharacter(value){
			var re = /^[a-z0-9 ._-]+$/i;
			return re.test(value);
		}
		function isNumber(value){
			var re = /^[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?$/;
			return re.test(value);			
		}
		function isHour(value){
			var re = /^([0-1][0-9]|[2]?[0-3])[,.]?([0-5]?[0-9])?$/;
			return re.test(value);			
		}
		function isUrl(value){
			var re = /((((https?)|(ftp)):\/\/)?([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i;
			return re.test(value);			
		}
		function showLayer(el, msg){
			
			var targetEl = frmObj.find('[name="'+ el +'"]');
			if(!targetEl.length){
				targetEl = frmObj.find('.'+ el);
			}
			if(!targetEl.length){
				targetEl = frmObj.find('#'+ el);
			}
			if(!targetEl.length) return;
			var coords = targetEl.offset();	
			console.log(targetEl,msg,coords);	
			var layer = $('#alertForm');
			if(!layer.length){
				layer = $('<div id="alertForm"><p class="message"></p></div>').appendTo($(document.body));
				layer.css({
					'padding':  '3px 10px',
					'background': '#e10061',
					'color': '#ffffff',
					'height': 'auto',
					'position': 'absolute',
					'top': -15000,
					'z-index': 2000
				});
			}
			layer.find('.message').text(msg);
			layer.css({
				'top': coords.top + targetEl.outerHeight(),
				'left': coords.left ,
				'width': frmObj.find('[name="'+ el +'"]').width() - 10,
				'z-index': 20000
			});
			if(el == 'imagePath'){
				coords = $('#frmSignUp .upImg').offset();
				layer.css({
					'top': coords.top + targetEl.outerHeight(),
					'left': coords.left ,
					'width': 134,
					'z-index': 20000
				});
			}
			showErrorTimeout = clearTimeout(showErrorTimeout);
			showErrorTimeout = setTimeout(function(){
				layer.css({
					'top': -15000
				});					
			}, 3000);
			if(frmObj.find('[name='+el+']').length > 0){
				//frmObj.find('[name='+el+']')[0].focus();			
			}
		}
		function showHideError(el, msg){
			var erEl = $(errorConfig.customError);
			erEl.text(msg);
			
			erEl.removeClass('hidden');
			showErrorTimeout = clearTimeout(showErrorTimeout);
			showErrorTimeout = setTimeout(function(){
				erEl.addClass('hidden');			
			}, 5000);
			if(frmObj.find('[name='+el+']').length > 0){
				frmObj.find('[name='+el+']')[0].focus();			
			}
		}
		function showElementError(el, msg, err){
			if(err.find('.message').length > 0){
				err.find('.message').text(msg);
			}
			err.removeClass('hidden');
			if(frmObj.find('[name='+el+']').length > 0){
				frmObj.find('[name='+el+']')[0].focus();			
			}
		}
	}
}

/************************************************************************************/
/*********************************** Library ****************************************/
/************************************************************************************/

/**
 * show Show Popup Layer
 * @param {string} id	  
 */
 function showPopupLayer(id, keepmask,callback,callbackShowHide){
	var el = $(id);
	if(el.length == 0 ) return;	
	if (typeof callbackShowHide == 'function'){
		callbackShowHide(el);
	}
	
	showHidemaskLayer(true);
	$(el).css({
		'position': 'absolute',
		'zIndex': 190,
		'display': 'block'
	});
	if(id == '#alertLayer' || id == '#confirmLayer' || id == '#messageLayer'){
		$(el).css('zIndex', 190);
	}
	var dimensions = windowDimensions();	
	
	var _top = Math.max(0,(dimensions.height - $(el).innerHeight()) / 2 + (($.browser.msie && parseInt($.browser.version) < 7) ? $(window).scrollTop() : 0));	
	var _left = Math.max(0,(dimensions.width - $(el).innerWidth()) / 2);
	if(_top < 10) _top = 10;
		
	if(el.attr('id') == 'popupBookVisit'){
		el.css({			
			'left': _left,
			'top': _top,
			'position': 'absolute'
		});
	}
	else{
		$(el).css({			
			'left': _left,
			'top': _top,
			'position':(dimensions.height < $(el).outerHeight(true)) ? 'absolute' : ($.browser.msie && parseInt($.browser.version) < 7) ? 'absolute' : 'fixed'
		});
	}
	$(window).unbind('resize').bind('resize', function(){
		dimensions = windowDimensions();
		_top = Math.max(0,(dimensions.height - $(el).innerHeight()) / 2 + (($.browser.msie && parseInt($.browser.version) < 7) ? $(window).scrollTop() : 0));
		_left = Math.max(0,(dimensions.width - $(el).innerWidth()) / 2);	
		if(el.attr('id') == 'popupBookVisit'){
			el.css({			
				'left': _left,
				'top': _top,
				'position': 'absolute'
			});
		}
		else{
			$(el).css({			
				'left': _left,
				'top': _top,
				'position':(dimensions.height < $(el).outerHeight(true)) ? 'absolute' : ($.browser.msie && parseInt($.browser.version) < 7) ? 'absolute' : 'fixed'
			});
		}			
	});	
	el.find('.close, .btnClose').unbind('click').bind('click', function(){
		$(document).trigger('click');
		if(keepmask == 'keepmask'){
			if($('.upImg').length || $('#avatarfile').length){
				$('.upImg').val('');
				$('.imgareaselect-outer').css('display','none');
				$('.imgareaselect-selection').parent().css('left',-14795);
			}
			hideLayer(id, keepmask);
		}else{
			if($('.upImg').length || $('#avatarfile').length){
				$('.upImg').val('');
				$('.imgareaselect-outer').css('display','none');
				$('.imgareaselect-selection').parent().css('left',-14795);
			}
			hideLayer(id);		
		}
		if (typeof callback == 'function'){
			if($('.upImg').length || $('#avatarfile').length){
				$('.upImg').val('');
				$('.imgareaselect-outer').css('display','none');
				$('.imgareaselect-selection').parent().css('left',-14795);
			}
			callback();
		}
		// $(window).unbind();
		// $(document).unbind();
	});
	if(id == '#alertLayer'){
		var args = arguments;
		if(args[2] && args[2] != ''){
			$(id).find('.message').text(args[2]);
		}
		//add btnOK
		el.find('.btnOK').unbind().bind('click', function(e){
			e.preventDefault();			
			if(keepmask == 'keepmask'){
				hideLayer(id, keepmask);
			}else{
				hideLayer(id);		
			}
		});
	}
	if(id == '#addfailedGroupLayer'){
		var args = arguments;
		if(args[2] && args[2] != ''){
			$(id).find('.content').text(args[2]);
		}
	}
	if(id == '#confirmLayer'){
		var args = arguments;
		//add btnYes
		el.find('.btnYes').unbind().bind('click', function(e){			
			e.preventDefault();
			if(typeof(args[2]) == 'function'){
				args[2]();
			}
			if(keepmask == 'keepmask'){
				hideLayer(id, keepmask);
			}else{
				hideLayer(id);		
			}
		});
		el.find('.btnNo').unbind().bind('click', function(e){
			e.preventDefault();
			if(typeof(args[3]) == 'function'){
				args[3]();
			}
			if(keepmask == 'keepmask'){
				hideLayer(id, keepmask);
			}else{
				hideLayer(id);		
			}
		});
	}
	if(id == '#messageLayer'){
		$(id).find('p').text(arguments[2]);		
	}
}
/**
 * show Hide Popup Layer
 * @param {string} id	  
 */
function hideLayer(id, keepmask){	
	if(keepmask == 'keepmask'){
		showHidemaskLayer(true);
		
	}else{
		if(id != '#notificationTranslate'){
			showHidemaskLayer(false);
		}
	}
	$(id).css({
		'left': -15000
	});	
	if(id == '#importLanguageLayer'){
		$('#frmImportLanguage')[0].reset();
	}
	if(id == '#playListUnitsLayer'){		
		if($(id).data('savedsts')){
			window.location.reload();
		}
	}
}
/**
 * show/Hide maskLayer
 * @param {Boolean} flag 
 */
function showHidemaskLayer(flag, zindex){		
	if($('#maskLayer').length == 0) {
		$(document.body).append('<div id="maskLayer"></div>');
		var maskLayer = $('#maskLayer').hide();		
	} else {		
		var maskLayer = $('#maskLayer');
	}
	
	if(flag) {
		maskLayer.show().css({
			'position': 'fixed',
			'visibility': 'visible',
			'backgroundColor': '#000000',			
			'zIndex': zindex ? zindex: 100,
			'opacity': 0.5,
			'width': '100%',
			'height': '100%',
			'top': '0',
			'left': '0'
		});
	} else {
		maskLayer.hide();
		
		$(window).unbind('resize');
	}
}
function windowDimensions() {
	var dimensions = {width: 0, height: 0};
	dimensions.width = $(window).width();
	dimensions.height = $(window).height();	
	return dimensions;
};
function jCustomSelect(cont) {
    var selectors = $('.customSelect');
    if(cont){
		selectors = cont.find('.customSelect');
	}
	if (selectors.length > 0) {
        selectors.each(function(index,selector) {
            runCustomSelect(selector);
        });
    }
	
	function runCustomSelect(sel) {		
		var selectorObj = $(sel);	
		selectorObj.csValue = selectorObj.find('.csValue')[0];		
		selectorObj.csText = selectorObj.find('.csText')[0];		
		if(!selectorObj.find('select')[0]) return;
		
		var strLi = '';
		selectorObj.find('select option').each(function(index, opt){
			if(index==0){
				strLi = '<li class="first" id="' + $(opt).val() + '">'+ $(opt).html() +'</li>';				
			}else{
				strLi += '<li id="' + $(opt).val() + '">'+ $(opt).html() +'</li>';
			}
		});
		selectorObj.csLayer = $('<div class="optionLayer hide"><div class="csLayer"><ul>' + strLi + '</ul></div></div>');		
		selectorObj.append(selectorObj.csLayer);
		selectorObj.find('.icon').click(function(e){
			e.preventDefault();
			
			if(selectorObj.csLayer.find('li').length > 4 ){
				var _height = Math.min(116, ((selectorObj.csLayer.find('li').length) * 30));				
			}else if(selectorObj.csLayer.find('li').length == 4){
				var _height = 116;
			}else{
				var _height = (selectorObj.csLayer.find('li').length * 29) - 1;
			}
			var _ul_height = (selectorObj.csLayer.find('li').length * 29) - 1;
			
			var coords = selectorObj.position();
			selectorObj.csLayer.removeClass('hide').addClass('smScrollContent').css({
				'z-index': 9999,
				'overflow': 'hidden',
				'height': _height,
				'position': 'absolute',
				'top': selectorObj.height(),
				'left': 0
			});
			selectorObj.csLayer.find(':first').css('height', _height - 2);
			selectorObj.csLayer.find(':first').find(':first').css('height', _ul_height);
			//scroller
			// if(selectorObj.find('.smScroller').length == 0){
				// Util.JScroller(selectorObj.find('.smScrollContent'));				
			// }
			// if(selectorObj.csLayer.next()){
				// selectorObj.csLayer.next().css({
					// 'z-index': 9999,
					// 'position': 'absolute',
					// 'top': selectorObj.csLayer.position().top,
					// 'left': selectorObj.csLayer.width()
				// });
			// }
		});
		
		$(document).mousedown(function(e){				
			if(!$(e.target).hasClass('optionLayer') && $(e.target).parents('.optionLayer').length == 0 /*&& !$(e.target).hasClass('smScroller') && $(e.target).parents('.smScroller').length == 0*/){
				close();
			}
		});
		
		selectorObj.csLayer.find('li').each(function (ind, li) {
			$(li).css('cursor', 'pointer');
			$(li).die().click(function(e){
				e.preventDefault();
				selectorObj.csValue.value = $(li).attr('id');
				$(selectorObj.csText).find(':first').text($(li).text());				
				//callback
				callback();
				//end callback	
				close();
			});
		});
		function callback(){
		}
		function close(){
			selectorObj.csLayer.css('top', -15000);
		}
	}	
}
function jCustomRadiobox(cont){
	var arrChk = $('.rdunchecked');
	if(cont){
		arrChk = $(cont).find('.rdunchecked');
	}
	var prev = null;
	if(arrChk.length > 0){
		arrChk.each(function(index, rad){			
			if($(rad).hasClass('rdchecked')){
				prev = $(rad);
			}			
			$(rad).unbind('click').bind('click', function(e){
				e.preventDefault();				
				if(prev == null){ 
					$(this).addClass('rdchecked');
					if($(this).find(':first').length > 0){
						$(this).find(':input').get(0).checked = true;
					}
					prev = $(this);
				}else{
					prev.removeClass('rdchecked');
					if(prev.find(':first').length > 0){
						prev.find(':input').get(0).checked = false;						
					}
					$(this).addClass('rdchecked');
					if($(this).find(':first').length > 0){
						$(this).find(':input').get(0).checked = true;						
					}
					prev = $(this);
				}
				
				if($(this).find(':first').attr('id') == 'rdrdNewSurvey'){
					$('#slSurveyTemplate').addClass('hidden');
				}else if($(this).find(':first').attr('id') == 'rdrdCopySurvey'){
					$('#slSurveyTemplate').removeClass('hidden');					
				}
			}).next('label').unbind('click').bind('click', function(e1){
				e1.preventDefault();				
				$(rad).trigger('click');
			});
		});
	}
	
}
function jCustomCheckbox(cont){
	var arrChk = $('.unchecked');
	if(cont){
		arrChk = $(cont).find('.unchecked');
	}
	var count = 0;
	var chkAll;
	if(arrChk.length > 0){
		arrChk.each(function(index, chk){
			if($(chk).hasClass('checked'))
				count++;
			if($(chk).hasClass('chkAll'))
				chkAll = $(chk);
			$(chk).unbind('click').bind('click', function(e){
				e.preventDefault();
				
				var passEl = $('#frmNewContactMDC').find('#txtPass');
				var cloneEl = $('#txtPass2');
				if(!cloneEl.length){
					cloneEl = $('<input id="txtPass2" readonly="readonly" name="txtPass2" type="text" value="' + passEl.val() + '" />').insertAfter(passEl).css('display','none');
				}
				if($(chk).hasClass('checked')){
					passEl.css('display','block');
					cloneEl.css('display','none');
				}
				else{
					passEl.css('display','none');
					cloneEl.css('display','block');
				}	
				
				if($(this).hasClass('chkAll')){
					if($(this).hasClass('checked')){
						arrChk.removeClass('checked');
						if($(this).find(':first'))
							$(this).find(':first').checked = false;
					}else{
						arrChk.addClass('checked');
						if($(this).find(':first'))
							$(this).find(':first').checked = true;
					}
				}else{
					if($(this).hasClass('checked')){
						$(this).removeClass('checked');
						if($(this).find(':first'))
							$(this).find(':first').checked = false;
						
					}else{
						$(this).addClass('checked');
						if($(this).find(':first'))
							$(this).find(':first').checked = true;
						
					}					
				}
			});
		});
		if(count == arrChk.length-1 && arrChk.length >= 2){
			if(chkAll && chkAll[0]){
				chkAll.addClass('checked');	
				if(chkAll.find(':first'))
					chkAll.find(':first').checked = true;
			}			
		}
	}
}

function jSelectItemMove(cont){
	var contLeft = $(cont).find('ul.blockTagsGroup')[0];
	var contRight = $(cont).find('ul.blockTagsGroup')[1];
	var elLeft = $(contLeft).find('li');
	var elRight = $(contRight).find('li');
	
	//init
	var amount = 0;
	var pa_Clicked = false;
	var ch_Clicked = false;
	elLeft.each(function(i, li){
		$(li).css('cursor', 'pointer');
		$(li).unbind('click').bind('click', function(e){
			
		});		
	});
}
// jQuery(document).ajaxStart(function(){
	// $('.ajaxLoading').removeClass('hidden');	
	// $('.ajaxLoading').css({
		// 'opacity': 0.5,
		// 'z-index': 10000
	// });
	// showHidemaskLayer(true);
	// try {
		// $('#maskLayer').addClass('loading01');
	// } catch(e){}
// });
// jQuery(document).ajaxError(function(){
	// showHidemaskLayer(false);
// });

// jQuery(document).ajaxComplete(function(){
	// try {
		// $('.ajaxLoading').addClass('hidden');
		// $('#maskLayer').removeClass('loading01');		
	// } catch(e){}
// });
