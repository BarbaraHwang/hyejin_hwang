$(function () {

    //토글 클릭 -> 메뉴 페이지 전환
    let menuWeb = "menuWeb.html"
    let menuMobile = "menuMobile.html"
    let menuProfile = "menuProfile.html"
    let menuEmail = "menuEmail.html"
    /* 웹 */
    $('.full .toggle #web1, .full .toggle #web2').on({
      click: function () {
        window.location = menuWeb
      }
    });
    /* 모바일 */
    $('.full .toggle #mo').click(function () {
      window.location = menuMobile;
  
    });
    /* 이메일 */
    $('.full .toggle #contact').click(function () {
      window.location = menuEmail;
    });
    /* 프로필 */
    $('.full .toggle #profile').click(function () {
      window.location = menuProfile;
    });
  
  
    //메뉴 토글 클릭시 뒤로가기
    $('.full .flip .toggleC').click(function () {
      window.history.back();
    });
  
  
    
  });  //ready end
  