"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[754],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9406:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(4137));const o={"sidebar-position":4},i="How to visualize results",s={unversionedId:"developers/how-to-visualize-results",id:"developers/how-to-visualize-results",title:"How to visualize results",description:"(for any questions / help needed on IF visualization please raise an issue here: IF issues)",source:"@site/docs/developers/how-to-visualize-results.md",sourceDirName:"developers",slug:"/developers/how-to-visualize-results",permalink:"/developers/how-to-visualize-results",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/if-docs/edit/master/docs/developers/how-to-visualize-results.md",tags:[],version:"current",frontMatter:{"sidebar-position":4},sidebar:"tutorialSidebar",previous:{title:"How to make plugins production ready",permalink:"/developers/how-to-refine-plugins"},next:{title:"How to write unit tests",permalink:"/developers/how-to-write-unit-tests"}},l={},u=[{value:"Grafana",id:"grafana",level:2},{value:"Visualization example",id:"visualization-example",level:3}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-visualize-results"},"How to visualize results"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(for any questions / help needed on IF visualization please raise an issue here: ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/Green-Software-Foundation/if/issues"},"IF issues"),")")),(0,a.kt)("p",null,"There are currently 2 ways to visualize Impact Framework outputs:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Using the ",(0,a.kt)("strong",{parentName:"li"},"Simple HTML Exporter plugin"),". (NOT CURRENTLY WORKING! This plugin was broken by an IF refactor and is not yet fixed.)"),(0,a.kt)("li",{parentName:"ol"},"Using ",(0,a.kt)("strong",{parentName:"li"},"Grafana"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Grafana")," is the more standardized method for visualization. It also provides much more control over what's being visualized and how. Nevertheless, it requires some setting up."),(0,a.kt)("h2",{id:"grafana"},"Grafana"),(0,a.kt)("p",null,"(See also ",(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/"},"https://grafana.com/"),")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Grafana")," is an open source analytics & monitoring solution for every database."),(0,a.kt)("p",null,"One of its main features is the ability to create dashboards with various types of data visualizations."),(0,a.kt)("p",null,"Please follow these instructions ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if/blob/dev/grafana/IF_GRAFANA_SETUP.md"},"here")," to set up a ",(0,a.kt)("strong",{parentName:"p"},"Grafana")," dashboard."),(0,a.kt)("p",null,"This method requires converting the resulting output yml into a CSV. The standard way to do so would be to use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if-plugins/tree/main/src/lib/csv-export"},"CSV export")," plugin."),(0,a.kt)("h3",{id:"visualization-example"},"Visualization example"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img.png",src:r(3127).Z,width:"1087",height:"671"})))}c.isMDXComponent=!0},3127:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/grafana-sample-396404157784310b5e568dd13bbcf331.png"}}]);