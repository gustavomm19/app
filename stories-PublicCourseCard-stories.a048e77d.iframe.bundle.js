(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2373],{"./node_modules/@chakra-ui/avatar/dist/chunk-2RQKHYD2.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>AvatarBadge});var _chunk_QVBG3QXJ_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/avatar/dist/chunk-QVBG3QXJ.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),placementMap={"top-start":{top:"0",insetStart:"0",transform:"translate(-25%, -25%)"},"top-end":{top:"0",insetEnd:"0",transform:"translate(25%, -25%)"},"bottom-start":{bottom:"0",insetStart:"0",transform:"translate(-25%, 25%)"},"bottom-end":{bottom:"0",insetEnd:"0",transform:"translate(25%, 25%)"}},AvatarBadge=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function AvatarBadge2(props,ref){const{placement="bottom-end",className,...rest}=props,styles=(0,_chunk_QVBG3QXJ_mjs__WEBPACK_IMPORTED_MODULE_2__.d)(),badgeStyles={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",...placementMap[placement],...styles.badge};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.m.div,{ref,...rest,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-avatar__badge",className),__css:badgeStyles})}));AvatarBadge.displayName="AvatarBadge"},"./node_modules/@chakra-ui/image/dist/chunk-E3YVMML4.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Img});var _chunk_QBIO4VEB_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/image/dist/chunk-QBIO4VEB.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Img=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.m.img,{ref,as:_chunk_QBIO4VEB_mjs__WEBPACK_IMPORTED_MODULE_3__.Z,className:"chakra-image",...props})))},"./node_modules/@chakra-ui/layout/dist/chunk-CRIDK7KT.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>WrapItem});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_breakpoint_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");function px(value){return"number"==typeof value?`${value}px`:value}(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Wrap2(props,ref){const{spacing="0.5rem",spacingX,spacingY,children,justify,direction,align,className,shouldWrapChildren,...rest}=props,styles=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{const{spacingX:x=spacing,spacingY:y=spacing}={spacingX,spacingY};return{"--chakra-wrap-x-spacing":theme=>(0,_chakra_ui_breakpoint_utils__WEBPACK_IMPORTED_MODULE_3__.XQ)(x,(value=>px((0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.fr)("space",value)(theme)))),"--chakra-wrap-y-spacing":theme=>(0,_chakra_ui_breakpoint_utils__WEBPACK_IMPORTED_MODULE_3__.XQ)(y,(value=>px((0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.fr)("space",value)(theme)))),"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:justify,alignItems:align,flexDirection:direction,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}}),[spacing,spacingX,spacingY,justify,align,direction]),childrenToRender=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>shouldWrapChildren?react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children,((child,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WrapItem,{children:child},index))):children),[children,shouldWrapChildren]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.m.div,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-wrap",className),overflow:"hidden",...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.m.ul,{className:"chakra-wrap__list",__css:styles,children:childrenToRender})})})).displayName="Wrap";var WrapItem=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function WrapItem2(props,ref){const{className,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.m.li,{ref,__css:{display:"flex",alignItems:"flex-start"},className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-wrap__listitem",className),...rest})}));WrapItem.displayName="WrapItem"},"./node_modules/@chakra-ui/lazy-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function lazyDisclosure(options){const{wasSelected,enabled,isSelected,mode="unmount"}=options;return!enabled||(!!isSelected||!("keepMounted"!==mode||!wasSelected))}__webpack_require__.d(__webpack_exports__,{k:()=>lazyDisclosure})},"./src/stories/PublicCourseCard.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>PublicCourseCard_stories,withDescription:()=>withDescription});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),addDays=__webpack_require__("./node_modules/date-fns/esm/addDays/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),chunk_7NLW6UB6=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-7NLW6UB6.mjs"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_E3YVMML4=__webpack_require__("./node_modules/@chakra-ui/image/dist/chunk-E3YVMML4.mjs"),useTranslation=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),NextChakraLink=__webpack_require__("./src/common/components/NextChakraLink.jsx"),Text=__webpack_require__("./src/common/components/Text.jsx"),Heading=__webpack_require__("./src/common/components/Heading.jsx"),ProjectsSection=__webpack_require__("./src/common/components/ProjectsSection.jsx"),useStyle=__webpack_require__("./src/common/hooks/useStyle.js"),variables=__webpack_require__("./src/utils/variables.js"),_excluded=["programName","programDescription","programSlug","icon_url","iconBackground","startsIn","syllabusContent","courseProgress","usersConnected","assistants","teacher","isAvailableAsSaas","subscriptionStatus","width","href","onClick"],__jsx=react.createElement;function PublicCourseCard(_ref){var programName=_ref.programName,programDescription=_ref.programDescription,programSlug=_ref.programSlug,icon_url=_ref.icon_url,startsIn=(_ref.iconBackground,_ref.startsIn),syllabusContent=_ref.syllabusContent,courseProgress=_ref.courseProgress,usersConnected=_ref.usersConnected,assistants=_ref.assistants,teacher=_ref.teacher,isAvailableAsSaas=_ref.isAvailableAsSaas,subscriptionStatus=_ref.subscriptionStatus,width=_ref.width,href=_ref.href,onClick=_ref.onClick,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),t=(0,useTranslation.Z)("program-card").t,_useStyle=(0,useStyle.Z)(),backgroundColor2=_useStyle.backgroundColor2,hexColor=_useStyle.hexColor,textColor=(0,chunk_7NLW6UB6.ff)("black","white");return __jsx(chunk_6CSUKJP7.xu,(0,esm_extends.Z)({border:"1px solid",borderColor:hexColor.borderColor,borderRadius:"9px",padding:"15px",background:backgroundColor2,position:"relative",width,marginTop:"30px",display:"flex",flexDirection:"column",justifyContent:"space-between"},rest),__jsx(chunk_6CSUKJP7.xu,{position:"absolute",borderRadius:"full",top:"-30px"},__jsx(chunk_E3YVMML4.E,{src:icon_url,width:"44px",height:"44px"})),__jsx(chunk_6CSUKJP7.xu,{height:"10px"}),__jsx(chunk_6CSUKJP7.xu,null,__jsx(Heading.Z,{size:"lg",as:"h3",lineHeight:"19px",fontWeight:"700",color:textColor,margin:"0 0 5px 0 !important"},programName),syllabusContent||assistants.length>0?__jsx(ProjectsSection.Z,{startsIn,syllabusContent,courseProgress,usersConnected,assistants,teacher,isAvailableAsSaas,subscriptionStatus}):__jsx(Text.Z,{size:{base:"md",md:"xs"},lineHeight:{base:"24px",md:"14px"},fontWeight:"500",color:textColor,marginTop:"0 !important",overflow:"hidden !important"},programDescription)),__jsx(NextChakraLink.Z,{variant:"buttonDefault",border:"1px solid",borderRadius:"3px",onClick,href:href||"".concat(variables.vi,"/").concat(programSlug),textAlign:"center",marginTop:"10px",display:"block",width:"120px",color:"white !important",textDecoration:"none !important",padding:"7px 16px !important",_hover:{opacity:.7},_active:{opacity:1}},t("common:learn-more")))}PublicCourseCard.displayName="PublicCourseCard",PublicCourseCard.propTypes={programName:prop_types_default().string.isRequired,programDescription:prop_types_default().string,programSlug:prop_types_default().string.isRequired,icon_url:prop_types_default().string,iconBackground:prop_types_default().string,startsIn:prop_types_default().instanceOf(Date),syllabusContent:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),courseProgress:prop_types_default().number,usersConnected:prop_types_default().arrayOf(prop_types_default().number),assistants:prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().any])),teacher:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),isAvailableAsSaas:prop_types_default().bool,subscriptionStatus:prop_types_default().string,width:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().objectOf(prop_types_default().any)]),href:prop_types_default().string,onClick:prop_types_default().func},PublicCourseCard.defaultProps={programDescription:null,icon_url:"",iconBackground:"",startsIn:null,syllabusContent:null,courseProgress:null,usersConnected:[],assistants:[],teacher:null,isAvailableAsSaas:!0,subscriptionStatus:"",width:"300px",href:"",onClick:function onClick(){}},PublicCourseCard.__docgenInfo={description:"",methods:[],displayName:"PublicCourseCard",props:{programDescription:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},icon_url:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},iconBackground:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},startsIn:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"instanceOf",value:"Date"},required:!1},syllabusContent:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},courseProgress:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"number"},required:!1},usersConnected:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"number"}},required:!1},assistants:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"any"}]}},required:!1},teacher:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},isAvailableAsSaas:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},subscriptionStatus:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},width:{defaultValue:{value:"'300px'",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"objectOf",value:{name:"any"}}]},required:!1},href:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},programName:{description:"",type:{name:"string"},required:!0},programSlug:{description:"",type:{name:"string"},required:!0}}};const components_PublicCourseCard=PublicCourseCard;var _Default$parameters,_Default$parameters2,_withDescription$para,_withDescription$para2,PublicCourseCard_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const PublicCourseCard_stories={title:"Components/PublicCourseCard",component:components_PublicCourseCard,argTypes:{isAvailableAsSaas:{control:{type:"boolean"}},programName:{control:{type:"text"}},programSlug:{control:{type:"text"}},programDescription:{control:{type:"text"}},startsIn:{control:{type:"date"}},icon_url:{control:{type:"text"}},iconBackground:{control:{type:"text"}},subscriptionStatus:{control:{type:"text"}},syllabusContent:{control:{type:"object"}},assistants:{control:{type:"object"}},courseProgress:{control:{type:"number"}}}};var Component=function Component(args,context){return PublicCourseCard_stories_jsx(components_PublicCourseCard,args)};Component.displayName="Component";var Default=Component.bind({});Default.args={programName:"A.I & Machine Learning",programDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",programSlug:"machine-learning",startsIn:new Date((0,addDays.Z)(new Date,3)),icon_url:"https://www.iconpacks.net/icons/2/free-settings-icon-3110-thumb.png",iconBackground:"blue.default",syllabusContent:{totalLessons:30,totalProjects:15,totalExercises:15,completedLessons:3,completedProjects:10,completedExercises:5},subscriptionStatus:"ACTIVE",assistants:[{isOnline:!0,user:{first_name:"Juan",last_name:"López",profile:{avatar_url:"/static/images/p1.png"}}},{isOnline:!0,user:{first_name:"John",last_name:"Doe",profile:{avatar_url:"/static/images/p2.png"}}},{isOnline:!0,user:{first_name:"Jane",last_name:"Doe",profile:{avatar_url:"/static/images/p3.png"}}},{isOnline:!0,user:{first_name:"Juan",last_name:"López",profile:{avatar_url:"/static/images/p1.png"}}},{isOnline:!0,user:{first_name:"John",last_name:"Doe",profile:{avatar_url:"/static/images/p2.png"}}},{isOnline:!0,user:{first_name:"Jane",last_name:"Doe",profile:{avatar_url:"/static/images/p3.png"}}}],teacher:{isOnline:!0,user:{first_name:"Juan",last_name:"López",profile:{avatar_url:"/static/images/p1.png"}}},courseProgress:7};var withDescription=Component.bind({});withDescription.args={programName:"Data Science",programDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",programSlug:"machine-learning",startsIn:new Date((0,addDays.Z)(new Date,3)),icon_url:"https://www.freeiconspng.com/thumbs/brain-icon-png/brain-2.png",iconBackground:"#25BF6C",subscriptionStatus:"ACTIVE",courseProgress:7},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"(args, context) => {\n  return <PublicCourseCard {...args} />;\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),withDescription.parameters=_objectSpread(_objectSpread({},withDescription.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_withDescription$para=withDescription.parameters)||void 0===_withDescription$para?void 0:_withDescription$para.docs),{},{source:_objectSpread({originalSource:"(args, context) => {\n  return <PublicCourseCard {...args} />;\n}"},null===(_withDescription$para2=withDescription.parameters)||void 0===_withDescription$para2||null===(_withDescription$para2=_withDescription$para2.docs)||void 0===_withDescription$para2?void 0:_withDescription$para2.source)})})},"./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function getTimezoneOffsetInMilliseconds(date){var utcDate=new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds(),date.getMilliseconds()));return utcDate.setUTCFullYear(date.getFullYear()),date.getTime()-utcDate.getTime()}__webpack_require__.d(__webpack_exports__,{Z:()=>getTimezoneOffsetInMilliseconds})},"./node_modules/date-fns/esm/_lib/requiredArgs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function requiredArgs(required,args){if(args.length<required)throw new TypeError(required+" argument"+(required>1?"s":"")+" required, but only "+args.length+" present")}__webpack_require__.d(__webpack_exports__,{Z:()=>requiredArgs})},"./node_modules/date-fns/esm/_lib/toInteger/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function toInteger(dirtyNumber){if(null===dirtyNumber||!0===dirtyNumber||!1===dirtyNumber)return NaN;var number=Number(dirtyNumber);return isNaN(number)?number:number<0?Math.ceil(number):Math.floor(number)}__webpack_require__.d(__webpack_exports__,{Z:()=>toInteger})},"./node_modules/date-fns/esm/addDays/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>addDays});var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js"),_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/date-fns/esm/toDate/index.js"),_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");function addDays(dirtyDate,dirtyAmount){(0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.Z)(2,arguments);var date=(0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.Z)(dirtyDate),amount=(0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.Z)(dirtyAmount);return isNaN(amount)?new Date(NaN):amount?(date.setDate(date.getDate()+amount),date):date}},"./node_modules/date-fns/esm/toDate/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>toDate});var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");function toDate(argument){(0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.Z)(1,arguments);var argStr=Object.prototype.toString.call(argument);return argument instanceof Date||"object"===(0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__.Z)(argument)&&"[object Date]"===argStr?new Date(argument.getTime()):"number"==typeof argument||"[object Number]"===argStr?new Date(argument):("string"!=typeof argument&&"[object String]"!==argStr||void 0===console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}},"./node_modules/es5-ext/global.js":module=>{var naiveFallback=function(){if("object"==typeof self&&self)return self;if("object"==typeof window&&window)return window;throw new Error("Unable to resolve global `this`")};module.exports=function(){if(this)return this;if("object"==typeof globalThis&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(error){return naiveFallback()}try{return __global__||naiveFallback()}finally{delete Object.prototype.__global__}}()},"./node_modules/react-gtm-module/dist/Snippets.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var _warn2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/react-gtm-module/dist/utils/warn.js"));var Snippets={tags:function tags(_ref){var id=_ref.id,events=_ref.events,dataLayer=_ref.dataLayer,dataLayerName=_ref.dataLayerName,preview=_ref.preview,gtm_auth="&gtm_auth="+_ref.auth,gtm_preview="&gtm_preview="+preview;return id||(0,_warn2.default)("GTM Id is required"),{iframe:'\n      <iframe src="https://www.googletagmanager.com/ns.html?id='+id+gtm_auth+gtm_preview+'&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',script:"\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', "+JSON.stringify(events).slice(1,-1)+"});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'"+gtm_auth+gtm_preview+"&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','"+dataLayerName+"','"+id+"');",dataLayerVar:this.dataLayer(dataLayer,dataLayerName)}},dataLayer:function dataLayer(_dataLayer,dataLayerName){return"\n      window."+dataLayerName+" = window."+dataLayerName+" || [];\n      window."+dataLayerName+".push("+JSON.stringify(_dataLayer)+")"}};module.exports=Snippets},"./node_modules/react-gtm-module/dist/TagManager.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var _Snippets2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/react-gtm-module/dist/Snippets.js"));var TagManager={dataScript:function dataScript(dataLayer){var script=document.createElement("script");return script.innerHTML=dataLayer,script},gtm:function gtm(args){var snippets=_Snippets2.default.tags(args);return{noScript:function noScript(){var noscript=document.createElement("noscript");return noscript.innerHTML=snippets.iframe,noscript},script:function script(){var script=document.createElement("script");return script.innerHTML=snippets.script,script},dataScript:this.dataScript(snippets.dataLayerVar)}},initialize:function initialize(_ref){var gtmId=_ref.gtmId,_ref$events=_ref.events,events=void 0===_ref$events?{}:_ref$events,dataLayer=_ref.dataLayer,_ref$dataLayerName=_ref.dataLayerName,dataLayerName=void 0===_ref$dataLayerName?"dataLayer":_ref$dataLayerName,_ref$auth=_ref.auth,auth=void 0===_ref$auth?"":_ref$auth,_ref$preview=_ref.preview,preview=void 0===_ref$preview?"":_ref$preview,gtm=this.gtm({id:gtmId,events,dataLayer:dataLayer||void 0,dataLayerName,auth,preview});dataLayer&&document.head.appendChild(gtm.dataScript),document.head.insertBefore(gtm.script(),document.head.childNodes[0]),document.body.insertBefore(gtm.noScript(),document.body.childNodes[0])},dataLayer:function dataLayer(_ref2){var _dataLayer=_ref2.dataLayer,_ref2$dataLayerName=_ref2.dataLayerName,dataLayerName=void 0===_ref2$dataLayerName?"dataLayer":_ref2$dataLayerName;if(window[dataLayerName])return window[dataLayerName].push(_dataLayer);var snippets=_Snippets2.default.dataLayer(_dataLayer,dataLayerName),dataScript=this.dataScript(snippets);document.head.insertBefore(dataScript,document.head.childNodes[0])}};module.exports=TagManager},"./node_modules/react-gtm-module/dist/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var _TagManager2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/react-gtm-module/dist/TagManager.js"));module.exports=_TagManager2.default},"./node_modules/react-gtm-module/dist/utils/warn.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var console=__webpack_require__("./node_modules/console-browserify/index.js");Object.defineProperty(exports,"__esModule",{value:!0});exports.default=function warn(s){console.warn("[react-gtm]",s)}},"./node_modules/websocket/lib/browser.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _globalThis;if("object"==typeof globalThis)_globalThis=globalThis;else try{_globalThis=__webpack_require__("./node_modules/es5-ext/global.js")}catch(error){}finally{if(_globalThis||"undefined"==typeof window||(_globalThis=window),!_globalThis)throw new Error("Could not determine global this")}var NativeWebSocket=_globalThis.WebSocket||_globalThis.MozWebSocket,websocket_version=__webpack_require__("./node_modules/websocket/lib/version.js");function W3CWebSocket(uri,protocols){return protocols?new NativeWebSocket(uri,protocols):new NativeWebSocket(uri)}NativeWebSocket&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach((function(prop){Object.defineProperty(W3CWebSocket,prop,{get:function(){return NativeWebSocket[prop]}})})),module.exports={w3cwebsocket:NativeWebSocket?W3CWebSocket:null,version:websocket_version}},"./node_modules/websocket/lib/version.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/websocket/package.json").version},"./node_modules/websocket/package.json":module=>{"use strict";module.exports={version:"1.0.34"}}}]);