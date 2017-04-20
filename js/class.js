/*
 * @Author: fangtian
 * @Date:   2017-04-19 09:10:56
 * @Last Modified by:   fangtian
 * @Last Modified time: 2017-04-19 17:15:43
 */
// 初始化校区层
function init_area() {
    //所有校区不可见
    for (var i = 0; i < total_area; i++) {
        $("#area" + i).attr("style", "display:none");
    }
    //根据area初始化
    for (var i = 0; i < areaoriginal.length; i++) {
        // alert(area[i].name);
        $("#area" + i).unbind("click");
        $("#area" + i).attr("style", "display:"); //可见
        $("#area" + i).html(areaoriginal[i].name); //写名字
        $("#area" + i).bind("click", { 'tn': areaoriginal[i].name, 'i': i }, function(e) {
            clickarea(e);
        }); //绑定点击事件
    }
}

//点击某校区
function clickarea(e) {
    init_area1(1); //所有默认样式
    if ($("#area" + e.data.i).html() == area_selected) {
        //alert("连续2次点了同一个老师");
        area_selected = "";
    } else {
        $("#area" + e.data.i).addClass("btn-danger"); //当前按钮选中状态
        area_selected = $("#area" + e.data.i).html(); //选中标志
    }

    refreshWeek();
    refreshTeacher();
}

//所有校区去掉所有样式，加上默认样式，disabled false
function init_area1(s) {
    //s 是控制是否去掉disabled的参数，在点击所有老师按钮的时候要去掉，但是在点击单个老师的时候不能去掉disabled
    for (var i = 0; i < areaoriginal.length; i++) {
        if ($("#area" + i).hasClass('dashedborder')) continue;
        $("#area" + i).removeClass();
        // $("#teacher"+i).addClass("btn btn-default col-md-2 col-sm-4 col-xs-6");
        $("#area" + i).attr("class", "btn btn-default col-md-2 col-sm-4 col-xs-6");
        if (s == 0) $("#area" + i).attr("disabled", false);
    }
}

//过滤新的班级集合，前三个是3个区域选择后的值，最后一个是不过滤那个选项的标记
function newClass(area, teachername, week, flag) {
    class1 = [];
    // alert("class1===="+JSON.stringify(class1));
    str = " 1==1 ";
    if (flag != "area") {
        if (area != '') str = str + " && classoriginal[i]['area']=='" + area + "'";
    }
    if (flag != "teachername") {
        if (teachername != '') str = str + " && classoriginal[i]['teachername']=='" + teachername + "'";
    }
    if (flag != "week") {
        if (week != '') str = str + " && classoriginal[i]['week']=='" + week + "'";
    }
    // alert(str);
    j = 0;
    for (var i = 0; i < classoriginal.length; i++) {
        if (eval(str)) {
            // alert("===="+JSON.stringify(classoriginal[i]));
            class1[j] = classoriginal[i];
            j++;
        }
    };
    return class1;
}

//刷新老师 恢复teachernow中的老师disabled，其他disabled
//如果此区域没有选择，就用所有条件过滤出来的结果集合来刷新此区域，
//如果此区域已选择，就用除此区域已选择条件以外的所有条件过滤出来的结果集来刷新此区域
function refreshTeacher() {
    // alert("refreshTeacher1:"+tn_selected);
    if (tn_selected == "") {
        newclass = newClass(area_selected, tn_selected, week_selected, "all");
    } else {
        newclass = newClass(area_selected, tn_selected, week_selected, "teachername");
    }
    //新班级集合
    newteacher = newTeacher(newclass);
    //新老师集合
    // console.log("newclass="+JSON.stringify(newclass));
    // console.log("newteacher="+JSON.stringify(newteacher));

    for (var i = 0; i < teacheroriginal.length; i++) {
        $("#teacher" + i).attr("disabled", "disabled"); //先所有无效
        $("#teacher" + i).addClass("dashedborder"); //
        for (var j = 0; j < newteacher.length; j++) {
            if (teacheroriginal[i].name == newteacher[j].name) {
                $("#teacher" + i).attr("disabled", false); //有效
                $("#teacher" + i).attr("class", "btn btn-default col-md-2 col-sm-4 col-xs-6"); //加普通按钮样式       
                if (newteacher[j].name == tn_selected) $("#teacher" + i).addClass("btn-danger"); //如果是选中过，加选中样式
                break;
            }
        }
    }
}

//刷新时间 显示并置灰所有老师 恢复teachernow中的老师并绑定事件
function refreshArea() {
    // alert("refreshArea1:"+area_selected);
    if (area_selected == "") {
        newclass = newClass(area_selected, tn_selected, week_selected, "all");
    } else {
        newclass = newClass(area_selected, tn_selected, week_selected, "area");
    }
    newarea = newArea(newclass);
    // console.log("newclass="+JSON.stringify(newclass));
    // console.log("newarea="+JSON.stringify(newarea));
    for (var i = 0; i < areaoriginal.length; i++) {
        $("#area" + i).attr("disabled", "disabled");
        $("#area" + i).addClass("dashedborder"); //
        for (var j = 0; j < newarea.length; j++) {
            if (areaoriginal[i].name == newarea[j].name) {
                $("#area" + i).attr("disabled", false);
                $("#area" + i).attr("class", "btn btn-default col-md-2 col-sm-4 col-xs-6");
                if (newarea[j].name == area_selected) $("#area" + i).addClass("btn-danger"); //如果是选中过，加选中样式
                break;
            }
        }
    }
}

