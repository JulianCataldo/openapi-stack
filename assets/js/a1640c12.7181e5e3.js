"use strict";(self.webpackChunkopenapi_stack=self.webpackChunkopenapi_stack||[]).push([[5195],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(4137));const o={title:"Philosophy",hide_title:!0,sidebar_position:2},a="Philosophy",s={unversionedId:"api-first",id:"api-first",title:"Philosophy",description:"openapi-stack is built to enable API First worklows and great developer experience for software teams using OAS and Typescript.",source:"@site/docs/api-first.md",sourceDirName:".",slug:"/api-first",permalink:"/docs/api-first",draft:!1,editUrl:"https://github.com/epilot-dev/docs/edit/main/docs/api-first.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Philosophy",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/intro"},next:{title:"Quick Start",permalink:"/docs/openapi-backend/intro"}},l={},p=[{value:"Why API First?",id:"why-api-first",level:2},{value:"Type Safety",id:"type-safety",level:2},{value:"No Code Generation",id:"no-code-generation",level:2},{value:"Framework agnostic",id:"framework-agnostic",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"philosophy"},"Philosophy"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"openapi-stack is built to enable API First worklows and great developer experience for software teams using OAS and Typescript.")),(0,i.kt)("div",{className:"text-center"},(0,i.kt)("img",{alt:"API First Cycle",src:"/img/openapi-stack.drawio.png"})),(0,i.kt)("h2",{id:"why-api-first"},"Why API First?"),(0,i.kt)("p",null,"The core idea of ",(0,i.kt)("em",{parentName:"p"},"API First")," is to treat API specs as a first class citizen in your software architecture, using them as part of the implementation instead of easily out-of-date documentation."),(0,i.kt)("p",null,"This means teams using machine readable specifications like OpenAPI leverage the API design as a contract to rapidly iterate and parallelize their software development using cheap API mocking; not having to wait around for backend implementations to be completed."),(0,i.kt)("p",null,"API First software teams are also able to more effectively collaborate on API design, often using it as a primary way to design data models with well defined types used across the codebase."),(0,i.kt)("h2",{id:"type-safety"},"Type Safety"),(0,i.kt)("p",null,"Since OpenAPI specification already leverages JSON Schema to define types for data in your software, teams should be able to directly utilise them in the codebase as Typescript types."),(0,i.kt)("p",null,"Use of types significantly improves developer experience and code qualtiy, especially when shared and used across the stack both in backend implementation and client-side."),(0,i.kt)("p",null,"openapi-stack comes batteries included with ",(0,i.kt)("a",{parentName:"p",href:"/docs/openapi-client-axios/typegen"},"typegen")," built exactly for this purpose."),(0,i.kt)("h2",{id:"no-code-generation"},"No Code Generation"),(0,i.kt)("p",null,"Lots of code generation tools out there for OAS, but developers don't always enjoy working with code generation tools. Achieving great developer experience in a codebase with generated code is not always easy and often requires significant investment."),(0,i.kt)("p",null,"With openapi-stack you can say goodbye to generated client implementations or annoying backend boilerplate."),(0,i.kt)("p",null,"The only thing we generate are types from your API specs."),(0,i.kt)("h2",{id:"framework-agnostic"},"Framework agnostic"),(0,i.kt)("p",null,"openapi-stack is not an opinionated framework, nor does it require you to pick any specific framework."),(0,i.kt)("p",null,"You choose whether to build your frontend in React, Angular, Vue, Svelte, your backend with Express, Nest.js, AWS Lambda, Google Cloud Function, etc."),(0,i.kt)("p",null,"These libraries are built to be simple, generic and work on pure Typescript or Javascript."))}u.isMDXComponent=!0}}]);