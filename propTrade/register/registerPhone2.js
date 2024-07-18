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
  buttonText.innerHTML = "optionA";

  var optionA = document.getElementById("optionA");
  var optionB = document.getElementById("optionB");
  var footerContainer = document.querySelector(".footerContainer1");

  optionA.addEventListener("click", function() {
    buttonText.innerHTML = "optionA";
    footerContainer.classList.remove("optionBStyle");
    footerContainer.classList.add("optionAStyle");
  });

  optionB.addEventListener("click", function() {
    buttonText.innerHTML = "optionB";
    footerContainer.classList.remove("optionAStyle");
    footerContainer.classList.add("optionBStyle");
  });

  optionA.click();
});

const modalText = document.querySelector(".modalText");

document.getElementById("optionA").addEventListener("click", function() {
var selectedOption = this.getAttribute("data-value");
document.getElementById("result").innerHTML = `
<form id="phoneRegistrationForm" method="POST">
    <div>
        <input name="phoneIssueCountry" id="phoneIssueCountry" type="hidden">
        <span class="phoneSpan1" style="width: 380px; display: -webkit-inline-box;">
          <span>
            <!--手機區號-->
          <div class="select-box">
              <div class="selected-option" for="phone">
                  <span class="iconify" data-icon="pepicons-pencil:line-y" style="color: #000;"></span>
                  <div style="display: flex; align-items: center;" class="selectBoxContainer">
                      <span class="iconify" data-icon="flag:my-4x3"></span>
                      <strong class="countryCode">+60</strong>
                  </div>
                  <span class="iconify" data-icon="pepicons-pencil:line-y" style="color: #000;"></span>
                  <input type="tel" id="phone" name="phone" placeholder="請輸入手機號碼" style="font-size: 16px;" required pattern="[0-9]*">
              </div>
              <div class="options">
                  <ol>
                  </ol>
              </div>
          </div>
        </span>
      </span>
        <span class="phoneSpan2" style="display: -webkit-inline-box;">
        <span style="background: #fff; height: 40px; display: inline-flex; align-items: center; color: #5f5f5f; bottom: 2px; position: relative;">
        <label for="phoneCode">&nbsp;&nbsp;
            <span class="iconify" data-icon="prime:key"></span>&nbsp;&nbsp;驗證碼
        </label>&nbsp;&nbsp;
        <span class="iconify" data-icon="pepicons-pencil:line-y" style="color: #e6e6e6;"></span>&nbsp;&nbsp;
        <input type="text" id="phoneCode" placeholder="請輸入驗證碼" name="phoneCode" style="border: unset; outline: none;">
        <span class="on-disabled" style="height: 40px;">
        <button class="btn btn-primary" disabled id="getCodeBtnPhone" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" style="height: 40px; border-radius: unset; align-self: center; margin-bottom: 3px; background-color: #ff7b4f; border: unset; opacity: 1;">取得驗證碼</button>
        </span>
        </span>
          <input type="hidden" name="fromTypePhone" value="1">
          <input type="hidden" name="clientid" value="">
          <input type="hidden" name="appCodePhone" value="BF_888">
          <input type="hidden" name="ip" id="ip" value="">
          <input class="btn btn-primary phoneReg" id="registerPhone" type="submit" value="立即註冊" style="height: 40px; border-radius: unset; align-self: center; margin-bottom: 8px; background-color: #ff7b4f; border: unset; width: 130px; margin-left: 20px;">
        </span>
    </div>
</form>
`;
;
const countries = [
{ name: "加拿大", code: "CA", phone: "+1" },
{ name: "印度", code: "IN", phone: "+91" },
{ name: "韓國", code: "KR", phone: "+82" },
{ name: "馬來西亞", code: "MY", phone: "+60" },
{ name: "新加坡", code: "SG", phone: "+65" },
{ name: "泰國", code: "TH", phone: "+66" },
{ name: "中國", code: "CN", phone: "+86" },
];

const select_box = document.querySelector('.options');
const input_box = document.querySelector('input[type="tel"]');
const selected_option = document.querySelector('.selected-option div');

let options = null;

for (const country of countries) {
const option = `
<li class="option">
  <div style="display: flex; align-items: center;" class="selectBoxContainer">
    <span class="iconify" data-icon="flag:${country.code.toLowerCase()}-4x3"></span>
    <span class="country-name">${country.name}</span>
  </div>
  <strong class="countryCode">${country.phone}</strong>
</li>
`;

select_box.querySelector('ol').insertAdjacentHTML('beforeend', option);
options = document.querySelectorAll('.option');
}

const options2 = document.querySelectorAll('.option');

options2.forEach(option => {
option.addEventListener('click', function() {
select_box.classList.toggle('active');
selected_option.textContent = this.querySelector('.country-name').textContent;
selected_option.dataset.selected = this.querySelector('.countryCode').textContent;
});
});

document.addEventListener('click', function(event) {
const target = event.target;
const isIconify = target.classList.contains('iconify');
const isCountryCode = target.classList.contains('countryCode');
const isSelectBoxContainer = target.closest('.selectBoxContainer');

if (!select_box.contains(target) && target !== selected_option && !isIconify && !isCountryCode && !isSelectBoxContainer) {
select_box.classList.remove('active');
selected_option.classList.remove('active');
}
});

function selectOption() {
console.log(this);
const icon = this.querySelector('.iconify').cloneNode(true),
phone_code = this.querySelector('strong').cloneNode(true);

selected_option.innerHTML = '';
selected_option.append(icon, phone_code);

select_box.classList.remove('active');
selected_option.classList.remove('active');
}

selected_option.addEventListener('click', () => {
select_box.classList.toggle('active');
selected_option.classList.toggle('active');
});

options.forEach(option => option.addEventListener('click', selectOption));

document.getElementById("phone").addEventListener("input", function() {
var phoneValue = this.value.trim();
var issueCountryValue = "";

if (phoneValue.startsWith("+86")) {
issueCountryValue = "1";
} else if (phoneValue.startsWith("+852")) {
issueCountryValue = "2";
} else if (phoneValue.startsWith("+853")) {
issueCountryValue = "3";
} else if (phoneValue.startsWith("+886")) {
issueCountryValue = "4";
} else {
issueCountryValue = "5";
}

document.getElementById("phoneIssueCountry").value = issueCountryValue;
});

document.getElementById('phone').addEventListener('input', function() {
var phoneValue = this.value;
var phoneCodeInput = document.getElementById('getCodeBtnPhone');
var numericRegex = /^\d+$/; // 正則表達式：只接受數字

if (numericRegex.test(phoneValue)) {
phoneCodeInput.disabled = false; // 啟用getCodeBtnPhone按鈕
} else {
phoneCodeInput.disabled = true; // 禁用getCodeBtnPhone按鈕
}
});

$(document).ready(function() {
$('.on-disabled').click(function(ev) {
// Don’t react to click events bubbling up
if (ev.target !== ev.currentTarget) return;
// Do your thing
var email = $('#phone').val();
    
if (email.trim() === '') {
  modalText.textContent = '請填寫電話號碼!';
  $('#regModal').modal('show');
} else {
  modalText.textContent = '請填寫驗證碼!';
  $('#regModal').modal('show');
}
var countryCode = document.querySelector('.countryCode').textContent;
var phone = countryCode + document.getElementById('phone').value;
firebase.analytics().logEvent('get_verification_code', { 
sign_up_method: "phone", 
phone: phone 
});
firebase.analytics().logEvent('lp_btn_total', { user_id: "user_id"});
fbq('track', 'get_verification_code', { sign_up_method: "phone", phone: phone });
recordTier.push({eventName: "landingpageClick", tracking_id: "38201177"});
})
});

var countdownInterval;

function startCountdownPhone() {
var countdown = 60;
countdownInterval = setInterval(function() {
$('#getCodeBtnPhone').prop('disabled', true); // 禁用按鈕
$('#getCodeBtnPhone').text(countdown + '秒後再試');
countdown--;
if (countdown < 0) {
  clearInterval(countdownInterval);
  $('#getCodeBtnPhone').prop('disabled', false); // 啟用按鈕
  $('#getCodeBtnPhone').text('取得驗證碼');
}
}, 1000);
}

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
        var countryCode = document.querySelector('.countryCode').textContent;
        var phone = countryCode + document.getElementById('phone').value;
        var phoneFromType = document.getElementById("phoneIssueCountry").value;
        console.log(phoneFromType);
        var phoneCodeUrl;
        var apiPath = "";
        var apiParams = "";
        
        if (phone.startsWith("+86")) {
        apiPath = "https://lead.baofugold.com/apis/yf/sendCode";
        apiParams = "?sendType=1&mobile=" + phone + "&appcode=BF_888";
        } else {
        apiPath = "https://lead.baofugold.com/apis/sendcodehw";
        apiParams = "?mobile=" + phone;
        }
        
        phoneCodeUrl = apiPath + apiParams;
        
        fetch(phoneCodeUrl, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          mode: 'no-cors' // Add this line to use the "no-cors" mode
        })
        .then(response => response.json())
        .then(data => {
        firebase.analytics().logEvent('get_verification_code', {
          sign_up_method: "phone",
          phone: phone
        });
        firebase.analytics().logEvent('get_verification_code_with_info', {
          sign_up_method: "phone",
          phone: phone
        });
        firebase.analytics().logEvent('lp_btn_total', { user_id: "user_id"});
        fbq('track', 'get_verification_code', { sign_up_method: "phone", phone: phone });
        fbq('track', 'get_verification_code_with_info', { sign_up_method: "phone", phone: phone });
        recordTier.push({eventName: "landingpageClick", tracking_id: "38201177"});
        })
        .catch(error => {
        // Handle error
        // ...
        });
      }
    });

    captcha2.show();
  }

  document.getElementById("getCodeBtnPhone").addEventListener("click", function(event) {
    event.preventDefault();
    sendCode2();
    startCountdownPhone();
    });
});