//刷新时间 显示并置灰所有老师 恢复teachernow中的老师并绑定事件
function refreshWeek() {
    // alert("refreshWeek1:"+week_selected);
    if (week_selected == "") {
        newclass = newClass(area_selected, tn_selected, week_selected, "all");
    } else {
        newclass = newClass(area_selected, tn_selected, week_selected, "week");
    }

    newweek = newWeek(newclass);

    // console.log("newclass="+JSON.stringify(newclass));
    // console.log("newweek="+JSON.stringify(newweek));

    for (var i = 0; i < weekoriginal.length; i++) {
        $("#" + weekoriginal[i].week).attr("disabled", "disabled");
        $("#" + weekoriginal[i].week).hide();
    }

    // alert(JSON.stringify(weeknow));

    for (var i = 0; i < newweek.length; i++) {
        $("#" + newweek[i].week).attr("disabled", false);
        //$("#"+weeknow[i].week).show();
        $("#" + newweek[i].week).css("display", "block");
        if (newweek[i].num <= 0) {
            $('#' + newweek[i].week).html("名额已满");
            // $('#'+week[i].week).addClass("hot bg-info");
            $('#' + newweek[i].week).attr("class", "complet");
            // alert(weeknow[i].week + "   " + week_selected);
            //如果选中的星期名额已满，disabled星期并置week_selected为空
            if (newweek[i].week == week_selected) {
                $("#" + week_selected).attr("disabled", "disabled");
                week_selected = "";
            }
        } else {
            if (newweek[i].num <= num_limit) {
                $('#' + newweek[i].week).html("剩余：" + newweek[i].num); //设置人数
            } else {
                $('#' + newweek[i].week).html("热报中");
            }
            $('#' + newweek[i].week).attr("class", "hot bg-info btn");
            if (week_selected != "") $("#" + week_selected).attr("class", "available bg-success btn"); //当前区域为选中;
        }
    }
}

// 初始化老师层
function init_teacher() {
    //所有老师不可见
    for (var i = 0; i < total_teacher; i++) {
        $("#teacher" + i).attr("style", "display:none");
    }
    //根据teacher初始化
    for (var i = 0; i < teacher.length; i++) {
        $("#teacher" + i).attr("style", "display:"); //可见
        $("#teacher" + i).html(teacher[i].name); //写名字
        $("#teacher" + i).bind("click", { 'tn': teacher[i].name, 'i': i }, function(e) {
            clickteacher(e);
        }); //绑定点击事件
    }
}

//所有老师去掉所有样式，加上默认样式，disabled false
function init_teacher1(s) {
    //s 是控制是否去掉disabled的参数，在点击所有老师按钮的时候要去掉，但是在点击单个老师的时候不能去掉disabled
    for (var i = 0; i < teacheroriginal.length; i++) {
        if ($("#teacher" + i).hasClass('dashedborder')) continue;
        $("#teacher" + i).removeClass();
        // $("#teacher"+i).addClass("btn btn-default col-md-2 col-sm-4 col-xs-6");
        $("#teacher" + i).attr("class", "btn btn-default col-md-2 col-sm-4 col-xs-6");
        if (s == 0) $("#teacher" + i).attr("disabled", false);
    }
}

//将所有可见的老师disabled
function init_teacher2() {
    for (var i = 0; i < teacher.length; i++) {
        if ($("#teacher" + i).attr("style") == "display:" || $("#teacher" + i).attr("style") == "") {
            $("#teacher" + i).attr("disabled", "disabled"); //如果可见disabled
        }
    }
}

//点击某教师
function clickteacher(e) {
    init_teacher1(1); //所有老师默认样式
    if ($("#teacher" + e.data.i).html() == tn_selected) {
        //alert("连续2次点了同一个老师");
        tn_selected = "";
    } else {
        $("#teacher" + e.data.i).addClass("btn-danger"); //当前按钮选中状态
        tn_selected = $("#teacher" + e.data.i).html(); //老师选中标志
    }

    refreshWeek();
    refreshArea();
}

//星期层全部初始化，清空内容、去掉样式，如果已经选中星期，那个不动
function init_week_allclear(week_selected) {
    for (var i = 1; i < num_stage; i++) {
        for (var j = 0; j < 4; j++) {
            if (week_selected == i + "-" + j) continue;
            $('#' + i + "-" + j).html('');
            $('#' + i + "-" + j).removeClass();
            $('#' + i + "-" + j).unbind("click");
        }
    }
}

function init_week() {
    init_week_allclear(); //星期层全部初始化
    //根据time初始化
    for (var i = 0; i < week.length; i++) {
        // alert(week[i].num);
        if (week[i].num <= 0) {
            $('#' + week[i].week).html("名额已满");
            // $('#'+week[i].week).addClass("hot bg-info");
            $('#' + week[i].week).attr("class", "complet");
        } else {
            if (week[i].num <= num_limit) {
                $('#' + week[i].week).html("剩余：" + week[i].num);
            } else {
                $('#' + week[i].week).html("热报中");
            }
            //$('#'+week[i].week).html(week[i].num);//设置人数
            // $('#'+week[i].week).addClass("hot bg-info");
            $('#' + week[i].week).attr("class", "hot bg-info");
            $('#' + week[i].week).bind("click", { 'week': week[i].week }, function(e) {
                clickweek(e);
            }); //绑定事件
        }
    }
}

function init_week333(week) {
    // alert("init_week333 week="+JSON.stringify(week));
    init_week_allclear(); //星期层全部初始化
    //根据time初始化
    for (var i = 0; i < week.length; i++) {
        if (week[i].num <= 0) {
            $('#' + week[i].week).html("名额已满");
            // $('#'+week[i].week).addClass("hot bg-info");
            $('#' + week[i].week).attr("class", "complet");
            $("#" + week[i].week).css("display", "block");
        } else {
            if (week[i].num <= num_limit) {
                $('#' + week[i].week).html("剩余：" + week[i].num);
            } else {
                $('#' + week[i].week).html("热报中");
            }
            //$('#'+week[i].week).html(week[i].num);//设置人数
            // $('#'+week[i].week).addClass("hot bg-info");
            $('#' + week[i].week).attr("class", "hot bg-info btn");

            $('#' + week[i].week).off("click");
            $('#' + week[i].week).on("click", "", { 'week': week[i].week }, function(e) {
                // alert("用on绑定事件");
                clickweek(e);
            }); //绑定事件

            if (week_selected != "") $("#" + week_selected).attr("class", "available bg-success btn"); //当前区域为选中;
        }
    }
}

