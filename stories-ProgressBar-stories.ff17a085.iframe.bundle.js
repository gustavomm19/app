"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4480],{"./node_modules/@chakra-ui/form-control/dist/chunk-3GP7MWMA.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J1:()=>FormErrorMessage});var _chunk_6ZNYZUDD_mjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/form-control/dist/chunk-6ZNYZUDD.mjs"),_chakra_ui_icon__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@chakra-ui/icon/dist/chunk-DKFDJSXF.mjs"),_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/react-context/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),[FormErrorStylesProvider,useFormErrorStyles]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),FormErrorMessage=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)(((props,ref)=>{const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.jC)("FormError",props),ownProps=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.Lr)(props),field=(0,_chunk_6ZNYZUDD_mjs__WEBPACK_IMPORTED_MODULE_5__.NJ)();return(null==field?void 0:field.isInvalid)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FormErrorStylesProvider,{value:styles,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__.m.div,{...null==field?void 0:field.getErrorMessageProps(ownProps,ref),className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_7__.cx)("chakra-form__error-message",props.className),__css:{display:"flex",alignItems:"center",...styles.text}})}):null}));FormErrorMessage.displayName="FormErrorMessage",(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)(((props,ref)=>{const styles=useFormErrorStyles(),field=(0,_chunk_6ZNYZUDD_mjs__WEBPACK_IMPORTED_MODULE_5__.NJ)();if(!(null==field?void 0:field.isInvalid))return null;const _className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_7__.cx)("chakra-form__error-icon",props.className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icon__WEBPACK_IMPORTED_MODULE_8__.J,{ref,"aria-hidden":!0,...props,__css:styles.icon,className:_className,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})})).displayName="FormErrorIcon"},"./node_modules/@chakra-ui/hooks/dist/chunk-VHPIVGMD.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function canUseDOM(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}__webpack_require__.d(__webpack_exports__,{Y:()=>useInterval});var isBrowser=canUseDOM();var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),useSafeLayoutEffect=isBrowser?react.useLayoutEffect:react.useEffect;function useInterval(callback,delay){const fn=function useCallbackRef(fn,deps=[]){const ref=(0,react.useRef)(fn);return useSafeLayoutEffect((()=>{ref.current=fn})),(0,react.useCallback)(((...args)=>{var _a;return null==(_a=ref.current)?void 0:_a.call(ref,...args)}),deps)}(callback);(0,react.useEffect)((()=>{let intervalId=null;const tick=()=>fn();return null!==delay&&(intervalId=window.setInterval(tick,delay)),()=>{intervalId&&window.clearInterval(intervalId)}}),[delay,fn])}},"./node_modules/@chakra-ui/layout/dist/chunk-B2MGPQRJ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Heading});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Heading=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Heading2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Heading",props),{className,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.m.h2,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-heading",props.className),...rest,__css:styles})}));Heading.displayName="Heading"},"./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Flex});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Flex=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Flex2(props,ref){const{direction,align,justify,wrap,basis,grow,shrink,...rest}=props,styles={display:"flex",flexDirection:direction,alignItems:align,justifyContent:justify,flexWrap:wrap,flexBasis:basis,flexGrow:grow,flexShrink:shrink};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.m.div,{ref,__css:styles,...rest})}));Flex.displayName="Flex"},"./node_modules/@chakra-ui/layout/dist/chunk-YTV6DHKL.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Link=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Link2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Link",props),{className,isExternal,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.m.a,{target:isExternal?"_blank":void 0,rel:isExternal?"noopener":void 0,ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-link",className),...rest,__css:styles})}));Link.displayName="Link"},"./node_modules/@chakra-ui/modal/dist/chunk-YBA5A33G.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>ModalHeader});var _chunk_UUGUEMMH_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-UUGUEMMH.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),ModalHeader=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)(((props,ref)=>{const{className,...rest}=props,{headerId,setHeaderMounted}=(0,_chunk_UUGUEMMH_mjs__WEBPACK_IMPORTED_MODULE_3__.vR)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(setHeaderMounted(!0),()=>setHeaderMounted(!1))),[setHeaderMounted]);const _className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-modal__header",className),headerStyles={flex:0,...(0,_chunk_UUGUEMMH_mjs__WEBPACK_IMPORTED_MODULE_3__.I_)().header};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.m.header,{ref,className:_className,id:headerId,...rest,__css:headerStyles})}));ModalHeader.displayName="ModalHeader"},"./node_modules/@chakra-ui/modal/dist/chunk-YI7XFFAC.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>ModalFooter});var _chunk_UUGUEMMH_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-UUGUEMMH.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),ModalFooter=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)(((props,ref)=>{const{className,...rest}=props,_className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_2__.cx)("chakra-modal__footer",className),footerStyles={display:"flex",alignItems:"center",justifyContent:"flex-end",...(0,_chunk_UUGUEMMH_mjs__WEBPACK_IMPORTED_MODULE_3__.I_)().footer};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.m.footer,{ref,...rest,__css:footerStyles,className:_className})}));ModalFooter.displayName="ModalFooter"},"./src/stories/ProgressBar.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>ProgressBar_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_MPFPK3CX=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs"),chunk_B2MGPQRJ=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-B2MGPQRJ.mjs"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),intervalToDuration=__webpack_require__("./node_modules/date-fns/esm/intervalToDuration/index.js"),formatDuration=__webpack_require__("./node_modules/date-fns/esm/formatDuration/index.js"),es=__webpack_require__("./node_modules/date-fns/esm/locale/es/index.js"),useTranslation=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),utils=__webpack_require__("./src/utils/index.js"),breathecode=__webpack_require__("./src/common/services/breathecode.js"),availableLanguages={es:es.Z},taskIcons={EXERCISE:"strength",LESSON:"book",PROJECT:"code",QUIZ:"answer"},getCompletedTasksFromModule=function getCompletedTasksFromModule(module,taskTodo){return(null==module?void 0:module.length)>0?module.filter((function(assignment){return taskTodo.some((function(task){return"DONE"===(null==task?void 0:task.task_status)&&(null==task?void 0:task.associated_slug)===(null==assignment?void 0:assignment.slug)}))})):[]},handlers={getSyllabus:function getSyllabus(academyId,slug,version){return new Promise((function(resolve,reject){breathecode.Z.syllabus().get(academyId,slug,version).then((function(_ref){var data=_ref.data;resolve(data)})).catch((function(error){reject(error)}))}))},getActivities:function getActivities(cohortSlug){var academyId=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return new Promise((function(resolve,reject){breathecode.Z.cohort({academy:academyId}).getAttendance(cohortSlug).then((function(_ref2){var data=_ref2.data;resolve(data)})).catch((function(error){reject(error)}))}))},getStudents:function getStudents(slug,academyId){var params=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(resolve,reject){breathecode.Z.cohort(params).getStudents(slug,academyId).then((function(_ref3){var sortedStudents=_ref3.data.sort((function(a,b){return a.user.first_name.localeCompare(b.user.first_name)}));resolve(sortedStudents)})).catch((function(err){reject(err)}))}))},getStudentsWithTasks:function getStudentsWithTasks(slug,academyId){return new Promise((function(resolve,reject){breathecode.Z.cohort().getStudentsWithTasks(slug,academyId).then((function(_ref4){var data=_ref4.data;resolve(data)})).catch((function(err){reject(err)}))}))},getAttendanceList:function getAttendanceList(_ref5){var cohortSlug=_ref5.cohortSlug;return new Promise((function(resolve,reject){breathecode.Z.cohort().getAttendance(cohortSlug).then((function(_ref6){var data=_ref6.data;resolve(data)})).catch((function(error){reject(error)}))}))},getAttendance:function getAttendance(_ref7){var attendanceList=_ref7.attendanceList,students=_ref7.students,day=_ref7.day;return new Promise((function(resolve){var currentDayExists="object"==typeof attendanceList[day],attendanceLog=currentDayExists?students.filter((function(student){return attendanceList[day].attendance_ids.find((function(userId){return userId===student.user.id}))})):[],unattendanceLog=currentDayExists?students.filter((function(student){return attendanceList[day].unattendance_ids.find((function(userId){return userId===student.user.id}))})):[];resolve({updated_at:currentDayExists?attendanceList[day].updated_at:null,attendanceStudents:attendanceLog,unattendanceStudents:unattendanceLog,current_module:currentDayExists?attendanceList[day].current_module:null,teacher_comments:currentDayExists?attendanceList[day].teacher_comments:null,day})}))},saveCohortAttendancy:function saveCohortAttendancy(_ref8){var cohortSlug=_ref8.cohortSlug,students=_ref8.students,checked=_ref8.checked,currentModule=_ref8.currentModule;return new Promise((function(resolve,reject){var attendanceIds=students.reduce((function(accumulator,_ref9){var user=_ref9.user;return checked.some((function(id){return parseInt(id,10)===user.id}))?accumulator.attended.push(user.id):accumulator.unattended.push(user.id),accumulator}),{attended:[],unattended:[]}),dataStruct={current_module:currentModule,teacher_comments:"",attendance_ids:attendanceIds.attended,unattendance_ids:attendanceIds.unattended};breathecode.Z.cohort().takeAttendance(cohortSlug,dataStruct).then((function(_ref10){var data=_ref10.data;resolve(data)})).catch((function(){reject()}))}))},formatTimeString:function formatTimeString(start){var _useTranslation=(0,useTranslation.Z)("live-event"),t=_useTranslation.t,lang=_useTranslation.lang,validDate=(0,utils.qb)(start),status=new Date(start)<new Date?"expired":"active";if(validDate){var duration=(0,intervalToDuration.Z)({end:new Date,start:new Date(start)}),formated=(0,formatDuration.Z)(duration,{format:["months","weeks","days","hours","minutes"],delimiter:", ",locale:availableLanguages[lang]||lang});return""===formated?t("few-seconds"):{status,formated,duration}}return null},checkIfExpired:function checkIfExpired(_ref11){var date=_ref11.date,_ref11$year=_ref11.year,year=void 0===_ref11$year?"numeric":_ref11$year,_ref11$month=_ref11.month,month=void 0===_ref11$month?"long":_ref11$month,_ref11$day=_ref11.day,day=void 0===_ref11$day?"numeric":_ref11$day,hour=_ref11.hour,minute=_ref11.minute,lang=(0,useTranslation.Z)("live-event").lang,now=new Date,expirationDate=new Date(date);return{value:now>expirationDate,date:expirationDate.toLocaleDateString({es:"es-ES",en:"en-US"}[lang],{year,month,day,hour,minute})}},getCohortsFinished:function getCohortsFinished(cohorts){return cohorts.filter((function(program){var _program$educational_,_program$cohort,_program$cohort2,educationalStatus=null==program||null===(_program$educational_=program.educational_status)||void 0===_program$educational_?void 0:_program$educational_.toUpperCase(),programCohortStage=null==program||null===(_program$cohort=program.cohort)||void 0===_program$cohort||null===(_program$cohort=_program$cohort.stage)||void 0===_program$cohort?void 0:_program$cohort.toUpperCase(),hasEnded=["ENDED"].includes(programCohortStage),isGraduated="GRADUATED"===educationalStatus,showStudent=["GRADUATED","POSTPONED","ACTIVE"].includes(educationalStatus),isNotHiddenOnPrework="PREWORK"===programCohortStage&&!1===(null==program||null===(_program$cohort2=program.cohort)||void 0===_program$cohort2?void 0:_program$cohort2.is_hidden_on_prework)&&hasEnded;return(isGraduated||hasEnded||isNotHiddenOnPrework)&&showStudent}))},getActiveCohorts:function getActiveCohorts(cohorts){return cohorts.filter((function(program){var _program$educational_2,_program$role,_program$cohort3,_program$cohort4,educationalStatus=null==program||null===(_program$educational_2=program.educational_status)||void 0===_program$educational_2?void 0:_program$educational_2.toUpperCase(),programRole=null==program||null===(_program$role=program.role)||void 0===_program$role?void 0:_program$role.toUpperCase(),programCohortStage=null==program||null===(_program$cohort3=program.cohort)||void 0===_program$cohort3||null===(_program$cohort3=_program$cohort3.stage)||void 0===_program$cohort3?void 0:_program$cohort3.toUpperCase(),isGraduated="GRADUATED"===educationalStatus,visibleForTeacher="STUDENT"!==programRole,hasEnded=["ENDED"].includes(programCohortStage),cohortIsAvailable=["STARTED","ACTIVE","FINAL_PROJECT"].includes(programCohortStage)&&!hasEnded,isNotHiddenOnPrework="PREWORK"===programCohortStage&&!1===(null==program||null===(_program$cohort4=program.cohort)||void 0===_program$cohort4?void 0:_program$cohort4.is_hidden_on_prework)&&!hasEnded,showStudent=["ACTIVE"].includes(educationalStatus)&&"STUDENT"===programRole;return!isGraduated&&(cohortIsAvailable||isNotHiddenOnPrework)&&(visibleForTeacher||showStudent)}))},handleTasks:function handleTasks(_ref12){var _cohortInfo$allTasks,_taskCount$find,_taskCount$find2,_taskCount$find3,_taskCount$find4,_ref12$tasks=_ref12.tasks,tasks=void 0===_ref12$tasks?[]:_ref12$tasks,cohortInfo=_ref12.cohortInfo,_ref12$onlyExistent=_ref12.onlyExistent,onlyExistent=void 0!==_ref12$onlyExistent&&_ref12$onlyExistent,allLessons=tasks.filter((function(l){return"LESSON"===l.task_type})),allExercises=tasks.filter((function(e){return"EXERCISE"===e.task_type})),allProjects=tasks.filter((function(p){return"PROJECT"===p.task_type})),allQuiz=tasks.filter((function(q){return"QUIZ"===q.task_type})),taskCount=(null==cohortInfo||null===(_cohortInfo$allTasks=cohortInfo.allTasks)||void 0===_cohortInfo$allTasks?void 0:_cohortInfo$allTasks.length)>0?cohortInfo.allTasks:tasks,allTasks=[{title:"Lesson",icon:"book",task_type:"LESSON",taskLength:null===(_taskCount$find=taskCount.find((function(t){return"LESSON"===(null==t?void 0:t.task_type)})))||void 0===_taskCount$find?void 0:_taskCount$find.taskLength,completed:allLessons.filter((function(l){return"DONE"===l.task_status})).length},{title:"Exercise",icon:"strength",task_type:"EXERCISE",taskLength:null===(_taskCount$find2=taskCount.find((function(t){return"EXERCISE"===(null==t?void 0:t.task_type)})))||void 0===_taskCount$find2?void 0:_taskCount$find2.taskLength,completed:allExercises.filter((function(e){return"DONE"===e.task_status})).length},{title:"Project",icon:"code",task_type:"PROJECT",taskLength:null===(_taskCount$find3=taskCount.find((function(t){return"PROJECT"===(null==t?void 0:t.task_type)})))||void 0===_taskCount$find3?void 0:_taskCount$find3.taskLength,completed:allProjects.filter((function(p){return"DONE"===p.task_status})).length},{title:"Quiz",icon:"answer",task_type:"QUIZ",taskLength:null===(_taskCount$find4=taskCount.find((function(t){return"QUIZ"===(null==t?void 0:t.task_type)})))||void 0===_taskCount$find4?void 0:_taskCount$find4.taskLength,completed:allQuiz.filter((function(q){return"DONE"===q.task_status})).length}],allExistentTasks=onlyExistent?allTasks.filter((function(t){return t.taskLength>0})):allTasks,percentage=function calculateTaskPercentage(){for(var sumTaskCompleted=0,sumTaskLength=0,i=0;i<allExistentTasks.length;i+=1)sumTaskCompleted+=allExistentTasks[i].completed,sumTaskLength+=allExistentTasks[i].taskLength;return Math.trunc(sumTaskCompleted/sumTaskLength*100)}()||0;return{allTasks:allExistentTasks,percentage:percentage>100?100:percentage}},getAssignmentsCount:function getAssignmentsCount(_ref13){var data=_ref13.data,taskTodo=_ref13.taskTodo,cohortId=_ref13.cohortId;return new Promise((function(resolve){var _data$json,_data$json2,modules=(null==data||null===(_data$json=data.json)||void 0===_data$json?void 0:_data$json.days)||(null==data||null===(_data$json2=data.json)||void 0===_data$json2?void 0:_data$json2.modules)||data,assignmentsRecopilated=[],assetsCompleted={exercise:[],lesson:[],project:[],quiz:[]};Array.isArray(modules)&&(null==modules||modules.forEach((function(module){var _assetsCompleted$exer,_assetsCompleted$less,_assetsCompleted$proj,_assetsCompleted$quiz,_module$assignments=module.assignments,assignments=void 0===_module$assignments?[]:_module$assignments,_module$lessons=module.lessons,lessons=void 0===_module$lessons?[]:_module$lessons,_module$replits=module.replits,replits=void 0===_module$replits?[]:_module$replits,_module$quizzes=module.quizzes,quizzes=void 0===_module$quizzes?[]:_module$quizzes,assignmentsRecopilatedObj={exercisesCount:replits.length,lessonsCount:lessons.length,projectCount:assignments.length,quizzesCount:quizzes.length},replitsCompletedFromTask=getCompletedTasksFromModule(replits,taskTodo),quizzesCompletedFromTask=getCompletedTasksFromModule(quizzes,taskTodo),lessonsCompletedFromTask=getCompletedTasksFromModule(lessons,taskTodo),assignmentsCompletedFromTask=getCompletedTasksFromModule(assignments,taskTodo);(_assetsCompleted$exer=assetsCompleted.exercise).push.apply(_assetsCompleted$exer,(0,toConsumableArray.Z)(replitsCompletedFromTask)),(_assetsCompleted$less=assetsCompleted.lesson).push.apply(_assetsCompleted$less,(0,toConsumableArray.Z)(lessonsCompletedFromTask)),(_assetsCompleted$proj=assetsCompleted.project).push.apply(_assetsCompleted$proj,(0,toConsumableArray.Z)(assignmentsCompletedFromTask)),(_assetsCompleted$quiz=assetsCompleted.quiz).push.apply(_assetsCompleted$quiz,(0,toConsumableArray.Z)(quizzesCompletedFromTask)),assignmentsRecopilated.push(assignmentsRecopilatedObj)})));var assignmentsRecopilatedObj={exercise:0,lesson:0,project:0,quiz:0};assignmentsRecopilated.forEach((function(assignment){assignmentsRecopilatedObj.exercise+=assignment.exercisesCount,assignmentsRecopilatedObj.lesson+=assignment.lessonsCount,assignmentsRecopilatedObj.project+=assignment.projectCount,assignmentsRecopilatedObj.quiz+=assignment.quizzesCount}));var arrayOfObjects=Object.keys(assignmentsRecopilatedObj).map((function(key){var taskLength=assignmentsRecopilatedObj[key],taskCompleted=assetsCompleted[key],taskType=key.toUpperCase(),completed=null==taskCompleted?void 0:taskCompleted.length;return{icon:taskIcons[taskType],taskLength,completed,task_type:taskType,title:(0,utils.fp)(taskType)}})),totalCompletedTasks=arrayOfObjects.reduce((function(acc,task){return acc+task.completed}),0),totalTasks=arrayOfObjects.reduce((function(acc,task){return acc+task.taskLength}),0),completedTasksPercentage=Math.trunc(totalCompletedTasks/totalTasks*100)||0;resolve({allTasks:arrayOfObjects,cohortId,percentage:completedTasksPercentage>100?100:completedTasksPercentage})}))},getAssetData:function getAssetData(slug){return new Promise((function(resolve,reject){breathecode.Z.lesson().getAsset(slug).then((function(_ref14){var data=_ref14.data;resolve(data)})).catch((function(error){reject(error)}))}))}};const common_handlers=handlers;var useStyle=__webpack_require__("./src/common/hooks/useStyle.js"),Icon=__webpack_require__("./src/common/components/Icon/index.jsx"),Counter=__webpack_require__("./src/common/components/ProgressCircle/Counter.jsx"),Text=__webpack_require__("./src/common/components/Text.jsx"),Progress=__webpack_require__("./src/common/components/ProgressBar/Progress.jsx"),usePersistent=__webpack_require__("./src/common/hooks/usePersistent.js"),useCohortHandler=__webpack_require__("./src/common/hooks/useCohortHandler.js"),__jsx=react.createElement;function ProgressBar(_ref){var progressText=_ref.progressText,cohortProgram=_ref.cohortProgram,taskTodo=_ref.taskTodo,width=_ref.width,fontColor=(0,useStyle.Z)().fontColor,cohortSession=(0,useCohortHandler.Z)().state.cohortSession,_usePersistent=(0,usePersistent.K)("programsList",{}),programsList=(0,slicedToArray.Z)(_usePersistent,1)[0],_useState=(0,react.useState)({}),taskCount=_useState[0],setTaskCount=_useState[1],currentCohortInfo=programsList[cohortSession.slug||{}],_handlers$handleTasks=common_handlers.handleTasks({tasks:taskTodo,cohortInfo:currentCohortInfo}),allTasks=_handlers$handleTasks.allTasks,percentage=_handlers$handleTasks.percentage,percentageLimited=percentage>100?100:percentage,taskPercentageLimited=(null==taskCount?void 0:taskCount.percentage)>100?100:null==taskCount?void 0:taskCount.percentage;(0,react.useEffect)((function(){void 0===(null==allTasks?void 0:allTasks.cohortId)&&taskTodo&&cohortProgram&&common_handlers.getAssignmentsCount({data:cohortProgram,taskTodo,cohortId:null==cohortSession?void 0:cohortSession.id}).then((function(assignmentData){null!=cohortSession&&cohortSession.slug&&setTaskCount(assignmentData)}))}),[taskTodo,cohortProgram]);var tasksList=null!=allTasks&&allTasks.cohortId?allTasks:taskCount.allTasks;return __jsx(chunk_6CSUKJP7.xu,{width:width||"100%"},__jsx(chunk_MPFPK3CX.k,{marginBottom:"15px",gridGap:"10px",align:"center"},__jsx(chunk_B2MGPQRJ.X,{fontSize:"22px",marginY:"0"},__jsx(Counter.Z,{valueTo:percentageLimited||taskPercentageLimited,totalDuration:2}),"%"),__jsx(Text.Z,{size:"l",marginY:"0"},progressText)),__jsx(Progress.Z,{percents:percentageLimited}),__jsx(chunk_MPFPK3CX.k,{justifyContent:"space-around",marginTop:"18px",flexWrap:"wrap",gridGap:"6px"},(null==tasksList?void 0:tasksList.length)>0&&tasksList.map((function(program){return __jsx(chunk_6CSUKJP7.xu,{key:program.title,display:"flex"},__jsx(Icon.Z,{icon:program.icon||"book",width:"18px",height:"18px",color:fontColor,style:{marginTop:"2px"}}),__jsx(Text.Z,{marginLeft:"11px",size:"l",marginY:"0"},"".concat(program.title,": ").concat(program.completed,"/").concat(program.taskLength)))}))))}ProgressBar.displayName="ProgressBar",ProgressBar.propTypes={width:prop_types_default().string,progressText:prop_types_default().string,taskTodo:prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().any])),cohortProgram:prop_types_default().oneOfType([prop_types_default().any])},ProgressBar.defaultProps={width:"100%",progressText:"progress in the program",taskTodo:[],cohortProgram:{}},ProgressBar.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{width:{defaultValue:{value:"'100%'",computed:!1},description:"",type:{name:"string"},required:!1},progressText:{defaultValue:{value:"'progress in the program'",computed:!1},description:"",type:{name:"string"},required:!1},taskTodo:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"any"}]}},required:!1},cohortProgram:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"union",value:[{name:"any"}]},required:!1}}};const components_ProgressBar=ProgressBar;var _Default$parameters,_Default$parameters2,ProgressBar_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const ProgressBar_stories={title:"Components/ProgressBar",component:components_ProgressBar,argTypes:{width:{control:{type:"range",min:0,max:100}}}};var Component=function Component(args){return ProgressBar_stories_jsx(components_ProgressBar,(0,esm_extends.Z)({},args,{width:"".concat(args.width,"%")}))};Component.displayName="Component";var Default=Component.bind({});Default.args={taskTodo:[{associated_slug:"what-is-javascript-learn-to-code-in-javascript",description:"",github_url:null,id:60153,live_url:null,revision_status:"PENDING",task_status:"PENDING",task_type:"LESSON",title:"Learning to code with JS"},{associated_slug:"bootstrap",description:"",github_url:null,id:25144,live_url:null,revision_status:"PENDING",task_status:"PENDING",task_type:"QUIZ",title:"Bootstrap"},{associated_slug:"css-exercises",description:"",github_url:null,id:25145,live_url:null,revision_status:"PENDING",task_status:"PENDING",task_type:"EXERCISE",title:"Learn CSS Interactively"},{associated_slug:"bootstrap-exercises",description:"",github_url:null,id:25147,live_url:null,revision_status:"PENDING",task_status:"PENDING",task_type:"EXERCISE",title:"Learn Bootstrap Tutorial"},{associated_slug:"html",description:"",github_url:null,id:47095,live_url:null,revision_status:"PENDING",task_status:"DONE",task_type:"EXERCISE",title:"Learn HTML"},{associated_slug:"conditional-profile-card",description:"",github_url:"",id:57622,live_url:null,revision_status:"PENDING",task_status:"PENDING",task_type:"PROJECT",title:"Conditional Profile Card Generator"}],progressText:"progress in the program",width:50},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <ProgressBar {...args} width={`${args.width}%`} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/common/components/ProgressBar/Progress.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ProgressBar_Progress});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),chunk_7NLW6UB6=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-7NLW6UB6.mjs"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_3LE6AY5Q=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),valid_prop=__webpack_require__("./node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs");const components_MotionBox=(0,chunk_3LE6AY5Q.m)(motion.E.div,{shouldForwardProp:valid_prop.Z});var __jsx=react.createElement;function Progress(_ref){var percents=_ref.percents,duration=_ref.duration,delay=_ref.delay,easing=_ref.easing,barHeight=_ref.barHeight,progressColor=_ref.progressColor,baseColor=_ref.baseColor,borderRadius=_ref.borderRadius,widthSize=_ref.widthSize,_useState=(0,react.useState)(0),barWidth=_useState[0],setBarWidth=_useState[1],_useState2=(0,react.useState)(!1),initialized=_useState2[0],setInitialized=_useState2[1],progressClass="undefined"!=typeof document&&document.querySelector(".progress-bar");(0,react.useEffect)((function(){progressClass&&(setBarWidth(progressClass.scrollWidth),setTimeout((function(){setInitialized(!0)}),600))}),[progressClass]);var barWidthDefault=widthSize||barWidth,variants={enter:{opacity:0,x:-barWidthDefault},animate:{opacity:1,x:barWidthDefault/100*(percents-100),transition:{duration,delay,ease:easing}}},progressColorDefault=(0,chunk_7NLW6UB6.ff)("blue.default","blue.200"),baseColorDefault=(0,chunk_7NLW6UB6.ff)("gray.100","whiteAlpha.300");return __jsx(chunk_6CSUKJP7.xu,{className:"progress-bar",width:"100%",overflow:"hidden",position:"relative",borderRadius,height:barHeight,bg:baseColor||baseColorDefault},__jsx(components_MotionBox,{variants,initial:"enter",position:"absolute",top:0,left:0,width:"100%",height:"100%",animate:initialized?"animate":"enter",exit:"enter",bg:progressColor||progressColorDefault}))}Progress.displayName="Progress",Progress.propTypes={percents:prop_types_default().number,duration:prop_types_default().number,delay:prop_types_default().number,easing:prop_types_default().string,barHeight:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),progressColor:prop_types_default().string,baseColor:prop_types_default().string,borderRadius:prop_types_default().string,widthSize:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().any])},Progress.defaultProps={percents:0,duration:2,delay:.5,easing:"easeInOut",barHeight:"4px",progressColor:"",baseColor:"",borderRadius:"2px",widthSize:null},Progress.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{percents:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},duration:{defaultValue:{value:"2",computed:!1},description:"",type:{name:"number"},required:!1},delay:{defaultValue:{value:"0.5",computed:!1},description:"",type:{name:"number"},required:!1},easing:{defaultValue:{value:"'easeInOut'",computed:!1},description:"",type:{name:"string"},required:!1},barHeight:{defaultValue:{value:"'4px'",computed:!1},description:"",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},progressColor:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},baseColor:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},borderRadius:{defaultValue:{value:"'2px'",computed:!1},description:"",type:{name:"string"},required:!1},widthSize:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"union",value:[{name:"number"},{name:"any"}]},required:!1}}};const ProgressBar_Progress=Progress},"./src/common/components/ProgressCircle/Counter.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/hooks/dist/chunk-VHPIVGMD.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function Counter(_ref){var _ref$valueFrom=_ref.valueFrom,valueFrom=void 0===_ref$valueFrom?0:_ref$valueFrom,_ref$valueTo=_ref.valueTo,valueTo=void 0===_ref$valueTo?100:_ref$valueTo,_ref$totalDuration=_ref.totalDuration,totalDuration=void 0===_ref$totalDuration?3.5:_ref$totalDuration,_ref$withDecimal=_ref.withDecimal,withDecimal=void 0!==_ref$withDecimal&&_ref$withDecimal,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(valueFrom),count=_useState[0],setCount=_useState[1],value=withDecimal?valueTo.toFixed(1):Math.round(valueTo);return withDecimal&&value%1!=0&&(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Y)((function(){count<value&&setCount(Number((count+.1).toFixed(1))),count>value&&setCount(Number((count-.1).toFixed(1)))}),totalDuration/value*300),withDecimal||value%1!=0||(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Y)((function(){count<value&&setCount(count+1),count>value&&setCount(count-1)}),totalDuration/value*1e3),count}},"./node_modules/date-fns/esm/formatDuration/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>formatDuration});var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/esm/_lib/defaultOptions/index.js"),_lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/date-fns/esm/_lib/defaultLocale/index.js"),defaultFormat=["years","months","weeks","days","hours","minutes","seconds"];function formatDuration(duration,options){var _ref,_options$locale,_options$format,_options$zero,_options$delimiter;if(arguments.length<1)throw new TypeError("1 argument required, but only ".concat(arguments.length," present"));var defaultOptions=(0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_0__.j)(),locale=null!==(_ref=null!==(_options$locale=null==options?void 0:options.locale)&&void 0!==_options$locale?_options$locale:defaultOptions.locale)&&void 0!==_ref?_ref:_lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_1__.Z,format=null!==(_options$format=null==options?void 0:options.format)&&void 0!==_options$format?_options$format:defaultFormat,zero=null!==(_options$zero=null==options?void 0:options.zero)&&void 0!==_options$zero&&_options$zero,delimiter=null!==(_options$delimiter=null==options?void 0:options.delimiter)&&void 0!==_options$delimiter?_options$delimiter:" ";return locale.formatDistance?format.reduce((function(acc,unit){var token="x".concat(unit.replace(/(^.)/,(function(m){return m.toUpperCase()}))),value=duration[unit];return"number"==typeof value&&(zero||duration[unit])?acc.concat(locale.formatDistance(token,value)):acc}),[]).join(delimiter):""}}}]);