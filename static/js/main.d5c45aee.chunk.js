(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(8),o=n.n(s),i=(n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))}),a=n(2),h=n(3),l=n(5),b=n(4),j=(n(7),n(0)),u=function(e){var t=e.id,n=e.name,r=e.email;return Object(j.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(j.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:n}),Object(j.jsx)("p",{children:r})]})]})},d=function(e){var t=e.robots,n=t.map((function(e,n){return Object(j.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(j.jsx)("div",{children:n})},f=function(e){e.searchFields;var t=e.searchChange;return Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"text",placeholder:"search robots",onChange:t})})},O=function(e){return Object(j.jsx)("div",{style:{overflowY:"scroll",height:"800px"},children:e.children})},g=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(j.jsx)("h1",{children:"Oops, something went wrong."}):this.props.children}}]),n}(r.Component),p=(n(15),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearch=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(j.jsxs)("div",{className:"tc",children:[Object(j.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(j.jsx)(f,{searchChange:this.onSearch}),Object(j.jsx)(O,{children:Object(j.jsx)(g,{children:Object(j.jsx)(d,{robots:r})})})]}):Object(j.jsx)("h1",{children:"Loading"})}}]),n}(r.Component));o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),i()}},[[16,1,2]]]);
//# sourceMappingURL=main.d5c45aee.chunk.js.map