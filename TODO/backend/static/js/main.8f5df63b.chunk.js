(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(32),a=n.n(r),o=(n(39),n(9)),i=n(10),j=n(12),l=n(11),h=(n(40),n(0)),u=function(e){var t=e.user;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t.username}),Object(h.jsx)("td",{children:t.first_name}),Object(h.jsx)("td",{children:t.last_name}),Object(h.jsx)("td",{children:t.email})]})},d=function(e){var t=e.users;return Object(h.jsxs)("table",{children:[Object(h.jsx)("th",{children:"Username"}),Object(h.jsx)("th",{children:"First name"}),Object(h.jsx)("th",{children:"Last name"}),Object(h.jsx)("th",{children:"Email"}),t.map((function(e){return Object(h.jsx)(u,{user:e})})),Object(h.jsx)("th",{children:"Username"}),Object(h.jsx)("th",{children:"First name"}),Object(h.jsx)("th",{children:"Last name"}),Object(h.jsx)("th",{children:"Email"})]})},p=n(6),b=function(e){for(var t=e.menu_items,n=[Object(h.jsx)("p",{children:"Menu"})],s=0;s<t.length;s++)n.push(Object(h.jsx)("p",{children:Object(h.jsx)(p.b,{to:t[s][1],children:t[s][0]})}));return n},O=function(e){for(var t=e.footer_items,n=[],s=0;s<t.length;s++)n.push(Object(h.jsx)("p",{children:t[s]}));return n},g=n(13),x=n.n(g),m=n(2),f="",v=new(function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"handleChange",value:function(e){f=e.target.value,this.setState({project_name:f}),console.log(f)}},{key:"handleSubmit",value:function(e){console.log(f),console.log(this.props),e.preventDefault()}}]),n}(c.a.Component)),_=function(e){var t=e.project,n=e.delete_project;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)(p.b,{to:"/projects/update/".concat(t.id),children:t.name})}),Object(h.jsx)("td",{children:t.git_link}),Object(h.jsx)("td",{children:Object(h.jsxs)(p.b,{to:"/projects/details/".concat(t.id),children:[" ",t.working_group.length," member(s)"]})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{onClick:function(){return n(t.id)},type:"button",children:"delete"})})]})},k=function(e){var t=e.projects,n=e.delete_project,s=e.project_search;return Object(h.jsxs)("p",{children:[Object(h.jsxs)("form",{onSubmit:function(e){return v.handleSubmit(e)},children:[Object(h.jsx)("input",{type:"text",name:"project_name",placeholder:"project name",onChange:function(e){return v.handleChange(e)}}),Object(h.jsx)("button",{onClick:function(){return s(f)},type:"button",children:"search"})]}),Object(h.jsxs)("table",{children:[Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Git link"}),Object(h.jsx)("th",{children:"Members of working group"}),Object(h.jsx)("th",{children:"Delete"}),t.map((function(e){return Object(h.jsx)(_,{project:e,delete_project:n})})),Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Git link"}),Object(h.jsx)("th",{children:"Members of working group"}),Object(h.jsx)("th",{children:"Delete"})]})]})},y=function(e){var t=e.todo,n=e.delete_todo,s="";return s=t.isActive?"\u0432 \u0440\u0430\u0431\u043e\u0442\u0435":"\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d",console.log(t.project),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t.name}),Object(h.jsx)("td",{children:t.project}),Object(h.jsx)("td",{children:t.description}),Object(h.jsx)("td",{children:t.createDatetime}),Object(h.jsx)("td",{children:t.updateDatetime}),Object(h.jsx)("td",{children:t.createdBy}),Object(h.jsx)("td",{children:t.assignedTo}),Object(h.jsx)("td",{children:s}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{onClick:function(){return n(t.id)},type:"button",children:"delete"})})]})},C=function(e){var t=e.todos,n=e.delete_todo;return Object(h.jsxs)("table",{children:[Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Project"}),Object(h.jsx)("th",{children:"Description"}),Object(h.jsx)("th",{children:"Create_datetime"}),Object(h.jsx)("th",{children:"Update datetime"}),Object(h.jsx)("th",{children:"Created by"}),Object(h.jsx)("th",{children:"Assigned to"}),Object(h.jsx)("th",{children:"Is active"}),Object(h.jsx)("th",{children:"Delete"}),t.map((function(e){return Object(h.jsx)(y,{todo:e,delete_todo:n})})),Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Project"}),Object(h.jsx)("th",{children:"Description"}),Object(h.jsx)("th",{children:"Create_datetime"}),Object(h.jsx)("th",{children:"Update datetime"}),Object(h.jsx)("th",{children:"Created by"}),Object(h.jsx)("th",{children:"Assigned to"}),Object(h.jsx)("th",{children:"Is active"}),Object(h.jsx)("th",{children:"Delete"})]})},S=function(e){var t=e.location;return Object(h.jsxs)("table",{children:["404: page ",t.pathname," does not exist"]})},w=function(e){var t=e.user;return console.log(t),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t.username}),Object(h.jsx)("td",{children:t.email})]})},D=function(e){var t=e.projects,n=e.users,s=Object(m.g)().id,c=[];console.log(t);var r=t.filter((function(e){return e.id==s}));console.log(r);for(var a=function(e){c.push(n.filter((function(t){return t.id==r[0].working_group[e]}))[0])},o=0;o<r[0].working_group.length;o++)a(o);return console.log(c),Object(h.jsxs)("table",{children:[Object(h.jsx)("th",{children:"Username"}),Object(h.jsx)("th",{children:"Email"}),c.map((function(e){return Object(h.jsx)(w,{user:e})})),Object(h.jsx)("th",{children:"Username"}),Object(h.jsx)("th",{children:"Email"})]})},N=n(14),T=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={login:"",password:""},s}return Object(i.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){this.props.get_token(this.state.login,this.state.password),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(h.jsx)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:Object(h.jsx)("div",{className:"div2",children:Object(h.jsxs)("span",{children:[Object(h.jsx)("input",{type:"text",name:"login",placeholder:"login",value:this.state.login,onChange:function(t){return e.handleChange(t)}}),Object(h.jsx)("input",{type:"password",name:"password",placeholder:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),Object(h.jsx)("input",{type:"submit",value:"Login"})]})})})}}]),n}(c.a.Component),P=n(17),U=n.n(P),L=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={name:"",project:2,description:"",created_by:1,assigned_to:1},s}return Object(i.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value)),console.log(e.target.value)}},{key:"handleSubmit",value:function(e){this.props.create_todo(this.state.name,this.state.description,this.state.project,this.state.created_by,this.state.assigned_to),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(h.jsx)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:Object(h.jsxs)("div",{className:"div2",children:[Object(h.jsx)("p",{children:"Create new Todo:"}),Object(h.jsxs)("p",{children:["Todo Name",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"name",placeholder:"ToDo name",value:this.state.name,onChange:function(t){return e.handleChange(t)}})]}),Object(h.jsxs)("p",{children:["Description",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"description",placeholder:"Description",value:this.state.description,onChange:function(t){return e.handleChange(t)}})]}),Object(h.jsxs)("p",{children:["Project",Object(h.jsx)("br",{}),Object(h.jsx)("select",{name:"project",onChange:function(t){return e.handleChange(t)},children:this.props.projects.map((function(e){return Object(h.jsxs)("option",{value:e.id,children:[" ",e.name]})}))})]}),Object(h.jsxs)("p",{children:["Assigned to",Object(h.jsx)("br",{}),Object(h.jsxs)("select",{name:"assigned_to",onChange:function(t){return e.handleChange(t)},children:[this.props.users.map((function(e){return Object(h.jsxs)("option",{value:e.id,children:[" ",e.username]})})),console.log(this.props.users)]})]}),Object(h.jsxs)("p",{children:["Created by",Object(h.jsx)("br",{}),Object(h.jsx)("select",{name:"created_by",onChange:function(t){return e.handleChange(t)},children:this.props.users.map((function(e){return Object(h.jsxs)("option",{value:e.id,children:[" ",e.username]})}))})]}),Object(h.jsx)("p",{children:Object(h.jsx)("input",{type:"submit",value:"Save"})})]})})}}]),n}(c.a.Component),F=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={name:"",git_link:"",working_group:[]},s}return Object(i.a)(n,[{key:"handleChange",value:function(e){if("working_group"===e.target.name)for(var t=[],n=0;n<e.target.selectedOptions.length;n++)t.push(e.target.selectedOptions.item(n).value),this.setState(Object(N.a)({},e.target.name,t));else this.setState(Object(N.a)({},e.target.name,e.target.value));console.log(e.target.name),console.log(e.target.value)}},{key:"handleSubmit",value:function(e){console.log(this.state.name),console.log(this.state.git_link),console.log(this.state.working_group),this.props.create_project(this.state.name,this.state.git_link,this.state.working_group),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(h.jsx)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:Object(h.jsxs)("div",{className:"div2",children:[Object(h.jsx)("p",{children:"Create new Project:"}),Object(h.jsxs)("p",{children:["Todo Name",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"name",placeholder:"ToDo name",value:this.state.name,onChange:function(t){return e.handleChange(t)}})]}),Object(h.jsxs)("p",{children:["Git link",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"git_link",placeholder:"Git link",value:this.state.description,onChange:function(t){return e.handleChange(t)}})]}),Object(h.jsxs)("p",{children:["Working group",Object(h.jsx)("br",{}),Object(h.jsx)("select",{name:"working_group",multiple:!0,onChange:function(t){return e.handleChange(t)},children:this.props.users.map((function(e){return Object(h.jsxs)("option",{value:e.id,children:[" ",e.username]})}))})]}),Object(h.jsx)("p",{children:Object(h.jsx)("input",{type:"submit",value:"Save"})})]})})}}]),n}(c.a.Component),G=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var s;Object(o.a)(this,n),s=t.call(this,e),console.log(e),console.log(e.projects);var c=s.props.match.params.id;console.log(c);var r=e.projects.find((function(e){return e.id==c}));return console.log(r),s.state={name:r.name,git_link:r.git_link,working_group:r.working_group,id:r.id},s}return Object(i.a)(n,[{key:"handleChange",value:function(e){if("working_group"===e.target.name)for(var t=[],n=0;n<e.target.selectedOptions.length;n++)t.push(e.target.selectedOptions.item(n).value),this.setState(Object(N.a)({},e.target.name,t));else this.setState(Object(N.a)({},e.target.name,e.target.value));console.log(e.target.name),console.log(e.target.value)}},{key:"handleSubmit",value:function(e){console.log(this.state.name),console.log(this.state.git_link),console.log(this.state.working_group),this.props.update_project(this.state.id,this.state.name,this.state.git_link,this.state.working_group),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(h.jsx)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:Object(h.jsxs)("div",{className:"div2",children:[Object(h.jsx)("p",{children:"Create new Project:"}),Object(h.jsxs)("p",{children:["Todo Name",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"name",placeholder:"ToDo name",value:this.state.name,onChange:function(t){return e.handleChange(t)}})]}),Object(h.jsxs)("p",{children:["Git link",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"git_link",placeholder:"Git link",value:this.state.git_link,onChange:function(t){return e.handleChange(t)}})]}),Object(h.jsxs)("p",{children:["Working group",Object(h.jsx)("br",{}),Object(h.jsx)("select",{name:"working_group",multiple:!0,defaultValue:this.state.working_group,onChange:function(t){return e.handleChange(t)},children:this.props.users.map((function(e){return Object(h.jsxs)("option",{value:e.id,children:[" ",e.username]})}))})]}),Object(h.jsx)("p",{children:Object(h.jsx)("input",{type:"submit",value:"Update"})})]})})}}]),n}(c.a.Component),A=Object(m.h)(G),E=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={users:[],menu_items:[["Users","/users"],["Projects","/projects"],["ToDos","/todos"],["Create project","/projects/create"],["Create ToDo","/todos/create"]],footer_items:["TODO ltd.","2021"],projects:[],todos:[],token:"",username:"",todo_project:{}},s}return Object(i.a)(n,[{key:"delete_project",value:function(e){var t=this,n=this.get_headers();x.a.delete("http://127.0.0.1:8000/api/projects/".concat(e),{headers:n}).then((function(e){t.load_data()})).catch((function(e){console.log(e),t.setState({projects:[]})}))}},{key:"create_project",value:function(e,t,n){var s=this,c=this.get_headers(),r={name:e,git_link:t,working_group:n};x.a.post("http://127.0.0.1:8000/api/projects/",r,{headers:c}).then((function(e){s.load_data()})).catch((function(e){console.log(e)}))}},{key:"update_project",value:function(e,t,n,s){var c=this,r=this.get_headers(),a={name:t,git_link:n,working_group:s};x.a.patch("http://127.0.0.1:8000/api/projects/".concat(e,"/"),a,{headers:r}).then((function(e){c.load_data()})).catch((function(e){console.log(e)}))}},{key:"delete_todo",value:function(e){var t=this,n=this.get_headers();x.a.delete("http://127.0.0.1:8000/api/todos/".concat(e),{headers:n}).then((function(e){t.load_data()})).catch((function(e){console.log(e),t.setState({projects:[]})}))}},{key:"create_todo",value:function(e,t,n,s,c){var r=this,a=this.get_headers(),o={name:e,project:n,description:t,created_by:s,assigned_to:c,is_active:!0};x.a.post("http://127.0.0.1:8000/api/todos/",o,{headers:a}).then((function(e){r.load_data()})).catch((function(e){console.log(e)}))}},{key:"project_search",value:function(e){this.load_data(e)}},{key:"set_token",value:function(e){var t=this;(new U.a).set("token",e),this.setState({token:e},(function(){return t.load_data()}))}},{key:"set_username",value:function(e){var t=this;(new U.a).set("username",e),this.setState({username:e},(function(){return t.load_data()}))}},{key:"is_auth",value:function(){return!!this.state.token}},{key:"logout",value:function(){this.set_token(""),this.set_username("")}},{key:"load_data",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=this.get_headers();x.a.get("http://127.0.0.1:8000/api/users/",{headers:n}).then((function(t){var n=t.data;e.setState({users:n})})).catch((function(t){console.log(t),e.setState({users:[]})})),""===t?x.a.get("http://127.0.0.1:8000/api/projects/",{headers:n}).then((function(t){var n=t.data;e.setState({projects:n})})).catch((function(t){console.log(t),e.setState({projects:[]})})):x.a.get("http://127.0.0.1:8000/filters/project_name/?project_name=".concat(t),{headers:n}).then((function(t){var n=t.data;e.setState({projects:n})})).catch((function(t){console.log(t),e.setState({projects:[]})})),x.a.get("http://127.0.0.1:8000/api/todos/",{headers:n}).then((function(t){var n=t.data;e.setState({todos:n})})).catch((function(t){console.log(t),e.setState({todos:[]})}))}},{key:"get_token_from_storage",value:function(){var e=this,t=(new U.a).get("token");this.setState({token:t},(function(){return e.load_data()}))}},{key:"get_username_from_storage",value:function(){var e=this,t=(new U.a).get("username");this.setState({username:t},(function(){return e.load_data()}))}},{key:"get_token",value:function(e,t){var n,s=this;this.setState({username:e},(function(){return s.load_data()})),n={username:e,password:t},x.a.post("http://127.0.0.1:8000/api-token-auth/",n).then((function(t){s.set_token(t.data.token),s.set_username(e)})).catch((function(e){return alert(e)}))}},{key:"get_headers",value:function(){var e={"Content-Type":"application/json"};return this.is_auth()&&(e.Authorization="Token "+this.state.token),e}},{key:"componentDidMount",value:function(){this.get_token_from_storage(),this.get_username_from_storage()}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"parent",children:Object(h.jsxs)(p.a,{children:[Object(h.jsx)("div",{className:"div1",children:Object(h.jsx)("p",{children:"TODO:"})}),Object(h.jsx)("div",{className:"div2",children:Object(h.jsxs)("span",{children:[this.is_auth()?Object(h.jsxs)("p",{children:[this.state.username,Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(){return e.logout()},children:"Logout"})]}):Object(h.jsx)("p",{children:Object(h.jsx)(p.b,{to:"/login",children:"Login"})}),Object(h.jsx)("br",{}),Object(h.jsx)(b,{menu_items:this.state.menu_items})]})}),Object(h.jsx)("div",{className:"div3",children:Object(h.jsx)("span",{children:Object(h.jsxs)(m.d,{children:[Object(h.jsx)(m.b,{exact:!0,path:"/users",component:function(){return Object(h.jsx)(d,{users:e.state.users})}}),Object(h.jsx)(m.b,{exact:!0,path:"/projects",component:function(){return Object(h.jsx)(k,{projects:e.state.projects,delete_project:function(t){return e.delete_project(t)},project_search:function(t){return e.load_data(t)}})}}),Object(h.jsx)(m.b,{exact:!0,path:"/projects/create",component:function(){return Object(h.jsx)(F,{projects:e.state.projects,users:e.state.users,create_project:function(t,n,s){return e.create_project(t,n,s)}})}}),Object(h.jsx)(m.b,{path:"/projects/details/:id",children:Object(h.jsx)(D,{projects:this.state.projects,users:this.state.users})}),Object(h.jsx)(m.b,{exact:!0,path:"/projects/update/:id",component:function(){return Object(h.jsx)(A,{projects:e.state.projects,users:e.state.users,update_project:function(t,n,s,c){return e.update_project(t,n,s,c)}})}}),Object(h.jsx)(m.b,{exact:!0,path:"/todos",component:function(){return Object(h.jsx)(C,{todos:e.state.todos,delete_todo:function(t){return e.delete_todo(t)}})}}),Object(h.jsx)(m.b,{exact:!0,path:"/todos/create",component:function(){return Object(h.jsx)(L,{projects:e.state.projects,users:e.state.users,create_todo:function(t,n,s,c,r){return e.create_todo(t,n,s,c,r)}})}}),this.is_auth()?Object(h.jsx)("div",{className:"div2",children:Object(h.jsxs)("span",{children:[" You are logged as ",this.state.username]})}):Object(h.jsx)(m.b,{exact:!0,path:"/login",component:function(){return Object(h.jsx)(T,{get_token:function(t,n){return e.get_token(t,n)}})}}),Object(h.jsx)(m.a,{from:"/",to:"/users"}),Object(h.jsx)(m.b,{component:S})]})})}),Object(h.jsx)("div",{className:"div4",children:Object(h.jsx)(O,{footer_items:this.state.footer_items})})]})})}}]),n}(c.a.Component),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(E,{})}),document.getElementById("root")),M()}},[[70,1,2]]]);
//# sourceMappingURL=main.8f5df63b.chunk.js.map