var oSub = $('#sub');

oSub.click(function(){
    // alert('保存成功');
    $('#popUp').removeClass('yc');
    setTimeout(function(){
        $('#popUp').addClass('yc');
    },1500);
    $('#listNow').append("<tr>< <td>收藏夹</td><td>普通商务、高级商务、资深商务、客户顾问、客户主任</td> <td>正式、试用</td><td>200</td><td>2</td><td>2</td></tr>")
});