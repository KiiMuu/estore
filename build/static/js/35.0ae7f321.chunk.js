(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[35],{1110:function(e,t,n){"use strict";n.r(t);var r,a,o,c,s,i,u,d,p=n(228),l=n(0),f=n(55),b=n(686),v=n.n(b),h=(n(783),n(430)),j=n(431),y=n(432),m=n(238),O=n(57),g=n(253),x=n(20),k=n(69),w=n(70),C=n(225),E=n(89),S=n(235),A=w.b.div(r||(r=Object(k.a)(["\n    padding: "," 0;\n"])),C.e),I=w.b.h3(a||(a=Object(k.a)(["\n    text-transform: uppercase;\n    color: ",";\n    font-weight: 900;\n    font-size: 1.5rem;\n"])),E.a),D=w.b.ul(o||(o=Object(k.a)(["\n    padding: 0;\n"]))),T=w.b.li(c||(c=Object(k.a)(["\n    list-style: none;\n    padding: 1rem;\n    color: ",";\n    background-color: ",";\n    border: 1px solid rgba(0 0 0 / 5%);\n    border-radius: .3rem;\n"])),E.a,E.b),z=w.b.div(s||(s=Object(k.a)(["\n    box-shadow: 0 0 .5rem .5rem rgba(0 0 0 / 5%);\n    padding: 2.5rem 2rem;\n    border-radius: .3rem;\n"]))),_=Object(w.b)(z)(i||(i=Object(k.a)([""]))),P=Object(w.b)(z)(u||(u=Object(k.a)(["\n    margin-top: 2rem;\n"]))),J=w.b.div(d||(d=Object(k.a)(["\n    ",";\n"])),S.c),N=n(230),R=n.n(N),Y=n(231),$=n.n(Y),G=n(229),H=n.n(G),L=n(245),M=n.n(L),U=n(250),V=n.n(U),q=n(260),B=n.n(q),F=n(252),K=n.n(F),Q=n(254),W=n.n(Q),X=n(222),Z=n(21),ee=n(4);t.default=function(e){var t=e.history,n=Object(l.useState)(""),r=Object(p.a)(n,2),a=r[0],o=r[1],c=Object(l.useState)(!1),s=Object(p.a)(c,2),i=s[0],u=s[1],d=Object(l.useState)(""),b=Object(p.a)(d,2),k=b[0],w=b[1],C=Object(f.b)(),E=Object(m.a)().userInfo,S=Object(f.c)((function(e){return e.userCart})),N=S.loading,Y=S.error,G=S.userCart,L=Object(f.c)((function(e){return e.deleteUserCart})).error,U=Object(f.c)((function(e){return e.addDeliveryAddress})),q=U.loading,F=U.error,Q=U.deliveryAddress,te=Object(f.c)((function(e){return e.couponApply})),ne=te.loading,re=te.error,ae=te.success,oe=te.priceAfterDiscount,ce=Object(f.c)((function(e){return e.isCouponApplied})),se=Object(f.c)((function(e){return e.isCashOnDelivery})),ie=Object(f.c)((function(e){return e.cashOrderCreate})),ue=ie.loading,de=ie.error,pe=ie.cashOrder;Object(l.useEffect)((function(){C(Object(h.b)(null===E||void 0===E?void 0:E.token))}),[C,E]);Object(l.useEffect)((function(){L&&Object(O.a)(L,3)}),[C,L]);Object(l.useEffect)((function(){F&&Object(O.a)(F,3),(null===Q||void 0===Q?void 0:Q.ok)&&(o(""),u(!0),Object(g.a)("Your address has been posted!",3))}),[F,Q]);var le=function(){C(Object(j.b)(k,null===E||void 0===E?void 0:E.token))};Object(l.useEffect)((function(){re&&(C({type:Z.n,payload:!1}),Object(O.a)(re,3)),ae&&(w(""),C({type:Z.n,payload:!0}),Object(g.a)("Congrats!, you have applied to this offer"))}),[C,re,ae]);Object(l.useEffect)((function(){de&&Object(O.a)(de,3),(null===pe||void 0===pe?void 0:pe.ok)&&("undefined"!==typeof window&&localStorage.removeItem("userCart"),C({type:x.a,payload:[]}),C({type:Z.n,payload:!1}),C({type:"IS_CASH_ON_DELIVERY",payload:!1}),C(Object(h.c)(null===E||void 0===E?void 0:E.token)),setTimeout((function(){t.push("/user/history")}),1e3))}),[C,de,pe,E,t]);return Object(ee.jsx)("div",{className:"container",children:Object(ee.jsx)(A,{children:Object(ee.jsxs)(R.a,{gutter:[20,20],children:[Object(ee.jsxs)($.a,{xs:24,md:12,children:[Object(ee.jsxs)(z,{children:[Object(ee.jsx)(I,{children:"Delivery Address"}),Object(ee.jsxs)(V.a,{style:{width:"100%"},direction:"vertical",children:[Object(ee.jsx)(v.a,{theme:"snow",value:a,onChange:o}),Object(ee.jsx)(H.a,{type:"primary",onClick:function(){C(Object(h.d)(a,null===E||void 0===E?void 0:E.token))},loading:q,children:"Save"})]})]}),Object(ee.jsxs)(P,{children:[Object(ee.jsx)(I,{children:"Got a coupon?"}),Object(ee.jsxs)(V.a,{direction:"vertical",children:[Object(ee.jsx)(J,{children:Object(ee.jsx)("input",{type:"text",inputMode:"text",placeholder:"Enter your own coupon",value:k,onChange:function(e){return w(e.target.value)}})}),Object(ee.jsx)(H.a,{type:"primary",onClick:le,loading:ne,children:"Apply"})]})]})]}),Object(ee.jsx)($.a,{xs:24,md:12,children:Object(ee.jsxs)(_,{children:[Object(ee.jsx)(I,{children:"Order Summary"}),(null===G||void 0===G?void 0:G.products.length)?N?Object(ee.jsx)(X.a,{spin:!0}):Y?Object(ee.jsx)(K.a,{message:Y,type:"error",showIcon:!0}):Object(ee.jsx)(D,{children:Object(ee.jsxs)(V.a,{direction:"vertical",wrap:!0,style:{width:"100%"},children:[null===G||void 0===G?void 0:G.products.map((function(e){return Object(ee.jsxs)(T,{children:[e.product.title," (",e.color,") x ",e.count," = ",Object(ee.jsx)(M.a,{color:"geekblue",children:e.product.price*e.count})]},e._id)})),Object(ee.jsxs)(M.a,{color:"#059669",children:["Total: $",null===G||void 0===G?void 0:G.cartTotal]}),oe>0&&Object(ee.jsxs)(M.a,{color:"success",children:["Total after discount: $",oe]})]})}):Object(ee.jsx)(K.a,{message:"Cart has been Emptied",type:"success",showIcon:!0}),Object(ee.jsx)(B.a,{}),Object(ee.jsxs)(R.a,{gutter:[10,10],justify:"space-between",children:[Object(ee.jsx)($.a,{children:Object(ee.jsx)(W.a,{color:"#059669",title:i?"":"Please enter your delivery address to continue!",children:se?Object(ee.jsx)(H.a,{disabled:!i||!(null===G||void 0===G?void 0:G.products.length),type:"primary",onClick:function(){C(Object(y.a)(null===E||void 0===E?void 0:E.token,se,ce))},loading:ue,children:"Place Order"}):Object(ee.jsx)(H.a,{disabled:!i||!(null===G||void 0===G?void 0:G.products.length),type:"primary",onClick:function(){return t.push("/payment")},children:"Place Order"})})}),Object(ee.jsx)($.a,{children:Object(ee.jsx)(H.a,{disabled:!(null===G||void 0===G?void 0:G.products.length),type:"secondary",onClick:function(){"undefined"!==typeof window&&localStorage.removeItem("userCart"),C({type:x.a,payload:[]}),C(Object(h.c)(null===E||void 0===E?void 0:E.token)),G.products=[],G.cartTotal=0,oe=0},children:"Empty Cart"})})]})]})})]})})})}},225:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return s}));var r="6.5rem",a="10rem",o="3.5rem",c="2rem",s="2rem"},235:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return s}));var r=n(89),a=function(){return"\n        position: relative;\n        transition: transform .15s ease-in-out;\n        &::before {\n            content: '';\n            position: absolute;\n            z-index: -1;\n            top: 0;\n            right: 0;\n            width: 100%;\n            height: 100%;\n            transform: scale(0);\n            background-color: ".concat(r.b,";\n            border-radius: 3px;\n            transition: transform .15s ease-in-out;\n            transform-origin: center;\n        }\n        &:hover {\n            color: ").concat(r.c,";\n        }\n        &:hover::before {\n            transform: scale(1);\n            transform-origin: top right;\n        }\n        &:active {\n            transform: scale(.9);\n        }\n    ")},o=function(){return"\n        background-image: linear-gradient(\n            to right, \n            ".concat(r.c,", \n            ").concat(r.d,"\n        );\n        -webkit-background-clip: text;\n        background-clip: text;\n        color: transparent;\n        font-weight: 900;\n    ")},c=function(){return"\n        position: relative;\n        span {\n            position: absolute;\n            top: 50%;\n            transform: translate(0%, -50%);\n            color: ".concat(r.c,";\n        }\n        input {\n            padding-left: 3rem;\n            border: .2rem solid;\n            border-color: transparent transparent #ddd transparent;\n            outline: none;\n            width: 100%;\n            height: 5rem;\n            background-color: #fff;\n            border-radius: 0;\n        }\n        strong {\n            &:after {\n                content: '';\n                position: absolute;\n                bottom: 0;\n                left: 50%;\n                width: 0;\n                height: .2rem;\n                background-color: ").concat(r.c,";\n                transition: all .3s ease-in-out;\n            }\n        }\n        input:focus + strong {\n            &:after {\n                width: 100%;\n                left: 0;\n            }\n        }\n    ")},s=function(){return"\n        label {\n            display: block;\n            color: #000;\n            font-weight: 500;\n            margin-bottom: .2rem;\n        }\n        input {\n            width: 100%;\n            outline: none;\n            height: 4rem;\n            padding-left: 1rem;\n            border: .1rem solid rgba(0 0 0 / 10%);\n            &:focus {\n                box-shadow: 0 0 .1rem .1rem ".concat(r.d,";\n                border: .1rem solid ").concat(r.c,";\n                transition: all .15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n            }\n        }\n    ")}},238:function(e,t,n){"use strict";var r=n(30),a=n(55);t.a=function(){return{userInfo:Object(a.c)((function(e){return Object(r.a)({},e)})).user.userInfo}}},253:function(e,t,n){"use strict";var r=n(59),a=n.n(r);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.a.success({content:e,style:{fontSize:"1.35rem",color:"#262626"},duration:t})}},430:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return l}));var r=n(14),a=n.n(r),o=n(38),c=n(56),s=n.n(c),i=n(20),u=function(e,t){return function(){var n=Object(o.a)(a.a.mark((function n(r){var o,c,u,d;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:i.m}),o={headers:{authtoken:t}},n.next=5,s.a.post("/api/user/cart",{cart:e},o);case 5:c=n.sent,u=c.data,r({type:i.n,payload:u}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),r({type:i.l,payload:(null===(d=n.t0.response)||void 0===d?void 0:d.data.message)?n.t0.response.data.message:n.t0.message});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r,o,c,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:i.j}),r={headers:{authtoken:e}},t.next=5,s.a.get("/api/user/cart",r);case 5:o=t.sent,c=o.data,n({type:i.k,payload:c}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:i.i,payload:(null===(u=t.t0.response)||void 0===u?void 0:u.data.message)?t.t0.response.data.message:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r,o,c,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:i.d}),r={headers:{authtoken:e}},t.next=5,s.a.put("/api/user/cart",{},r);case 5:o=t.sent,c=o.data,n({type:i.e,payload:c}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:i.c,payload:(null===(u=t.t0.response)||void 0===u?void 0:u.data.message)?t.t0.response.data.message:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},l=function(e,t){return function(){var n=Object(o.a)(a.a.mark((function n(r){var o,c,u,d;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:i.g}),o={headers:{authtoken:t}},n.next=5,s.a.post("/api/user/address",{address:e},o);case 5:c=n.sent,u=c.data,r({type:i.h,payload:u}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),r({type:i.f,payload:(null===(d=n.t0.response)||void 0===d?void 0:d.data.message)?n.t0.response.data.message:n.t0.message});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}},431:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return l}));var r=n(14),a=n.n(r),o=n(38),c=n(56),s=n.n(c),i=n(21),u=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:i.l}),e.next=4,s.a.get("/api/coupons");case 4:n=e.sent,r=n.data,t({type:i.m,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:i.k,payload:(null===(o=e.t0.response)||void 0===o?void 0:o.data.message)?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t){return function(){var n=Object(o.a)(a.a.mark((function n(r){var o,c,u,d;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:i.e}),o={headers:{authtoken:t}},n.next=5,s.a.post("/api/coupon",e,o);case 5:c=n.sent,u=c.data,r({type:i.g,payload:u}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),r({type:i.d,payload:(null===(d=n.t0.response)||void 0===d?void 0:d.data.message)?n.t0.response.data.message:n.t0.message});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},p=function(e,t){return function(){var n=Object(o.a)(a.a.mark((function n(r){var o,c,u,d;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:i.i}),o={headers:{authtoken:t}},n.next=5,s.a.delete("/api/coupon/".concat(e),o);case 5:c=n.sent,u=c.data,r({type:i.j,payload:u}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),r({type:i.h,payload:(null===(d=n.t0.response)||void 0===d?void 0:d.data.message)?n.t0.response.data.message:n.t0.message});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},l=function(e,t){return function(){var n=Object(o.a)(a.a.mark((function n(r){var o,c,u,d;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:i.b}),o={headers:{authtoken:t}},n.next=5,s.a.post("/api/user/apply-coupon",{coupon:e},o);case 5:c=n.sent,u=c.data,r({type:i.c,payload:u}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),r({type:i.a,payload:(null===(d=n.t0.response)||void 0===d?void 0:d.data.message)?n.t0.response.data.message:n.t0.message});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}},432:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return p}));var r=n(14),a=n.n(r),o=n(38),c=n(56),s=n.n(c),i=n(40),u=function(e,t){return function(){var n=Object(o.a)(a.a.mark((function n(r){var o,c,u,d;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:i.e}),o={headers:{authtoken:t}},n.next=5,s.a.post("/api/user/order",{stripeResponse:e},o);case 5:c=n.sent,u=c.data,r({type:i.f,payload:u}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),r({type:i.d,payload:(null===(d=n.t0.response)||void 0===d?void 0:d.data.message)?n.t0.response.data.message:n.t0.message});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r,o,c,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:i.h}),r={headers:{authtoken:e}},t.next=5,s.a.get("/api/user/orders",r);case 5:o=t.sent,c=o.data,n({type:i.i,payload:c}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:i.g,payload:(null===(u=t.t0.response)||void 0===u?void 0:u.data.message)?t.t0.response.data.message:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},p=function(e,t,n){return function(){var r=Object(o.a)(a.a.mark((function r(o){var c,u,d,p;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,o({type:i.b}),c={headers:{authtoken:e}},r.next=5,s.a.post("/api/user/cash-order",{isCashOnDelivery:t,isCouponApplied:n},c);case 5:u=r.sent,d=u.data,o({type:i.c,payload:d}),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),o({type:i.a,payload:(null===(p=r.t0.response)||void 0===p?void 0:p.data.message)?r.t0.response.data.message:r.t0.message});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(e){return r.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=35.0ae7f321.chunk.js.map