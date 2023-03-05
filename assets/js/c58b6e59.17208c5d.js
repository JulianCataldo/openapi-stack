"use strict";(self.webpackChunkopenapi_stack=self.webpackChunkopenapi_stack||[]).push([[1457],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(4137));const o={sidebar_position:1},i="Testing with msw + openapi-backend mocks",s={unversionedId:"testing/testing-react-with-jest-and-openapi-mocks",id:"testing/testing-react-with-jest-and-openapi-mocks",title:"Testing with msw + openapi-backend mocks",description:"MSW (Mock Service Worker) is a popular library built to intercept and mock network requests commonly used in testing.",source:"@site/docs/testing/testing-react-with-jest-and-openapi-mocks.md",sourceDirName:"testing",slug:"/testing/testing-react-with-jest-and-openapi-mocks",permalink:"/docs/testing/testing-react-with-jest-and-openapi-mocks",draft:!1,editUrl:"https://github.com/anttiviljami/opanapi-stack/edit/main/docs/testing/testing-react-with-jest-and-openapi-mocks.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:".openapiconfig",permalink:"/docs/openapicmd/config"}},p={},l=[{value:"Setting up msw",id:"setting-up-msw",level:3},{value:"Even better with OpenAPI",id:"even-better-with-openapi",level:3},{value:"Enabling Request Validation",id:"enabling-request-validation",level:3},{value:"Custom Handlers",id:"custom-handlers",level:3}],c={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testing-with-msw--openapi-backend-mocks"},"Testing with msw + openapi-backend mocks"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://mswjs.io/"},"MSW")," (Mock Service Worker) is a popular library built to intercept and mock network requests commonly used in testing.")),(0,a.kt)("h3",{id:"setting-up-msw"},"Setting up msw"),(0,a.kt)("p",null,"Here is the basic setup for a rest api mock using msw:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { rest } from "msw";\nimport { setupServer } from "msw/node";\n\nconst server = setupServer(\n  rest.get("/api/pets", (req, res, ctx) => {\n    const pets = [{ id: 1, name: "Garfield", type: "cat" }];\n    return res(ctx.json({ pets }));\n  })\n);\n\nbeforeAll(() => server.listen());\nafterAll(() => server.close());\n')),(0,a.kt)("p",null,"One of the reasons this is extremely cool is because it avoids the pain of having to start up a real local mock backend, such as an express server that needs to be bound to a specific port on the host running the test."),(0,a.kt)("p",null,"This helps keep your tests fast and simple to run, as they should be."),(0,a.kt)("h3",{id:"even-better-with-openapi"},"Even better with OpenAPI"),(0,a.kt)("p",null,"It turns out ",(0,a.kt)("inlineCode",{parentName:"p"},"msw")," together with ",(0,a.kt)("inlineCode",{parentName:"p"},"openapi-backend")," is the perfect combination for mocking REST apis."),(0,a.kt)("p",null,"To provide a full mock for an API, all we need is to create a mock backend with openapi-backend using the API definition and tell msw to use it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { rest } from "msw";\nimport { setupServer } from "msw/node";\nimport OpenAPIBackend from "openapi-backend";\nimport definition from "./path/to/definition.json";\n\n// create our mock backend with openapi-backend\nconst api = new OpenAPIBackend({ definition });\napi.register("notFound", (c, res, ctx) => res(ctx.status(404)));\napi.register("notImplemented", async (c, res, ctx) => {\n  const { status, mock } = api.mockResponseForOperation(\n    c.operation.operationId\n  );\n  ctx.status(status);\n  return res(ctx.json(mock));\n});\n\n// tell msw to intercept all requests to api/* with our mock\nconst server = setupServer(\n  rest.all("/api/*", async (req, res, ctx) =>\n    api.handleRequest(\n      {\n        path: req.url.pathname,\n        query: req.url.search,\n        method: req.method,\n        body: req.bodyUsed ? await req.json() : null,\n        headers: { ...req.headers.raw },\n      },\n      res,\n      ctx\n    )\n  )\n);\n\nbeforeAll(() => server.listen());\nafterAll(() => server.close());\n')),(0,a.kt)("p",null,"Now instead of having to write your own mock handlers for each operation, they're generated from the response schemas and examples defined in the OpenAPI document."),(0,a.kt)("p",null,"What's more: any time the API definition changes, all your mocks will be automatically updated giving you further confidence your app is compatible with the new API version."),(0,a.kt)("h3",{id:"enabling-request-validation"},"Enabling Request Validation"),(0,a.kt)("p",null,"When testing, it's often very useful to make sure your application is actually sending the correct requests to the API."),(0,a.kt)("p",null,"Working with OpenAPI definitions has the benefit that API operations are well defined and requests can be automatically validated using JSON schema."),(0,a.kt)("p",null,"To enable request validation during tests, you can simply register the ",(0,a.kt)("a",{parentName:"p",href:"https://openapistack.co/docs/openapi-backend/api#validationfail-handler"},"validationFail handler")," for openapi-backend:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'api.register("validationFail", (c, res, ctx) =>\n  res(ctx.status(400), ctx.json({ error: c.validation.errors }))\n);\n')),(0,a.kt)("p",null,"When running tests, a malformed call to an API endpoint will now result in a 400 Bad Request error from the mock backend, alongside a useful error message telling you what's wrong with the request."),(0,a.kt)("h3",{id:"custom-handlers"},"Custom Handlers"),(0,a.kt)("p",null,"In some tests it might make sense to provide a different mock than the default one as provided by openapi-backend."),(0,a.kt)("p",null,"Registering your own mock for an API operation in a test is as simple as calling ",(0,a.kt)("inlineCode",{parentName:"p"},"api.register()")," with the operationId and a mock handler:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'it("should call getPets operation", () => {\n  // given\n  const mockResponse = [{ id: 2, name: "Odie" }];\n  const mockHandler = jest.fn((c, res, ctx) => res(ctx.json(mockResponse)));\n  api.register("getPets", mockHandler);\n\n  // when\n  // render(<MyComponent />)...\n\n  // then\n  expect(mockHandler).toBeCalled();\n});\n')))}u.isMDXComponent=!0}}]);