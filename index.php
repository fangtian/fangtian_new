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
    html,
    body {
        overflow: hidden;
        height: 100%;
    }
    
    .section-group {
        height: calc( 100% - 50px);
    }  
    .area-04 {
        background: #D9AC83
    }
    </style>
</head>

<body id="home">
    <!-- include header.php -->
    <?php include "public/header.php" ?>
    <div id="homepage" class="section-group">
        <section class="section swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" style="background-image: url('images/uploads/fade1.jpg');width: 100%;"></div>
                <div class="swiper-slide" style="background-image: url('images/uploads/banner02.jpg');width: 100%;"></div>
                <div class="swiper-slide" style="background-image: url('images/uploads/banner03.jpg');width: 100%;"></div>
            </div>
            <!-- 分页器 -->
            <div class="swiper-pagination"></div>
        </section>
        <section class="section"></section>
        <section class="section"></section>
        <section class="section">
             <!-- include footer.php -->
             <?php include "public/footer.php" ?>
        </section>
        </div>
        <a id="back-top"><span class="glyphicon glyphicon-menu-up"></span></a>
        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="plugins/jquery/jquery-min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="plugins/bootstrap/js/bootstrap.min.js"></script>
        <script src="plugins/swiper/swiper.jquery.min.js"></script>
        <script src="plugins/fullpage/fullpage.js"></script>
        <script src="js/fangtian.js"></script>
        <script type="text/javascript" src="http://cdn.gbtags.com/jquery-mousewheel/3.1.11/jquery.mousewheel.min.js"></script>
        <!-- <script src="js/user.js"></script> -->
        <script>
        $(function() {
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: 3000, //可选选项，自动滑动
                loop: true,
                pagination: '.swiper-pagination', // 分页器
                paginationClickable: true,
            })
            $('#homepage').fullpage();

            function goreg() {
                alert(1);
                $('#registerModal').modal('show');
                $('#loginModal').modal('hide');
            }
        })
        </script>
</body>

</html>
