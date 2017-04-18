/*
 * @Author: fangtian
 * @Date:   2017-04-17 10:08:36
 * @Last Modified by:   fangtian
 * @Last Modified time: 2017-04-18 09:16:50
 */

// ---------------------------------------------------------
// goToByScroll
// ---------------------------------------------------------
function goToByScroll(id) {
    // Reove "link" from the ID
    id = id.replace("navbar_", "");
    // Scroll
    $('html,body').animate({
        scrollTop: $("#" + id).offset().top - 100
    }, 'slow');
};


$(document).ready(function() {
    // ---------------------------------------------------------
    // Back to Top
    // ---------------------------------------------------------
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });
    $('#back-top').click(function() {
        $('body,html').stop(false, false).animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    // ---------------------------------------------------------
    // navbar highlight
    // ---------------------------------------------------------
    $("#home a:contains('首页')").addClass('selected');
    $("#course a:contains('选课中心')").addClass('selected');
    $("#interaction a:contains('交流中心')").addClass('selected');
    $("#about a:contains('关于我们')").addClass('selected');
    // ---------------------------------------------------------
    // menu highlight
    // ---------------------------------------------------------
    $("#mycourse a:contains('我的主页')").addClass('selected');
    $("#userinfo a:contains('基础资料')").addClass('selected');
    $("#complement a:contains('完善资料')").addClass('selected');
    $("#portrait a:contains('上传头像')").addClass('selected');

    // ---------------------------------------------------------
    // scrollTop
    // ---------------------------------------------------------

    jQuery(".slider a").click(function(e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll($(this).parent().attr("id"));
    });

    // ---------------------------------------------------------
    // 关注微信
    // ---------------------------------------------------------
    $('#dropdown_wx').hover(function() {
        $('#dropdown-wx-menu').fadeIn();
    }, function() {
        $('#dropdown-wx-menu').fadeOut('fast');
    });
});
