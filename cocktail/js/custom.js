// document.addEventListener('DOMContentLoad',function(){

// })

$(document).ready(function(){
    var now_img, next_img;
    setInterval(function(){
        now_img = $('div.bg1 ul li').eq(0);
        next_img = $('div.bg1 ul li').eq(1);
        next_img.addClass('active').css('opacity','0').animate({'opacity':'1'},1000,function(){
            $('div.bg1 ul').append(now_img);
            now_img.removeClass('active');
        });
    },3000);
});