(function(t){function e(e){for(var n,a,l=e[0],c=e[1],i=e[2],p=0,u=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&u.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,i||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,l=1;l<s.length;l++){var c=s[l];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=s[0]))}return t}var n={},r={app:0},o=[];function a(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=n,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var d=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("64a9"),r=s.n(n);r.a},"56d7":function(t,e,s){"use strict";s.r(e);var n=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("h1",[t._v(" Person overview - retrieved from: "+t._s(t.personListIp))]),s("div",{staticClass:"container"},[s("PersonList",{attrs:{persons:t.persons},on:{"person-selected":function(e){return t.loadDetails(e)}}})],1),s("h1",[t._v(" Person details - retrieved from: "+t._s(t.personDetailIp))]),s("div",{staticClass:"container"},[s("PersonDetails",{attrs:{selected:t.selected}})],1)])},o=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("table",{staticClass:"table table-striped table-bordered table-sm"},[t._m(0),s("tbody",t._l(t.persons,(function(e){return s("tr",{key:e._id,staticClass:"d-flex",on:{click:function(s){return t.selectPerson(e._id)}}},[s("td",{staticClass:"col-5"},[t._v(t._s(e._id))]),s("td",{staticClass:"col-7"},[t._v(t._s(e.name))])])})),0)])])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",{staticClass:"d-flex"},[s("th",{staticClass:"col-5",attrs:{scope:"col"}},[t._v("ID")]),s("th",{staticClass:"col-7",attrs:{scope:"col"}},[t._v("Name")])])])}],c={name:"PersonList",props:{persons:{type:Array}},methods:{selectPerson:function(t){this.$emit("person-selected",t)}}},i=c,d=s("2877"),p=Object(d["a"])(i,a,l,!1,null,"3f14d011",null),u=p.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("table",{staticClass:"table table-bordered table-sm"},[t._m(0),s("tbody",[s("tr",{staticClass:"d-flex"},[s("td",{staticClass:"col-4"},[t._v(t._s(t.selected._id))]),s("td",{staticClass:"col-2"},[t._v(t._s(t.selected.name))]),s("td",{staticClass:"col-2"},[t._v(t._s(t.selected.street))]),s("td",{staticClass:"col-2"},[t._v(t._s(t.selected.city))]),s("td",{staticClass:"col-2"},[t._v(t._s(t.selected.country))])])])])])},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",{staticClass:"d-flex"},[s("th",{staticClass:"col-4",attrs:{scope:"col"}},[t._v("ID")]),s("th",{staticClass:"col-2",attrs:{scope:"col"}},[t._v("Name")]),s("th",{staticClass:"col-2",attrs:{scope:"col"}},[t._v("Street")]),s("th",{staticClass:"col-2",attrs:{scope:"col"}},[t._v("City")]),s("th",{staticClass:"col-2",attrs:{scope:"col"}},[t._v("Country")])])])}],_={name:"PersonDetails",props:{selected:{type:Object}}},h=_,b=Object(d["a"])(h,f,v,!1,null,"03530b14",null),m=b.exports,C=s("bc3a"),y=s.n(C),g=s("db49"),O=s.n(g),P=O.a.BACKEND_HOST,x=O.a.BACKEND_PORT,D={name:"app",components:{PersonList:u,PersonDetails:m},data:function(){return{persons:[""],selected:{x:1},personListIp:"0.0.0.0",personDetailIp:"0.0.0.0"}},methods:{loadDetails:function(t){var e=this;console.log("Received request to show details for "+t),y.a.get("http://"+P+":"+x+"/api/person/"+t).then((function(t){console.log(t),e.personDetailIp=t.data.serverLocalAddress,e.selected=t.data.personDetails,console.log(e.selected)}))}},mounted:function(){var t=this;console.log("Loading all persons.."),y.a.get("http://"+P+":"+x+"/api/person").then((function(e){console.log(e),t.personListIp=e.data.serverLocalAddress,t.persons=e.data.persons,console.log(t.persons)}))}},j=D,w=(s("034f"),Object(d["a"])(j,r,o,!1,null,null,null)),E=w.exports,L=s("5f5b");s("f9e3"),s("2dd8");n["default"].use(L["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(E)}}).$mount("#app")},"64a9":function(t,e,s){},db49:function(t,e){var s={BACKEND_HOST:"127.0.0.1",BACKEND_PORT:"3000"};t.exports=s}});
//# sourceMappingURL=app.81590608.js.map