/*
 * @Author: fangtian
 * @Date:   2017-04-20 10:06:10
 * @Last Modified by:   fangtian
 * @Last Modified time: 2017-04-20 11:10:25
 */



var city = ""; //城市
var gid = "";
var gidname = "";
var clicked = "";
var p = 0;
var f_refresh = true; //重新查询标记
var more = true;

function url(s) { location.href = s; }

jQuery(document).ready(function() {

    setLabel("city");
    setLabel("area");
    setLabel("grade");
    setLabel("onlineoroffline");
    setLabel("subject");

    clickClose("city", "所在地");
    clickClose("area", "校区");
    clickClose("grade", "年级");
    clickClose("onlineoroffline", "授课方式");
    clickClose("subject", "学科");

    //如果登录，带城市和年级
    if (city == '') {
        city1 = "all";
    } else {
        city1 = city;
        $("#city-close").removeClass('hidden');
        $("#key-city").text(city);
        $("#key-city").attr("key", city);
        //$("#city").collapse('hide');
    }

    if (gid == '') {
        gid1 = "all";
    } else {
        gid1 = gid;
        $("#grade-close").removeClass('hidden');
        $("#key-grade").text(gidname);
        $("#key-grade").attr("key", gid);
        //$("#grade").collapse('hide');
    }
    if(area==''){
    	area='all';
    }else{
    	 area1 = area;
        $("#grade-close").removeClass('hidden');
        $("#key-grade").text(gidname);
        $("#key-grade").attr("key", gid);
    }
    //alert("getCourseNew");
    getCourseNew(city1, "all", gid1, "all", "all", '');

});

//初始化条件按钮
function setLabel(name) {
    var a = "#" + name + "-close"; //关闭按钮
    var b = "#key-" + name; //按钮标题
    var c = "#" + name; //实际内容层
    //点击事件
    $(c).on('click', 'span', function(e) {
        f_refresh = true;
        p = 0;
        //$('#course_end_info').html("");
        //alert(f_refresh);
        clicked = name; //点了谁
        $(a).removeClass('hidden'); //打开关闭按钮
        $(b).text(this.innerText); //
        $(b).attr("key", $(this).attr("key"));
        $(c).collapse('hide'); //隐藏折叠层
        getCourseNew($("#key-city").attr("key"),
            $("#key-area").attr("key"),
            $("#key-grade").attr("key"),
            $("#key-onlineoroffline").attr("key"),
            $("#key-subject").attr("key"), ''); //重新搜索
    });
}

function clickClose(name, text) {
    var a = "#" + name + "-close"; //关闭按钮
    var b = "#key-" + name; //按钮

    //关闭按钮点击事件
    $(a).click(function() {

        f_refresh = true;
        p = 0;
        //$('#course_end_info').html("");
        //alert(f_refresh);

        //如果关闭了所在地，也需要关闭校区
        if (name == "city") {
            $("#area-close").addClass('hidden'); //隐藏关闭按钮
            $("#key-area").text("校区"); //按钮标题还原
            $("#key-area").attr("key", "all"); //按钮值还原
        }
        clicked = "close";
        $(a).addClass('hidden'); //隐藏关闭按钮
        $(b).text(text); //按钮标题还原
        $(b).attr("key", "all"); //按钮值还原

        /*
        alert($("#key-city").attr("key"));
        alert($("#key-area").attr("key"));
        alert($("#key-grade").attr("key"));
        alert($("#key-onlineoroffline").attr("key"));
        alert($("#key-subject").attr("key"));
        */

        getCourseNew(
            $("#key-city").attr("key"),
            $("#key-area").attr("key"),
            $("#key-grade").attr("key"),
            $("#key-onlineoroffline").attr("key"),
            $("#key-subject").attr("key"),
            '');
    });
}

//按老师查的时候初始化所有其他条件
function clearLabel() {
    closeNotSearch("city", "所在地");
    closeNotSearch("area", "校区");
    closeNotSearch("grade", "年级");
    closeNotSearch("onlineoroffline", "授课方式");
    closeNotSearch("subject", "学科");
}

//不查询
function closeNotSearch(name, text) {
    var a = "#" + name + "-close";
    var b = "#key-" + name;
    $(a).addClass('hidden');
    $(b).text(text);
    $(b).attr("key", "all");
}

