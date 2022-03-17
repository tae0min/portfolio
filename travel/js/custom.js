// document.addEventListener('DOMContentLoaded',function(){
//     // let ht = windowHeight();
// })

$(document).ready(function(){
    var ht = $(window).height();
    console.log(ht);
    $('video').height(ht);
})