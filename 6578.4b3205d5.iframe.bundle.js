"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6578],{"./src/common/hooks/useAuth.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>hooks_useAuth});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),next_router=__webpack_require__("./node_modules/next/router.js"),useTranslation=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),chunk_ENIANY67=__webpack_require__("./node_modules/@chakra-ui/toast/dist/chunk-ENIANY67.mjs"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_WPAIWTI3=__webpack_require__("./node_modules/@chakra-ui/avatar/dist/chunk-WPAIWTI3.mjs"),breathecode=__webpack_require__("./src/common/services/breathecode.js"),utils=__webpack_require__("./src/utils/index.js"),requests=__webpack_require__("./src/utils/requests.js"),axios=__webpack_require__("./src/axios.js"),usePersistent=__webpack_require__("./src/common/hooks/usePersistent.js"),modifyEnv=__webpack_require__("./modifyEnv.js"),modalInfo=__webpack_require__("./src/js_modules/moduleMap/modalInfo.jsx"),Text=__webpack_require__("./src/common/components/Text.jsx"),SILENT_CODE_EMAIL_NOT_VALIDATED="email-not-validated",logging=__webpack_require__("./src/utils/logging.js"),process=__webpack_require__("./node_modules/process/browser.js"),__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var initialState={isLoading:!0,isAuthenticated:!1,isAuthenticatedWithRigobot:!1,user:null},langHelper={us:"en",en:"en",es:"es"},reducer=function reducer(state,action){switch(action.type){case"INIT":var _action$payload=action.payload,isLoading=_action$payload.isLoading,isAuthenticated=_action$payload.isAuthenticated,isAuthenticatedWithRigobot=_action$payload.isAuthenticatedWithRigobot,user=_action$payload.user;return _objectSpread(_objectSpread({},state),{},{isLoading,isAuthenticated,isAuthenticatedWithRigobot,user});case"LOGIN":var _user=action.payload.user;return _objectSpread(_objectSpread({},state),{},{isLoading:!1,isAuthenticated:!0,user:_user});case"LOGOUT":return _objectSpread(_objectSpread({},state),{},{isLoading:!1,isAuthenticated:!1,user:null});case"REGISTER":var _user2=action.payload.user;return _objectSpread(_objectSpread({},state),{},{isAuthenticated:!0,user:_user2});case"UPDATE_PROFILE_PICTURE":return _objectSpread(_objectSpread({},state),{},{isLoading:!1,user:action.payload});case"LOADING":return _objectSpread(_objectSpread({},state),{},{isLoading:action.payload});default:return _objectSpread({},state)}},getToken=function getToken(){if(utils.FJ){var _query$get,queryToken=null===(_query$get=new URLSearchParams(window.location.search||"").get("token"))||void 0===_query$get?void 0:_query$get.split("?")[0];return queryToken||localStorage.getItem("accessToken")}return null},AuthContext=(0,react.createContext)(_objectSpread({},initialState));function AuthProvider(_ref){var _query$get2,children=_ref.children,pageProps=_ref.pageProps,BREATHECODE_HOST=(0,modifyEnv.Z)({queryString:"host",env:process.env.BREATHECODE_HOST}),router=(0,next_router.useRouter)(),_useTranslation=(0,useTranslation.Z)("footer"),t=_useTranslation.t,lang=_useTranslation.lang,toast=(0,chunk_ENIANY67.p)(),queryCoupon=(0,utils.Wz)("coupon"),_usePersistentBySessi=(0,usePersistent.d)("coupon",[]),setCoupon=(0,slicedToArray.Z)(_usePersistentBySessi,2)[1],_useReducer=(0,react.useReducer)(reducer,initialState),state=_useReducer[0],dispatch=_useReducer[1],_useState=(0,react.useState)({state:!1,user:null}),modalState=_useState[0],setModalState=_useState[1],_usePersistent=(0,usePersistent.K)("profile",{}),_usePersistent2=(0,slicedToArray.Z)(_usePersistent,2),profile=_usePersistent2[0],setProfile=_usePersistent2[1],query=utils.FJ&&new URLSearchParams(window.location.search||""),queryToken=utils.FJ&&(null===(_query$get2=query.get("token"))||void 0===_query$get2?void 0:_query$get2.split("?")[0]),cleanUrl=utils.FJ&&(0,utils.rg)(window.location.href,"token"),queryTokenExists=utils.FJ&&void 0!==queryToken&&queryToken.length>0,handleSession=function handleSession(tokenString){return function setTokenSession(token){token?(localStorage.setItem("accessToken",token),axios.ZP.defaults.headers.common.Authorization="Token ".concat(token)):((0,utils.L_)("syllabus"),(0,utils.L_)("programMentors"),(0,utils.L_)("programServices"),(0,utils.L_)("cohortSession"),(0,utils.L_)("accessToken"),(0,utils.L_)("taskTodo"),(0,utils.L_)("profile"),(0,utils.L_)("sortedAssignments"),(0,utils.L_)("days_history_log"),(0,utils.L_)("queryCache"),(0,utils.L_)("hasPaidSubscription"),(0,utils.L_)("programsList"),(0,utils.L_)("isClosedLateModal"),delete axios.ZP.defaults.headers.common.Authorization)}(tokenString)},updateSettingsLang=function(){var _ref2=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(){return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,_context.next=3,breathecode.Z.auth().updateSettings({lang});case 3:_context.next=8;break;case 5:_context.prev=5,_context.t0=_context.catch(0),(0,logging.ZK)('error function "updateSettingsLang": ',_context.t0);case 8:case"end":return _context.stop()}}),_callee,null,[[0,5]])})));return function updateSettingsLang(){return _ref2.apply(this,arguments)}}(),authHandler=function(){var _ref3=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee2(){var token,respRigobotAuth,isAuthenticatedWithRigobot;return regenerator_default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(null==(token=getToken())){_context2.next=12;break}return _context2.next=4,breathecode.Z.auth().verifyRigobotConnection(token);case 4:return respRigobotAuth=_context2.sent,isAuthenticatedWithRigobot=respRigobotAuth&&200===(null==respRigobotAuth?void 0:respRigobotAuth.status),_context2.next=8,fetch("".concat(BREATHECODE_HOST,"/v1/auth/token/").concat(token),{method:"GET",headers:{"Content-Type":"application/json"}});case 8:_context2.sent.status>=400?(handleSession(null),queryTokenExists?router.push(cleanUrl):router.reload(),dispatch({type:"INIT",payload:{user:null,isAuthenticated:!1,isLoading:!1}})):(handleSession(token),breathecode.Z.auth().me().then((function(_ref4){var _data$profile,_data$github,_data$profile2,_data$profile3,data=_ref4.data;dispatch({type:"INIT",payload:{user:data,isAuthenticated:!0,isAuthenticatedWithRigobot,isLoading:!1}});var permissionsSlug=data.permissions.map((function(l){return l.codename})),settingsLang=null==data?void 0:data.settings.lang;setProfile(_objectSpread(_objectSpread(_objectSpread({},profile),data),{},{permissionsSlug})),(0,requests._1)({dataLayer:{event:"session_load",method:"native",user_id:data.id,email:data.email,first_name:data.first_name,last_name:data.last_name,avatar_url:(null===(_data$profile=data.profile)||void 0===_data$profile?void 0:_data$profile.avatar_url)||(null===(_data$github=data.github)||void 0===_data$github?void 0:_data$github.avatar_url),language:"us"===(null===(_data$profile2=data.profile)||void 0===_data$profile2||null===(_data$profile2=_data$profile2.settings)||void 0===_data$profile2?void 0:_data$profile2.lang)?"en":null===(_data$profile3=data.profile)||void 0===_data$profile3||null===(_data$profile3=_data$profile3.settings)||void 0===_data$profile3?void 0:_data$profile3.lang}}),data.github?localStorage.setItem("showGithubWarning","closed"):localStorage.getItem("showGithubWarning")&&"postponed"===localStorage.getItem("showGithubWarning")||localStorage.setItem("showGithubWarning","active"),pageProps.disableLangSwitcher||langHelper[null==router?void 0:router.locale]===settingsLang||updateSettingsLang()})).catch((function(){handleSession(null)}))),_context2.next=13;break;case 12:dispatch({type:"LOADING",payload:!1});case 13:return _context2.abrupt("return",null);case 14:case"end":return _context2.stop()}}),_callee2)})));return function authHandler(){return _ref3.apply(this,arguments)}}();(0,react.useEffect)((function(){queryCoupon&&setCoupon(queryCoupon),authHandler()}),[router]);var login=function(){var _ref5=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee3(){var payload,disableRedirect,redirect,_responseData$non_fie,response,responseData,i,_responseData$non_fie2,indexFromOne,message,_args3=arguments;return regenerator_default().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(payload=_args3.length>0&&void 0!==_args3[0]?_args3[0]:null,disableRedirect=_args3.length>1&&void 0!==_args3[1]&&_args3[1],redirect=utils.FJ&&localStorage.getItem("redirect"),_context3.prev=3,!payload){_context3.next=15;break}return _context3.next=7,breathecode.Z.auth().login2(payload,lang);case 7:return response=_context3.sent,_context3.next=10,response.json();case 10:if((null==(responseData=_context3.sent)?void 0:responseData.silent_code)===SILENT_CODE_EMAIL_NOT_VALIDATED&&setModalState(_objectSpread(_objectSpread(_objectSpread({},payload),responseData),{},{state:!0})),!0!==(null==responseData?void 0:responseData.silent)&&(null==responseData||null===(_responseData$non_fie=responseData.non_field_errors)||void 0===_responseData$non_fie?void 0:_responseData$non_fie.length)>0)for(i=0;i<(null===(_responseData$non_fie2=responseData.non_field_errors)||void 0===_responseData$non_fie2?void 0:_responseData$non_fie2.length);i+=1)indexFromOne=i+1,toast({position:"top",status:"error",title:responseData.non_field_errors[i],duration:5e3+1e3*indexFromOne,isClosable:!0});return 200===response.status&&(handleSession(responseData.token||response.token),dispatch({type:"LOGIN",payload:responseData}),disableRedirect?router.reload():redirect&&redirect.length>0?(router.push(redirect),localStorage.removeItem("redirect")):(router.push("/choose-program"),localStorage.removeItem("redirect")),(0,requests._1)({dataLayer:{event:"login",path:router.pathname,method:"native",user_id:responseData.user_id,email:responseData.email}})),_context3.abrupt("return",response);case 15:throw Error("Empty values");case 18:throw _context3.prev=18,_context3.t0=_context3.catch(3),message=_context3.t0.details||_context3.t0.detail||Array.isArray(_context3.t0.non_field_errors)?_context3.t0.non_field_errors[0]:"Unable to login",Error(message);case 22:case"end":return _context3.stop()}}),_callee3,null,[[3,18]])})));return function login(){return _ref5.apply(this,arguments)}}(),register=function(){var _ref6=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee4(){var payload,response,message,_args4=arguments;return regenerator_default().wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:if(payload=_args4.length>0&&void 0!==_args4[0]?_args4[0]:null,_context4.prev=1,!payload){_context4.next=8;break}return _context4.next=5,breathecode.Z.auth().register(payload);case 5:return 200===(response=_context4.sent).status&&(handleSession(response.data.token||response.token),dispatch({type:"REGISTER",payload:{isLoading:!1,isAuthenticated:!0,user:response.data}})),_context4.abrupt("return",response);case 8:throw Error("Empty values");case 11:throw _context4.prev=11,_context4.t0=_context4.catch(1),message=_context4.t0.details||_context4.t0.detail||Array.isArray(_context4.t0.non_field_errors)?_context4.t0.non_field_errors[0]:"Unable to register",Error(message);case 15:case"end":return _context4.stop()}}),_callee4,null,[[1,11]])})));return function register(){return _ref6.apply(this,arguments)}}(),updateProfilePicture=function(){var _ref7=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee5(payload){return regenerator_default().wrap((function _callee5$(_context5){for(;;)switch(_context5.prev=_context5.next){case 0:dispatch({type:"UPDATE_PROFILE_PICTURE",payload});case 1:case"end":return _context5.stop()}}),_callee5)})));return function updateProfilePicture(_x){return _ref7.apply(this,arguments)}}();return __jsx(AuthContext.Provider,{value:_objectSpread(_objectSpread({},state),{},{method:"Bearer",login,logout:function logout(){var callback=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;(0,axios.zy)(),handleSession(null),setProfile({}),"function"==typeof callback&&callback(),"function"!=typeof callback&&(queryTokenExists?router.push(cleanUrl).then((function(){router.reload()})):router.reload()),localStorage.removeItem("showGithubWarning"),localStorage.removeItem("redirect"),dispatch({type:"LOGOUT"})},register,updateProfilePicture})},children,__jsx(modalInfo.Z,{headerStyles:{textAlign:"center"},title:t("signup:alert-message.validate-email-title"),footerStyle:{flexDirection:"row-reverse"},closeButtonVariant:"outline",closeButtonStyles:{borderRadius:"3px",color:"#0097CD",borderColor:"#0097CD"},childrenDescription:__jsx(chunk_6CSUKJP7.xu,{display:"flex",flexDirection:"column",alignItems:"center",gridGap:"17px"},__jsx(chunk_WPAIWTI3.q,{src:"".concat(BREATHECODE_HOST,"/static/img/avatar-1.png"),border:"3px solid #0097CD",width:"91px",height:"91px",borderRadius:"50px"}),__jsx(Text.Z,{size:"14px",textAlign:"center",dangerouslySetInnerHTML:{__html:t("signup:alert-message.validate-email-description",{email:null==modalState?void 0:modalState.email})}})),isOpen:modalState.state,buttonHandlerStyles:{variant:"default"},actionHandler:function actionHandler(){var _modalState$data,inviteId=null==modalState||null===(_modalState$data=modalState.data)||void 0===_modalState$data||null===(_modalState$data=_modalState$data[0])||void 0===_modalState$data?void 0:_modalState$data.id;breathecode.Z.auth().resendConfirmationEmail(inviteId).then((function(resp){var data=null==resp?void 0:resp.data;toast(void 0===data?{position:"top",status:"info",title:t("signup:alert-message.email-already-sent"),isClosable:!0,duration:6e3}:{position:"top",status:"success",title:t("signup:alert-message.email-sent-to",{email:null==data?void 0:data.email}),isClosable:!0,duration:6e3})}))},handlerText:t("signup:resend"),onClose:function onClose(){return setModalState(_objectSpread(_objectSpread({},modalState),{},{state:!1}))}}))}AuthProvider.displayName="AuthProvider",AuthProvider.propTypes={children:prop_types_default().node,pageProps:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any]))},AuthProvider.defaultProps={children:null,pageProps:{}},AuthProvider.__docgenInfo={description:"",methods:[],displayName:"AuthProvider",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},pageProps:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1}}};const hooks_useAuth=function useAuth(){return(0,react.useContext)(AuthContext)}},"./src/common/hooks/usePersistent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>usePersistent,d:()=>usePersistentBySession});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_utils_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/index.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),usePersistent=function usePersistent(key,initialValue){var getStoredValues=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var item=_utils_index__WEBPACK_IMPORTED_MODULE_1__.FJ?window.localStorage.getItem(key):null;return JSON.parse(item)||initialValue}),[key,initialValue]),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getStoredValues),storedValue=_useState[0],setStoredValue=_useState[1];return[storedValue,function setValue(value){try{setStoredValue(value),window.localStorage.setItem(key,JSON.stringify(value))}catch(error){console.error("usePersistent_error:",error)}}]},usePersistentBySession=function usePersistentBySession(key,initialValue){var getStoredValues=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var item=_utils_index__WEBPACK_IMPORTED_MODULE_1__.FJ?window.sessionStorage.getItem(key):null,isObject="object"==typeof item,objectValue=JSON.parse(item)||initialValue;return isObject?objectValue:item||initialValue}),[key,initialValue]),_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getStoredValues),storedValue=_useState2[0],setStoredValue=_useState2[1];return[storedValue,function setValue(value){try{setStoredValue(value),window.sessionStorage.setItem(key,JSON.stringify(value))}catch(error){console.error("usePersistent_error:",error)}}]}},"./src/js_modules/moduleMap/modalInfo.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>modalInfo});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),chunk_7NLW6UB6=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-7NLW6UB6.mjs"),chunk_UUGUEMMH=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-UUGUEMMH.mjs"),chunk_OWW5MU75=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-OWW5MU75.mjs"),chunk_66WFFNY3=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-66WFFNY3.mjs"),chunk_YBA5A33G=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-YBA5A33G.mjs"),chunk_YLPWWAYV=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-YLPWWAYV.mjs"),chunk_PVJ72NKC=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-PVJ72NKC.mjs"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_YTV6DHKL=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-YTV6DHKL.mjs"),chunk_6ZNYZUDD=__webpack_require__("./node_modules/@chakra-ui/form-control/dist/chunk-6ZNYZUDD.mjs"),chunk_GYFRIY2Z=__webpack_require__("./node_modules/@chakra-ui/input/dist/chunk-GYFRIY2Z.mjs"),chunk_3GP7MWMA=__webpack_require__("./node_modules/@chakra-ui/form-control/dist/chunk-3GP7MWMA.mjs"),chunk_YI7XFFAC=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-YI7XFFAC.mjs"),chunk_NAA7TEES=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs"),useTranslation=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),formik_esm=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Text=__webpack_require__("./src/common/components/Text.jsx"),index_esm=__webpack_require__("./node_modules/yup/index.esm.js"),regex=__webpack_require__("./src/utils/regex.js"),subscribe=index_esm.Ry().shape({email:index_esm.Z_().matches(regex.Do,"Invalid email").required("Email is required")});const validationSchemas={register:index_esm.Ry().shape({first_name:index_esm.Z_().min(2,"Too Short!").max(50,"Too Long!").required("First name is required"),last_name:index_esm.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Last name is required"),email:index_esm.Z_().email("Invalid email").required("Email is required"),phone:index_esm.Z_().matches(regex.m7,"Invalid phone number")}),invite:index_esm.Ry().shape({first_name:index_esm.Z_().min(2,"Too Short!").max(50,"Too Long!").required("First name is required"),last_name:index_esm.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Last name is required"),email:index_esm.Z_().email("Invalid email").required("Email is required"),phone:index_esm.Z_().matches(regex.m7,"Invalid phone number"),password:index_esm.Z_().required("Password is required"),passwordConfirmation:index_esm.Z_().required("Password Confirmation Required").oneOf([index_esm.iH("password"),null],"Passwords must match")}),handleProfile:index_esm.Ry().shape({first_name:index_esm.Z_().min(2,"Too Short!").max(50,"Too Long!").required("First name is required"),last_name:index_esm.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Last name is required"),email:index_esm.Z_().email("Invalid email").required("Email is required"),phone:index_esm.Z_().matches(regex.m7,"Invalid phone number")}),login:index_esm.Ry().shape({password:index_esm.Z_().required("Password is required"),email:index_esm.Z_().email("Invalid email").required("Password is required")}),leadForm:index_esm.Ry().shape({full_name:index_esm.Z_().min(10,"Too Short!").max(50,"Too Long!").required("Full name is required"),email:index_esm.Z_().email("Invalid email").required("Email is required")}),subscribe,projectUrlValidation:index_esm.Ry().shape({githubUrl:index_esm.Z_().matches(regex.HQ,"Invalid Url").required("Url is required")}),signup:index_esm.Ry().shape({firstName:index_esm.Z_().min(2,"Too Short!").max(50,"Too Long!").required("First name is required"),lastName:index_esm.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Last name is required"),email:index_esm.Z_().email("Invalid email").required("Email is required"),confirmEmail:index_esm.Z_().oneOf([index_esm.iH("email"),null],"Emails don't match").required("Confirm Email is required")})};var Icon=__webpack_require__("./src/common/components/Icon/index.jsx"),iconDict=__webpack_require__("./src/common/utils/iconDict.json"),_excluded=["isOpen","onClose","actionHandler","closeActionHandler","rejectHandler","forceHandler","disableHandler","title","description","teacherFeedback","linkInfo","linkText","link","handlerText","closeText","cancelColorButton","handlerColorButton","rejectData","sendProject","currentTask","type","closeButtonVariant","htmlDescription","attachment","disableInput","descriptionStyle","footerStyle","closeButtonStyles","buttonHandlerStyles","headerStyles","disableCloseButton","childrenDescription","maxWidth","forceHandlerAndClose","children"],__jsx=react.createElement;function ModalInfo(_ref){var isOpen=_ref.isOpen,onClose=_ref.onClose,actionHandler=_ref.actionHandler,closeActionHandler=_ref.closeActionHandler,rejectHandler=_ref.rejectHandler,forceHandler=_ref.forceHandler,disableHandler=_ref.disableHandler,title=_ref.title,description=_ref.description,teacherFeedback=_ref.teacherFeedback,linkInfo=_ref.linkInfo,linkText=_ref.linkText,link=_ref.link,handlerText=_ref.handlerText,closeText=_ref.closeText,cancelColorButton=_ref.cancelColorButton,handlerColorButton=_ref.handlerColorButton,rejectData=_ref.rejectData,sendProject=_ref.sendProject,currentTask=_ref.currentTask,type=_ref.type,closeButtonVariant=_ref.closeButtonVariant,htmlDescription=_ref.htmlDescription,attachment=_ref.attachment,disableInput=_ref.disableInput,descriptionStyle=_ref.descriptionStyle,footerStyle=_ref.footerStyle,closeButtonStyles=_ref.closeButtonStyles,buttonHandlerStyles=_ref.buttonHandlerStyles,headerStyles=_ref.headerStyles,disableCloseButton=_ref.disableCloseButton,childrenDescription=_ref.childrenDescription,maxWidth=_ref.maxWidth,forceHandlerAndClose=_ref.forceHandlerAndClose,children=_ref.children,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),t=(0,useTranslation.Z)("dashboard").t,_useState=(0,react.useState)(link),githubUrl=_useState[0],setGithubUrl=_useState[1],_useState2=(0,react.useState)(!1),isSubmitting=_useState2[0],setIsSubmitting=_useState2[1],_useState3=(0,react.useState)(!1),confirmRejection=_useState3[0],setConfirmRejection=_useState3[1],commonBorderColor=(0,chunk_7NLW6UB6.ff)("gray.200","gray.500"),commonTextColor=(0,chunk_7NLW6UB6.ff)("gray.600","gray.200"),commonInputColor=(0,chunk_7NLW6UB6.ff)("gray.default","gray.300"),commonInputActiveColor=(0,chunk_7NLW6UB6.ff)("gray.800","gray.100"),commonHighlightColor=(0,chunk_7NLW6UB6.ff)("gray.250","darkTheme");return __jsx(react.Fragment,null,__jsx(chunk_UUGUEMMH.u_,(0,esm_extends.Z)({blockScrollOnMount:!1,closeOnOverlayClick:!forceHandler,isOpen,onClose},rest),__jsx(chunk_OWW5MU75.Z,null),__jsx(chunk_66WFFNY3.h,{maxWidth:maxWidth||"md",borderRadius:"6px",style:{marginTop:"10vh"}},__jsx(chunk_YBA5A33G.x,(0,esm_extends.Z)({borderBottom:1,borderStyle:"solid",borderColor:commonBorderColor},headerStyles),title),!forceHandler&&__jsx(chunk_YLPWWAYV.o,null),__jsx(chunk_PVJ72NKC.f,null,description&&__jsx(Text.Z,(0,esm_extends.Z)({size:"l",fontWeight:"400",color:commonTextColor,margin:"10px 0 0 0"},descriptionStyle),description),htmlDescription&&__jsx(Text.Z,{size:"l",fontWeight:"400",color:commonTextColor,margin:"10px 0 0 0",dangerouslySetInnerHTML:{__html:htmlDescription}}),childrenDescription&&childrenDescription,teacherFeedback&&__jsx(chunk_6CSUKJP7.xu,{margin:"15px 0 0 0",padding:"12px 16px",background:commonHighlightColor,display:"flex",flexDirection:"column",gridGap:"0px"},__jsx(Text.Z,{size:"l",fontWeight:"700",color:(0,chunk_7NLW6UB6.ff)("gray.800","gray.light")},t("modalInfo.rejected.teacher-feedback")),__jsx(Text.Z,{size:"l",fontWeight:"500",color:commonTextColor,margin:"0"},teacherFeedback)),Array.isArray(attachment)&&attachment.length>0?__jsx(chunk_6CSUKJP7.xu,{mt:"10px"},__jsx(Text.Z,{size:"l",mb:"8px"},t("modalInfo.files-sended-to-teacher")),__jsx(chunk_6CSUKJP7.xu,{display:"flex",flexDirection:"column",gridGap:"8px",maxHeight:"135px",overflowY:"auto"},attachment.map((function(file){var extension=file.name.split(".").pop(),isImage=["jpg","jpeg","png","gif","svg"].includes(extension),icon=iconDict.includes(extension)?extension:"file";return __jsx(chunk_6CSUKJP7.xu,{key:"".concat(file.id,"-").concat(file.name),display:"flex"},__jsx(Icon.Z,{icon:isImage?"image":icon,width:"22px",height:"22px"}),__jsx(chunk_YTV6DHKL.r,{href:file.url,target:"_blank",rel:"noopener noreferrer",color:"blue.500",margin:"0 0 0 10px"},file.name))})))):__jsx(react.Fragment,null,!disableInput&&!disableHandler&&link&&__jsx(chunk_6CSUKJP7.xu,{padding:"18px 0 0 0"},__jsx(formik_esm.J9,{initialValues:{githubUrl:link},onSubmit:function onSubmit(){setIsSubmitting(!0),""!==githubUrl&&(sendProject({task:currentTask,githubUrl,taskStatus:"DONE"}),setIsSubmitting(!1),onClose())},validationSchema:validationSchemas.projectUrlValidation},(function(){return __jsx(formik_esm.l0,null,__jsx(formik_esm.gN,{name:"githubUrl"},(function(_ref2){var field=_ref2.field,form=_ref2.form;return setGithubUrl(form.values.githubUrl),__jsx(chunk_6ZNYZUDD.NI,{isInvalid:form.errors.githubUrl&&form.touched.githubUrl},__jsx(chunk_GYFRIY2Z.I,(0,esm_extends.Z)({},field,{type:"text",color:commonInputColor,_focus:{color:commonInputActiveColor},_hover:{color:commonInputActiveColor},id:"githubUrl",placeholder:"https://github.com/..."})),__jsx(chunk_3GP7MWMA.J1,{marginTop:"10px"},form.errors.githubUrl))})))}))),disableInput&&(linkText||link)&&__jsx(chunk_6CSUKJP7.xu,{padding:"18px 0 0 0"},__jsx(Text.Z,{size:"l",fontWeight:"bold",color:commonTextColor},linkInfo),__jsx(chunk_YTV6DHKL.r,{href:link,color:(0,chunk_7NLW6UB6.ff)("blue.default","blue.300"),target:"_blank",rel:"noopener noreferrer"},linkText||link))),children&&children),__jsx(chunk_YI7XFFAC.m,(0,esm_extends.Z)({justifyContent:"space-evenly"},footerStyle),"taskHandler"===type?__jsx(chunk_6CSUKJP7.xu,{width:"100%",display:"flex",justifyContent:"space-between"},!disableCloseButton&&__jsx(chunk_NAA7TEES.z,{fontSize:"13px",variant:closeButtonVariant,onClick:actionHandler,textTransform:"uppercase"},closeText||t("common:close")),__jsx(chunk_NAA7TEES.z,{fontSize:"13px",isDisabled:Array.isArray(attachment)&&attachment.length>0||isSubmitting||disableHandler,isLoading:isSubmitting,onClick:function onClick(){return function resubmitHandler(){setIsSubmitting(!0),""!==githubUrl?(sendProject({task:currentTask,githubUrl,taskStatus:"DONE"}),setIsSubmitting(!1),onClose()):setIsSubmitting(!1)}()},variant:"default",textTransform:"uppercase"},handlerText)):__jsx(react.Fragment,null,!disableCloseButton&&__jsx(chunk_NAA7TEES.z,(0,esm_extends.Z)({fontSize:"13px",variant:closeButtonVariant,colorScheme:cancelColorButton,mr:3,onClick:function onClick(){return function rejectFunction(){forceHandler&&!forceHandlerAndClose?setConfirmRejection(!0):(closeActionHandler(),onClose())}()},textTransform:"uppercase"},closeButtonStyles),closeText||t("common:close")),!disableHandler&&__jsx(chunk_NAA7TEES.z,(0,esm_extends.Z)({fontSize:"13px",onClick:actionHandler,colorScheme:handlerColorButton,textTransform:"uppercase"},buttonHandlerStyles),handlerText))))),confirmRejection&&__jsx(chunk_UUGUEMMH.u_,{isOpen:confirmRejection,isCentered:!0},__jsx(chunk_OWW5MU75.Z,null),__jsx(chunk_66WFFNY3.h,null,__jsx(chunk_YBA5A33G.x,{borderBottom:1,borderStyle:"solid",borderColor:commonBorderColor},rejectData.title),__jsx(chunk_YI7XFFAC.m,null,__jsx(chunk_NAA7TEES.z,{fontSize:"13px",colorScheme:"red",mr:3,onClick:function onClick(){return setConfirmRejection(!1)},textTransform:"uppercase"},rejectData.closeText),(!disableHandler||forceHandler)&&__jsx(chunk_NAA7TEES.z,{fontSize:"13px",colorScheme:"blue",onClick:function onClick(){rejectHandler(),setConfirmRejection(!1)},textTransform:"uppercase"},rejectData.handlerText)))))}ModalInfo.propTypes={isOpen:prop_types_default().bool,onClose:prop_types_default().func.isRequired,actionHandler:prop_types_default().func,closeActionHandler:prop_types_default().func,rejectHandler:prop_types_default().func,forceHandler:prop_types_default().bool,disableHandler:prop_types_default().bool,disableInput:prop_types_default().bool,title:prop_types_default().string,description:prop_types_default().string,teacherFeedback:prop_types_default().string,linkInfo:prop_types_default().string,linkText:prop_types_default().string,link:prop_types_default().string,handlerText:prop_types_default().string,closeText:prop_types_default().string,handlerColorButton:prop_types_default().string,cancelColorButton:prop_types_default().string,rejectData:prop_types_default().objectOf(prop_types_default().string),sendProject:prop_types_default().func,currentTask:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),type:prop_types_default().string,closeButtonVariant:prop_types_default().string,htmlDescription:prop_types_default().string,attachment:prop_types_default().arrayOf(prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any]))),descriptionStyle:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),footerStyle:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),closeButtonStyles:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),buttonHandlerStyles:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),headerStyles:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),disableCloseButton:prop_types_default().bool,childrenDescription:prop_types_default().node,maxWidth:prop_types_default().string,forceHandlerAndClose:prop_types_default().bool,children:prop_types_default().node},ModalInfo.defaultProps={isOpen:!1,actionHandler:function actionHandler(){},closeActionHandler:function closeActionHandler(){},rejectHandler:function rejectHandler(){},forceHandler:!1,disableHandler:!1,title:"Review status",description:"",teacherFeedback:"",linkInfo:"",disableInput:!1,linkText:"",link:"",handlerText:"Remove delivery",closeText:"",handlerColorButton:"blue",cancelColorButton:"red",rejectData:{},sendProject:function sendProject(){},currentTask:{},type:"default",closeButtonVariant:"danger",htmlDescription:"",attachment:[],descriptionStyle:{},footerStyle:{},closeButtonStyles:{},buttonHandlerStyles:{},headerStyles:{},disableCloseButton:!1,childrenDescription:null,maxWidth:"md",forceHandlerAndClose:!1,children:null},ModalInfo.__docgenInfo={description:"",methods:[],displayName:"ModalInfo",props:{isOpen:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},actionHandler:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},closeActionHandler:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},rejectHandler:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},forceHandler:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},disableHandler:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},title:{defaultValue:{value:"'Review status'",computed:!1},description:"",type:{name:"string"},required:!1},description:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},teacherFeedback:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},linkInfo:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},disableInput:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},linkText:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},link:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},handlerText:{defaultValue:{value:"'Remove delivery'",computed:!1},description:"",type:{name:"string"},required:!1},closeText:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},handlerColorButton:{defaultValue:{value:"'blue'",computed:!1},description:"",type:{name:"string"},required:!1},cancelColorButton:{defaultValue:{value:"'red'",computed:!1},description:"",type:{name:"string"},required:!1},rejectData:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"string"}},required:!1},sendProject:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},currentTask:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},type:{defaultValue:{value:"'default'",computed:!1},description:"",type:{name:"string"},required:!1},closeButtonVariant:{defaultValue:{value:"'danger'",computed:!1},description:"",type:{name:"string"},required:!1},htmlDescription:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},attachment:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}}},required:!1},descriptionStyle:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},footerStyle:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},closeButtonStyles:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},buttonHandlerStyles:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},headerStyles:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},disableCloseButton:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},childrenDescription:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},maxWidth:{defaultValue:{value:"'md'",computed:!1},description:"",type:{name:"string"},required:!1},forceHandlerAndClose:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},onClose:{description:"",type:{name:"func"},required:!0}}};const modalInfo=(0,react.memo)(ModalInfo)},"./src/utils/regex.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Do:()=>email,HQ:()=>url,bW:()=>isGithubUrl,m7:()=>phone});var email=/^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@(?!mailinator|leonvero|ichkoch|naymeo|naymio)[a-zA-Z0-9]*\.[a-zA-Z](-?[a-zA-Z0-9])*.*[a-zA-Z]+$/,phone=/^(?!(\d{2,})\1+)(?!(\d+)\2{3,})(\+\d{1,3})?(\d{8,10})$/,url=/((https?):\/\/)?(www.)?[a-z0-9]+(\.[com|io]{2,}){1,3}(#?\/[a-zA-Z0-9-_#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,isGithubUrl=/((https?):\/\/)?(www.)?github+(\.[com|io]{2,}){1,3}(#?\/[a-zA-Z0-9-_#.]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/}}]);