const modalText = document.querySelector(".modalText");

  document.getElementById("optionA").addEventListener("click", function() {
    var urlParams = new URLSearchParams(window.location.search);
      var selectedOption = this.getAttribute("data-value");
document.getElementById("result").innerHTML = `
<form id="phoneRegistrationForm" method="POST">
    <div>
        <input name="phoneIssueCountry" id="phoneIssueCountry" type="hidden">
        <span class="phoneSpan1" style="width: 380px; display: -webkit-inline-box;">
          <span>
          <div class="select-box">
              <div class="selected-option" for="phone">
                  <span class="iconify" data-icon="pepicons-pencil:line-y" style="color: #000;"></span>
                  <div style="display: flex; align-items: center;" class="selectBoxContainer">
                      <span class="iconify countryFlag" id="flag" data-icon="flag:my-4x3"></span>
                      <strong class="countryCode countryPhoneCode">+60</strong>
                  </div>
                  <span class="iconify" data-icon="pepicons-pencil:line-y" style="color: #000;"></span>
                  <input type="tel" id="phone" name="phone" placeholder="请输入手机号码" style="font-size: 16px;" required pattern="[0-9]*">
              </div>
              <div class="options">
                  <ol>
                  </ol>
              </div>
          </div>
        </span>
      </span>
        <span class="phoneSpan2" style="display: -webkit-inline-box;">
        <span class="pSpan2" style="height: 40px; display: inline-flex; align-items: center; color: #5f5f5f; bottom: 2px; position: relative; width: 450px;">
        <span style="background: #fff; height: 40px; display: inline-flex; align-items: center; color: #5f5f5f;">
          <label for="phoneCode">&nbsp;&nbsp;
          <span class="iconify" data-icon="prime:key"></span>&nbsp;&nbsp;<span id="code1">验证码</span>
          </label>&nbsp;&nbsp;
          <span class="iconify" data-icon="pepicons-pencil:line-y" style="color: #e6e6e6;"></span>&nbsp;&nbsp;
          <input type="text" id="phoneCode" placeholder="请输入验证码" name="phoneCode" style="border: unset; outline: none;">
        </span>
        <span class="on-disabled">
          <button class="btn btn-primary" disabled id="getCodeBtnPhone" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" style="height: 40px; border-radius: unset; align-self: center; background-color: #ff7b4f; border: unset; opacity: 1">取得验证码</button>
        </span>
        </span>
          <input type="hidden" name="fromTypePhone" value="1">
          <input type="hidden" name="clientid" value="">
          <input type="hidden" name="appCodePhone" value="BF_888">
          <input type="hidden" name="ip" id="ip" value="">
          <button class="btn btn-primary phoneReg" id="registerPhone" type="submit" value="立即注册" style="height: 40px; border-radius: unset; align-self: center; margin-bottom: 8px; background-color: #ff7b4f; border: unset; width: 130px; margin-left: 20px;">
          免费开户
          </button>
        </span>
    </div>
</form>
`;
;

if (urlParams.has('lang') && urlParams.get('lang') === 'tc') {
  const phoneInput = document.getElementById('phone');
  phoneInput.placeholder = '請輸入手機號碼';
  const phoneCodeInput = document.getElementById('phoneCode');
  phoneCodeInput.placeholder = '請輸入驗證碼';
  const code1 = document.getElementById('code1');
  code1.innerHTML = '驗證碼';
  const getCodeBtnPhone = document.getElementById('getCodeBtnPhone');
  getCodeBtnPhone.innerHTML = '取得驗證碼';
  const registerPhone = document.getElementById('registerPhone');
  registerPhone.innerHTML = '免費開戶';
}

document.getElementById("dropbtn").innerHTML = selectedOption;
var currentUrl = window.location.href;
var appCodeBF = currentUrl.includes("appcode=BF_999");
var countries;
if (appCodeBF) {
  countries = [
    { name: "中国", code: "CN", phone: "+86" },
  ];
  document.querySelector(".iconify[data-icon='flag:my-4x3']").setAttribute("data-icon", "flag:cn-4x3");
  document.querySelector(".countryCode").textContent = "+86";
} else {
  countries = [
    { name: "加拿大", code: "CA", phone: "+1" },
    { name: "印度", code: "IN", phone: "+91" },
    { name: "韩国", code: "KR", phone: "+82" },
    { name: "马来西亚", code: "MY", phone: "+60" },
    { name: "新加坡", code: "SG", phone: "+65" },
    { name: "泰国", code: "TH", phone: "+66" },
    { name: "中国", code: "CN", phone: "+86" },
  ];
}

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
    modalText.textContent = "请填写电话号码!";
    $('#regModal').modal('show');
  } else {
    modalText.textContent = "请填写验证码!";
    $('#regModal').modal('show');
  }
  var countryCode = document.querySelector('.countryCode').textContent;
  var phone = countryCode + document.getElementById('phone').value;
  firebase.analytics().setUserProperties({
  email: email});
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
$('#getCodeBtnPhone').text(countdown + '秒后再试');
countdown--;
if (countdown < 0) {
  clearInterval(countdownInterval);
  $('#getCodeBtnPhone').prop('disabled', false); // 啟用按鈕
  $('#getCodeBtnPhone').text('取得验证码');
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
        var currentUrl = window.location.href;
        var appCodeBF = currentUrl.includes("appcode=BF_999");
        if (phone.startsWith("+86")) {
          apiPath = "https://lead.baofugold.com/apis/yf/sendCode";
          apiParams = "?sendType=1&mobile=" + phone + "&appcode=";
          if (appCodeBF) {
            apiParams += "BF_999";
          } else {
            apiParams += "BF_888";
          }
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
var button = document.getElementById("registerPhone");
button.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...';

if (phoneCode === '') {
  fbq('track', 'sign_up_submit', { sign_up_method: "phone", phone: phone});
  firebase.analytics().logEvent('sign_up_submit', { sign_up_method: "phone", phone: phone }, function() {
    firebase.analytics().setUserProperties({
      phone: phone
    });
  });
} else if (numericRegex.test(phoneNum ) && phoneCode !== '') {
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

var currentUrl = window.location.href;

var appCodeBF = currentUrl.includes("appcode=BF_999");

var phoneRegUrl = "https://lead.baofugold.com/apis/web/account/registerhw?issueCountry=" + phoneFromType + "&mobile=" + phone + "&code=" + phoneCode + "&fromType=1&appcode=";

if (appCodeBF) {
  phoneRegUrl += "BF_999";
} else {
  phoneRegUrl += "BF_888";
}

phoneRegUrl += "&ip=" + ip;

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
    fbq('track', 'sign_up_success', { sign_up_method: "phone",
    phone: phone,
    account: account,});
    recordTier.push({eventName: "register", tracking_id: "38201164"});
    clearInterval(countdownInterval);
    $('#getCodeBtn').text('發送');
    const appCodeNumber = urlParams.get('appcode') || '';
    if (window.matchMedia("(max-width: 779px)").matches) {
      setTimeout(function () {
        window.location.href = "https://www.baofugold.com/account/demo/succPhone.html?account=" + account + "&v=" + appCodeNumber;
      }, 500)
    } else {
      setTimeout(function () {
        window.location.href = "https://www.baofugold.com/account/demo/succ.html?account=" + account + "&v=" + appCodeNumber ;
      }, 500)
    }
  } else {
    modalText.textContent = data.Data;
    $('#regModal').modal('show');
    button.innerHTML ='免费开户';
  }
})
.catch(error => {
});
});
});