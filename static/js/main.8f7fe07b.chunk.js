(this["webpackJsonpgoogle-auth"]=this["webpackJsonpgoogle-auth"]||[]).push([[0],[,,,,function(n,e,t){n.exports=t(11)},,,,,function(n,e,t){},function(n,e,t){},function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),i=t(2),c=t.n(i),l=(t(9),t(3)),u=(t(10),function(){var n=Object(o.useState)(null),e=Object(l.a)(n,2),t=e[0],i=e[1];Object(o.useEffect)((function(){var n=function(n){console.log("Initialization Success",n)},e=function(n){console.log("Initialization Error",n)};window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:"155241758703-obd63avhfhh0ugmnmibvuaoc7p8c3jkg.apps.googleusercontent.com"}).then(n,e)}))}),[]);return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Google Authorization"),t?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Hello, ",a.a.createElement("strong",null,t),"!"),a.a.createElement("span",{onClick:function(){window.gapi.auth2.getAuthInstance().signOut().then((function(){i(null)}))}},"Sign Out")):a.a.createElement("span",{onClick:function(){window.gapi.auth2.getAuthInstance().signIn({scope:"profile email"}).then((function(n){i(n.getBasicProfile().getName())}),(function(){return console.log("Auth Error")}))}},"Sign In"))});c.a.render(a.a.createElement(u,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.8f7fe07b.chunk.js.map