//把所有选中状态变成正常状态
function init_week1() {
    //根据time初始化
    for (var i = 0; i < week.length; i++) {
        if ($('#' + week[i].week).attr("class") == "available bg-success btn") {
            $('#' + week[i].week).removeClass();
            // $('#'+week[i].week).addClass("hot bg-info");
            $('#' + week[i].week).attr("class", "hot bg-info btn");
        }
    }
}

//点击星期层某区域
function clickweek(e) {
    init_week1(); //把所有选中状态变成正常状态
    if ($("#" + e.data.week).html() == "名额已满" || $("#" + e.data.week).html() == "") {
        return false;
    }

    if (e.data.week == week_selected) {
        //alert("连续2次点了同一个老师");
        week_selected = "";
    } else {
        $("#" + e.data.week).attr("class", "available bg-success btn"); //当前区域为选中
        week_selected = e.data.week; //标志赋值
    }

    refreshTeacher();
    refreshArea();
}

//学生与当前课程的关系，报名、审核中、已审核
function get_course_valid() {
    valid = 0;
    for (var j = 0; j < class1.length; j++) {
        if (class1[j].valid != 0) {
            valid = class1[j].valid;
        }
    }
    return valid;
}

//通过老师名字和星期定位班级id
function get_clsid(tn, week) {
    for (var j = 0; j < class1.length; j++) {
        if (tn == class1[j].teachername && week == class1[j].week) {
            // return class1[j].id;
            return [class1[j].id, class1[j].valid];
            break;
        }
    }
}

//通过老师名字和星期定位班级level
function get_level(tn, week) {
    for (var j = 0; j < class1.length; j++) {
        if (tn == class1[j].teachername && week == class1[j].week) {
            return class1[j].level;
            break;
        }
    }
}

function btn_join_all_hide() {
    $("#btn_join").attr("style", "display:none");
    $("#btn_levelnoten").attr("style", "display:none");
    $("#btn_joinstatus").attr("style", "display:none");
    $("#btn_test").attr("style", "display:none");

    $("#btn_join1").attr("style", "display:none");
    $("#btn_join_price").attr("style", "display:none");
    $("#btn_levelnoten1").attr("style", "display:none");
    $("#btn_joinstatus1").attr("style", "display:none");
    $("#btn_test1").attr("style", "display:none");
}

//审核中或审核后状态显示
function join_review() {
    $("#btn_join").html("报名课程");
    $("#btn_join1").html("报名课程");
    if (isLogin == 0) {
        $("#btn_join").attr("style", "display:");
        $("#btn_join1").attr("style", "display:");
        return false;
    }

    if (display == "2") {
        $("#btn_finish").attr("style", "display:");
        $("#btn_finish1").attr("style", "display:");
        return;
    }

    if (iftest == "0" && testlevel == "") {
        $("#btn_test").attr("style", "display:");
        $("#btn_test1").attr("style", "display:");
        return;
    }
    /*
    if(iftest=="0" && testlevel!=""){
    	$("#btn_join").attr("style","display:");
    	return;
    }
    */
    // valid = get_clsid(tn_selected,week_selected)[1];
    //原来我的想法是学生针对每一个班的报名情况，按老师要求改为针对每个课程的报名情况
    // valid = get_course_valid();
    // alert(tn_selected);
    // alert(week_selected);

    //该学生对这些班级的报名情况 0 没报 1 报了审核中 2 已报且审核通过
    if (valid == "1") {
        btn_join_all_hide();
        $("#btn_joinstatus").attr("style", "display:");
        $("#btn_joinstatus").html("待付款");
        $("#btn_joinstatus").click(function() { window.location.href = "../User/myCourse.html" });
        $("#btn_join").attr("style", "display:none");

        $("#btn_joinstatus1").attr("style", "display:");
        $("#btn_joinstatus1").html("待付款");
        $("#btn_joinstatus1").click(function() { window.location.href = "../User/myCourse.html" });
        $("#btn_join1").attr("style", "display:none");
        $("#btn_join_price").attr("style", "display:none");
    }

    if (valid == "0") {
        btn_join_all_hide();
        if (tn_selected != '' && week_selected != '') {
            clsid = get_clsid(tn_selected, week_selected)[0];
            for (i = 0; i < class1.length; i++) {
                if (clsid == class1[i]['id']) {
                    //if(class1[i]['rmb']=='0'){break;}
                    if (class1[i]['remainder_lesson'] == "0") {
                        alert("该班级所有课时已经结束，请选择其他班级，谢谢");
                        clsid = '';
                    } else {
                        //alert("perday");
                        //alert(courseid);
                        if (courseid == "289" || courseid == "290" || courseid == "291" || courseid == "292" || courseid == "293") {
                            //alert("是优惠课");
                            p = class1[i]['rmb'];
                        } else {
                            //alert("不是优惠课");
                            if (class1[i]['lessonnum'] != class1[i]['remainder_lesson']) {
                                p = parseInt(class1[i]['rmb'] / class1[i]['lessonnum'] * class1[i]['remainder_lesson']);
                                //alert("该班级已经开始上课，剩余课时请付费:"+p);
                            } else {
                                p = class1[i]['rmb'];
                            }
                        }

                        //$("#btn_join").html("报名课程 现价："+p+"元");
                        //$("#btn_join1").html("报名课程 现价："+p+"元");
                        $("#discount_price").html(p);
                    }
                }
            }
        }
        $("#btn_join").attr("style", "display:");
        $("#btn_join1").attr("style", "display:");
        $("#btn_join_price").attr("style", "display:");
    }

    if (valid == "2") {
        btn_join_all_hide();
        $("#btn_joinstatus").attr("style", "display:");
        $("#btn_joinstatus").html("已缴费");
        $("#btn_join").attr("style", "display:none");

        $("#btn_joinstatus1").attr("style", "display:");
        $("#btn_joinstatus1").html("已缴费");
        $("#btn_join1").attr("style", "display:none");
        $("#btn_join_price").attr("style", "display:none");
    }
    if (valid == "3") {
        btn_join_all_hide();
        $("#btn_joinstatus").attr("style", "display:");
        $("#btn_joinstatus").html("已退出");
        $("#btn_join").attr("style", "display:none");

        $("#btn_joinstatus1").attr("style", "display:");
        $("#btn_joinstatus1").html("已退出");
        $("#btn_join1").attr("style", "display:none");
        $("#btn_join_price").attr("style", "display:none");
    }
}

