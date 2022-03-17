let show = document.querySelector('.show');

show.style.backgroundImage = 'url(img/livingroom.jpg)'


let select = document.querySelectorAll('.select i');
let detail = document.querySelectorAll('.detail');
for (let i=0; i< select.length; i++){
    console.log(select[i])
    select[i].addEventListener('mouseover',function(){
        detail[i].style.opacity = '1';
    })
    detail[i].addEventListener('mouseover',function(){
        detail[i].style.opacity = '1';
    })
}
for (let i=0; i< select.length; i++){
    console.log(select[i])
    select[i].addEventListener('mouseleave',function(){
        detail[i].style.opacity = '0';
    })
    detail[i].addEventListener('mouseleave',function(){
        detail[i].style.opacity = '0';
    })
}