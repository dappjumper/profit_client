(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{309:function(e,t,r){"use strict";r.r(t);r(10),r(8),r(7),r(4),r(9);var n=r(2),o=r(34),c=r(131);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={name:"PageRegister",layout:"landing",computed:O({},Object(o.d)("user",["isLoggedIn","user","token"])),methods:O({},Object(o.c)("user",["loadUser","setUser","forgetUser"])),components:{AccessForm:c.a},mounted:function(){this.loadUser(),this.token&&this.$router.push("/app")}},h=r(31),component=Object(h.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("h1",[this._v("Project Finch - Register")]),this._v(" "),t("AccessForm",{attrs:{type:"register"}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);