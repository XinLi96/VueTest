$('#navList > li').click(
    function(){
        $(this).addClass('navActive').siblings().removeClass('navActive');
    }
);