"use strict";(self.webpackChunkchatapp=self.webpackChunkchatapp||[]).push([[129],{4129:function(n,e,r){r.r(e);var a,t=r(168),A=r(4942),o=r(1413),s=r(4165),c=r(5861),i=r(9439),u=r(2791),d=r(7689),p=r(1087),l=r(6444),m=(r(6949),r(8174)),b=(r(5462),r(2388)),R=r(1276),g=r(184),v=l.ZP.div(a||(a=(0,t.Z)(["\n\n  height: 100vh;\n  width: 100vw;\n  background-color: #07070c;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n\n  .brand{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n\n    img{\n      height: 3rem;\n    }\n    h1{\n      color: white;\n      text-transform: uppercase;\n    }\n  }\n\n\n  form{\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    background-color: #0000076;\n    padding: 3rem 5rem;\n    border-radius: 2rem;\n\n    input{\n      background-color: transparent;\n      padding: 1rem;\n      border: 0.1rem solid #4e0eff;\n      border-radius: 0.4rem;\n      color: white;\n      width: 100%;\n      font-size: 1rem;\n      &:focus{\n        border: 0.1rem solid #997af0;\n        outline: none;\n      }\n    }\n    button{\n      background-color: #997af0;\n      color: white;\n      padding: 1rem 2rem;\n      border: none;\n      font-weight: bold;\n      cursor: pointer;\n      border-radius: 0.4rem;\n      font-size: 1rem;\n      text-transform: uppercase;\n      transition: 0.5s ease-in-out;\n      &:hover{\n        background-color: #4e3eff;\n      }\n    }\n\n    span{\n      color: white;\n      text-transform: uppercase;\n      text-align: center;\n      a{\n        color: #4e8eff;\n        text-decoration: none;\n        font-weight: bold;\n      }\n    }\n\n  }\n\n"])));e.default=function(){var n=(0,d.s0)(),e=(0,u.useState)({username:"",userpassword:""}),r=(0,i.Z)(e,2),a=r[0],t=r[1],l=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(r){var t,A,o,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),!f()){e.next=9;break}return t=a.username,A=a.userpassword,e.next=5,b.Z.post(R.VU,{username:t,userpassword:A});case 5:o=e.sent,!1===(c=o.data).status&&m.Am.error(c.msg,Z),!0===c.status&&(localStorage.setItem("chat-app-user",JSON.stringify(c.user)),n("/"));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){localStorage.getItem("chat-app-user")&&n("/")}),[]);var Z={position:"bottom-right",autoClose:5e3,pauseOnHover:!0,draggable:!0,theme:"dark"},f=function(){var n=a.username,e=a.userpassword;return""===n?(m.Am.error("Username is required",Z),!1):""!==e||(m.Am.error("Password is required",Z),!1)},j=function(n){t((0,o.Z)((0,o.Z)({},a),{},(0,A.Z)({},n.target.name,n.target.value)))};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(v,{children:(0,g.jsxs)("form",{onSubmit:function(n){l(n)},children:[(0,g.jsx)("div",{className:"brand",children:(0,g.jsx)("h1",{className:"brand_name",children:"Liffy"})}),(0,g.jsx)("input",{type:"text",name:"username",id:"username",placeholder:"Username",onChange:function(n){j(n)}}),(0,g.jsx)("input",{type:"password",name:"userpassword",id:"userpassword",placeholder:"Password",onChange:function(n){j(n)}}),(0,g.jsx)("button",{type:"submit",children:" Login "}),(0,g.jsxs)("span",{children:[" dont't have an account ? ",(0,g.jsx)(p.rU,{to:"/register",children:" Register "})]})]})}),(0,g.jsx)(m.Ix,{})]})}},1276:function(n,e,r){r.d(e,{JC:function(){return i},TC:function(){return o},VU:function(){return A},X0:function(){return t},ho:function(){return a},pK:function(){return s},qr:function(){return u},w3:function(){return c}});var a="https://chatapp-mbz0.onrender.com",t="".concat(a,"/api/register"),A="".concat(a,"/api/login"),o="".concat(a,"/api/setavatar"),s="".concat(a,"/api/allusers"),c="".concat(a,"/api/allallusers"),i="".concat(a,"/message/addmsg"),u="".concat(a,"/message/getallmsg")},6949:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUYAAABjCAYAAADnwanBAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAEZ0FNQQAAsY8L/GEFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEcWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTEyLTI0PC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmQzMDAxMWU3LWE2MGItNGY5Mi04NzI2LThmNTU3ZjkwNzJiZDwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5sRUZUeSAtIDE8L3JkZjpsaT4KICAgPC9yZGY6QWx0PgogIDwvZGM6dGl0bGU+CiA8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"}}]);
//# sourceMappingURL=129.94243870.chunk.js.map