"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[416],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return u}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),m=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=m(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=m(t),u=r,g=d["".concat(c,".").concat(u)]||d[u]||p[u]||a;return t?o.createElement(g,i(i({ref:n},l),{},{components:t})):o.createElement(g,i({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<a;m++)i[m]=t[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8957:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return p}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],s={id:"test-runners",title:"Integration with Test Runners"},c=void 0,m={unversionedId:"guides/integration-examples/test-runners",id:"guides/integration-examples/test-runners",title:"Integration with Test Runners",description:"This Guide will show how mongodb-memory-server can be used with different frameworks",source:"@site/../docs/guides/integration-examples/test-runners.md",sourceDirName:"guides/integration-examples",slug:"/guides/integration-examples/test-runners",permalink:"/mongodb-memory-server/docs/guides/integration-examples/test-runners",draft:!1,editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/guides/integration-examples/test-runners.md",tags:[],version:"current",frontMatter:{id:"test-runners",title:"Integration with Test Runners"},sidebar:"guides",previous:{title:"Supported Systems",permalink:"/mongodb-memory-server/docs/guides/supported-systems"},next:{title:"Integration with Docker",permalink:"/mongodb-memory-server/docs/guides/integration-examples/docker"}},l={},p=[{value:"jest",id:"jest",level:2},{value:"mocha / chai",id:"mocha--chai",level:2},{value:"AVA test runner",id:"ava-test-runner",level:2}],d={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This Guide will show how ",(0,a.kt)("inlineCode",{parentName:"p"},"mongodb-memory-server")," can be used with different frameworks"),(0,a.kt)("h2",{id:"jest"},"jest"),(0,a.kt)("span",{class:"badge badge--secondary"},"jest version 28"),(0,a.kt)("p",null,"For usage with ",(0,a.kt)("inlineCode",{parentName:"p"},"jest")," it is recommended to use the ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration#globalsetup-string"},(0,a.kt)("inlineCode",{parentName:"a"},"globalSetup"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration#globalteardown-string"},(0,a.kt)("inlineCode",{parentName:"a"},"globalTeardown"))," options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"config.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// this file could be anything (like a json directly imported)\n\nexport = {\n  Memory: true,\n  IP: '127.0.0.1',\n  Port: '27017',\n  Database: 'somedb'\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"jest.config.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  "preset": "ts-jest",\n  "globalSetup": "<rootDir>/test/globalSetup.ts",\n  "globalTeardown": "<rootDir>/test/globalTeardown.ts",\n  "setupFilesAfterEnv": [\n    "<rootDir>/test/setupFile.ts"\n  ]\n}\n\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"globalSetup.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { MongoMemoryServer } from 'mongodb-memory-server';\nimport * as mongoose from 'mongoose';\nimport { config } from './utils/config';\n\nexport = async function globalSetup() {\n  if (config.Memory) { // Config to decided if an mongodb-memory-server instance should be used\n    // it's needed in global space, because we don't want to create a new instance every test-suite\n    const instance = await MongoMemoryServer.create();\n    const uri = instance.getUri();\n    (global as any).__MONGOINSTANCE = instance;\n    process.env.MONGO_URI = uri.slice(0, uri.lastIndexOf('/'));\n  } else {\n    process.env.MONGO_URI = `mongodb://${config.IP}:${config.Port}`;\n  }\n\n  // The following is to make sure the database is clean before an test starts\n  await mongoose.connect(`${process.env.MONGO_URI}/${config.DataBase}`);\n  await mongoose.connection.db.dropDatabase();\n  await mongoose.disconnect();\n};\n\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"globalTeardown.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { MongoMemoryServer } from 'mongodb-memory-server';\nimport { config } from './utils/config';\n\nexport = async function globalTeardown() {\n  if (config.Memory) { // Config to decided if an mongodb-memory-server instance should be used\n    const instance: MongoMemoryServer = (global as any).__MONGOINSTANCE;\n    await instance.stop();\n  }\n};\n")),(0,a.kt)("p",null,"and an ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration#setupfilesafterenv-array"},(0,a.kt)("inlineCode",{parentName:"a"},"setupFilesAfterEnv"))," can be used to connect something like ",(0,a.kt)("inlineCode",{parentName:"p"},"mongoose")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"mongodb")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"setupFile.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"beforeAll(async () => {\n  // put your client connection code here, example with mongoose:\n  await mongoose.connect(process.env['MONGO_URI']);\n});\n\nafterAll(async () => {\n  // put your client disconnection code here, example with mongodb:\n  await mongoose.disconnect();\n});\n")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"It is very important to limit the spawned number of Jest workers on machines that have many cores, because otherwise the tests may run slower than with fewer workers, because the database instance(s) may be hit very hard.",(0,a.kt)("br",{parentName:"p"}),"\n","Use either ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration#maxworkers-number--string"},(0,a.kt)("inlineCode",{parentName:"a"},"--maxWorkers 4"))," or ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/cli#--runinband"},(0,a.kt)("inlineCode",{parentName:"a"},"--runInBand"))," to limit the workers."))),(0,a.kt)("h2",{id:"mocha--chai"},"mocha / chai"),(0,a.kt)("span",{class:"badge badge--secondary"},"mocha version (unknown)"),(0,a.kt)("p",null,"Start Mocha with ",(0,a.kt)("inlineCode",{parentName:"p"},"--timeout 60000")," cause first download of MongoDB binaries may take a time."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import mongoose from 'mongoose';\nimport { MongoMemoryServer } from 'mongodb-memory-server';\n\nlet mongoServer;\nconst opts = { useMongoClient: true }; // remove this option if you use mongoose 5 and above\n\nbefore(async () => {\n  mongoServer = await MongoMemoryServer.create();\n  const mongoUri = mongoServer.getUri();\n  await mongoose.connect(mongoUri, opts);\n});\n\nafter(async () => {\n  await mongoose.disconnect();\n  await mongoServer.stop();\n});\n\ndescribe('...', () => {\n  it('...', async () => {\n    const User = mongoose.model('User', new mongoose.Schema({ name: String }));\n    const cnt = await User.count();\n    expect(cnt).to.equal(0);\n  });\n});\n")),(0,a.kt)("h2",{id:"ava-test-runner"},"AVA test runner"),(0,a.kt)("p",null,"For AVA written ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zellwk/ava/blob/8b7ccba1d80258b272ae7cae6ba4967cd1c13030/docs/recipes/endpoint-testing-with-mongoose.md"},"detailed tutorial")," how to test mongoose models by @zellwk."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Note that this mentioned tutorial is pre 7.x"))))}u.isMDXComponent=!0}}]);