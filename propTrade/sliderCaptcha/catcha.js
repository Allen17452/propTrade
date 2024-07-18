// Navbar追蹤動作
var lpBtnElements = document.querySelectorAll('.lpBtn');
lpBtnElements.forEach(function(element) {
  element.addEventListener('click', function() {
    firebase.analytics().logEvent('lp_btn_navbar', {
      account: 'usid'
    });
    firebase.analytics().logEvent('lp_btn_total', {
      account: 'usid'
    });
  });
});
var homePageElements = document.querySelectorAll('.homePage');
homePageElements.forEach(function(element) {
  element.addEventListener('click', function() {
    firebase.analytics().logEvent('lp_btn_home', {
      account: 'usid'
    });
    firebase.analytics().logEvent('lp_btn_total', {
      account: 'usid'
    });
  });
});