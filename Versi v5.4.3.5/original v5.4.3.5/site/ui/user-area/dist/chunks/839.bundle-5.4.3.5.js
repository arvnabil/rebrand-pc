"use strict";(self.webpackChunk_tc_server_user_area=self.webpackChunk_tc_server_user_area||[]).push([[839],{86240:function(e,t,n){function r(e){try{var t=document.getElementById(e);if(!t)return Promise.reject(new Error("Recieved element not exist"));t.focus(),t.select();var n=document.execCommand("copy");return n?Promise.resolve(n):Promise.reject(new Error("Can't copy with `execCommand`"))}catch(e){return Promise.reject(e)}}function o(e,t){return navigator.clipboard?navigator.clipboard.writeText(t).catch((function(){return console.warn("Clipboard.writeText is not permitted. Copying will be done via execCommand."),r(e)})):r(e)}n.d(t,{A:function(){return o}})},29010:function(e,t,n){function r(){return"fa"===this.appStateStore.language||"he"===this.appStateStore.language}n.d(t,{A:function(){return r}})},61742:function(e,t){t.A={created:function(){var e=this;this.$store.dispatch("serverDocuments/updateDocuments",{lang:this.appStateStore.language}).then((function(){return e.showCookiesNotification()}))},methods:{showCookiesNotification:function(){var e,t=this;null!==(e=this.cookieDocument)&&void 0!==e&&e.notification_enabled&&(localStorage.getItem("trueconfServerCookieNotification")||(this.notify({text:this.$pgettext("Cookie notification","We use cookies to give you the best experience on the website"),actionText:this.$pgettext("Text on the button","Learn more"),actionHandler:function(){t.appStateStore.setServerDocumentData({name:t.cookieDocument.name,content:t.cookieDocument.content}),t.appStateStore.serverDocumentIsVisible=!0},showCloseButton:!0,showActionButton:!0,duration:-1}),localStorage.setItem("trueconfServerCookieNotification","showed")))}},computed:{cookieDocument:function(){return this.$store.getters["serverDocuments/getReservedDocuments"].find((function(e){var t=e.id,n=e.enabled;return"cookie_policy"===t&&n}))||null}}}},7339:function(e,t,n){n.d(t,{A:function(){return v}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"conference-screen-footer",class:{"component-direction-rtl":e.directionIsRtl.call(this)}},[t("div",{staticClass:"conference-screen-footer__container"},[t("div",{staticClass:"conference-screen-footer__info"},[t("LanguageSelector",{attrs:{currentLanguage:e.currentLanguage},on:{"update:currentLanguage":function(t){e.currentLanguage=t},"update:current-language":function(t){e.currentLanguage=t}}}),e._v(" "),t("div",{staticClass:"conference-screen-footer__admin-contacts"},[t("p",{staticClass:"conference-screen-footer__desc conference-screen-footer__desc_contacts",on:{click:function(t){e.appStateStore.adminContactsAreVisible=!0}}},[e._v("\n          "+e._s(e.contactAdminText)+"\n        ")]),e._v(" "),t("span",{staticClass:"conference-screen-footer__desc conference-screen-footer__semicolon"},[e._v(": ")]),e._v(" "),e.contactAdminFromServer.phone?t("p",{staticClass:"conference-screen-footer__desc conference-screen-footer__desc_tel"},[e._v("\n          "+e._s(e.contactAdminFromServer.phone)+"\n        ")]):e._e()])],1),e._v(" "),t("div",{staticClass:"conference-footer__document-links"},e._l(e.enabledReservedDocuments,(function(n,r){return t("div",{key:n.id,staticClass:"conference-screen-footer__content-link__outer"},[t("a",{staticClass:"conference-screen-footer__content-link",attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.openDocumentHandler(n)}}},[e._v(e._s(n.name))]),e._v(" "),r<e.enabledReservedDocuments.length-1?t("span",[e._v(",")]):e._e()])})),0),e._v(" "),t("p",{staticClass:"conference-screen-footer__desc"},[e._v("\n      "+e._s(e.copyright)+"\n    ")]),e._v(" "),t("p",{staticClass:"conference-screen-footer__desc",domProps:{innerHTML:e._s(e.serverVersion)}})])])};r._withStripped=!0;var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"language-selector-container"},[t("TcButton",{staticClass:"language-selector-container__button",attrs:{id:"language-selector-button"},on:{click:function(t){return e.$refs["context-menu"].open()}},scopedSlots:e._u([{key:"text",fn:function(){return[t("TcIcon",{staticClass:"language-selector-container__locale-icon",attrs:{clickable:"",icon:e.localeIcon}}),e._v(" "),t("span",{staticClass:"language-selector-container__text"},[e._v("\n        "+e._s(e.languageList.find((function(t){return t.value===e.currentLanguage})).text)+"\n      ")]),e._v(" "),t("TcIcon",{staticClass:"language-selector-container__arrow-icon",attrs:{clickable:"",icon:e.menuOpen?"keyboard_arrow_up":"keyboard_arrow_down"}})]},proxy:!0}])}),e._v(" "),t("div",{staticClass:"language-selector-container__context-menu-point",style:e.position},[t("TcContextMenu",{ref:"context-menu",staticClass:"language-selector-container__context-menu",attrs:{list:e.languageList,direction:e.direction,id:"language-selector-button-list"},on:{select:function(t){return e.$emit("update:currentLanguage",t.value)},open:function(t){e.menuOpen=!0},close:function(t){e.menuOpen=!1}}})],1)],1)};o._withStripped=!0;var c={name:"LanguageSelector",props:{currentLanguage:{type:String,default:"en"},direction:{type:String,default:null},position:{type:Object,default:function(){return{top:0,left:0}}}},computed:{languageList:function(){return[{type:"element",value:"cs",text:"Čeština"},{type:"element",value:"de",text:"Deutsch"},{type:"element",value:"en",text:"English"},{type:"element",value:"es",text:"Español"},{type:"element",value:"fr",text:"Français"},{type:"element",value:"it",text:"Italiano"},{type:"element",value:"pl",text:"Polski"},{type:"element",value:"pt",text:"Português"},{type:"element",value:"vi",text:"Tiếng Việt"},{type:"element",value:"tr",text:"Türkçe"},{type:"element",value:"ru",text:"Русский"},{type:"element",value:"uk",text:"Українська"},{type:"element",value:"he",text:"עִבְרִית"},{type:"element",value:"fa",text:"فارسی"},{type:"element",value:"ko",text:"한국어"},{type:"element",value:"ja",text:"日本語"},{type:"element",value:"zh",text:"中文(简体)"},{type:"element",value:"zht",text:"中文(繁體)"}]}},data:function(){return{localeIcon:'<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M8.54297 7.17578H10.5117C10.6211 6.66536 10.6758 6.27344 10.6758 6C10.6758 5.72656 10.6211 5.33464 10.5117 4.82422H8.54297C8.59766 5.20703 8.625 5.59896 8.625 6C8.625 6.40104 8.59766 6.79297 8.54297 7.17578ZM7.50391 10.4023C8.61589 10.0378 9.46354 9.34505 10.0469 8.32422H8.32422C8.14193 9.05339 7.86849 9.74609 7.50391 10.4023ZM7.36719 7.17578C7.42188 6.79297 7.44922 6.40104 7.44922 6C7.44922 5.59896 7.42188 5.20703 7.36719 4.82422H4.63281C4.57812 5.20703 4.55078 5.59896 4.55078 6C4.55078 6.40104 4.57812 6.79297 4.63281 7.17578H7.36719ZM6 10.6484C6.51042 9.90104 6.88411 9.1263 7.12109 8.32422H4.87891C5.11589 9.1263 5.48958 9.90104 6 10.6484ZM3.67578 3.67578C3.85807 2.94661 4.13151 2.25391 4.49609 1.59766C3.38411 1.96224 2.53646 2.65495 1.95312 3.67578H3.67578ZM1.95312 8.32422C2.53646 9.34505 3.38411 10.0378 4.49609 10.4023C4.13151 9.74609 3.85807 9.05339 3.67578 8.32422H1.95312ZM1.48828 7.17578H3.45703C3.40234 6.79297 3.375 6.40104 3.375 6C3.375 5.59896 3.40234 5.20703 3.45703 4.82422H1.48828C1.37891 5.33464 1.32422 5.72656 1.32422 6C1.32422 6.27344 1.37891 6.66536 1.48828 7.17578ZM6 1.35156C5.48958 2.09896 5.11589 2.8737 4.87891 3.67578H7.12109C6.88411 2.8737 6.51042 2.09896 6 1.35156ZM10.0469 3.67578C9.46354 2.65495 8.61589 1.96224 7.50391 1.59766C7.86849 2.25391 8.14193 2.94661 8.32422 3.67578H10.0469ZM1.87109 1.89844C3.01953 0.75 4.39583 0.175781 6 0.175781C7.60417 0.175781 8.97135 0.75 10.1016 1.89844C11.25 3.02865 11.8242 4.39583 11.8242 6C11.8242 7.60417 11.25 8.98047 10.1016 10.1289C8.97135 11.2591 7.60417 11.8242 6 11.8242C4.39583 11.8242 3.01953 11.2591 1.87109 10.1289C0.740885 8.98047 0.175781 7.60417 0.175781 6C0.175781 4.39583 0.740885 3.02865 1.87109 1.89844Z" fill="white"/>\n</svg>\n',menuOpen:!1}}},a=n(14486),i=(0,a.A)(c,o,[],!1,null,null,null).exports,s=n(29010);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){var r;return r=function(e,t){if("object"!=u(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==u(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={name:"MainFooter",components:{LanguageSelector:i},methods:{openDocumentHandler:function(e){this.appStateStore.setServerDocumentData({name:e.name,content:e.content}),this.appStateStore.serverDocumentIsVisible=!0}},computed:f(f({},(0,n(95353).L8)({reservedDocuments:"serverDocuments/getReservedDocuments",customDocuments:"serverDocuments/getCustomDocuments"})),{},{currentLanguage:{get:function(){return this.appStateStore.language},set:function(e){this.appStateStore.setLanguage(e)}},serverName:function(){return this.$pgettext("Information bar","Server: %servername").replace("%servername",this.serverInfo.name)},serverVersion:function(){var e;return("user"===(null===(e=this.me)||void 0===e?void 0:e.type)?this.$pgettext("Information bar","Powered by %server_name [a]video conferencing software[/a] version %version. More at [a]%link_name[/a]."):this.$pgettext("Information bar","Powered by %server_name [a]video conferencing software[/a]. More at [a]%link_name[/a].")).replace("%server_name",this.serverInfo.productName).replace("%version",this.serverInfo.version).replace(/\[a\]/g,"<a href='".concat(this.currentLocaleUrl,"' id='trueconf-website-link' target='_blank' rel='noopener' class='conference-screen-footer__content-link'>")).replace(/\[\/a\]/g,"</a>").replace("%link_name",this.currentLocaleUrlText)},currentLocaleUrl:function(){return"ru"===this.appStateStore.language?"https://trueconf.ru":"https://trueconf.com"},currentLocaleUrlText:function(){return"ru"===this.appStateStore.language?"www.trueconf.ru":"www.trueconf.com"},copyright:function(){return this.$pgettext("Copyright","© %current_year TrueConf. All rights reserved.").replace("%current_year",(new Date).getFullYear())},contactAdminText:function(){return this.$pgettext("A text hint with a hyperlink. If a user follows this link, ерун will be able to view the system administrator’s contact details","Contact your administrator")},contactAdminFromServer:function(){return this.$store.getters["server/getServerContacts"]},enabledReservedDocuments:function(){return this.reservedDocuments.concat(this.customDocuments).filter((function(e){return e.enabled}))}}),data:function(){return{directionIsRtl:s.A}}},v=(0,a.A)(m,r,[],!1,null,null,null).exports},22811:function(e,t,n){n.d(t,{A:function(){return c}});var r=function(){var e=this,t=e._self._c;return e.me.display_name?t("div",{staticClass:"user-profile-container"},[t("TcContextMenu",{ref:"guest-profile-context-menu",attrs:{direction:"bottom-left",list:e.contextMenuList,id:"user-profile-list"},on:{select:function(e){return e.value()}}},[t("TcButton",{attrs:{id:"user-profile"},on:{click:function(t){return e.$refs["guest-profile-context-menu"].open()}},scopedSlots:e._u([{key:"default",fn:function(){return[t("p",{staticClass:"user-profile__desc one-line",attrs:{title:e.me.display_name}},[e._v("\n          "+e._s(e.me.display_name)+"\n        ")]),e._v(" "),t("TcAvatar",{attrs:{src:e.me.avatar,name:e.me.display_name}}),e._v(" "),t("TcIcon",{staticClass:"user-profile__icon",attrs:{clickable:"",icon:"keyboard_arrow_down"}})]},proxy:!0}],null,!1,2381781256)})],1)],1):e._e()};r._withStripped=!0;var o={name:"UserProfile",methods:{toPersonalArea:function(){this.$router.push({name:"user.general"})},exit:function(){this.$store.dispatch("auth/logout")}},computed:{contextMenuList:function(){var e=[{type:"element",text:this.$pgettext("Text on the button","Personal area"),icon:"perm_identity",value:this.toPersonalArea},{type:"element",text:this.$pgettext("Text on the button","Exit"),icon:"exit_to_app",value:this.exit}];return"user"!==this.me.type?e.slice(1):e}},data:function(){return{}}},c=(0,n(14486).A)(o,r,[],!1,null,null,null).exports},69414:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"simple-info-page__container"},[t("p",{staticClass:"simple-info-page__header"},[e._v("\n    "+e._s(e.$gettext("Page not found"))+"\n  ")])])};r._withStripped=!0;var o={name:"NotFound"},c=(0,n(14486).A)(o,r,[],!1,null,null,null).exports},25961:function(e){e.exports="data:image/png;base64,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"}}]);