document.getElementById("phoneRegistrationForm").addEventListener("submit", function(event) {
event.preventDefault();

var countryCode = document.querySelector('.countryCode').textContent;
var phone = countryCode + document.getElementById('phone').value;
var phoneCode = document.getElementById("phoneCode").value;
var phoneNum = document.getElementById('phone').value;
var numericRegex = /^\d+$/;
var phoneFromType = document.getElementById("phoneIssueCountry").value;
var ip = "61.93.232.102";
if (phoneCode === '') {
  fbq('track', 'sign_up_submit', { sign_up_method: "phone", phone: phone});
  firebase.analytics().logEvent('sign_up_submit', { sign_up_method: "phone", phone: phone }, function() {
    firebase.analytics().setUserProperties({
      phone: phone
    });
  });
} else if (numericRegex.test(phoneNum ) && phoneCode !== '')  {
  fbq('track', 'sign_up_submit', { sign_up_method: "phone", phone: phone});
  fbq('track', 'sign_up_submit_after_verification', { sign_up_method: "phone", phone: phone});
  firebase.analytics().logEvent('sign_up_submit', { sign_up_method: "phone", phone: phone }, function() {
    firebase.analytics().setUserProperties({
      phone: phone
    });
  });
  firebase.analytics().logEvent('sign_up_submit_after_verification', { sign_up_method: "phone", phone: phone }, function() {
    firebase.analytics().setUserProperties({
      phone: phone
    });
  });
}
recordTier.push({eventName: "formSubmit", tracking_id: "38201173"});

var phoneRegUrl = "https://lead.baofugold.com/apis/web/account/registerhw?issueCountry=" + phoneFromType + "&mobile=" + phone + "&code=" + phoneCode + "&fromType=1&appcode=BF_888&ip=" + ip;

fetch(phoneRegUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
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
      sign_up_method: "phone",
      phone: phone,
      account: account,
    }, function() {
      firebase.analytics().setUserProperties({
        phone: phone,
        account: account,
      });
    });
    
    fbq('track', 'sign_up_success', {sign_up_method: "phone",
    phone: phone,
    account: account,});

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
  }
})
.catch(error => {
  // Handle error
  // ...
});
});
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
        <span class="iconify" data-icon="pepicons-pencil:line-y" style="color: #e6e6e6;"></span>&nbsp;&nbsp;
        <label for="email" style="color: #5f5f5f">電子郵件</label>&nbsp;
        <span class="iconify" data-icon="pepicons-pencil:line-y" style="color: #e6e6e6;"></span>&nbsp;&nbsp;
        <input type="email" id="email" name="email" placeholder="請輸入電子郵件" required style="border: unset; background: unset; outline: none;">
        </span>
        <!--<button class="btn btn-primary" id="getCodeBtn1" disabled onclick="startCountdownEmail()" style="height: 40px; border-radius: unset; align-self: center; margin-bottom: 7px; background-color: #0051a3; border: unset;">发送</button>-->
        </span>
        <span class="emailContainer2">
      <span class="emailSpan2" style="width: 450px; display: -webkit-inline-box;">
        <span style="background: #fff; height: 40px; display: inline-flex; align-items: center; color: #5f5f5f;">
          <label for="code">&nbsp;&nbsp;<span class="iconify" data-icon="prime:key"></span>&nbsp;&nbsp;驗證碼</label>&nbsp;&nbsp;
          <span class="iconify" data-icon="pepicons-pencil:line-y" style="color: #e6e6e6;"></span>&nbsp;&nbsp;
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
      <input class="btn btn-primary" id="emailRegister" type="submit" value="立即註冊" style="height: 40px; border-radius: unset; align-self: center; margin-bottom: 2px; background-color: #ff7b4f; border: unset; width: 130px; margin-left: 20px;">
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
// Don’t react to click events bubbling up
if (ev.target !== ev.currentTarget) return;
// Do your thing
alert('請填寫電郵!');
var email = $('#email').val();
firebase.analytics().setUserProperties({
email: email});
firebase.analytics().logEvent('get_verification_code', { 
sign_up_method: "email", 
email: email 
}, function() {
firebase.analytics().setUserProperties({
  email: email
});
});
firebase.analytics().logEvent('lp_btn_total', { user_id: "user_id"});
recordTier.push({eventName: "landingpageClick", tracking_id: "38201177"});
})
});

