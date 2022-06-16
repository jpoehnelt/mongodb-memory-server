"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[615],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3240:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={id:"mongo-memory-server-createuser",title:"CreateUser"},l=void 0,c={unversionedId:"api/interfaces/mongo-memory-server-createuser",id:"api/interfaces/mongo-memory-server-createuser",title:"CreateUser",description:"API Documentation of CreateUser-Interface",source:"@site/../docs/api/interfaces/mongo-memory-server-createuser.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/mongo-memory-server-createuser",permalink:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-server-createuser",draft:!1,editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/api/interfaces/mongo-memory-server-createuser.md",tags:[],version:"current",frontMatter:{id:"mongo-memory-server-createuser",title:"CreateUser"},sidebar:"api",previous:{title:"AutomaticAuth",permalink:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-server-automaticauth"},next:{title:"MongoMemoryInstanceOpts",permalink:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-instance-opts"}},p={},m=[{value:"Values",id:"values",level:2},{value:"database",id:"database",level:3},{value:"createUser",id:"createuser",level:3},{value:"pwd",id:"pwd",level:3},{value:"roles",id:"roles",level:3}],u={toc:m};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"API Documentation of ",(0,a.kt)("inlineCode",{parentName:"p"},"CreateUser"),"-Interface"),(0,a.kt)("h2",{id:"values"},"Values"),(0,a.kt)("p",null,"This Interface inherits most values from the ",(0,a.kt)("inlineCode",{parentName:"p"},"CreateUserMongoDB")," interface, which is a interface for the ",(0,a.kt)("inlineCode",{parentName:"p"},"createUser")," command manually types, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nodkz/mongodb-memory-server/issues/663"},"#663")," for tracking on switching to native interface."),(0,a.kt)("p",null,"Because most values are inherited, only the new ones and important ones are described here."),(0,a.kt)("h3",{id:"database"},"database"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"database?: string"),(0,a.kt)("br",{parentName:"p"}),"\n","Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")),(0,a.kt)("p",null,"Set the Database where the user will be added to, by default the user will be added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," database."),(0,a.kt)("h3",{id:"createuser"},"createUser"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"createUser: string")),(0,a.kt)("p",null,"Set the username of the User to create."),(0,a.kt)("h3",{id:"pwd"},"pwd"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"pwd: string")),(0,a.kt)("p",null,"Set the password of the User to create."),(0,a.kt)("h3",{id:"roles"},"roles"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"roles: ({ role: UserRoles; db: string } | UserRoles)[]")),(0,a.kt)("p",null,"Set the Roles the new User will have.",(0,a.kt)("br",{parentName:"p"}),"\n","For a list of available Roles, see the ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/reference/built-in-roles/"},"MongoDB Documentation"),"."))}d.isMDXComponent=!0}}]);