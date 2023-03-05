"use strict";(self.webpackChunkopenapi_stack=self.webpackChunkopenapi_stack||[]).push([[3920],{4137:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>v});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(t),f=a,v=c["".concat(p,".").concat(f)]||c[f]||u[f]||o;return t?r.createElement(v,s(s({ref:n},d),{},{components:t})):r.createElement(v,s({ref:n},d))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1874:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(7462),a=(t(7294),t(4137));const o={sidebar_position:5},s="Response validation",i={unversionedId:"openapi-backend/response-validation",id:"openapi-backend/response-validation",title:"Response validation",description:"While not recommended for production APIs, to enable response validation for your handlers, you can register a postResponseHandler",source:"@site/docs/openapi-backend/response-validation.md",sourceDirName:"openapi-backend",slug:"/openapi-backend/response-validation",permalink:"/docs/openapi-backend/response-validation",draft:!1,editUrl:"https://github.com/anttiviljami/opanapi-stack/edit/main/docs/openapi-backend/response-validation.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Request validation",permalink:"/docs/openapi-backend/request-validation"},next:{title:"Mocking API responses",permalink:"/docs/openapi-backend/mocking"}},p={},l=[],d={toc:l},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"response-validation"},"Response validation"),(0,a.kt)("p",null,"While not recommended for production APIs, to enable response validation for your handlers, you can register a ",(0,a.kt)("a",{parentName:"p",href:"/docs/openapi-backend/api#postresponsehandler-handler"},(0,a.kt)("inlineCode",{parentName:"a"},"postResponseHandler")),"\nto add a response validation step using ",(0,a.kt)("a",{parentName:"p",href:"/docs/openapi-backend/api#validateresponseres-operation"},(0,a.kt)("inlineCode",{parentName:"a"},"validateResponse")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'api.register({\n  getPets: (c) => {\n    // when a postResponseHandler is registered, your operation handlers\' return value gets passed to context.response\n    return [{ id: 1, name: "Garfield" }];\n  },\n  postResponseHandler: (c: Context, _req: Request, res: Response) => {\n    const valid = c.api.validateResponse(c.response, c.operation);\n    if (valid.errors) {\n      // response validation failed\n      return res.status(502).json({ status: 502, err: valid.errors });\n    }\n    return res.status(200).json(c.response);\n  },\n});\n')),(0,a.kt)("p",null,"It's also possible to validate the response headers using ",(0,a.kt)("a",{parentName:"p",href:"/docs/openapi-backend/api#validateresponseheadersheaders-operation-opts"},(0,a.kt)("inlineCode",{parentName:"a"},"validateResponseHeaders")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'api.register({\n  getPets: (c) => {\n    // when a postResponseHandler is registered, your operation handlers\' return value gets passed to context.response\n    return [{ id: 1, name: "Garfield" }];\n  },\n  postResponseHandler: (c, req, res) => {\n    const valid = c.api.validateResponseHeaders(res.headers, c.operation, {\n      statusCode: res.statusCode,\n      setMatchType: "exact",\n    });\n    if (valid.errors) {\n      // response validation failed\n      return res.status(502).json({ status: 502, err: valid.errors });\n    }\n    return res.status(200).json(c.response);\n  },\n});\n')))}u.isMDXComponent=!0}}]);