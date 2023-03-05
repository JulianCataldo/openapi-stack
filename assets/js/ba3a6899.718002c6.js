"use strict";(self.webpackChunkopenapi_stack=self.webpackChunkopenapi_stack||[]).push([[9322],{4137:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return t?r.createElement(k,i(i({ref:n},l),{},{components:t})):r.createElement(k,i({ref:n},l))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9328:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=t(7462),a=(t(7294),t(4137));const o={sidebar_position:7},i="Mocking API responses",p={unversionedId:"openapi-backend/mocking",id:"openapi-backend/mocking",title:"Mocking API responses",description:"Mocking APIs just got really easy with OpenAPI Backend! Register a notImplemented",source:"@site/docs/openapi-backend/mocking.md",sourceDirName:"openapi-backend",slug:"/openapi-backend/mocking",permalink:"/docs/openapi-backend/mocking",draft:!1,editUrl:"https://github.com/anttiviljami/opanapi-stack/edit/main/docs/openapi-backend/mocking.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Response validation",permalink:"/docs/openapi-backend/response-validation"},next:{title:"Auth with Security Handlers",permalink:"/docs/openapi-backend/security-handlers"}},s={},c=[],l={toc:c},m="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mocking-api-responses"},"Mocking API responses"),(0,a.kt)("p",null,"Mocking APIs just got really easy with OpenAPI Backend! Register a ",(0,a.kt)("a",{parentName:"p",href:"/docs/openapi-backend/api#notimplemented-handler"},(0,a.kt)("inlineCode",{parentName:"a"},"notImplemented")),"\nhandler and use ",(0,a.kt)("a",{parentName:"p",href:"/docs/openapi-backend/api##mockresponseforoperationoperationid-opts"},(0,a.kt)("inlineCode",{parentName:"a"},"mockResponseForOperation()")),"\nto generate mock responses for operations with no custom handlers specified yet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'api.register("notImplemented", (c, req, res) => {\n  const { status, mock } = c.api.mockResponseForOperation(\n    c.operation.operationId\n  );\n  return res.status(status).json(mock);\n});\n')),(0,a.kt)("p",null,"OpenAPI Backend supports mocking responses using both OpenAPI example objects and JSON Schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'paths:\n  "/pets":\n    get:\n      operationId: getPets\n      summary: List pets\n      responses:\n        200:\n          $ref: "#/components/responses/PetListWithExample"\n  "/pets/{id}":\n    get:\n      operationId: getPetById\n      summary: Get pet by its id\n      responses:\n        200:\n          $ref: "#/components/responses/PetResponseWithSchema"\ncomponents:\n  responses:\n    PetListWithExample:\n      description: List of pets\n      content:\n        "application/json":\n          example:\n            - id: 1\n              name: Garfield\n            - id: 2\n              name: Odie\n    PetResponseWithSchema:\n      description: A single pet\n      content:\n        "application/json":\n          schema:\n            type: object\n            properties:\n              id:\n                type: integer\n                minimum: 1\n              name:\n                type: string\n                example: Garfield\n')),(0,a.kt)("p",null,"The example above will yield:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"api.mockResponseForOperation(\"getPets\"); // => { status: 200, mock: [{ id: 1, name: 'Garfield' }, { id: 2, name: 'Odie' }]}\napi.mockResponseForOperation(\"getPetById\"); // => { status: 200, mock: { id: 1, name: 'Garfield' }}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/anttiviljami/openapi-backend/tree/master/examples/express-ts-mock"},"See full Mock API example on Express")))}d.isMDXComponent=!0}}]);