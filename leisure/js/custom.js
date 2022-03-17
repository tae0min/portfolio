//4개의 article 요소를 items 변수에 저장
const items = document.querySelectorAll('article');
const aside = document.querySelector('div.aside');
const close = aside.querySelector('span');

//article 요소의 개수만큼 반복
for (let el of items){
    //article에 마우스 호버시
    el.addEventListener('mouseenter',e => {
        //자식요소의 video 재생
        e.currentTarget.querySelector('video').play();
    })
    //article에 마우스 아웃시
    el.addEventListener('mouseleave',e => {
        //자식요소의 video 정지
        e.currentTarget.querySelector('video').pause();
    });
    el.addEventListener('click',e=>{
        //제목과 본문과 video의 src 속성 저장
        let tit = e.currentTarget.querySelector('h2').innerText;
        let txt = e.currentTarget.querySelector('p').innerText;
        let vidSrc = e.currentTarget.querySelector('video').getAttribute('src');
        let bg = e.currentTarget.querySelector('div.outer').getAttribute('style');
        console.log(bg)
        //aside 요소 안쪽 콘텐츠에 위의 변수 적용
        aside.querySelector('h1').innerText = tit;
        aside.querySelector('p').innerText = txt;
        aside.querySelector('video').setAttribute('src',vidSrc)
        aside.setAttribute('style',bg)
        //aside 안쪽 동영상  재생 정지. on클래스 활성
        aside.querySelector('video').play();
        aside.classList.add('on');
    })
    //close 클릭시
    close.addEventListener('click',()=>{
        aside.classList.remove('on')
        aside.querySelector('video').pause();
    })
}
