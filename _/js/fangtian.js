function goToByScroll(e) { e = e.replace("navbar_", ""), $("html,body").animate({ scrollTop: $("#" + e).offset().top - 100 }, "slow") }
jQuery(document).ready(function() {
    jQuery(window).scroll(function() { jQuery(this).scrollTop() > 100 ? jQuery("#back-top").fadeIn() : jQuery("#back-top").fadeOut() }), jQuery("#back-top a").click(function() {
        return jQuery("body,html").stop(!1, !1).animate({ scrollTop: 0 }, 800), !1
    }), $("#home a:contains('首页')").addClass("selected"), $("#course a:contains('选课中心')").addClass("selected"), $("#interaction a:contains('交流中心')").addClass("selected"), $("#about a:contains('关于我们')").addClass("selected"), $("#mycourse a:contains('我的主页')").addClass("selected"), $("#userinfo a:contains('基础资料')").addClass("selected"), $("#complement a:contains('完善资料')").addClass("selected"), $("#portrait a:contains('上传头像')").addClass("selected"), jQuery(".slider a").click(function(e) { e.preventDefault(), goToByScroll($(this).parent().attr("id")) }), $("#dropdown_wx").hover(function() { $("#dropdown-wx-menu").fadeIn() }, function() { $("#dropdown-wx-menu").fadeOut("fast") })
});

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
