var swiper = new Swiper('.swiper-container',{
    direction: 'horizontal', //방향  버티컬은 세로방향
    autoplay : { //재생
        delay:3000,
        disableOnlnteraction:false, //그냥 delay:3000을 주면 오류나서 주는 속성
        },
    loop: true, //1234512345 연속으로 해주는것
    pagination : { //OOOOO 이런식으로 나오게 해줌
        el:'.swiper-pagination'
    },
    navigation : {
        nextEl : '.swiper-button-next',
        prevEl : '.swiper-button-prev',
    },
    touchRatio: 0,
    effect:'slide'
});

let $slides = document.querySelectorAll('.swiper-slide');
for (let i of $slides) {
    i.addEventListener('mouseover',function(){
        swiper.autoplay.stop();
    });
    i.addEventListener('mouseout',function(){
        swiper.autoplay.start();
    });
}