(this.webpackJsonpcrud=this.webpackJsonpcrud||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),r=a(8),i=a.n(r),s=(a(26),a(10)),l=a(11),d=a(18),o=a(19),j=a(21),h=a(20),b=(a.p,a(27),a(28),a(41)),O=a(42),u=a(43),m=a(48),x=a(44),f=a(45),p=a(46),g=a(47),C=a(1),y=[{id:1,character:"Naruto",anime:"Naruto"},{id:2,character:"Goku",anime:"Dragon Ball"},{id:3,character:"Kenshin Himura",anime:"Ruroni Kenshin"},{id:4,character:"Monkey D. Luffy",anime:"One Piece"},{id:5,character:"Edward Elric",anime:"Fullmetal Alchemist: Brotherhood"},{id:6,character:"Seto Kaiba",anime:"Yu-Gi-Oh!"}],I=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={data:y,form:{id:"",character:"",anime:""},modalInsert:!1,modalEdit:!1},e.handleChange=function(t){e.setState({form:Object(l.a)(Object(l.a)({},e.state.form),{},Object(s.a)({},t.target.name,t.target.value))})},e.showModalInsert=function(){e.setState({modalInsert:!0})},e.closeModalInsert=function(){e.setState({modalInsert:!1})},e.showModalEdit=function(t){e.setState({modalEdit:!0,form:t})},e.closeModalEdit=function(){e.setState({modalEdit:!1})},e.Insert=function(){var t=Object(l.a)({},e.state.form);t.id=e.state.data.length+1;var a=e.state.data;a.push(t),e.setState({data:a,modalInsert:!1})},e.Edit=function(t){var a=0,n=e.state.data;n.map((function(e){t.id==e.id&&(n[a].character=t.character,n[a].anime=t.anime),a++})),e.setState({data:n,modalEdit:!1})},e.Delete=function(t){if(window.confirm("Are you sure deleting the register "+t.id)){var a=0,n=e.state.data;n.map((function(e){e.id==t.id&&n.splice(a,1),a++})),e.setState({data:n})}},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(b.a,{children:[Object(C.jsx)("br",{}),Object(C.jsx)(O.a,{color:"success",onClick:function(){return e.showModalInsert()},children:"Insert new character"}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsxs)(u.a,{children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"Id"}),Object(C.jsx)("th",{children:"Character"}),Object(C.jsx)("th",{children:"Anime"}),Object(C.jsx)("th",{children:"Actions"})]})}),Object(C.jsx)("tbody",{children:this.state.data.map((function(t){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:t.id}),Object(C.jsx)("td",{children:t.character}),Object(C.jsx)("td",{children:t.anime}),Object(C.jsxs)("td",{children:[Object(C.jsx)(O.a,{color:"primary",onClick:function(){return e.showModalEdit(t)},children:"Edit"}),"  ",Object(C.jsx)(O.a,{color:"danger",onClick:function(){return e.Delete(t)},children:"Delete"})]})]})}))})]})]}),Object(C.jsxs)(m.a,{isOpen:this.state.modalInsert,children:[Object(C.jsx)(x.a,{children:Object(C.jsx)("div",{children:Object(C.jsx)("h3",{children:"Insert character"})})}),Object(C.jsxs)(f.a,{children:[Object(C.jsxs)(p.a,{children:[Object(C.jsx)("label",{children:"Id:"}),Object(C.jsx)("input",{className:"form-control",readOnly:!0,type:"text",value:this.state.data.length+1})]}),Object(C.jsxs)(p.a,{children:[Object(C.jsx)("label",{children:"Character:"}),Object(C.jsx)("input",{className:"form-control",name:"character",type:"text",onChange:this.handleChange})]}),Object(C.jsxs)(p.a,{children:[Object(C.jsx)("label",{children:"Anime:"}),Object(C.jsx)("input",{className:"form-control",name:"anime",type:"text",onChange:this.handleChange})]})]}),Object(C.jsxs)(g.a,{children:[Object(C.jsx)(O.a,{color:"primary",onClick:function(){return e.Insert()},children:"Insert"}),Object(C.jsx)(O.a,{color:"danger",onClick:function(){return e.closeModalInsert()},children:"Cancel"})]})]}),Object(C.jsxs)(m.a,{isOpen:this.state.modalEdit,children:[Object(C.jsx)(x.a,{children:Object(C.jsx)("div",{children:Object(C.jsx)("h3",{children:"Edit character"})})}),Object(C.jsxs)(f.a,{children:[Object(C.jsxs)(p.a,{children:[Object(C.jsx)("label",{children:"Id:"}),Object(C.jsx)("input",{className:"form-control",readOnly:!0,type:"text",value:this.state.form.id})]}),Object(C.jsxs)(p.a,{children:[Object(C.jsx)("label",{children:"Character:"}),Object(C.jsx)("input",{className:"form-control",name:"character",type:"text",onChange:this.handleChange,value:this.state.form.character})]}),Object(C.jsxs)(p.a,{children:[Object(C.jsx)("label",{children:"Anime:"}),Object(C.jsx)("input",{className:"form-control",name:"anime",type:"text",onChange:this.handleChange,value:this.state.form.anime})]})]}),Object(C.jsxs)(g.a,{children:[Object(C.jsx)(O.a,{color:"primary",onClick:function(){return e.Edit(e.state.form)},children:"Edit"}),Object(C.jsx)(O.a,{color:"danger",onClick:function(){return e.closeModalEdit()},children:"Cancel"})]})]})]})}}]),a}(c.a.Component),v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,49)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(I,{})}),document.getElementById("root")),v()}},[[39,1,2]]]);
//# sourceMappingURL=main.9b93f984.chunk.js.map