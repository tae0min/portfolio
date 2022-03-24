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

let best = document.querySelectorAll('.best'),
sale = document.querySelectorAll('.sale'),
dil = document.querySelectorAll('.dil'),
soldout = document.querySelectorAll('.soldout'),
New = document.querySelectorAll('.new');
console.log(best, sale, dil, soldout)
for(let i=0; i<best.length; i++){
    best[i].innerText = "베스트";
}
for(let i=0; i<sale.length; i++){
    sale[i].innerText = "할인";
}
for(let i=0; i<soldout.length; i++){
    soldout[i].innerText = "임시품절";
}
for(let i=0; i<dil.length; i++){
    dil[i].innerText = "정기배송";
}
for(let i=0; i<New.length; i++){
    New[i].innerText = "신상품";
}


function paddedFormat(num) {
    return num < 10 ? "0" + num : num; 
}

function startCountDown(duration, element) {

    let secondsRemaining = duration;
    let hr = 0;
    let min = 0;
    let sec = 0;

    let countInterval = setInterval(function () {

        hr = parseInt(secondsRemaining / 60 / 60);
        min = parseInt(secondsRemaining / 60 / 24);
        sec = parseInt(secondsRemaining % 60);

        element.textContent = `${paddedFormat(hr)}:${paddedFormat(min)}:${paddedFormat(sec)}`;

        secondsRemaining = secondsRemaining - 1;
        // if (secondsRemaining < 0) { clearInterval(countInterval) };

    }, 1000);
}

window.onload = function () {
    let time_hours = 24; // Value in hour
    let time_minutes = 00; // Value in minutes
    let time_seconds = 00; // Value in seconds

    let duration = time_hours * 3600 + time_minutes * 60 + time_seconds;

    element = document.querySelector('#count-down-timer');
    element.textContent = `${paddedFormat(time_hours)}:${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`;

    startCountDown(--duration, element);
};