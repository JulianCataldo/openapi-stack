"use strict";(self.webpackChunkopenapi_stack=self.webpackChunkopenapi_stack||[]).push([[2668],{4137:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?i.createElement(f,r(r({ref:n},s),{},{components:t})):i.createElement(f,r({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[d]="string"==typeof e?e:o,r[1]=p;for(var l=2;l<a;l++)r[l]=t[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4338:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var i=t(7462),o=(t(7294),t(4137));const a={sidebar_position:10,title:".openapiconfig",hide_title:!0},r=".openapiconfig",p={unversionedId:"openapicmd/config",id:"openapicmd/config",title:".openapiconfig",description:"You can then use load and auth commands to create a .openapiconfig file to avoid having to pass the openapi document when running openapicmd commands.",source:"@site/docs/openapicmd/config.md",sourceDirName:"openapicmd",slug:"/openapicmd/config",permalink:"/docs/openapicmd/config",draft:!1,editUrl:"https://github.com/anttiviljami/opanapi-stack/edit/main/docs/openapicmd/config.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:".openapiconfig",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Mock Server",permalink:"/docs/openapicmd/mock-server"},next:{title:"Testing with msw + openapi-backend mocks",permalink:"/docs/testing/testing-react-with-jest-and-openapi-mocks"}},c={},l=[{value:"Loading a definition file",id:"loading-a-definition-file",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Unloading",id:"unloading",level:2}],s={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openapiconfig"},".openapiconfig"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can then use ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," commands to create a ",(0,o.kt)("inlineCode",{parentName:"p"},".openapiconfig")," file to avoid having to pass the openapi document when running openapicmd commands.")),(0,o.kt)("p",null,"openapicmd tries to load a ",(0,o.kt)("inlineCode",{parentName:"p"},".openapiconfig")," file in the current working directory or parent directories for default parameters."),(0,o.kt)("h2",{id:"loading-a-definition-file"},"Loading a definition file"),(0,o.kt)("p",null,"To avoid having to pass the openapi file as an argument to openapicmd commands, you can ",(0,o.kt)("em",{parentName:"p"},"load")," a document, which creates or updates a ",(0,o.kt)("inlineCode",{parentName:"p"},".openapiconfig")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openapi load https://petstore3.swagger.io/api/v3/openapi.json\n")),(0,o.kt)("p",null,"Now you can run commands without passing the definition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openapi info\nLoaded: https://petstore3.swagger.io/api/v3/openapi.json\n\ntitle: Swagger Petstore - OpenAPI 3.0\nversion: 1.0.17\ndescription:\nThis is a sample Pet Store Server based on the OpenAPI 3.0 specification.\n")),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"You can also set up authentication strategies for ",(0,o.kt)("a",{parentName:"p",href:"/docs/openapicmd/call#authorization"},"API calls")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openapi auth https://petstore3.swagger.io/api/v3/openapi.json\n? use security scheme api_key\n? api_key: Set API key (api_key) secret123\nWrote auth config to /Users/viljamikuosmanen/Projects/openapi-stack/.openapiconfig. You can now use openapi call with the following auth configs:\n- api_key\n")),(0,o.kt)("h2",{id:"unloading"},"Unloading"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"unload")," command can be used to quickly delete an existing ",(0,o.kt)("inlineCode",{parentName:"p"},".openapiconfig")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openapi unload\n")))}u.isMDXComponent=!0}}]);