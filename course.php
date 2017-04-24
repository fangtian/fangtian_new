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
    body {
        font-size: 14px;
       
    }
    
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    ul,
    ol,
    dl,
    dd {
        margin: 0;
        padding: 0;
    }
    
    .clearfloat:after {
        display: block;
        clear: both;
        content: "";
        visibility: hidden;
        height: 0
    }
    
    .clearfloat {
        zoom: 1
    }
    
    ul,
    ol {
        padding-left: 0;
        list-style: none;
    }
    
    a {
        text-decoration: none;
        cursor: pointer;
    }
    
    .fl {
        float: left;
    }
    
    .fr {
        float: right;
    }
    
    .top {
        width: 100%;
        height: 80px;
        border-top: 4px solid #BA0002;
        border-bottom: 1px solid #eee;
        box-shadow: 0px 2px 15px #C1C1C1;
    }
    
    .red {
        color: red;
    }
    
    .content {
        width: 1200px;
        margin: 0 auto;
    }
    
    .body {
        position: relative;
    }
    
    .top .content {
        height: 80px;
        background-color: #fff;
        position: relative;
    }
    
    .top .content .login {
        width: 220px;
        background: url(../img/login.fw.png) no-repeat;
        position: absolute;
        right: 0;
        top: 0;
        text-align: center;
        color: #FFC5BB;
    }
    
    .top .content .login a {
        text-decoration: none;
        color: #FFC5BB;
        font-size: 12px;
    }
    
    .top .content img {
        margin-top: 10px;
    }
    
    .top .content .check {
        font-size: 12px;
        margin: 38px 0 0 10px;
    }
    
    .top .top_nav {
        margin-top: 40px;
    }
    
    .top .top_nav li {
        float: left;
        font-size: 16px;
        color: black;
        padding-left: 20px;
    }
    
    .top .top_nav li a {
        font-size: 16px;
        color: black;
    }
    
    .top .top_nav li a:hover {
        color: #BB0002;
    }
    
    .tab_title {
        margin-top: 15px;
        margin-bottom: 30px;
    }
    
    .tab_title a {
        color: #999999;
    }
    
    .tab_search {
        height: 50px;
        font-size: 22px;
        margin-bottom: 15px;
    }
    
    .tab_search .fr {
        position: relative;
    }
    
    .tab_search .fr .button {
        outline: none;
        border: 0;
        width: 23px;
        height: 23px;
        background: url(../img/search.fw.png) no-repeat;
        position: absolute;
        right: 15px;
        top: 10px;
        cursor: pointer;
    }
    
    .tab_search input {
        outline: none;
        height: 40px;
        width: 400px;
        border: 1px solid #DEDEDE;
        border-radius: 30px;
        text-indent: 20px;
    }
    
    .tab_nav ul {
        zoom: 1;
        font-size: 14px;
    }
    
    .tab_nav .style {
        border-top: 1px solid #D0D0D0;
    }
    
    .tab_nav>div {
        height: 30px;
        padding: 10px 0;
        border-bottom: 1px solid #EEE;
    }
    
    .tab_nav .detail .main {
        display: none;
        margin-left: 49px;
    }
    
    .tab_nav .detail .main li {
        border: 1px solid #fff;
    }
    
    .tab_nav .detail .main.selected {
        display: block;
    }
    
    .tab_nav .detail>ul .current {
        background-color: #fff;
        color: black;
        border: 1px solid #D11E37;
    }
    
    .tab_nav ul:after {
        clear: both;
        display: block;
        content: '';
        font-size: 0;
        visibility: hidden;
    }
    
    .tab_nav span {
        height: 28px;
        line-height: 28px;
    }
    
    .tab_nav li {
        float: left;
        height: 28px;
        margin-left: 10px;
        line-height: 28px;
        cursor: pointer;
        text-align: center;
        padding: 0 10px;
    }
    
    .tab_nav .current {
        color: white;
        background: #D11E37;
    }
    
    .shop {}
    
    .shop_list {
        overflow: hidden;
        margin-bottom: 50px;
    }
    
    .shop_list .item {
        float: left;
        width: 283px;
        height: 400px;
        border: 1px solid #DDDDDD;
        margin: 20px 20px 0 0;
    }
    
    .shop_list .item:nth-child(4n) {
        margin-right: 0;
    }
    
    .item .item_name {
        text-indent: 5px;
        margin-top: 8px;
        height: 25px;
        line-height: 25px;
        font-size: 14px;
    }
    
    .item .item_num {
        color: #A1A1A1;
        height: 34px;
        line-height: 34px;
        text-indent: 5px;
    }
    
    .item .item_prc {
        height: 34px;
        line-height: 34px;
        text-indent: 5px;
    }
    
    .return {
        position: fixed;
        color: white;
        right: 6%;
        display: none;
        bottom: 70px;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background-color: #C30003;
        text-align: center;
        cursor: pointer;
        z-index: 2;
    }
    
    .return>span {
        display: block;
        margin-top: 5px;
    }
    
    .page {
        width: 1200px;
        margin: 50px auto;
        text-align: center;
    }
    
    .page a {
        margin: 0 10px;
    }
    
    .pagenum {
        display: inline-block;
        width: 22px;
        height: 22px;
    }
    
    .page .current {
        color: white;
        line-height: 22px;
        background-color: #D11E37;
    }
    
    .footer {
        width: 100%;
        height: 270px;
        background: #19242C;
        color: white;
        padding-bottom: 10px;
    }
    
    .footer .content {
        position: relative;
        background: #19242C;
    }
    
    .footer dl {
        float: left;
        margin-top: 50px;
        margin-right: 100px;
    }
    
    .footer dl dd {
        font-size: 20px;
        height: 30px;
        line-height: 30px;
        margin-bottom: 20px;
    }
    
    .footer dl dt {
        border-top: 1px solid #02131F;
        padding-top: 20px;
        padding-bottom: 20px;
        color: #888888;
        line-height: 30px;
    }
    
    .footer .down {
        position: absolute;
        right: 0;
        top: 30px;
    }
    
    .footbar {
        background-color: #171E23;
        height: 35px;
        color: #888888;
        padding-top: 20px;
    }
    
    .footbar .content {
        text-align: center;
    }
    </style>
