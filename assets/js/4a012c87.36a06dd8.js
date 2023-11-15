"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[801],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),g=n,d=m["".concat(s,".").concat(g)]||m[g]||c[g]||i;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2854:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(4137));const i={author:"Asim Hussain (@jawache)",abstract:"Why granularity is important to impact graphing and the two main types of granularity you can add."},o="Granularity",l={unversionedId:"specification/granularity",id:"specification/granularity",title:"Granularity",description:"A Graph (graph) can be created that is very coarse-grained, a single top-level component, with a single input of long duration.",source:"@site/docs/06-specification/granularity.md",sourceDirName:"06-specification",slug:"/specification/granularity",permalink:"/specification/granularity",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/ief/docs/06-specification/granularity.md",tags:[],version:"current",frontMatter:{author:"Asim Hussain (@jawache)",abstract:"Why granularity is important to impact graphing and the two main types of granularity you can add."},sidebar:"tutorialSidebar",previous:{title:"Durations",permalink:"/specification/durations"},next:{title:"Graph",permalink:"/specification/graph"}},s={},u=[{value:"Structural Granularity",id:"structural-granularity",level:3},{value:"Temporal Granularity",id:"temporal-granularity",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"granularity"},"Granularity"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"/specification/graph"},"Graph")," (graph) can be created that is very coarse-grained, a single top-level component, with a single input of long duration."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"name: My application\ngraph:\n  all-my-servers:\n  ...\n")),(0,n.kt)("p",null,"This graph is legal, it can calculate an impact metric, and it ",(0,n.kt)("em",{parentName:"p"},"might")," be helpful as a starting point."),(0,n.kt)("p",null,"But as you add more granularity to your graph, you generate a more accurate impact metric and surface more interesting information, such as ",(0,n.kt)("strong",{parentName:"p"},"where")," and ",(0,n.kt)("strong",{parentName:"p"},"when")," the outputs are being generated."),(0,n.kt)("p",null,"A top-level course-grained impact metric doesn't tell you which components are generating most of your emissions or when they are generating your emissions. To get more information about where to invest in reducing your application's impact, you need to get granular, both in terms of structural granularity and temporal granularity. "),(0,n.kt)("h3",{id:"structural-granularity"},"Structural Granularity"),(0,n.kt)("p",null,"When you compute a graph, each component gets a separate Impact Metric, and the root Impact Metric is the sum of all the component Impact Metrics."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"name: My application\ngraph: # sum = 52 \n  load-balancer: 1\n  web-server: 15\n  caching-layer: 3\n  application-servers: 23\n  api-servers: 2\n  batch-servers: 3\n  email-servers: 5\n")),(0,n.kt)("p",null,"However, an impact graph contains grouping and component (leaf) nodes. Only components can generate outputs and can be measured. Grouping nodes are simply the sum of the outputs of their child nodes. Grouping nodes allow you to aggregate related components together for helpful analysis. Measure several components individually and see their aggregate impact in a grouping."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"name: My application\ngraph: # sum = 52\n  scalable: # sum = 44\n    3rd-party: # sum = 16\n      load-balancer: 1\n      web-server: 15\n    in-house: # sum = 28\n      caching-layer: 3\n      application-servers: 23 \n      api-servers: 2\n  fixed: # sum = 8\n    batch-servers: 3\n    email-servers: 5\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Structural granularity is all about increasing the number of nodes in your graph; more nodes mean more outputs are being calculated, and this information can surface insights.")),(0,n.kt)("h3",{id:"temporal-granularity"},"Temporal Granularity"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"WARNING")," this is not yet implemented, but it is on the roadmap for future releases!"),(0,n.kt)("p",null,"A graph can calculate a single Impact Metric for its whole duration (graph duration) or create a time series of Impact Metrics for smaller durations (impact durations)."),(0,n.kt)("p",null,"Impact Framework will handle normalizing, bucketing, and slicing time to generate any output time series from any sets of input inputs. The input inputs don't need to be in the same frequency or interval as the output time series. They don't need to be synchronized with the other components or output outputs."),(0,n.kt)("p",null,"However, the more granular inputs you can provide, the more accurate the output impact metric time series will be. More inputs of shorter duration drive temporal granularity."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"name: My application\ngraph: # sum = 52,51,...\n  scalable: # sum = 44,43,...\n    3rd-party: # sum = 16,20,...\n      loal-balancer: 1,2,...\n      web-server: 15,18,...\n    in-house: # sum = 28,23,...\n      caching-layer: 3,1,...\n      application-servers: 23,19,...\n      api-servers: 2,3,...\n  fixed: # sum = 8,8,...\n    batch-servers: 3,3,...\n    email-servers: 5,5,...\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Adding temporal granularity surfaces information regarding when your components generate the most impact. This is achieved by adding in more inputs of shorter durations. Instead of one input per hour, can you provide one per minute?")))}c.isMDXComponent=!0}}]);