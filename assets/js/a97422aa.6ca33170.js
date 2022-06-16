"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[170],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3925:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"faq",title:"Frequently Asked Questions"},l=void 0,c={unversionedId:"guides/faq",id:"guides/faq",title:"Frequently Asked Questions",description:"Do binaries get automatically deleted?",source:"@site/../docs/guides/faq.md",sourceDirName:"guides",slug:"/guides/faq",permalink:"/mongodb-memory-server/docs/guides/faq",draft:!1,editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/guides/faq.md",tags:[],version:"current",frontMatter:{id:"faq",title:"Frequently Asked Questions"},sidebar:"guides",previous:{title:"Quick Start Guide",permalink:"/mongodb-memory-server/docs/guides/quick-start-guide"},next:{title:"Known Issues",permalink:"/mongodb-memory-server/docs/guides/known-issues"}},d={},p=[{value:"Do binaries get automatically deleted?",id:"do-binaries-get-automatically-deleted",level:3},{value:"Why is there no documentation about class-options / interfaces in the documentation?",id:"why-is-there-no-documentation-about-class-options--interfaces-in-the-documentation",level:3},{value:"Do testing database paths get cleaned up?",id:"do-testing-database-paths-get-cleaned-up",level:3}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"do-binaries-get-automatically-deleted"},"Do binaries get automatically deleted?"),(0,o.kt)("p",null,"No, this package will ",(0,o.kt)("strong",{parentName:"p"},"not")," delete any binaries, so after an system / package upgrade the binaries may have to be cleaned manually."),(0,o.kt)("h3",{id:"why-is-there-no-documentation-about-class-options--interfaces-in-the-documentation"},"Why is there no documentation about class-options / interfaces in the documentation?"),(0,o.kt)("p",null,"It is currently recommended to directly look at the TSDoc for these properties to get their type & documentation."),(0,o.kt)("h3",{id:"do-testing-database-paths-get-cleaned-up"},"Do testing database paths get cleaned up?"),(0,o.kt)("p",null,"If the Database-path is a temporary directory (generated with ",(0,o.kt)("inlineCode",{parentName:"p"},"tmp"),"), then it will automatically get cleaned-up when calling ",(0,o.kt)("inlineCode",{parentName:"p"},".stop()"),", this can be disabled with ",(0,o.kt)("inlineCode",{parentName:"p"},".stop(false)"),".",(0,o.kt)("br",{parentName:"p"}),"\n","If the Database-path is manually set with ",(0,o.kt)("inlineCode",{parentName:"p"},"dbPath"),", then it needs to be manually cleaned-up with ",(0,o.kt)("inlineCode",{parentName:"p"},".cleanup(true)"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"8.4.0")," objects can also be used instead of just booleans for parameter in ",(0,o.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/classes/mongo-memory-server#stop"},(0,o.kt)("inlineCode",{parentName:"a"},"stop"))," and ",(0,o.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/classes/mongo-memory-server#cleanup"},(0,o.kt)("inlineCode",{parentName:"a"},"cleanup"))," (the same applies to ",(0,o.kt)("inlineCode",{parentName:"p"},"MongoMemoryReplSet"),").  "),(0,o.kt)("p",{parentName:"div"},"For Example ",(0,o.kt)("inlineCode",{parentName:"p"},".stop({ doCleanup: false })")," can be used instead of ",(0,o.kt)("inlineCode",{parentName:"p"},".stop(false)"),"."))))}m.isMDXComponent=!0}}]);