(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7664],{"./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{az:()=>Box});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Box=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.B)("div");Box.displayName="Box";var Square=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.R)((function Square2(props,ref){const{size,centerContent=!0,...rest}=props,styles=centerContent?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Box,{ref,boxSize:size,__css:{...styles,flexShrink:0,flexGrow:0},...rest})}));Square.displayName="Square",(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.R)((function Circle2(props,ref){const{size,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Square,{size,ref,borderRadius:"9999px",...rest})})).displayName="Circle"},"./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>Flex});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Flex=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.R)((function Flex2(props,ref){const{direction,align,justify,wrap,basis,grow,shrink,...rest}=props,styles={display:"flex",flexDirection:direction,alignItems:align,justifyContent:justify,flexWrap:wrap,flexBasis:basis,flexGrow:grow,flexShrink:shrink};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.B.div,{ref,__css:styles,...rest})}));Flex.displayName="Flex"},"./node_modules/@fnando/sparkline/dist/sparkline.commonjs2.js":module=>{module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){var n=r(2),o=r(3),i=r(4);t.exports=function(t){return n(t)||o(t)||i()}},function(t,e,r){"use strict";r.r(e),r.d(e,"sparkline",(function(){return c}));var n=r(0),o=r.n(n);function i(t,e,r,n){return parseFloat((e-n*e/t+r).toFixed(2))}function a(t){return t.value}function u(t,e){var r=document.createElementNS("http://www.w3.org/2000/svg",t);for(var n in e)r.setAttribute(n,e[n]);return r}function c(t,e,r){var n;if(n=t,o()(n.querySelectorAll("*")).forEach((function(t){return n.removeChild(t)})),!(e.length<=1)){r=r||{},"number"==typeof e[0]&&(e=e.map((function(t){return{value:t}})));var c=r.onmousemove,l=r.onmouseout,s="interactive"in r?r.interactive:!!c,f=r.spotRadius||2,p=2*f,d=r.cursorWidth||2,v=parseFloat(t.attributes["stroke-width"].value),b=r.fetch||a,h=e.map((function(t){return b(t)})),y=parseFloat(t.attributes.width.value)-2*p,x=parseFloat(t.attributes.height.value),m=x-2*v-p,g=Math.max.apply(Math,o()(h)),A=-1e3,w=h.length-1,j=y/w,O=[],k=i(g,m,v+f,h[0]),S="M".concat(p," ").concat(k);h.forEach((function(t,r){var n=r*j+p,o=i(g,m,v+f,t);O.push(Object.assign({},e[r],{index:r,x:n,y:o})),S+=" L ".concat(n," ").concat(o)}));var M=u("path",{class:"sparkline--line",d:S,fill:"none"}),C=u("path",{class:"sparkline--fill",d:"".concat(S," V ").concat(x," L ").concat(p," ").concat(x," Z"),stroke:"none"});if(t.appendChild(C),t.appendChild(M),s){var E=u("line",{class:"sparkline--cursor",x1:A,x2:A,y1:0,y2:x,"stroke-width":d}),_=u("circle",{class:"sparkline--spot",cx:A,cy:A,r:f});t.appendChild(E),t.appendChild(_);var F=u("rect",{width:t.attributes.width.value,height:t.attributes.height.value,style:"fill: transparent; stroke: transparent",class:"sparkline--interaction-layer"});t.appendChild(F),F.addEventListener("mouseout",(function(t){E.setAttribute("x1",A),E.setAttribute("x2",A),_.setAttribute("cx",A),l&&l(t)})),F.addEventListener("mousemove",(function(t){var e=t.offsetX,r=O.find((function(t){return t.x>=e}));r||(r=O[w]);var n,o=O[O.indexOf(r)-1],i=(n=o?o.x+(r.x-o.x)/2<=e?r:o:r).x,a=n.y;_.setAttribute("cx",i),_.setAttribute("cy",a),E.setAttribute("x1",i),E.setAttribute("x2",i),c&&c(t,n)}))}}}e.default=c},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}}])},"./src/common/components/Sparkline.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),framer_motion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),_fnando_sparkline__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@fnando/sparkline/dist/sparkline.commonjs2.js"),_fnando_sparkline__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_fnando_sparkline__WEBPACK_IMPORTED_MODULE_1__),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function Sparkline(_ref){var values=_ref.values,backgroundColor=_ref.backgroundColor,fillColor=_ref.fillColor,strokeColor=_ref.strokeColor,interactive=_ref.interactive,lineWidth=_ref.lineWidth,width=_ref.width,height=_ref.height,strokeWidth=_ref.strokeWidth,strokeDasharray=_ref.strokeDasharray,strokeDashoffset=_ref.strokeDashoffset,circleWidth=_ref.circleWidth,containerWidth=_ref.containerWidth,tooltipContent=_ref.tooltipContent,chartStyle=_ref.chartStyle,sparklineRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(values[0]),currentDatapoint=_useState[0],setCurrentDatapoint=_useState[1],findClosest=function findClosest(target,tagName){if(target.tagName===tagName)return target;for(;(target=target.parentNode)&&target.tagName!==tagName;);return target},options={onmousemove:function onmousemove(event,datapoint){if(interactive){var tooltip=findClosest(event.target,"svg").nextElementSibling,date=new Date(datapoint.date).toUTCString().replace(/^.*?, (.*?) \d{2}:\d{2}:\d{2}.*?$/,"$1");datapoint.date!==currentDatapoint.date&&setCurrentDatapoint(datapoint);var modifiedTooltipContent=tooltipContent.replace("{date}",date).replace("{value}",datapoint.value.toFixed(2));tooltip&&(tooltip.hidden=!1,tooltip.textContent=modifiedTooltipContent,tooltip.style.top="".concat(event.offsetY,"px"),tooltip.style.left="".concat(event.offsetX+20,"px"))}},onmouseout:function onmouseout(event){if(interactive){var tooltip=findClosest(event.target,"svg").nextElementSibling;tooltip&&(tooltip.hidden=!0,tooltip.classList.remove("active"))}},spotRadius:circleWidth,interactive,cursorWidth:lineWidth};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){sparklineRef.current&&_fnando_sparkline__WEBPACK_IMPORTED_MODULE_1___default()(sparklineRef.current,values,options)}),[sparklineRef.current]);return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.az,{position:"relative",width:containerWidth},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.s,{flexDirection:"column",position:"absolute",style:chartStyle},__jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.P.svg,{ref:sparklineRef,style:{backgroundColor},width,height,fill:fillColor,stroke:strokeColor,initial:"initial",animate:"animate",strokeWidth,strokeDasharray,strokeDashoffset,variants:{initial:{opacity:0},animate:{opacity:1,transition:{duration:1}}}}),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.az,{as:"span",className:"tooltip",position:"absolute",background:"rgba(0, 0, 0, .7)",color:"#fff",padding:"2px 5px","font-size":"12px",width:"max-content","white-space":"nowrap","z-index":"99",letterSpacing:"0.05em",hidden:"true"})))}Sparkline.displayName="Sparkline",Sparkline.propTypes={values:prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({timestamp:prop_types__WEBPACK_IMPORTED_MODULE_5___default().number.isRequired,value:prop_types__WEBPACK_IMPORTED_MODULE_5___default().number.isRequired})),backgroundColor:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,tooltipContent:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,fillColor:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,strokeColor:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,width:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,containerWidth:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,height:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,strokeWidth:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,strokeDasharray:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,strokeDashoffset:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,interactive:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,circleWidth:prop_types__WEBPACK_IMPORTED_MODULE_5___default().number,lineWidth:prop_types__WEBPACK_IMPORTED_MODULE_5___default().number,chartStyle:prop_types__WEBPACK_IMPORTED_MODULE_5___default().objectOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default().any]))},Sparkline.defaultProps={values:[{name:"Day 1",date:"2017-01-01",value:8.3},{name:"Day 2",date:"2017-02-01",value:10.57},{name:"Day 3",date:"2017-03-01",value:15.73},{name:"Day 4",date:"2017-04-01",value:49.51},{name:"Day 5",date:"2017-05-01",value:85.69},{name:"Day 6",date:"2017-06-01",value:226.51},{name:"Day 7",date:"2017-07-01",value:246.65},{name:"Day 8",date:"2017-08-01",value:213.87},{name:"Day 9",date:"2017-09-01",value:386.61},{name:"Day 10",date:"2017-10-01",value:303.56},{name:"Day 11",date:"2017-11-01",value:298.21}],tooltipContent:"{value}%: {date}",backgroundColor:"inherit",fillColor:"none",strokeColor:"#0097CD",width:"300",containerWidth:"300px",height:"50",strokeWidth:"3",strokeDasharray:"0",strokeDashoffset:"0",interactive:!0,circleWidth:3,lineWidth:2,chartStyle:{top:"0px",left:"0px"}};const __WEBPACK_DEFAULT_EXPORT__=Sparkline;Sparkline.__docgenInfo={description:"",methods:[],displayName:"Sparkline",props:{values:{defaultValue:{value:"[\n  {\n    name: 'Day 1', date: '2017-01-01', value: 8.3,\n  },\n  {\n    name: 'Day 2', date: '2017-02-01', value: 10.57,\n  },\n  {\n    name: 'Day 3', date: '2017-03-01', value: 15.73,\n  },\n  {\n    name: 'Day 4', date: '2017-04-01', value: 49.51,\n  },\n  {\n    name: 'Day 5', date: '2017-05-01', value: 85.69,\n  },\n  {\n    name: 'Day 6', date: '2017-06-01', value: 226.51,\n  },\n  {\n    name: 'Day 7', date: '2017-07-01', value: 246.65,\n  },\n  {\n    name: 'Day 8', date: '2017-08-01', value: 213.87,\n  },\n  {\n    name: 'Day 9', date: '2017-09-01', value: 386.61,\n  },\n  {\n    name: 'Day 10', date: '2017-10-01', value: 303.56,\n  },\n  {\n    name: 'Day 11', date: '2017-11-01', value: 298.21,\n  },\n]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{timestamp:{name:"number",required:!0},value:{name:"number",required:!0}}}},required:!1},tooltipContent:{defaultValue:{value:"'{value}%: {date}'",computed:!1},description:"",type:{name:"string"},required:!1},backgroundColor:{defaultValue:{value:"'inherit'",computed:!1},description:"",type:{name:"string"},required:!1},fillColor:{defaultValue:{value:"'none'",computed:!1},description:"",type:{name:"string"},required:!1},strokeColor:{defaultValue:{value:"'#0097CD'",computed:!1},description:"",type:{name:"string"},required:!1},width:{defaultValue:{value:"'300'",computed:!1},description:"",type:{name:"string"},required:!1},containerWidth:{defaultValue:{value:"'300px'",computed:!1},description:"",type:{name:"string"},required:!1},height:{defaultValue:{value:"'50'",computed:!1},description:"",type:{name:"string"},required:!1},strokeWidth:{defaultValue:{value:"'3'",computed:!1},description:"",type:{name:"string"},required:!1},strokeDasharray:{defaultValue:{value:"'0'",computed:!1},description:"",type:{name:"string"},required:!1},strokeDashoffset:{defaultValue:{value:"'0'",computed:!1},description:"",type:{name:"string"},required:!1},interactive:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},circleWidth:{defaultValue:{value:"3",computed:!1},description:"",type:{name:"number"},required:!1},lineWidth:{defaultValue:{value:"2",computed:!1},description:"",type:{name:"number"},required:!1},chartStyle:{defaultValue:{value:"{\n  top: '0px',\n  left: '0px',\n}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1}}}},"./src/stories/Sparkline.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_common_components_Sparkline__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/common/components/Sparkline.jsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Sparkline",component:_common_components_Sparkline__WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{values:{control:"array"},interactive:{control:"boolean"},lineWidth:{control:"number",table:{category:"SVG Properties"}},circleWidth:{control:"number",table:{category:"SVG Properties"}},containerWidth:{control:"text",table:{category:"SVG Properties"}},width:{table:{category:"SVG Properties"},control:{type:"number"}},chartStyle:{table:{category:"SVG Properties"},control:{type:"object"}},height:{table:{category:"SVG Properties"},control:{type:"number"}},strokeWidth:{table:{category:"SVG Properties"},control:{type:"number"}},strokeDasharray:{table:{category:"SVG Properties"},control:{type:"number"}},strokeDashoffset:{table:{category:"SVG Properties"},control:{type:"number"}},backgroundColor:{table:{category:"Colors"}},fillColor:{table:{category:"Colors"}},strokeColor:{table:{category:"Colors"}}}};var Component=function Component(args){return __jsx(_common_components_Sparkline__WEBPACK_IMPORTED_MODULE_1__.A,args)};Component.displayName="Component";var Default=Component.bind({});Default.args={values:[{name:"Ethereum",date:"2017-01-01",value:8.3},{name:"Ethereum",date:"2017-02-01",value:110.57},{name:"Ethereum",date:"2017-03-01",value:15.73},{name:"Ethereum",date:"2017-04-01",value:349.51},{name:"Ethereum",date:"2017-05-01",value:85.69},{name:"Ethereum",date:"2017-06-01",value:26.51},{name:"Ethereum",date:"2017-07-01",value:246.65},{name:"Ethereum",date:"2017-08-01",value:3.87},{name:"Ethereum",date:"2017-09-01",value:386.61},{name:"Ethereum",date:"2017-10-01",value:303.56},{name:"Ethereum",date:"2017-11-01",value:298.21}],tooltipContent:"{date}: {value}",circleWidth:3,interactive:!0,width:300,height:60,chartStyle:{top:"0px",left:"0px"},strokeWidth:3,strokeDasharray:0,strokeDashoffset:0,backgroundColor:"inherit",fillColor:"none",strokeColor:"#0097CD",lineWidth:2,containerWidth:"300px"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Sparkline {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);