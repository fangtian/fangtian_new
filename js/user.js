/*
* @Author: fangtian
* @Date:   2017-04-17 13:46:14
* @Last Modified by:   fangtian
* @Last Modified time: 2017-04-17 13:46:28
*/

  function goreg()
  {
	  $('#registerModal').modal('show'); 
      $('#loginModal').modal('hide'); 
  } 
  
  function isMobil(s)
  {
    var patrn=/^(13[0-9]|15[0-9]|18[0-9]|17[0-9]|14[0-9])\d{8}$/;
    if (!patrn.exec(s)) return false
    return true
  } 
  
  
  $('#frmlogin').ajaxForm({
    beforeSubmit:  login_checkForm,  // pre-submit callback
    success:       login_complete,  // post-submit callback
    dataType: 'json'
  });
  function login_checkForm(){
    if( '' == $.trim($('#phone1').val())){
      $('#logindiv').show();
      $('#resultlogin').html('电话不能为空').show();
      return false;
    }
    if (!isMobil($('#phone1').val())){
      $('#logindiv').show();
      $('#resultlogin').html('请输入有效电话').show(); 
      return false; 
    }
    if( '' == $.trim($('#pwd1').val())){
      $('#logindiv').show();
      $('#resultlogin').html('密码不能为空').show();
      return false;
    }     
    //可以在此添加其它判断
  }
  function login_complete(data){
    $('#logindiv').show();
    $('#resultlogin').html(data.info).show();
    if (data.status==1){
      //alert('登录成功，想去哪去哪');
      //location.reload();
	  location.href = data.data;
    }
  }
  
  $('#frmreg').ajaxForm({
    beforeSubmit:  reg_checkForm,  // pre-submit callback
    success:       reg_complete,  // post-submit callback
    dataType: 'json'
  });
  function reg_checkForm(){
    if( '' == $.trim($('#phone').val())){
      $('#regdiv').show();
      $('#resultreg').html('电话不能为空').show();
      return false;
    }
    if (!isMobil($('#phone').val())){
      $('#regdiv').show();
      $('#resultreg').html('请输入有效电话').show(); 
      return false; 
    }
    if( '' == $.trim($('#pwd').val())){
      $('#regdiv').show();
      $('#resultreg').html('密码不能为空').show();
      return false;
    }     
    //可以在此添加其它判断
  }
  function reg_complete(data){
    $('#regdiv').show();
    $('#resultreg').html(data.info).show();
    if (data.status==1){
      //alert(data.data);
      alert('注册成功，请完善个人资料');          
      location.href = data.data;
    }
  }

  //短信验证相关
  function check_mobile(){
    if( '' == $.trim($('#phone').val())){
      $('#regdiv').show();
      $('#resultreg').html('电话不能为空').show();
      return false;
    }
    if (!isMobil($('#phone').val())){
      $('#regdiv').show();
      $('#resultreg').html('请输入有效电话').show(); 
      return false; 
    }
  } 
  
  function get_mobile_code(url,send_code){
    var phone = jQuery.trim($('#phone').val());
    //alert(phone);
    if(check_mobile()==false) return false;

	$("#zphone").attr("disabled",true);

	//alert(url+"?phone="+phone+"&send_code="+send_code);
    $.get(url+"?phone="+phone+"&send_code="+send_code,function(msg) {
      alert(jQuery.trim(unescape(msg)));
      if(jQuery.trim(msg)=='提交成功'){
        RemainTime();
      }else{
		$("#zphone").attr("disabled",false);
	  }
    });
  } 
  
  
  var iTime = 59;
  var Account;
  function RemainTime(){
    document.getElementById('zphone').disabled = true;
    var iSecond,sSecond="",sTime="";
    if (iTime >= 0){
      iSecond = parseInt(iTime%60);
      iMinute = parseInt(iTime/60)
      if (iSecond >= 0){
		  if(iMinute>0){
			sSecond = iMinute + "分" + iSecond + "秒";
		  }else{
			sSecond = iSecond + "秒";
		  }
      }
      sTime=sSecond;
      if(iTime==0){
		  clearTimeout(Account);
		  sTime='获取手机验证码';
		  iTime = 59;
		  document.getElementById('zphone').disabled = false;
      }else{
		  Account = setTimeout("RemainTime()",1000);
		  iTime=iTime-1;
      }
    }else{
      sTime='没有倒计时';
    }
    document.getElementById('zphone').value = sTime;
  }
  //短信验证相关
