(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{206:function(n,t,e){var content=e(222);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(71).default)("11e662c1",content,!0,{sourceMap:!1})},221:function(n,t,e){"use strict";e(206)},222:function(n,t,e){var o=e(70)(!1);o.push([n.i,".btn1{margin:9px;padding:10px 20px;font-size:15px;border-radius:10px;background-color:#f0d264;box-shadow:0 6px rgba(196,172,83,.7);text-decoration:none;border-width:0}.btn1:hover{box-shadow:0 0;margin-top:15px;background-color:#d6bb59}.userbtn{background-color:#fff;border-width:1px;padding:7px 12px;margin:4px}",""]),n.exports=o},243:function(n,t,e){"use strict";e.r(t);var o=e(3),r=(e(40),{data:function(){return{deliveryHeader:["😀","접수번호","접수일자","이름","품목","현재 상태"],deliveryList:[]}},methods:{open:function(){var n=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.$axios.get("/control/opendoor").then((function(n){console.log(n),n.data?alert("뚜껑을 열게요!"):alert("뚜껑이 이미 열리고 있어요.")})).catch((function(n){alert("오류가 발생했습니다."),console.log(n)}));case 1:case"end":return t.stop()}}),t)})))()},close:function(){return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log("close");case 1:case"end":return n.stop()}}),n)})))()}}}),c=(e(221),e(31)),component=Object(c.a)(r,(function(){var n=this,t=n._self._c;return t("div",{staticClass:"robot"},[t("h3",[n._v("로봇 관리")]),n._v(" "),t("div",[t("div",{staticClass:"menu"},[n._v("\n    메뉴\n  ")]),n._v(" "),t("ul",[t("li",{on:{click:n.open}},[t("button",{staticClass:"btn1"},[n._v("\n      열기\n    ")])]),n._v(" "),t("li",{on:{click:n.close}},[t("button",{staticClass:"btn1"},[n._v("닫기")])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);