function resetCity() {
    $("#city div div span").each(function() {
        $(this.parentNode).hide();　　　
        for (var i = 0; i < nowCity.length; i++) {
            // alert(nowCity[i]+"-"+$(this).attr("key"));
            if (nowCity[i] == $(this).attr("key")) { $(this.parentNode).show() }
        }
    });
}

function resetArea() {
    $("#area div div span").each(function() {
        $(this.parentNode).hide();
    });

    //alert("resetArea nowArea="+JSON.stringify(nowArea));
    for (var i = 0; i < nowArea.length; i++) {
        $("#area" + i).attr("key", nowArea[i]);
        $("#area" + i).html(nowArea[i]);
        $("#area" + i).parent().show();
    }
}

function resetGrade() {
    $("#grade div div span").each(function() {
        $(this.parentNode).hide();　　　　
        for (var key in nowGrade) {
            if (key == $(this).attr("key")) { $(this.parentNode).show() }
        }
    });
}

function resetOnlineoroffline() {
    $("#onlineoroffline div div span").each(function() {
        $(this.parentNode).hide();　　　　
        for (var key in nowOnlineoroffline) {
            //alert(key+"-"+$(this).attr("key"));
            if (key == $(this).attr("key")) { $(this.parentNode).show() }
        }
    });
}

function resetSubject() {
    $("#subject div div span").each(function() {
        $(this.parentNode).hide();　　　　
        for (var key in nowSubject) {
            if (key == $(this).attr("key")) { $(this.parentNode).show() }
        }
    });
}

//重置搜索项目
function resetCondition() {
    resetArea();
    resetCity();
    resetGrade();
    resetOnlineoroffline();
    resetSubject();
}

var finished = true;
$(window).scroll(function() {
    //alert("scroll");
    //alert($(window).height());
    //alert($(window).scrollTop());
    //alert($(document).height());		
    scrollpage();
});

$(document).keydown(function(event) {
    if (event.keyCode == 40) {
        //alert("down");
        //alert(finished);
        scrollpage();
    }
});

function scrollpage() {
    if (finished == false) return false;
    	//alert(finished);
    if (($(window).height() + $(window).scrollTop()) >= $(document).height()) {　　
        //加载更多的数据
        //alert("加载更多的数据");
        nextPage();
    }
}

function nextPage() {
    if (more == false) return false;
    f_refresh = false;
    //alert(f_refresh);
    finished = false;
    getCourseNew(
        $("#key-city").attr("key"),
        $("#key-area").attr("key"),
        $("#key-grade").attr("key"),
        $("#key-onlineoroffline").attr("key"),
        $("#key-subject").attr("key"), '');
}

function showCourseEndInfo() {
    $('#p').val() == '' ? p = 1 : p = $('#p').val();
    total_page = $('#total_page').val();

    //alert(p);
    //alert(total_page);		
    p++;

    if (p > total_page && !(p == 1 && total_page == 0)) {
        //alert("没有更多了哦");
        $('#course_end_info').html("没有更多了哦~");
        more = false;
    } else {
        $('#course_end_info').html('请使用鼠标滚轮或向下箭头浏览更多课程<br><img src="/fangtian_ol/Source/2/images/down.png" style="cursor:pointer;" onClick="nextPage();">');
        more = true;
    }
}

function getCourseNew(c_city, c_area, c_grade, c_onlineoroffline, c_subject, tid) {
    $.getJSON("/fangtian_ol/index.php/Course/getCourseNew.html", {
        city: c_city,
        area: c_area,
        gid: c_grade,
        onlineoroffline: c_onlineoroffline,
        sid: c_subject,
        tid: tid,
        p: p
    }, function(data) {
        if (data.status == 1) {
            str_course = data.info;

            if (f_refresh) {
                $("#course_list").html(str_course);
            } else {
                $("#course_list").append(str_course);
            }

            //alert("show");
            //alert(str_course);				
            nowCity = data.data['nowCity'];
            nowArea = data.data['nowArea'];
            nowGrade = data.data['nowGrade'];
            nowSubject = data.data['nowSubject'];
            nowOnlineoroffline = data.data['nowOnlineoroffline'];
            // alert("count subject="+nowSubject[3]+"count city"+nowCity.length);

            resetCondition();
            finished = true;

            $('#p').val(data.data['p']);
            $('#total_page').val(data.data['total_page']);
            showCourseEndInfo();

        } else {
            alert("获取数据失败，请重试");
        }
    });
}
