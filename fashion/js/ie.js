//버전 체크 하는 스크립트
document.addEventListener('DOMContentLoaded',function(){//  ()=> 으로 function을 대체 가능 대신 앞에서 먼저 선언 불가
    
})
    //브라우저의 특정 정보를 가져옴
    const ver = navigator.userAgent;
    console.log(ver);
    const isIE = /trident/i.test(ver); // i는 대소문자 구분 하자 않는다는 표현
    console.log(isIE);
    if(isIE){
        alert('익스플로러로 접속하셨습니다. 이 웹페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해 주세요.');
    };
