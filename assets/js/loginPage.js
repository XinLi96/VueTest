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