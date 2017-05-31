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

<body>
    <!-- include header.php -->
    <?php include "public/header.php" ?>
    <div id="user_course">
        <div class="container">
            <?php include "public/user_nav.php" ?>
            <section class="course_content">
                <h3 class="title"><span class="glyphicon glyphicon-book"></span> 我的课程</h3>
                <div class="content">
                    <ul class="my_course">
                        <li><a href="#1F"><span class="wait_pay">2</span>待付款 </a></li>
                        <li><a href="#2F"><span class="learning">1</span>在学课程</a></li>
                        <li><a href="#3F"><span class="wait_learn">1</span>即将开课</a></li>
                        <li><a href="#4F"><span class="learnt">16</span>学完课程 </a></li>
                    </ul>
                    <div class="course_table">
                        <h4>课程表</h4>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>班级</th>
                                    <th>时间</th>
                                    <th>章节</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>周六上午尖子班</td>
                                    <td>2017.04.15 8:30-11:00</td>
                                    <td>圆形</td>
                                </tr>
                                <tr>
                                    <td>周六上午尖子班</td>
                                    <td>2017.04.15 8:30-11:00</td>
                                    <td>正方形</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="course_pay" id="1F">
                        <h4>待付款课程</h4>
                        <div class="course_list clearfix">
                            <div class="list clearfix">
                                <div class="course_title">
                                    <h5>曹媛老师周六上午尖子班</h5>
                                </div>
                                <div class="content ">
                                    <div class="list_left col-xs-4 col-sm-3 phy">
                                        <span class="season">春</span>
                                        <span class="glyphicon glyphicon-book"></span>
                                        <h3>小升初讲座</h3>
                                    </div>
                                    <div class="list_right col-xs-8 col-sm-5">
                                        <ul class="">
                                            <li>开课时间：<span>2017.12.12 18:30~12:30</span></li>
                                            <li>上课地点：<span>亳州路校区</span></li>
                                            <li>任课老师：<span>曹媛老师</span></li>
                                            <li> 课程价格：<span>￥2250.00</span></li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-4 list_pay">
                                        <div class="time">剩余：
                                            <span>23</span>
                                            <s>小时</s>
                                            <span>22</span>
                                            <s>分</s>
                                            <span>12</span>
                                            <s>秒</s>
                                        </div>
                                        <div class="btn_ft">立即付款</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="learning1" id="2F">
                        <h4>在学课程</h4>
                        <div class="course_list clearfix">
                            <div class="list">
                                <div class="course_title">
                                    <h5>曹媛老师周六上午尖子班</h5>
                                </div>
                                <div class="content clearfix">
                                    <div class="list_left  col-xs-4 col-sm-3 math">
                                        <span class="season">暑</span>
                                        <span class="glyphicon glyphicon-book"></span>
                                        <h3>小升初讲座</h3>
                                    </div>
                                    <div class="list_right col-xs-8 col-sm-6">
                                        <ul class="">
                                            <li>开课时间：<span>2017.12.12 18:30~12:30</span></li>
                                            <li>上课地点：<span>亳州路校区</span></li>
                                            <li>任课老师：<span>曹媛老师</span></li>
                                            
                                        </ul>
                                    </div>
                                    <div class=" list_pay col-sm-3">
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                                            </div>
                                        </div>
                                        <span>已完成40%</span>
                                    </div>
                                </div>
                                <div class="complete">
                                    <span class="more collapsed" data-toggle="collapse" data-target="#show1" href="#" aria-haspopup="true" aria-expanded="false">课次表详情>>></span>
                                    <div class="collapse clearfix" id="show1">
                                        <div class="clearfix">
                                            <table class="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>上课时间</th>
                                                        <th>章节</th>
                                                        <th>小测成绩</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>2014.5.15 14:30</td>
                                                        <td>几何</td>
                                                        <td>50</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2014.5.15 14:30</td>
                                                        <td>平行四边形</td>
                                                        <td>50</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="learning2" id="1F">
                        <h4>即将开课</h4>
                        <div class="course_list clearfix">
                            <div class="list">
                                <div class="course_title">
                                    <h5>曹媛老师周六上午尖子班</h5>
                                </div>
                                <div class="content clearfix">
                                    <div class="list_left col-xs-4 col-sm-3 chem">
                                        <span class="season ">秋</span>
                                        <span class="glyphicon glyphicon-book"></span>
                                        <h3>化学</h3>
                                    </div>
                                    <div class="list_right col-xs-8 col-sm-6">
                                        <ul class="">
                                            <li>开课时间：<span>2017.12.12 18:30~12:30</span></li>
                                            <li>上课地点：<span>亳州路校区</span></li>
                                            <li>任课老师：<span>曹媛老师</span></li>
                                            
                                        </ul>
                                    </div>
                                    <div class="list_pay col-sm-3">
                                        <div class="clock col-xs-12  ">开课倒计时:8天5小时42分</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="user_learnt">
                        <h4>学完课程</h4>
                        <div class="course_list clearfix">
                            <div class="list">
                                <div class="course_title">
                                    <h5>曹媛老师周六上午尖子班</h5>
                                </div>
                                <div class="content clearfix">
                                    <div class="list_left col-xs-4 col-sm-3 phy">
                                        <span class="season">寒</span>
                                        <span class="glyphicon glyphicon-book"></span>
                                        <h3>物理</h3>
                                    </div>
                                    <div class="list_right col-xs-8 col-sm-6">
                                        <ul class="">
                                            <li>开课时间：<span>2017.12.12 18:30~12:30</span></li>
                                            <li>上课地点：<span>亳州路校区</span></li>
                                            <li>任课老师：<span>曹媛老师</span></li>
                                            
                                        </ul>
                                    </div>
                                    <div class="finshed">已完成</div>
                                </div>
                                <div class="complete">
                                    <span class="more collapsed" data-toggle="collapse" data-target="#show2" href="#" aria-haspopup="true" aria-expanded="false">课次表详情>>></span>
                                    <div class="collapse clearfix" id="show2">
                                        <div class="clearfix">
                                            <table class="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>上课时间</th>
                                                        <th>章节</th>
                                                        <th>小测成绩</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>2014.5.15 14:30</td>
                                                        <td>几何</td>
                                                        <td>50</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2014.5.15 14:30</td>
                                                        <td>平行四边形</td>
                                                        <td>50</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <!-- include footer.php -->
    <?php include "public/footer.php" ?>
    <a id="back-top" href="#"><span class="glyphicon glyphicon-menu-up"></span></a>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="plugins/jquery/jquery-min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="plugins/bootstrap/js/bootstrap.min.js"></script>
    <script src="js/fangtian.js"></script>
    <!-- <script src="js/user.js"></script> -->
</body>

</html>
