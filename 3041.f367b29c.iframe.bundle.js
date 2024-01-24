"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3041],{"./src/axios.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__,zy:()=>cancelAllCurrentRequests});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),axios__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/axios/lib/axios.js"),_utils_logging__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/logging.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var axiosInstance=axios__WEBPACK_IMPORTED_MODULE_2__.Z.create(),activeRequests=[];axiosInstance.interceptors.request.use((function(config){var cancelTokenSource=axios__WEBPACK_IMPORTED_MODULE_2__.Z.CancelToken.source();return activeRequests.push(cancelTokenSource),_objectSpread(_objectSpread({},config),{},{cancelToken:cancelTokenSource.token})}));var cancelAllCurrentRequests=function cancelAllCurrentRequests(){var message=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"All request was canceled";try{activeRequests&&activeRequests.length>0&&((0,_utils_logging__WEBPACK_IMPORTED_MODULE_1__.cM)(message),activeRequests.forEach((function(source){source.cancel(message)})),activeRequests.length=0)}catch(error){console.error("All requests canceled:",error.message)}};const __WEBPACK_DEFAULT_EXPORT__=axiosInstance},"./src/common/components/Text.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/tooltip/dist/chunk-HEDGDMHJ.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_excluded=["children","size","maxWidth","letterSpacing","withLimit","label","withTooltip"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,sizes={l:"15px",md:"14px",sm:"12px",xs:"10px"};function Text(_ref){var children=_ref.children,size=_ref.size,maxWidth=_ref.maxWidth,letterSpacing=_ref.letterSpacing,withLimit=_ref.withLimit,label=_ref.label,withTooltip=_ref.withTooltip,rest=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return withLimit?__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.u,{label:withTooltip?label:children,hasArrow:!0,placement:"top-start",openDelay:500},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.x,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({className:"text",letterSpacing,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",fontSize:sizes[size]||size,width:maxWidth||withTooltip?"auto":"13em",border:"0px"},rest),children&&children)):__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.x,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({letterSpacing,maxWidth,fontSize:sizes[size]||size},rest),children&&children)}Text.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,prop_types__WEBPACK_IMPORTED_MODULE_5___default().object]),letterSpacing:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,maxWidth:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node,withLimit:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,withTooltip:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,label:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string},Text.defaultProps={letterSpacing:"0.05em",size:"sm",maxWidth:"",children:null,withLimit:!1,withTooltip:!1,label:""},Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{letterSpacing:{defaultValue:{value:"'0.05em'",computed:!1},description:"",type:{name:"string"},required:!1},size:{defaultValue:{value:"'sm'",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1},maxWidth:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},withLimit:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},withTooltip:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},label:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Text},"./src/common/services/breathecode.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_axios__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/axios.js"),_utils_url__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/url.js"),_modifyEnv__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./modifyEnv.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/index.js"),process=__webpack_require__("./node_modules/process/browser.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var BREATHECODE_HOST=(0,_modifyEnv__WEBPACK_IMPORTED_MODULE_3__.Z)({queryString:"host",env:process.env.BREATHECODE_HOST}),BC_ACADEMY_TOKEN=(0,_modifyEnv__WEBPACK_IMPORTED_MODULE_3__.Z)({queryString:"bc_token",env:process.env.BC_ACADEMY_TOKEN}),host="".concat(BREATHECODE_HOST,"/v1"),hostV2="".concat(BREATHECODE_HOST,"/v2"),rigoHostV1="https://rigobot.herokuapp.com/v1",breathecode={get:function get(url,config){return fetch(url,{headers:_objectSpread(_objectSpread({},_axios__WEBPACK_IMPORTED_MODULE_1__.ZP.defaults.headers.common),null==config?void 0:config.headers)}).then((function(res){return res})).catch((function(err){return console.error(err)}))},put:function put(url,data){return fetch(url,{method:"PUT",headers:_objectSpread({Accept:"application/json","Content-Type":"application/json"},_axios__WEBPACK_IMPORTED_MODULE_1__.ZP.defaults.headers.common),body:JSON.stringify(data)}).then((function(res){return res})).catch((function(err){return console.error(err)}))},post:function post(url,data){return fetch(url,{method:"POST",headers:_objectSpread({Accept:"application/json","Content-Type":"application/json"},_axios__WEBPACK_IMPORTED_MODULE_1__.ZP.defaults.headers.common),body:JSON.stringify(data)}).then((function(res){return res})).catch((function(err){return console.error(err)}))},auth:function auth(){var url="".concat(host,"/auth");return{login:function login(payload){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.post("".concat(url,"/login/"),_objectSpread(_objectSpread({},payload),{},{user_agent:"bc/student"}))},login2:function login2(payload){var lang=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en";return fetch("".concat(url,"/login/"),{method:"POST",headers:{"Content-Type":"application/json","Accept-Language":lang},body:JSON.stringify(_objectSpread(_objectSpread({},payload),{},{user_agent:"bc/student"}))})},verifyRigobotConnection:function verifyRigobotConnection(token){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(rigoHostV1,"/auth/me/token?breathecode_token=").concat(token))},resendConfirmationEmail:function resendConfirmationEmail(inviteId){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.put("".concat(url,"/invite/resend/").concat(inviteId))},me:function me(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/user/me"))},updateProfile:function updateProfile(arg){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.put("".concat(url,"/user/me"),_objectSpread({},arg))},updateSettings:function updateSettings(arg){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.put("".concat(url,"/user/me/settings"),_objectSpread({},arg))},updatePicture:function updatePicture(args){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.put("".concat(url,"/profile/me/picture"),args)},invites:function invites(){return{get:function get(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/user/me/invite?status=PENDING"))},accept:function accept(id){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.put("".concat(url,"/user/me/invite/accepted?id=").concat(id))}}},getRoles:function getRoles(cohortRole){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/role/").concat(cohortRole))},isValidToken:function isValidToken(token){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/token/").concat(token))},register:function register(payload){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.post("".concat(url,"/user/register"),payload)},subscribe:function subscribe(payload){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.post("".concat(url,"/subscribe/"),_objectSpread({},payload))},subscribeToken:function subscribeToken(token){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.post("".concat(url,"/subscribe/").concat(token))},removeGithub:function removeGithub(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.delete("".concat(url,"/github/me"))},temporalToken:function temporalToken(){return(0,_axios__WEBPACK_IMPORTED_MODULE_1__.ZP)({method:"post",url:"".concat(url,"/token/me"),data:{token_type:"one_time"}})},getUser:function getUser(_ref){var userId=_ref.userId;return(0,_axios__WEBPACK_IMPORTED_MODULE_1__.ZP)({method:"get",url:"".concat(url,"/academy/member/").concat(userId),headers:{Authorization:"Token ".concat(BC_ACADEMY_TOKEN),academy:4}})}}},admissions:function admissions(){var query=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},url="".concat(host,"/admissions"),qs=(0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.A_)(query);return{me:function me(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/user/me"))},cohort:function cohort(id,academy){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/academy/cohort/").concat(id).concat(qs),{headers:academy&&{academy}})},cohorts:function cohorts(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/cohort/all").concat(qs))},cohortUsers:function cohortUsers(academy){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/academy/cohort/user").concat(qs),{headers:academy&&{academy}})},syllabus:function syllabus(slug,version,academy){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/syllabus/").concat(slug,"/version/").concat(version).concat(qs),{headers:academy&&{academy}})},publicSyllabus:function publicSyllabus(slug){return breathecode.get("".concat(url,"/syllabus/").concat(slug,"/version/1").concat(qs),{headers:{Authorization:"Token ".concat(BC_ACADEMY_TOKEN),academy:4}})}}},syllabus:function syllabus(){var query=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},url="".concat(host,"/admissions"),qs=(0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.A_)(query);return{get:function get(){var academyVersion=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"4",slug=arguments.length>1?arguments[1]:void 0,version=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"1";if(slug)return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/academy/").concat(academyVersion,"/syllabus/").concat(slug,"/version/").concat(version));throw new Error("Missing slug")},getPublicVersion:function getPublicVersion(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/syllabus/version").concat(qs))}}},todo:function todo(){var query=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},url="".concat(host,"/assignment"),qs=(0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.A_)(query);return{get:function get(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/task/").concat(qs))},getAssignments:function getAssignments(args){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/academy/cohort/").concat(args.id,"/task").concat(qs),{headers:(null==args?void 0:args.academy)&&{academy:null==args?void 0:args.academy}})},deliver:function deliver(args){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/task/").concat(args.id,"/deliver"),{headers:(null==args?void 0:args.academy)&&{academy:null==args?void 0:args.academy}})},getFinalProject:function getFinalProject(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/user/me/final_project").concat(qs))},createFinalProject:function createFinalProject(args){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.post("".concat(url,"/user/me/final_project"),args)},sendScreenshot:function sendScreenshot(args){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.post("".concat(url,"/user/me/final_project/screenshot"),args)},updateFinalProject:function updateFinalProject(args){return breathecode.put("".concat(url,"/user/me/final_project"),args)},uploadFile:function uploadFile(id,args){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.put("".concat(url,"/task/").concat(id,"/attachment").concat(qs),args)},getFile:function getFile(args){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/task/").concat(args.id,"/attachment"),{headers:args.academyId&&{academy:args.academyId}})},subtask:function subtask(){return{get:function get(id){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/user/me/task/").concat(id,"/subtasks"))},update:function update(id,args){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.put("".concat(url,"/user/me/task/").concat(id,"/subtasks"),args)}}},getTaskByStudent:function getTaskByStudent(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/user/me/task").concat(qs))},add:function add(args){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.post("".concat(url,"/user/me/task"),args)},update:function update(args){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.put("".concat(url,"/task/").concat(args.id),args)},updateBulk:function updateBulk(args){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.put("".concat(url,"/user/me/task"),args)},deleteBulk:function deleteBulk(args){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.delete("".concat(url,"/user/me/task").concat(qs),args)}}},cohort:function cohort(){var query=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},url="".concat(host,"/admissions/academy"),qs=(0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.A_)(query);return{get:function get(id){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/cohort/").concat(id))},join:function join(id){return breathecode.post("".concat(host,"/admissions/cohort/").concat(id,"/join"))},takeAttendance:function takeAttendance(id,activities){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.put("".concat(url,"/cohort/").concat(id,"/log").concat(qs),activities)},getAttendance:function getAttendance(id){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/cohort/").concat(id,"/log").concat(qs))},getPublic:function getPublic(id){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/cohort/").concat(id),{headers:{Authorization:"Token ".concat(BC_ACADEMY_TOKEN),academy:4}})},getFilterStudents:function getFilterStudents(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/cohort/user").concat(qs))},getMembers:function getMembers(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/cohort/user").concat(qs))},getStudents:function getStudents(cohortId,academyId){var withDefaultToken=arguments.length>2&&void 0!==arguments[2]&&arguments[2],headers=(0,_utils__WEBPACK_IMPORTED_MODULE_4__.sW)(_objectSpread({academy:academyId,Authorization:withDefaultToken?"Token ".concat(BC_ACADEMY_TOKEN):void 0},_axios__WEBPACK_IMPORTED_MODULE_1__.ZP.defaults.headers.common));return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/cohort/user?roles=STUDENT&cohorts=").concat(cohortId).concat((0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.A_)(query,!0)),{headers})},getStudents2:function getStudents2(cohortSlug){var withDefaultToken=arguments.length>1&&void 0!==arguments[1]&&arguments[1],headers=(0,_utils__WEBPACK_IMPORTED_MODULE_4__.sW)(_objectSpread({Authorization:withDefaultToken?"Token ".concat(BC_ACADEMY_TOKEN):void 0},_axios__WEBPACK_IMPORTED_MODULE_1__.ZP.defaults.headers.common));return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(host,"/admissions/cohort/user?roles=STUDENT&cohorts=").concat(cohortSlug).concat(qs),{headers})},getStudentsWithTasks:function getStudentsWithTasks(cohortId,academyId){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/cohort/user?tasks=True&roles=STUDENT&cohorts=").concat(cohortId).concat(qs.replace("?","&")),{headers:academyId&&{academy:academyId}})},update:function update(id,args){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.put("".concat(url,"/cohort/").concat(id),args)},user:function user(_ref2){var cohortId=_ref2.cohortId,userId=_ref2.userId;return(0,_axios__WEBPACK_IMPORTED_MODULE_1__.ZP)({method:"get",url:"".concat(url,"/cohort/").concat(cohortId,"/user/").concat(userId),headers:{Authorization:"Token ".concat(BC_ACADEMY_TOKEN),academy:4}})}}},activity:function activity(){var query=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},url="".concat(hostV2,"/activity"),qs=(0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.A_)(query);return{getActivity:function getActivity(academyId){return(0,_axios__WEBPACK_IMPORTED_MODULE_1__.ZP)({method:"get",url:"".concat(url,"/academy/activity").concat(qs),headers:{academy:academyId}})},getMeActivity:function getMeActivity(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/me/activity").concat(qs))},getActivityReport:function getActivityReport(academyId){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/report").concat(qs),{headers:academyId&&{academy:academyId}})}}},assignments:function assignments(){var url="".concat(host,"/assignment");return{get:function get(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/user/me/task"))}}},feedback:function feedback(){var url="".concat(host,"/feedback");return{getSurvey:function getSurvey(id){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/user/me/survey/").concat(id,"/questions"))},sendVote:function sendVote(arg){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.put("".concat(url,"/user/me/answer/").concat(arg.entity_id),_objectSpread({},arg))}}},mentorship:function mentorship(){var query=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},connector=arguments.length>1&&void 0!==arguments[1]&&arguments[1],url="".concat(host,"/mentorship/academy"),urlNoAcademy="".concat(host,"/mentorship"),qs=(0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.A_)(query,connector);return{getService:function getService(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/service?status=ACTIVE").concat(qs))},getServiceSet:function getServiceSet(mentorshipServiceSetId){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(host,"/payments/mentorshipserviceset/").concat(mentorshipServiceSetId))},getMentor:function getMentor(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/mentor").concat(qs))},getMySessions:function getMySessions(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(urlNoAcademy,"/user/me/session").concat(qs))}}},marketing:function marketing(){var query=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},url="".concat(host,"/marketing"),qs=(0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.A_)(query);return{lead:function lead(data){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.post("".concat(url,"/lead").concat(qs),data)}}},lesson:function lesson(){var query=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},url="".concat(host,"/registry"),qs=(0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.A_)(query);return{get:function get(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/asset").concat(qs))},getAsset:function getAsset(slug){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/asset/").concat(slug))},techs:function techs(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/academy/technology").concat(qs))}}},certificate:function certificate(){var url="".concat(host,"/certificate");return{get:function get(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/me"))}}},public:function _public(){var query=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},url="".concat(host,"/admissions/public"),qs=(0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.A_)(query);return{mentors:function mentors(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/cohort/user").concat(qs))},events:function events(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(host,"/events/all").concat(qs))},singleEvent:function singleEvent(slug){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(host,"/events/event/").concat(slug).concat(qs))},cohorts:function cohorts(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(host,"/admissions/cohort/all").concat(qs))}}},payment:function payment(){var query=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},url="".concat(host,"/payments"),qs=(0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.A_)(query);return{checking:function checking(data){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.put("".concat(url,"/checking").concat(qs),data)},subscriptions:function subscriptions(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/me/subscription").concat(qs))},courses:function courses(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(host,"/marketing/course").concat(qs))},pay:function pay(data){return breathecode.post("".concat(url,"/pay").concat(qs),data)},addCard:function addCard(data){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.post("".concat(url,"/card").concat(qs),data)},cancelSubscription:function cancelSubscription(id){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.put("".concat(url,"/subscription/").concat(id,"/cancel").concat(qs))},cancelMySubscription:function cancelMySubscription(id){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.put("".concat(url,"/me/subscription/").concat(id,"/cancel").concat(qs))},getPlan:function getPlan(slug){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/plan/").concat(slug).concat(qs))},planOffer:function planOffer(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/planoffer").concat(qs))},getPlanProps:function getPlanProps(id){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/serviceitem?plan=").concat(id))},getCohortPlans:function getCohortPlans(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/plan").concat(qs))},service:function service(){return{consumable:function consumable(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/me/service/consumable").concat(qs))},getAcademyService:function getAcademyService(){return breathecode.get("".concat(url,"/academy/academyservice").concat(qs))},payConsumable:function payConsumable(data){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.post("".concat(url,"/consumable/checkout").concat(qs),data)}}},getEvent:function getEvent(eventId){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(host,"/events/academy/event/").concat(eventId).concat(qs))},events:function events(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(host,"/events/me?online_event=true&").concat(qs))}}},events:function events(){var query=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},url="".concat(host,"/events/me"),qs=(0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.A_)(query);return{liveClass:function liveClass(){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/event/liveclass").concat(qs))},joinLiveClass:function joinLiveClass(liveClassHash){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(url,"/event/liveclass/join/").concat(liveClassHash).concat(qs))},joinLiveClass2:function joinLiveClass2(liveClassHash){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(host,"/me/event/liveclass/join/").concat(liveClassHash).concat(qs))},applyEvent:function applyEvent(eventId){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.post("".concat(url,"/event/").concat(eventId,"/checkin").concat(qs))},getUsers:function getUsers(eventId){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.get("".concat(host,"/events/event/").concat(eventId,"/checkin").concat(qs))}}},rigobot:function rigobot(){var query=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},url="".concat(rigoHostV1),qs=(0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.A_)(query);return{completionJob:function completionJob(data){return _axios__WEBPACK_IMPORTED_MODULE_1__.ZP.post("".concat(url,"/prompting/completion/43").concat(qs),data)}}}};const __WEBPACK_DEFAULT_EXPORT__=breathecode},"./src/utils/logging.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cM:()=>log,vU:()=>error});var _index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/index.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");function log(){var _console;_index__WEBPACK_IMPORTED_MODULE_0__.X6&&(_console=console).log.apply(_console,arguments)}function error(){var _console3;_index__WEBPACK_IMPORTED_MODULE_0__.X6&&(_console3=console).error.apply(_console3,arguments)}},"./src/utils/url.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A_:()=>parseQuerys});var console=__webpack_require__("./node_modules/console-browserify/index.js"),parseQuerys=function parseQuerys(query){var connector=arguments.length>1&&void 0!==arguments[1]&&arguments[1],queryString="";try{Object.keys(query).forEach((function(key){void 0!==query[key]&&(connector&&(queryString+="&".concat(key,"=").concat(query[key])),connector||void 0===query[key]||(queryString+="".concat(queryString?"&":"?").concat(key,"=").concat(query[key])))}))}catch(e){return console.error("🛠️ parseQuerys error:",e)}return queryString}}}]);