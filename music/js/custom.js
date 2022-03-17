    //아이디가 cicle 요소 선택
    const circle = document.querySelector('#circle');
    //article 요소
    const article = document.querySelectorAll('article');
    //article의 전체 개수만큼 반복하면서 마우스가 올라오거나 나갔을 때 이벤트 적용
    for (let el of article){
        //마우스를 올리면 부모인 cicle의 animation값을 적용
        el.addEventListener('mouseenter',function(e){
            circle.style.animationPlayState = 'paused'
        })
        //마우스를 내리면 부모인 cicle의 animation값을 적용
        el.addEventListener('mouseleave',function(e){
            circle.style.animationPlayState = 'running'
        })
    }
    const video = document.querySelector('.face4 video')
    video.addEventListener('mouseenter',function(e){
        this.setAttribute('controls','controls') 
    })
    console.log(article)