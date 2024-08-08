class Confection{constructor(){this.version="1.0.7",this.uuid=!1,this.domain=window.location.hostname,this.privacy="none",this.showBanner=!0,this.bannerPosition="none",this.showedBanner=0,this.persistent=!0,this.consent=0,this.later={events:[],fields:[],cookies:[]},this.forceBannerOpen=!1,this.consentLost=!1,this.ignoreFields=[],this.analytics=!0,this.analyticsLoadtime=!0,this.appendCss="",this.randomId="banner"+this.hexSingleConvert(this.random_number(1e4,99999)),this.badgeStyle=document.createElement("style"),this.badgeToggler=document.createElement("DIV"),this.customLogo=!1,this.shortSession=!0,this.i18n={banner_none:"This site isn’t collecting your personal information. Any information you submitted before opting out is still in our system. To manage this information, please ",banner_base:"The authors of this site care about your personal data. That’s why they use Confection. Our privacy-first data management app helps people like you take control of the information you share online.",banner_strict_base:"At the moment, this site would like permission to use basic data to improve the content it offers you. This would include information like your IP address. We won’t collect more sensitive information such as your name or email address without asking you first.",banner_strict:"Hi, it’s Confection again. We noticed that you’re about to share information like your name and email with this site. Do we have your permission to do so?",banner_collecting:"You’ve given this site permission to collect information like your IP address, name, and email.",banner_collecting_basic:"Collecting Basic Data",banner_collecting_full:"Fully Authorized",banner_collecting_not:"Not Collecting Your Data",button_more:"Learn More",button_accept:"Accept",button_deny:"Not now",button_stop:"Stop Collecting",button_resume:"Resume Data Sharing",button_close:"Close",button_click:"click here"},document.addEventListener("change",function(e){confection.checkInput(e)}),this.checkIframedForms();var e=new MutationObserver(function(e){e.forEach(function(e){if("childList"===e.type)for(var n=0;n<e.addedNodes.length;n++){var t=e.addedNodes[n];void 0!==t.tagName&&"IFRAME"==t.tagName.toUpperCase()&&confection.monitorIframedForms(t)}})});e.observe(document,{childList:!0,subtree:!0})}startBuild(){this.checkConsent(!0),this.generateUUID(),!0===this.analytics&&this.analyticsTrack(),window.dispatchEvent(new CustomEvent("ConfectionStarted"))}analyticsTrack(){var e={};e.url=window.location.href,e.title=document.title,""!=document.referrer&&void 0!==document.referrer&&(e.referrer=document.referrer),e.language=navigator.language||navigator.userLanguage,/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?e.device="mobile":e.device="desktop",e=JSON.stringify(e),this.submitEvent("pageviewBatch",e),!0===this.analyticsLoadtime&&window.addEventListener("load",function(e){confection.submitEvent("loadtime",(window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart)/1e3)})}generateUUID(){var e=new Date,n=!1;n=this.getCookie("uuid"),36!=n.length&&(n=this.hexConvert(e.getUTCFullYear())+"-",n+=this.hexSingleConvert(e.getUTCHours())+this.hexSingleConvert(e.getUTCMinutes())+"-",n+=this.hexSingleConvert(this.random_number(64,79))+this.hexSingleConvert(e.getUTCMonth()+1)+"-",n+=this.hexSingleConvert(this.random_number(128,191))+this.hexSingleConvert(e.getUTCSeconds())+"-",n+=this.hexSingleConvert(this.random_number(0,255))+this.hexSingleConvert(this.random_number(0,255))+this.hexSingleConvert(this.random_number(0,255))+this.hexSingleConvert(this.random_number(0,255))+this.hexSingleConvert(this.random_number(0,255))+this.hexSingleConvert(this.random_number(0,255)),this.setCookie("uuid",n,this.shortSession)),this.uuid=n;var t=new CustomEvent("ConfectionUuidGenerated",{detail:{uuid:this.uuid}});window.dispatchEvent(t)}hexConvert(e){e=e.toString();var n="";for(let t=0;t<e.length;t++){const o=parseInt(e[t]);n+=this.hexSingleConvert(o)}return n}hexSingleConvert(e){return e=e.toString(16),1==e.length&&(e="0"+e),e}checkConsent(e){var n=this.getCookie("consent");""!=n&&(n=parseInt(n),n>=0&&n<=2&&(this.setConsent(n),e=!1)),!0===this.showBanner&&(this.showPrivacyBanner(),!0!==e&&(1==n?this.showPrivacyBanner.firstConsent():2==n?this.showPrivacyBanner.secondConsent():this.showPrivacyBanner.openBanner()))}setConsent(e){0==e?(this.setCookie("consent",e),this.consent=e):(this.consent=e,this.setCookie("consent",e),this.lateSubmit())}setBannerPosition(e){"none"==e?this.showBanner=!1:this.bannerPosition=e}setPrivacy(e){this.privacy=2==e||"strict"==e||"lgpd"==e||"LGPD"==e?"strict":0==e||"none"==e?"none":"default"}checkPrivacy(e){return"none"==this.privacy||(this.consent>=2||("strict"===this.privacy?this.consent>=1&&!e:this.consent>=1||!e))}logoSvg(e){return!1!==this.customLogo?this.customLogo:'<svg style="position: absolute;width: 30px;height: 30px;top: 10px;left: 50%;transform: translateX(-50%); xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="'+e+'" d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z"/></svg>'}setCustomLogo(e){this.customLogo='<img style="width: 50px;height: 50px;" src="'+e+'"></img>',confection.badgeToggler.innerHTML=this.customLogo}addStyle(e,n){void 0===n&&(n=" "),this.badgeStyle.appendChild(document.createTextNode("#"+this.randomId+n+e))}showPrivacyBanner(){function e(e){if(!(!0===e&&!1!==a||!0===a&&!0!==confection.forceBannerOpen)){a=!0,t.onclick="",i.parentNode==t&&t.removeChild(i),i=document.createElement("DIV"),i.classList.add("openbanner"),i.innerHTML="<span>"+confection.i18n.banner_strict+"</span><br />","left"==confection.bannerPosition?t.insertBefore(i,confection.badgeToggler):t.appendChild(i);var r=document.createElement("a");r.classList.add("btnok"),r.innerHTML=confection.i18n.button_accept,r.href="#",i.appendChild(r),r.onclick=function(e){e.preventDefault(),e.stopPropagation(),confection.showPrivacyBanner.secondConsent()};var c=document.createElement("a");c.classList.add("btnok","no"),c.innerHTML=confection.i18n.button_deny,c.href="#",i.appendChild(c),c.onclick=function(e){e.preventDefault(),e.stopPropagation(),t.removeChild(i),t.onclick=function(){n()}},i.appendChild(o)}}function n(){t.onclick="",i.parentNode==t&&t.removeChild(i),i=document.createElement("DIV"),i.classList.add("openbanner","deny"),i.innerHTML="<span>"+confection.i18n.banner_collecting+"</span>","left"==confection.bannerPosition?t.insertBefore(i,confection.badgeToggler):t.appendChild(i);var e=document.createElement("a");e.classList.add("btnok"),e.innerHTML=confection.i18n.button_accept,e.href="#",i.appendChild(e),e.onclick=function(e){e.preventDefault(),e.stopPropagation(),t.removeChild(i),t.onclick=function(){n()}};var r=document.createElement("a");r.classList.add("btnok","no"),r.innerHTML=confection.i18n.button_stop,r.href="#",i.appendChild(r),r.onclick=function(e){e.preventDefault(),e.stopPropagation(),t.removeChild(i),confection.consentLost=confection.consent,confection.setConsent(0),confection.badgeToggler.style.background="#000",t.onclick=function(){confection.showPrivacyBanner.regainConsent()}},i.appendChild(o)}if(1!=this.showedBanner){this.showedBanner=1,this.addStyle("{max-width: 100%; padding: 10px; color: #111; font-size: 14px; position: fixed; bottom: 20px; right: 0;font-family: Arial; text-align: center; transition: width: 0.3s; display: flex; align-items: start; z-index: 2147483640;}"),this.addStyle(".left{right: initial; left: 0;}",""),this.addStyle(".center{right: initial; left: 50%; transform: translateX(-50%);}",""),this.addStyle(".toggler{margin: 0 5px; border-radius: 100%; width: 50px; flex: 0 0 50px; padding: 0; height: 50px; background: #000; box-shadow: 1px 1px 3px 0 rgba(0,0,0,0.3);position: relative;cursor:pointer;}"),this.addStyle(".toggler.none{cursor:none;}"),this.addStyle(".privacy-link{font-weight: 400; text-decoration: underline; color: #444; display: block; height:36px;line-height:36px;}"),this.addStyle(".btnok{font-weight: 400;padding-top: 5px;background: #03a9f4;display: inline-block;height: 36px;width: 100%;color: #fff;text-decoration: none;line-height: 36px;padding: 0;margin: 0 0 6px; transition: all 0.25s;}"),this.addStyle(".btnok:hover{background:#2196f3}"),this.addStyle(".btnok.no{background: rgba(0,0,0,0.2);color: #eee;}"),this.addStyle(".btnok.no:hover{background: rgba(0,0,0,0.4);}"),this.addStyle(".openbanner{width: 400px; max-width: 100%; font-weight: 400; background: #0d80fb; color: #fff; padding: 10px; font-size: 12px;}"),this.addStyle(".openbanner.deny{background: #666; color: #fff;}"),this.addStyle(".openbanner > span{text-align: left; display: block;margin:0 0 8px;}"),this.addStyle(".openbanner > span > a{color: #fff; text-decoration: underline;}");var t=document.createElement("DIV");t.id=this.randomId,t.classList.add(this.bannerPosition),this.badgeToggler.classList.add("toggler",confection.privacy),this.badgeToggler.innerHTML=this.logoSvg("#fff");var o=document.createElement("a");o.classList.add("privacy-link"),o.innerHTML=confection.i18n.button_more,o.target="_blank",o.href="https://confection.io/people?utm_source=Confection-Banner&utm_medium="+confection.domain,o.style.color="#fff",t.appendChild(this.badgeToggler),t.onclick=function(){confection.showPrivacyBanner.openBanner()};var i=document.createElement("DIV");!0!==this.checkPrivacy(!0)&&document.addEventListener("change",function(e){"strict"==confection.privacy?(confection.forceBannerOpen=!1,confection.showPrivacyBanner.openBanner(!0)):"default"==confection.privacy&&(confection.forceBannerOpen=!1,confection.showPrivacyBanner.openBanner(!1))});var r=!1;this.showPrivacyBanner.openBanner=function n(a){if("none"!=confection.privacy)if(!0!==r||!0===confection.forceBannerOpen){r=!0,confection.showedBanner=2,t.onclick="",i.parentNode==t&&t.removeChild(i),i=document.createElement("DIV"),i.classList.add("openbanner"),i.innerHTML="<span>"+confection.i18n.banner_base+"</span><br />","strict"==confection.privacy&&(i.innerHTML+="<span>"+confection.i18n.banner_strict_base+"</span><br />"),"left"==confection.bannerPosition?t.insertBefore(i,confection.badgeToggler):t.appendChild(i);var c=document.createElement("a");c.classList.add("btnok"),c.innerHTML=confection.i18n.button_accept,c.href="#",i.appendChild(c),c.onclick=function(e){e.preventDefault(),e.stopPropagation(),confection.showPrivacyBanner.firstConsent(a)};var s=document.createElement("a");s.classList.add("btnok","no"),s.innerHTML=confection.i18n.button_deny,s.href="#",i.appendChild(s),s.onclick=function(e){e.preventDefault(),e.stopPropagation(),t.removeChild(i),t.onclick=function(){confection.forceBannerOpen=!0,n(),confection.forceBannerOpen=!1}},i.appendChild(o)}else!0===a&&e(!0)},this.showPrivacyBanner.firstConsent=function(r){confection.setConsent(1),i.parentNode==t&&t.removeChild(i),t.onclick="",o.innerHTML=confection.i18n.button_more,o.href="https://confection.io/people/?utm_source=Confection-Banner&utm_medium="+confection.domain,"strict"==confection.privacy?(confection.badgeToggler.style.background="#ffc107",!0===r?e(!0):t.onclick=function(){n()}):(confection.badgeToggler.style.background="#6a8e73",t.onclick=function(){n()})};var a=!1;this.showPrivacyBanner.secondConsent=function(){t.onclick="",confection.setConsent(2),i.parentNode==t&&t.removeChild(i),confection.badgeToggler.style.background="#6a8e73",t.onclick=function(){n()}};var c=!1;this.showPrivacyBanner.regainConsent=function(){if(!0!==c){c=!0,t.onclick="",i.parentNode==t&&t.removeChild(i),i=document.createElement("DIV"),i.classList.add("openbanner"),i.innerHTML="<span>"+confection.i18n.banner_none+'<a href="https://confection.io/people?utm_source=Confection-Banner&utm_medium='+confection.domain+'" target="_blank">'+confection.i18n.button_click+"</a></span><br />","left"==confection.bannerPosition?t.insertBefore(i,confection.badgeToggler):t.appendChild(i);var e=document.createElement("a");e.classList.add("btnok"),e.innerHTML=confection.i18n.button_resume,e.href="#",i.appendChild(e),e.onclick=function(e){e.preventDefault(),e.stopPropagation(),c=!1,1==confection.consentLost?confection.showPrivacyBanner.firstConsent():confection.showPrivacyBanner.secondConsent()};var n=document.createElement("a");n.classList.add("btnok","no"),n.innerHTML=confection.i18n.button_close,n.href="#",i.appendChild(n),n.onclick=function(e){e.preventDefault(),e.stopPropagation(),t.removeChild(i),c=!1,t.onclick=function(){confection.showPrivacyBanner.regainConsent()}},i.appendChild(o)}},document.body.appendChild(t),document.body.appendChild(this.badgeStyle)}}checkInput(e){if((""!=e.target.name||""!=e.target.id)&&""!=e.target.value&&!0===e.target.validity.valid&&"INPUT"==e.target.tagName.toUpperCase()&&-1==new Array("BUTTON","FILE","IMAGE","PASSWORD","RESET","SEARCH","SUBMIT").indexOf(e.target.type.toUpperCase())||new Array("SELECT","TEXTAREA","DATALIST").indexOf(e.target.tagName.toUpperCase())>-1){var n=["credit-card","credit_card","creditcard","card-number","card_number","cardnumber","security","security-code","security_code","securitycode","pass","passphrase"],t=e.target.name.trim();""==t&&(t=e.target.id.trim()),""!=t&&(t=t.toLowerCase(),-1==t.indexOf("password")&&-1==n.indexOf(t)&&-1==confection.ignoreFields.indexOf(t)&&confection.submit(t,e.target.value))}}random_number(e,n){return Math.round(Math.random()*(n-e)+e)}checkIframedForms(){for(var e=document.querySelectorAll("iframe"),n=0;n<e.length;n++)try{this.monitorIframedForms(e[n])}catch(e){}}monitorIframedForms(e){var n=this.canReadIframeContent(e);if(!1===n);else{var t=n.querySelectorAll("input");0==t.length?setTimeout(()=>{t=n.querySelectorAll("input"),0==t.length||n.addEventListener("change",function(e){confection.checkInput(e)})},2e3):n.addEventListener("change",function(e){confection.checkInput(e)})}}canReadIframeContent(e){try{var n=e.contentDocument||e.contentWindow.document;return n}catch(e){return!1}}submit(e,n,t,o){"function"!=typeof o&&(o=function(){}),!1===this.uuid&&this.generateUUID(),"event"!=t&&(t="field");var i="?";if("field"==t){if(!1===this.checkPrivacy(!0))return this.saveForLater(e,n,"fields"),o(!1),!1;i+="&name="+e}else{if(!1===this.checkPrivacy(!1))return this.saveForLater(e,n,"events"),o(!1),!1;i+="&event="+e}i+="&account_id="+confection_account_id+"&uuid="+this.uuid+"&value="+encodeURIComponent(n)+"&domain="+this.domain;var r=new XMLHttpRequest;r.open("GET",confection_url+i,!0),r.onload=function(){return this.status>=200&&this.status<400?(o(!0),!0):(o(!1),!1)},r.onerror=function(){return o(!1),!1},r.send()}submitEvent(e,n,t){this.submit(e,n,"event",t)}saveForLater(e,n,t){this.later[t][e]=n,"cookies"==t&&"_short_cookie_uuid"==e||1==this.showedBanner&&("field"==t&&"strict"==this.privacy?this.showPrivacyBanner.openBanner(!0):this.showPrivacyBanner.openBanner())}lateSubmit(){var e="";if(!0===this.checkPrivacy(!0))for(var n in this.later.fields)this.later.fields.hasOwnProperty(n)&&(e=this.later.fields[n],delete this.later.fields[n],this.submit(n,e,"field"));if(!0===this.checkPrivacy(!1)){for(var n in this.later.events)this.later.events.hasOwnProperty(n)&&(e=this.later.events[n],delete this.later.events[n],this.submit(n,e,"event"));for(var n in this.later.cookies)this.later.cookies.hasOwnProperty(n)&&(e=this.later.cookies[n],delete this.later.cookies[n],n.indexOf("_short_cookie_")>=0?(n=n.replace("_short_cookie_",""),this.setCookie(n,e,!0)):this.setCookie(n,e))}}setCookie(e,n,t){if(e=void 0!==e?e:"",!e)return"";if(e="confection_"+e,!0===this.checkPrivacy(!1))if(!0===t)document.cookie=e+"="+n+"; path=/";else{var o=new Date;o.setTime(o.getTime()+31536e6),document.cookie=e+"="+n+"; expires="+o.toUTCString()+"; path=/"}else e=e.replace("confection_",""),!0===t&&(e="_short_cookie_"+e),this.saveForLater(e,n,"cookies")}getCookie(e){if(e=void 0!==e?e:"",!e)return"";e="confection_"+e,e+="=";for(var n=document.cookie.split(";"),t=0;t<n.length;t++){var o=n[t].trim();if(0==o.indexOf(e))return o.substring(e.length,o.length)}return""}}var confection=new Confection;window.dispatchEvent(new CustomEvent("ConfectionReady")),confection.startBuild();