//报名按钮状态控制，是否测试过，级别是否够
function join_status_ctl() {

    if (flag_join == 1) {
        if (tn_selected == "" || week_selected == "") {
            $("#warning-block").hide();
            $('#errinfo').html('请选择您希望的教课老师和适合您的上课时间');
            $("#infoModal").modal('show');
            setTimeout(function() { $("#infoModal").modal("hide") }, 10000);
            return false;
        }
    }
    /*
    if(tn_selected=="" && week_selected!=""){
      $("#warning-block").hide();
      $('#errinfo').html('请选择您希望的教课老师');
      $("#infoModal").modal('show');
      setTimeout(function(){$("#infoModal").modal("hide")},3000);
	  return false;
    }
    if(tn_selected!="" && week_selected==""){
      $("#warning-block").hide();
      $('#errinfo').html('请选择适合您的上课时间');
      $("#infoModal").modal('show');
      setTimeout(function(){$("#infoModal").modal("hide")},3000);
	  return false;
    }
    */
    if (tn_selected != "" && week_selected != "") {
        level = get_level(tn_selected, week_selected);
        // alert(level);
        // alert(level + "--" + testlevel + "--" + iftest);
        if (iftest == "0") {
            //需要测试
            //alert('需要测试');
            if (testlevel != '') {
                //做过测试
                //alert('做过测试');
                if (parseInt(level) < parseInt(testlevel)) {
                    //级别不够
                    //alert('级别不够');
                    btn_join_all_hide();
                    $("#btn_levelnoten").attr("style", "display:");
                    $("#btn_levelnoten1").attr("style", "display:");
                    clsid = '';
                } else {
                    //级别够
                    //alert('级别够');             
                    join_review();
                }
            }
        } else {
            //不需要测试
            //alert('不需要测试');                
            join_review();
        }
        // alert(level + "--" + testlevel + "--" + iftest);
        // if(level<testlevel){
        //   $("#btn_levelnoten").attr("style","display:");
        //   $("#btn_join").attr("style","display:none");
        //   //显示级别不够按钮  
        // }else{
        //   $("#btn_levelnoten").attr("style","display:none");
        //   $("#btn_join").attr("style","display:");      
        //   clsid = get_clsid(tn_selected,week_selected);
        //   //需要测试，级别也够，出报名按钮
        // 	 alert("all selected"+"--"+week_selected+"--"+tn_selected);
        // 	 alert(clsid);     
    }
    // }
}

//报名
function gotest(courseid, qsid) {
    if (isLogin == 0) {
        //alert('您尚未登录，请先登录');
        //jQuery.noConflict();
        $('#loginModal').modal('show');
        //window.$=jQuery;
    } else if (isLogin == 1) {
        alert('请完善资料');
        window.location.href = "/fangtian_ol/index.php/User/editProfile.html";
    } else {
        //window.open("/fangtian_ol/index.php/Test/beforetest.html?id="+qsid+"&cid="+courseid);
        window.location.href = "/fangtian_ol/index.php/Test/beforetest.html?id=" + qsid + "&cid=" + courseid;
    }
}

//报名
function join(cid) {
    if (isLogin == 0) {
        //alert('您尚未登录，请先登录');
        //jQuery.noConflict();
        $('#loginModal').modal('show');
        //window.$=jQuery;
    } else if (isLogin == 1) {
        alert('请完善资料');
        window.location.href = "/fangtian_ol/index.php/User/editProfile.html";
    } else {
        /*
  	  if(iftest=="0" && testlevel==""){
		alert("该课程需要测试");
		gotest(420,0);
		return false;
  	  }	  
  	  */
        flag_join = 1;
        join_status_ctl();
        //alert(clsid);
        if (clsid) {
            $.get("/fangtian_ol/index.php/Course/join.html", { classid: clsid }, function(data) {
                //alert(data.info);
                if (data.status == 2) {
                    //alert("需要测试");
                    //window.location.href="/fangtian_ol/index.php/Course/courseTest.html?classid="+clsid;//直接接受qsid，跳转到测试卷子
                }
                if (data.status == 4) {
                    //window.location.href="/fangtian_ol/index.php/User/myCourse.html";//window.location.reload();
                    url = "/fangtian_ol/index.php/User/selectPayType.html?oid=" + data.oid;
                    window.location.href = url;
                }
                //if(data.status==3)alert(1);
                if (data.status == 6) {
                    alert("恭喜您报名成功！");
                    url = "/fangtian_ol/index.php/User/myCourse.html";
                    window.location.href = url;
                }
                if (data.status == 7) {
                    alert("该班级名额已满");
                }
                if (data.status == 8) {
                    alert("您已经报名过该课程");
                }
            });
        }
        //return false;
    }
}

