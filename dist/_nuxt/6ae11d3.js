(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{312:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var o=n(2),r=n(22),c=(n(6),n(315),n(4),n(48)),l=n(35),h={data:function(){return{bot:null,ready:!1,extras:{},errorFor:{bot:null},loading:{active:!1}}},props:["botID"],beforeMount:function(){return c.a.boot(),this.botID?(this.bot=c.a.load("bot",this.botID,0),this.bot?(this.fetchAdditional(),this.ready=!0):void this.fetchBot(this.botID)):this.errorFor.bot="No bot ID specified"},methods:{getModuleOptions:function(t){this.bot.modules=this.bot.modules||{},this.bot.modules[t.id]=this.bot.modules[t.id]||{};for(var i=0;i<t.options.length;i++)this.bot.modules[t.id][t.options[i].id]=this.getOptionValue(t,t.options[i]);return t.options},getOptionValue:function(t,option){return void 0===this.bot.modules||void 0===this.bot.modules[t.id]||void 0===this.bot.modules[t.id][option.id]?option.default:this.bot.modules[t.id][option.id]},save:function(t){c.a.save("bot",t,this.bot)},fetchBot:function(t){var e=this;this.ready=!1,l.a.bot({botID:t,method:"get"}).then((function(n){c.a.save("bot",t,n),e.bot=n,e.bot.modules||(e.bot.modules={}),e.ready=!0,e.fetchAdditional()})).catch((function(t){e.errorFor.bot=t}))},setLazy:function(t,e){c.a.save("lazy",t,e),this.extras[t]=e,this.loading[t]=!1},fetchLazy:function(t){var e=this,n=t.pop();if(!n)return!1;var o=c.a.load("lazy",n,0);if(o)return this.setLazy(n,o),this.fetchLazy(t);l.a.basic({method:"get",path:n}).then((function(t){e.setLazy(n,t)})).catch((function(t){console.log(t)})).finally((function(){e.fetchLazy(t)}))},fetchAdditional:function(){for(var t=[],e=0,n=Object.entries(this.loading);e<n.length;e++){var o=Object(r.a)(n[e],2),c=o[0];o[1]&&t.push(c)}t.length&&this.fetchLazy(t)},setModule:function(t,data){var e=this;this.loading=Object.assign({},this.loading,Object(o.a)({},"module_"+t.id,!0)),l.a.bot({botID:this.botID,path:t.id,method:"patch",data:{data:data}}).then((function(n){e.bot.modules=e.bot.modules||{};for(var o=0,c=Object.entries(n);o<c.length;o++){var l=Object(r.a)(c[o],2),h=l[0],v=l[1];e.$set(e.bot.modules[t.id],h,v)}e.save(e.botID)})).catch((function(t){console.log(t,"some error")})).finally((function(){e.loading["module_"+t.id]=!1}))},setActivation:function(){var t=this;this.loading.active=!0,l.a.bot({botID:this.botID,path:"",method:"patch",data:{data:{active:!this.bot.active}}}).then((function(e){void 0!==e.active&&(t.bot.active=e.active,t.save(t.botID))})).catch((function(t){console.log(t)})).finally((function(){t.loading.active=!1}))}}}},314:function(t,e,n){var content=n(327);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("191afde2",content,!0,{sourceMap:!1})},326:function(t,e,n){"use strict";var o=n(314);n.n(o).a},327:function(t,e,n){(e=n(12)(!1)).push([t.i,"a[data-v-0aebdeaa]{color:inherit;text-decoration:none}[dense] p[data-v-0aebdeaa]{margin-top:.5em;margin-bottom:.5rem}.v-input[data-v-0aebdeaa]{margin-top:0}",""]),t.exports=e},328:function(t,e,n){var content=n(329);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("12a190a6",content,!0,{sourceMap:!1})},329:function(t,e,n){(e=n(12)(!1)).push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}",""]),t.exports=e},330:function(t,e,n){var content=n(331);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("2e2bc7da",content,!0,{sourceMap:!1})},331:function(t,e,n){(e=n(12)(!1)).push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls .v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=e},332:function(t,e,n){var content=n(333);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("197fcea4",content,!0,{sourceMap:!1})},333:function(t,e,n){(e=n(12)(!1)).push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=e},337:function(t,e,n){"use strict";n.r(e);var o=n(312),r=(n(35),{name:"BotDetails",mixins:[o.a],data:function(){return{loading:{modules:!0}}}}),c=(n(326),n(26)),l=n(51),h=n.n(l),v=n(132),d=n(316),f=n(310),m=(n(10),n(8),n(6),n(9),n(17),n(18),n(4),n(2)),_=(n(328),n(330),n(58)),x=n(49),y=n(59),k=n(0),C=k.a.extend({name:"rippleable",directives:{ripple:y.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),O=n(1),w=k.a.extend({name:"comparable",props:{valueComparator:{type:Function,default:O.h}}}),j=n(5);function I(t){t.preventDefault()}function V(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function D(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?V(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):V(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var z=Object(j.a)(x.a,C,w).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=x.a.options.methods.genLabel.call(this);return label?(label.data.on={click:I},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:I},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}).extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return D(D({},x.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(_.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",D(D({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),B=n(22),$=(n(332),n(88)),S=n(14),A=n(109),P=n(11),E=n(43),L=n(67),M=n(108),F=n(7);function T(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function G(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?T(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):T(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var R=Object(j.a)(S.a,M.a,L.a,P.a,Object(A.a)("chipGroup"),Object(E.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return G(G(G(G({"v-chip":!0},L.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(L.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var n=Object(B.a)(e,2),o=n[0],r=n[1];t.$attrs.hasOwnProperty(o)&&Object(F.a)(o,r,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(_.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement($.b,t)},genClose:function(){var t=this;return this.$createElement(_.a,{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),o=n.tag,data=n.data;data.attrs=G(G({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var r=this.textColor||this.outlined&&this.color;return t(o,this.setTextColor(r,data),e)}}),J=n(130),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.ready&&t.bot?n("div",[t.bot.t_info?n("v-card",{staticClass:"mb-4"},[n("v-card-title",[t._v("\n        "+t._s(t.bot.t_info.first_name)+"\n      ")]),t._v(" "),n("v-card-subtitle",[n("a",{attrs:{href:"https://t.me/"+t.bot.t_info.username,target:"_blank"}},[t._v("\n          @"+t._s(t.bot.t_info.username)+"\n        ")])]),t._v(" "),n("v-card-text",{attrs:{dense:""}},[n("p",[t._v("\n          "+t._s(t.bot.active?"This bot is active":"This bot is inactive")+".\n        ")]),t._v(" "),n("p",[t._v("\n          "+t._s(t.bot.t_info.can_join_groups?"Can":"Can not")+" be ordered to join groups.\n        ")]),t._v(" "),n("p",[t._v("\n          "+t._s(t.bot.t_info.can_read_all_group_messages?"Can read all group messages":"Can not read all group messages unless elevated to admin")+".\n        ")]),t._v(" "),n("p",[t._v("\n          "+t._s(t.bot.t_info.supports_inline_queries?"Can read inline queries":"Can not read inline queries. Talk to @botfather to resolve if required")+".\n        ")])]),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{dark:!t.bot.active&&!t.loading.active,disabled:t.loading.active,loading:t.loading.active},on:{click:function(e){return t.setActivation(!t.bot.active)}}},[t._v("\n          "+t._s(t.bot.active?"De-activate":"Activate")+"\n        ")])],1)],1):t._e(),t._v(" "),t.loading.modules?n("v-card",{attrs:{loading:"",disabled:""}},[n("v-card-title",[t._v("Modules")]),t._v(" "),n("v-card-text",[t._v("Loading...")])],1):n("div",t._l(t.extras.modules,(function(e){return n("v-card",{key:e.id,attrs:{loading:t.loading["module_"+e.id],disabled:t.loading["module_"+e.id]}},[n("v-card-title",[t._v(t._s(e.name))]),t._v(" "),n("v-card-subtitle",[n("div",[t._v(t._s(e.description))]),t._v(" "),e.slots?n("div",t._l(e.slots,(function(slot){return n("v-chip",{key:"module_"+e.id+"_slot_"+slot,staticClass:"mr-2",attrs:{color:"grey",label:"","text-color":"white"}},[n("v-icon",{attrs:{left:""}},"group"==slot?[t._v("\n                mdi-account-multiple\n              ")]:"private"==slot?[t._v("\n                mdi-account\n              ")]:"channel"==slot?[t._v("\n                mdi-bullhorn\n              ")]:"inline"==slot?[t._v("\n                mdi-text-short\n              ")]:"callback"==slot?[t._v("\n                mdi-gesture-tap-button\n              ")]:[t._v("\n                mdi-help\n              ")]),t._v("\n              "+t._s(slot)+"\n            ")],1)})),1):t._e()]),t._v(" "),n("div",[n("v-card-text",t._l(t.getModuleOptions(e),(function(option){return n("div",{key:e.id+"_"+option.id},["Boolean"==option.type?n("div",[n("v-checkbox",{attrs:{dense:"",label:option.name},on:{change:function(n){var o;return t.setModule(e,((o={})[option.id]=t.bot.modules[e.id][option.id],o))}},model:{value:t.bot.modules[e.id][option.id],callback:function(n){t.$set(t.bot.modules[e.id],option.id,n)},expression:"bot.modules[module.id][option.id]"}})],1):n("div",[t._v("\n                "+t._s(option.name)+": "+t._s(t.getOptionValue(e,option))+"\n              ")])])})),0),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{dark:!t.getOptionValue(e,{id:"active",default:!1})},on:{click:function(n){t.setModule(e,{active:!t.getOptionValue(e,{id:"active",default:!1})})}}},[t._v("\n              "+t._s(t.getOptionValue(e,{id:"active",default:!1})?"Disable":"Enable")+"\n            ")])],1)],1)],1)})),1)],1):n("v-card",[t._v("\n    Loading...\n  ")]),t._v(" "),n("v-btn",{staticClass:"mt-4",attrs:{dark:"",link:"",to:"/app/bots"}},[t._v("\n    Back to bots list\n  ")])],1)}),[],!1,null,"0aebdeaa",null),K=component.exports;h()(component,{VBtn:v.a,VCard:d.a,VCardActions:f.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VCheckbox:z,VChip:R,VIcon:J.a});var N={name:"BotDetailPage",layout:"app",computed:{botID:function(){return this.$route.params.bot}},components:{BotDetails:K}},H=n(344),Q=Object(c.a)(N,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("BotDetails",{attrs:{botID:this.botID}})],1)}),[],!1,null,null,null);e.default=Q.exports;h()(Q,{VContainer:H.a})}}]);