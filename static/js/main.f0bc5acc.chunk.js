(this.webpackJsonpmwitter=this.webpackJsonpmwitter||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(32),s=n.n(r),i=n(10),o=n(22),u=n(6),l=n(8),j=n.n(l),b=n(16),d=n(24);n(40),n(51),n(52);d.a.initializeApp({apiKey:"AIzaSyDHQf6V0wOEbrS3lrOoPjFQot73VCrAsZ0",authDomain:"mwitter-8694a.firebaseapp.com",projectId:"mwitter-8694a",storageBucket:"mwitter-8694a.appspot.com",messagingSenderId:"936318456386",appId:"1:936318456386:web:02a9efb242c5f72c1993db"});var p=d.a,f=d.a.auth(),m=d.a.firestore(),O=d.a.storage(),h=n(1),x=function(e){var t=e.userObj,n=e.refreshUser,c=Object(u.f)(),r=Object(a.useState)(t.displayName),s=Object(i.a)(r,2),o=s[0],l=s[1],d=function(){var e=Object(b.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("mweets").where("creatorId","==",t.uid).orderBy("createdAt").get();case 2:n=e.sent,console.log(n.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){d()}),[]);var p=function(){var e=Object(b.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.displayName===o){e.next=5;break}return e.next=4,t.updateProfile({displayName:o});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("form",{onSubmit:p,className:"profileForm",children:[Object(h.jsx)("input",{type:"text",placeholder:"Display name",onChange:function(e){var t=e.target.value;l(t)},value:o,autoFocus:!0,className:"formInput"}),Object(h.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(h.jsx)("span",{onClick:function(){f.signOut(),c.push("/"),n()},className:"formBtn cancelBtn logOut",children:"Log Out"})]})},v=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(!0),d=Object(i.a)(l,2),p=d[0],m=d[1],O=Object(a.useState)(""),x=Object(i.a)(O,2),v=x[0],g=x[1],w=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&u(a)},y=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,f.createUserWithEmailAndPassword(n,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,f.signInWithEmailAndPassword(n,o);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{onSubmit:y,className:"container",children:[Object(h.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:w,className:"authInput"}),Object(h.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:w,className:"authInput"}),Object(h.jsx)("input",{type:"submit",className:"authInput authSubmit",value:p?"Create Account":"Login"}),v&&Object(h.jsx)("span",{className:"authError",children:v})]}),Object(h.jsx)("span",{onClick:function(){return m((function(e){return!e}))},className:"authSwitch",children:p?"sign in":"sign up"})]})},g=n(12),w=n(23),y=function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new p.auth.GoogleAuthProvider:"github"===n&&(a=new p.auth.GithubAuthProvider),e.next=4,f.signInWithPopup(a);case 4:c=e.sent,console.log(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"authContainer",children:[Object(h.jsx)(g.a,{icon:w.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(h.jsx)(v,{}),Object(h.jsxs)("div",{className:"authBtn",children:[Object(h.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(h.jsx)(g.a,{icon:w.b})]}),Object(h.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(h.jsx)(g.a,{icon:w.a})]})]})]})},N=n(34),k=n(19),S=function(e){var t=e.mweetObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)(t.text),l=Object(i.a)(u,2),d=l[0],p=l[1],f=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc9c4\uc9dc\ub8e8?")){e.next=6;break}return e.next=4,m.doc("mweets/".concat(t.id)).delete();case 4:return e.next=6,O.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){o((function(e){return!e}))},v=function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,m.doc("mweets/".concat(t.id)).update({text:d});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"mweet",children:s?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{onSubmit:v,className:"container mweetEdit",children:[Object(h.jsx)("input",{type:"text",value:d,placeholder:"Edit your mweet",onChange:function(e){var t=e.target.value;p(t)},required:!0,autoFocus:!0,className:"formInput"}),Object(h.jsx)("input",{type:"submit",value:"Update Mweet",className:"formBtn"})]}),Object(h.jsx)("button",{onClick:x,className:"formBtn cancelBtn",children:"cancel"})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(h.jsx)("img",{src:t.attachmentUrl}),n&&Object(h.jsxs)("div",{className:"mweet__actions",children:[Object(h.jsx)("span",{onClick:f,children:Object(h.jsx)(g.a,{icon:k.d})}),Object(h.jsx)("span",{onClick:x,children:Object(h.jsx)(g.a,{icon:k.a})})]})]})})},C=n(54),I=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],d=u[1],p=function(){var e=Object(b.a)(j.a.mark((function e(n){var a,c,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===l){e.next=12;break}return c=O.ref().child("".concat(t.uid,"/").concat(Object(C.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return o={text:r,createAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,m.collection("mweets").add(o);case 15:s(""),d("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("form",{onSubmit:p,className:"factoryForm",children:[Object(h.jsxs)("div",{className:"factoryInput__container",children:[Object(h.jsx)("input",{type:"text",placeholder:"what's on your mind",maxLength:120,value:r,onChange:function(e){var t=e.target.value;s(t)},className:"factoryInput__input"}),Object(h.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(h.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(h.jsx)("span",{children:"Add photos"}),Object(h.jsx)(g.a,{icon:k.b})]}),Object(h.jsx)("input",{id:"attach-file",type:"file",accept:"imaga/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;console.log(e),d(t)},n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(h.jsxs)("div",{className:"factoryForm__attachment",children:[Object(h.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(h.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return d("")},children:[Object(h.jsx)("span",{children:"Remove"}),Object(h.jsx)(g.a,{icon:k.c})]})]})]})},A=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){m.collection("mweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(N.a)({id:e.id},e.data())}));s(t),console.log(t)}))}),[]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(I,{userObj:t}),Object(h.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(h.jsx)(S,{mweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},F=function(e){var t=e.userObj;return Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(h.jsx)("li",{children:Object(h.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(h.jsx)(g.a,{icon:w.c,color:"#04AAFF",size:"2x"})})}),Object(h.jsx)("li",{children:Object(h.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(h.jsx)(g.a,{icon:k.e,color:"#04AAFF",size:"2x"}),Object(h.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 profile"):"Profile"})]})})]})})},U=function(e){var t=e.isLoggedin,n=e.userObj,a=e.refreshUser;return Object(h.jsxs)(o.a,{children:[t&&Object(h.jsx)(F,{userObj:n}),Object(h.jsx)(u.c,{children:t?Object(h.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"center",margin:"0",marginTop:80},children:[Object(h.jsx)(u.a,{exact:!0,path:"/",children:Object(h.jsx)(A,{userObj:n})}),Object(h.jsx)(u.a,{exact:!0,path:"/profile",children:Object(h.jsx)(x,{userObj:n,refreshUser:a})})]}):Object(h.jsx)(u.a,{exact:!0,path:"/",children:Object(h.jsx)(y,{})})})]})};var _=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(i.a)(r,2),o=s[0],u=s[1];return Object(a.useEffect)((function(){f.onAuthStateChanged((function(e){u(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),Object(h.jsx)(h.Fragment,{children:n?Object(h.jsx)(U,{refreshUser:function(){console.log(f.currentUser);var e=f.currentUser;u({displayName:e.displayName,uid:e.uid,updataProfile:function(t){return e.updateProfile(t)}})},isLoggedin:Boolean(o),userObj:o}):"initializing..."})};n(49);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.f0bc5acc.chunk.js.map