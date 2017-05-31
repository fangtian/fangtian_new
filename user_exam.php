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

<body class="user_exam">
    <!-- include header.php -->
    <?php include "public/header.php" ?>
    <div id="user_exam">
        <div class="container">
            <?php include "public/user_nav.php" ?>
            <section class="exam">
                <div class="exam_head">
                    <h4><span class="glyphicon glyphicon-folder-open"></span> 往期天天练 </h4>
                    <select name="" id="">
                        <option value="">数学</option>
                        <option value="">物理</option>
                        <option value="">化学</option>
                    </select>
                </div>
                <div class="content">
                    <div class="user_exam">
                        <div class="exam_object">
                            <div class="exam_subject">
                                <p>1.专注于中小学数学高端课程，为您精选每一位老师，在上课前，上课中和上课后三个环节严格控制教学质量。使用最先进的在线直播技术，把最优质的教育资源送到您身边。利用互联网大数据的优势，为每个孩子定制专属练习，真正做到个性化学习。</p>
                            </div>
                            <div class="exam_img">
                                <img src="images/uploads/exam.jpg" alt="">
                            </div>
                            <ul class="options">
                                <li class="checked"> <span class="glyphicon glyphicon-font"></span>我也不知道些什么</li>
                                <li class="wrong"><span class="glyphicon glyphicon-remove"></span>我也不知道些什么</li>
                                <li class="right"><span class="glyphicon glyphicon-ok"></span>我也不知道些什么</li>
                                <li class=""><span class="glyphicon glyphicon-font"></span>我也不知道些什么</li>
                            </ul>
                            <input type="file">
                            <button class="btn btn-sm subanswer">提交答案</button>
                        </div>
                    </div>
                    <div class="answer">
                        <span class="btn_ft">解析</span>
                        <div class="answer_content">
                            控制教学质量。使用最先进的在线直播技术，把最优质的教育资源送到您身边。利用互联网大数据的优势，为每个孩
                        </div>
                    </div>
                    <div class="page">
                        <ul>
                            <li class="active"><a href="">1</a></li>
                            <li><a href="">2</a></li>
                            <li><a href="">3</a></li>
                        </ul>
                    </div>
                    <div class="tollbar">
                <button class="btn_ft">上一题</button>
                <button class="btn_ft">移出</button>
                <button class="btn_ft">下一题</button>
            </div>
                </div>
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
