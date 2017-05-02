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
    <link rel="stylesheet" href="plugins/swiper/swiper.min.css">
    <link rel="stylesheet" href="plugins/fullpage/fullpage.css">
    <!-- fangtian css -->
    <link href="css/fangtian.css" rel="stylesheet">
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
    <style>
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    </style>
</head>

<body id="course">
    <!-- include header.php -->
    <?php include "public/header.php" ?>
    <div class="content">
        <div class="container">
            <div class="tab_head">
                <div class="yx hidden-xs ">
                    <div class="container">
                        <span class=" ">已选</span>
                        <ul class=" clearfix">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    
                </div>
                <div class="tab_nav">
                    <div class="area list col-xs-3 col-sm-12">
                        <span class=" ">校区</span>
                        <ul class="">
                            <li>不限</li>
                            <li>安庆路</li>
                            <li>五里墩</li>
                            <li>北一环</li>
                        </ul>
                    </div>
                    <div class="grad list col-xs-3 col-sm-12">
                        <span class="">年级</span>
                        <ul class="">
                            <li>一年级</li>
                            <li>二年级</li>
                            <li>三年级</li>
                            <li>四年级</li>
                            <li>五年级</li>
                            <li>六年级</li>
                            <li>初一</li>
                            <li>初二</li>
                            <li>初三</li>
                            <li>高一</li>
                            <li>高二</li>
                            <li>高三</li>
                        </ul>
                    </div>
                    <div class="subject list col-xs-3 col-sm-12">
                        <span class="">科目</span>
                        <ul class="">
                            <li>数学</li>
                            <li>物理</li>
                            <li>化学</li>
                        </ul>
                    </div>
                    <div class="sort list col-xs-3 col-sm-12">
                        <span class="">类型</span>
                        <ul class="">
                            <li>不限</li>
                            <li>基础班</li>
                            <li>提高班</li>
                            <li>尖端班</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="course_center">
                <a href="" class="list">
                    <div class="list_left col-xs-4">
                        <span class="season">寒</span>
                        <span class="glyphicon glyphicon-book"></span>
                        <h3>七年级物理</h3>
                    </div>
                    <div class="list_right col-xs-8">
                        <h4>2017寒假课六年级数学课程</h4>
                        <ul class="clearfix">
                            <li><i></i>课堂测评</li>
                            <li><i></i>天天练</li>
                            <li><i></i>全程答疑</li>
                        </ul>
                        <p class="time">2017-12-12~2017-12-31</p>
                        <div class="pullright">
                            <span>￥2250.00</span>
                            <span class="statu">名额紧张</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <!-- include footer.php -->
    <a id="back-top"><span class="glyphicon glyphicon-menu-up"></span></a>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="plugins/jquery/jquery-min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="plugins/bootstrap/js/bootstrap.min.js"></script>
    <script src="plugins/swiper/swiper.jquery.min.js"></script>
    <script src="js/fangtian.js"></script>
    <!-- <script src="js/user.js"></script> -->
    <script>
    $(function() {
        $(".tab_nav li").click(function() {
            $(this).addClass('current').siblings().removeClass("current");
            if ($(".yx").is(":hidden")) {
                $(this).parent().toggleClass('show');
                $(this).parent().parent().children('span').html($(this).html())
            } else {
                $('.list .current').each(function(index, element) {
                    var text = $(this).html()
                    $(".yx ul>li").eq(index).html(text).addClass('current')
                })
            }
        })

        $(".list span").click(function() {

            if ($(".list>ul").is(":hidden")) {
                $(".list>ul").each(function() {
                    $(this).removeClass("show");
                });
                $(this).parent().children('ul').toggleClass('show')
            }
        })

    });
    </script>
</body>

</html>
