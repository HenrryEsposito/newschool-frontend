(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{297:function(t,e,o){var content=o(302);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(29).default)("79745966",content,!0,{sourceMap:!1})},300:function(t,e,o){"use strict";var r={props:["title","backPage","route"],methods:{comeBackPage:function(){this.route?this.$router.push(this.route):this.$router.back()}}},n=(o(301),o(39)),c=o(43),l=o.n(c),d=o(289),v=o(288),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"head__bar"}},[e("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:this.comeBackPage}},[e("v-icon",[this._v("mdi-arrow-left")])],1),this._v(" "),e("h1",{staticClass:"h1__theme"},[this._v(this._s(this.title))])],1)}),[],!1,null,"7719e329",null);e.a=component.exports;l()(component,{VBtn:d.a,VIcon:v.a})},301:function(t,e,o){"use strict";var r=o(297);o.n(r).a},302:function(t,e,o){(e=o(28)(!1)).push([t.i,"*[data-v-7719e329]{font-family:Roboto,sans-serif}.h1__theme[data-v-7719e329]{font-size:1rem;line-height:1.2;font-weight:900;text-align:center;padding:0 2.5rem!important}#head__bar[data-v-7719e329]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding:1.5rem 0;position:relative;-webkit-box-align:center;align-items:center;background:transparent}[data-v-7719e329] .btn-back .theme--light.v-icon{color:var(--primary);font-size:35px}[data-v-7719e329] .btn-back{position:absolute;left:1rem}",""]),t.exports=e},634:function(t,e,o){var content=o(892);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(29).default)("6b22d785",content,!0,{sourceMap:!1})},636:function(t,e,o){var content=o(894);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(29).default)("461cd4dd",content,!0,{sourceMap:!1})},891:function(t,e,o){"use strict";var r=o(634);o.n(r).a},892:function(t,e,o){(e=o(28)(!1)).push([t.i,"#account-icon[data-v-1853eafa]{font-size:80px;color:hsla(0,0%,100%,.60392)}.sub-purple[data-v-1853eafa]{font-family:Roboto;font-size:16px;font-weight:700;line-height:19px;color:var(--primary)}",""]),t.exports=e},893:function(t,e,o){"use strict";var r=o(636);o.n(r).a},894:function(t,e,o){(e=o(28)(!1)).push([t.i,"*[data-v-10c56763]{letter-spacing:0}.layout[data-v-10c56763]{padding-bottom:100px}.col[data-v-10c56763],.row[data-v-10c56763]{padding:0;height:100%;width:100%}.row[data-v-10c56763]{margin:0}.btn-name[data-v-10c56763]{font-family:Roboto;text-transform:uppercase;font-size:16px;color:#737373}.btn-alert[data-v-10c56763]{color:#c78282}.sub-purple[data-v-10c56763]{font-family:Roboto;font-size:16px;font-weight:700;line-height:19px;color:var(--primary)}.padding__card[data-v-10c56763]{padding-top:0}@media (min-width:992px){#page[data-v-10c56763]{-webkit-box-pack:center;justify-content:center}#menu[data-v-10c56763],#page[data-v-10c56763]{display:-webkit-box;display:flex}#menu[data-v-10c56763]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.layout[data-v-10c56763]{max-width:700px;padding:20px 24px 50px}}",""]),t.exports=e},994:function(t,e,o){"use strict";o.r(e);var r,n=o(4),c=(o(35),o(311)),l=o.n(c),d=o(300),v=(o(14),o(87),o(33)),m=o(25),f={name:"ImageInput",props:{value:Object},data:function(){return{imgSrc:"",avatar:null,saving:!1,loading:!1,saved:!1,errorDialog:null,errorText:"",uploadFieldName:"file",maxSize:1024,rules:[function(t){return!t||t.size<2e6||"O tamanho da foto deve ser menor que 2mb!"}]}},computed:{idUser:function(){return this.$store.state.user.data.id},user:function(){return this.$store.state.user.data}},watch:{avatar:{handler:function(){this.saved=!1},deep:!0}},mounted:function(){this.imgSrc=this.user.photo},methods:{savedAvatar:function(){this.saving=!1,this.saved=!0},launchFilePicker:function(){this.$refs.file.click()},onFileChange:function(t,e){var o=this;this.loading=!0;var r=this.maxSize,n=e[0];if(e.length>0){var c=n.size/r/r;if(n.type.match("image.*"))if(c>1)this.errorDialog=!0,this.errorText="Escolha uma imagem menor que 1MB",setTimeout((function(){o.errorDialog=!1,o.loading=!1}),1e3);else{var l=URL.createObjectURL(n);this.imgSrc=l;var d=new FormData;d.append("file",n),v.a.post("api/v1/user/".concat(this.idUser,"/photo"),d,{headers:{Authorization:m.a.getToken(),"Content-Type":"multipart/form-data"}}).then((function(t){o.$notifier.showMessage({type:"success"}),v.a.get("api/v1/user/me",{headers:{Authorization:m.a.getToken()}}).then((function(t){o.$store.commit("user/SET_USER",{name:t.data.name||"Anônimo",type:{ADMIN:"Administrador",STUDENT:"Aluno"}[t.data.role.name]||"Visitante",id:t.data.id||"",role:t.data.role.name||"",photo:t.data.photo||""}),o.loading=!1}))})).catch((function(t){console.log(t),o.$notifier.showMessage({type:"error"}),o.loading=!1}))}else this.errorDialog=!0,this.errorText="Selecione uma imagem",setTimeout((function(){o.errorDialog=!1,o.loading=!1}),1e3)}}}},h=(o(891),o(39)),_=o(43),x=o.n(_),k=o(509),y=o(289),C=o(318),w=o(312),T=o(1043),S=o(288),$=o(129),V=o(693),z=o(635),A=o.n(z),D=o(141),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{on:{click:function(e){return t.launchFilePicker()}}},[o("div",[t.imgSrc?o("v-avatar",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"mb-3",attrs:{size:"130px"}},[o("img",{attrs:{src:t.imgSrc,alt:"avatar"}})]):o("v-avatar",{attrs:{size:"130px",color:"primary"}},[o("v-icon",{attrs:{id:"account-icon"}},[t._v("mdi-camera")])],1),t._v(" "),o("p",{staticClass:"sub-purple mt-4 mb-10"},[t._v("Editar Foto")])],1)]),t._v(" "),o("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",name:t.uploadFieldName},on:{change:function(e){return t.onFileChange(e.target.name,e.target.files)}}}),t._v(" "),t.loading?o("div",[o("div",{staticClass:"container-spinner"},[o("v-progress-circular",{attrs:{size:70,width:5,indeterminate:"",color:"#6600cc"}})],1)]):t._e(),t._v(" "),o("v-dialog",{attrs:{"max-width":"300"},model:{value:t.errorDialog,callback:function(e){t.errorDialog=e},expression:"errorDialog"}},[o("v-card",[o("v-card-text",{staticClass:"subheading"},[t._v(t._s(t.errorText))]),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{flat:""},on:{click:function(e){t.errorDialog=!1}}},[t._v("Entendi!")])],1)],1)],1)],1)}),[],!1,null,"1853eafa",null),E=component.exports;x()(component,{VAvatar:k.a,VBtn:y.a,VCard:C.a,VCardActions:w.a,VCardText:w.c,VDialog:T.a,VIcon:S.a,VProgressCircular:$.a,VSpacer:V.a}),A()(component,{Ripple:D.a});var j={components:{HeaderBar:d.a,Avatar:l.a,AvatarUploader:E},filters:{simplifyName:function(t){if(!t)return"";return t.split(" ").length>2?/^(\S*\s+\S+).*/.exec(t)[1]:t}},data:function(){return{menu:[{name:"Minhas Info",icon:"mdi-information-outline",link:"0"},{name:"Quem Sou",icon:"mdi-account-outline",link:"1"},{name:"Minha Quebrada",icon:"mdi-domain",link:"2"},{name:"Estudos e Trampo",icon:"mdi-monitor",link:"3"}]}},computed:{user:function(){return this.$store.state.user.data}},methods:(r={goToChangePassword:function(){$nuxt._router.push("/aluno/alterar-senha")},goToShareUrl:function(){$nuxt._router.push("/aluno/indicar-app")},goToExit:function(){localStorage.clear(),$nuxt._router.push("/login"),this.clearInfoUser()}},Object(n.a)(r,"goToShareUrl",(function(){$nuxt._router.push("/aluno/indicar-app")})),Object(n.a)(r,"goToCertificates",(function(){$nuxt._router.push("/aluno/certificados")})),Object(n.a)(r,"goToCourses",(function(){$nuxt._router.push("/aluno/meus-cursos")})),Object(n.a)(r,"goToTab",(function(t){$nuxt._router.push("/aluno/cadastro-completo/".concat(t))})),r)},M=(o(893),o(328)),U=o(583),I=o(334),O=o(294),R=Object(h.a)(j,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"page"}},[o("v-layout",{attrs:{column:""}},[o("HeaderBar",{staticClass:"mb-7",attrs:{title:"Perfil","back-page":!0}}),t._v(" "),o("v-col",{attrs:{align:"center"}},[o("avatar-uploader",{model:{value:t.avatar,callback:function(e){t.avatar=e},expression:"avatar"}})],1),t._v(" "),o("v-col",{attrs:{id:"menu"}},[o("v-divider"),t._v(" "),t._l(t.menu,(function(e){return o("div",{key:e.id},[o("v-row",{staticClass:"py-3",on:{click:function(o){return t.goToTab(e.link)}}},[o("v-icon",{staticClass:"px-6",attrs:{color:"primary"}},[t._v(t._s(e.icon))]),t._v(" "),o("div",{staticClass:"btn-name"},[t._v(t._s(e.name))])],1),t._v(" "),o("v-divider")],1)})),t._v(" "),o("v-row",{staticClass:"py-3",on:{click:t.goToCourses}},[o("v-icon",{staticClass:"px-6",attrs:{color:"primary"}},[t._v("mdi-view-compact-outline")]),t._v(" "),o("div",{staticClass:"btn-name"},[t._v("Meus Cursos")])],1),t._v(" "),o("v-divider"),t._v(" "),o("v-row",{staticClass:"py-3",on:{click:t.goToCertificates}},[o("v-icon",{staticClass:"px-6",attrs:{color:"primary"}},[t._v("mdi-school-outline")]),t._v(" "),o("div",{staticClass:"btn-name"},[t._v("Meus Certificados")])],1),t._v(" "),o("v-divider"),t._v(" "),o("v-row",{staticClass:"py-3",on:{click:t.goToChangePassword}},[o("v-icon",{staticClass:"px-6",attrs:{color:"primary"}},[t._v("mdi-key-outline")]),t._v(" "),o("div",{staticClass:"btn-name"},[t._v("Alterar Senha")])],1),t._v(" "),o("v-divider"),t._v(" "),o("v-row",{staticClass:"py-3",on:{click:t.goToShareUrl}},[o("v-icon",{staticClass:"px-6",attrs:{color:"primary"}},[t._v("mdi-share-outline")]),t._v(" "),o("div",{staticClass:"btn-name"},[t._v("Indicar App")])],1),t._v(" "),o("v-divider"),t._v(" "),o("v-row",{staticClass:"py-3",on:{click:t.goToExit}},[o("v-icon",{staticClass:"px-6",attrs:{color:"#C78282"}},[t._v("mdi-location-exit")]),t._v(" "),o("div",{staticClass:"btn-alert"},[t._v("SAIR")])],1),t._v(" "),o("v-divider")],2),t._v(" "),o("v-row",{attrs:{cols:"12"}},[o("v-icon")],1)],1)],1)}),[],!1,null,"10c56763",null);e.default=R.exports;x()(R,{VCol:M.a,VDivider:U.a,VIcon:S.a,VLayout:I.a,VRow:O.a})}}]);