// ---------------------------------------------------------
// goToByScroll
// ---------------------------------------------------------
function goToByScroll(id) {
    // Reove "link" from the ID
    id = id.replace("navbar_", "");
    // Scroll
    $('html,body').animate({
            scrollTop: $("#" + id).offset().top - 100
        },
        'slow');
};


jQuery(document).ready(function() {
    // ---------------------------------------------------------
    // Back to Top
    // ---------------------------------------------------------
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('#back-top').fadeIn();
        } else {
            jQuery('#back-top').fadeOut();
        }
    });
    jQuery('#back-top a').click(function() {
        jQuery('body,html').stop(false, false).animate({
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
// viewAnimate
var viewAnimate = $('.view-animate');
$(document).ready(function() {
    function isScrolledIntoView(elem) {
        var $window = $(window);
        return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
    }
    if (viewAnimate.length) {
        for (i = 0; i < viewAnimate.length; i++) {
            var view = $(viewAnimate[i]).not('.active');
            $(document).on("scroll", $.proxy(function() {
                if (isScrolledIntoView(this)) {
                    this.addClass("active");
                }
            }, view)).trigger("scroll");
        }
    }
})
// ---------------------------------------------------------
