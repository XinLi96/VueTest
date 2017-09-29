var oSub = $('#sub');

oSub.click(function(){
    // alert('保存成功');
    var oRadios = document.getElementsByName('baseType');
    var radioValue=null;   //  selectvalue为radio中选中的值
    for(var i=0;i<oRadios.length;i++){
        if(oRadios[i].checked==true) {
            radioValue=oRadios[i].value;
            break;
        }
    }
    console.log(radioValue);

    var oCheckbox1 = document.getElementsByName('rankArr');
    var res = [];
    for(var i=0;i<oCheckbox1.length;i++){
        if(oCheckbox1[i].checked==true) {
            res.push(oCheckbox1[i].value);
        }
    }
    console.log(res);

    var oCheckbox2 = document.getElementsByName('zs');
    var res2 = [];
    for(var i=0;i<oCheckbox2.length;i++){
        if(oCheckbox2[i].checked==true) {
            res2.push(oCheckbox2[i].value);
        }
    }
    console.log(res2);
    $('#popUp').removeClass('yc');
    setTimeout(function(){
        $('#popUp').addClass('yc');
    },1500);
    $('#listNow').append("<tr>< <td>收藏夹</td><td>普通商务、高级商务、资深商务、客户顾问、客户主任</td> <td>正式、试用</td><td>200</td><td>2</td><td>2</td></tr>")
});