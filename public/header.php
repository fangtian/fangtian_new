 <header>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <div type="button" class="reglogin glyphicon glyphicon-menu-hamburger visible-xs"></div>
                <a class="navbar-brand" href="#"><img alt="Brand" src="images/uploads/logo.png"></a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="navbar-content collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="icon visible-xs"> <span class="glyphicon glyphicon-user"></span></li>
                    <li class="reg"><a href="#" data-toggle="modal" data-target="#registerModal">注册</a></li>
                    <li class="login"><span class="btn_ft" data-toggle="modal" data-target="#loginModal">登录</span></li>
                </ul>
                <ul class="nav navbar-nav">
                    <li class="visible-lg">
                        <span class="glyphicon glyphicon-map-marker"></span> &nbsp;&nbsp;
                        <select >
                        <option  value = "合肥市" >合肥市</option>
                        <option  value = "1" >其他地区</option>
                        </select>
                    </li>
                    <li><a href="index.php" class="active">首页</a></li>
                    <li><a href="course.php">选课中心</a></li>
                    <li><a href="interaction.php">交流中心</a></li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        关于我们
                         <span class="caret"></span>
                        </a>
                        <ul id="dropdown-wx-menu" class="dropdown-menu" aria-labelledby="dropdownMenu1" role="menu">
                            <li><a href="#">教师列表</a></li>
                            <li><a href="#">教学体系</a></li>
                           
                            <li><a href="#">关于我们</a></li>
                        </ul>
                    </li>
                    <!-- 关注官方微信 -->
                </ul>
            </div>
             <!-- 未登录 -->
                <!--
                <ul class="nav navbar-nav navbar-right">
                    <li role="presentation" class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">
                            李晓彤 <span class="caret"></span>
                         </a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="#"><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> 我的课程</a></li>
                            <li><a href="#"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> 账号设置</a></li>
                            <li class="divider"></li>
                            <li>
                                <a href="#"><span class="glyphicon glyphicon-log-out" aria-hidden="true"></span> 退出登录</a>
                            </li>
                        </ul>
                    </li>
                </ul> 
                -->
                <!-- 已登录 -->
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>
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
                            <button type="button" class="btn btn-warning" onclick="goreg();">注册</button>
                            <!--button type="button" class="btn btn-default" data-dismiss="modal">关闭</button-->
                            <button type="submit" class="btn btn-primary">登录</button>
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
 <header>
