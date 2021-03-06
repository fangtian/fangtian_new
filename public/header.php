 <header id="header">
        <div class="container">
            <div class="brand">
                <a href=""><img src="images/uploads/logo_ft.png" alt=""></a>
            </div>
            <select name="" id="">
                <option value="">合肥市</option>
            </select>
            <span class="showmodal glyphicon glyphicon-menu-hamburger"></span>
            <div class="nav_content">
                <ul class="ft_nav  nav">
                    <li class="selected"><a href="#">首页</a></li>
                    <li><a href="#">选课中心</a></li>
                    <li><a href="#">交流中心</a></li>
                    <li class="dropdown " onmouseover="this.className='dropdown active'" onmouseout="this.className='dropdown'">
                        <a class="other">关于我们
                     <span class="caret"></span></a>
                        <ul class="dropdown_content">
                            <li><a href="">教学体系</a></li>
                            <li><a href="">教师介绍</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="reg  nav">
                    <li><a href="" data-toggle="modal" data-target="#registerModal">注册</a></li>
                    <li><a href="" data-toggle="modal" data-target="#loginModal">登录</a></li>
                </ul>
            </div>
        </div>
    </header>
    <!-- login Modal -->
    <form id="frmlogin" name="frmlogin" action="/fangtian_ol/index.php/User/loginOk.html" method="post">
        <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="loginModalLabel">登录</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <input name="phone1" id="phone1" type="phonenumber" class="form-control" placeholder="手机号码">
                        </div>
                        <div class="form-group">
                            <input name="pwd1" id="pwd1" type="password" class="form-control" placeholder="密码(8-12位)">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <span class="forget-password"><a href="/fangtian_ol/index.php/User/forgetPwdWx.html">忘记登录密码？</a></span>
                        <button type="button" class="btn btn-reg" onclick="goreg();">注册</button>
                        <!--button type="button" class="btn btn-default" data-dismiss="modal">关闭</button-->
                        <button type="submit" class="btn_ft">登录</button>
                    </div>
                    <!--div id="resultlogin" class="resultlogin" style="display:none;"></div-->
                    <div id="logindiv" class="alert alert-warning" style="display:none;">
                        <a href="#" class="close" onclick="$('#logindiv').hide();">&times;</a>
                        <span id="resultlogin"></span>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <!-- register Modal -->
    <form id="frmreg" name="frmreg" action="/fangtian_ol/index.php/User/regOk.html" method="post">
        <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="registerModalLabel">注册</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <input type="phonenumber" name="phone" id="phone" class="form-control" placeholder="手机号码">
                        </div>
                        <div class="form-group">
                            <input class="btn btn-warning" id="zphone" type="text" value=" 获取手机验证码 " onClick="get_mobile_code('/fangtian_ol/index.php/User/sendVerify.html','927491');">
                        </div>
                        <div class="form-group">
                            <input type="phonenumber" name="verify" id="verify" class="form-control" placeholder="验证码">
                        </div>
                        <div class="form-group">
                            <input type="password" name="pwd" id="pwd" class="form-control" placeholder="密码(8-12位)">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <!--button type="button" class="btn btn-default" data-dismiss="modal">关闭</button-->
                        <button type="submit" class="btn btn-primary">注册</button>
                    </div>
                    <!--div id="resultreg" class="resultreg" style="display:none;"></div-->
                    <div id="regdiv" class="alert alert-warning" style="display:none;">
                        <a href="#" class="close" onclick="$('#regdiv').hide();">&times;</a>
                        <span id="resultreg"></span>
                    </div>
                </div>
            </div>
        </div>
    </form>