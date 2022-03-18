$(document).ready(function(){
    
    //변수 numAc에 article 개수 저장
    let numAc = $('article').size();
    //widSec에 article의 넓이에 개수를 곱한 값을 저장
    //article의 총 넓이
    let widSec = 200 * numAc;
    //widTotal에 widSec에 600을 더한 값을 저장
    //패널이 하나 열렸을 때의 총 넓이
    let widTotal = widSec + 600;

    //변스 widTotal에 저장된 넓이를 section의 넓이 값으로 지정
    $('section').width(widTotal);
    //변수 widSec에 저장된 넓이를 body의 높이 값으로 지정
    $('body').height(widSec);
    //문서의 스크롤 거리를 변수 widSec의 넓이 만큼 변경
    $('html,body').scrollTop(widSec);
    //문서를 제일 아래쪽인 4000 위치로 스크롤
    // $('html,body').scrollTop(4000);
    //브라우저를 스크롤 할 때
    $(window).scroll(function(){
        //변수 scroll에 현재 스크롤한 만큼의 거리 지정
        let scroll = $(this).scrollTop();
        //section의 left값을 스크롤한 거리만큼 마이너스로 이동
        $('section').stop().animate({'left':-scroll},600);
    })

	//article의 h2를 클릭했을 때
    $('article h2').click(function(e){
        e.preventDefault();
        //변수 index에 현재 클릭한 h2 부모인 article의 순서 값을 지정
        let index =  $(this).parent().index();
        //변수 src에 현재 클릭한 h2의 자식 요소인  a의 href값을 저장
        let src = $(this).children('a').attr('href');
        //변수 posAc 에 현재 클릭한 article의 순서값에 200을 곱한 값 지정
        let posAc = 200 * index
        //먼저 모든 article의 on클래스 지움
        $('article').removeClass('on');
        //내가 클릭한 article에 on 클래스 추가
        $(this).parent().addClass('on');
        //모든 article p img의 이미지 속성 값을 지움
        $('article p img').attr('src','');
        //문서 클릭된 article의 형제요소중 p를 찾아 다시 그 자식인 img의 주소값을 변수 src값으로 변경
        $(this).siblings('p').children('img').attr('src',src);
        //문서의 스크롤 위치값을 변수 posAc의 값으로 변경
        $('html, body').scrollTop(posAc);

    })
    //닫기 버틑 클릭시
    $('span').click(function(){
        //모든 article 태그의 on클래스 삭제
        $('article').removeClass('on')
    })

    //#navi li를 클릭했을 때
    $('#navi li').click(function(e){
        e.preventDefault();
        //변수 i에 현재 클릭한 li의 순서값 지정
        let i = $(this).index();
        //변수 posNavi에 변수 i와 1000을 곱한 값을 지정
        let posNavi = 1000 * i;
        //모든 #navi li 와 article의 클래스 제거
        $('#navi li, article').removeClass();
        //현재 클릭한 #navi li에 클래스 추가
        $(this).addClass('on');
        //문서의 스크롤 거리를 변수 posNavi에 저장한 값으로 변경
        $('html, body').scrollTop(posNavi);
    })
});















