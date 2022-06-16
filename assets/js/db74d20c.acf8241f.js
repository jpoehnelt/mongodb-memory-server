"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[176],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8986:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"mongo-memory-replset",title:"MongoMemoryReplSet"},s=void 0,p={unversionedId:"api/classes/mongo-memory-replset",id:"api/classes/mongo-memory-replset",title:"MongoMemoryReplSet",description:"API Documentation of MongoMemoryReplSet-Class",source:"@site/../docs/api/classes/mongo-memory-replset.md",sourceDirName:"api/classes",slug:"/api/classes/mongo-memory-replset",permalink:"/mongodb-memory-server/docs/api/classes/mongo-memory-replset",draft:!1,editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/api/classes/mongo-memory-replset.md",tags:[],version:"current",frontMatter:{id:"mongo-memory-replset",title:"MongoMemoryReplSet"},sidebar:"api",previous:{title:"MongoMemoryServer",permalink:"/mongodb-memory-server/docs/api/classes/mongo-memory-server"},next:{title:"MongoInstance",permalink:"/mongodb-memory-server/docs/api/classes/mongo-instance"}},m={},d=[{value:"Functions",id:"functions",level:2},{value:"new",id:"new",level:3},{value:"create",id:"create",level:3},{value:"stateChange",id:"statechange",level:3},{value:"getInstanceOpts",id:"getinstanceopts",level:3},{value:"getUri",id:"geturi",level:3},{value:"start",id:"start",level:3},{value:"initAllServers",id:"initallservers",level:3},{value:"ensureKeyFile",id:"ensurekeyfile",level:3},{value:"stop",id:"stop",level:3},{value:"cleanup",id:"cleanup",level:3},{value:"waitUntilRunning",id:"waituntilrunning",level:3},{value:"_initReplSet",id:"_initreplset",level:3},{value:"_initServer",id:"_initserver",level:3},{value:"_waitForPrimary",id:"_waitforprimary",level:3},{value:"Values",id:"values",level:2},{value:"servers",id:"servers",level:3},{value:"instanceOpts",id:"instanceopts",level:3},{value:"_instanceOpts",id:"_instanceopts",level:3},{value:"binaryOpts",id:"binaryopts",level:3},{value:"_binaryOpts",id:"_binaryopts",level:3},{value:"replSetOpts",id:"replsetopts",level:3},{value:"_replSetOpts",id:"_replsetopts",level:3},{value:"_keyfiletmp",id:"_keyfiletmp",level:3},{value:"state",id:"state",level:3},{value:"_state",id:"_state",level:3},{value:"_ranCreateAuth",id:"_rancreateauth",level:3}],c={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"API Documentation of ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoMemoryReplSet"),"-Class"),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"new"},"new"),(0,r.kt)("p",null,"Typings: ",(0,r.kt)("inlineCode",{parentName:"p"},"constructor(opts: Partial<MongoMemoryReplSetOpts> = {})")),(0,r.kt)("p",null,"Create an new ReplSet without starting it"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When directly starting the replset, ",(0,r.kt)("a",{parentName:"p",href:"#create"},(0,r.kt)("inlineCode",{parentName:"a"},"create"))," should be used"))),(0,r.kt)("h3",{id:"create"},"create"),(0,r.kt)("p",null,"Typings: ",(0,r.kt)("inlineCode",{parentName:"p"},"static async create(opts?: Partial<MongoMemoryReplSetOpts>): Promise<MongoMemoryReplSet>")),(0,r.kt)("p",null,"Create an new ReplSet and start it (while being an Promise)"),(0,r.kt)("h3",{id:"statechange"},"stateChange"),(0,r.kt)("span",{class:"badge badge--warning"},"Internal"),(0,r.kt)("p",null,"Typings: ",(0,r.kt)("inlineCode",{parentName:"p"},"protected stateChange(newState: MongoMemoryReplSetStates, ...args: any[]): void")),(0,r.kt)("p",null,"Used to change the state of the class, uses ",(0,r.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/enums/mongo-memory-replset-states"},(0,r.kt)("inlineCode",{parentName:"a"},"MongoMemoryReplSetStates")," enum"),", it is ",(0,r.kt)("inlineCode",{parentName:"p"},"protected")," to not accidentally use it"),(0,r.kt)("h3",{id:"getinstanceopts"},"getInstanceOpts"),(0,r.kt)("span",{class:"badge badge--warning"},"Internal"),(0,r.kt)("p",null,"Typings: ",(0,r.kt)("inlineCode",{parentName:"p"},"protected getInstanceOpts(baseOpts: MongoMemoryInstancePropBase = {}): MongoMemoryInstanceProp")),(0,r.kt)("p",null,"Constructs the options used for an instance"),(0,r.kt)("h3",{id:"geturi"},"getUri"),(0,r.kt)("p",null,"Typings: ",(0,r.kt)("inlineCode",{parentName:"p"},"getUri(otherDb?: string): string")),(0,r.kt)("p",null,"Get an mongodb-usable uri (can also be used in mongoose)"),(0,r.kt)("p",null,"When no arguments are set, the URI will always use ip ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," and end with ",(0,r.kt)("inlineCode",{parentName:"p"},"/?replicaSet=ReplSetName")," (not setting a database).",(0,r.kt)("br",{parentName:"p"}),"\n","When setting ",(0,r.kt)("inlineCode",{parentName:"p"},"otherDbName"),", the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"otherDbName")," will be appended after ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," and before any query arguments.",(0,r.kt)("br",{parentName:"p"}),"\n","When setting ",(0,r.kt)("inlineCode",{parentName:"p"},"otherIp"),", the ip will be the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"otherIp")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," (for all instances)."),(0,r.kt)("h3",{id:"start"},"start"),(0,r.kt)("p",null,"Typings: ",(0,r.kt)("inlineCode",{parentName:"p"},"async start(): Promise<void>")),(0,r.kt)("p",null,"Used to start an new ReplSet or to Re-Start an stopped ReplSet"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Will Error if ReplSet is already running"))),(0,r.kt)("h3",{id:"initallservers"},"initAllServers"),(0,r.kt)("span",{class:"badge badge--warning"},"Internal"),(0,r.kt)("p",null,"Typings: ",(0,r.kt)("inlineCode",{parentName:"p"},"protected async initAllServers(): Promise<void>")),(0,r.kt)("p",null,"Used by ",(0,r.kt)("a",{parentName:"p",href:"#start"},(0,r.kt)("inlineCode",{parentName:"a"},"start"))," and to restart without fully running everything again"),(0,r.kt)("h3",{id:"ensurekeyfile"},"ensureKeyFile"),(0,r.kt)("span",{class:"badge badge--warning"},"Internal"),(0,r.kt)("p",null,"Typings: ",(0,r.kt)("inlineCode",{parentName:"p"},"protected async ensureKeyFile(): Promise<tmp.DirResult>")),(0,r.kt)("p",null,"Ensures and returns that ",(0,r.kt)("a",{parentName:"p",href:"#_keyfiletmp"},(0,r.kt)("inlineCode",{parentName:"a"},"_keyfiletmp"))," is defined an exists and also that the keyfile is created"),(0,r.kt)("h3",{id:"stop"},"stop"),(0,r.kt)("p",null,"Typings: ",(0,r.kt)("inlineCode",{parentName:"p"},"async stop(cleanupOptions?: Cleanup): Promise<boolean>")),(0,r.kt)("p",null,"Stop an running instance, this function will by default call ",(0,r.kt)("a",{parentName:"p",href:"#cleanup"},(0,r.kt)("inlineCode",{parentName:"a"},".cleanup"))," with ",(0,r.kt)("inlineCode",{parentName:"p"},"{ doCleanup: true, force: false }"),"."),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"cleanupOptions")," options for cleanup can be manually set."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Will not Error if instance is not running"))),(0,r.kt)("h3",{id:"cleanup"},"cleanup"),(0,r.kt)("p",null,"Typings: ",(0,r.kt)("inlineCode",{parentName:"p"},"async cleanup(options?: Cleanup): Promise<void>")),(0,r.kt)("p",null,"Cleanup all files used by this ReplSet's instances, by default ",(0,r.kt)("inlineCode",{parentName:"p"},"{ doCleanup: true, force: false }")," is used."),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," can be set how to run a cleanup."),(0,r.kt)("h3",{id:"waituntilrunning"},"waitUntilRunning"),(0,r.kt)("p",null,"Typings: ",(0,r.kt)("inlineCode",{parentName:"p"},"async waitUntilRunning(): Promise<void>")),(0,r.kt)("p",null,"Wait until all instances are running."),(0,r.kt)("p",null,"It is recommended to ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," the promise returned from ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," when available."),(0,r.kt)("p",null,"Does not start the replset instance if not already starting (unlike ",(0,r.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/classes/mongo-memory-server#ensureinstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ensureInstance")),")."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Will Error if state is not ",(0,r.kt)("inlineCode",{parentName:"p"},"running")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"init"),"."))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Will ",(0,r.kt)("strong",{parentName:"p"},"not")," Error if a error is encountered while waiting."))),(0,r.kt)("h3",{id:"_initreplset"},"_initReplSet"),(0,r.kt)("span",{class:"badge badge--warning"},"Internal"),(0,r.kt)("p",null,"Typings: ",(0,r.kt)("inlineCode",{parentName:"p"},"protected async _initReplSet(): Promise<void>")),(0,r.kt)("p",null,"This is used to connect to the first server and initiate the ReplSet with an command",(0,r.kt)("br",null),"\nAlso enables ",(0,r.kt)("inlineCode",{parentName:"p"},"auth")),(0,r.kt)("h3",{id:"_initserver"},"_initServer"),(0,r.kt)("span",{class:"badge badge--warning"},"Internal"),(0,r.kt)("p",null,"Typings: ",(0,r.kt)("inlineCode",{parentName:"p"},"protected _initServer(instanceOpts: MongoMemoryInstanceProp): MongoMemoryServer")),(0,r.kt)("p",null,"Creates an new ",(0,r.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/classes/mongo-memory-server"},(0,r.kt)("inlineCode",{parentName:"a"},"instance"))," for the ReplSet"),(0,r.kt)("h3",{id:"_waitforprimary"},"_waitForPrimary"),(0,r.kt)("span",{class:"badge badge--warning"},"Internal"),(0,r.kt)("p",null,"Typings: ",(0,r.kt)("inlineCode",{parentName:"p"},"protected async _waitForPrimary(timeout: number = 1000 * 30, where?: string): Promise<void>")),(0,r.kt)("p",null,"Wait until the ReplSet has elected an Primary, the ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," string will be added to the error if the timeout is reached"),(0,r.kt)("h2",{id:"values"},"Values"),(0,r.kt)("h3",{id:"servers"},"servers"),(0,r.kt)("p",null,"Typings: ",(0,r.kt)("inlineCode",{parentName:"p"},"servers: MongoMemoryServer[]")),(0,r.kt)("p",null,"Stores all the servers of this ReplSet"),(0,r.kt)("h3",{id:"instanceopts"},"instanceOpts"),(0,r.kt)("p",null,"Typings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"get instanceOpts(): MongoMemoryInstancePropBase[]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set instanceOpts(val: MongoMemoryInstancePropBase[])"))),(0,r.kt)("p",null,"Getter & Setter for ",(0,r.kt)("a",{parentName:"p",href:"#_instanceOpts"},(0,r.kt)("inlineCode",{parentName:"a"},"_instanceOpts"))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Will Throw an Error if ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," is not ",(0,r.kt)("inlineCode",{parentName:"p"},"stopped")))),(0,r.kt)("h3",{id:"_instanceopts"},"_instanceOpts"),(0,r.kt)("span",{class:"badge badge--warning"},"Internal"),(0,r.kt)("p",null,"Typings: ",(0,r.kt)("inlineCode",{parentName:"p"},"protected _instanceOpts!: MongoMemoryInstancePropBase[]")),(0,r.kt)("p",null,"Stores Options used for an instance"),(0,r.kt)("h3",{id:"binaryopts"},"binaryOpts"),(0,r.kt)("p",null,"Typings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"get binaryOpts(): MongoBinaryOpts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set binaryOpts(val: MongoBinaryOpts)"))),(0,r.kt)("p",null,"Getter & Setter for ",(0,r.kt)("a",{parentName:"p",href:"#_binaryOpts"},(0,r.kt)("inlineCode",{parentName:"a"},"_binaryOpts"))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Will Throw an Error if ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," is not ",(0,r.kt)("inlineCode",{parentName:"p"},"stopped")))),(0,r.kt)("h3",{id:"_binaryopts"},"_binaryOpts"),(0,r.kt)("span",{class:"badge badge--warning"},"Internal"),(0,r.kt)("p",null,"Typings: ",(0,r.kt)("inlineCode",{parentName:"p"},"protected _binaryOpts!: MongoBinaryOpts")),(0,r.kt)("p",null,"Stores the options used for the binary"),(0,r.kt)("h3",{id:"replsetopts"},"replSetOpts"),(0,r.kt)("p",null,"Typings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"get replSetOpts(): ReplSetOpts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set replSetOpts(val: ReplSetOpts)"))),(0,r.kt)("p",null,"Getter & Setter for ",(0,r.kt)("a",{parentName:"p",href:"#_replSetOpts"},(0,r.kt)("inlineCode",{parentName:"a"},"_replSetOpts"))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Will Throw an Error if ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," is not ",(0,r.kt)("inlineCode",{parentName:"p"},"stopped")))),(0,r.kt)("h3",{id:"_replsetopts"},"_replSetOpts"),(0,r.kt)("span",{class:"badge badge--warning"},"Internal"),(0,r.kt)("p",null,"Typings: ",(0,r.kt)("inlineCode",{parentName:"p"},"protected _replSetOpts!: Required<ReplSetOpts>")),(0,r.kt)("p",null,"Stores the options used for the ReplSet Initiation"),(0,r.kt)("h3",{id:"_keyfiletmp"},"_keyfiletmp"),(0,r.kt)("span",{class:"badge badge--warning"},"Internal"),(0,r.kt)("p",null,"Typings: ",(0,r.kt)("inlineCode",{parentName:"p"},"protected _keyfiletmp?: tmp.DirResult")),(0,r.kt)("p",null,"Stores the ",(0,r.kt)("inlineCode",{parentName:"p"},"tmpDir")," for the keyfile location"),(0,r.kt)("h3",{id:"state"},"state"),(0,r.kt)("p",null,"Typings: ",(0,r.kt)("inlineCode",{parentName:"p"},"get state(): MongoMemoryReplSetStates")),(0,r.kt)("p",null,"Getter for ",(0,r.kt)("a",{parentName:"p",href:"#_state"},(0,r.kt)("inlineCode",{parentName:"a"},"_state"))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Will Throw an Error if ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," is not ",(0,r.kt)("inlineCode",{parentName:"p"},"stopped")))),(0,r.kt)("h3",{id:"_state"},"_state"),(0,r.kt)("span",{class:"badge badge--warning"},"Internal"),(0,r.kt)("p",null,"Typings: ",(0,r.kt)("inlineCode",{parentName:"p"},"protected _state: MongoMemoryReplSetStates")),(0,r.kt)("p",null,"Stores the current State, uses ",(0,r.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/enums/mongo-memory-replset-states"},(0,r.kt)("inlineCode",{parentName:"a"},"MongoMemoryReplSetStates")," enum"),"."),(0,r.kt)("h3",{id:"_rancreateauth"},"_ranCreateAuth"),(0,r.kt)("span",{class:"badge badge--warning"},"Internal"),(0,r.kt)("p",null,"Typings: ",(0,r.kt)("inlineCode",{parentName:"p"},"protected _ranCreateAuth: boolean")),(0,r.kt)("p",null,"Stores if the auth creation has already ran"))}u.isMDXComponent=!0}}]);