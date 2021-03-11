(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return l}));var a=n(3),i=n(7),r=(n(0),n(93)),c={id:"mongo-memory-replset",title:"MongoMemoryReplSet"},b={unversionedId:"api/classes/mongo-memory-replset",id:"api/classes/mongo-memory-replset",isDocsHomePage:!1,title:"MongoMemoryReplSet",description:"API Documentation of MongoMemoryReplSet-Class",source:"@site/../docs/api/classes/mongo-memory-replset.md",slug:"/api/classes/mongo-memory-replset",permalink:"/mongodb-memory-server/docs/api/classes/mongo-memory-replset",editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/api/classes/mongo-memory-replset.md",version:"current",sidebar:"api",previous:{title:"MongoMemoryServer",permalink:"/mongodb-memory-server/docs/api/classes/mongo-memory-server"},next:{title:"MongoInstance",permalink:"/mongodb-memory-server/docs/api/classes/mongo-instance"}},o=[{value:"Functions",id:"functions",children:[{value:"new",id:"new",children:[]},{value:"create",id:"create",children:[]},{value:"stateChange",id:"statechange",children:[]},{value:"getInstanceOpts",id:"getinstanceopts",children:[]},{value:"getUri",id:"geturi",children:[]},{value:"start",id:"start",children:[]},{value:"initAllServers",id:"initallservers",children:[]},{value:"stop",id:"stop",children:[]},{value:"cleanup",id:"cleanup",children:[]},{value:"waitUntilRunning",id:"waituntilrunning",children:[]},{value:"_initReplSet",id:"_initreplset",children:[]},{value:"_initServer",id:"_initserver",children:[]},{value:"_waitForPrimary",id:"_waitforprimary",children:[]}]},{value:"Values",id:"values",children:[{value:"servers",id:"servers",children:[]},{value:"instanceOpts",id:"instanceopts",children:[]},{value:"_instanceOpts",id:"_instanceopts",children:[]},{value:"binaryOpts",id:"binaryopts",children:[]},{value:"_binaryOpts",id:"_binaryopts",children:[]},{value:"replSetOpts",id:"replsetopts",children:[]},{value:"_replSetOpts",id:"_replsetopts",children:[]},{value:"state",id:"state",children:[]},{value:"_state",id:"_state",children:[]},{value:"_ranCreateAuth",id:"_rancreateauth",children:[]}]}],s={toc:o};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"API Documentation of ",Object(r.b)("inlineCode",{parentName:"p"},"MongoMemoryReplSet"),"-Class"),Object(r.b)("h2",{id:"functions"},"Functions"),Object(r.b)("h3",{id:"new"},"new"),Object(r.b)("p",null,"Typings: ",Object(r.b)("inlineCode",{parentName:"p"},"constructor(opts: Partial<MongoMemoryReplSetOpts> = {})")),Object(r.b)("p",null,"Create an new ReplSet without starting it"),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"When directly starting the replset, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#create"}),Object(r.b)("inlineCode",{parentName:"a"},"create"))," should be used"))),Object(r.b)("h3",{id:"create"},"create"),Object(r.b)("p",null,"Typings: ",Object(r.b)("inlineCode",{parentName:"p"},"static async create(opts: Partial<MongoMemoryReplSetOpts> = {}): Promise<MongoMemoryReplSet>")),Object(r.b)("p",null,"Create an new ReplSet and start it (while being an Promise)"),Object(r.b)("h3",{id:"statechange"},"stateChange"),Object(r.b)("span",{class:"badge badge--warning"},"Internal"),Object(r.b)("p",null,"Typings: ",Object(r.b)("inlineCode",{parentName:"p"},"protected stateChange(newState: MongoMemoryReplSetStates, ...args: any[]): void")),Object(r.b)("p",null,"Used to change the state of the class, it is ",Object(r.b)("inlineCode",{parentName:"p"},"protected")," to not accidentally use it"),Object(r.b)("h3",{id:"getinstanceopts"},"getInstanceOpts"),Object(r.b)("span",{class:"badge badge--warning"},"Internal"),Object(r.b)("p",null,"Typings: ",Object(r.b)("inlineCode",{parentName:"p"},"protected getInstanceOpts(baseOpts: MongoMemoryInstancePropBase = {}): MongoMemoryInstanceProp")),Object(r.b)("p",null,"Constructs the options used for an instance"),Object(r.b)("h3",{id:"geturi"},"getUri"),Object(r.b)("p",null,"Typings: ",Object(r.b)("inlineCode",{parentName:"p"},"getUri(otherDb?: string | boolean): string")),Object(r.b)("p",null,"Get an mongodb-usable uri (can also be used in mongoose)"),Object(r.b)("h3",{id:"start"},"start"),Object(r.b)("p",null,"Typings: ",Object(r.b)("inlineCode",{parentName:"p"},"async start(): Promise<void>")),Object(r.b)("p",null,"Used to start an new ReplSet or to Re-Start an stopped ReplSet"),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Will Error if ReplSet is already running"))),Object(r.b)("h3",{id:"initallservers"},"initAllServers"),Object(r.b)("span",{class:"badge badge--warning"},"Internal"),Object(r.b)("p",null,"Typings: ",Object(r.b)("inlineCode",{parentName:"p"},"protected async initAllServers(): Promise<void>")),Object(r.b)("p",null,"Used by ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#start"}),Object(r.b)("inlineCode",{parentName:"a"},"start"))," and to restart without fully running everything again"),Object(r.b)("h3",{id:"stop"},"stop"),Object(r.b)("p",null,"Typings: ",Object(r.b)("inlineCode",{parentName:"p"},"async stop(runCleanup: boolean = true): Promise<boolean>")),Object(r.b)("p",null,"Stop an running instance"),Object(r.b)("p",null,"This function will by default run ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#cleanup"}),Object(r.b)("inlineCode",{parentName:"a"},".cleanup")),", this must be set to ",Object(r.b)("inlineCode",{parentName:"p"},"false")," to be able to restart (and an engine other than ",Object(r.b)("inlineCode",{parentName:"p"},"ephemeralForTest")," must be used)"),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Will not Error if instance is not running"))),Object(r.b)("h3",{id:"cleanup"},"cleanup"),Object(r.b)("p",null,"Typings: ",Object(r.b)("inlineCode",{parentName:"p"},"async cleanup(force: boolean = false): Promise<void>")),Object(r.b)("p",null,"Cleanup all files used by this ReplSet & instances"),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Runs automatically on ",Object(r.b)("inlineCode",{parentName:"p"},"process.on('beforeExit')")))),Object(r.b)("h3",{id:"waituntilrunning"},"waitUntilRunning"),Object(r.b)("p",null,"Typings: ",Object(r.b)("inlineCode",{parentName:"p"},"async waitUntilRunning(): Promise<void>")),Object(r.b)("p",null,"Wait until all instances are running"),Object(r.b)("h3",{id:"_initreplset"},"_initReplSet"),Object(r.b)("span",{class:"badge badge--warning"},"Internal"),Object(r.b)("p",null,"Typings: ",Object(r.b)("inlineCode",{parentName:"p"},"protected async _initReplSet(): Promise<void>")),Object(r.b)("p",null,"This is used to connect to the first server and initiate the ReplSet with an command",Object(r.b)("br",null),"\nAlso enables ",Object(r.b)("inlineCode",{parentName:"p"},"auth")),Object(r.b)("h3",{id:"_initserver"},"_initServer"),Object(r.b)("span",{class:"badge badge--warning"},"Internal"),Object(r.b)("p",null,"Typings: ",Object(r.b)("inlineCode",{parentName:"p"},"protected _initServer(instanceOpts: MongoMemoryInstanceProp): MongoMemoryServer")),Object(r.b)("p",null,"Creates an new ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./mongomemoryserver.md"}),Object(r.b)("inlineCode",{parentName:"a"},"instance"))," for the ReplSet"),Object(r.b)("h3",{id:"_waitforprimary"},"_waitForPrimary"),Object(r.b)("span",{class:"badge badge--warning"},"Internal"),Object(r.b)("p",null,"Typings: ",Object(r.b)("inlineCode",{parentName:"p"},"protected async _waitForPrimary(timeout: number = 30000): Promise<void>")),Object(r.b)("p",null,"Wait until the ReplSet has elected an Primary"),Object(r.b)("h2",{id:"values"},"Values"),Object(r.b)("h3",{id:"servers"},"servers"),Object(r.b)("p",null,"Typings: ",Object(r.b)("inlineCode",{parentName:"p"},"servers: MongoMemoryServer[]")),Object(r.b)("p",null,"Stores all the servers of this ReplSet"),Object(r.b)("h3",{id:"instanceopts"},"instanceOpts"),Object(r.b)("p",null,"Typings:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"get instanceOpts(): MongoMemoryInstancePropBase[]")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"set instanceOpts(val: MongoMemoryInstancePropBase[])"))),Object(r.b)("p",null,"Getter & Setter for ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#_instanceOpts"}),Object(r.b)("inlineCode",{parentName:"a"},"_instanceOpts"))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Will Throw an Error if ",Object(r.b)("inlineCode",{parentName:"p"},"state")," is not ",Object(r.b)("inlineCode",{parentName:"p"},"stopped")))),Object(r.b)("h3",{id:"_instanceopts"},"_instanceOpts"),Object(r.b)("span",{class:"badge badge--warning"},"Internal"),Object(r.b)("p",null,"Typings: ",Object(r.b)("inlineCode",{parentName:"p"},"protected _instanceOpts!: MongoMemoryInstancePropBase[]")),Object(r.b)("p",null,"Stores Options used for an instance"),Object(r.b)("h3",{id:"binaryopts"},"binaryOpts"),Object(r.b)("p",null,"Typings:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"get binaryOpts(): MongoBinaryOpts")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"set binaryOpts(val: MongoBinaryOpts)"))),Object(r.b)("p",null,"Getter & Setter for ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#_binaryOpts"}),Object(r.b)("inlineCode",{parentName:"a"},"_binaryOpts"))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Will Throw an Error if ",Object(r.b)("inlineCode",{parentName:"p"},"state")," is not ",Object(r.b)("inlineCode",{parentName:"p"},"stopped")))),Object(r.b)("h3",{id:"_binaryopts"},"_binaryOpts"),Object(r.b)("span",{class:"badge badge--warning"},"Internal"),Object(r.b)("p",null,"Typings: ",Object(r.b)("inlineCode",{parentName:"p"},"protected _binaryOpts!: MongoBinaryOpts")),Object(r.b)("p",null,"Stores the options used for the binary"),Object(r.b)("h3",{id:"replsetopts"},"replSetOpts"),Object(r.b)("p",null,"Typings:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"get replSetOpts(): ReplSetOpts")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"set replSetOpts(val: ReplSetOpts)"))),Object(r.b)("p",null,"Getter & Setter for ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#_replSetOpts"}),Object(r.b)("inlineCode",{parentName:"a"},"_replSetOpts"))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Will Throw an Error if ",Object(r.b)("inlineCode",{parentName:"p"},"state")," is not ",Object(r.b)("inlineCode",{parentName:"p"},"stopped")))),Object(r.b)("h3",{id:"_replsetopts"},"_replSetOpts"),Object(r.b)("span",{class:"badge badge--warning"},"Internal"),Object(r.b)("p",null,"Typings: ",Object(r.b)("inlineCode",{parentName:"p"},"protected _replSetOpts!: Required<ReplSetOpts>")),Object(r.b)("p",null,"Stores the options used for the ReplSet Initiation"),Object(r.b)("h3",{id:"state"},"state"),Object(r.b)("p",null,"Typings: ",Object(r.b)("inlineCode",{parentName:"p"},"get state(): MongoMemoryReplSetStates")),Object(r.b)("p",null,"Getter for ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#_state"}),Object(r.b)("inlineCode",{parentName:"a"},"_state"))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Will Throw an Error if ",Object(r.b)("inlineCode",{parentName:"p"},"state")," is not ",Object(r.b)("inlineCode",{parentName:"p"},"stopped")))),Object(r.b)("h3",{id:"_state"},"_state"),Object(r.b)("span",{class:"badge badge--warning"},"Internal"),Object(r.b)("p",null,"Typings: ",Object(r.b)("inlineCode",{parentName:"p"},"protected _state: MongoMemoryReplSetStates")),Object(r.b)("p",null,"Stores the current State"),Object(r.b)("h3",{id:"_rancreateauth"},"_ranCreateAuth"),Object(r.b)("span",{class:"badge badge--warning"},"Internal"),Object(r.b)("p",null,"Typings: ",Object(r.b)("inlineCode",{parentName:"p"},"protected _ranCreateAuth: boolean")),Object(r.b)("p",null,"Stores if the auth creation has already ran"))}l.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,O=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?i.a.createElement(O,b(b({ref:t},s),{},{components:n})):i.a.createElement(O,b({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var s=2;s<r;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);