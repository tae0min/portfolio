let target = document.querySelector("#dynamic");
// dynamic이라는 id를 가진 문서 객체를 선택해!
// 이렇게하면 target이라는 변수에 html에서 작성한 p태그로 감싼 부분이 할당된다.
console.log('')
function randomString(){
//randomString이라는 함수를 만들어주고,
    let stringArr = ["Welcome My Portfolio Website"]
    // stringArr이라는 변수에 배열을 만들어 Welcome My Portfolio Website이라는 문자를 넣어뒀다.
let selectString = stringArr[0];
// srtingArr 배열 속 문자 중 0번째 문자를 선택하고,
let selectStringArr = selectString.split("");
// 해당 문자열을 ""를 기준으로 두고 배열로 분리시키렴!
// 이렇게해서 단어를 한 글자씩 낱개로 분리할 수 있다.

return selectStringArr;
// 최종값 반환해주기!
}

//이하 텍스트를 한 글자씩 페이지에 출력하는 함수-------------------------
function dynamic(randomArr){
// 배열화된 값이 매개변수로 전달된다.
    if(randomArr.length > 0){
    // 만약 randomArr속 문자열의 갯수가 0보다 크면
        target.textContent += randomArr.shift();
        // randomArr속 쪼개진 문자를 맨 앞부터 하나씩 출력해!
        // shift라는 메소드가 배열의 맨 앞 값부터 빼내 출력하는 역할을 한다.
        
        setTimeout(function(){
            dynamic(randomArr);
        }, 100);
        // 아직도 randomArr속 문자열의 갯수가 0보다 크면 계속 글자를 빼내렴. 단 0.1초의 간격으로!
        // 이렇게 하면 randomArr이 0보다 크다는 전제 하에 함수가 계~속 반복된다. 

    }else{
        setTimeout(resetTyping, 3000);
        // 만약에 randomArr이 0보다 크지 않으면(하나씩 다 빼서 남아있는게 하나도 없으면)
        // 3초뒤에 resetTyping함수를 호출해라.
    }
}
dynamic(randomString());
// randomString함수 호출!


// 이하 타이핑 후 리셋시키기------------------------------------------
function resetTyping(){
    target.textContent = "";
    // 타이핑이 끝나고 3초 뒤 다시 아무것도 없는 상태여야만
    // 새로운 타이핑을 시작할 수 있으니, 아무것도 없는 빈 문자열을 만들어 넣어준다.
    dynamic(randomString());
    // randomString함수 또 호출!
}


//스크롤을 했을때 늘어나는 차트
let main = document.querySelector('main');
main.addEventListener('scroll',function(){
    let scrollValue = main.scrollTop;
    console.log(scrollValue);
    // console.log(scrollGauge)
    // console.log(windowY+3)
    if (scrollValue > 940 ){
        chart1.children[1].children[0].style.animation = "stack90 2s ease-out";
        chart2.children[1].children[0].style.animation = "stack90 2s ease-out";
        chart3.children[1].children[0].style.animation = "stack70 2s ease-out";
        chart4.children[1].children[0].style.animation = "stack70 2s ease-out";
        chart5.children[1].children[0].style.animation = "stack80 2s ease-out";
        chart6.children[1].children[0].style.animation = "stack80 2s ease-out";
        chart7.children[1].children[0].style.animation = "stack90 2s ease-out";
        chart8.children[1].children[0].style.animation = "stack10 2s ease-out";
    }else {
        chart1.children[1].children[0].style.animation = "reset 2s ease-out";
        chart2.children[1].children[0].style.animation = "reset 2s ease-out";
        chart3.children[1].children[0].style.animation = "reset 2s ease-out";
        chart4.children[1].children[0].style.animation = "reset 2s ease-out";
        chart5.children[1].children[0].style.animation = "reset 2s ease-out";
        chart6.children[1].children[0].style.animation = "reset 2s ease-out";
        chart7.children[1].children[0].style.animation = "reset 2s ease-out";
        chart8.children[1].children[0].style.animation = "reset 2s ease-out";
    }
})


const chart1 = document.querySelector('.html');
const chart2 = document.querySelector('.css');
const chart3 = document.querySelector('.js');
const chart4 = document.querySelector('.jq');
const chart5 = document.querySelector('.ai');
const chart6 = document.querySelector('.ps');
const chart7 = document.querySelector('.xd');
const chart8 = document.querySelector('.pr');