//报名结束
function finish() {
    $("#warning-block").hide();
    $('#errinfo').html('此课程已结束，请选择其他可以报名的班');
    $("#infoModal").modal('show');
    setTimeout(function() { $("#infoModal").modal("hide") }, 5000);
    return false;
}

var class1 = [];
var teacher = [];
var week = [];
var stage = [];

var tn_selected = ""; //老师已选标记
var week_selected = ""; //星期已选标记
var area_selected = ""; //校区已选标记

var clsid; //班级id
var num_limit = 5; //显示热报中人数上限
var num_stage = 7; //期数个数，初始化期数层的时候会根据这个数初始化
var total_teacher = 10; //暂时放5个老师位置
var total_area = 10; //暂时放5个校区位置

var flag_join = 0; //点击报名按钮标志
var courseid = "420";
var display = "1"; //可以报名结束报名
var testlevel = "";
var iftest = "1";
var valid = "";
var frequency = "1";

//alert(iftest+" --"+testlevel+"--");
//if(iftest=="0" && testlevel=="")$("#btn_test").attr("style","display:");

var class2 = [];
var j, k;

//alert("teacher="+JSON.stringify(teacher));
//alert("week="+JSON.stringify(week));

//显示期数
//一天一次在期数后面+时间
/*
var i;
var ii=0;
var stage="";
for(i=0;i<week.length;i++){
  if(week[i].stage==stage){
  }
  else{
    ii++;
    $('#stage'+ii).html(week[i].stage);
    stage = week[i].stage;
  }
}*/
//显示期数

var item;

function newTeacher(class1) {
    //新的teacher
    // alert("classnnnnnnnnnnnnnnnn="+JSON.stringify(class1));
    teacher = [];
    j = 0;
    for (var i = 0; i < class1.length; i++) {
        teacherExist = false;
        for (var j = 0; j < teacher.length; j++) {
            if (teacher[j]['name'] == class1[i]['teachername']) {
                teacherExist = true;
                break;
            }
        }
        if (teacherExist == false) {
            //item={"name":class1[i]['teachername']};
            item = { "name": class1[i]['teachername'] };
            teacher.push(item);
        }
    }
    return teacher;
}

function newWeek(class1) {
    // alert("wwwwwwwwwwwww="+JSON.stringify(class1));
    week = [];
    j = 0;
    //新的week    
    for (var i = 0; i < class1.length; i++) {
        weekExist = false;
        var jn = parseInt(class1[i]['num']) - parseInt(class1[i]['joinnum']);
        if (jn < 0) jn = 0; //有可能为-1
        for (var j = 0; j < week.length; j++) {
            if (week[j]['week'] == class1[i]['week']) {
                week[j]['num'] = parseInt(week[j]['num']) + jn;
                weekExist = true;
                break;
            }
        }
        if (weekExist == false) {
            item = { "week": class1[i]['week'], "num": jn, "stage": class1[i]['stage'] };
            week.push(item);
        }
    }
    // alert("weekweek="+JSON.stringify(week));
    return week;
}

function newArea(class1) {
    area = [];
    j = 0;
    //新的area
    for (var i = 0; i < class1.length; i++) {
        areaExist = false;
        for (var j = 0; j < area.length; j++) {
            if (area[j]['name'] == class1[i]['area']) {
                areaExist = true;
                break;
            }
        }
        if (areaExist == false) {
            item = { "name": class1[i]['area'] };
            area.push(item);
        }
    }
    // alert("areaarea="+JSON.stringify(area));
    return area;
}

//比按周显示多的一个方法，因为要显示几月几号-几月几号
function showStage(class1) {
    // alert("showStage class1="+JSON.stringify(classoriginal));
    j = 0;
    //新的stage
    for (var i = 0; i < class1.length; i++) {
        stageExist = false;
        for (var j = 0; j < stage.length; j++) {
            if (stage[j]['stage'] == class1[i]['stage']) {
                stageExist = true;
                break;
            }
        }
        if (stageExist == false) {
            item = { "stage": class1[i]['stage'] };
            stage.push(item);
        }
    }
    // alert("stage="+JSON.stringify(stage));
    //显示stage
    for (var i = 0; i < stage.length; i++) {
        $('#stage' + (i + 1)).html(stage[i].stage);
    }
}

