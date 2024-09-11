"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2176],{"./src/stories/MktSideRecommendations.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Tutorials:()=>Tutorials,default:()=>MktSideRecommendations_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),chunk_7NLW6UB6=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-7NLW6UB6.mjs"),chunk_YTV6DHKL=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-YTV6DHKL.mjs"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_SMHKDLMK=__webpack_require__("./node_modules/@chakra-ui/image/dist/chunk-SMHKDLMK.mjs"),useTranslation=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),next_router=__webpack_require__("./node_modules/next/router.js"),Heading=__webpack_require__("./src/common/components/Heading.jsx"),Text=__webpack_require__("./src/common/components/Text.jsx"),Icon=__webpack_require__("./src/common/components/Icon/index.jsx"),Skeleton=__webpack_require__("./src/common/components/Skeleton.jsx"),modifyEnv=__webpack_require__("./modifyEnv.js"),TagCapsule=__webpack_require__("./src/common/components/TagCapsule.jsx"),utils=__webpack_require__("./src/utils/index.js"),variables=__webpack_require__("./src/utils/variables.js"),useStyle=__webpack_require__("./src/common/hooks/useStyle.js"),url=__webpack_require__("./src/utils/url.js"),logging=__webpack_require__("./src/utils/logging.js"),requests=__webpack_require__("./src/utils/requests.js"),process=__webpack_require__("./node_modules/process/browser.js"),_excluded=["recommendation","recommendations","borderRadius","children"],_excluded2=["title","endpoint","technologies","containerPadding"],__jsx=react.createElement;function Container(_ref){var recommendation=_ref.recommendation,recommendations=_ref.recommendations,borderRadius=_ref.borderRadius,children=_ref.children,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),router=(0,next_router.useRouter)(),fontColor=(0,useStyle.Z)().fontColor,bgColor=(0,chunk_7NLW6UB6.ff)("gray.light3","featuredDark"),langConnector="en"===router.locale?"":"/".concat(router.locale);return(0,utils.tF)().width<768?__jsx(chunk_YTV6DHKL.r,(0,esm_extends.Z)({href:"".concat(variables.vi).concat(langConnector,"/").concat(null==recommendation?void 0:recommendation.slug),_hover:{textDecoration:"none"},minWidth:{base:(null==recommendations?void 0:recommendations.length)>1?"285px":"100%",md:"auto"},justifyContent:"space-between",display:"flex",flexDirection:{base:"row",md:"column"},gridGap:"10px",background:bgColor,color:fontColor,borderRadius},rest),children):__jsx(chunk_6CSUKJP7.xu,(0,esm_extends.Z)({minWidth:{base:(null==recommendations?void 0:recommendations.length)>1?"285px":"100%",md:"auto"},justifyContent:"space-between",display:"flex",flexDirection:{base:"row",md:"column"},gridGap:"10px",background:bgColor,color:fontColor,borderRadius},rest),children)}function MktSideRecommendations(_ref2){var title=_ref2.title,endpoint=_ref2.endpoint,technologies=_ref2.technologies,containerPadding=_ref2.containerPadding,rest=(0,objectWithoutProperties.Z)(_ref2,_excluded2),_useTranslation=(0,useTranslation.Z)("common"),t=_useTranslation.t,lang=_useTranslation.lang,hexColor=(0,useStyle.Z)().hexColor,_useState=(0,react.useState)(!0),isLoading=_useState[0],setIsLoading=_useState[1],BREATHECODE_HOST=(0,modifyEnv.Z)({queryString:"host",env:process.env.BREATHECODE_HOST}),_useState2=(0,react.useState)([]),recommendations=_useState2[0],setRecommendations=_useState2[1],router=(0,next_router.useRouter)(),langConnector="en"===router.locale?"":"/".concat(router.locale),qs=(0,url.A_)({academy:variables.G7,featured:!0}),headers={"Accept-Language":lang},technologiesList=technologies.map((function(tech){return(null==tech?void 0:tech.slug)||tech})),technologiesArray="string"==typeof technologiesList?technologiesList.split(","):technologiesList,fetchTutorials=function(){var _ref3=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(){var response;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,fetch("".concat(BREATHECODE_HOST,"/v1/registry/asset?asset_type=EXERCISE&status=PUBLISHED&technologies=").concat(technologiesArray.join(",")),{headers});case 2:if((response=_context.sent).ok){_context.next=5;break}throw new Error("Failed to fetch tutorials: ".concat(response.statusText));case 5:return _context.abrupt("return",response.json());case 6:case"end":return _context.stop()}}),_callee)})));return function fetchTutorials(){return _ref3.apply(this,arguments)}}(),filterMatchingTutorials=function filterMatchingTutorials(tutorialsData){return tutorialsData.filter((function(tutorial){return tutorial.technologies.filter((function(tech){return technologiesArray.includes(tech)})).length>=2}))},sortAndSetRecommendations=function sortAndSetRecommendations(tutorials){tutorials.sort((function(a,b){var aMatches=a.technologies.filter((function(tech){return technologiesArray.includes(tech)})).length;return b.technologies.filter((function(tech){return technologiesArray.includes(tech)})).length-aMatches})),setRecommendations([tutorials[0]])},fetchAndSetCourses=function(){var _ref4=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee2(){var response,coursesData,sortedCourses;return regenerator_default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,fetch("".concat(BREATHECODE_HOST).concat(endpoint).concat(qs),{headers});case 2:if((response=_context2.sent).ok){_context2.next=5;break}throw new Error("Failed to fetch courses: ".concat(response.statusText));case 5:return _context2.next=7,response.json();case 7:(coursesData=_context2.sent).length>0&&(sortedCourses=coursesData.sort((function(a,b){var aMatches=a.technologies.split(",").filter((function(tech){return technologiesArray.includes(tech)})).length;return b.technologies.split(",").filter((function(tech){return technologiesArray.includes(tech)})).length-aMatches})),setRecommendations(sortedCourses.slice(0,1)));case 9:case"end":return _context2.stop()}}),_callee2)})));return function fetchAndSetCourses(){return _ref4.apply(this,arguments)}}(),handleFetchError=function handleFetchError(err){(0,logging.vU)(err),setIsLoading(!1)},fetchContent=function(){var _ref5=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee3(){var tutorialsData,matchingTutorials;return regenerator_default().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.prev=0,_context3.next=3,fetchTutorials();case 3:if(tutorialsData=_context3.sent,!((matchingTutorials=filterMatchingTutorials(tutorialsData)).length>1)){_context3.next=9;break}sortAndSetRecommendations(matchingTutorials),_context3.next=11;break;case 9:return _context3.next=11,fetchAndSetCourses();case 11:setIsLoading(!1),_context3.next=17;break;case 14:_context3.prev=14,_context3.t0=_context3.catch(0),handleFetchError(_context3.t0);case 17:case"end":return _context3.stop()}}),_callee3,null,[[0,14]])})));return function fetchContent(){return _ref5.apply(this,arguments)}}(),getLink=function getLink(recommendation){var _recommendation$cours,_recommendation$cours2;return null!=recommendation&&null!==(_recommendation$cours=recommendation.course_translation)&&void 0!==_recommendation$cours&&_recommendation$cours.landing_url?null==recommendation||null===(_recommendation$cours2=recommendation.course_translation)||void 0===_recommendation$cours2?void 0:_recommendation$cours2.landing_url:"".concat(variables.vi).concat(langConnector,"/interactive-exercise/").concat(null==recommendation?void 0:recommendation.slug)},getMainTechIcon=function getMainTechIcon(){return technologies.find((function(tech){return null!==tech.icon_url})).icon_url},determineIconBackgroundColor=function determineIconBackgroundColor(recom){return null!=recom&&recom.color?recom.color:null!=recom&&recom.icon_url?"green.400":"gray.100"};return(0,react.useEffect)((function(){fetchContent()}),[]),(null==recommendations?void 0:recommendations.length)>0&&__jsx(react.Fragment,null,__jsx(chunk_6CSUKJP7.xu,{color:"white",zIndex:"10",borderRadius:"11px 11px 0 0",background:hexColor.greenLight,padding:"10px 20px",bottom:"0",position:"sticky",marginBottom:"20px",display:{base:"block",md:"none"},textAlign:"left"},recommendations.map((function(recom){var _recom$course_transla,recomLink=getLink(recom),link="".concat(recomLink,"?internal_cta_placement=mktsiderecommendedcourses&internal_cta_content=").concat(null==recom?void 0:recom.slug);return __jsx(react.Fragment,null,__jsx(chunk_6CSUKJP7.xu,{display:"flex",alignItems:"center",gap:"10px"},__jsx(chunk_SMHKDLMK.E,{src:recom.icon_url?recom.icon_url:getMainTechIcon(),width:"46px",height:"46px",borderRadius:"8px",color:"white",background:determineIconBackgroundColor(recom)}),__jsx(Heading.Z,{as:"span",size:"18px"},(null==recom||null===(_recom$course_transla=recom.course_translation)||void 0===_recom$course_transla?void 0:_recom$course_transla.title)||recom.title)),__jsx(chunk_YTV6DHKL.r,{variant:"buttonDefault",onClick:function onClick(){var _recom$course_transla2;(0,utils.Nh)("redirected-from",link),(0,requests._1)({dataLayer:{event:"ad_interaction",course_slug:recom.slug,course_title:(null==recom||null===(_recom$course_transla2=recom.course_translation)||void 0===_recom$course_transla2?void 0:_recom$course_transla2.title)||recom.title,ad_position:"top-left",ad_type:"course"}})},href:link,alignItems:"center",display:"flex",justifyContent:"center",colorScheme:"success",color:"success",background:"white",gridGap:"10px",width:"100%"},__jsx(chunk_6CSUKJP7.xu,{as:"span",display:"flex"},t("learn-more")),__jsx(Icon.Z,{icon:"longArrowRight",width:"24px",height:"10px",color:"currentColor"})))}))),__jsx(chunk_6CSUKJP7.xu,(0,esm_extends.Z)({display:{base:"none",md:"block"},as:"aside",minWidth:{base:"100%",md:"214px"},width:"auto",margin:"0 auto"},rest),title&&__jsx(Heading.Z,{as:"span",size:"18px",lineHeight:"21px",m:"10px 0 20px 0"},title||t("continue-learning-course")),isLoading?__jsx(Skeleton.q4,{withoutContainer:!0,quantity:1,height:rest.skeletonHeight,borderRadius:rest.skeletonBorderRadius}):__jsx(chunk_6CSUKJP7.xu,{display:"flex",flexDirection:{base:"row",md:"column"},overflow:"auto",gridGap:"14px"},recommendations.map((function(recom){var _recom$course_transla3,_recom$course_transla4,_recom$course_transla5,recomLink=getLink(recom),link="".concat(recomLink,"?internal_cta_placement=mktsiderecommendedcourses&internal_cta_content=").concat(null==recom?void 0:recom.slug),tags=[];return __jsx(Container,{border:"1px solid",borderColor:{base:"default",md:"success"},key:null==recom?void 0:recom.slug,course:recom,courses:recommendations,borderRadius:rest.borderRadius,padding:containerPadding},__jsx(TagCapsule.Z,{tags,background:"green.light",color:"green.500",fontWeight:700,fontSize:"13px",marginY:"0",paddingX:"0",variant:"rounded",gap:"10px",display:{base:"none",md:"inherit"}}),__jsx(chunk_6CSUKJP7.xu,{display:"flex",flexDirection:{base:"column",md:"row"},gridGap:"8px"},__jsx(TagCapsule.Z,{tags,background:"green.light",color:"green.500",fontWeight:700,fontSize:"13px",marginY:"0",paddingX:"0",variant:"rounded",gap:"10px",display:{base:"inherit",md:"none"}}),__jsx(chunk_SMHKDLMK.E,{display:{base:"none",md:"inherit"},src:recom.icon_url?recom.icon_url:getMainTechIcon(),width:"46px",height:"46px",borderRadius:"8px",padding:!recom.icon_url&&"5px",background:determineIconBackgroundColor(recom)}),__jsx(Heading.Z,{as:"span",size:"18px",padding:null!=recom&&recom.icon_url?"0":"0 20px"},(null==recom||null===(_recom$course_transla3=recom.course_translation)||void 0===_recom$course_transla3?void 0:_recom$course_transla3.title)||recom.title)),__jsx(Text.Z,{display:{base:"none",md:"inherit"},fontSize:"12px",lineHeight:"14px",padding:"0 20px"},(null==recom||null===(_recom$course_transla4=recom.course_translation)||void 0===_recom$course_transla4?void 0:_recom$course_transla4.description)||(null==recom||null===(_recom$course_transla5=recom.course_translation)||void 0===_recom$course_transla5?void 0:_recom$course_transla5.short_description)||recom.description),__jsx(chunk_YTV6DHKL.r,{variant:{base:"",md:"buttonDefault"},onClick:function onClick(){var _recom$course_transla6;(0,utils.Nh)("redirected-from",link),(0,requests._1)({dataLayer:{event:"ad_interaction",course_slug:recom.slug,course_title:null!=recom&&null!==(_recom$course_transla6=recom.course_translation)&&void 0!==_recom$course_transla6&&_recom$course_transla6.title?recom.course_translation.title:recom.title,ad_position:"top-left",ad_type:"course"}})},href:link,alignItems:"center",display:"flex",colorScheme:{base:"default",md:"success"},width:"auto",color:{base:"green.light",md:"white"},gridGap:"10px",margin:"0 20px"},__jsx(chunk_6CSUKJP7.xu,{as:"span",display:{base:"none",md:"flex"}},t("learn-more")),__jsx(Icon.Z,{icon:"longArrowRight",width:"24px",height:"10px",color:"currentColor"})))})))))}Container.displayName="Container",MktSideRecommendations.propTypes={title:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().bool]),endpoint:prop_types_default().string,containerPadding:prop_types_default().string,technologies:prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().objectOf(prop_types_default().any),prop_types_default().string]))},MktSideRecommendations.defaultProps={title:"",endpoint:"/v1/marketing/course",containerPadding:"9px 8px",technologies:[]},Container.propTypes={recommendation:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().objectOf(prop_types_default().any),prop_types_default().string])),recommendations:prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().objectOf(prop_types_default().any),prop_types_default().string])),children:prop_types_default().node.isRequired,borderRadius:prop_types_default().string},Container.defaultProps={recommendation:{},recommendations:[],borderRadius:"8px"},MktSideRecommendations.__docgenInfo={description:"",methods:[],displayName:"MktSideRecommendations",props:{title:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"bool"}]},required:!1},endpoint:{defaultValue:{value:"'/v1/marketing/course'",computed:!1},description:"",type:{name:"string"},required:!1},containerPadding:{defaultValue:{value:"'9px 8px'",computed:!1},description:"",type:{name:"string"},required:!1},technologies:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"objectOf",value:{name:"any"}},{name:"string"}]}},required:!1}}};const components_MktSideRecommendations=MktSideRecommendations;var _Default$parameters,_Default$parameters2,_Tutorials$parameters,_Tutorials$parameters2,MktSideRecommendations_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const MktSideRecommendations_stories={title:"Components/MktSideRecommendations",component:components_MktSideRecommendations,argTypes:{}};var Component=function Component(args){return MktSideRecommendations_stories_jsx(chunk_6CSUKJP7.xu,{width:args.width},MktSideRecommendations_stories_jsx(components_MktSideRecommendations,args))};Component.displayName="Component";var Default=Component.bind({});Default.args={width:"350px",title:"Course Recommendations",endpoint:"/v1/marketing/course"};var Tutorials=Component.bind({});Tutorials.args={width:"350px",title:"Asset Recommendation",endpoint:"/v1/marketing/course",technologies:[{description:"",icon_url:null,is_deprecated:!1,slug:"apis",title:"APIs",visibility:"PUBLIC"},{description:"",icon_url:"https://storage.googleapis.com/breathecode/logos-technologias/Flask.png",is_deprecated:!1,slug:"flask",title:"Flask",visibility:"PUBLIC"}]},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <Box width={args.width}>\n      <MktSideRecommendations {...args} />\n    </Box>;\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Tutorials.parameters=_objectSpread(_objectSpread({},Tutorials.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Tutorials$parameters=Tutorials.parameters)||void 0===_Tutorials$parameters?void 0:_Tutorials$parameters.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <Box width={args.width}>\n      <MktSideRecommendations {...args} />\n    </Box>;\n}"},null===(_Tutorials$parameters2=Tutorials.parameters)||void 0===_Tutorials$parameters2||null===(_Tutorials$parameters2=_Tutorials$parameters2.docs)||void 0===_Tutorials$parameters2?void 0:_Tutorials$parameters2.source)})})},"./src/common/components/TagCapsule.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-7NLW6UB6.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),_Text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/common/components/Text.jsx"),_NextChakraLink__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/common/components/NextChakraLink.jsx"),_excluded=["tags","separator","background","color","variant","paddingX","marginY","gap","style","fontSize","containerStyle","fontWeight","isLink","href","borderRadius","lineHeight","textTransform","whiteSpace"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function TagCapsule(_ref){var tags=_ref.tags,separator=_ref.separator,background=_ref.background,color=_ref.color,variant=_ref.variant,paddingX=_ref.paddingX,marginY=_ref.marginY,gap=_ref.gap,style=_ref.style,fontSize=_ref.fontSize,containerStyle=_ref.containerStyle,fontWeight=_ref.fontWeight,isLink=_ref.isLink,borderRadius=(_ref.href,_ref.borderRadius),lineHeight=_ref.lineHeight,textTransform=_ref.textTransform,whiteSpace=_ref.whiteSpace,rest=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded),router=((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.If)().colorMode,(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)()),langPrefix="en"===router.locale?"":"".concat(router.locale,"/");return(null==tags?void 0:tags.length)>0&&__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.K,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__.Z)({bg:"rounded"===variant?"none":background,as:"ul",flexWrap:"wrap",direction:"row",height:"auto",style:containerStyle,my:marginY,width:"fit-content",px:paddingX,borderRadius:"15px",gridGap:gap},rest),tags.map((function(tag,i){var isPublicTechnology="PUBLIC"===(null==tag?void 0:tag.visibility),tagSlug=(null==tag?void 0:tag.slug)||tag,tagTitle=(null==tag?void 0:tag.title)||(null==tag?void 0:tag.name);return isPublicTechnology&&isLink?__jsx(_NextChakraLink__WEBPACK_IMPORTED_MODULE_3__.Z,{href:"/".concat(langPrefix,"technology/").concat(tagSlug),display:"flex",locale:router.locale,cursor:isLink?"pointer":"default",bg:"rounded"===variant?background:"none",direction:"row",padding:"rounded"===variant?"0 10px":"0",style,rounded:"rounded"===variant?borderRadius:"none",key:tagTitle||"".concat(tag,"-").concat(i),lineHeight:"22px",color:"black"},__jsx(_Text__WEBPACK_IMPORTED_MODULE_2__.Z,{margin:"0",alignSelf:"center",letterSpacing:"0.05em",textAlign:"center",size:fontSize,fontWeight,color:"black",textTransform,whiteSpace},tagTitle||tag),"slash"===variant&&i<tags.length-1&&__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.xu,{as:"span",alignSelf:"center",userSelect:"none",fontSize:"15px",mx:"0.5rem"},separator)):__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.xu,{as:"li",display:"flex",bg:"rounded"===variant?background:"none",direction:"row",padding:"rounded"===variant?"0 10px":"0",style,rounded:"rounded"===variant?borderRadius:"none",key:tagTitle||"".concat(tag,"-").concat(i),lineHeight,color:"black"},"slash"===variant&&0!==i&&__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.xu,{as:"span",alignSelf:"center",userSelect:"none",fontSize:"15px",mx:"0.5rem"},separator),__jsx(_Text__WEBPACK_IMPORTED_MODULE_2__.Z,{margin:"0",alignSelf:"center",letterSpacing:"0.05em",textAlign:"center",size:fontSize,fontWeight,color,textTransform,whiteSpace},tagTitle||tag))})))}TagCapsule.propTypes={tags:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,prop_types__WEBPACK_IMPORTED_MODULE_9___default().array]).isRequired,fontSize:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,separator:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,containerStyle:prop_types__WEBPACK_IMPORTED_MODULE_9___default().objectOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().any])),background:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,variant:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,paddingX:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,marginY:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,gap:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,style:prop_types__WEBPACK_IMPORTED_MODULE_9___default().shape({}),fontWeight:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,prop_types__WEBPACK_IMPORTED_MODULE_9___default().number]),isLink:prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool,href:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,borderRadius:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,color:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,lineHeight:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,textTransform:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,whiteSpace:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string},TagCapsule.defaultProps={separator:"/",background:"yellow.light",containerStyle:{},fontSize:"11px",variant:"slash",paddingX:"20px",marginY:"18px",fontWeight:500,gap:"0",style:{margin:"0"},isLink:!1,href:"#",borderRadius:"15px",color:"black",lineHeight:"22px",textTransform:"uppercase",whiteSpace:null},TagCapsule.__docgenInfo={description:"",methods:[],displayName:"TagCapsule",props:{separator:{defaultValue:{value:"'/'",computed:!1},description:"",type:{name:"string"},required:!1},background:{defaultValue:{value:"'yellow.light'",computed:!1},description:"",type:{name:"string"},required:!1},containerStyle:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},fontSize:{defaultValue:{value:"'11px'",computed:!1},description:"",type:{name:"string"},required:!1},variant:{defaultValue:{value:"'slash'",computed:!1},description:"",type:{name:"string"},required:!1},paddingX:{defaultValue:{value:"'20px'",computed:!1},description:"",type:{name:"string"},required:!1},marginY:{defaultValue:{value:"'18px'",computed:!1},description:"",type:{name:"string"},required:!1},fontWeight:{defaultValue:{value:"500",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},gap:{defaultValue:{value:"'0'",computed:!1},description:"",type:{name:"string"},required:!1},style:{defaultValue:{value:"{\n  margin: '0',\n}",computed:!1},description:"",type:{name:"shape",value:{}},required:!1},isLink:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},href:{defaultValue:{value:"'#'",computed:!1},description:"",type:{name:"string"},required:!1},borderRadius:{defaultValue:{value:"'15px'",computed:!1},description:"",type:{name:"string"},required:!1},color:{defaultValue:{value:"'black'",computed:!1},description:"",type:{name:"string"},required:!1},lineHeight:{defaultValue:{value:"'22px'",computed:!1},description:"",type:{name:"string"},required:!1},textTransform:{defaultValue:{value:"'uppercase'",computed:!1},description:"",type:{name:"string"},required:!1},whiteSpace:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},tags:{description:"",type:{name:"union",value:[{name:"string"},{name:"array"}]},required:!0}}};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(TagCapsule)}}]);