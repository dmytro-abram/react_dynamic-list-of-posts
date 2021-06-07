(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(5),r=n.n(o),s=n(1),l=(n(13),n(14),n(15),n(6)),u=n.n(l),m=function(e){var t=e.posts,n=e.selectedPostId,a=e.setSelectPost;return c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),0!==t.length?c.a.createElement("ul",{className:"PostsList__list"},t.map((function(e){return c.a.createElement("li",{key:e.id,className:"PostsList__item"},c.a.createElement("div",null,c.a.createElement("b",null,"[User #".concat(e.userId,"]:")," "),e.title),c.a.createElement("button",{type:"button",className:u()({PostList__button:!0,button:!0,button_active:n===e.id}),onClick:function(){a(e.id)}},n===e.id?"Close":"Open"))}))):"No user posts")},i=n(7),d=(n(16),function(e){var t=e.onAdd,n=Object(a.useState)(""),o=Object(s.a)(n,2),r=o[0],l=o[1],u=Object(a.useState)(""),m=Object(s.a)(u,2),i=m[0],d=m[1],f=Object(a.useState)(""),p=Object(s.a)(f,2),E=p[0],b=p[1],_=function(){l(""),d(""),b("")};return c.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),t(r,i,E),_()}},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:r,onChange:function(e){var t=e.target;return l(t.value)},required:!0})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:i,onChange:function(e){var t=e.target;return d(t.value)},required:!0})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:E,onChange:function(e){var t=e.target;return b(t.value)},required:!0})),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),f=(n(17),function(){return c.a.createElement("div",{className:"Loader"},c.a.createElement("div",{className:"Loader__content"}))});n(18);function p(e,t){return fetch("".concat("https://mate-api.herokuapp.com").concat(e),t).then((function(e){return e.json()})).then((function(e){return e.data}))}function E(e){return p("/comments/".concat(e),{method:"DELETE"})}function b(e){return t=e,p("/comments",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)});var t}var _=function(){return p("/posts")};var v=function(e){var t=e.selectedPostId,n=Object(a.useState)(null),o=Object(s.a)(n,2),r=o[0],l=o[1],u=Object(a.useState)(null),m=Object(s.a)(u,2),_=m[0],v=m[1],h=Object(a.useState)(!1),N=Object(s.a)(h,2),O=N[0],j=N[1];Object(a.useEffect)((function(){var e;(e=t,p("/posts/".concat(e))).then((function(e){return l(e)})),v(null),function(e){return p("/comments?postId=".concat(e))}(t).then((function(e){return v(e)}))}),[t]);return c.a.createElement("div",{className:"PostDetails"},c.a.createElement("h2",null,"Post details:"),r?c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("p",null,r.title)),_?c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"PostDetails__comments"},0===_.length?"No comments yet":c.a.createElement("button",{type:"button",className:"button",onClick:function(){j((function(e){return!e}))}},O?"Show ".concat(_.length," comments"):"Hide ".concat(_.length," comments")),!O&&c.a.createElement("ul",{className:"PostDetails__list"},_.map((function(e){return c.a.createElement("li",{className:"PostDetails__list-item",key:e.id},c.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){var t;E(t=e.id).then((function(){v((function(e){return e.filter((function(e){return e.id!==t}))}))}))}},"X"),c.a.createElement("p",null,e.name))})))),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(d,{onAdd:function(e,n,a){b({name:e,email:n,body:a,postId:t}).then((function(e){v((function(t){return[].concat(Object(i.a)(t),[e])}))}))}})))):c.a.createElement(f,null)):c.a.createElement(f,null))},h=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)([]),l=Object(s.a)(r,2),u=l[0],i=l[1],d=Object(a.useState)(0),f=Object(s.a)(d,2),E=f[0],b=f[1];Object(a.useEffect)((function(){_().then((function(e){return o(e)})),p("/users").then((function(e){return i(e)}))}),[]);return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector",onChange:function(e){var t,n=e.target;0===+n.value&&_().then((function(e){return o(e)})),(t=n.value,p("/posts?userId=".concat(t))).then((function(e){return o(e)}))}},c.a.createElement("option",{value:"0"},"All users"),u.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.name)}))))),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(m,{posts:n,selectedPostId:E,setSelectPost:function(e){return b(e===E?0:e)}})),c.a.createElement("div",{className:"App__content"},E?c.a.createElement(v,{selectedPostId:E}):"No selected post")))};r.a.render(c.a.createElement(h,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.0c7d5c07.chunk.js.map