//배너 보여주기 
let monitor = document.querySelector('.bn')
let width = document.querySelector('.gr')
let length = document.querySelector('.sr')
let gs = document.querySelectorAll('.gs h3')
let left = document.querySelector ('.left')
let right = document.querySelector('.right')
// gs.forEach(index=>{
//     index.addEventListener('click',function(){
//         width.classList.remove('on')
//         length.classList.remove('on')
//         index.classList.add('on');
//     })
// })

monitor.style.backgroundImage = `url(img/pick1.jpg)`
let c = 1;
right.addEventListener('click',function(){
    c ++ ;
    if(10>c){
        monitor.style.backgroundImage = `url(img/pick${c}.jpg)`;
        console.log(c)
        let text = document.querySelectorAll('.description');
        text[c-2].style.opacity = '0';
        text[c-1].style.opacity = '1';
    }else{c=10}
})
left.addEventListener('click',function(){
    c -- ;
    if(c>0){
    monitor.style.backgroundImage = `url(img/pick${c}.jpg)`;
    console.log(c)
    let text = document.querySelectorAll('.description');
    text[c].style.opacity = '0';
    text[c-1].style.opacity = '1';
    }else{c=1}
})


let bar = document.querySelectorAll('div.subBar div')
let content = document.querySelectorAll('div.content div')
let tag = document.querySelectorAll('div.content a')
console.log(content[0].children)

for (let i=0; i<3; i++){
    bar.forEach(index=>{
        index.addEventListener('click',function(){
            bar[i].classList.remove('select');
            index.className='select'
        })
    })
}

let text = document.querySelector('.webMe p')
let webText = document.querySelector('.webtxt span');  
let webLink = document.querySelector('.gosite a'); 
// console.log(webText, webLink)

content[0].addEventListener('click',function(){
    webText.innerHTML = '<strong>쉐이킷</strong><br><br>칵테일 판매 사이트인 SHAKIT 웹페이지의 소스를 가지고 리뉴얼 한 사이트 입니다.';
    webLink.setAttribute('href','cocktail/index.html')
})
content[3].addEventListener('click',function(){
    webText.innerHTML = '<strong>DSD</strong><br><br>다양한 디저트를 홍보하고 다양한 스토리를 전하는 사이트입니다.<br><br>브랜드 스토리 : <br>DSD는 Deserve Special Dessert의 약자로 "특별한 디저트를 받을만하다"라는 의미입니다. 오늘 하루도 수고한 당신께 특별한 디저트로 보상을 해줍시다.';
    webLink.setAttribute('href','dessert/index.html')
})
content[4].addEventListener('click',function(){
    webText.innerHTML = '<strong>오설록</strong><br><br>차 파매 사이트인 오설록 웹페이지를 리뉴얼 한 사이트입니다.';
    webLink.setAttribute('href','osulloc_renual/index.html')
})