//classoriginal 初始班级信息 class1 每次过滤后的班级信息
var classoriginal = [{
    "name": "五一小升初联考（五里墩）",
    "id": "2190",
    "levelname": "公益",
    "level": "100",
    "num": "100",
    "joinnum": "39",
    "teacherid": "100013",
    "teachername": "方田教育五里墩",
    "week": "1-1",
    "stage": "05月01日-05月01日",
    "valid": "",
    "rmb": "1.00",
    "lessonnum": "1",
    "remainder_lesson": "1",
    "area": "五里墩校区"
}, {
    "name": "五一小升初联考（北一环）",
    "id": "2189",
    "levelname": "公益",
    "level": "100",
    "num": "100",
    "joinnum": "43",
    "teacherid": "100018",
    "teachername": "方田教育北一环",
    "week": "1-1",
    "stage": "05月01日-05月01日",
    "valid": "",
    "rmb": "1.00",
    "lessonnum": "1",
    "remainder_lesson": "1",
    "area": "北一环校区"
}, {
    "name": "五一小升初联考（安庆路）",
    "id": "2188",
    "levelname": "公益",
    "level": "100",
    "num": "100",
    "joinnum": "98",
    "teacherid": "100065",
    "teachername": "方田教育",
    "week": "1-1",
    "stage": "05月01日-05月01日",
    "valid": "",
    "rmb": "1.00",
    "lessonnum": "1",
    "remainder_lesson": "1",
    "area": "安庆路校区"
}, {
    "name": "周日上午提高班",
    "id": "1861",
    "levelname": "提高",
    "level": "30",
    "num": "20",
    "joinnum": "15",
    "teacherid": "100061",
    "teachername": "杨禾兆昆",
    "week": "0-0",
    "stage": "",
    "valid": "",
    "rmb": "2250.00",
    "lessonnum": "15",
    "remainder_lesson": "15",
    "area": "安庆路校区"
}, {
    "name": "周日下午提高班",
    "id": "1862",
    "levelname": "提高",
    "level": "30",
    "num": "20",
    "joinnum": "13",
    "teacherid": "100061",
    "teachername": "杨禾兆昆",
    "week": "0-1",
    "stage": "",
    "valid": "",
    "rmb": "2250.00",
    "lessonnum": "15",
    "remainder_lesson": "15",
    "area": "安庆路校区"
}, {
    "name": "周五晚上提高班",
    "id": "1863",
    "levelname": "提高",
    "level": "30",
    "num": "20",
    "joinnum": "10",
    "teacherid": "100061",
    "teachername": "杨禾兆昆",
    "week": "5-2",
    "stage": "",
    "valid": "",
    "rmb": "2250.00",
    "lessonnum": "15",
    "remainder_lesson": "15",
    "area": "安庆路校区"
}, {
    "name": "周六下午基础班",
    "id": "1864",
    "levelname": "基础",
    "level": "40",
    "num": "20",
    "joinnum": "10",
    "teacherid": "100061",
    "teachername": "杨禾兆昆",
    "week": "6-1",
    "stage": "",
    "valid": "",
    "rmb": "2250.00",
    "lessonnum": "15",
    "remainder_lesson": "15",
    "area": "安庆路校区"
}, {
    "name": "周六晚上尖端班",
    "id": "1865",
    "levelname": "尖端",
    "level": "5",
    "num": "20",
    "joinnum": "3",
    "teacherid": "100061",
    "teachername": "杨禾兆昆",
    "week": "6-2",
    "stage": "",
    "valid": "",
    "rmb": "2250.00",
    "lessonnum": "15",
    "remainder_lesson": "15",
    "area": "安庆路校区"
}, {
    "name": "周日晚上尖子班",
    "id": "1866",
    "levelname": "尖子",
    "level": "20",
    "num": "20",
    "joinnum": "15",
    "teacherid": "100061",
    "teachername": "杨禾兆昆",
    "week": "0-2",
    "stage": "",
    "valid": "",
    "rmb": "2250.00",
    "lessonnum": "15",
    "remainder_lesson": "15",
    "area": "安庆路校区"
}, {
    "name": "杨家栋老师周日上午基础班",
    "id": "2157",
    "levelname": "基础",
    "level": "40",
    "num": "20",
    "joinnum": "1",
    "teacherid": "100065",
    "teachername": "方田教育",
    "week": "0-0",
    "stage": "",
    "valid": "",
    "rmb": "2250.00",
    "lessonnum": "15",
    "remainder_lesson": "15",
    "area": "安庆路校区"
}];

teacheroriginal = newTeacher(classoriginal);
// alert("teacher="+JSON.stringify(teacher));
weekoriginal = newWeek(classoriginal);
// alert("week="+JSON.stringify(week));
areaoriginal = newArea(classoriginal);
// alert("areaclassTotal="+JSON.stringify(area));

class1 = classoriginal;

init_area(); //初始化校区层
init_teacher(); //初始化老师层
init_week333(weekoriginal); //初始化星期层

showStage(classoriginal);

//alert(1);
join_review(); //初始化测试按钮
//alert(2);

if (area_selected != '') {
    // alert("默认校区");
    for (var i = 0; i < areaoriginal.length; i++) {
        if (areaoriginal[i]['name'] == area_selected) {
            $("#area" + i).click();
            break;
        }
    }
}

//当前只有一个老师和一个星期可选时默认选中
if (teacheroriginal.length == 1) {
    $('#teacherall').attr("class", "btn btn-default col-md-2 col-sm-4 col-xs-6");
    $("#teacher0").addClass("btn-danger"); //当前按钮选中状态
    tn_selected = $("#teacher0").html(); //老师选中标志
}
if (weekoriginal.length == 1 && weekoriginal[0].num != '0') {
    $("#" + weekoriginal[0].week).attr("class", "available bg-success btn"); //当前区域为选中
    week_selected = weekoriginal[0].week; //标志赋值
}
// $.getJSON('/fangtian_ol/index.php/Course/getClass.html?courseid='+courseid+'&frequency='+frequency+'&level='+testlevel, function(json){
//     //alert("JSON Data: " + json.data);
//     classoriginal = json.data;
//     // alert("init classoriginal="+JSON.stringify(classoriginal));
//     teacheroriginal = newTeacher(classoriginal);
//     // alert("teacher="+JSON.stringify(teacher));
//     weekoriginal = newWeek(classoriginal);
//     //alert("week="+JSON.stringify(week));
//     areaoriginal = newArea(classoriginal);
//     // alert("areaclassTotal="+JSON.stringify(area));

//     init_area();//初始化校区层
//     init_teacher();//初始化老师层
//     init_week333(weekoriginal);//初始化星期层

//     showStage(classoriginal);

//     join_review();//初始化测试按钮

// });

//alert(tn_selected+" "+week_selected);




// 初始化校区层
function init_area() {
    //所有校区不可见
    for (var i = 0; i < total_area; i++) {
        $("#area" + i).attr("style", "display:none");
    }
    //根据area初始化
    for (var i = 0; i < areaoriginal.length; i++) {
        // alert(area[i].name);
        $("#area" + i).unbind("click");
        $("#area" + i).attr("style", "display:"); //可见
        $("#area" + i).html(areaoriginal[i].name); //写名字
        $("#area" + i).bind("click", { 'tn': areaoriginal[i].name, 'i': i }, function(e) {
            clickarea(e);
        }); //绑定点击事件
    }
}

