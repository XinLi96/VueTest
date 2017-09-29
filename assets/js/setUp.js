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
    var rank = res.join('、');
    var zs = res2.join('、');

    var rankName = $('#rankName').val();
    var dateName = $('#dateName').val();
    var dateName1 = $('#dateName1').val();

    console.log(rankName,dateName,dateName1);

    $('#popUp').removeClass('yc');
    setTimeout(function(){
        $('#popUp').addClass('yc');
    },1500);
    $('#listNow').append("<tr>< <td>"+radioValue+"</td><td>"+rank+"</td> <td>"+zs+"</td><td>"+rankName+"</td><td>"+dateName+"</td><td>"+dateName1+"</td></tr>")
});