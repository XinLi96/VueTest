(function($){
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 2000,//可选选项，自动滑动
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        loop : true,
    })

    $('.rule').on('click',function(){
        $('.ruleMask').removeClass('toHide');
    });
    $('.ruleMask').on('click',function(){
        $(this).addClass('toHide');
    });
    $('.add').on('click',function(){
        console.log('发布新美食');
    }); 
})(jQuery)