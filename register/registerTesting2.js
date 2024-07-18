function getAppCodeFromUrl() {
  const url = new URL(window.location.href);
  const appCodeParam = url.searchParams.get('appcode');
  if (appCodeParam) {
    return appCodeParam;
  } else {
    return 'BF_888';
  }
}

const appCode = getAppCodeFromUrl();
const modalText = document.querySelector(".modalText");

  document.getElementById("optionB").addEventListener("click", function() {
    var urlParams = new URLSearchParams(window.location.search);
  var selectedOption = this.getAttribute("data-value");
  document.getElementById("result").innerHTML = `
    <form id="registrationForm" method="POST" style="text-align: left;">
      <div class="emailContainer">
        <input name="issueCountry" id="issueCountry" type="hidden" value="2">
        <span class="emailSpan1" style="width: 380px; display: -webkit-inline-box;">
          <span class="container1" style="border: 1px solid #EEE; border-left: unset; height: 40px; display: inline-flex; align-items: center;">
          <span class="iconify" data-icon="pepicons-pencil:line-y" style="color: #e6e6e6;"></span>&nbsp;&nbsp;
          <label for="email" style="color: #5f5f5f">电子邮件</label>&nbsp;
          <span class="iconify" data-icon="pepicons-pencil:line-y" style="color: #e6e6e6;"></span>&nbsp;&nbsp;
          <input type="email" id="email" name="email" placeholder="请输入电子邮件" required style="border: unset; background: unset; outline: none;">
          </span>
          <!--<button class="btn btn-primary" id="getCodeBtn1" disabled onclick="startCountdownEmail()" style="height: 40px; border-radius: unset; align-self: center; margin-bottom: 7px; background-color: #0051a3; border: unset;">发送</button>-->
          </span>
          <span class="emailContainer2">
        <span class="emailSpan2" style="width: 450px; display: -webkit-inline-box;">
          <span style="background: #fff; height: 40px; display: inline-flex; align-items: center; color: #5f5f5f;">
            <label for="code">&nbsp;&nbsp;<span class="iconify" data-icon="prime:key"></span>&nbsp;&nbsp;<span id="code2">验证码</span></label>&nbsp;&nbsp;
            <span class="iconify" data-icon="pepicons-pencil:line-y" style="color: #e6e6e6;"></span>&nbsp;&nbsp;
            <input type="text" id="code" name="code" placeholder="请输入验证码" style="border: unset; outline: none;">
          </span>
          <span class="on-disabled">
              <button class="btn btn-primary" disabled id="getCodeBtn" type="submit" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" style="height: 40px; border-radius: unset; align-self: center; margin-bottom: 3px; background-color: #ff7b4f; border: unset;">获取验证码</button>
            </span>
          </span>
        <input type="hidden" name="fromType" value="2">
        <input type="hidden" name="clientid" value="">
        <input type="hidden" name="appcode" value="BF_888">
        <input type="hidden" name="ip" id="ip" value="">
        <button class="btn btn-primary" id="emailRegister" type="submit" value="立即注册" style="height: 40px; border-radius: unset; align-self: center; margin-bottom: 2px; background-color: #ff7b4f; border: unset; width: 130px; margin-left: 20px;">
        免费开户
        </button>
        </span>
        </div>
    </form>
  `;
  if (urlParams.has('lang') && urlParams.get('lang') === 'tc') {
    const phoneInput = document.getElementById('email');
    phoneInput.placeholder = '請輸入電子郵件';
    const phoneCodeInput = document.getElementById('code');
    phoneCodeInput.placeholder = '請輸入驗證碼';
    const code2 = document.getElementById('code2');
    code2.innerHTML = '驗證碼';
    const getCodeBtnPhone = document.getElementById('getCodeBtn');
    getCodeBtnPhone.innerHTML = '取得驗證碼';
    const registerPhone = document.getElementById('emailRegister');
    registerPhone.innerHTML = '免費開戶';
  }
  document.getElementById("dropbtn").innerHTML = selectedOption;
  
  // Email Registration
  $('#email').on('input', function() {
    var email = $(this).val();
    var isValidEmail = validateEmail(email);
    if (isValidEmail) {
      $('#getCodeBtn').prop('disabled', false);
    } else {
      $('#getCodeBtn').prop('disabled', true);
    }
  });
  
  var countdownInterval;
  function startCountdownEmail() {
  var countdown = 60;
  countdownInterval = setInterval(function() {
    $('#getCodeBtn').text(countdown + ' 秒后再试');
    countdown--;
    if (countdown < 0) {
      clearInterval(countdownInterval);
      $('#getCodeBtn').text('发送');
    }
  }, 1000);
  }
  
  $(document).ready(function() {
    $('.on-disabled').click(function(ev) {
      if (ev.target !== ev.currentTarget) return;
      
      var email = $('#email').val();
      
      if (email.trim() === '') {
        alert('请填写电邮地址!');
      } else {
        alert('请填写验证码!');
      }
      
      firebase.analytics().setUserProperties({
        email: email
      });
      
      firebase.analytics().logEvent('get_verification_code', {
        sign_up_method: "email",
        email: email
      }, function() {
        firebase.analytics().setUserProperties({
          email: email
        });
      });
      
      firebase.analytics().logEvent('lp_btn_total', {
        user_id: "user_id"
      });
      fbq('track', 'get_verification_code', {sign_up_method: "email", email: email});
      recordTier.push({
        eventName: "landingpageClick",
        tracking_id: "38201177"
      });
    });
  });
  
  $(document).ready(function() {
    function sendCode2($e, cb) {
      var self = this;
      var appId = '';
  
      $.ajax({
        url: 'https://lead.baofugold.com/apis/validateAppId',
        async: false,
        type: "POST",
        success: function (res) {
          appId = res.Data;
        },
        error: function (xhr, status, error) {
          console.error(error);
        }
      });
  
      var captcha2 = new TencentCaptcha(appId, function (res) {
        if (res.ret === 0) {
          var email = $('#email').val();
          sendCodeEmail(email);
          $(this).prop('disabled', true);
          startCountdownEmail();
          firebase.analytics().logEvent('get_verification_code', { 
          sign_up_method: "email", 
          email: email 
          }, function() {
          firebase.analytics().setUserProperties({
            email: email
          });
          });
          firebase.analytics().logEvent('get_verification_code_with_info', { 
            sign_up_method: "email", 
            email: email 
            }, function() {
            firebase.analytics().setUserProperties({
              email: email
            });
          });
          firebase.analytics().logEvent('lp_btn_total', { user_id: "user_id"});
          fbq('track', 'get_verification_code', {sign_up_method: "email", email: email});
          fbq('track', 'get_verification_code_with_info', { sign_up_method: "email", email: email});
          recordTier.push({eventName: "landingpageClick", tracking_id: "38201177"});
        }
      });
  
      captcha2.show();
    }
  
    $('#getCodeBtn').click(() => {
      event.preventDefault();
      sendCode2();
    });
  });
  
  
  function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function sendCodeEmail(email) {
    $.ajax({
      url: 'https://lead.baofugold.com/apis/sendCodeEmail',
      method: 'POST',
      data: { 
        email: email,
        appcode: appCode,
      },
      success: function(response) {
        console.log('验证码请求成功');
      },
      error: function(xhr, status, error) {
        console.error('验证码请求失败');
      }
    });
  }
  
  fetch('https://api.ipdatacloud.com/v2/query?key=de47906d4c5211ee98ee00163e25360e')
    .then(response => response.json())
    .then(data => {
      document.getElementById('ip').value = data.ip;
    })
    .catch(error => console.error(error));
  
    document.getElementById('emailRegister').addEventListener('click', function() {
    var email = document.getElementById("email").value;
    var code = document.getElementById("code").value;
    var isValidEmail = validateEmail(email);
    firebase.analytics().logEvent('lp_btn_total', {user_id: "user_id"});
    firebase.analytics().logEvent('sign_up_submit', {sign_up_method: "email", email: email}, function() {
    firebase.analytics().setUserProperties({
    email: email
    });
    });
    if (code === '') {
      fbq('track', 'sign_up_submit', { sign_up_method: "email", email: email});
      firebase.analytics().logEvent('sign_up_submit', {sign_up_method: "email", email: email}, function() {
        firebase.analytics().setUserProperties({
        email: email
        });
        });
    } else if (email !== '' && code !== '' && isValidEmail) {
      fbq('track', 'sign_up_submit', { sign_up_method: "email", email: email});
      fbq('track', 'sign_up_submit_after_verification', { sign_up_method: "email", email: email});
      firebase.analytics().logEvent('sign_up_submit', {sign_up_method: "email", email: email}, function() {
        firebase.analytics().setUserProperties({
        email: email
        });
        });
        firebase.analytics().logEvent('sign_up_submit_after_verification', {sign_up_method: "email", email: email}, function() {
          firebase.analytics().setUserProperties({
          email: email
          });
          });
    }
    recordTier.push({eventName: "landingpageClick", tracking_id: "38201177"});
    recordTier.push({eventName: "formSubmit", tracking_id: "38201173"});
  });
  
  document.querySelector('#registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var code = document.getElementById("code").value;
  var ip = "61.93.232.102";
  var button = document.getElementById("emailRegister");
  button.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...';
  const form = document.querySelector('#registrationForm');
  var phoneRegUrl = "https://lead.baofugold.com/apis/web/account/registerEmail?issueCountry=2&email=" + email + "&code=" + code + "&fromType=1&clientid=&appcode=BF_888&ip=" + ip;
  
  fetch(phoneRegUrl, {
  method: 'POST',
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return response.text().then(data => {
        throw new Error(data);
      });
    }
  })
  .then(data => {
    if (data.IsSuccess === true) {
      var account = data.Data.account;
      firebase.analytics().logEvent('sign_up_success', {
        sign_up_method: "email",
        email: email,
        account: account,
      }, function() {
        firebase.analytics().setUserProperties({
          email: email,
          account: account,
        });
      });
      fbq('track', 'sign_up_success', { sign_up_method: "email", email: email, account: account});
      recordTier.push({eventName: "register", tracking_id: "38201164"});
      clearInterval(countdownInterval);
      $('#getCodeBtn').text('取得驗證碼');
      if (window.matchMedia("(max-width: 779px)").matches) {
        setTimeout(function () {
          window.location.href = "https://www.baofugold.com/account/demo/succPhone.html?account=" + account;
        }, 500)
      } else {
        setTimeout(function () {
          window.location.href = "https://www.baofugold.com/account/demo/succ.html?account=" + account;
        }, 500)
      }
    } else {
      alert(data.Data);
      button.innerHTML ='免费开户';
    }
  })
  .catch(error => {
    console.error(error);
    alert('注册失败');
  });
  });
  });