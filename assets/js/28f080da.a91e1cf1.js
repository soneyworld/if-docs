"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[806],{4137:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>c});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(t),c=i,g=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return t?a.createElement(g,r(r({ref:n},s),{},{components:t})):a.createElement(g,r({ref:n},s))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8227:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=t(7462),i=(t(7294),t(4137));const l={"sidebar-position":1},r="How to build plugins",o={unversionedId:"developers/how-to-build-plugins",id:"developers/how-to-build-plugins",title:"How to build plugins",description:"The IF is designed to be as composable as possible. This means you can develop your own plugins and use them in a pipeline.",source:"@site/docs/developers/how-to-build-plugins.md",sourceDirName:"developers",slug:"/developers/how-to-build-plugins",permalink:"/developers/how-to-build-plugins",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/ief/docs/developers/how-to-build-plugins.md",tags:[],version:"current",frontMatter:{"sidebar-position":1},sidebar:"tutorialSidebar",previous:{title:"Developers",permalink:"/developers/"},next:{title:"How to make plugins production ready",permalink:"/developers/how-to-refine-plugins"}},p={},u=[{value:"The plugin interface",id:"the-plugin-interface",level:2},{value:"Global config",id:"global-config",level:2},{value:"Methods",id:"methods",level:2},{value:"execute",id:"execute",level:3},{value:"Params",id:"params",level:4},{value:"Returns",id:"returns",level:4},{value:"What are <code>PluginParams</code>?",id:"what-are-pluginparams",level:2},{value:"Summary of steps",id:"summary-of-steps",level:2},{value:"Walk-through",id:"walk-through",level:2},{value:"Running your plugin",id:"running-your-plugin",level:2},{value:"Linking local plugin",id:"linking-local-plugin",level:3},{value:"Using plugin directly from github",id:"using-plugin-directly-from-github",level:3}],s={toc:u};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-build-plugins"},"How to build plugins"),(0,i.kt)("p",null,"The IF is designed to be as composable as possible. This means you can develop your own plugins and use them in a pipeline.\nTo help developers write Typescript plugins to integrate easily into IF, we provide the ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginInterface")," interface. Here's an overview of the stages you need to follow to integrate your plugin:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create a Typescript file that implements the ",(0,i.kt)("inlineCode",{parentName:"li"},"PluginInterface")),(0,i.kt)("li",{parentName:"ul"},"install the plugin"),(0,i.kt)("li",{parentName:"ul"},"initialize and invoke the plugin in your manifest file")),(0,i.kt)("h2",{id:"the-plugin-interface"},"The plugin interface"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginInterface")," is structured as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type PluginInterface = {\n  execute: (\n    inputs: PluginParams[],\n    config?: Record<string, any>\n  ) => PluginParams[];\n  metadata: {\n    kind: string;\n  };\n  [key: string]: any;\n};\n")),(0,i.kt)("p",null,"The interface requires an execute function where your plugin logic is implemented. It should also return metadata. This can include any relevant metadata you want to include, with a minimum requirement being ",(0,i.kt)("inlineCode",{parentName:"p"},"kind: execute"),". "),(0,i.kt)("h2",{id:"global-config"},"Global config"),(0,i.kt)("p",null,"Global config is passed as an argument to the plugin. In your plugin code you can handle it as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Here's the function definition - notice that global config is passed in here!\nexport const Plugin = (globalConfig: YourConfig): PluginInterface => {\n\n// in here you have access to globalConfig[your-params]\n\n}\n")),(0,i.kt)("p",null,"The parameters available to you in ",(0,i.kt)("inlineCode",{parentName:"p"},"globalConfig")," depends upon the parameters you pass in the manifest file. For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sum")," plugin has access to ",(0,i.kt)("inlineCode",{parentName:"p"},"input-parameters")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"output-parameter")," in its global config, and it is defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Initialize")," block in the manifest file as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"initialize:\n  plugins:\n    sum:\n      method: Sum\n      path: '@grnsft/if-plugins'\n      global-config:\n        input-parameters: ['cpu/energy', 'network/energy']\n        output-parameter: 'energy'\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"execute"},"execute"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"execute()")," is where the main calculation logic of the plugin is implemented. It always takes ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," (an array of ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginParams"),") as an argument and returns an updated set of ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs"),"."),(0,i.kt)("h4",{id:"params"},"Params"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"inputs")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PluginParams[]")),(0,i.kt)("td",{parentName:"tr",align:null},"Array of data provided in the ",(0,i.kt)("inlineCode",{parentName:"td"},"inputs")," field of a component in a manifest file")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Return value"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"outputs")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Promise<PluginParams[]>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Promise")," resolving to an array of updated ",(0,i.kt)("inlineCode",{parentName:"td"},"PluginParams[]"))))),(0,i.kt)("h2",{id:"what-are-pluginparams"},"What are ",(0,i.kt)("inlineCode",{parentName:"h2"},"PluginParams"),"?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PluginParams")," are a fundamental data type in the Impact Framework. The type is defined as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type PluginParams = {\n  [key: string]: any;\n};\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginParams")," type therefore defines an array of key-value pairs."),(0,i.kt)("p",null,"IF needs to know about all the parameters used in each pipeline. The default behaviour is that it grabs parameters from a local file, ",(0,i.kt)("inlineCode",{parentName:"p"},"params.ts"),". This file defines the standard set of parameter names, their units, a descriptiona nd the method used to aggregate them across time or across a tree."),(0,i.kt)("p",null,"If your new plugin uses new parameters that are not included in ",(0,i.kt)("inlineCode",{parentName:"p"},"params.ts"),", you can simply add them to your manifest file in a section named ",(0,i.kt)("inlineCode",{parentName:"p"},"params"),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: params-demo\ndescription: null\ntags:\nparams: \n  - name: new-param-1\n    description: dummy\n    aggregation: sum\n    unit: MT\n  - name: new-param-2\n    description: dummy\n    aggregation: sum\n    unit: s\n")),(0,i.kt)("p",null,"This will append the new parameter informatrion to the object loaded from ",(0,i.kt)("inlineCode",{parentName:"p"},"params.ts")," and you can use your plugin as normal. In effect, you have append-only access to ",(0,i.kt)("inlineCode",{parentName:"p"},"params.ts")," via your manifest file without ever having to change any IF source code."),(0,i.kt)("p",null,"However, if you are an advanced user and you want to use something other than out recommended standard set of parameters, you can provide a replacement ",(0,i.kt)("inlineCode",{parentName:"p"},"params.ts")," file on the command line. This file should be a ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"js"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"ts")," file with the ame structure as our ",(0,i.kt)("inlineCode",{parentName:"p"},"params.ts"),". You can rename the file. You then pass the path to the file to the ",(0,i.kt)("inlineCode",{parentName:"p"},"override-params")," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"ie --manifest <path-to-manifest> --override-params <path-to-your-params-file>\n")),(0,i.kt)("h2",{id:"summary-of-steps"},"Summary of steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a new plugin conforming to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Plugin")," interface"),(0,i.kt)("li",{parentName:"ul"},"Complete the actual plugin logic in the ",(0,i.kt)("inlineCode",{parentName:"li"},"execute")," method, returning an array of ",(0,i.kt)("inlineCode",{parentName:"li"},"PluginParams")),(0,i.kt)("li",{parentName:"ul"},"Add any new values to the ",(0,i.kt)("inlineCode",{parentName:"li"},"params")," field in your manifest file.")),(0,i.kt)("p",null,"You should also create unit tests for your plugin to demonstrate correct execution and handling of corner cases."),(0,i.kt)("h2",{id:"walk-through"},"Walk-through"),(0,i.kt)("p",null,"To demonstrate how to build a plugin that conforms to this interface, let's examine the simple ",(0,i.kt)("inlineCode",{parentName:"p"},"sum")," plugin."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sum")," plugin implements the following logic:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"sum whatever is provided in the ",(0,i.kt)("inlineCode",{parentName:"li"},"input-parameters")," field from ",(0,i.kt)("inlineCode",{parentName:"li"},"globalConfig"),"."),(0,i.kt)("li",{parentName:"ul"},"append the result to each element in the output array with the name provided as ",(0,i.kt)("inlineCode",{parentName:"li"},"output-parameter")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"globalConfig"),".")),(0,i.kt)("p",null,"Let's look at how you would manifestement this from scratch:"),(0,i.kt)("p",null,"The plugin must be a function conforming to ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginInterface"),". You can call the function ",(0,i.kt)("inlineCode",{parentName:"p"},"Sum"),", and inside the body you can add the signature for the ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export const Sum = (globalConfig: SumConfig): PluginInterface => {\n  const errorBuilder = buildErrorMessage(Sum.name);\n  const metadata = {\n    kind: 'execute',\n  };\n\n  /**\n   * Calculate the sum of each input.\n   */\n  const execute = async (inputs: PluginParams[]): Promise<PluginParams[]> => {\n\n  };\n\n  return {\n    metadata,\n    execute,\n  };\n\n}\n")),(0,i.kt)("p",null,"Your plugin now has the basic structure required for IF integration. Your next task is to add code to the body of ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," to enable the actual plugin logic to be implemented."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," function should grab the ",(0,i.kt)("inlineCode",{parentName:"p"},"input-parameters")," (the values to sum) from ",(0,i.kt)("inlineCode",{parentName:"p"},"globalConfig"),". It should then iterate over the ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," array, get the values for each of the ",(0,i.kt)("inlineCode",{parentName:"p"},"input-parameters")," and append them to the ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," array, using the name from the ",(0,i.kt)("inlineCode",{parentName:"p"},"output-parameter")," value in ",(0,i.kt)("inlineCode",{parentName:"p"},"globalConfig"),". Here's what this can look like, with the actual calculation pushed to a separate function, ",(0,i.kt)("inlineCode",{parentName:"p"},"calculateSum"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  /**\n   * Calculate the sum of each input.\n   */\n  const execute = async (inputs: PluginParams[]): Promise<PluginParams[]> => {\n    const inputParameters = globalConfig['input-parameters'];\n    const outputParameter = globalConfig['output-parameter'];\n\n    return inputs.map(input => {\n      return {\n        ...input,\n        [outputParameter]: calculateSum(input, inputParameters),\n      };\n    });\n\n  return {\n    metadata,\n    execute,\n  };\n\n}\n")),(0,i.kt)("p",null,"Now we just need to define what happens in ",(0,i.kt)("inlineCode",{parentName:"p"},"calculateSum")," - this can be a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"reduce"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  /**\n   * Calculates the sum of the energy components.\n   */\n  const calculateSum = (input: PluginParams, inputParameters: string[]) =>\n    inputParameters.reduce(\n      (accumulator, metricToSum) => accumulator + input[metricToSum],\n      0\n    );\n")),(0,i.kt)("p",null,"Note that this example did not include any validation or error handling - you will likely want to add some for a real plugin."),(0,i.kt)("p",null,"Finally, if your plugin used any fields in ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," or created new ",(0,i.kt)("inlineCode",{parentName:"p"},"outputs")," that have not been used in the Impact Framework before, then you should add them to ",(0,i.kt)("inlineCode",{parentName:"p"},"params.ts"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"params.ts")," can be found in the path ",(0,i.kt)("inlineCode",{parentName:"p"},"src/config"),"."),(0,i.kt)("p",null,"Each entry in ",(0,i.kt)("inlineCode",{parentName:"p"},"params.ts")," looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"carbon:\n  description: an amount of carbon emitted into the atmosphere\n  unit: gCO2e\n  aggregation: sum\n")),(0,i.kt)("p",null,"This information allows ",(0,i.kt)("inlineCode",{parentName:"p"},"ie")," to programmatically make decisions about how to handle values in features such as aggregation, time normalization and visualizations, and also acts as a global reference document for understanding IF data. The example above is for ",(0,i.kt)("inlineCode",{parentName:"p"},"carbon"),"."),(0,i.kt)("p",null,"You should add your new data, give a name, define a unit and short description. The ",(0,i.kt)("inlineCode",{parentName:"p"},"aggregation")," field determines how the value is treated when some manipulation has to be done to spread the value over time or aggregate it."),(0,i.kt)("p",null,"For absolute metrics like carbon, the right value is ",(0,i.kt)("inlineCode",{parentName:"p"},"sum")," because you would want to add carbon emissions from each timestep when you aggregate over time."),(0,i.kt)("p",null,"For proportional metrics, the right value is ",(0,i.kt)("inlineCode",{parentName:"p"},"avg"),". For example, you would want to calculate the average ",(0,i.kt)("inlineCode",{parentName:"p"},"cpu/utilization")," - it would not make sense to sum it when aggregating over multiple timesteps."),(0,i.kt)("p",null,"Finally, values that should always be presented identically regardless of any aggregation, such as names or global constants, should be given the ",(0,i.kt)("inlineCode",{parentName:"p"},"aggregation-method")," value ",(0,i.kt)("inlineCode",{parentName:"p"},"none"),"."),(0,i.kt)("p",null,"Now you are ready to run your plugin using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ie")," CLI tool!"),(0,i.kt)("h2",{id:"running-your-plugin"},"Running your plugin"),(0,i.kt)("h3",{id:"linking-local-plugin"},"Linking local plugin"),(0,i.kt)("p",null,"For using locally developed plugin in ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," please follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the root level of a locally developed plugin run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm link"),", which will create a global package. It uses ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file's ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," field as a package name. Additionally, name can be checked by running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm ls -g --depth=0 --link=true"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use the linked plugin in manifest by specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"method"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"initialize")," block in the manifest file."))),(0,i.kt)("p",null,"Alternatively you can ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run build")," inside your plugin repository and then ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install <your-plugin-repository-path>"),"."),(0,i.kt)("h3",{id:"using-plugin-directly-from-github"},"Using plugin directly from github"),(0,i.kt)("p",null,"You can simply save your plugin in a public Github repository and pass the path to it in your manifest."),(0,i.kt)("p",null,"For example, for a plugin saved in ",(0,i.kt)("inlineCode",{parentName:"p"},"github.com/my-repo/my-plugin")," you can do the following:"),(0,i.kt)("p",null,"npm install your plugin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install https://github.com/my-repo/my-plugin\n")),(0,i.kt)("p",null,"Then, in your manifest file, provide the path in the plugin instantiation. You also need to specify which function the plugin instantiates. Let's say you are using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sum")," plugin from the example above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: plugin-demo\ndescription: loads plugin\ntags: null\ninitialize:\n  plugins:\n    my-plugin:\n      kind: plugin\n      method: Sum\n      path: https://github.com/my-repo/my-plugin\ntree:\n  children:\n    child:\n      config:\n      inputs:\n")),(0,i.kt)("p",null,"Now, when you run the manifest file using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ie"),", it will load the plugin automatically."),(0,i.kt)("p",null,"For local development we recommend running with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm run ie --manifest <path-to-your-impl> --output <path-to-save-output>\n")),(0,i.kt)("p",null,"For production use, you should globally install the latest release of the framework and your plugin and use the following command to run it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"ie --manifest <path-to-your-manifest>\n")))}m.isMDXComponent=!0}}]);