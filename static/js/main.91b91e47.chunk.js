(this["webpackJsonpdesign-studio-site"]=this["webpackJsonpdesign-studio-site"]||[]).push([[0],{38:function(e,c,t){"use strict";(function(e){t.d(c,"a",(function(){return u}));var s=t(18),a=t.n(s),n=t(21),l=t(19),r=t(0),o=t(25),i=t(26),j=t(12),_=t(56),d=t(39),b=t(6),m=t(9),x=t(1);function u(){var c=Object(r.useState)({}),t=Object(l.a)(c,2),s=t[0],u=t[1],h=Object(r.useState)(!1),O=Object(l.a)(h,2),f=O[0],N=O[1],p=Object(b.f)().id;Object(r.useEffect)((function(){(function(){var e=Object(n.a)(a.a.mark((function e(){var c,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://designer-studio-server.herokuapp.com/work/?id=".concat(p));case 2:return c=e.sent,e.next=5,c.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(e){return u(e)}))}),[p]);var v,g=function(e){e.stopPropagation(),N(!f)};return Object(x.jsxs)("div",{className:"fade-in",children:[Object(x.jsx)("section",{className:"work__section",children:function(c){var t=c.share,s=e+c.img;return 0===Object.keys(c).length&&c.constructor===Object?Object(x.jsx)(o.a,{children:Object(x.jsx)(i.a,{children:Object(x.jsx)(j.a,{className:"d-flex justify-content-center",children:Object(x.jsx)(_.a,{animation:"border works__spinner"})})})}):Object(x.jsxs)(o.a,{fluid:!0,children:[Object(x.jsxs)(i.a,{children:[Object(x.jsxs)(j.a,{className:"offset-1 col-10 col-md-4 work__infoGroup",children:[Object(x.jsx)("div",{className:"work__title",children:c.name}),Object(x.jsx)("div",{className:"work__text",children:c.desc}),Object(x.jsxs)("div",{className:"work__text work__text__line",children:[Object(x.jsx)("span",{children:"Client: "}),c.customer]}),Object(x.jsxs)("div",{className:"work__text work__text__line",children:[Object(x.jsx)("span",{children:"Date: "}),c.date]}),Object(x.jsxs)("div",{className:"work__text work__text__line",children:[Object(x.jsx)("span",{children:"Share: "}),Object.keys(t).map((function(e,c){return function(e,c){var t=e.name.charAt(0).toUpperCase()+e.name.slice(1),s=e.link;return Object(x.jsx)("a",{href:s,className:"work__shareLink",children:t},c)}(t[e],c)}))]})]}),Object(x.jsxs)(j.a,{className:"col-12 offset-md-1 col-md-6 work__image__container g-0",onClick:function(e){g(e)},children:[Object(x.jsx)(d.a,{src:s,alt:c.title,className:"work__image img-fluid"}),Object(x.jsx)("span",{className:"pe-7s-search work__image__look"})]})]}),f&&Object(x.jsx)("div",{className:"work__popup__container",children:Object(x.jsx)(o.a,{fluid:!0,className:"g-0",children:Object(x.jsx)(i.a,{className:" g-0 justify-content-center",children:Object(x.jsxs)(j.a,{className:"work__popup__image align-self-center col-10 col-lg-8",children:[Object(x.jsx)(d.a,{src:s,alt:"popup ".concat(c.title),className:"img-fluid"}),Object(x.jsx)("span",{className:"pe-7s-close work__popup__close",onClick:function(e){g(e)}})]})})})}),!1!==f&&Object(x.jsx)("div",{className:"work__popup__bg",onClick:function(e){g(e)}})]})}(s)}),Object(x.jsx)("section",{className:"work__nav__section",children:(v=s,Object(x.jsx)(o.a,{fluid:"xl",children:Object(x.jsxs)(i.a,{className:"work__nav__row",children:[!1===v.prev?Object(x.jsx)(j.a,{className:"col-2"}):Object(x.jsxs)(j.a,{as:m.b,to:"/work/".concat(v.prev),className:"col-2 work__nav__link",children:[Object(x.jsx)("div",{className:"work__nav__link__innerWrapper",children:Object(x.jsx)("span",{className:"pe-7s-angle-left work_nav_icon"})}),Object(x.jsx)("div",{className:"work__nav__link__innerWrapper d-none d-lg-block",children:Object(x.jsx)("span",{className:"work__nav__text",children:"previous project"})})]}),Object(x.jsx)(j.a,{className:"col-2 offset-3 d-flex justify-content-center",children:Object(x.jsxs)("div",{className:"work__squares__container align-self-center",children:[Object(x.jsx)("div",{className:"work__square"}),Object(x.jsx)("div",{className:"work__square"}),Object(x.jsx)("div",{className:"work__square"}),Object(x.jsx)("div",{className:"work__square"})]})}),!1===v.next?Object(x.jsx)(j.a,{className:"col-2 offset-3"}):Object(x.jsxs)(j.a,{as:m.b,to:"/work/".concat(v.next),className:"col-2 offset-3 work__nav__link justify-content-end",children:[Object(x.jsx)("div",{className:"work__nav__link__innerWrapper d-none d-lg-block",children:Object(x.jsx)("span",{className:"work__nav__text",children:"next project"})}),Object(x.jsx)("div",{className:"work__nav__link__innerWrapper",children:Object(x.jsx)("span",{className:"pe-7s-angle-right work_nav_icon"})})]})]})}))})]})}}).call(this,"/")},44:function(e,c,t){},46:function(e,c,t){},55:function(e,c,t){"use strict";t.r(c);var s=t(0),a=t.n(s),n=t(17),l=t.n(n),r=(t(44),t(45),t(46),t(58)),o=t(25),i=t(39),j=t(60),_=t(9),d=t(1);function b(){return Object(d.jsx)(r.a,{collapseOnSelect:!0,expand:"lg",children:Object(d.jsxs)(o.a,{fluid:"xl",children:[Object(d.jsx)(r.a.Brand,{href:"/design-studio-site",children:Object(d.jsx)(i.a,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAZCAYAAADJ9/UkAAAB9ElEQVRIicWVrUtsURTF91x/QTD4ERQMD8EoJovBoFEMNuGByTZFBP8BwWzSbLVNsFgfiIKgRZMmjQ9BkMcE9TrKfm+px/GemTPj6DtwubP3Wmuv87HP3BJwambj9v3jLDOz3v9g7KPXzZcV5GY2aWb9CU9Fmj96VxJ1k/KxV1+gAjwBv4BSo+kCs+LeA/N6ezzbRFdSfedWQmAYuBWw1KBAD3Ap3rpy64o939NAuySe+wzXg2WBN8BQpMCGOOdAt3Ldij2/EdENqa5zykWEDDgUYacAnwBy4dN12LTyjk8UaHeEe/0stjVjRWfIv3Gi/HZEuy3ceQT5sEfGCo0D8oczBFaV+w0MRHQDwp23apEeaWb+7gyBEaCq+GcjsePiVaX70CMpEwjP8EC/9xK1e+IfxHokpcjLGb6uJFEX7lS0R5oV8TO8U4GjFrVH0t3FeiSlyGawgqlEzVSg2WzLOCh2rULXX8Hv2Era2amUCeyq4CMwGuGMCnfebkeM7e3uv3TwRYRzEdyMtDvdwgQWgy1dqcNWAmyxo8aByXFwhfqU6wuu5PGXGMtoEHiQ0b5y+4o9P9hKva5WyLVarZplf7+IM2b2I8syX/2C4LU8z5P+gj81gKvgjP25aqde8Ye9+ZgzsyfR/O3x9w1gS6veasvVzJ4BVgWsgh8DIYgAAAAASUVORK5CYII=",alt:"Piroll logo"})}),Object(d.jsx)(r.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsx)(r.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-lg-end",children:Object(d.jsxs)(j.a,{className:"nav__custom",children:[Object(d.jsx)(j.a.Link,{as:_.b,to:"/design-studio-site",className:"nav__btn",children:"Home"}),Object(d.jsx)(j.a.Link,{as:_.b,to:"/about",className:"nav__btn",children:"About"}),Object(d.jsx)(j.a.Link,{as:_.b,to:"/contact",className:"nav__btn",children:"Contact"})]})})]})})}var m=t(26),x=t(12),u=t(18),h=t.n(u),O=t(21),f=t(19),N=t(56);function p(){var e=Object(s.useState)([]),c=Object(f.a)(e,2),t=c[0],a=c[1];Object(s.useEffect)((function(){n().then((function(e){return a(e)}))}),[]);var n=function(){var e=Object(O.a)(h.a.mark((function e(){var c,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://designer-studio-server.herokuapp.com/works-list");case 2:return c=e.sent,e.next=5,c.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsx)(o.a,{fluid:!0,children:function(e){return 0===e.length?Object(d.jsx)(m.a,{className:"justify-content-center",children:Object(d.jsx)(N.a,{animation:"border works__spinner"})}):Object(d.jsx)(m.a,{className:"row-cols-lg-4 row-cols-md-3 row-cols-2",children:Object.keys(e).map((function(c,t){return function(e,c){var t=e.img,s=e.id;return Object(d.jsxs)(x.a,{as:_.b,to:"work/".concat(s),className:"g-0 worksGrid_container fade-in",children:[Object(d.jsx)(i.a,{src:t,alt:s,className:"img-fluid worksGrid__image"}),Object(d.jsx)("span",{className:"pe-7s-look works__look"})]},c)}(e[c],t)}))})}(t)})}function v(){return Object(d.jsxs)("section",{className:"home__section fade-in",children:[Object(d.jsx)(o.a,{fluid:"xl",className:"intro__container",children:Object(d.jsx)(m.a,{className:"justify-content-center",children:Object(d.jsxs)(x.a,{className:"col-10 col-md-8 col-xl-6",children:[Object(d.jsx)("h1",{className:"intro__title",children:"UI/UX & Graphic Designer"}),Object(d.jsx)("h2",{className:"intro__subtitle",children:"I am a Graphic & Web Designer based in New York, specializing in User Interface Design and Development."})]})})}),Object(d.jsx)(p,{})]})}function g(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)(o.a,{fluid:"xl",children:Object(d.jsxs)(m.a,{className:"footer__row",children:[Object(d.jsxs)(x.a,{className:"col-6 col-md-2",children:[Object(d.jsx)("div",{className:"footer__title",children:"Piroll Design, Inc."}),Object(d.jsxs)("div",{className:"footer__subtitle",children:["\xa9 2017 Piroll. All rights reserved.",Object(d.jsx)("br",{}),"Designed by robirurk."]})]}),Object(d.jsxs)(x.a,{className:"col-6 col-md-2 offset-lg-2",children:[Object(d.jsx)("div",{className:"footer__contact",children:"hello@pirolltheme.com"}),Object(d.jsx)("div",{className:"footer__contact",children:"+44 987 065 908"})]}),Object(d.jsxs)(x.a,{className:"col-4 offset-md-1 col-md-1",children:[Object(d.jsx)("a",{href:"/",className:"footer__link",children:"Projects"}),Object(d.jsx)("a",{href:"/",className:"footer__link",children:"About"}),Object(d.jsx)("a",{href:"/",className:"footer__link",children:"Services"}),Object(d.jsx)("a",{href:"/",className:"footer__link",children:"Carreer"})]}),Object(d.jsxs)(x.a,{className:"col-4 col-md-1",children:[Object(d.jsx)("a",{href:"/",className:"footer__link",children:"News"}),Object(d.jsx)("a",{href:"/",className:"footer__link",children:"Events"}),Object(d.jsx)("a",{href:"/",className:"footer__link",children:"Contact"}),Object(d.jsx)("a",{href:"/",className:"footer__link",children:"Legals"})]}),Object(d.jsxs)(x.a,{className:"col-4 col-md-1 offset-md-1",children:[Object(d.jsx)("a",{href:"/",className:"footer__link",children:"Facebook"}),Object(d.jsx)("a",{href:"/",className:"footer__link",children:"Twitter"}),Object(d.jsx)("a",{href:"/",className:"footer__link",children:"Instagram"}),Object(d.jsx)("a",{href:"/",className:"footer__link",children:"Dribbble"})]})]})})})}var k=t.p+"static/media/photo.6348a0ad.jpg";function w(){return Object(d.jsxs)("div",{className:"page fade-in",children:[Object(d.jsx)("section",{className:"about__introSection",children:Object(d.jsx)(o.a,{fluid:"xl",children:Object(d.jsx)(m.a,{className:"justify-content-center about__intro",children:Object(d.jsxs)(x.a,{className:"col-10 col-md-8 col-lg-6",children:[Object(d.jsx)("div",{className:"about__introTitle",children:"Amelia Woods"}),Object(d.jsx)("div",{className:"about__introSubtitle",children:"I am a Graphic & Web Designer based in New York, specializing in User Interface Design and Development."})]})})})}),Object(d.jsx)("section",{className:"about__numbersSection",children:Object(d.jsx)(o.a,{fluid:"xl",children:Object(d.jsxs)(m.a,{className:"about__numbers",children:[Object(d.jsx)(x.a,{className:"col-2 col-md-1 d-flex align-items-center",children:Object(d.jsx)("span",{className:"pe-7s-portfolio about__numbers__icon"})}),Object(d.jsxs)(x.a,{className:"col-4 col-md-5 col-lg-2",children:[Object(d.jsx)("div",{className:"about__numbersGroup__number",children:"548"}),Object(d.jsx)("div",{className:"about__numbersGroup__text",children:"projects completed"})]}),Object(d.jsx)(x.a,{className:"col-2 col-md-1 d-flex align-items-center",children:Object(d.jsx)("span",{className:"pe-7s-clock about__numbers__icon"})}),Object(d.jsxs)(x.a,{className:"col-4 col-md-5 col-lg-2",children:[Object(d.jsx)("div",{className:"about__numbersGroup__number",children:"1465"}),Object(d.jsx)("div",{className:"about__numbersGroup__text",children:"WORKING HOURS"})]}),Object(d.jsx)(x.a,{className:"col-2 col-md-1 d-flex align-items-center",children:Object(d.jsx)("span",{className:"pe-7s-star about__numbers__icon"})}),Object(d.jsxs)(x.a,{className:"col-4 col-md-5 col-lg-2",children:[Object(d.jsx)("div",{className:"about__numbersGroup__number",children:"612"}),Object(d.jsx)("div",{className:"about__numbersGroup__text",children:"POSITIVE FEEDBACKS"})]}),Object(d.jsx)(x.a,{className:"col-2 col-md-1 d-flex align-items-center",children:Object(d.jsx)("span",{className:"pe-7s-like about__numbers__icon"})}),Object(d.jsxs)(x.a,{className:"col-4 col-md-5 col-lg-2",children:[Object(d.jsx)("div",{className:"about__numbersGroup__number",children:"735"}),Object(d.jsx)("div",{className:"about__numbersGroup__text",children:"HAPPY CLIENTS"})]})]})})}),Object(d.jsx)("section",{className:"about__aboutMeSection",children:Object(d.jsx)(o.a,{fluid:!0,children:Object(d.jsxs)(m.a,{className:"about__aboutMe",children:[Object(d.jsx)(x.a,{className:"d-none d-md-block col-6-md g-0 about__aboutMe__photoContainer",children:Object(d.jsx)(i.a,{src:k,fluid:!0,className:"about__aboutMe__photo fade-in"})}),Object(d.jsxs)(x.a,{className:"col-10 col-md-4 offset-1 about__aboutMe__container",children:[Object(d.jsx)("div",{className:"about__aboutMe__title",children:"About me"}),Object(d.jsxs)("div",{className:"about__aboutME__text",children:["Given let waters air sea had you'll, may seed abundantly fish. Were, you'll earth forth winged above brought. Own darkness they're him can't fourth sea place have.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"So the above May stars cattle fruitful face shall. Tree it, winged. Every signs male firmament us. Morning him."]})]})]})})}),Object(d.jsx)("section",{className:"about__contactSection",children:Object(d.jsx)(o.a,{fluid:"xl",children:Object(d.jsx)(m.a,{className:"justify-content-center",children:Object(d.jsxs)(x.a,{className:"col-10 col-md-8 col-xl-6 about__contact__container d-flex justify-content-center flex-column",children:[Object(d.jsx)("div",{className:"about__contact__title",children:"Need a Project?"}),Object(d.jsx)("div",{className:"about__contact__text",children:"Let us know what you're looking for in an agency. We'll take a look and see if this could be the start of something beautiful."}),Object(d.jsx)(_.b,{to:"/contact",className:"align-self-center",children:Object(d.jsx)("button",{className:"about__contact__button",children:"let\u2019s talk"})})]})})})})]})}var y=t(59),A=t(33);function E(){return Object(d.jsxs)("div",{className:"page fade-in",children:[Object(d.jsx)("section",{className:"contact__section",children:Object(d.jsx)(o.a,{fluid:"xl",children:Object(d.jsxs)(m.a,{className:"contact__row",children:[Object(d.jsxs)(x.a,{className:"col-12 col-md-5 col-lg-4",children:[Object(d.jsx)("div",{className:"contact__title",children:"Contact Info:"}),Object(d.jsx)("div",{className:"contact__text",children:"To give give beginning divide, cattle. Give moving won't, there the abundantly she'd she'd brought air upon. Light hath subdue. Life days creature upon first heaven gathering dry."}),Object(d.jsxs)("div",{className:"contact__text contact__text__line",children:[Object(d.jsx)("span",{children:"Address: "}),"10111 Santa Monica Boulevard, LA"]}),Object(d.jsxs)("div",{className:"contact__text contact__text__line",children:[Object(d.jsx)("span",{children:"Phone: "}),"+44 987 065 908"]}),Object(d.jsxs)("div",{className:"contact__text contact__text__line",children:[Object(d.jsx)("span",{children:"Email: "}),"info@Example.com"]}),Object(d.jsxs)("div",{className:"contact__text contact__text__line",children:[Object(d.jsx)("span",{children:"Fax: "}),"+44 987 065 909"]})]}),Object(d.jsx)(x.a,{className:"col-12 col-md-6 col-lg-7 offset-md-1",children:Object(d.jsxs)(y.a,{children:[Object(d.jsxs)(m.a,{className:"contact__form__row",children:[Object(d.jsx)(x.a,{children:Object(d.jsx)("input",{type:"text",className:"form-control contact__form__text",placeholder:"Your Name"})}),Object(d.jsx)(x.a,{children:Object(d.jsx)("input",{type:"email",className:"form-control contact__form__text",placeholder:"Your Email"})})]}),Object(d.jsx)(m.a,{className:"contact__form__row",children:Object(d.jsx)(x.a,{children:Object(d.jsx)("input",{type:"text",className:"form-control contact__form__text",placeholder:"Your Title"})})}),Object(d.jsx)(m.a,{className:"contact__form__row",children:Object(d.jsx)(x.a,{children:Object(d.jsx)("textarea",{className:"form-control contact__form__text",placeholder:"Your Comment",rows:"5"})})}),Object(d.jsx)(m.a,{className:"contact__form__row",children:Object(d.jsx)(x.a,{children:Object(d.jsx)("button",{type:"submit",className:"btn btn-primary contact__submitBtn",children:"Send Message"})})})]})})]})})}),Object(d.jsx)("section",{className:"contact__map",children:Object(d.jsx)(o.a,{fluid:!0,children:Object(d.jsx)(m.a,{children:Object(d.jsx)(x.a,{className:"g-0 contact__map__container",children:Object(d.jsx)(A.a,{height:300,defaultCenter:[29.60865,-95.22981],defaultZoom:15,children:Object(d.jsx)(A.b,{width:30,color:"#21bfb9",anchor:[29.60865,-95.22981]})})})})})})]})}var C=t(38),G=t(6);var S=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(_.a,{children:[Object(d.jsx)(b,{}),Object(d.jsxs)(G.c,{children:[Object(d.jsx)(G.a,{path:"/design-studio-site",exact:!0,component:v}),Object(d.jsx)(G.a,{path:"/about",component:w}),Object(d.jsx)(G.a,{path:"/contact",component:E}),Object(d.jsx)(G.a,{path:"/work/:id",component:C.a})]}),Object(d.jsx)(g,{})]})})},B=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,61)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,n=c.getLCP,l=c.getTTFB;t(e),s(e),a(e),n(e),l(e)}))};l.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),B()}},[[55,1,2]]]);
//# sourceMappingURL=main.91b91e47.chunk.js.map