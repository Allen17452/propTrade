//favicon
var linkTags = document.getElementsByTagName('link');
for (var i = 0; i < linkTags.length; i++) {
if (linkTags[i].getAttribute('rel') === 'shortcut icon') {
if (i > 0) {
linkTags[i].parentNode.removeChild(linkTags[i]);
}
}
}
const firebaseConfig = {
  apiKey: "AIzaSyCEaqWB7XD3IU4Waje3LG50wZEhIQra_HA",
  authDomain: "jf-firebase.firebaseapp.com",
  projectId: "jf-firebase",
  storageBucket: "jf-firebase.appspot.com",
  messagingSenderId: "514414462961",
  appId: "1:514414462961:web:84f8250b1fc1e294f1a650",
  measurementId: "G-83TRJEPL56"
};

firebase.initializeApp(firebaseConfig);
var analytics = firebase.analytics();
analytics.logEvent('page_view2');
const db = firebase.firestore();

function handleScroll() {
  const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
  if (scrollPercentage >= 30) {
    firebase.analytics().logEvent('lp_scroll_30');
    window.removeEventListener('scroll', handleScroll);
  }
}

window.addEventListener('scroll', handleScroll);

document.addEventListener("DOMContentLoaded", function() {
  var buttonText = document.getElementById("buttonText");
  buttonText.innerHTML = "optionB";

  var optionA = document.getElementById("optionB");
  optionA.click();
});

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

document.getElementById("optionA").addEventListener("click", function() {
var selectedOption = this.getAttribute("data-value");
document.getElementById("result").innerHTML = `
<form id="phoneRegistration" method="POST">
      <div>
          <input name="phoneIssueCountry" id="phoneIssueCountry" type="hidden">
          <span style="width: 600px; display: -webkit-inline-box;">
          
            <div class="select-box">
        <div class="selected-option" for="phone">
            <div>
                <span class="iconify" data-icon="flag:cn-4x3"></span>
                <strong>+86</strong>
            </div>
            <input type="tel" id="phone" name="phone" placeholder="请输入手机号码" required>
        </div>
        <div class="options">
            <ol>
            </ol>
        </div>
      </div>
          <!--<label for="phone">電話號碼:</label>
          <input type="tel" id="phone" name="phone" placeholder="请输入手机号码" required>-->
          <button class="btn btn-primary" id="getCodeBtn" onclick="sendCode()" style="height: 40px; border-radius: unset; align-self: center; margin-bottom: 4px; background-color: #0051a3; border: unset;">发送</button>
          </span>
          <span style="width: 600px; display: -webkit-inline-box;">
            <span style="background: #fff; height: 40px; display: inline-flex; align-items: center;">
              <label for="phoneCode">
                <span class="iconify" data-icon="prime:key"></span>&nbsp;&nbsp;验证码
              </label>&nbsp;&nbsp;
              <span class="iconify" data-icon="pepicons-pencil:line-y" width="2em" height="3em"></span>&nbsp;&nbsp;
              <input type="text" id="phoneCode" name="phoneCode" placeholder="请输入验证码" style="border: unset;">
            </span>
          <button class="btn btn-primary" style="height: 40px; border-radius: unset; align-self: center; margin-bottom: 4px; background-color: #0051a3; border: unset;">获取验证码</button>
          </span>
          <input type="hidden" name="fromType" value="1">
          <input type="hidden" name="clientid" value="">
          <input type="hidden" name="appcode" value="BF_888">
          <input type="hidden" name="ip" id="ip" value="">
          <input class="btn btn-primary" type="submit" value="立即注册" style="height: 40px; border-radius: unset; align-self: center; margin-bottom: 4px; background-color: #0051a3; border: unset; width: 130px;">
      </div>
  </form>
`;
;
document.getElementById("dropbtn").innerHTML = selectedOption;

//國家區號及國旗
const countries = [
  { name: "Canada", code: "CA", phone: 1 },
  { name: "China", code: "CN", phone: 86 },
  { name: "India", code: "IN", phone: 91 },
  { name: "Korea, Republic of", code: "KR", phone: 82 },
  { name: "Malaysia", code: "MY", phone: 60 },
  { name: "Singapore", code: "SG", phone: 65 },
  { name: "Thailand", code: "TH", phone: 66 },
],

  select_box = document.querySelector('.options'),
  input_box = document.querySelector('input[type="tel"]'),
  selected_option = document.querySelector('.selected-option div');

  let options = null;

  for (const country of countries) {
      const option = `
      <li class="option">
          <div>
              <span class="iconify" data-icon="flag:${country.code.toLowerCase()}-4x3"></span>
              <span class="country-name">${country.name}</span>
          </div>
          <strong>${country.phone}</strong>
      </li> `;
  
      select_box.querySelector('ol').insertAdjacentHTML('beforeend', option);
      options = document.querySelectorAll('.option');
  }

function selectOption() {
  console.log(this);
  const icon = this.querySelector('.iconify').cloneNode(true),
      phone_code = this.querySelector('strong').cloneNode(true);

  selected_option.innerHTML = '';
  selected_option.append(icon, phone_code);

  //input_box.value = phone_code.innerText;

  select_box.classList.remove('active');
  selected_option.classList.remove('active');
}

selected_option.addEventListener('click', () => {
  select_box.classList.toggle('active');
  selected_option.classList.toggle('active');
})

options.forEach(option => option.addEventListener('click', selectOption));
});


