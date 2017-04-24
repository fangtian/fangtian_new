/*
 * @Author: fangtian
 * @Date:   2017-04-24 10:22:54
 * @Last Modified by:   fangtian
 * @Last Modified time: 2017-04-24 10:34:13
 */

$.fn.sx = function(can) {
    can = $.extend({
            nuv: ".zj", //绛涢€夌粨鏋�
            zi: "sx_child", //鎵€鏈夌瓫閫夎寖鍥村唴鐨勫瓙绫�
            qingchu: '.qcqb', //娓呴櫎鍏ㄩ儴
            over: 'on' //閫変腑鐘舵€佹牱寮忓悕绉�
        },
        can || {});
    /*鍒犻€夎繃绋�*/
    $(this).find('a').click(function() {
        var url = window.location.href;
        var id = $(this).attr('rel');
        var id2 = $(this).attr('name');
        var index = $(this).index();
        var num = $(this).parent().find('a').length;
        var num2 = $(this).parents(can).length;
        if ($(this).attr('class').replace(can.zi, '').replace(/ /g, '') == "on") {

            var url = window.location.href;
            var pddq = $(this).attr('name') + "=" + $(this).attr('rel');
            if (url.split('&').length < 2) {
                url = url.replace('?' + pddq, '')
            } else {
                if (url.split(pddq)[0].split('&').length < 2) {
                    url = url.replace(pddq + '&', '')
                } else {
                    url = url.replace('&' + pddq, '')
                }
            }

        } else {
            if (url.split('?').length < 2) {
                url = url + "?" + id2 + "=" + id
            } else {
                if (url.split('&').length < 2) {
                    if (url.split('?')[1].split('=')[0] == id2) {
                        url = url.replace(url.split('?')[1], id2 + "=" + id)
                    } else {
                        url = url + "&" + id2 + "=" + id
                    }
                } else {
                    if (url.split(id2).length > 1) {
                        if (url.split(id2)[0].split('&').length < 2) {
                            url = url.replace(url.split(id2)[1].split('&')[0], "=" + id)
                        } else {
                            if (url.split(id2)[1].split('&').length < 2) {
                                url = url.replace(id2 + url.split(id2)[1], id2 + "=" + id)
                            } else {
                                url = url.replace(id2 + url.split(id2)[1].split('&')[0], id2 + "=" + id)
                            }
                        }
                    } else {
                        url = url + "&" + id2 + "=" + id
                    }
                }
            }
        }
        window.location.href = url
    })

    window.onload = function() {
        /*閫変腑*/
        $("." + can.zi).each(function() {
                var url = window.location.href;
                var pddq = $(this).attr('name') + "=" + $(this).attr('rel');
                if (url.split(pddq).length > 1) {
                    $(this).addClass('on');
                    $(can.nuv).find(can.qingchu).before("<a rel=" + $(this).attr('rel') + " name=" + $(this).attr('name') + " href='javascript:;'>" + $(this).siblings('span').text() + $(this).text() + "</a> ")
                } else {
                    $(this).removeClass('on')
                }
            })
            /*娓呴櫎鍏ㄩ儴鎸夐挳鏄惁鏄剧ず*/
        var url = window.location.href;
        if (url.split('?').length > 1) {
            $(can.qingchu).show();
        } else {
            $(can.qingchu).hide();
        }
        /*鐐瑰嚮娓呴櫎*/
        $(can.nuv).find('a').click(function() {
                var url = window.location.href;
                var pddq = $(this).attr('name') + "=" + $(this).attr('rel');
                if (url.split('&').length < 2) {
                    url = url.replace('?' + pddq, '')
                } else {
                    if (url.split(pddq)[0].split('&').length < 2) {
                        url = url.replace(pddq + '&', '')
                    } else {
                        url = url.replace('&' + pddq, '')
                    }
                }
                window.location.href = url;
            })
        /*娓呴櫎鍏ㄩ儴*/
        $(can.qingchu).click(function() {
            var url = window.location.href;
            url = url.split('?')[0];
            window.location.href = url;
        })
    }
}
