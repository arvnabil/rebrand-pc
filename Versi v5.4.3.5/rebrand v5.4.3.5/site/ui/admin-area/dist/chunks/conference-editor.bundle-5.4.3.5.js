/*! For license information please see conference-editor.bundle-5.4.3.5.js.LICENSE.txt */
"use strict";(self.webpackChunk_tc_server_admin_area=self.webpackChunk_tc_server_admin_area||[]).push([[457],{57471:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"reports",class:{"conference-editor__firefox-browser":e.isFirefoxBrowser},attrs:{id:"admin__conference-editor"}},[e.isLoaded?t("conference-editor-module",{attrs:{mode:e.mode,context:e.context,basedOnTemplate:e.basedOnTemplate,basedOnTemplateId:e.basedOnTemplateId,permissions:e.editorPermissions,environmentConfig:{platform:e.$store.getters["device/getPlatform"]},lang:e.$store.getters["auth/getAuthorizationUserInfo"].lang,timeOffset:e.$store.getters["auth/getAuthorizationUserInfo"].time_offset,defaultDuration:60*e.defaultDuration,id:e.id},on:{conferenceRegistrationChanged:function(t){return e.onConferenceRegistrationChanged(t)},conferenceCreatingSuccess:function(t){return e.onConferenceCreatingSuccess(t)},conferenceCreatingFail:function(t){return e.onConferenceCreatingFail(t)},conferenceEditingSuccess:function(t){return e.onConferenceEditingSuccess(t)},conferenceEditingFail:function(t){return e.onConferenceEditingFail(t)},interpretersRemovedFromLayouts:function(t){return e.onInterpretersRemovedFromLayouts(t)},templateCreatingSuccess:function(t){return e.onTemplateCreatingSuccess(t)},templateCreatingFail:function(t){return e.onTemplateCreatingFail(t)},templateEditingSuccess:function(t){return e.onTemplateEditingSuccess(t)},templateEditingFail:function(t){return e.onTemplateEditingFail(t)},showLicenceDenied:function(t){return e.showInformationForAdmin("webinars")},showGatewayDenied:function(t){return e.showInformationForAdmin("multigateway")},uniqueSlotsWarning:function(t){return e.onUniqueSlotsWarning(t)},openLink:function(t){return e.onOpenLink(t)},cancel:e.cancel,showMulticastDenied:function(t){return e.showInformationForAdmin("udp-multicast")},showBroadcastingDenied:function(t){return e.showInformationForAdmin("streaming")},conferenceHasStarted:function(t){e.showPopupOfRunningConference=!0}}}):e._e(),e._v(" "),e.showPopup?t("popup-window",{attrs:{headerText:e.$pgettext("Window title",e.popupInformation.title)},on:{cancel:function(t){e.showPopup=!1}},scopedSlots:e._u([{key:"content",fn:function(){return[t("div",{staticClass:"license-information-content"},[t("div",{staticClass:"license-information-content__description"},[t("img",{staticClass:"license-information-content__image",attrs:{width:"255",height:"255",src:"/images/extensions/".concat(e.popupInformation.img)}}),e._v(" "),e._l(e.popupInformation.text,(function(n,r){return t("p",{key:r,staticClass:"license-information-content__description__item"},[e._v("\n            "+e._s(e.$pgettext("Text",n))+"\n          ")])}))],2)]),e._v(" "),t("div",{staticClass:"license-information-actions"},[t("a",{staticClass:"button btn_green",attrs:{href:e.popupInformation.buttonHref}},[e._v("\n          "+e._s(e.$pgettext("Text on the button",e.popupInformation.buttonName))+"\n        ")]),e._v(" "),t("a",{attrs:{href:e.popupInformation.linkHref}},[e._v("\n          "+e._s(e.$pgettext("Text on the button",e.popupInformation.linkName))+"\n        ")])])]},proxy:!0}],null,!1,2101902896)}):e._e(),e._v(" "),e.showPopupOfRunningConference?t("popup-window",{attrs:{headerText:e.$pgettext("Message","The conference is now in progress")},on:{cancel:function(t){e.showPopupOfRunningConference=!1}}},[t("div",{attrs:{slot:"content"},slot:"content"},[t("p",{staticClass:"license-information-content__description__item_onlyText"},[e._v("\n        "+e._s(e.$pgettext("Message","The changes can be saved only when the conference is ended."))+"\n      ")])]),e._v(" "),t("div",{attrs:{slot:"actions"},slot:"actions"},[t("button",{staticClass:"popup-window__button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only",on:{click:function(t){e.stopConference(),e.showPopupOfRunningConference=!1}}},[e._v("\n        "+e._s(e.$pgettext("A button","End conference"))+"\n      ")]),e._v(" "),t("button",{staticClass:"popup-window__button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only",on:{click:function(t){e.showPopupOfRunningConference=!1}}},[e._v("\n        "+e._s(e.$pgettext("A button","Cancel"))+"\n      ")])])]):e._e()],1)};r._withStripped=!0;var o=n(57642),i=n.n(o),a=n(67596),s=n.n(a),c=n(95353),u=n(72505),l=n.n(u),f=n(4926);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){var r;return r=function(e,t){if("object"!=d(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==d(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(){g=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof w?t:w,a=Object.create(i.prototype),s=new k(r||[]);return o(a,"_invoke",{value:L(e,n,s)}),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=l;var p="suspendedStart",h="suspendedYield",m="executing",v="completed",y={};function w(){}function b(){}function x(){}var _={};u(_,a,(function(){return this}));var E=Object.getPrototypeOf,O=E&&E(E(F([])));O&&O!==n&&r.call(O,a)&&(_=O);var T=x.prototype=w.prototype=Object.create(_);function C(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(o,i,a,s){var c=f(e[o],e,i);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==d(l)&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function L(t,n,r){var o=p;return function(i,a){if(o===m)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var c=I(s,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var u=f(t,n,r);if("normal"===u.type){if(o=r.done?v:h,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=v,r.method="throw",r.arg=u.arg)}}}function I(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,I(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=f(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function F(t){if(t||""===t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(d(t)+" is not iterable")}return b.prototype=x,o(T,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:b,configurable:!0}),b.displayName=u(x,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,u(e,c,"GeneratorFunction")),e.prototype=Object.create(T),e},t.awrap=function(e){return{__await:e}},C(S.prototype),u(S.prototype,s,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new S(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},C(T),u(T,c,"Generator"),u(T,a,(function(){return this})),u(T,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=F,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach($),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),$(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;$(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:F(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},t}function v(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){v(i,r,o,a,s,"next",e)}function s(e){v(i,r,o,a,s,"throw",e)}a(void 0)}))}}var w={name:"ConferenceEditor",components:{ConferenceEditorModule:i(),PopupWindow:f.A},created:function(){var e=this;this.$store.dispatch("server/updateDocumentation",{parameters:{lang:this.$store.getters["auth/getAuthorizationUserInfo"].lang}}).catch((function(e){return console.warn("Error updateDocumentation.",e)})),this.$store.dispatch("server/updateServerInfo").then((function(){e.$store.dispatch("users/updateServers",{accessToken:null,selfServerInfo:e.$store.getters["server/getServerInfo"]}).then((function(){e.updateUsers()})).catch((function(){e.updateUsers()}))})),0===this.$store.getters["templateList/getTemplates"].length&&this.$store.dispatch("templateList/updateAllTemplates",{accessToken:this.$store.getters["auth/getAccessToken"]});var t=new(s())(window.location.search);return-1===this.$route.path.indexOf("admin/conferences/create")||t.get("template")?-1!==this.$route.path.indexOf("admin/conferences/create")&&t.get("template")?(this.$store.commit("conferenceEditor/setRoom"),this.mode="creation",this.context="conference",this.id=null,this.basedOnTemplate=!0,this.basedOnTemplateId=t.get("template"),void(this.isLoaded=!0)):-1!==this.$route.path.indexOf("admin/conferences/edit")&&t.get("key")?(this.mode="edition",this.context="conference",this.id=t.get("key"),this.basedOnTemplate=!1,this.basedOnTemplateId=null,void(this.isLoaded=!0)):-1!==this.$route.path.indexOf("admin/templates/create")?(this.mode="creation",this.context="template",this.id=null,this.basedOnTemplate=!1,this.basedOnTemplateId=null,void(this.isLoaded=!0)):void(-1!==this.$route.path.indexOf("admin/templates/edit")&&t.get("key")&&(this.mode="edition",this.context="template",this.id=t.get("key"),this.basedOnTemplate=!1,this.basedOnTemplateId=null,this.isLoaded=!0)):(this.mode="creation",this.context="conference",this.id=null,this.basedOnTemplate=!1,this.basedOnTemplateId=null,void(this.isLoaded=!0))},methods:{stopConference:function(){var e=this;this.$store.dispatch("conference/stopConference",{conferenceId:this.id}).then(y(g().mark((function t(){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$store.dispatch("conferenceList/updateActiveConferences"),e.$emit("loadConferenceInfo",e.id);case 2:case"end":return t.stop()}}),t)}))))},showInformationForAdmin:function(e){var t=this;l().get("/admin/web/extension?ext=".concat(e)).then((function(e){var n=e.data;t.showPopup=!0,t.popupInformation=n}))},onConferenceRegistrationChanged:function(e){e&&this.serverMessageHandler(this.$pgettext("A text hint displayed to a user who creates a video conference. The user can create a public conference opened to all participants. They only need to sign up (register) for this event. Under such circumstances, the use of PIN will be unavailable.","PIN is unavailable when conference registration is enabled"),8e3)},onConferenceCreatingSuccess:function(e){console.warn("onConferenceCreatingSuccess",e),window.location.replace("/admin/conferences/list?id=".concat(e.id))},onConferenceCreatingFail:function(e){console.warn("onConferenceCreatingFail",e)},onConferenceEditingSuccess:function(e){console.warn("onConferenceEditingSuccess",e),window.location.replace("/admin/conferences/list?id=".concat(e.id))},onConferenceEditingFail:function(e){console.warn("onConferenceEditingFail",e)},onTemplateCreatingSuccess:function(e){console.warn("onTemplateCreatingSuccess",e),"template"===this.context&&window.location.replace("/admin/templates/list?id=".concat(e.id))},onTemplateCreatingFail:function(e){console.warn("onTemplateCreatingFail",e)},onTemplateEditingSuccess:function(e){console.warn("onTemplateEditingSuccess",e),window.location.replace("/admin/templates/list?id=".concat(e.id))},onTemplateEditingFail:function(e){console.warn("onTemplateEditingFail",e)},onInterpretersRemovedFromLayouts:function(){this.serverMessageHandler(this.$pgettext("A notification displayed to a user. Here, we are talking about a multi-language meeting assisted by interpreters. The users, who are appointed as interpreters, may be heard by conference participants, but they may be removed from the video layout (arrangement of video windows).","Interpreters have been removed from the layout"),3e3)},serverMessageHandler:function(e,t){Server.clearServerMessage(),Server.setServerMessage(e,Server.MESSAGE_TYPE.NOTE,t)},onUniqueSlotsWarning:function(e){var t=e.type,n={threeLeft:this.$pgettext("A notification. To be on the podium means that a user can be seen and heard by other conference participants. Please note that the word “podium” is already used in the UI. So, you need to check how it was previously translated into the target language. This hint specifies the number of podiums that can be taken by participants. The numeral 3 is hard-coded; so, no other value will be used.","3 vacant podiums are remaining"),slotsExceeded:this.$pgettext("The text in the notification about exceeding the maximum number of podiums","Exceeded the maximum number of podiums")}[t];this.serverMessageHandler(n,3e3)},updateUsers:function(){var e=this;this.$store.getters["server/getStorageType"]("ldap")&&this.$store.commit("users/setDefaultPageSize",{users:1e3}),this.usersTree.keys.forEach((function(t){e.$store.dispatch("users/updateUsersByServer",{server:e.usersTree.list[t]}),e.$store.dispatch("users/updateGroupsByServer",{server:e.usersTree.list[t]})}))},onOpenLink:function(e){window.open(e,"_blank","noopener")},cancel:function(){"template-edit"!==this.$route.name&&"template-create"!==this.$route.name?this.id?window.location.replace("/admin/conferences/list?id=".concat(this.id)):window.location.replace("/admin/conferences/list"):window.location.replace("/admin/templates/list")}},computed:h(h({},(0,c.L8)({defaultDuration:"getDefaultDuration"})),{},{transcoding:function(){return this.$store.getters["transcoding/getTranscodingInfo"]},usersTree:function(){return this.$store.getters["users/getUserTree"]},editorPermissions:function(){return{tabs:{general:!0,invitations:!0,interpretation:!0,layout:"template"!==this.context,registration:"template"!==this.context,media:!0,additional:!0},layoutsEditing:"template"!==this.context,defaultActions:!0,ownerEditing:!0,rolesEditing:"template"!==this.context,udpMulticastEditing:!0,broadcastEditing:!0,recordEditing:!0,userRightsEditing:!1,guestRightsEditing:!0,onlyPlannedParticipantsEditing:!0,sendInvitations:!0,showLicenseNotifications:!0,joinOptionsEditing:!0,mcuModeEditing:!0}},isFirefoxBrowser:function(){var e;return null===(e=this.browser)||void 0===e?void 0:e.firefox}}),data:function(){return{mode:null,context:"conference",id:null,basedOnTemplate:!1,basedOnTemplateId:null,showPopup:!1,showPopupOfRunningConference:!1,popupInformation:null,isLoaded:!1}}},b=(0,n(14486).A)(w,r,[],!1,null,null,null).exports}}]);