$('#getCodeBtn').click(function() {
var email = $('#email').val();
sendCodeEmail(email);
$(this).prop('disabled', true);
startCountdownEmail();
firebase.analytics().setUserProperties({
email: email});
firebase.analytics().logEvent('get_verification_code', { 
sign_up_method: "email", 
email: email 
}, function() {
firebase.analytics().setUserProperties({
  email: email
});
});
firebase.analytics().logEvent('lp_btn_total', { user_id: "user_id"});
recordTier.push({eventName: "landingpageClick", tracking_id: "38201177"});
});

function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sendCodeEmail(email) {
  $.ajax({
    url: 'https://lead.baofugold.com/apis/sendCodeEmail',
    method: 'POST',
    data: { email: email },
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
  firebase.analytics().logEvent('lp_btn_total', {user_id: "user_id"});
  firebase.analytics().logEvent('sign_up_submit', {sign_up_method: "email", email: email}, function() {
  firebase.analytics().setUserProperties({
  email: email
  });
  });
  recordTier.push({eventName: "formSubmit", tracking_id: "38201173"});
  recordTier.push({eventName: "landingpageClick", tracking_id: "38201177"});
});

document.querySelector('#registrationForm').addEventListener('submit', function(event) {
event.preventDefault();
var email = document.getElementById("email").value;
var code = document.getElementById("code").value;
var ip = "61.93.232.102";
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
  var account = data.Data.account;
  recordTier.push({eventName: "register", tracking_id: "38201164"});
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
  $('#regModal').modal('show');
  clearInterval(countdownInterval);
  $('#getCodeBtn').text('發送');
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