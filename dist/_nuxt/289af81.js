(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{312:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(2),o=n(22),c=(n(6),n(315),n(4),n(48)),l=n(35),f={data:function(){return{bot:null,ready:!1,extras:{},errorFor:{bot:null},loading:{active:!1}}},props:["botID"],beforeMount:function(){return c.a.boot(),this.botID?(this.bot=c.a.load("bot",this.botID,0),this.bot?(this.fetchAdditional(),this.ready=!0):void this.fetchBot(this.botID)):this.errorFor.bot="No bot ID specified"},methods:{getModuleOptions:function(t){this.bot.modules=this.bot.modules||{},this.bot.modules[t.id]=this.bot.modules[t.id]||{};for(var i=0;i<t.options.length;i++)this.bot.modules[t.id][t.options[i].id]=this.getOptionValue(t,t.options[i]);return t.options},getOptionValue:function(t,option){return void 0===this.bot.modules||void 0===this.bot.modules[t.id]||void 0===this.bot.modules[t.id][option.id]?option.default:this.bot.modules[t.id][option.id]},save:function(t){c.a.save("bot",t,this.bot)},fetchBot:function(t){var e=this;this.ready=!1,l.a.bot({botID:t,method:"get"}).then((function(n){c.a.save("bot",t,n),e.bot=n,e.bot.modules||(e.bot.modules={}),e.ready=!0,e.fetchAdditional()})).catch((function(t){e.errorFor.bot=t}))},setLazy:function(t,e){c.a.save("lazy",t,e),this.extras[t]=e,this.loading[t]=!1},fetchLazy:function(t){var e=this,n=t.pop();if(!n)return!1;var r=c.a.load("lazy",n,0);if(r)return this.setLazy(n,r),this.fetchLazy(t);l.a.basic({method:"get",path:n}).then((function(t){e.setLazy(n,t)})).catch((function(t){console.log(t)})).finally((function(){e.fetchLazy(t)}))},fetchAdditional:function(){for(var t=[],e=0,n=Object.entries(this.loading);e<n.length;e++){var r=Object(o.a)(n[e],2),c=r[0];r[1]&&t.push(c)}t.length&&this.fetchLazy(t)},setModule:function(t,data){var e=this;this.loading=Object.assign({},this.loading,Object(r.a)({},"module_"+t.id,!0)),l.a.bot({botID:this.botID,path:t.id,method:"patch",data:{data:data}}).then((function(n){e.bot.modules=e.bot.modules||{};for(var r=0,c=Object.entries(n);r<c.length;r++){var l=Object(o.a)(c[r],2),f=l[0],d=l[1];e.$set(e.bot.modules[t.id],f,d)}e.save(e.botID)})).catch((function(t){console.log(t,"some error")})).finally((function(){e.loading["module_"+t.id]=!1}))},setActivation:function(){var t=this;this.loading.active=!0,l.a.bot({botID:this.botID,path:"",method:"patch",data:{data:{active:!this.bot.active}}}).then((function(e){void 0!==e.active&&(t.bot.active=e.active,t.save(t.botID))})).catch((function(t){console.log(t)})).finally((function(){t.loading.active=!1}))}}}},317:function(t,e,n){"use strict";var strong=n(321),r=n(318);t.exports=n(322)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=strong.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return strong.def(r(this,"Map"),0===t?0:t,e)}},strong,!0)},318:function(t,e,n){var r=n(27);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},321:function(t,e,n){"use strict";var r=n(33).f,o=n(95),c=n(184),l=n(62),f=n(182),d=n(183),v=n(137),h=n(185),y=n(138),O=n(29),j=n(135).fastKey,m=n(318),_=O?"_s":"size",w=function(t,e){var n,r=j(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,v){var h=t((function(t,r){f(t,h,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[_]=0,null!=r&&d(r,n,t[v],t)}));return c(h.prototype,{clear:function(){for(var t=m(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[_]=0},delete:function(t){var n=m(this,e),r=w(n,t);if(r){var o=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),n._f==r&&(n._f=o),n._l==r&&(n._l=c),n[_]--}return!!r},forEach:function(t){m(this,e);for(var n,r=l(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!w(m(this,e),t)}}),O&&r(h.prototype,"size",{get:function(){return m(this,e)[_]}}),h},def:function(t,e,n){var r,o,c=w(t,e);return c?c.v=n:(t._l=c={i:o=j(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[_]++,"F"!==o&&(t._i[o]=c)),t},getEntry:w,setStrong:function(t,e,n){v(t,e,(function(t,n){this._t=m(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?h(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,h(1))}),n?"entries":"values",!n,!0),y(e)}}},322:function(t,e,n){"use strict";var r=n(21),o=n(16),c=n(36),l=n(184),meta=n(135),f=n(183),d=n(182),v=n(27),h=n(30),y=n(136),O=n(94),j=n(139);t.exports=function(t,e,n,m,_,w){var k=r[t],S=k,D=_?"set":"add",P=S&&S.prototype,x={},C=function(t){var e=P[t];c(P,t,"delete"==t||"has"==t?function(a){return!(w&&!v(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return w&&!v(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof S&&(w||P.forEach&&!h((function(){(new S).entries().next()})))){var E=new S,I=E[D](w?{}:-0,1)!=E,L=h((function(){E.has(1)})),B=y((function(t){new S(t)})),V=!w&&h((function(){for(var t=new S,e=5;e--;)t[D](e,e);return!t.has(-0)}));B||((S=e((function(e,n){d(e,S,t);var r=j(new k,e,S);return null!=n&&f(n,_,r[D],r),r}))).prototype=P,P.constructor=S),(L||V)&&(C("delete"),C("has"),_&&C("get")),(V||I)&&C(D),w&&P.clear&&delete P.clear}else S=m.getConstructor(e,t,_,D),l(S.prototype,n),meta.NEED=!0;return O(S,t),x[t]=S,o(o.G+o.W+o.F*(S!=k),x),w||m.setStrong(S,t,_),S}},336:function(t,e,n){"use strict";n.r(e);n(10),n(8),n(6),n(4),n(9);var r=n(2),o=n(35),c=n(34);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"AddBotForm",props:["type"],data:function(){return{loading:!1,valid:!0,error:!1,errorString:"",token:"",tokenRules:[function(t){return!!t||"Token is required"}]}},methods:f(f({},Object(c.b)("user",["addToSet"])),{},{submit:function(){var t=this;if(!this.$refs.form.validate())return!1;this.loading=!0,o.a.user({path:"bot",method:"put",data:{token:this.token}}).then((function(e){if(t.loading=!1,!e.data.ok)return t.error=!0,t.errorString=e.data.error;t.addToSet({key:bots,data:e.data.bot_id}),t.$refs.form.reset()})).catch((function(e){t.loading=!1,t.error=!0,t.errorString=e}))}})},v=n(26),h=n(51),y=n.n(h),O=n(309),j=n(132),m=n(304),_=n(308),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.submit(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{rules:t.tokenRules,loading:t.loading,disabled:t.loading,label:"Token from @Botfather",required:""},model:{value:t.token,callback:function(e){t.token=e},expression:"token"}}),t._v(" "),n("v-alert",{attrs:{color:"red",dismissible:"",type:"error"},model:{value:t.error,callback:function(e){t.error=e},expression:"error"}},[t._v(t._s(t.errorString))]),t._v(" "),n("v-btn",{staticClass:"mr-4",attrs:{disabled:t.loading||!t.valid,color:"success",loading:t.loading,type:"submit"}},[t._v("\n    Continue\n  ")])],1)}),[],!1,null,null,null),w=component.exports;y()(component,{VAlert:O.a,VBtn:j.a,VForm:m.a,VTextField:_.a});var k={name:"BotListItem",mixins:[n(312).a]},S=n(316),D=n(310),P=Object(v.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mb-4",attrs:{color:"secondary",dark:""}},[n("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[t.ready?n("div",[n("v-card-title",[t._v(t._s(t.bot.t_info.first_name))]),t._v(" "),n("v-card-subtitle",[t._v("@"+t._s(t.bot.t_info.username))]),t._v(" "),n("v-card-text",[t._v(t._s(t.bot.active?"This bot is active.":"This bot is not active."))]),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{loading:t.loading.active,disabled:t.loading.active},on:{click:function(e){return t.setActivation(!t.bot.active)}}},[t._v("\n          "+t._s(t.bot.active?"De-activate":"Activate")+"\n        ")]),t._v(" "),n("v-btn",{attrs:{link:"",to:"/app/bots/"+t.botID}},[t._v("\n          Settings\n        ")])],1)],1):n("div",[n("v-card-title",[t._v("Loading...")]),t._v(" "),n("v-card-subtitle",[t._v("Loading...")]),t._v(" "),n("v-card-text",[t._v("Loading...")]),t._v(" "),n("v-card-actions",[t._v("Loading...")])],1)])])}),[],!1,null,null,null),x=P.exports;function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}y()(P,{VBtn:j.a,VCard:S.a,VCardActions:D.a,VCardSubtitle:D.b,VCardText:D.c,VCardTitle:D.d});var E={name:"DashBots",layout:"app",components:{AddBotForm:w,BotListItem:x},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)("user",["user"]))},I=(n(68),n(28),n(32),n(39),n(317),n(46),n(19),n(313),n(0)),L=n(66),B=n(1);function V(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function z(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?V(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):V(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A=["sm","md","lg","xl"],F=A.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),T=A.reduce((function(t,e){return t["offset"+Object(B.t)(e)]={type:[String,Number],default:null},t}),{}),M=A.reduce((function(t,e){return t["order"+Object(B.t)(e)]={type:[String,Number],default:null},t}),{}),N={col:Object.keys(F),offset:Object.keys(T),order:Object.keys(M)};function $(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var G=new Map,R=I.a.extend({name:"v-col",functional:!0,props:z(z(z(z({cols:{type:[Boolean,String,Number],default:!1}},F),{},{offset:{type:[String,Number],default:null}},T),{},{order:{type:[String,Number],default:null}},M),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,c=(e.parent,"");for(var l in n)c+=String(n[l]);var f=G.get(c);return f||function(){var t,e;for(e in f=[],N)N[e].forEach((function(t){var r=n[t],o=$(e,t,r);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),G.set(c,f)}(),t(n.tag,Object(L.a)(data,{class:f}),o)}}),J=n(344);function W(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function K(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?W(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):W(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var H=["sm","md","lg","xl"],Q=["start","end","center"];function U(t,e){return H.reduce((function(n,r){return n[t+Object(B.t)(r)]=e(),n}),{})}var X=function(t){return[].concat(Q,["baseline","stretch"]).includes(t)},Y=U("align",(function(){return{type:String,default:null,validator:X}})),Z=function(t){return[].concat(Q,["space-between","space-around"]).includes(t)},tt=U("justify",(function(){return{type:String,default:null,validator:Z}})),et=function(t){return[].concat(Q,["space-between","space-around","stretch"]).includes(t)},nt=U("alignContent",(function(){return{type:String,default:null,validator:et}})),ot={align:Object.keys(Y),justify:Object.keys(tt),alignContent:Object.keys(nt)},it={align:"align",justify:"justify",alignContent:"align-content"};function at(t,e,n){var r=it[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var ct=new Map,st=I.a.extend({name:"v-row",functional:!0,props:K(K(K({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:X}},Y),{},{justify:{type:String,default:null,validator:Z}},tt),{},{alignContent:{type:String,default:null,validator:et}},nt),render:function(t,e){var n=e.props,data=e.data,o=e.children,c="";for(var l in n)c+=String(n[l]);var f=ct.get(c);return f||function(){var t,e;for(e in f=[],ot)ot[e].forEach((function(t){var r=n[t],o=at(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),ct.set(c,f)}(),t(n.tag,Object(L.a)(data,{staticClass:"row",class:f}),o)}}),ut=Object(v.a)(E,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{cols:"12"}},this._l(this.user.bots,(function(t){return e("BotListItem",{key:t,attrs:{botID:t}})})),1)],1),this._v(" "),e("v-row",{attrs:{dense:""}},[e("v-col",[e("h2",[this._v("Add bot")]),this._v(" "),e("AddBotForm")],1)],1)],1)}),[],!1,null,null,null);e.default=ut.exports;y()(ut,{VCol:R,VContainer:J.a,VRow:st})}}]);