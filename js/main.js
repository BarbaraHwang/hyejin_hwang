$(function () {

  //백그라운드 별배경 
  for (let i = 0; i < 43; i++) {
    $('.star_all').append('<div class="star"></div>');
  }



  //캡슐 랜덤
  function aa() {
    let capsules = $('.ballf').find('img').get()
    let random_index = Math.floor(Math.random() * capsules.length);
    let random_capsules = capsules[random_index];
    $(random_capsules).addClass('move').stop();
    setTimeout(() => {
      $('.full .img_box .btn').addClass('start');
    }, 2000);
  }

  //메인 레버 클릭하면 돌려지는 상황
  $('.full .img_box .imgc').click(function () {
    $('.cm').css({display : 'none'})
    $('.full .img_box').addClass('on');
    setTimeout(aa, 3000);
    $('.full .img_box').css({
    })
    $('.full .txt_box').hide();
    $('.full .coin_d').hide();
    $('.full .txtL ').show(1000);
  });

});  //ready end
