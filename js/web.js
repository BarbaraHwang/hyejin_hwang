$(function () {
  let interWeb;
  //웹 페이지 랜덤 주기
  let $boxAllArr = document.querySelectorAll('.card2 .web_box');
  let random = []
  let hTop = [];
  
  function ran() {
    let eqI = 0;
    let ch1 = 0;
    interWeb = setInterval(() => {
      $('.full .card .web .web_box').removeClass('green').eq(eqI).addClass('green');  //초록색 랜덤상황 주기
      if (eqI < 2) {  
        eqI++;
      } else {
        eqI = 0;
        if (ch1 == 0) {
          ch1++;
        } else {
          ch1 = 0;
          setTimeout(() => {
            $('.full .card').hide();
            $('.full .card2').show();
            for (let i = 0; i < 3; i++) {  //.card2 .web_box 랜덤
              random[i] = Math.floor(Math.random() * $boxAllArr.length);
              for (let j = 0; j < i; j++) { //중복제거
                if (random[i] == random[j]) {
                  i--;
                  break;
                }
              }
              hTop[i] = (Math.ceil($('.full .card2 .web .web_box').eq(random[i]).show().find('img').height()));
            }
          }, 50);
          clearInterval(interWeb);
        }
      }
    }, 500);
  }

  $('.full .lv img').click(function () {
    $('.full .lv img:nth-child(1),.full .lv img:nth-child(3)').addClass('on');
    ran();
  });


//설명서 슬라이드
function up_info(){
  $('.full .play_box .play_info img').delay(2000).animate({
    top: '320px'
  },2000)
}
$(up_info)
$('.full .play_box .bt_button img').click(function(){
  $('.full .play_box .play_info img').addClass('on')

})


  //마우스 호버시 이미지 슬라이드
  $('.full .card2 .web .web_box').mouseover(function () {
    let h = Math.ceil($(this).find('img').height());
    $(this).find('img').animate({ 'top': -h+460 }, 1200);
  })
  $('.full .card2 .web .web_box').mouseleave(function () {
    $(this).find('img').animate({ 'top': 0 }, 900);
  })

});  //ready end
