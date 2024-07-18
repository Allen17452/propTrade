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