bar[0].addEventListener('click',function(){
    for (let i=0; i<6; i++){
        content[i].style.animation = 'hideBox 1s ease-out';
        content[i].style.opacity = '0';
    }
    content[0].style.animation = 'showBox 1s ease-out';
    content[0].style.opacity = '1';
    content[3].style.animation = 'showBox 1s ease-out';
    content[3].style.opacity = '1';
    content[3].children[0].setAttribute('src','img/logo2.png');
    content[3].children[0].setAttribute('alt','dsd logo');
    content[4].style.animation = 'showBox 1s ease-out';
    content[4].style.opacity = '1';
    content[4].children[0].setAttribute('src','img/logo3.png');
    content[4].children[0].setAttribute('alt','??? logo');
    text.innerText = "Dessert";

    content[0].addEventListener('click',function(){
        webText.innerHTML = '<strong>쉐이킷</strong><br><br>칵테일 판매 사이트인 SHAKIT 웹페이지의 소스를 가지고 리뉴얼 한 사이트 입니다.';
        webLink.setAttribute('href','cocktail/index.html')
    })
    content[3].addEventListener('click',function(){
        webText.innerHTML = '<strong>DSD</strong><br><br>다양한 디저트를 홍보하고 다양한 스토리를 전하는 사이트입니다.<br><br>브랜드 스토리 : <br>DSD는 Deserve Special Dessert의 약자로 "특별한 디저트를 받을만하다"라는 의미입니다. 오늘 하루도 수고한 당신께 특별한 디저트로 보상을 해줍시다.';
        webLink.setAttribute('href','dessert/index.html')
    })
    content[4].addEventListener('click',function(){
        webText.innerHTML = '<strong>오설록</strong><br><br>차 파매 사이트인 오설록 웹페이지를 리뉴얼 한 사이트입니다.';
        webLink.setAttribute('href','osulloc_renual/index.html')
    })
})
bar[1].addEventListener('click',function(){
    for (let i=0; i<6; i++){
        content[i].style.animation = 'hideBox 1s ease-out';
        content[i].style.opacity = '0';
    }
    content[1].style.animation = 'showBox 1s ease-out';
    content[1].style.opacity = '1';
    content[1].children[0].setAttribute('src','img/logo4.png');
    content[1].children[0].setAttribute('alt','ggumyubang logo');
    content[3].style.animation = 'showBox 1s ease-out';
    content[3].style.opacity = '1';
    content[3].children[0].setAttribute('src','img/logo5.png');
    content[3].children[0].setAttribute('alt','seetruth logo');
    content[4].style.animation = 'showBox 1s ease-out';
    content[4].style.opacity = '1';
    content[4].children[0].setAttribute('src','img/logo6.png');
    content[4].children[0].setAttribute('alt','fall in music logo');
    text.innerText = "Hobby";

    content[1].addEventListener('click',function(){
        webText.innerHTML = '<strong>꾸며방</strong><br><br>자신이 꾸미고 싶은 방을 미리 꾸며보고 견적을 문의 받는 인테리어 사이트입니다.<br><br>브랜드 스토리 : ';
        webLink.setAttribute('href','ggumyubang/index.html')
    })
    content[3].addEventListener('click',function(){
        webText.innerHTML = '<strong>SEETRUTH</strong><br><br>';
        webLink.setAttribute('href','fashion/index.html')
    })
    content[4].addEventListener('click',function(){
        webText.innerHTML = '<strong>FALL IN MUSIC</strong><br><br>';
        webLink.setAttribute('href','music/index.html')
    })
})
bar[2].addEventListener('click',function(){
    for (let i=0; i<6; i++){
        content[i].style.animation = 'hideBox 1s ease-out';
        content[i].style.opacity = '0';
    }
    content[1].style.animation = 'showBox 1s ease-out';
    content[1].style.opacity = '1';
    content[1].children[0].setAttribute('src','img/logo7.png');
    content[1].children[0].setAttribute('alt','leisure logo');
    content[2].style.animation = 'showBox 1s ease-out';
    content[2].style.opacity = '1';
    content[5].style.animation = 'showBox 1s ease-out';
    content[5].style.opacity = '1';
    text.innerText = "Healing";

    content[1].addEventListener('click',function(){
        webText.innerHTML = '<strong>LEISURE</strong><br><br>';
        webLink.setAttribute('href','leisure/index.html')
    })
    content[2].addEventListener('click',function(){
        webText.innerHTML = '<strong>FREEFLY</strong><br><br>';
        webLink.setAttribute('href','travel/index.html')
    })
    content[5].addEventListener('click',function(){
        webText.innerHTML = '<strong>POEM</strong><br><br>';
        webLink.setAttribute('href','poem/index.html')
    })
})

let showBig = document.querySelector('.big')
// showBig.addEventListener('click',function)

let popUp = document.querySelector('.popup')
let popBanner = document.querySelector('.popup img')
let prev = document.querySelector ('.prev')
let next = document.querySelector('.next')
let popClose = document.querySelector('.close')
showBig.addEventListener('click',function(){
    popUp.style.display = 'block'
})
next.addEventListener('click',function(){
    c ++ ;
    if(10>c){
        popBanner.setAttribute('src',`img/pop${c}.jpg`);
        console.log(c)
    }else{c=10}
})
prev.addEventListener('click',function(){
    c -- ;
    if(c>0){
        popBanner.setAttribute('src',`img/pop${c}.jpg`);
    console.log(c)
    }else{c=1}
})
popClose.addEventListener('click',function(){
    popUp.style.display = 'none'
})