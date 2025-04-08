"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9595],{"./src/common/hooks/useCohortHandler.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>hooks_useCohortHandler});var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),axios=__webpack_require__("./node_modules/axios/lib/axios.js"),useTranslation=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),next_router=__webpack_require__("./node_modules/next/router.js"),useAuth=__webpack_require__("./src/common/hooks/useAuth.js"),utils=__webpack_require__("./src/utils/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),types=__webpack_require__("./src/common/store/types/index.js");const cohortAction=function useCohortAction(){var dispatch=(0,es.wA)();return{state:(0,es.d4)((function(reducerState){return reducerState.cohortReducer})),setCohortSession:function setCohortSession(payload){dispatch({type:types.k,payload:{cohortSession:payload}})},setTaskCohortNull:function setTaskCohortNull(payload){dispatch({type:types.BY,payload:{taskCohortNull:payload}})},setUserCapabilities:function setUserCapabilities(paylaod){dispatch({type:types.S9,payload:{userCapabilities:paylaod}})},setCohortsAssingments:function setCohortsAssingments(paylaod){dispatch({type:types.Xu,payload:{cohortsAssignments:paylaod}})},setReviewModalState:function setReviewModalState(payload){dispatch({type:types.gP,payload:{reviewModalState:payload}})}}};var differenceInDays=__webpack_require__("./node_modules/date-fns/esm/differenceInDays/index.js"),breathecode=__webpack_require__("./src/common/services/breathecode.js"),logging=__webpack_require__("./src/utils/logging.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var processRelatedAssignments=function processRelatedAssignments(){var syllabusData=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},taskTodo=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],id=(null==syllabusData?void 0:syllabusData.id)||"",label=(null==syllabusData?void 0:syllabusData.name)||"",read=(null==syllabusData?void 0:syllabusData.lessons)||[],practice=(null==syllabusData?void 0:syllabusData.replits)||[],project=(null==syllabusData?void 0:syllabusData.assignments)||[],answer=(null==syllabusData?void 0:syllabusData.quizzes)||[];try{var getTask=function getTask(slug){return taskTodo.find((function(task){return(null==task?void 0:task.associated_slug)===slug}))},currentDate=new Date,parsedLessons=null==read?void 0:read.map((function(el){var task=getTask(el.slug);return _objectSpread(_objectSpread({},el),{},{id,label,task_status:(null==task?void 0:task.task_status)||"",revision_status:(null==task?void 0:task.revision_status)||"",created_at:(null==task?void 0:task.created_at)||"",position:(null==el?void 0:el.position)||0,type:"Read",icon:"book",task_type:"LESSON"})})).sort((function(a,b){return b.position-a.position})),parsedExercises=null==practice?void 0:practice.map((function(el){var task=getTask(el.slug);return _objectSpread(_objectSpread({},el),{},{id,label,task_status:(null==task?void 0:task.task_status)||"",revision_status:(null==task?void 0:task.revision_status)||"",created_at:(null==task?void 0:task.created_at)||"",position:(null==el?void 0:el.position)||0,type:"Practice",icon:"strength",task_type:"EXERCISE"})})).sort((function(a,b){return b.position-a.position})),parsedProjects=null==project?void 0:project.map((function(el){var _el$slug,_el$slug2,task=getTask((null==el||null===(_el$slug=el.slug)||void 0===_el$slug?void 0:_el$slug.slug)||(null==el?void 0:el.slug));return _objectSpread(_objectSpread({},el),{},{id,label,slug:(null==el||null===(_el$slug2=el.slug)||void 0===_el$slug2?void 0:_el$slug2.slug)||(null==el?void 0:el.slug),task_status:(null==task?void 0:task.task_status)||"",revision_status:(null==task?void 0:task.revision_status)||"",created_at:(null==task?void 0:task.created_at)||"",daysDiff:null!=task&&task.created_at?(0,differenceInDays.A)(currentDate,new Date(task.created_at)):"",position:(null==el?void 0:el.position)||0,mandatory:(null==el?void 0:el.mandatory)||!1,read_at:null==task?void 0:task.read_at,reviewed_at:null==task?void 0:task.reviewed_at,type:"Project",icon:"code",task_type:"PROJECT"})})).sort((function(a,b){return b.position-a.position})),parsedQuizzes=null==answer?void 0:answer.map((function(el){var task=getTask(null==el?void 0:el.slug);return _objectSpread(_objectSpread({},el),{},{id,label,task_status:(null==task?void 0:task.task_status)||"",revision_status:(null==task?void 0:task.revision_status)||"",created_at:(null==task?void 0:task.created_at)||"",position:(null==el?void 0:el.position)||0,type:"Answer",icon:"answer",task_type:"QUIZ"})})).sort((function(a,b){return b.position-a.position})),content=[].concat((0,toConsumableArray.A)(parsedLessons),(0,toConsumableArray.A)(parsedExercises),(0,toConsumableArray.A)(parsedProjects),(0,toConsumableArray.A)(parsedQuizzes)),filteredContent=content.filter((function includesDailyTask(module){return taskTodo.some((function(task){return task.associated_slug===module.slug}))})),filteredContentByPending=content.filter((function includesStatusPending(module){return"PENDING"===module.task_status&&"APPROVED"!==module.revision_status}));return{filteredContent,content,filteredContentByPending}}catch(reqErr){return(0,logging.z3)("processRelatedAssignments:",reqErr),{filteredContent:[],content:[],filteredContentByPending:[]}}},requests=__webpack_require__("./src/utils/requests.js"),variables=__webpack_require__("./src/utils/variables.js"),useCustomToast=__webpack_require__("./src/common/hooks/useCustomToast.jsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),_excluded=["cohort"];function useCohortHandler_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function useCohortHandler_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?useCohortHandler_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):useCohortHandler_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const hooks_useCohortHandler=function useCohortHandler(){var _router$query,_router$query2,router=(0,next_router.useRouter)(),_useAuth=(0,useAuth.A)(),user=_useAuth.user,myCohorts=_useAuth.cohorts,fetchUserAndCohorts=_useAuth.fetchUserAndCohorts,setCohorts=_useAuth.setCohorts,_useTranslation=(0,useTranslation.A)("dashboard"),t=_useTranslation.t,lang=_useTranslation.lang,_useCohortAction=cohortAction(),setCohortSession=_useCohortAction.setCohortSession,setTaskCohortNull=_useCohortAction.setTaskCohortNull,setUserCapabilities=_useCohortAction.setUserCapabilities,setCohortsAssingments=_useCohortAction.setCohortsAssingments,setReviewModalState=_useCohortAction.setReviewModalState,state=_useCohortAction.state,cohortSession=state.cohortSession,userCapabilities=state.userCapabilities,cohortsAssignments=state.cohortsAssignments,createToast=(0,useCustomToast.A)({toastId:"fetching-role-cohort-error"}).createToast,accessToken=(0,utils.$E)("accessToken"),assetSlug=null==router||null===(_router$query=router.query)||void 0===_router$query?void 0:_router$query.lessonSlug,assetType=null==router||null===(_router$query2=router.query)||void 0===_router$query2?void 0:_router$query2.lesson,assetTypes={read:"lesson",practice:"exercise",project:"project",answer:"quiz"},redirectToPublicPage=function redirectToPublicPage(data){var _data$translations,_data$translations2,englishSlug={en:null==data||null===(_data$translations=data.translations)||void 0===_data$translations?void 0:_data$translations.us},assetTypeLower=((null==data?void 0:data.asset_type)||assetTypes[assetType]).toLowerCase(),translationSlug=(null==englishSlug?void 0:englishSlug[lang])||(null==data||null===(_data$translations2=data.translations)||void 0===_data$translations2?void 0:_data$translations2[lang])||assetSlug,pathConnector={lesson:"".concat("en"===lang?"".concat(variables.ff,"/lesson/").concat(translationSlug):"".concat(variables.ff,"/").concat(lang,"/lesson/").concat(translationSlug)),exercise:"".concat("en"===lang?"".concat(variables.ff,"/interactive-exercise/").concat(translationSlug):"".concat(variables.ff,"/").concat(lang,"/interactive-exercise/").concat(translationSlug)),project:"".concat("en"===lang?"".concat(variables.ff,"/project/").concat(translationSlug):"".concat(variables.ff,"/").concat(lang,"/project/").concat(translationSlug))};null!=pathConnector&&pathConnector[assetTypeLower]&&(window.location.href=pathConnector[assetTypeLower])},serializeModulesMap=function serializeModulesMap(moduleData,tasks){var assignmentsRecopilated=[];return moduleData.forEach((function(module){var id=module.id,label=module.label,description=module.description,lessons=module.lessons,replits=module.replits,assignments=module.assignments,quizzes=module.quizzes;if(lessons&&replits&&assignments&&quizzes){var nestedAssignments=processRelatedAssignments(module,tasks),content=nestedAssignments.content,filteredContent=nestedAssignments.filteredContent,filteredContentByPending=nestedAssignments.filteredContentByPending,assignmentsStruct={id,label,description,content,exists_activities:(null==content?void 0:content.length)>0,filteredContent,filteredContentByPending:(null==content?void 0:content.length)>0?filteredContentByPending:null,duration_in_days:(null==module?void 0:module.duration_in_days)||null,teacherInstructions:module.teacher_instructions,extendedInstructions:module.extended_instructions||"".concat(t("teacher-sidebar.no-instructions")),keyConcepts:module["key-concepts"]};if(content.length>0){var keyIndex=assignmentsRecopilated.findIndex((function(x){return x.id===id}));keyIndex>-1?assignmentsRecopilated.splice(keyIndex,1,useCohortHandler_objectSpread({},assignmentsStruct)):assignmentsRecopilated.push(useCohortHandler_objectSpread({},assignmentsStruct))}}})),assignmentsRecopilated},getCohortsModules=function(){var _ref=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee(cohorts){var assignmentsMap,preFechedCohorts,cohortsToFetch,syllabusPromises,tasksPromises,allResults;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,assignmentsMap={},preFechedCohorts=cohorts.reduce((function(acum,curr){return curr.slug in cohortsAssignments?[].concat((0,toConsumableArray.A)(acum),[curr]):acum}),[]),cohortsToFetch=cohorts.filter((function(cohort){return!preFechedCohorts.some((function(_ref2){return _ref2.slug===cohort.slug}))})),syllabusPromises=cohortsToFetch.map((function(cohort){return breathecode.A.syllabus().get(cohort.academy.id,cohort.syllabus_version.slug,cohort.syllabus_version.version).then((function(res){return useCohortHandler_objectSpread({cohort:cohort.id},res)}))})),tasksPromises=cohortsToFetch.map((function(cohort){return breathecode.A.todo({cohort:cohort.id,limit:1e3}).getTaskByStudent().then((function(res){return useCohortHandler_objectSpread({cohort:cohort.id},res)}))})),_context.next=8,Promise.all([].concat((0,toConsumableArray.A)(syllabusPromises),(0,toConsumableArray.A)(tasksPromises)));case 8:return allResults=_context.sent,preFechedCohorts.forEach((function(_ref3){var slug=_ref3.slug;assignmentsMap[slug]=useCohortHandler_objectSpread({},cohortsAssignments[slug])})),cohortsToFetch.forEach((function(cohort){var cohortResults=allResults.filter((function(elem){return elem.cohort===cohort.id})),syllabus=null,tasks=[];cohortResults.forEach((function(elem){var data=elem.data;"json"in data?syllabus=data:tasks=data.results}));var cohortModules=serializeModulesMap(syllabus.json.days,tasks);assignmentsMap[cohort.slug]={modules:cohortModules,syllabus,tasks}})),setCohortsAssingments(useCohortHandler_objectSpread(useCohortHandler_objectSpread({},cohortsAssignments),assignmentsMap)),_context.abrupt("return",assignmentsMap);case 15:return _context.prev=15,_context.t0=_context.catch(0),console.log(_context.t0),createToast({position:"top",title:t("alert-message:error-fetching-syllabus"),status:"error",duration:7e3,isClosable:!0}),_context.abrupt("return",{});case 20:case"end":return _context.stop()}}),_callee,null,[[0,15]])})));return function getCohortsModules(_x){return _ref.apply(this,arguments)}}(),getCohortUserCapabilities=function(){var _ref5=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee2(_ref4){var cohort,_ref4$updatedUser,updatedUser,_cohort$academy,academyId,currentAcademy,userRoles;return regenerator_default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(cohort=_ref4.cohort,_ref4$updatedUser=_ref4.updatedUser,updatedUser=void 0===_ref4$updatedUser?void 0:_ref4$updatedUser,!user){_context2.next=17;break}if(academyId=null==cohort||null===(_cohort$academy=cohort.academy)||void 0===_cohort$academy?void 0:_cohort$academy.id,!(currentAcademy=user.roles.find((function(role){return role.academy.id===academyId}))||(null==updatedUser?void 0:updatedUser.roles.find((function(role){return role.academy.id===academyId}))))){_context2.next=17;break}return _context2.prev=5,_context2.next=8,breathecode.A.auth().getRoles(null==currentAcademy?void 0:currentAcademy.role);case 8:userRoles=_context2.sent,setUserCapabilities(userRoles.data.capabilities),_context2.next=17;break;case 12:_context2.prev=12,_context2.t0=_context2.catch(5),console.log(_context2.t0),createToast({position:"top",title:t("alert-message:error-fetching-role",{role:null==currentAcademy?void 0:currentAcademy.role}),description:_context2.t0.message,status:"error",duration:7e3,isClosable:!0}),router.push("/choose-program");case 17:case"end":return _context2.stop()}}),_callee2,null,[[5,12]])})));return function getCohortUserCapabilities(_x2){return _ref5.apply(this,arguments)}}(),handleRedirectToPublicPage=function(){var _ref6=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee3(){var _response$data,response;return regenerator_default().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.prev=0,_context3.next=3,axios.A.get("".concat(variables.UA,"/v1/registry/asset/").concat(assetSlug));case 3:null!=(response=_context3.sent)&&null!==(_response$data=response.data)&&void 0!==_response$data&&_response$data.asset_type&&redirectToPublicPage(response.data),_context3.next=10;break;case 7:_context3.prev=7,_context3.t0=_context3.catch(0),router.push("/404");case 10:case"end":return _context3.stop()}}),_callee3,null,[[0,7]])})));return function handleRedirectToPublicPage(){return _ref6.apply(this,arguments)}}(),getCohortData=function(){var _ref8=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee4(_ref7){var cohortSlug,prefetchedCohorts,currentCohort,_yield$fetchUserAndCo,fetchedCohorts,cohorts;return regenerator_default().wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:if(cohortSlug=_ref7.cohortSlug,_context4.prev=1,!cohortSlug||!accessToken){_context4.next=22;break}if(!(!(currentCohort=(prefetchedCohorts=myCohorts).find((function(c){return c.slug===cohortSlug})))||currentCohort.micro_cohorts.length>0&&!currentCohort.micro_cohorts.every((function(cohort){return myCohorts.some((function(_ref9){var slug=_ref9.slug;return cohort.slug===slug}))})))){_context4.next=13;break}return _context4.next=8,fetchUserAndCohorts();case 8:_yield$fetchUserAndCo=_context4.sent,fetchedCohorts=_yield$fetchUserAndCo.cohorts,setCohorts(fetchedCohorts),prefetchedCohorts=fetchedCohorts,currentCohort=fetchedCohorts.find((function(c){return c.slug===cohortSlug}));case 13:if(currentCohort){_context4.next=17;break}if(!assetSlug){_context4.next=16;break}return _context4.abrupt("return",handleRedirectToPublicPage());case 16:return _context4.abrupt("return",router.push("/choose-program"));case 17:return cohorts=currentCohort.micro_cohorts.length>0?prefetchedCohorts.filter((function(c){return currentCohort.micro_cohorts.some((function(elem){return elem.slug===c.slug}))})):[currentCohort],_context4.next=20,getCohortsModules(cohorts);case 20:return setCohortSession(currentCohort),_context4.abrupt("return",currentCohort);case 22:return _context4.abrupt("return",handleRedirectToPublicPage());case 25:return _context4.prev=25,_context4.t0=_context4.catch(1),handleRedirectToPublicPage(),createToast({position:"top",title:t("alert-message:invalid-cohort-slug"),status:"error",duration:7e3,isClosable:!0}),_context4.abrupt("return",localStorage.removeItem("cohortSession"));case 30:case"end":return _context4.stop()}}),_callee4,null,[[1,25]])})));return function getCohortData(_x3){return _ref8.apply(this,arguments)}}(),taskTodo=(0,react.useMemo)((function(){return cohortSession&&cohortSession.slug in cohortsAssignments?cohortsAssignments[cohortSession.slug].tasks:[]}),[cohortsAssignments,cohortSession]),cohortProgram=(0,react.useMemo)((function(){return cohortSession&&cohortSession.slug in cohortsAssignments?cohortsAssignments[cohortSession.slug].syllabus:null}),[cohortsAssignments,cohortSession]),sortedAssignments=(0,react.useMemo)((function(){return(null==cohortSession?void 0:cohortSession.slug)in cohortsAssignments?cohortsAssignments[cohortSession.slug].modules:[]}),[cohortsAssignments,cohortSession]),updateTask=function updateTask(task,cohort){var id=cohort.id,name=cohort.name,slug=cohort.slug,cohortData=cohortsAssignments[slug],keyIndex=cohortData.tasks.findIndex((function(x){return x.id===task.id})),newTasks=[].concat((0,toConsumableArray.A)(cohortData.tasks.slice(0,keyIndex)),[useCohortHandler_objectSpread(useCohortHandler_objectSpread({},task),{},{cohort:{id,name,slug}})],(0,toConsumableArray.A)(cohortData.tasks.slice(keyIndex+1)));setCohortsAssingments(useCohortHandler_objectSpread(useCohortHandler_objectSpread({},cohortsAssignments),{},(0,defineProperty.A)({},slug,useCohortHandler_objectSpread(useCohortHandler_objectSpread({},cohortData),{},{tasks:newTasks,modules:serializeModulesMap(cohortData.syllabus.json.days,newTasks)}))))},updateTaskReadAt=function(){var _ref10=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee5(task){var response;return regenerator_default().wrap((function _callee5$(_context5){for(;;)switch(_context5.prev=_context5.next){case 0:return _context5.prev=0,_context5.next=3,breathecode.A.todo().update({id:task.id,read_at:(new Date).toISOString()});case 3:if(!((response=_context5.sent).status<400)){_context5.next=7;break}return updateTask(response.data,task.cohort),_context5.abrupt("return",!0);case 7:return _context5.abrupt("return",!1);case 10:return _context5.prev=10,_context5.t0=_context5.catch(0),console.error("Error updating read_at:",_context5.t0),_context5.abrupt("return",!1);case 14:case"end":return _context5.stop()}}),_callee5,null,[[0,10]])})));return function updateTaskReadAt(_x4){return _ref10.apply(this,arguments)}}(),addTasks=function addTasks(tasks,cohort){var id=cohort.id,slug=cohort.slug,name=cohort.name,cohortData=cohortsAssignments[cohort.slug],newTasks=[].concat((0,toConsumableArray.A)(cohortData.tasks),(0,toConsumableArray.A)(tasks.map((function(task){return useCohortHandler_objectSpread(useCohortHandler_objectSpread({},task),{},{cohort:{id,slug,name}})}))));setCohortsAssingments(useCohortHandler_objectSpread(useCohortHandler_objectSpread({},cohortsAssignments),{},(0,defineProperty.A)({},cohort.slug,useCohortHandler_objectSpread(useCohortHandler_objectSpread({},cohortData),{},{tasks:newTasks,modules:serializeModulesMap(cohortData.syllabus.json.days,newTasks)}))))},updateAssignment=function(){var _ref12=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee6(_ref11){var task,githubUrl,taskStatus,cohort,taskData,toggleStatus,isProject,projectUrl,isDelivering,taskToUpdate,toastMessage;return regenerator_default().wrap((function _callee6$(_context6){for(;;)switch(_context6.prev=_context6.next){case 0:return task=_ref11.task,githubUrl=_ref11.githubUrl,taskStatus=_ref11.taskStatus,cohort=task.cohort,taskData=(0,objectWithoutProperties.A)(task,_excluded),toggleStatus=void 0===task.task_status||"PENDING"===task.task_status?"DONE":"PENDING",isProject=task.task_type&&"PROJECT"===task.task_type,_context6.prev=4,isDelivering=""!==(projectUrl=githubUrl||""),toastMessage=function toastMessage(){return t(isProject?isDelivering?"alert-message:delivery-success":"alert-message:delivery-removed":"alert-message:assignment-updated")},taskToUpdate=useCohortHandler_objectSpread(useCohortHandler_objectSpread({},taskData),{},isProject?{task_status:taskStatus||toggleStatus,github_url:projectUrl,revision_status:"PENDING",delivered_at:(new Date).toISOString()}:{id:task.id,task_status:toggleStatus}),_context6.next=11,breathecode.A.todo().update(taskToUpdate);case 11:_context6.sent.status<400?(updateTask(taskToUpdate,cohort),(0,requests.A$)({dataLayer:{event:"assignment_status_updated",task_status:taskStatus,task_id:task.id,task_title:task.title,task_associated_slug:task.associated_slug,task_type:task.task_type,task_revision_status:task.revision_status,agent:(0,utils.VK)()}}),createToast({position:"top",title:toastMessage(),status:"success",duration:6e3,isClosable:!0})):createToast({position:"top",title:t(isProject?"alert-message:delivery-error":"alert-message:assignment-update-error"),status:"error",duration:5e3,isClosable:!0}),_context6.next=19;break;case 15:_context6.prev=15,_context6.t0=_context6.catch(4),console.log(_context6.t0),createToast({position:"top",title:t(isProject?"alert-message:delivery-error":"alert-message:assignment-update-error"),status:"error",duration:5e3,isClosable:!0});case 19:case"end":return _context6.stop()}}),_callee6,null,[[4,15]])})));return function updateAssignment(_x5){return _ref12.apply(this,arguments)}}(),changeStatusAssignment=function(){var _ref13=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee7(task,taskStatus){return regenerator_default().wrap((function _callee7$(_context7){for(;;)switch(_context7.prev=_context7.next){case 0:if(!(null!=task&&task.slug||null!=task&&task.associated_slug)){_context7.next=4;break}return(0,requests.A$)({dataLayer:{event:"assignment_status_updated",task_status:taskStatus,task_id:task.id,task_title:task.title,task_associated_slug:task.associated_slug,task_type:task.task_type,task_revision_status:task.revision_status,agent:(0,utils.VK)()}}),_context7.next=4,updateAssignment({task,taskStatus});case 4:case"end":return _context7.stop()}}),_callee7)})));return function changeStatusAssignment(_x6,_x7){return _ref13.apply(this,arguments)}}(),startDay=function(){var _ref15=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee8(_ref14){var newTasks,cohort,label,_ref14$customHandler,customHandler,_ref14$updateContext,updateContext,response;return regenerator_default().wrap((function _callee8$(_context8){for(;;)switch(_context8.prev=_context8.next){case 0:return newTasks=_ref14.newTasks,cohort=_ref14.cohort,label=_ref14.label,_ref14$customHandler=_ref14.customHandler,customHandler=void 0===_ref14$customHandler?function(){}:_ref14$customHandler,_ref14$updateContext=_ref14.updateContext,updateContext=void 0===_ref14$updateContext||_ref14$updateContext,_context8.prev=1,_context8.next=4,breathecode.A.todo().add(newTasks);case 4:(response=_context8.sent).status<400&&(createToast({position:"top",title:label?t("alert-message:module-started",{title:label}):t("alert-message:module-sync-success"),status:"success",duration:6e3,isClosable:!0}),updateContext&&addTasks(response.data,cohort),customHandler(response.data)),_context8.next=12;break;case 8:_context8.prev=8,_context8.t0=_context8.catch(1),console.log("error_ADD_TASK 🔴 ",_context8.t0),createToast({position:"top",title:t("alert-message:module-start-error"),status:"error",duration:6e3,isClosable:!0});case 12:case"end":return _context8.stop()}}),_callee8,null,[[1,8]])})));return function startDay(_x8){return _ref15.apply(this,arguments)}}();return useCohortHandler_objectSpread({setCohortSession,getCohortUserCapabilities,getCohortData,getDailyModuleData:function getDailyModuleData(){return sortedAssignments.find((function(assignment){return assignment.id===(null==cohortSession?void 0:cohortSession.current_module)}))},getLastDoneTaskModuleData:function getLastDoneTaskModuleData(){var lastDoneTaskModule=null;return sortedAssignments.forEach((function(module){module.content.some((function(task){return"DONE"===task.task_status}))&&(lastDoneTaskModule=module)})),lastDoneTaskModule},getMandatoryProjects:function getMandatoryProjects(){var _cohortsAssignments$c,cohortSlug=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,assignments=cohortSlug?null===(_cohortsAssignments$c=cohortsAssignments[cohortSlug])||void 0===_cohortsAssignments$c?void 0:_cohortsAssignments$c.modules:sortedAssignments;return assignments?assignments.flatMap((function(module){return module.filteredContent.filter((function(l){var timeOutExceeded=l.daysDiff>=14,isPendingRevision=null!==l.reviewed_at&&(l.reviewed_at>l.read_at||null===l.read_at);return"PROJECT"===l.task_type&&("PENDING"===l.task_status||"REJECTED"===l.revision_status)&&(!0===l.mandatory&&timeOutExceeded||isPendingRevision)}))})):[]},getTasksWithoutCohort:function getTasksWithoutCohort(_ref16){var setModalIsOpen=_ref16.setModalIsOpen;return router.asPath===(null==cohortSession?void 0:cohortSession.selectedProgramSlug)&&breathecode.A.todo({cohort:null}).getTaskByStudent().then((function(_ref17){var data=_ref17.data,filteredUnsyncedCohortTasks=sortedAssignments.flatMap((function(module){return data.filter((function(task){return module.content.some((function(assignment){return task.associated_slug===assignment.slug}))}))}));setModalIsOpen(0!==filteredUnsyncedCohortTasks.length),setTaskCohortNull(filteredUnsyncedCohortTasks)})),function(){}},userCapabilities,state,setCohortsAssingments,serializeModulesMap,taskTodo,cohortProgram,addTasks,updateTask,updateTaskReadAt,updateAssignment,startDay,getCohortsModules,sortedAssignments,handleOpenReviewModal:function handleOpenReviewModal(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_options$currentTask=options.currentTask,currentTask=void 0===_options$currentTask?null:_options$currentTask,_options$externalFile=options.externalFiles,externalFiles=void 0===_options$externalFile?null:_options$externalFile,_options$defaultStage=options.defaultStage,defaultStage=void 0===_options$defaultStage?void 0:_options$defaultStage,_options$cohortSlug=options.cohortSlug,cohortSlug=void 0===_options$cohortSlug?void 0:_options$cohortSlug,_options$fixedStage=options.fixedStage;setReviewModalState({isOpen:!0,currentTask,externalFiles,defaultStage,cohortSlug,fixedStage:void 0!==_options$fixedStage&&_options$fixedStage})},handleCloseReviewModal:function handleCloseReviewModal(){setReviewModalState({isOpen:!1,currentTask:null,externalFiles:null,defaultStage:void 0,cohortSlug:void 0,fixedStage:!1})},changeStatusAssignment},state)}}}]);