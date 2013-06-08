/*Required: Jquery*/

function doCheckAll(fname,checked,chkname)
{
/*	alert(fname);
	alert(checked);
	alert(chkname);*/
	/*$("form[name='"+fname+"']").each(function(){
	$("input[name='"+chkname+"']",this).each(function(){
	this.checked=checked;
	});
	});*/
	/*$("input[name='"+chkname+"']",$("form[name='"+fname+"']")).each(function(){
	this.checked=checked;
	});

	$(":checkbox").each(function(){
	if(this.name==chkname)this.checked=checked;
	});*/

	$("form[name='"+fname+"']").find("input[name='"+chkname+"']").each(function(){
		this.checked=checked;
	});
}

function monitorCheckAll(fname, chkname, chkallName)
{
	if($("form[name='"+fname+"'] input[name='"+chkname+"']:checked").length==$("form[name='"+fname+"'] input[name='"+chkname+"']").length)
	{
		$("form[name='"+fname+"'] input[name='"+chkallName+"']").attr('checked', true);
	}
	else
	{
		$("form[name='"+fname+"'] input[name='"+chkallName+"']").attr('checked', false);
	}
}

function formSubmit(fname,needCheckedOne,chkname)
{
	if(typeof needCheckedOne=='boolean' && needCheckedOne==true)
	{
		if(!hasCheckedOne(fname,chkname))
		{
			alert('Please select at least one record');
			return false;
		}
	}
	$("form[name='"+fname+"']").submit();
}

function hasCheckedOne(fname,chkname)
{
	return ($("form[name='"+fname+"'] input[name='"+chkname+"']:checked").length>0);
}

function deleteRecord(fname, url, chkname){
	var ids = '';
	$("form[name='"+fname+"']").find("input:checked").each(function(){
		if(this.name == chkname){
			ids = ids + ',' + this.value;
		}
	});
	var form = $("form[name='"+fname+"']");
	
	url = url + '/ids/' + ids;
	form.action = url;
	alert(form.action);
	form.submit();
}
function doDelete(fname,chkname)
{
	if(!hasCheckedOne(fname,chkname)){
		alert('Vui lòng chọn ít nhất một mẫu tin để xóa');
		return;
	}	
	$("form[name='"+fname+"'] input[name='task']").val('delete');
	$("form[name='"+fname+"']").submit();
}