</head>

<body id="home">
    <!-- include header.php -->
    <?php include "public/header.php" ?>
    <div id="course">
        <div class="container">
            <div class="tab_nav">
            	 <div class="yx">
                    <span class="fl">已选：</span>
                    <ul class="fl">
                        
                    </ul>
                </div>
                <div class="style">
                    <span class="fl">校区：</span>
                    <ul class="fl">
                        <li class="current">不限</li>
                        <li>安庆路</li>
                        <li>五里墩</li>
                        <li>北一环</li>
                    </ul>
                </div>
                <div class="area">
                    <span class="fl">年级：</span>
                    <ul class="fl">
                        <li class="current">不限</li>
                        <li>小学一年级</li>
                        <li>小学二年级</li>
                        <li>小学三年级</li>
                        <li>小学四年级</li>
                        <li>小学五年级</li>
                        <li>小学六年级</li>
                    </ul>
                </div>
                <div class="subject">
                    <span class="fl">科目：</span>
                    <ul class="fl">
                        <li class="current">全部</li>
                        <li>数学</li>
                        <li>物理</li>
                        <li>化学</li>
                    </ul>
                </div>
                <div class="sort">
                    <span class="fl">班型：</span>
                    <ul class="fl">
                        <li class="current">基础班</li>
                        <li>提高班</li>
                        <li>尖端班</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- include footer.php -->
    <?php include "public/footer.php" ?>
    <a id="back-top"><span class="glyphicon glyphicon-menu-up"></span></a>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="plugins/jquery/jquery-min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="plugins/bootstrap/js/bootstrap.min.js"></script>
    <script src="plugins/swiper/swiper.jquery.min.js"></script>
    <script src="js/fangtian.js"></script>
    <script src="js/picker.js"></script>
    <!-- <script src="js/user.js"></script> -->
    <script>
    $(function() {
        $(".tab_nav li").click(function() {
            $(this).addClass('current').siblings().removeClass("current");
           $(".current").each(function(index,element){
           		$('.yx ul').replaceWith($(element).clone());
           		
           })
          
        })
        $(".area li").click(function() {
            var index = $(this).index();
            $(".detail .main").eq(index).addClass("selected").siblings().removeClass("selected");
           

        })
        
    });

    /**  
     * 简单的Tab组件  
     * @param tabnav 导航元素数组  
     * @param tabcon  内容元素数组  
     */
    var Tabs = function(tabnav, tabcon) {
        this.tabnav = tabnav;
        this.tabcon = tabcon;
        this.init.apply(this, arguments);
    };
    Tabs.prototype = {
        init: function() {
            var _this = this;
            this.tabnav.each(function(i, oli) {
                $(oli).click(function() {
                    _this.tabnav.removeClass("current");
                    $(this).addClass("current");
                    _this.tabcon.css("display", "none");
                    _this.tabcon.eq(i).css("display", "block");
                })
            })
        }
    };
    var Page = function(config) {
        this.maxpage = config.maxpage || 5;
        this.containbox = $(config.containbox);
        this.dataclass = config.dataclass || "item";
        this.pagebox = $(config.pagebox);
        this.linum = $(this.dataclass, this.containbox).length;
        this.init.apply(this, arguments);
    }
    Page.prototype = {
        init: function() {

            this.pagebox.html("");
            var totalpage = this.linum / this.maxpage;
            //向上舍入，比如有8条数据，8除6是1点几，Math.ceil的作用是让它变成2  
            totalpage = Math.ceil(totalpage);
            //如果只有一页，那么没必要有这个分页的内容  
            if (totalpage <= 1) {
                return;
            }
            this.current = 1; //存储当前页  
            this.totalpage = totalpage; //存储总页数  
            var str = "";
            for (var i = 0; i < this.totalpage; i++) {
                var c = "";
                if (i == 0) {
                    c = " current";
                }
                str += '<a href="javascript:;" class="pagenum' + c + '">' + (i + 1) + '</a>';
            }
            str = '<a class="prebtn" href="javascript:;"><< 上一页</a>' + str + '<a class="nextbtn" href="javascript:;">下一页 >></a>';
            this.pagebox.html(str);
            this.pagenums = $(".pagenum", this.containbox);
            var _this = this;
            this.goPage(1);
            this.pagenums.each(function(i, npage) {
                $(npage).click(function() {
                    _this.goPage(this.innerHTML);
                });
            })
            $(".prebtn", this.containbox).click(function() {
                _this.goPrev(_this.current);
            });
            $(".nextbtn", this.containbox).click(function() {
                _this.goNext(_this.current);
            });
        },
        goPage: function(num) {
            this.current = num;
            this.pagenums.removeClass("current");
            this.pagenums.eq(num - 1).addClass("current");
            var dataobjs = $(this.dataclass, this.containbox);
            dataobjs.each(function(i, itemdata) {
                $(itemdata).css("display", "none");
            });
            for (var i = (num - 1) * this.maxpage; i < num * this.maxpage; i++) {
                if (i < this.linum) {
                    dataobjs.eq(i).css("display", "block");
                }
            }
        },
        goPrev: function(num) {
            if (num == 1) {
                return;
            }
            this.current--;
            this.goPage(this.current);
        },
        goNext: function(num) {
            if (num == this.totalpage) {
                return;
            }
            this.current++;
            this.goPage(this.current);
        }
    };
    (function() {
        //tab切换的代码  
        var tab = new Tabs($(".area li"), $(".shop_list"));
        //分页的代码  
        var page1 = new Page({
            containbox: "#content1",
            maxpage: "4",
            dataclass: ".item",
            pagebox: "#page1"
        });
        var page2 = new Page({
            containbox: "#content2",
            maxpage: "4",
            dataclass: ".item",
            pagebox: "#page2"
        });
        var page3 = new Page({
            containbox: "#content3",
            maxpage: "4",
            dataclass: ".item",
            pagebox: "#page3"
        });
        var page4 = new Page({
            containbox: "#content4",
            maxpage: "4",
            dataclass: ".item",
            pagebox: "#page4"
        });
        var page5 = new Page({
            containbox: "#content5",
            maxpage: "4",
            dataclass: ".item",
            pagebox: "#page5"
        });
        var page6 = new Page({
            containbox: "#content6",
            maxpage: "4",
            dataclass: ".item",
            pagebox: "#page6"
        });
    })();
    </script>
</body>

</html>
