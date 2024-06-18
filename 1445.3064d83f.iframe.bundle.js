"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1445],{"./src/common/components/Heading.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-B2MGPQRJ.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_excluded=["children","size"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,sizes={xxl:"var(--heading-xxl)",xl:"var(--heading-xl)",l:"var(--heading-l)",m:"var(--heading-m)",sm:"var(--heading-sm)",xsm:"var(--heading-xsm)"};function Heading(_ref){var children=_ref.children,size=_ref.size,rest=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.X,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({fontSize:sizes[size]||size},rest),children)}Heading.displayName="Heading",Heading.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().object]),children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node},Heading.defaultProps={size:"l",children:null},Heading.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{size:{defaultValue:{value:"'l'",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Heading},"./src/common/components/NextChakraLink.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_chakra_ui_next_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/next-js/dist/chunk-CFNWCCXK.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/index.js"),_excluded=["href","as","replace","scroll","shallow","children","locale","redirectAfterLogin","onClick"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function NextChakraLink(_ref){var href=_ref.href,as=_ref.as,replace=_ref.replace,scroll=_ref.scroll,shallow=_ref.shallow,children=_ref.children,locale=_ref.locale,redirectAfterLogin=_ref.redirectAfterLogin,_onClick=_ref.onClick,chakraProps=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded),router=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();return __jsx(_chakra_ui_next_js__WEBPACK_IMPORTED_MODULE_4__.r,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.Z)({onClick:function onClick(){redirectAfterLogin&&"string"==typeof href&&href.includes("/login")&&(0,_utils__WEBPACK_IMPORTED_MODULE_2__.Nh)("redirect",null==router?void 0:router.asPath),_onClick()},href,as,replace,locale:locale||(null==router?void 0:router.locale),scroll,shallow},chakraProps),children)}NextChakraLink.displayName="NextChakraLink",NextChakraLink.propTypes={href:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,locale:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,as:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,replace:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,scroll:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,shallow:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),prop_types__WEBPACK_IMPORTED_MODULE_6___default().node]).isRequired,redirectAfterLogin:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,onClick:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func},NextChakraLink.defaultProps={locale:"",href:"",as:"a",replace:!1,scroll:!0,shallow:!1,redirectAfterLogin:!1,onClick:function onClick(){}},NextChakraLink.__docgenInfo={description:"",methods:[],displayName:"NextChakraLink",props:{locale:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},href:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},as:{defaultValue:{value:"'a'",computed:!1},description:"",type:{name:"string"},required:!1},replace:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},scroll:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},shallow:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},redirectAfterLogin:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!0}}};const __WEBPACK_DEFAULT_EXPORT__=NextChakraLink},"./src/common/components/ProjectsSection.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_ProjectsSection});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),chunk_7NLW6UB6=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-7NLW6UB6.mjs"),chunk_MPFPK3CX=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_ZYO64PFG=__webpack_require__("./node_modules/@chakra-ui/avatar/dist/chunk-ZYO64PFG.mjs"),useTranslation=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),theme=__webpack_require__("./styles/theme.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),chunk_MG6WC47T=__webpack_require__("./node_modules/@chakra-ui/media-query/dist/chunk-MG6WC47T.mjs"),chunk_4OGHDZEB=__webpack_require__("./node_modules/@chakra-ui/popover/dist/chunk-4OGHDZEB.mjs"),chunk_3O5UWOX6=__webpack_require__("./node_modules/@chakra-ui/popover/dist/chunk-3O5UWOX6.mjs"),chunk_CRIDK7KT=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-CRIDK7KT.mjs"),chunk_WPAIWTI3=__webpack_require__("./node_modules/@chakra-ui/avatar/dist/chunk-WPAIWTI3.mjs"),chunk_2RQKHYD2=__webpack_require__("./node_modules/@chakra-ui/avatar/dist/chunk-2RQKHYD2.mjs"),chunk_KVBLLJMP=__webpack_require__("./node_modules/@chakra-ui/popover/dist/chunk-KVBLLJMP.mjs"),chunk_BYOOQOH2=__webpack_require__("./node_modules/@chakra-ui/popover/dist/chunk-BYOOQOH2.mjs"),chunk_6YK4VVQO=__webpack_require__("./node_modules/@chakra-ui/popover/dist/chunk-6YK4VVQO.mjs"),chunk_3JH7ZFSI=__webpack_require__("./node_modules/@chakra-ui/popover/dist/chunk-3JH7ZFSI.mjs"),next_router=__webpack_require__("./node_modules/next/router.js"),es=__webpack_require__("./node_modules/date-fns/esm/locale/es/index.js"),format=__webpack_require__("./node_modules/date-fns/esm/format/index.js"),Heading=__webpack_require__("./src/common/components/Heading.jsx"),Text=__webpack_require__("./src/common/components/Text.jsx"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),browser=__webpack_require__("./node_modules/websocket/lib/browser.js"),utils=__webpack_require__("./src/utils/index.js"),useAuth=__webpack_require__("./src/common/hooks/useAuth.js"),axios=__webpack_require__("./src/axios.js"),modifyEnv=__webpack_require__("./modifyEnv.js"),logging=__webpack_require__("./src/utils/logging.js"),process=__webpack_require__("./node_modules/process/browser.js"),__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ConnectionContext=(0,react.createContext)({usersConnected:[]});function OnlineContext(_ref){var children=_ref.children,BREATHECODE_HOST=(0,modifyEnv.Z)({queryString:"host",env:process.env.BREATHECODE_HOST}),_useState=(0,react.useState)({}),usersConnected=_useState[0],setUsersConnected=_useState[1],accessToken=(0,utils.qn)("accessToken"),isLoading=(0,useAuth.Z)().isLoading,temporalToken=(0,react.useState)(null)[0],hasLoaded=!isLoading,BREATHECODE_WS=String(BREATHECODE_HOST).replace("https://","");(0,react.useEffect)((function(){hasLoaded&&accessToken&&(axios.ZP.defaults.headers.common.Authorization="Token ".concat(accessToken))}),[isLoading,accessToken]);var actions={connected:function connected(data){setUsersConnected((function(prev){return _objectSpread(_objectSpread({},prev),{},(0,defineProperty.Z)({},data.id,!0))}))},disconnected:function disconnected(data){setUsersConnected((function(prev){var updated=_objectSpread({},prev);return delete updated[data.id],updated}))}};(0,react.useEffect)((function(){if(hasLoaded&&null!==temporalToken&&null!=temporalToken&&temporalToken.token){var client=new browser.w3cwebsocket("wss://".concat(BREATHECODE_WS,"/ws/online?token=").concat(temporalToken.token));client.onopen=function(){(0,logging.cM)("WebSocket Client Connected"),setUsersConnected((function(prev){return _objectSpread(_objectSpread({},prev),{},(0,defineProperty.Z)({},null==temporalToken?void 0:temporalToken.user_id,!0))}))},client.onmessage=function(event){var data=JSON.parse(event.data);actions[data.status]&&"object"!=typeof actions[data.status]&&data&&"object"==typeof data&&actions[data.status](data)}}}),[isLoading,temporalToken]);var values=(0,react.useMemo)((function(){return{usersConnected:Object.keys(usersConnected).map((function(key){return Number(key)}))}}),[usersConnected]);return __jsx(ConnectionContext.Provider,{value:values},children)}OnlineContext.displayName="OnlineContext",OnlineContext.propTypes={children:prop_types_default().node.isRequired},OnlineContext.__docgenInfo={description:"",methods:[],displayName:"OnlineContext",props:{children:{description:"",type:{name:"node"},required:!0}}};const hooks_useOnline=function useOnline(){return(0,react.useContext)(ConnectionContext)};var useCohortHandler=__webpack_require__("./src/common/hooks/useCohortHandler.js"),avatarUser_jsx=react.createElement,AvatarUser=(0,react.memo)((function(_ref){var _data$role,_data$role2,_user$profile,_user$github,_data$role3,_data$role4,data=_ref.data,fullName=_ref.fullName,isTeacherVersion=_ref.isTeacherVersion,containerStyle=_ref.containerStyle,width=_ref.width,height=_ref.height,badge=_ref.badge,customBadge=_ref.customBadge,isWrapped=_ref.isWrapped,index=_ref.index,withoutPopover=_ref.withoutPopover,avatarUrl=_ref.avatarUrl,user=data.user,t=(0,useTranslation.Z)("dashboard").t,fullNameLabel=fullName||"".concat(user.first_name," ").concat(user.last_name),router=(0,next_router.useRouter)(),usersConnected=hooks_useOnline().usersConnected,cohortSession=(0,useCohortHandler.Z)().state.cohortSession,isOnlineUser=null==usersConnected?void 0:usersConnected.some((function(id){return id===(null==user?void 0:user.id)})),_useMediaQuery=(0,chunk_MG6WC47T.a)("(max-width: 768px)"),isBelowTablet=(0,slicedToArray.Z)(_useMediaQuery,1)[0],dateFormated={en:(null==data?void 0:data.created_at)&&(0,format.Z)(new Date(null==data?void 0:data.created_at),"MMMM dd, yyyy"),es:(null==data?void 0:data.created_at)&&(0,format.Z)(new Date(null==data?void 0:data.created_at),"dd 'de' MMMM, yyyy",{locale:es.Z})},cohortSlug=router.query.cohortSlug,borderColor=(0,chunk_7NLW6UB6.ff)("white","featuredDark"),roles={teacher:t("common:teacher"),assistant:t("common:assistant"),student:t("common:student")},infoText={en:"".concat(roles[null==data||null===(_data$role=data.role)||void 0===_data$role?void 0:_data$role.toLowerCase()]||"Member"," in this cohort since"),es:"".concat(roles[null==data||null===(_data$role2=data.role)||void 0===_data$role2?void 0:_data$role2.toLowerCase()]||"Miembro"," en esta cohorte desde")},placementCard=isBelowTablet?"auto":"left-end",avatar=(null==user||null===(_user$profile=user.profile)||void 0===_user$profile?void 0:_user$profile.avatar_url)||(null==user||null===(_user$github=user.github)||void 0===_user$github?void 0:_user$github.avatar_url)||avatarUrl;return withoutPopover?avatarUser_jsx(chunk_CRIDK7KT.U,{as:"div","aria-expanded":!1,justifyContent:"center",alignItems:"center",style:containerStyle},avatarUser_jsx(chunk_WPAIWTI3.q,{id:fullNameLabel,width,height,style:{userSelect:"none"},onClick:function onClick(){var _cohortSession$academ2;isTeacherVersion&&null!=user&&user.id&&null!=cohortSession&&null!==(_cohortSession$academ2=cohortSession.academy)&&void 0!==_cohortSession$academ2&&_cohortSession$academ2.id&&router.push("/cohort/".concat(cohortSlug,"/student/").concat(null==user?void 0:user.id,"?academy=").concat(cohortSession.academy.id))},cursor:isTeacherVersion?"pointer":"default",title:fullNameLabel,src:avatar,marginLeft:isWrapped?"-10px":"0px",zIndex:index},customBadge&&customBadge,badge&&isOnlineUser&&avatarUser_jsx(chunk_2RQKHYD2.M,{boxSize:"11px",bg:"success",top:"-4px",right:isWrapped?"6px":"4px",border:"2px solid",borderColor}))):avatarUser_jsx(chunk_4OGHDZEB.J,{trigger:"hover",key:fullNameLabel,placement:placementCard},avatarUser_jsx(chunk_3O5UWOX6.x,null,avatarUser_jsx(chunk_CRIDK7KT.U,{as:"div","aria-expanded":!1,justifyContent:"center",alignItems:"center",style:containerStyle},avatarUser_jsx(chunk_WPAIWTI3.q,{id:fullNameLabel,width,height,style:{userSelect:"none"},onClick:function onClick(){var _cohortSession$academ;isTeacherVersion&&null!=user&&user.id&&null!=cohortSession&&null!==(_cohortSession$academ=cohortSession.academy)&&void 0!==_cohortSession$academ&&_cohortSession$academ.id&&router.push("/cohort/".concat(cohortSlug,"/student/").concat(null==user?void 0:user.id,"?academy=").concat(cohortSession.academy.id))},cursor:isTeacherVersion?"pointer":"default",title:fullNameLabel,src:avatar,marginLeft:isWrapped?"-10px":"0px",zIndex:index,alt:"".concat(fullNameLabel," - image")},customBadge&&customBadge,badge&&isOnlineUser&&avatarUser_jsx(chunk_2RQKHYD2.M,{boxSize:"11px",bg:"success",top:"-4px",right:isWrapped?"6px":"4px",border:"2px solid",borderColor})))),avatarUser_jsx(chunk_KVBLLJMP.y,{minWidth:null!=data&&data.role?"320px":"",width:null!=data&&data.role?"100%":"auto",pr:!(null!=data&&data.role)&&"20px"},(null==data?void 0:data.role)&&avatarUser_jsx(chunk_BYOOQOH2.Y,null,avatarUser_jsx(Heading.Z,{size:"15px",fontWeight:"semibold",textTransform:"uppercase",py:"4px",px:"8px",dangerouslySetInnerHTML:{__html:"".concat(roles[null==data||null===(_data$role3=data.role)||void 0===_data$role3?void 0:_data$role3.toLowerCase()]||"member")}})),avatarUser_jsx(chunk_6YK4VVQO.Q,null),avatarUser_jsx(chunk_3JH7ZFSI.b,{className:"popover-bg-color",display:"flex",flexDirection:"row",gridGap:"15px",my:"8px"},avatarUser_jsx(chunk_WPAIWTI3.q,{id:fullNameLabel,width:null!=data&&data.role?"95px":"38px",height:null!=data&&data.role?"95px":"38px",style:{userSelect:"none"},src:avatar}),avatarUser_jsx(chunk_6CSUKJP7.xu,{display:"flex",flexDirection:"column",justifyContent:"center",gridGap:"10px",height:"auto"},avatarUser_jsx(Heading.Z,{size:"15px"},fullNameLabel),infoText[null==router?void 0:router.locale]&&roles[null==data||null===(_data$role4=data.role)||void 0===_data$role4?void 0:_data$role4.toLowerCase()]&&avatarUser_jsx(Text.Z,{size:"sm",fontWeight:"400"},"".concat(infoText[null==router?void 0:router.locale]," ").concat(dateFormated[null==router?void 0:router.locale]))))))}));AvatarUser.propTypes={data:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])).isRequired,fullName:prop_types_default().string,containerStyle:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),width:prop_types_default().string,height:prop_types_default().string,badge:prop_types_default().bool,customBadge:prop_types_default().node,isWrapped:prop_types_default().bool,index:prop_types_default().number,withoutPopover:prop_types_default().bool,avatarUrl:prop_types_default().string,isTeacherVersion:prop_types_default().bool},AvatarUser.defaultProps={fullName:"",containerStyle:{},width:"39px",height:"39px",badge:!1,customBadge:null,isWrapped:!1,index:0,withoutPopover:!1,avatarUrl:"",isTeacherVersion:!1};const avatarUser=AvatarUser;var Icon=__webpack_require__("./src/common/components/Icon/index.jsx"),useStyle=__webpack_require__("./src/common/hooks/useStyle.js"),ProjectsSection_jsx=react.createElement;function ProjectsSection(_ref){var _syllabusArray,_syllabusArray2,_teacher$user,_teacher$user2,startsIn=_ref.startsIn,syllabusContent=_ref.syllabusContent,courseProgress=_ref.courseProgress,usersConnected=_ref.usersConnected,assistants=_ref.assistants,teacher=_ref.teacher,isAvailableAsSaas=_ref.isAvailableAsSaas,subscriptionStatus=_ref.subscriptionStatus,t=(0,useTranslation.Z)("program-card").t,textColor=(0,chunk_7NLW6UB6.ff)("black","white"),bgColor=(0,chunk_7NLW6UB6.ff)("featuredLight","featuredDark"),now=new Date,hexColor=(0,useStyle.Z)().hexColor,isFreeTrial="FREE_TRIAL"===subscriptionStatus,statusActive="ACTIVE"===subscriptionStatus||"FULLY_PAID"===subscriptionStatus,hasStarted="started"===function statusTimeString(start){return start<now?"started":"idle"}(new Date(startsIn)),syllabusArray=function syllabusArray(){var contentArray=[];return null!=syllabusContent&&syllabusContent.totalLessons&&contentArray.push({name:"lessons",icon:"book",total:syllabusContent.totalLessons,completed:syllabusContent.completedLessons}),null!=syllabusContent&&syllabusContent.totalProjects&&contentArray.push({name:"projects",icon:"laptop",total:syllabusContent.totalProjects,completed:syllabusContent.completedProjects}),null!=syllabusContent&&syllabusContent.totalExercises&&contentArray.push({name:"exercises",icon:"strength",total:syllabusContent.totalExercises,completed:syllabusContent.completedExercises}),null!=syllabusContent&&syllabusContent.totalQuizzes&&contentArray.push({name:"quizzes",icon:"answer",total:syllabusContent.totalQuizzes,completed:syllabusContent.completedQuizzes}),contentArray},existsMentors=(null==assistants?void 0:assistants.length)>0||(0,utils.hj)(null==teacher?void 0:teacher.id),countOfMentors=(null==assistants?void 0:assistants.length)+(null!=teacher&&teacher.id?1:0);return((null===(_syllabusArray=syllabusArray())||void 0===_syllabusArray?void 0:_syllabusArray.length)>0||(null==assistants?void 0:assistants.length)>0)&&ProjectsSection_jsx(chunk_MPFPK3CX.k,{justifyContent:"space-between",alignItems:"center",marginTop:"10px",padding:"10px",borderRadius:"5px",background:bgColor},(null===(_syllabusArray2=syllabusArray())||void 0===_syllabusArray2?void 0:_syllabusArray2.length)>0&&ProjectsSection_jsx(chunk_6CSUKJP7.xu,{display:"flex",flexDirection:"column",gridGap:"8px"},syllabusArray().map((function(elem){return ProjectsSection_jsx(Text.Z,{fontSize:"xs",lineHeight:"14px",fontWeight:"700",color:textColor,key:null==elem?void 0:elem.name,display:"flex"},ProjectsSection_jsx(Icon.Z,{width:(null==elem||elem.icon,"14px"),height:(null==elem||elem.icon,"14px"),mr:"7px",color:hexColor.blueDefault,icon:(null==elem?void 0:elem.icon)||"book"}),ProjectsSection_jsx(chunk_6CSUKJP7.xu,null,(!1===isAvailableAsSaas||statusActive||isFreeTrial)&&(hasStarted||courseProgress>0)&&ProjectsSection_jsx(react.Fragment,null,ProjectsSection_jsx("span",{style:{color:theme.Z.colors.blue.default2}},elem.completed||0),"/"),"".concat(elem.total," ").concat(t(elem.name))))}))),existsMentors&&ProjectsSection_jsx(chunk_6CSUKJP7.xu,null,ProjectsSection_jsx(Text.Z,{fontSize:"xs",lineHeight:"14px",fontWeight:"700",color:textColor,marginBottom:"5px",textAlign:"center"},"".concat(countOfMentors," ").concat(t("mentors-available"))),ProjectsSection_jsx(chunk_6CSUKJP7.xu,{display:"flex",justifyContent:"space-between",mt:"10px",gridGap:"22px"},(null==teacher?void 0:teacher.id)&&ProjectsSection_jsx(avatarUser,{width:"42px",height:"42px",key:"".concat(teacher.id," - ").concat(teacher.user.first_name),fullName:"".concat(null==teacher||null===(_teacher$user=teacher.user)||void 0===_teacher$user?void 0:_teacher$user.first_name," ").concat(null==teacher||null===(_teacher$user2=teacher.user)||void 0===_teacher$user2?void 0:_teacher$user2.last_name),data:teacher,isOnline:null==usersConnected?void 0:usersConnected.includes(teacher.user.id),badge:!0,customBadge:ProjectsSection_jsx(chunk_6CSUKJP7.xu,{position:"absolute",bottom:"-6px",right:"-8px",background:"blue.default",borderRadius:"50px",p:"5px",border:"2px solid white"},ProjectsSection_jsx(Icon.Z,{icon:"teacher1",width:"12px",height:"12px",color:"#FFFFFF"}))}),(null==assistants?void 0:assistants.length)>0&&ProjectsSection_jsx(chunk_ZYO64PFG.H,{max:(null==assistants?void 0:assistants.length)<=2?2:1,size:"md"},null==assistants?void 0:assistants.map((function(c,i){var fullName="".concat(c.user.first_name," ").concat(c.user.last_name),isOnline=null==usersConnected?void 0:usersConnected.includes(c.user.id);return ProjectsSection_jsx(react.Fragment,{key:"".concat(c.id," - ").concat(fullName)},ProjectsSection_jsx(avatarUser,{width:"42px",height:"42px",index:i,isWrapped:!0,fullName,data:c,isOnline,badge:!0}))}))))))}ProjectsSection.propTypes={startsIn:prop_types_default().instanceOf(Date),syllabusContent:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),courseProgress:prop_types_default().number,usersConnected:prop_types_default().arrayOf(prop_types_default().number),assistants:prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().any])),teacher:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),isAvailableAsSaas:prop_types_default().bool,subscriptionStatus:prop_types_default().string},ProjectsSection.defaultProps={startsIn:null,syllabusContent:null,courseProgress:null,usersConnected:[],assistants:[],teacher:null,isAvailableAsSaas:!0,subscriptionStatus:""},ProjectsSection.__docgenInfo={description:"",methods:[],displayName:"ProjectsSection",props:{startsIn:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"instanceOf",value:"Date"},required:!1},syllabusContent:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},courseProgress:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"number"},required:!1},usersConnected:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"number"}},required:!1},assistants:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"any"}]}},required:!1},teacher:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},isAvailableAsSaas:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},subscriptionStatus:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1}}};const components_ProjectsSection=ProjectsSection},"./src/common/hooks/useCohortHandler.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>hooks_useCohortHandler});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),axios=__webpack_require__("./node_modules/axios/lib/axios.js"),chunk_ENIANY67=__webpack_require__("./node_modules/@chakra-ui/toast/dist/chunk-ENIANY67.mjs"),useTranslation=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),next_router=__webpack_require__("./node_modules/next/router.js"),utils=__webpack_require__("./src/utils/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),types=__webpack_require__("./src/common/store/types/index.js"),usePersistent=__webpack_require__("./src/common/hooks/usePersistent.js");const cohortAction=function useCohort(){var dispatch=(0,es.I0)(),_usePersistent=(0,usePersistent.K)("cohortSession",{}),persistCohortSession=(0,slicedToArray.Z)(_usePersistent,2)[1];return{state:(0,es.v9)((function(reducerState){return reducerState.cohortReducer})),setCohortSession:function setCohortSession(payload){dispatch({type:types.Rw,payload:{cohortSession:payload}}),null!=payload&&persistCohortSession(payload)},setTaskCohortNull:function setTaskCohortNull(payload){dispatch({type:types.Ze,payload:{taskCohortNull:payload}})},setSortedAssignments:function setSortedAssignments(payload){dispatch({type:types.y_,payload:{sortedAssignments:payload}})},setUserCapabilities:function setUserCapabilities(paylaod){dispatch({type:types.iG,payload:{userCapabilities:paylaod}})}}};var breathecode=__webpack_require__("./src/common/services/breathecode.js"),variables=__webpack_require__("./src/utils/variables.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const hooks_useCohortHandler=function useCohortHandler(){var _router$query,_router$query2,router=(0,next_router.useRouter)(),_useTranslation=(0,useTranslation.Z)("dashboard"),t=_useTranslation.t,lang=_useTranslation.lang,_useAssignments=cohortAction(),setCohortSession=_useAssignments.setCohortSession,setTaskCohortNull=_useAssignments.setTaskCohortNull,setSortedAssignments=_useAssignments.setSortedAssignments,setUserCapabilities=_useAssignments.setUserCapabilities,state=_useAssignments.state,cohortSession=state.cohortSession,sortedAssignments=state.sortedAssignments,userCapabilities=state.userCapabilities,toast=(0,chunk_ENIANY67.p)(),accessToken=(0,utils.qn)("accessToken"),assetSlug=null==router||null===(_router$query=router.query)||void 0===_router$query?void 0:_router$query.lessonSlug,assetType=null==router||null===(_router$query2=router.query)||void 0===_router$query2?void 0:_router$query2.lesson,assetTypes={read:"lesson",practice:"exercise",project:"project",answer:"quiz"},handleRedirectToPublicPage=function handleRedirectToPublicPage(){axios.Z.get("".concat(variables.k1,"/v1/registry/asset/").concat(assetSlug)).then((function(response){var _response$data;null!=response&&null!==(_response$data=response.data)&&void 0!==_response$data&&_response$data.asset_type&&function redirectToPublicPage(data){var _data$translations,_data$translations2,englishSlug={en:null==data||null===(_data$translations=data.translations)||void 0===_data$translations?void 0:_data$translations.us},assetTypeLower=((null==data?void 0:data.asset_type)||assetTypes[assetType]).toLowerCase(),translationSlug=(null==englishSlug?void 0:englishSlug[lang])||(null==data||null===(_data$translations2=data.translations)||void 0===_data$translations2?void 0:_data$translations2[lang])||assetSlug,pathConnector={lesson:"".concat("en"===lang?"".concat(variables.fh,"/lesson/").concat(translationSlug):"".concat(variables.fh,"/").concat(lang,"/lesson/").concat(translationSlug)),exercise:"".concat("en"===lang?"".concat(variables.fh,"/interactive-exercise/").concat(translationSlug):"".concat(variables.fh,"/").concat(lang,"/interactive-exercise/").concat(translationSlug)),project:"".concat("en"===lang?"".concat(variables.fh,"/project/").concat(translationSlug):"".concat(variables.fh,"/").concat(lang,"/project/").concat(translationSlug))};null!=pathConnector&&pathConnector[assetTypeLower]&&(window.location.href=pathConnector[assetTypeLower])}(response.data)})).catch((function(){router.push("/404")}))};return{setCohortSession,setSortedAssignments,getCohortAssignments:function getCohortAssignments(_ref){var user=_ref.user,setContextState=_ref.setContextState,slug=_ref.slug,cohort=_ref.cohort;if(user){var academyId=cohort.academy.id,version=cohort.syllabus_version.version,syllabusSlug=(null==cohort?void 0:cohort.syllabus_version.slug)||slug,currentAcademy=user.roles.find((function(role){return role.academy.id===academyId}));currentAcademy&&Promise.all([breathecode.Z.todo({cohort:cohort.id,limit:1e3}).getTaskByStudent(),breathecode.Z.syllabus().get(academyId,syllabusSlug,version),breathecode.Z.auth().getRoles(null==currentAcademy?void 0:currentAcademy.role)]).then((function(_ref2){var _ref3=(0,slicedToArray.Z)(_ref2,3),taskTodoData=_ref3[0],programData=_ref3[1],userRoles=_ref3[2];setUserCapabilities(userRoles.data.capabilities),setContextState({taskTodo:taskTodoData.data.results,cohortProgram:programData.data})})).catch((function(err){console.log(err),toast({position:"top",title:t("alert-message:error-fetching-role",{role:null==currentAcademy?void 0:currentAcademy.role}),description:err.message,status:"error",duration:7e3,isClosable:!0}),router.push("/choose-program")}))}},getCohortData:function getCohortData(_ref4){var cohortSlug=_ref4.cohortSlug;return new Promise((function(resolve,reject){cohortSlug&&accessToken?breathecode.Z.admissions().me().then((function(_ref5){var data=_ref5.data;if(!data)throw new Error("No data");var findCohort=data.cohorts.find((function(c){return c.cohort.slug===cohortSlug})),currentCohort=null==findCohort?void 0:findCohort.cohort;if(assetSlug&&!currentCohort&&handleRedirectToPublicPage(),currentCohort){var syllabus_version=currentCohort.syllabus_version;setCohortSession(_objectSpread(_objectSpread(_objectSpread({},cohortSession),currentCohort),{},{selectedProgramSlug:"/cohort/".concat(currentCohort.slug,"/").concat(syllabus_version.slug,"/v").concat(syllabus_version.version),cohort_role:findCohort.role,cohort_user:{created_at:findCohort.created_at,educational_status:findCohort.educational_status,finantial_status:findCohort.finantial_status,role:findCohort.role}})),resolve(currentCohort)}})).catch((function(error){handleRedirectToPublicPage(),toast({position:"top",title:t("alert-message:invalid-cohort-slug"),status:"error",duration:7e3,isClosable:!0}),reject(error),setTimeout((function(){localStorage.removeItem("cohortSession")}),4e3)})):handleRedirectToPublicPage()}))},prepareTasks:function prepareTasks(_ref6){var _cohortProgram$json,_cohortProgram$json2,cohortProgram=_ref6.cohortProgram,contextState=_ref6.contextState,nestAssignments=_ref6.nestAssignments,moduleData=(null===(_cohortProgram$json=cohortProgram.json)||void 0===_cohortProgram$json?void 0:_cohortProgram$json.days)||(null===(_cohortProgram$json2=cohortProgram.json)||void 0===_cohortProgram$json2?void 0:_cohortProgram$json2.modules),cohort=cohortProgram.json?moduleData:[],assignmentsRecopilated=[];(0,utils.Cv)("json.days:",moduleData),contextState.cohortProgram.json&&contextState.taskTodo&&cohort.map((function(assignment){var id=assignment.id,label=assignment.label,description=assignment.description,lessons=assignment.lessons,replits=assignment.replits,assignments=assignment.assignments,quizzes=assignment.quizzes;if(lessons&&replits&&assignments&&quizzes){var nestedAssignments=nestAssignments({id,read:lessons,practice:replits,project:assignments,answer:quizzes,taskTodo:contextState.taskTodo}),modules=nestedAssignments.modules,filteredModules=nestedAssignments.filteredModules,filteredModulesByPending=nestedAssignments.filteredModulesByPending,assignmentsStruct={id,label,description,modules,exists_activities:(null==modules?void 0:modules.length)>0,filteredModules,filteredModulesByPending:(null==modules?void 0:modules.length)>0?filteredModulesByPending:null,duration_in_days:(null==assignment?void 0:assignment.duration_in_days)||null,teacherInstructions:assignment.teacher_instructions,extendedInstructions:assignment.extended_instructions||"".concat(t("teacher-sidebar.no-instructions")),keyConcepts:assignment["key-concepts"]},keyIndex=assignmentsRecopilated.findIndex((function(x){return x.id===id}));keyIndex>-1?assignmentsRecopilated.splice(keyIndex,1,_objectSpread({},assignmentsStruct)):assignmentsRecopilated.push(_objectSpread({},assignmentsStruct));var filterNotEmptyModules=assignmentsRecopilated.filter((function(l){return l.modules.length>0}));return setSortedAssignments(filterNotEmptyModules)}return null}))},getDailyModuleData:function getDailyModuleData(){return sortedAssignments.find((function(assignment){return assignment.id===(null==cohortSession?void 0:cohortSession.current_module)}))},getMandatoryProjects:function getMandatoryProjects(){return sortedAssignments.flatMap((function(assignment){return assignment.filteredModules.filter((function(l){return"PROJECT"===l.task_type&&"PENDING"===l.task_status&&!0===l.mandatory&&l.daysDiff>=14}))}))},getTasksWithoutCohort:function getTasksWithoutCohort(_ref7){var setModalIsOpen=_ref7.setModalIsOpen;return router.asPath===cohortSession.selectedProgramSlug&&breathecode.Z.todo({cohort:null}).getTaskByStudent().then((function(_ref8){var data=_ref8.data,filteredUnsyncedCohortTasks=sortedAssignments.flatMap((function(assignment){return data.filter((function(task){return assignment.modules.some((function(module){return task.associated_slug===module.slug}))}))}));setModalIsOpen(0!==filteredUnsyncedCohortTasks.length),setTaskCohortNull(filteredUnsyncedCohortTasks)})),function(){}},userCapabilities,state}}}}]);