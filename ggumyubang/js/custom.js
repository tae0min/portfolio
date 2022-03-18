let show = document.querySelector('.show');

show.style.backgroundImage = 'url(img/room0.jpg)'


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

let shoping = document.querySelectorAll('.shoping li');
console.log(shoping);
shoping.forEach((index) => {
    index.addEventListener('click',function(){
        for(let i=0; i < shoping.length; i++){
            shoping[i].classList.remove('on')
            
        }
        index.classList.add('on')
    })
});
for(let i=0; i<shoping.length; i++){
    shoping[i].addEventListener('click',function(){
        show.style.backgroundImage = `url(img/room${i}.jpg)`
    })
}

shoping[0].addEventListener('click',function(){
    let select = document.querySelectorAll('.select')
    select[0].style.bottom = "-70px"
    select[0].style.left = "-20px"
    select[1].style.top = "150px"
    select[1].style.left = "300px"
    select[2].style.bottom = "70px"
    select[2].style.left = "470px"
    select[3].style.top = "200px"
    select[3].style.right = "250px"
})
shoping[1].addEventListener('click',function(){
    let select = document.querySelectorAll('.select')
    select[0].style.bottom = "-70px"
    select[0].style.left = "600px"
    select[1].style.top = "150px"
    select[1].style.left = "300px"
    select[2].style.bottom = "30px"
    select[2].style.left = "470px"
    select[3].style.top = "500px"
    select[3].style.right = "200px"
})
shoping[2].addEventListener('click',function(){
    let select = document.querySelectorAll('.select')
    select[0].style.bottom = "-30px"
    select[0].style.left = "-1000px"
    select[1].style.top = "150px"
    select[1].style.left = "300px"
    select[2].style.bottom = "70px"
    select[2].style.left = "470px"
    select[3].style.top = "10px"
    select[3].style.right = "250px"
})
shoping[3].addEventListener('click',function(){
    let select = document.querySelectorAll('.select')
    select[0].style.bottom = "150px"
    select[0].style.left = "250px"
    select[1].style.top = "25px"
    select[1].style.left = "230px"
    select[2].style.bottom = "100px"
    select[2].style.left = "550px"
    select[3].style.top = "50px"
    select[3].style.right = "250px"
})
shoping[4].addEventListener('click',function(){
    let select = document.querySelectorAll('.select')
    select[0].style.bottom = "-30px"
    select[0].style.left = "-1000px"
    select[1].style.top = "130px"
    select[1].style.left = "500px"
    select[2].style.bottom = "70px"
    select[2].style.left = "470px"
    select[3].style.top = "200px"
    select[3].style.right = "100px"
})