//Email Registration Form
document.getElementById("optionB").addEventListener("click", function() {
var selectedOption = this.getAttribute("data-value");
document.getElementById("result").innerHTML = `
  <form id="registrationForm" method="POST" style="text-align: left;">
    <div class="emailContainer">
      <input name="issueCountry" id="issueCountry" type="hidden" value="2">
      <span class="emailSpan1" style="width: 380px; display: -webkit-inline-box;">
        <span class="container1" style="border: 1px solid #EEE; border-left: unset; height: 40px; display: inline-flex; align-items: center;">
        <span class="iconify" data-icon="pepicons-pencil:line-y" style="color: #000;" width="50" height="50"></span>
        <label for="email" style="color: #5f5f5f">電子郵件</label>
        <span class="iconify" data-icon="pepicons-pencil:line-y" style="color: #000;" width="50" height="50"></span>
        <input type="email" id="email" name="email" placeholder="請輸入電子郵件" required style="border: unset; background: unset; outline: none;">
        </span>
        <!--<button class="btn btn-primary" id="getCodeBtn1" disabled onclick="startCountdownEmail()" style="height: 40px; border-radius: unset; align-self: center; margin-bottom: 7px; background-color: #0051a3; border: unset;">发送</button>-->
        </span>
        <span class="emailContainer2">
      <span class="emailSpan2" style="width: 450px; display: -webkit-inline-box;">
        <span class="emailSpan3" style="background: #fff; height: 40px; display: inline-flex; align-items: center; color: #5f5f5f;">
          <label for="code">&nbsp;&nbsp;<span class="iconify" data-icon="prime:key"></span>&nbsp;&nbsp;驗證碼</label>
          <span class="iconify" data-icon="pepicons-pencil:line-y" style="color: #000;" width="50" height="50"></span>
          <input type="text" id="code" name="code" placeholder="請輸入驗證碼" style="border: unset; outline: none;">
        </span>
        <span class="on-disabled">
  <button class="btn btn-primary" disabled id="getCodeBtn" type="submit" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" style="height: 40px; border-radius: unset; align-self: center; margin-bottom: 3px; background-color: #ff7b4f; border: unset;">取得驗證碼</button>
</span>
        </span>
      <input type="hidden" name="fromType" value="2">
      <input type="hidden" name="clientid" value="">
      <input type="hidden" name="appcode" value="BF_888">
      <input type="hidden" name="ip" id="ip" value="">
      <button class="btn btn-primary" id="emailRegister" type="submit" value="立即註冊" style="height: 40px; border-radius: unset; align-self: center; margin-bottom: 2px; background-color: #ff7b4f; border: unset; width: 130px; margin-left: 20px;">
      免费开户
      </button>
      </span>
      </div>
  </form>
`;
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
  $('#getCodeBtn').text(countdown + '秒後再試');
  countdown--;
  if (countdown < 0) {
    clearInterval(countdownInterval);
    $('#getCodeBtn').text('發送');
  }
}, 1000);
}

$(document).ready(function() {
  $('.on-disabled').click(function(ev) {
    if (ev.target !== ev.currentTarget) return;
    
    var email = $('#email').val();
    
    if (email.trim() === '') {
      modalText.textContent = '請填寫電郵!';
      $('#regModal').modal('show');
    } else {
      modalText.textContent = '請填寫驗證碼!';
      $('#regModal').modal('show');
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

    fbq('track', 'get_verification_code', { sign_up_method: "email", email: email});
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
fbq('track', 'get_verification_code', { sign_up_method: "email", email: email});
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
      console.log('驗證碼請求成功');
    },
    error: function(xhr, status, error) {
      console.error('驗證碼請求失敗');
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
  recordTier.push({eventName: "formSubmit", tracking_id: "38201173"});
  recordTier.push({eventName: "landingpageClick", tracking_id: "38201177"});
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
    $('#getCodeBtn').text('發送');
    if (window.matchMedia("(max-width: 779px)").matches) {
      setTimeout(function () {
        window.location.href = "https://www.baofugold.com/account/demo/succPhone.html?account=" + account + "&v=BF_888";
      }, 500)
    } else {
      setTimeout(function () {
        window.location.href = "https://www.baofugold.com/account/demo/succ.html?account=" + account + "&v=BF_888";
      }, 500)
    }
  } else {
    modalText.textContent = data.Data;
    $('#regModal').modal('show');
    button.innerHTML ='免费开户';
  }
})
.catch(error => {
  console.error(error);
  alert('註冊失敗');
});
});
});

document.getElementById("optionA").addEventListener("click", function() {
  document.getElementById("optionA").style.display = "none";
  document.getElementById("optionB").style.display = "block";
});
document.getElementById("optionB").addEventListener("click", function() {
  document.getElementById("optionB").style.display = "none";
  document.getElementById("optionA").style.display = "block";
});