//点击某校区
function clickarea(e) {
    init_area1(1); //所有默认样式
    if ($("#area" + e.data.i).html() == area_selected) {
        //alert("连续2次点了同一个老师");
        area_selected = "";
    } else {
        $("#area" + e.data.i).addClass("btn-danger"); //当前按钮选中状态
        area_selected = $("#area" + e.data.i).html(); //选中标志
    }

    refreshWeek();
    refreshTeacher();
}

//所有校区去掉所有样式，加上默认样式，disabled false
function init_area1(s) {
    //s 是控制是否去掉disabled的参数，在点击所有老师按钮的时候要去掉，但是在点击单个老师的时候不能去掉disabled
    for (var i = 0; i < areaoriginal.length; i++) {
        if ($("#area" + i).hasClass('dashedborder')) continue;
        $("#area" + i).removeClass();
        // $("#teacher"+i).addClass("btn btn-default col-md-2 col-sm-4 col-xs-6");
        $("#area" + i).attr("class", "btn btn-default col-md-2 col-sm-4 col-xs-6");
        if (s == 0) $("#area" + i).attr("disabled", false);
    }
}

//过滤新的班级集合，前三个是3个区域选择后的值，最后一个是不过滤那个选项的标记
function newClass(area, teachername, week, flag) {
    class1 = [];
    // alert("class1===="+JSON.stringify(class1));
    str = " 1==1 ";
    if (flag != "area") {
        if (area != '') str = str + " && classoriginal[i]['area']=='" + area + "'";
    }
    if (flag != "teachername") {
        if (teachername != '') str = str + " && classoriginal[i]['teachername']=='" + teachername + "'";
    }
    if (flag != "week") {
        if (week != '') str = str + " && classoriginal[i]['week']=='" + week + "'";
    }
    // alert(str);
    j = 0;
    for (var i = 0; i < classoriginal.length; i++) {
        if (eval(str)) {
            // alert("===="+JSON.stringify(classoriginal[i]));
            class1[j] = classoriginal[i];
            j++;
        }
    };
    return class1;
}

//刷新老师 恢复teachernow中的老师disabled，其他disabled
//如果此区域没有选择，就用所有条件过滤出来的结果集合来刷新此区域，如果此区域已选择，就用除此区域已选择条件以外的所有条件过滤出来的结果集来刷新此区域
function refreshTeacher() {
    // alert("refreshTeacher1:"+tn_selected);
    if (tn_selected == "") {
        newclass = newClass(area_selected, tn_selected, week_selected, "all");
    } else {
        newclass = newClass(area_selected, tn_selected, week_selected, "teachername");
    }
    //新班级集合
    newteacher = newTeacher(newclass);
    //新老师集合
    // console.log("newclass="+JSON.stringify(newclass));
    // console.log("newteacher="+JSON.stringify(newteacher));

    for (var i = 0; i < teacheroriginal.length; i++) {
        $("#teacher" + i).attr("disabled", "disabled"); //先所有无效
        $("#teacher" + i).addClass("dashedborder"); //
        for (var j = 0; j < newteacher.length; j++) {
            if (teacheroriginal[i].name == newteacher[j].name) {
                $("#teacher" + i).attr("disabled", false); //有效
                $("#teacher" + i).attr("class", "btn btn-default col-md-2 col-sm-4 col-xs-6"); //加普通按钮样式       
                if (newteacher[j].name == tn_selected) $("#teacher" + i).addClass("btn-danger"); //如果是选中过，加选中样式
                break;
            }
        }
    }
}

//刷新时间 显示并置灰所有老师 恢复teachernow中的老师并绑定事件
function refreshArea() {
    // alert("refreshArea1:"+area_selected);
    if (area_selected == "") {
        newclass = newClass(area_selected, tn_selected, week_selected, "all");
    } else {
        newclass = newClass(area_selected, tn_selected, week_selected, "area");
    }
    newarea = newArea(newclass);
    // console.log("newclass="+JSON.stringify(newclass));
    // console.log("newarea="+JSON.stringify(newarea));
    for (var i = 0; i < areaoriginal.length; i++) {
        $("#area" + i).attr("disabled", "disabled");
        $("#area" + i).addClass("dashedborder"); //
        for (var j = 0; j < newarea.length; j++) {
            if (areaoriginal[i].name == newarea[j].name) {
                $("#area" + i).attr("disabled", false);
                $("#area" + i).attr("class", "btn btn-default col-md-2 col-sm-4 col-xs-6");
                if (newarea[j].name == area_selected) $("#area" + i).addClass("btn-danger"); //如果是选中过，加选中样式
                break;
            }
        }
    }
}

//刷新时间 显示并置灰所有老师 恢复teachernow中的老师并绑定事件
function refreshWeek() {
    // alert("refreshWeek1:"+week_selected);
    if (week_selected == "") {
        newclass = newClass(area_selected, tn_selected, week_selected, "all");
    } else {
        newclass = newClass(area_selected, tn_selected, week_selected, "week");
    }

    newweek = newWeek(newclass);

    // console.log("newclass="+JSON.stringify(newclass));
    // console.log("newweek="+JSON.stringify(newweek));

    for (var i = 0; i < weekoriginal.length; i++) {
        $("#" + weekoriginal[i].week).attr("disabled", "disabled");
        $("#" + weekoriginal[i].week).hide();
    }

    // alert(JSON.stringify(weeknow));

    for (var i = 0; i < newweek.length; i++) {
        $("#" + newweek[i].week).attr("disabled", false);
        //$("#"+weeknow[i].week).show();
        $("#" + newweek[i].week).css("display", "block");
        if (newweek[i].num <= 0) {
            $('#' + newweek[i].week).html("名额已满");
            // $('#'+week[i].week).addClass("hot bg-info");
            $('#' + newweek[i].week).attr("class", "complet");
            // alert(weeknow[i].week + "   " + week_selected);
            //如果选中的星期名额已满，disabled星期并置week_selected为空
            if (newweek[i].week == week_selected) {
                $("#" + week_selected).attr("disabled", "disabled");
                week_selected = "";
            }
        } else {
            if (newweek[i].num <= num_limit) {
                $('#' + newweek[i].week).html("剩余：" + newweek[i].num); //设置人数
            } else {
                $('#' + newweek[i].week).html("热报中");
            }
            $('#' + newweek[i].week).attr("class", "hot bg-info btn");
            if (week_selected != "") $("#" + week_selected).attr("class", "available bg-success btn"); //当前区域为选中;
        }
    }
}

