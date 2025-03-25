"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[370],{"./src/common/hooks/useCohortHandler.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>hooks_useCohortHandler});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),axios=__webpack_require__("./node_modules/axios/lib/axios.js"),chunk_ENIANY67=__webpack_require__("./node_modules/@chakra-ui/toast/dist/chunk-ENIANY67.mjs"),useTranslation=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),next_router=__webpack_require__("./node_modules/next/router.js"),useAuth=__webpack_require__("./src/common/hooks/useAuth.js"),utils=__webpack_require__("./src/utils/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),types=__webpack_require__("./src/common/store/types/index.js"),usePersistent=__webpack_require__("./src/common/hooks/usePersistent.js");const cohortAction=function useCohortAction(){var dispatch=(0,es.I0)(),_usePersistent=(0,usePersistent.K)("cohortSession",{}),persistCohortSession=(0,slicedToArray.Z)(_usePersistent,2)[1];return{state:(0,es.v9)((function(reducerState){return reducerState.cohortReducer})),setMyCohorts:function setMyCohorts(payload){dispatch({type:types.er,payload:{myCohorts:payload}})},setCohortSession:function setCohortSession(payload){dispatch({type:types.Rw,payload:{cohortSession:payload}}),null!=payload&&persistCohortSession(payload)},setTaskCohortNull:function setTaskCohortNull(payload){dispatch({type:types.Ze,payload:{taskCohortNull:payload}})},setSortedAssignments:function setSortedAssignments(payload){dispatch({type:types.y_,payload:{sortedAssignments:payload}})},setUserCapabilities:function setUserCapabilities(paylaod){dispatch({type:types.iG,payload:{userCapabilities:paylaod}})}}};var useModuleHandler=__webpack_require__("./src/common/hooks/useModuleHandler.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),differenceInDays=__webpack_require__("./node_modules/date-fns/esm/differenceInDays/index.js"),breathecode=__webpack_require__("./src/common/services/breathecode.js"),logging=__webpack_require__("./src/utils/logging.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var processRelatedAssignments=function processRelatedAssignments(){var syllabusData=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},taskTodo=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],id=(null==syllabusData?void 0:syllabusData.id)||"",label=(null==syllabusData?void 0:syllabusData.name)||"",read=(null==syllabusData?void 0:syllabusData.lessons)||[],practice=(null==syllabusData?void 0:syllabusData.replits)||[],project=(null==syllabusData?void 0:syllabusData.assignments)||[],answer=(null==syllabusData?void 0:syllabusData.quizzes)||[];try{var getTaskProps=function getTaskProps(slug){return taskTodo.find((function(task){return(null==task?void 0:task.associated_slug)===slug}))},currentDate=new Date,updatedRead=null==read?void 0:read.map((function(el){var _getTaskProps,_getTaskProps2,_getTaskProps3;return _objectSpread(_objectSpread({},el),{},{id,label,task_status:(null===(_getTaskProps=getTaskProps(el.slug))||void 0===_getTaskProps?void 0:_getTaskProps.task_status)||"",revision_status:(null===(_getTaskProps2=getTaskProps(el.slug))||void 0===_getTaskProps2?void 0:_getTaskProps2.revision_status)||"",created_at:(null===(_getTaskProps3=getTaskProps(el.slug))||void 0===_getTaskProps3?void 0:_getTaskProps3.created_at)||"",position:(null==el?void 0:el.position)||0,type:"Read",icon:"book",task_type:"LESSON"})})).sort((function(a,b){return b.position-a.position})),updatedPractice=null==practice?void 0:practice.map((function(el){var _getTaskProps4,_getTaskProps5,_getTaskProps6;return _objectSpread(_objectSpread({},el),{},{id,label,task_status:(null===(_getTaskProps4=getTaskProps(el.slug))||void 0===_getTaskProps4?void 0:_getTaskProps4.task_status)||"",revision_status:(null===(_getTaskProps5=getTaskProps(el.slug))||void 0===_getTaskProps5?void 0:_getTaskProps5.revision_status)||"",created_at:(null===(_getTaskProps6=getTaskProps(el.slug))||void 0===_getTaskProps6?void 0:_getTaskProps6.created_at)||"",position:(null==el?void 0:el.position)||0,type:"Practice",icon:"strength",task_type:"EXERCISE"})})).sort((function(a,b){return b.position-a.position})),updatedProject=null==project?void 0:project.map((function(el){var _el$slug,_el$slug2,taskProps=getTaskProps((null==el||null===(_el$slug=el.slug)||void 0===_el$slug?void 0:_el$slug.slug)||(null==el?void 0:el.slug));return _objectSpread(_objectSpread({},el),{},{id,label,slug:(null==el||null===(_el$slug2=el.slug)||void 0===_el$slug2?void 0:_el$slug2.slug)||(null==el?void 0:el.slug),task_status:(null==taskProps?void 0:taskProps.task_status)||"",revision_status:(null==taskProps?void 0:taskProps.revision_status)||"",created_at:(null==taskProps?void 0:taskProps.created_at)||"",daysDiff:null!=taskProps&&taskProps.created_at?(0,differenceInDays.Z)(currentDate,new Date(null==taskProps?void 0:taskProps.created_at)):"",position:(null==el?void 0:el.position)||0,mandatory:(null==el?void 0:el.mandatory)||!1,type:"Project",icon:"code",task_type:"PROJECT"})})).sort((function(a,b){return b.position-a.position})),updatedAnswer=null==answer?void 0:answer.map((function(el){var _getTaskProps7,_getTaskProps8,_getTaskProps9;return _objectSpread(_objectSpread({},el),{},{id,label,task_status:(null===(_getTaskProps7=getTaskProps(el.slug))||void 0===_getTaskProps7?void 0:_getTaskProps7.task_status)||"",revision_status:(null===(_getTaskProps8=getTaskProps(el.slug))||void 0===_getTaskProps8?void 0:_getTaskProps8.revision_status)||"",created_at:(null===(_getTaskProps9=getTaskProps(el.slug))||void 0===_getTaskProps9?void 0:_getTaskProps9.created_at)||"",position:(null==el?void 0:el.position)||0,type:"Answer",icon:"answer",task_type:"QUIZ"})})).sort((function(a,b){return b.position-a.position})),content=[].concat((0,toConsumableArray.Z)(updatedRead),(0,toConsumableArray.Z)(updatedPractice),(0,toConsumableArray.Z)(updatedProject),(0,toConsumableArray.Z)(updatedAnswer)),filteredContent=content.filter((function includesDailyTask(module){return taskTodo.some((function(task){return task.associated_slug===module.slug}))})),filteredContentByPending=content.filter((function includesStatusPending(module){return"PENDING"===module.task_status&&"APPROVED"!==module.revision_status}));return{filteredContent,content,filteredContentByPending}}catch(reqErr){return(0,logging.vU)("processRelatedAssignments:",reqErr),{filteredContent:[],content:[],filteredContentByPending:[]}}},variables=__webpack_require__("./src/utils/variables.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),_excluded=["cohort"];function useCohortHandler_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function useCohortHandler_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?useCohortHandler_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):useCohortHandler_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const hooks_useCohortHandler=function useCohortHandler(){var _router$query,_router$query2,router=(0,next_router.useRouter)(),user=(0,useAuth.Z)().user,_useTranslation=(0,useTranslation.Z)("dashboard"),t=_useTranslation.t,lang=_useTranslation.lang,_useCohortAction=cohortAction(),setCohortSession=_useCohortAction.setCohortSession,setTaskCohortNull=_useCohortAction.setTaskCohortNull,setSortedAssignments=_useCohortAction.setSortedAssignments,setUserCapabilities=_useCohortAction.setUserCapabilities,setMyCohorts=_useCohortAction.setMyCohorts,state=_useCohortAction.state,_useModuleHandler=(0,useModuleHandler.Z)(),cohortProgram=_useModuleHandler.cohortProgram,taskTodo=_useModuleHandler.taskTodo,setCohortProgram=_useModuleHandler.setCohortProgram,setTaskTodo=_useModuleHandler.setTaskTodo,cohortSession=state.cohortSession,sortedAssignments=state.sortedAssignments,userCapabilities=state.userCapabilities,toast=(0,chunk_ENIANY67.p)(),accessToken=(0,utils.qn)("accessToken"),assetSlug=null==router||null===(_router$query=router.query)||void 0===_router$query?void 0:_router$query.lessonSlug,assetType=null==router||null===(_router$query2=router.query)||void 0===_router$query2?void 0:_router$query2.lesson,assetTypes={read:"lesson",practice:"exercise",project:"project",answer:"quiz"},redirectToPublicPage=function redirectToPublicPage(data){var _data$translations,_data$translations2,englishSlug={en:null==data||null===(_data$translations=data.translations)||void 0===_data$translations?void 0:_data$translations.us},assetTypeLower=((null==data?void 0:data.asset_type)||assetTypes[assetType]).toLowerCase(),translationSlug=(null==englishSlug?void 0:englishSlug[lang])||(null==data||null===(_data$translations2=data.translations)||void 0===_data$translations2?void 0:_data$translations2[lang])||assetSlug,pathConnector={lesson:"".concat("en"===lang?"".concat(variables.fh,"/lesson/").concat(translationSlug):"".concat(variables.fh,"/").concat(lang,"/lesson/").concat(translationSlug)),exercise:"".concat("en"===lang?"".concat(variables.fh,"/interactive-exercise/").concat(translationSlug):"".concat(variables.fh,"/").concat(lang,"/interactive-exercise/").concat(translationSlug)),project:"".concat("en"===lang?"".concat(variables.fh,"/project/").concat(translationSlug):"".concat(variables.fh,"/").concat(lang,"/project/").concat(translationSlug))};null!=pathConnector&&pathConnector[assetTypeLower]&&(window.location.href=pathConnector[assetTypeLower])},getCohortAssignments=function(){var _ref2=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(_ref){var slug,cohort,_ref$updatedUser,updatedUser,_cohort$academy,_cohort$syllabus_vers,_cohort$syllabus_vers2,academyId,version,syllabusSlug,currentAcademy,_yield$Promise$all,_yield$Promise$all2,taskTodoData,programData,userRoles;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(slug=_ref.slug,cohort=_ref.cohort,_ref$updatedUser=_ref.updatedUser,updatedUser=void 0===_ref$updatedUser?void 0:_ref$updatedUser,!user){_context.next=25;break}if(academyId=null==cohort||null===(_cohort$academy=cohort.academy)||void 0===_cohort$academy?void 0:_cohort$academy.id,version=null==cohort||null===(_cohort$syllabus_vers=cohort.syllabus_version)||void 0===_cohort$syllabus_vers?void 0:_cohort$syllabus_vers.version,syllabusSlug=(null==cohort||null===(_cohort$syllabus_vers2=cohort.syllabus_version)||void 0===_cohort$syllabus_vers2?void 0:_cohort$syllabus_vers2.slug)||slug,!(currentAcademy=user.roles.find((function(role){return role.academy.id===academyId}))||(null==updatedUser?void 0:updatedUser.roles.find((function(role){return role.academy.id===academyId}))))){_context.next=25;break}return _context.prev=7,_context.next=10,Promise.all([breathecode.Z.todo({cohort:cohort.id,limit:1e3}).getTaskByStudent(),breathecode.Z.syllabus().get(academyId,syllabusSlug,version),breathecode.Z.auth().getRoles(null==currentAcademy?void 0:currentAcademy.role)]);case 10:_yield$Promise$all=_context.sent,_yield$Promise$all2=(0,slicedToArray.Z)(_yield$Promise$all,3),taskTodoData=_yield$Promise$all2[0],programData=_yield$Promise$all2[1],userRoles=_yield$Promise$all2[2],setUserCapabilities(userRoles.data.capabilities),setTaskTodo(taskTodoData.data.results),setCohortProgram(programData.data),_context.next=25;break;case 20:_context.prev=20,_context.t0=_context.catch(7),console.log(_context.t0),toast({position:"top",title:t("alert-message:error-fetching-role",{role:null==currentAcademy?void 0:currentAcademy.role}),description:_context.t0.message,status:"error",duration:7e3,isClosable:!0}),router.push("/choose-program");case 25:case"end":return _context.stop()}}),_callee,null,[[7,20]])})));return function getCohortAssignments(_x){return _ref2.apply(this,arguments)}}(),handleRedirectToPublicPage=function(){var _ref3=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee2(){var _response$data,response;return regenerator_default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.prev=0,_context2.next=3,axios.Z.get("".concat(variables.k1,"/v1/registry/asset/").concat(assetSlug));case 3:null!=(response=_context2.sent)&&null!==(_response$data=response.data)&&void 0!==_response$data&&_response$data.asset_type&&redirectToPublicPage(response.data),_context2.next=10;break;case 7:_context2.prev=7,_context2.t0=_context2.catch(0),router.push("/404");case 10:case"end":return _context2.stop()}}),_callee2,null,[[0,7]])})));return function handleRedirectToPublicPage(){return _ref3.apply(this,arguments)}}(),getCohortData=function(){var _ref5=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee3(_ref4){var cohortSlug,_yield$bc$admissions$,data,cohorts,parsedCohorts,currentCohort;return regenerator_default().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(cohortSlug=_ref4.cohortSlug,_context3.prev=1,!cohortSlug||!accessToken){_context3.next=19;break}return _context3.next=5,breathecode.Z.admissions().me();case 5:if(_yield$bc$admissions$=_context3.sent,data=_yield$bc$admissions$.data){_context3.next=9;break}throw new Error("No data");case 9:if(cohorts=data.cohorts,parsedCohorts=cohorts.map((function(elem){var cohort=elem.cohort,cohort_user=(0,objectWithoutProperties.Z)(elem,_excluded),syllabus_version=cohort.syllabus_version;return useCohortHandler_objectSpread(useCohortHandler_objectSpread({},cohort),{},{selectedProgramSlug:"/cohort/".concat(cohort.slug,"/").concat(syllabus_version.slug,"/v").concat(syllabus_version.version),cohort_role:elem.role,cohort_user})})),currentCohort=parsedCohorts.find((function(c){return c.slug===cohortSlug}))){_context3.next=16;break}if(!assetSlug){_context3.next=15;break}return _context3.abrupt("return",handleRedirectToPublicPage());case 15:return _context3.abrupt("return",router.push("/choose-program"));case 16:return setCohortSession(currentCohort),setMyCohorts(parsedCohorts),_context3.abrupt("return",currentCohort);case 19:return _context3.abrupt("return",handleRedirectToPublicPage());case 22:return _context3.prev=22,_context3.t0=_context3.catch(1),handleRedirectToPublicPage(),toast({position:"top",title:t("alert-message:invalid-cohort-slug"),status:"error",duration:7e3,isClosable:!0}),_context3.abrupt("return",localStorage.removeItem("cohortSession"));case 27:case"end":return _context3.stop()}}),_callee3,null,[[1,22]])})));return function getCohortData(_x2){return _ref5.apply(this,arguments)}}();return{setCohortSession,setSortedAssignments,getCohortAssignments,getCohortData,prepareTasks:function prepareTasks(){var _cohortProgram$json,_cohortProgram$json2,moduleData=(null==cohortProgram||null===(_cohortProgram$json=cohortProgram.json)||void 0===_cohortProgram$json?void 0:_cohortProgram$json.days)||(null==cohortProgram||null===(_cohortProgram$json2=cohortProgram.json)||void 0===_cohortProgram$json2?void 0:_cohortProgram$json2.modules)||[],assignmentsRecopilated=[];if((0,utils.Cv)("json.days:",moduleData),null!=cohortProgram&&cohortProgram.json&&taskTodo){moduleData.forEach((function(assignment){var id=assignment.id,label=assignment.label,description=assignment.description,lessons=assignment.lessons,replits=assignment.replits,assignments=assignment.assignments,quizzes=assignment.quizzes;if(lessons&&replits&&assignments&&quizzes){var nestedAssignments=processRelatedAssignments(assignment,taskTodo),modules=nestedAssignments.content,filteredModules=nestedAssignments.filteredContent,filteredModulesByPending=nestedAssignments.filteredContentByPending,assignmentsStruct={id,label,description,modules,exists_activities:(null==modules?void 0:modules.length)>0,filteredModules,filteredModulesByPending:(null==modules?void 0:modules.length)>0?filteredModulesByPending:null,duration_in_days:(null==assignment?void 0:assignment.duration_in_days)||null,teacherInstructions:assignment.teacher_instructions,extendedInstructions:assignment.extended_instructions||"".concat(t("teacher-sidebar.no-instructions")),keyConcepts:assignment["key-concepts"]},keyIndex=assignmentsRecopilated.findIndex((function(x){return x.id===id}));keyIndex>-1?assignmentsRecopilated.splice(keyIndex,1,useCohortHandler_objectSpread({},assignmentsStruct)):assignmentsRecopilated.push(useCohortHandler_objectSpread({},assignmentsStruct))}}));var filterNotEmptyModules=assignmentsRecopilated.filter((function(l){return l.modules.length>0}));setSortedAssignments(filterNotEmptyModules)}},getDailyModuleData:function getDailyModuleData(){return sortedAssignments.find((function(assignment){return assignment.id===(null==cohortSession?void 0:cohortSession.current_module)}))},getLastDoneTaskModuleData:function getLastDoneTaskModuleData(){var lastDoneTaskModule=null;return sortedAssignments.forEach((function(module){module.modules.some((function(task){return"DONE"===task.task_status}))&&(lastDoneTaskModule=module)})),lastDoneTaskModule},getMandatoryProjects:function getMandatoryProjects(){return sortedAssignments.flatMap((function(assignment){return assignment.filteredModules.filter((function(l){return"PROJECT"===l.task_type&&"PENDING"===l.task_status&&!0===l.mandatory&&l.daysDiff>=14}))}))},getTasksWithoutCohort:function getTasksWithoutCohort(_ref6){var setModalIsOpen=_ref6.setModalIsOpen;return router.asPath===cohortSession.selectedProgramSlug&&breathecode.Z.todo({cohort:null}).getTaskByStudent().then((function(_ref7){var data=_ref7.data,filteredUnsyncedCohortTasks=sortedAssignments.flatMap((function(assignment){return data.filter((function(task){return assignment.modules.some((function(module){return task.associated_slug===module.slug}))}))}));setModalIsOpen(0!==filteredUnsyncedCohortTasks.length),setTaskCohortNull(filteredUnsyncedCohortTasks)})),function(){}},userCapabilities,state,setMyCohorts}}},"./src/common/hooks/useModuleHandler.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>hooks_useModuleHandler});var toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),chunk_ENIANY67=__webpack_require__("./node_modules/@chakra-ui/toast/dist/chunk-ENIANY67.mjs"),useTranslation=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js");const moduleMapAction=function useModuleMap(){var dispatch=(0,es.I0)();return{setTaskTodo:function setTaskTodo(newState){dispatch({type:"CHANGE_TASK_TO_DO",payload:newState})},setCohortProgram:function setCohortProgram(newState){dispatch({type:"CHANGE_COHORT_PROGRAM",payload:newState})},setCurrentTask:function setCurrentTask(newState){dispatch({type:"CHANGE_CURRENT_TASK",payload:newState})},setSubTasks:function setSubTasks(newState){dispatch({type:"CHANGE_SUB_TASKS",payload:newState})},setNextModule:function setNextModule(payload){dispatch({type:"CHANGE_NEXT_MODULE",payload})},setPrevModule:function setPrevModule(payload){dispatch({type:"CHANGE_PREV_MODULE",payload})},state:(0,es.v9)((function(reducerState){return reducerState.moduleMapReducer}))}};var breathecode=__webpack_require__("./src/common/services/breathecode.js"),requests=__webpack_require__("./src/utils/requests.js"),utils=__webpack_require__("./src/utils/index.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),_excluded=["cohort"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const hooks_useModuleHandler=function useModuleHandler(){var t=(0,useTranslation.Z)("alert-message").t,toast=(0,chunk_ENIANY67.p)(),_useModuleMap=moduleMapAction(),setTaskTodo=_useModuleMap.setTaskTodo,setCohortProgram=_useModuleMap.setCohortProgram,state=_useModuleMap.state,setCurrentTask=_useModuleMap.setCurrentTask,setSubTasks=_useModuleMap.setSubTasks,setNextModule=_useModuleMap.setNextModule,setPrevModule=_useModuleMap.setPrevModule,taskTodo=state.taskTodo,updateAssignment=function(){var _ref2=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(_ref){var task,closeSettings,githubUrl,taskStatus,taskData,toggleStatus,taskToUpdate,keyIndex,projectUrl,isDelivering,_taskToUpdate,_keyIndex;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(task=_ref.task,closeSettings=_ref.closeSettings,githubUrl=_ref.githubUrl,taskStatus=_ref.taskStatus,task.cohort,taskData=(0,objectWithoutProperties.Z)(task,_excluded),toggleStatus=void 0===task.task_status||"PENDING"===task.task_status?"DONE":"PENDING",!task.task_type||"PROJECT"===task.task_type){_context.next=21;break}return taskToUpdate=_objectSpread(_objectSpread({},taskData),{},{id:taskData.id,task_status:toggleStatus}),_context.prev=5,_context.next=8,breathecode.Z.todo().update(taskToUpdate);case 8:keyIndex=taskTodo.findIndex((function(x){return x.id===task.id})),setTaskTodo([].concat((0,toConsumableArray.Z)(taskTodo.slice(0,keyIndex)),[taskToUpdate],(0,toConsumableArray.Z)(taskTodo.slice(keyIndex+1)))),toast({position:"top",title:t("alert-message:assignment-updated"),status:"success",duration:6e3,isClosable:!0}),closeSettings(),_context.next=19;break;case 14:_context.prev=14,_context.t0=_context.catch(5),console.log(_context.t0),toast({position:"top",title:t("alert-message:assignment-update-error"),status:"error",duration:5e3,isClosable:!0}),closeSettings();case 19:_context.next=37;break;case 21:return projectUrl=function getProjectUrl(){return githubUrl||""}(),isDelivering=""!==projectUrl,_taskToUpdate=_objectSpread(_objectSpread({},taskData),{},{task_status:taskStatus||toggleStatus,github_url:projectUrl,revision_status:"PENDING",delivered_at:new Date}),_context.prev=25,_context.next=28,breathecode.Z.todo({}).update(_taskToUpdate);case 28:_context.sent.data.github_url===projectUrl&&(_keyIndex=taskTodo.findIndex((function(x){return x.id===task.id})),setTaskTodo([].concat((0,toConsumableArray.Z)(taskTodo.slice(0,_keyIndex)),[_taskToUpdate],(0,toConsumableArray.Z)(taskTodo.slice(_keyIndex+1)))),(0,requests._1)({dataLayer:{event:"assignment_status_updated",task_status:taskStatus,task_id:task.id,task_title:task.title,task_associated_slug:task.associated_slug,task_type:task.task_type,task_revision_status:task.revision_status,agent:(0,utils.S7)()}}),toast({position:"top",title:t(isDelivering?"alert-message:delivery-success":"alert-message:delivery-removed"),status:"success",duration:6e3,isClosable:!0}),closeSettings()),_context.next=37;break;case 32:_context.prev=32,_context.t1=_context.catch(25),console.log(_context.t1),toast({position:"top",title:t("alert-message:delivery-error"),status:"error",duration:5e3,isClosable:!0}),closeSettings();case 37:case"end":return _context.stop()}}),_callee,null,[[5,14],[25,32]])})));return function updateAssignment(_x){return _ref2.apply(this,arguments)}}();return _objectSpread({updateAssignment,startDay:function(){var _ref4=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee2(_ref3){var newTasks,label,_ref3$customHandler,customHandler,response;return regenerator_default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return newTasks=_ref3.newTasks,label=_ref3.label,_ref3$customHandler=_ref3.customHandler,customHandler=void 0===_ref3$customHandler?function(){}:_ref3$customHandler,_context2.prev=1,_context2.next=4,breathecode.Z.todo({}).add(newTasks);case 4:(response=_context2.sent).status<400&&(toast({position:"top",title:label?t("alert-message:module-started",{title:label}):t("alert-message:module-sync-success"),status:"success",duration:6e3,isClosable:!0}),setTaskTodo([].concat((0,toConsumableArray.Z)(taskTodo),(0,toConsumableArray.Z)(response.data))),customHandler()),_context2.next=12;break;case 8:_context2.prev=8,_context2.t0=_context2.catch(1),console.log("error_ADD_TASK 🔴 ",_context2.t0),toast({position:"top",title:t("alert-message:module-start-error"),status:"error",duration:6e3,isClosable:!0});case 12:case"end":return _context2.stop()}}),_callee2,null,[[1,8]])})));return function startDay(_x2){return _ref4.apply(this,arguments)}}(),setTaskTodo,setCohortProgram,setCurrentTask,setSubTasks,setNextModule,setPrevModule},state)}}}]);