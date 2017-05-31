<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="Keywords" Content="数理化,培优,奥数,数学,物理,化学,迎春杯,华杯赛,">
    <meta name="description" Content="网页描述文字">
    <link rel="shortcut icon" href="images/uploads/favicon.ico" />
    <link rel="bookmark" href="images/uploads/favicon.ico" type="image/x-icon" 　/>
    <title>方田教育</title>
    <!-- Bootstrap -->
    <link href="plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- fangtian css -->
    <link href="css/css/fangtian.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!--[if lt IE 8]>
        <div style="clear:both;height:59px;padding:0 0 0 15px;position:relative;">
        <a href="http://windows.microsoft.com/en-US/internet-explorer/products/ie/home?ocid=ie6_countdown_bannercode"> <img src="http://storage.ie6countdown.com/assets/100/images/banners/warning_bar_0027_Simplified Chinese.jpg" border="0" height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today." /> </a></div>
    <![endif]-->
</head>

<body class="data">
    <!-- include header.php -->
    <?php include "public/header.php" ?>
    <div id="user_data">
        <div class="container">
            <?php include "public/user_nav.php" ?>
            <section class="content">
               <form id="form1" action="/fangtian_ol/index.php/User/editProfileOk.html" method="post" class="form-horizontal">
             <div class="form-group">
                <label for="name" class="col-sm-2 control-label">学生姓名</label>
                <input name="id" type="hidden" id="id" value="1292">
                <div class="col-sm-4">
                   <input type="text" class="form-control" placeholder="请输入姓名" name="name" id="name" value="方星语">
                </div>
             </div>
             <div class="form-group">
                <label for="sex" class="col-sm-2 control-label">性别</label>
                <div class="col-sm-2">
                  <select name="sex" id="sex" class="form-control">
                    <option value="请选择">请选择性别</option>
                    <option value="1">男</option>
                    <option value="0" selected="">女</option>
                  </select>
                </div>
             </div>
             
             <div class="form-group">
                <label for="sex" class="col-sm-2 control-label">就读年级</label>
                <div class="col-sm-4">
                  <select name="gid" id="gid" class="form-control">
                    <option value="请选择">请选择...</option>
                    <option value="1-1">小学一年级</option><option value="1-2">小学二年级</option><option value="1-3">小学三年级</option><option value="1-4">小学四年级</option><option value="1-5">小学五年级</option><option value="1-6" selected="">小学六年级</option><option value="2-1">初中一年级</option><option value="2-2">初中二年级</option><option value="2-3">初中三年级</option><option value="3-1">高中一年级</option><option value="3-2">高中二年级</option><option value="3-3">高中三年级</option>                  </select>
                </div>
             </div>
             
             <div class="form-group">
                <label for="parent_phone2" class="col-sm-2 control-label">QQ号</label>
                <div class="col-sm-4">
                   <input type="text" class="form-control" name="qq" id="qq" placeholder="QQ号" value="908375778">
                </div>
             </div>             
             
             <div class="form-group">
                <label for="qq" class="col-sm-2 control-label">密码</label>
                <div class="col-sm-4">
                   <input class="form-control" placeholder="8-12位之间。不修改可不填" type="password" name="pwd" id="pwd" value="">
                </div>
             </div>
             <div class="form-group">
                <label for="qq" class="col-sm-2 control-label">密码确认</label>
                <div class="col-sm-4">
                   <input class="form-control" placeholder="8-12位之间。不修改可不填" type="password" name="repwd" id="repwd" value="">
                </div>
             </div>
             <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                   <button type="submit" class="btn btn-primary">保存</button>
                </div>
             </div>
          </form>
            </section>
        </div>
    </div>
    <a id="back-top" href="#"><span class="glyphicon glyphicon-menu-up"></span></a>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="plugins/jquery/jquery-min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="plugins/bootstrap/js/bootstrap.min.js"></script>
    <script src="js/fangtian.js"></script>
    <!-- <script src="js/user.js"></script> -->
    <script>
    </script>
</body>

</html>
