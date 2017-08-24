/**
 * Created by root on 2017/8/24.
 */
var oDownload = $('#download');
var oEnterLeave = $('#enter-leave');

oDownload.mouseenter(function () {
    oEnterLeave.addClass('hidden');
});
oDownload.mouseleave(function () {
    oEnterLeave.removeClass('hidden');
});

var oBtnSubmit = $('#btnSubmit');
var oUserName = $('#userName');
var oUserPass = $('#userPass');
var oMarked = $('#marked');

oBtnSubmit.click(function (e) {
    e = e || window.event;
    if(!oUserName.val()){
        oMarked.html('请输入用户名！');
        e.preventDefault(); // 兼容标准浏览器
        e.returnValue = false; // 兼容IE6~8
    }else if(!oUserPass.val()){
        oMarked.html('请输入密码！');
        e.preventDefault(); // 兼容标准浏览器
        e.returnValue = false; // 兼容IE6~8
    }else{
        oMarked.html('');
    }
});