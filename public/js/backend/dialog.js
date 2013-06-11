var dialogId=null;
function openDialog(title,containerId, dialogUrl,callback)
{	
	containerId = "#"+containerId;
	var dialogOpts = {
			title: title,
			modal: true,
			autoOpen: false,
			height: 400,
			width: 700,
			buttons:{				
				Cancel:function(){$(this).dialog('close');},
				"Select":function(){
					if(jQuery.isFunction(callback)){
						callback();
						//$(this).dialog('close');
					}else{
						if(window.confirm('Are you sure to close the windows?')){
							$(this).dialog('close');
						}
					}				
				}
			},
			open: function() {	
				$(containerId).html('Đang tải dữ liệu...');
				$(containerId).load(dialogUrl);	
			}		
	};
	$(containerId).dialog(dialogOpts);
	dialogId=containerId;
}
function doClose()
{	
	$(dialogId).dialog('close');	
}
function openArticleFinderDialog(title,containerId)
{	
	var url = "article";	
	openDialog(title,containerId,url);	
}