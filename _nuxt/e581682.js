(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{195:function(e,t,n){var content=n(198);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(71).default)("fd695a9a",content,!0,{sourceMap:!1})},197:function(e,t,n){"use strict";n(195)},198:function(e,t,n){var r=n(70)(!1);r.push([e.i,".header button{margin:10px 5px}.header{border-bottom:2px solid #646464;padding-bottom:3px;margin:3px 10px}",""]),e.exports=r},199:function(e,t,n){"use strict";var r=n(3),o=(n(40),n(19),{data:function(){return{isLogined:!1,userName:null,userPhoneNumber:null}},created:function(){var e=this;this.$axios.defaults.withCredentials=!0,this.$axios.get("/user/checklogin",!1).then((function(t){t.data?e.isLogined=!0:(e.isLogined=!1,alert("로그인이 필요한 서비스입니다!"),$nuxt.$router.push("/")),e.$axios.get("/user/session").then((function(t){e.userName=t.data.name,e.userPhoneNumber=t.data.phoneNumber}))}))},methods:{logout:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$axios.defaults.withCredentials=!0,t.next=3,e.$axios.post("/user/signout").then((function(e){e.data?(alert("로그아웃 되었습니다."),console.log("로그아웃 성공"),$nuxt.$router.push("/")):console.log("로그아웃 실패")})).catch((function(e){console.log(e)}));case 3:case"end":return t.stop()}}),t)})))()}}}),l=(n(197),n(31)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[e._m(0),e._v(" "),e.isLogined?t("a",{on:{click:e.logout}},[t("button",[e._v("로그아웃")])]):e._e()])}),[function(){var e=this._self._c;return e("a",{attrs:{href:"/"}},[e("button",[this._v("ERIC-A 메인으로")])])}],!1,null,null,null);t.a=component.exports},209:function(e,t,n){var content=n(228);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(71).default)("d4c9bba8",content,!0,{sourceMap:!1})},227:function(e,t,n){"use strict";n(209)},228:function(e,t,n){var r=n(70)(!1);r.push([e.i,"label[data-v-35e02a6f]{display:inline-block;width:70px}.order button[data-v-35e02a6f]{margin:15px;padding:5px 20px;font-size:15px;border-radius:10px;background-color:#f0d264;box-shadow:0 6px rgba(196,172,83,.7);text-decoration:none;border-width:0}.toggle[data-v-35e02a6f]{display:flex;align-items:center;justify-content:center}.order button[data-v-35e02a6f]:hover{box-shadow:0 0;margin-top:20px;background-color:#d6bb59}.toggler-wrapper[data-v-35e02a6f]{display:block;width:45px;height:25px;cursor:pointer;position:relative;align-items:center}.toggler-wrapper input[type=checkbox][data-v-35e02a6f]{display:none}.toggler-wrapper input[type=checkbox]:checked+.toggler-slider[data-v-35e02a6f]{background-color:#f0d264}.toggler-wrapper .toggler-slider[data-v-35e02a6f]{background-color:#ccc;border-radius:100px;top:0;left:0;width:100%;height:100%}.toggler-wrapper .toggler-knob[data-v-35e02a6f],.toggler-wrapper .toggler-slider[data-v-35e02a6f]{position:absolute;transition:all .3s ease}.toggler-wrapper.style-1 input[type=checkbox]:checked+.toggler-slider .toggler-knob[data-v-35e02a6f]{left:calc(100% - 22px)}.toggler-wrapper.style-1 .toggler-knob[data-v-35e02a6f]{width:19px;height:19px;border-radius:50%;left:3px;top:3px;background-color:#fff}span[data-v-35e02a6f]{margin:0 10px}select[data-v-35e02a6f]{width:200px;border:0 solid #fff;background-color:#fff;border-radius:15px;padding:5px;font-weight:400;font-size:15px;line-height:16px;margin:5px}select[data-v-35e02a6f],select[data-v-35e02a6f]:focus{box-sizing:border-box}select[data-v-35e02a6f]:focus{border:1px solid #f0d264;border-radius:15px;outline:3px solid #eadba7;border-radius:10px}input[data-v-35e02a6f]{width:200px}",""]),e.exports=r},246:function(e,t,n){"use strict";n.r(t);n(32),n(19),n(33),n(25);var r=n(3),o=(n(40),n(51),{components:{Header:n(199).a},mounted:function(){var e=this;this.$axios.get("/user/session").then((function(t){console.log(t.data),e.userPhoneNumber=t.data.phoneNumber}))},data:function(){return{userPhoneNumber:null,name:null,phoneNumber:null,destination:null,item:"마카롱",isInPerson:"1",checks:[]}},watch:{phoneNumber:function(){return this.phoneNumber=this.phoneNumber.replace(/[^0-9]/g,"")},destination:function(){return this.destination=this.destination.replace(/[^0-9-]/g,"")}},methods:{checkToMe:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=e.checks.length){t.next=8;break}return t.next=3,e.$axios.get("/user/session");case 3:n=t.sent,e.name=n.data.name,e.phoneNumber=n.data.phoneNumber,t.next=10;break;case 8:e.name="",e.phoneNumber="";case 10:case"end":return t.stop()}}),t)})))()},submitForm:function(){var e={name:this.name,phoneNumber:this.phoneNumber,departure:"101",destination:this.destination,item:this.item,isInPerson:this.isInPerson,userId:this.userPhoneNumber,status:"접수 중",isAccepted:"접수 요청"};this.$axios.post("/delivery/order",e).then((function(t){console.log(t),200==t.status?(alert("접수되었습니다."),$nuxt.$router.push("/delivery/list/".concat(e.userId))):alert("접수 실패하였습니다.")})).catch((function(e){alert("비어있는 칸이 있는지 확인해 주세요."),console.log(e)}))}}}),l=(n(227),n(31)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"order"},[t("Header"),e._v(" "),t("h3",[e._v("배송 접수하기")]),e._v(" "),t("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[e._e(),e._v(" "),t("div",{staticClass:"toggle"},[t("span",[e._v("나에게 보내기")]),e._v(" "),t("label",{staticClass:"toggler-wrapper style-1"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checks,expression:"checks"}],attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(e.checks)?e._i(e.checks,"1")>-1:e.checks},on:{click:e.checkToMe,change:function(t){var n=e.checks,r=t.target,o=!!r.checked;if(Array.isArray(n)){var l=e._i(n,"1");r.checked?l<0&&(e.checks=n.concat(["1"])):l>-1&&(e.checks=n.slice(0,l).concat(n.slice(l+1)))}else e.checks=o}}}),e._v(" "),e._m(0)])]),e._v(" "),t("div",[t("label",{attrs:{for:"name"}},[e._v("수령인")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",id:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),t("div",[t("label",{attrs:{for:"phoneNumber"}},[e._v("전화번호")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNumber,expression:"phoneNumber"}],attrs:{type:"text",id:"phoneNumber",maxlength:"11",placeholder:"'-'를 제외하고 입력해 주세요."},domProps:{value:e.phoneNumber},on:{input:function(t){t.target.composing||(e.phoneNumber=t.target.value)}}})]),e._v(" "),t("div",[t("label",{attrs:{for:"destination"}},[e._v("배송지")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.destination,expression:"destination"}],attrs:{type:"text",id:"destination",maxlength:"11",placeholder:"숫자와 '-'만 입력해 주세요."},domProps:{value:e.destination},on:{input:function(t){t.target.composing||(e.destination=t.target.value)}}})]),e._v(" "),t("div",[t("label",{attrs:{for:"item"}},[e._v("상품")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.item,expression:"item"}],attrs:{name:"item",id:"item"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.item=t.target.multiple?n:n[0]}}},[t("option",{attrs:{value:"마카롱"}},[e._v("마카롱")]),e._v(" "),t("option",{attrs:{value:"케이크"}},[e._v("케이크")]),e._v(" "),t("option",{attrs:{value:"도넛"}},[e._v("도넛")]),e._v(" "),t("option",{attrs:{value:"베이글"}},[e._v("베이글")])])]),e._v(" "),t("div",[t("label",{attrs:{for:"isInPerson"}},[e._v("수령 방법")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.isInPerson,expression:"isInPerson"}],attrs:{name:"isInPerson",id:"isInPerson"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.isInPerson=t.target.multiple?n:n[0]}}},[t("option",{attrs:{value:"1"}},[e._v("직접 수령하기")]),e._v(" "),t("option",{attrs:{value:"0"}},[e._v("두고 가기")])])]),e._v(" "),t("button",{attrs:{type:"submit"}},[e._v("접수")])])],1)}),[function(){var e=this._self._c;return e("div",{staticClass:"toggler-slider"},[e("div",{staticClass:"toggler-knob"})])}],!1,null,"35e02a6f",null);t.default=component.exports}}]);