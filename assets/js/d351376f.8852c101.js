"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[75],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||o;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2055:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"mongo-memory-instance-opts",title:"MongoMemoryInstanceOpts"},p=void 0,s={unversionedId:"api/interfaces/mongo-memory-instance-opts",id:"api/interfaces/mongo-memory-instance-opts",title:"MongoMemoryInstanceOpts",description:"API Documentation of MongoMemoryInstanceOpts-Interface",source:"@site/../docs/api/interfaces/mongo-memory-instance-opts.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/mongo-memory-instance-opts",permalink:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-instance-opts",draft:!1,editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/api/interfaces/mongo-memory-instance-opts.md",tags:[],version:"current",frontMatter:{id:"mongo-memory-instance-opts",title:"MongoMemoryInstanceOpts"},sidebar:"api",previous:{title:"CreateUser",permalink:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-server-createuser"},next:{title:"ReplicaMemberConfig",permalink:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-instance-replicamemberconfig"}},m={},d=[{value:"Values for <code>MongoMemoryInstanceOpts</code>",id:"values-for-mongomemoryinstanceopts",level:2},{value:"auth",id:"auth",level:3},{value:"dbName",id:"dbname",level:3},{value:"ip",id:"ip",level:3},{value:"replSet",id:"replset",level:3},{value:"keyfileLocation",id:"keyfilelocation",level:3},{value:"Values for <code>MongoMemoryInstanceOptsBase</code>",id:"values-for-mongomemoryinstanceoptsbase",level:2},{value:"args",id:"args",level:3},{value:"port",id:"port",level:3},{value:"dbPath",id:"dbpath",level:3},{value:"storageEngine",id:"storageengine",level:3},{value:"replicaMemberConfig",id:"replicamemberconfig",level:3},{value:"Helper Type <code>StorageEngine</code>",id:"helper-type-storageengine",level:2}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"API Documentation of ",(0,o.kt)("inlineCode",{parentName:"p"},"MongoMemoryInstanceOpts"),"-Interface"),(0,o.kt)("h2",{id:"values-for-mongomemoryinstanceopts"},"Values for ",(0,o.kt)("inlineCode",{parentName:"h2"},"MongoMemoryInstanceOpts")),(0,o.kt)("p",null,"Inherits from ",(0,o.kt)("a",{parentName:"p",href:"#values-for-mongomemoryinstanceoptsbase"},(0,o.kt)("inlineCode",{parentName:"a"},"MongoMemoryInstanceOptsBase")),"."),(0,o.kt)("h3",{id:"auth"},"auth"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"auth?: boolean"),(0,o.kt)("br",{parentName:"p"}),"\n","Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false")),(0,o.kt)("p",null,"Set which option auth argument to add:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", add ",(0,o.kt)("inlineCode",{parentName:"li"},"--auth")),(0,o.kt)("li",{parentName:"ul"},"if ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),", add ",(0,o.kt)("inlineCode",{parentName:"li"},"--noauth"))),(0,o.kt)("p",null,"This options gets automatically set (overwritten) when using ",(0,o.kt)("inlineCode",{parentName:"p"},"createAuth"),"."),(0,o.kt)("h3",{id:"dbname"},"dbName"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"dbName?: string")),(0,o.kt)("p",null,"Previously set the ",(0,o.kt)("inlineCode",{parentName:"p"},"dbName")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"getUri")," calls, but currently unused."),(0,o.kt)("h3",{id:"ip"},"ip"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"ip?: string")),(0,o.kt)("p",null,"Set the ip to bind to, if defined will add the argument ",(0,o.kt)("inlineCode",{parentName:"p"},"--bind_ip")," with the input string."),(0,o.kt)("h3",{id:"replset"},"replSet"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"replSet?: string")),(0,o.kt)("p",null,"Set the ReplSet name to use, if defined will add the argument ",(0,o.kt)("inlineCode",{parentName:"p"},"--replSet")," with the input string."),(0,o.kt)("h3",{id:"keyfilelocation"},"keyfileLocation"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"keyfileLocation?: string")),(0,o.kt)("p",null,"Set a custom location for where the keyfile for authentication will be stored, if defined will add the argument ",(0,o.kt)("inlineCode",{parentName:"p"},"--keyfile")," with the input string.",(0,o.kt)("br",{parentName:"p"}),"\n","Only has a effect when used in a ",(0,o.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/classes/mongo-memory-replset"},(0,o.kt)("inlineCode",{parentName:"a"},"MongoMemoryReplSet"))," and ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," is enabled.",(0,o.kt)("br",{parentName:"p"}),"\n","This option will get automatically set when not manually defined."),(0,o.kt)("h2",{id:"values-for-mongomemoryinstanceoptsbase"},"Values for ",(0,o.kt)("inlineCode",{parentName:"h2"},"MongoMemoryInstanceOptsBase")),(0,o.kt)("h3",{id:"args"},"args"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"args?: string[]")),(0,o.kt)("p",null,"Set extra Arguments to add to the started instance, will likely overwrite arguments set by other options, depending on how the binary parses arguments."),(0,o.kt)("h3",{id:"port"},"port"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"port?: number")),(0,o.kt)("p",null,"When set, adds the ",(0,o.kt)("inlineCode",{parentName:"p"},"--port")," argument with the input.",(0,o.kt)("br",{parentName:"p"}),"\n","This options will get automatically set with a free port that is found."),(0,o.kt)("h3",{id:"dbpath"},"dbPath"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"dbPath?: string")),(0,o.kt)("p",null,"When set, adds the ",(0,o.kt)("inlineCode",{parentName:"p"},"--dbpath")," argument with the input.",(0,o.kt)("br",{parentName:"p"}),"\n","This option will automatically be set with a directory generated by ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/tmp"},(0,o.kt)("inlineCode",{parentName:"a"},"tmp")),"."),(0,o.kt)("h3",{id:"storageengine"},"storageEngine"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"storageEngine?: StorageEngine"),(0,o.kt)("br",{parentName:"p"}),"\n","Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"ephemeralForTest")),(0,o.kt)("p",null,"Set which storage engine to use, uses ",(0,o.kt)("a",{parentName:"p",href:"#helper-type-storageengine"},(0,o.kt)("inlineCode",{parentName:"a"},"StorageEngine")),"."),(0,o.kt)("h3",{id:"replicamemberconfig"},"replicaMemberConfig"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"replicaMemberConfig?: ReplicaMemberConfig")),(0,o.kt)("p",null,"Set custom a custom Replica Member Config, uses ",(0,o.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-instance-replicamemberconfig"},(0,o.kt)("inlineCode",{parentName:"a"},"ReplicaMemberConfig")),".",(0,o.kt)("br",{parentName:"p"}),"\n","Only has a effect when started with ",(0,o.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/classes/mongo-memory-replset"},(0,o.kt)("inlineCode",{parentName:"a"},"MongoMemoryReplSet")),"."),(0,o.kt)("h2",{id:"helper-type-storageengine"},"Helper Type ",(0,o.kt)("inlineCode",{parentName:"h2"},"StorageEngine")),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"StorageEngine = 'devnull' | 'ephemeralForTest' | 'mmapv1' | 'wiredTiger'")),(0,o.kt)("p",null,"Storage Engines supported by mongodb, see ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/core/storage-engines/"},"MongoDB Storage Engines"),"."),(0,o.kt)("p",null,"Custom Explanation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"devnull")," is a storage engine which discards everything and cannot be read from."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ephemeralForTest")," is a in-memory storage engine, which stores everything in RAM, which is great to use when wanting a simple database testing backend, is not the same as the Enterprise In-Memory Engine"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mmapv1")," is storage engine which stores data on disk, was removed in mongodb 4.2"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wiredTiger")," is a storage engine which stores data on disk.")))}u.isMDXComponent=!0}}]);