// 初始化老师层
function init_teacher() {
    //所有老师不可见
    for (var i = 0; i < total_teacher; i++) {
        $("#teacher" + i).attr("style", "display:none");
    }
    //根据teacher初始化
    for (var i = 0; i < teacher.length; i++) {
        $("#teacher" + i).attr("style", "display:"); //可见
        $("#teacher" + i).html(teacher[i].name); //写名字
        $("#teacher" + i).bind("click", { 'tn': teacher[i].name, 'i': i }, function(e) {
            clickteacher(e);
        }); //绑定点击事件
    }
}

//所有老师去掉所有样式，加上默认样式，disabled false
function init_teacher1(s) {
    //s 是控制是否去掉disabled的参数，在点击所有老师按钮的时候要去掉，但是在点击单个老师的时候不能去掉disabled
    for (var i = 0; i < teacheroriginal.length; i++) {
        if ($("#teacher" + i).hasClass('dashedborder')) continue;
        $("#teacher" + i).removeClass();
        // $("#teacher"+i).addClass("btn btn-default col-md-2 col-sm-4 col-xs-6");
        $("#teacher" + i).attr("class", "btn btn-default col-md-2 col-sm-4 col-xs-6");
        if (s == 0) $("#teacher" + i).attr("disabled", false);
    }
}

//将所有可见的老师disabled
function init_teacher2() {
    for (var i = 0; i < teacher.length; i++) {
        if ($("#teacher" + i).attr("style") == "display:" || $("#teacher" + i).attr("style") == "") {
            $("#teacher" + i).attr("disabled", "disabled"); //如果可见disabled
        }
    }
}

//点击某教师
function clickteacher(e) {
    init_teacher1(1); //所有老师默认样式
    if ($("#teacher" + e.data.i).html() == tn_selected) {
        //alert("连续2次点了同一个老师");
        tn_selected = "";
    } else {
        $("#teacher" + e.data.i).addClass("btn-danger"); //当前按钮选中状态
        tn_selected = $("#teacher" + e.data.i).html(); //老师选中标志
    }

    refreshWeek();
    refreshArea();
}

//星期层全部初始化，清空内容、去掉样式，如果已经选中星期，那个不动
function init_week_allclear(week_selected) {
    for (var i = 1; i < num_stage; i++) {
        for (var j = 0; j < 4; j++) {
            if (week_selected == i + "-" + j) continue;
            $('#' + i + "-" + j).html('');
            $('#' + i + "-" + j).removeClass();
            $('#' + i + "-" + j).unbind("click");
        }
    }
}

function init_week() {
    init_week_allclear(); //星期层全部初始化
    //根据time初始化
    for (var i = 0; i < week.length; i++) {
        // alert(week[i].num);
        if (week[i].num <= 0) {
            $('#' + week[i].week).html("名额已满");
            // $('#'+week[i].week).addClass("hot bg-info");
            $('#' + week[i].week).attr("class", "complet");
        } else {
            if (week[i].num <= num_limit) {
                $('#' + week[i].week).html("剩余：" + week[i].num);
            } else {
                $('#' + week[i].week).html("热报中");
            }
            //$('#'+week[i].week).html(week[i].num);//设置人数
            // $('#'+week[i].week).addClass("hot bg-info");
            $('#' + week[i].week).attr("class", "hot bg-info");
            $('#' + week[i].week).bind("click", { 'week': week[i].week }, function(e) {
                clickweek(e);
            }); //绑定事件
        }
    }
}

function init_week333(week) {
    // alert("init_week333 week="+JSON.stringify(week));
    init_week_allclear(); //星期层全部初始化
    //根据time初始化
    for (var i = 0; i < week.length; i++) {
        if (week[i].num <= 0) {
            $('#' + week[i].week).html("名额已满");
            // $('#'+week[i].week).addClass("hot bg-info");
            $('#' + week[i].week).attr("class", "complet");
            $("#" + week[i].week).css("display", "block");
        } else {
            if (week[i].num <= num_limit) {
                $('#' + week[i].week).html("剩余：" + week[i].num);
            } else {
                $('#' + week[i].week).html("热报中");
            }
            //$('#'+week[i].week).html(week[i].num);//设置人数
            // $('#'+week[i].week).addClass("hot bg-info");
            $('#' + week[i].week).attr("class", "hot bg-info btn");

            $('#' + week[i].week).off("click");
            $('#' + week[i].week).on("click", "", { 'week': week[i].week }, function(e) {
                // alert("用on绑定事件");
                clickweek(e);
            }); //绑定事件

            if (week_selected != "") $("#" + week_selected).attr("class", "available bg-success btn"); //当前区域为选中;
        }
    }
}

//把所有选中状态变成正常状态
function init_week1() {
    //根据time初始化
    for (var i = 0; i < week.length; i++) {
        if ($('#' + week[i].week).attr("class") == "available bg-success btn") {
            $('#' + week[i].week).removeClass();
            // $('#'+week[i].week).addClass("hot bg-info");
            $('#' + week[i].week).attr("class", "hot bg-info btn");…
