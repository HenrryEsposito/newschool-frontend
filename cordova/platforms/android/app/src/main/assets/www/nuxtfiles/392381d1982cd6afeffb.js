(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1029:function(e,t,n){"use strict";n.r(t);n(8);var l=n(3),o=n(302),r=n(44),d={components:{HeaderBar:o.a},data:function(){return{challengeText:"",challengeFieldClass:""}},computed:{idUser:function(){return this.$store.state.user.data.id},slug:function(){return this.$route.params.courseSlug},currentCourse:function(){return this.$store.state.courses.current}},methods:{postChallenge:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.challengeText){t.next=6;break}return t.next=3,r.a.post("".concat("/api/v2/course-taken/challenge/user/").concat(e.idUser,"/course/").concat(e.currentCourse.id),{challenge:e.challengeText});case 3:e.$router.push("/aluno/curso/".concat(e.slug,"/fim")),t.next=8;break;case 6:e.challengeFieldClass="error-field",setTimeout((function(){e.challengeFieldClass=""}),300);case 8:case"end":return t.stop()}}),t)})))()}}},v=(n(908),n(39)),x=n(910),f=n(43),c=n.n(f),h=n(354),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"challenge__content"},[n("HeaderBar",{attrs:{title:"Desafio",route:"/aluno/curso/"+e.slug}}),e._v(" "),n("h1",{staticClass:"hello_text"},[e._v("E aí, parça! Blz?")]),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"challenge"},[n("v-textarea",{class:e.challengeFieldClass,attrs:{outlined:"",placeholder:"Seu comentário"},model:{value:e.challengeText,callback:function(t){e.challengeText=t},expression:"challengeText"}})],1),e._v(" "),n("div",{staticClass:"btn__container"},[n("button",{staticClass:"btn-block btn-primary",on:{click:function(t){return e.postChallenge()}}},[e._v("\n      PRÓXIMO\n    ")])])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"share__achievement"},[t("p",[this._v("\n      Da hora que você terminou o curso..."),t("br"),this._v("\n      Mas querendo ou não, teoria não muda nada."),t("br"),this._v("\n      Como você vai aplicar isso no seu dia a dia?\n    ")])])}],!1,null,"65bbb3a7",null);"function"==typeof x.default&&Object(x.default)(component);t.default=component.exports;c()(component,{VTextarea:h.a})},297:function(e,t,n){var content=n(304);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(29).default)("79745966",content,!0,{sourceMap:!1})},302:function(e,t,n){"use strict";var l={props:["title","backPage","route"],methods:{comeBackPage:function(){this.route?this.$router.push(this.route):this.$router.back()}}},o=(n(303),n(39)),r=n(43),d=n.n(r),v=n(289),x=n(288),component=Object(o.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"head__bar"}},[t("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:this.comeBackPage}},[t("v-icon",[this._v("mdi-arrow-left")])],1),this._v(" "),t("h1",{staticClass:"h1__theme"},[this._v(this._s(this.title))])],1)}),[],!1,null,"7719e329",null);t.a=component.exports;d()(component,{VBtn:v.a,VIcon:x.a})},303:function(e,t,n){"use strict";var l=n(297);n.n(l).a},304:function(e,t,n){(t=n(28)(!1)).push([e.i,"*[data-v-7719e329]{font-family:Roboto,sans-serif}.h1__theme[data-v-7719e329]{font-size:1rem;line-height:1.2;font-weight:900;text-align:center;padding:0 2.5rem!important}#head__bar[data-v-7719e329]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding:1.5rem 0;position:relative;-webkit-box-align:center;align-items:center;background:transparent}[data-v-7719e329] .btn-back .theme--light.v-icon{color:var(--primary);font-size:35px}[data-v-7719e329] .btn-back{position:absolute;left:1rem}",""]),e.exports=t},313:function(e,t,n){"use strict";var l=n(4),o=n(2);var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return o.default.extend({name:"proxyable",model:{prop:e,event:t},props:Object(l.a)({},e,{required:!1}),data:function(){return{internalLazyValue:this[e]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:Object(l.a)({},e,(function(e){this.internalLazyValue=e}))})}();t.a=r},329:function(e,t,n){var content=n(330);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(29).default)("5c8fbe94",content,!0,{sourceMap:!1})},330:function(e,t,n){(t=n(28)(!1)).push([e.i,".v-textarea textarea{align-self:stretch;-webkit-box-flex:1;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{-webkit-box-align:start;align-items:flex-start}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),e.exports=t},354:function(e,t,n){"use strict";n(23),n(11),n(7),n(5),n(13);var l=n(4),o=(n(66),n(329),n(331)),r=n(47);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var v=Object(r.a)(o.a);t.a=v.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){o.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},634:function(e,t,n){var content=n(909);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(29).default)("1e90aee9",content,!0,{sourceMap:!1})},635:function(e,t){},908:function(e,t,n){"use strict";var l=n(634);n.n(l).a},909:function(e,t,n){(t=n(28)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);"]),t.push([e.i,"[data-v-65bbb3a7] fieldset{border-color:rgba(0,0,0,.5);border-radius:0}[data-v-65bbb3a7] .v-input textarea{color:#000!important}[data-v-65bbb3a7] ::-webkit-input-placeholder{font-size:12px;color:rgba(0,0,0,.5)!important}[data-v-65bbb3a7] ::-moz-placeholder{font-size:12px;color:rgba(0,0,0,.5)!important}[data-v-65bbb3a7] :-ms-input-placeholder{font-size:12px;color:rgba(0,0,0,.5)!important}[data-v-65bbb3a7] ::-ms-input-placeholder{font-size:12px;color:rgba(0,0,0,.5)!important}[data-v-65bbb3a7] ::placeholder{font-size:12px;color:rgba(0,0,0,.5)!important}.hello_text[data-v-65bbb3a7]{font-weight:900;font-size:14px;color:#1a1a1a;margin-left:24px}.share__achievement[data-v-65bbb3a7]{margin:16px auto 40px;padding:0 10px 0 24px}.share__achievement p[data-v-65bbb3a7]{font-size:12px;line-height:16px;color:#1a1a1a}.btn__container[data-v-65bbb3a7]{text-align:center}.btn-block[data-v-65bbb3a7]{width:90%;padding:10px auto;font-size:16px;font-weight:700;position:absolute;bottom:40px;right:5%;left:5%}h3[data-v-65bbb3a7]{font-weight:900;font-size:1em;line-height:normal;color:var(--primary)}h3[data-v-65bbb3a7],h4[data-v-65bbb3a7]{text-align:center}h4[data-v-65bbb3a7]{font-weight:500;padding-top:1em;color:#656565;font-size:14px}.challenge[data-v-65bbb3a7]{padding:0 24px}.challenge__image[data-v-65bbb3a7]{width:139px;height:139px;margin:0 auto}@media (min-width:480px){.challenge__content[data-v-65bbb3a7]{top:0;height:100vh}.messages[data-v-65bbb3a7]{margin-top:-12%}.btn-block[data-v-65bbb3a7]{width:96%;padding:5px auto}#page[data-v-65bbb3a7]{height:100vh;overflow:hidden}}.error-field[data-v-65bbb3a7]{-webkit-animation:nono .3s,intro paused;animation:nono .3s,intro paused}",""]),e.exports=t},910:function(e,t,n){"use strict";var l=n(635),o=n.n(l);t.default=o.a}}]);