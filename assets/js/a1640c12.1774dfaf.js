"use strict";(self.webpackChunkopenapi_stack=self.webpackChunkopenapi_stack||[]).push([[5195],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,y=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(4137));const i={title:"Philosophy",hide_title:!0,sidebar_position:2},o="Philosophy",s={unversionedId:"api-first",id:"api-first",title:"Philosophy",description:"While modern alternatives like GraphQL and tRPC are awesome, REST keeps growing and improving as an industry standard API design pattern largely thanks to the widely adopted OpenAPI specification.",source:"@site/docs/api-first.md",sourceDirName:".",slug:"/api-first",permalink:"/docs/api-first",draft:!1,editUrl:"https://github.com/anttiviljami/opanapi-stack/edit/main/docs/api-first.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Philosophy",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/intro"},next:{title:"Quick Start",permalink:"/docs/openapi-backend/intro"}},p={},l=[{value:"Why API First?",id:"why-api-first",level:2},{value:"Type Safety",id:"type-safety",level:2},{value:"No Code Generation",id:"no-code-generation",level:2},{value:"Framework agnostic",id:"framework-agnostic",level:2}],c={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"philosophy"},"Philosophy"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"While modern alternatives like GraphQL and tRPC are awesome, REST keeps growing and improving as an industry standard API design pattern largely thanks to the widely adopted ",(0,r.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI specification"),"."),(0,r.kt)("p",{parentName:"admonition"},"openapi-stack is an open source toolkit to bring full stack developer experience up to modern standards for software teams using OpenAPI and Typescript, enabling software teams to go API First.")),(0,r.kt)("div",{className:"text-center"},(0,r.kt)("img",{alt:"API First Cycle",src:"/img/openapi-stack.drawio.png"})),(0,r.kt)("h2",{id:"why-api-first"},"Why API First?"),(0,r.kt)("p",null,"The core idea of ",(0,r.kt)("em",{parentName:"p"},"API First")," is to treat API specs as a first class citizen in your software architecture, using them as part of the implementation instead of easily out-of-date documentation."),(0,r.kt)("p",null,"In practice this means teams use machine readable specifications like OpenAPI as contracts to rapidly iterate using cheap API mocking; not blocked by backend implementations being completed or changed."),(0,r.kt)("p",null,"API First software teams are also able to effectively collaborate on software design and data modeling using API schemas as a source of truth for types across the entire codebase."),(0,r.kt)("h2",{id:"type-safety"},"Type Safety"),(0,r.kt)("p",null,"Since OpenAPI specification already leverages ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON Schema")," to define types for data in your software, teams should be able to directly utilise them in the codebase as Typescript types."),(0,r.kt)("p",null,"Use of types significantly improves developer experience and code quality \u2013 especially when shared and used across the stack both in backend implementation and client-side."),(0,r.kt)("p",null,"openapi-stack comes batteries included with ",(0,r.kt)("a",{parentName:"p",href:"/docs/openapi-client-axios/typegen"},"typegen")," built exactly for this purpose."),(0,r.kt)("h2",{id:"no-code-generation"},"No Code Generation"),(0,r.kt)("p",null,"Lots of code generation tools out there for OAS, but developers don't always enjoy working with code generation. Achieving great developer experience in a codebase with generated code is not always easy and often requires significant investment."),(0,r.kt)("p",null,"With openapi-stack you can say goodbye to generated client implementations or annoying backend boilerplate."),(0,r.kt)("p",null,"The only thing we generate are types from your API specs."),(0,r.kt)("h2",{id:"framework-agnostic"},"Framework agnostic"),(0,r.kt)("p",null,"openapi-stack is not an opinionated framework, nor does it require you to pick any specific framework."),(0,r.kt)("p",null,"You choose whether to build your frontend in React, Angular, Vue, Svelte, your backend with Express, Nest.js, AWS Lambda, Google Cloud Function, etc."))}u.isMDXComponent=!0}}]);