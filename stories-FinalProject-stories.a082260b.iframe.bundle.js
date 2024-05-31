"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1276],{"./src/stories/FinalProject.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>FinalProject_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),chunk_YTV6DHKL=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-YTV6DHKL.mjs"),chunk_NAA7TEES=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs"),chunk_UUGUEMMH=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-UUGUEMMH.mjs"),chunk_OWW5MU75=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-OWW5MU75.mjs"),chunk_66WFFNY3=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-66WFFNY3.mjs"),chunk_YLPWWAYV=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-YLPWWAYV.mjs"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),next_router=__webpack_require__("./node_modules/next/router.js"),useTranslation=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),usePersistent=__webpack_require__("./src/common/hooks/usePersistent.js"),Heading=__webpack_require__("./src/common/components/Heading.jsx"),Icon=__webpack_require__("./src/common/components/Icon/index.jsx"),Progress=__webpack_require__("./src/common/components/ProgressBar/Progress.jsx"),Text=__webpack_require__("./src/common/components/Text.jsx"),Modal=__webpack_require__("./src/common/components/FinalProject/Modal.jsx"),breathecode=__webpack_require__("./src/common/services/breathecode.js"),Form=__webpack_require__("./src/common/components/FinalProject/Form.jsx"),useStyle=__webpack_require__("./src/common/hooks/useStyle.js"),finalProjectAction=__webpack_require__("./src/common/store/actions/finalProjectAction.js"),__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function FinalProject(_ref){var _storyConfig$translat,_finalProject$current,_router$query,_cohortSession$syllab,storyConfig=_ref.storyConfig,studentAndTeachers=_ref.studentAndTeachers,tasks=_ref.tasks,isStudent=_ref.isStudent,t=(0,useTranslation.Z)("final-project").t,_useState=(0,react.useState)(!1),isOpen=_useState[0],setIsOpen=_useState[1],_useState2=(0,react.useState)(!1),openForm=_useState2[0],setOpenForm=_useState2[1],_useState3=(0,react.useState)([]),finalProject=_useState3[0],setFinalProjects=_useState3[1],_usePersistent=(0,usePersistent.K)("cohortSession",{}),cohortSession=(0,slicedToArray.Z)(_usePersistent,1)[0],router=(0,next_router.useRouter)(),_useStyle=(0,useStyle.Z)(),modal=_useStyle.modal,hexColor=_useStyle.hexColor,_useFinalProjectProps=(0,finalProjectAction.Z)(),finalProjectData=_useFinalProjectProps.finalProjectData,setFinalProjectData=_useFinalProjectProps.setFinalProjectData,storyConfigExists=Object.keys(storyConfig).length>0,finalProjectTranslation=null==storyConfig||null===(_storyConfig$translat=storyConfig.translation)||void 0===_storyConfig$translat?void 0:_storyConfig$translat[null==storyConfig?void 0:storyConfig.locale]["final-project"],repoUrl=(null==finalProjectData?void 0:finalProjectData.repo_url)||(null==finalProject||null===(_finalProject$current=finalProject.currentProject)||void 0===_finalProject$current?void 0:_finalProject$current.repo_url),cohortSlug=null==router||null===(_router$query=router.query)||void 0===_router$query?void 0:_router$query.cohortSlug,students=studentAndTeachers.map((function(student){var _student$user,_student$user2;return _objectSpread(_objectSpread({},student),{},{user:_objectSpread(_objectSpread({},null==student?void 0:student.user),{},{full_name:"".concat(null==student||null===(_student$user=student.user)||void 0===_student$user?void 0:_student$user.first_name," ").concat(null==student||null===(_student$user2=student.user)||void 0===_student$user2?void 0:_student$user2.last_name)})})})),refreshFinalProject=function(){var _ref2=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(){var _res$data,res,currentProject;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,breathecode.Z.todo({visibility_status:"PRIVATE"}).getFinalProject();case 2:res=_context.sent,null!==(currentProject=(null==res||null===(_res$data=res.data)||void 0===_res$data?void 0:_res$data.find((function(project){var _project$cohort;return(null==project||null===(_project$cohort=project.cohort)||void 0===_project$cohort?void 0:_project$cohort.slug)===cohortSlug})))||null)&&res.data.length>0?setFinalProjects({currentProject,allProjects:null==res?void 0:res.data}):(setFinalProjects([]),setFinalProjectData({}));case 5:case"end":return _context.stop()}}),_callee)})));return function refreshFinalProject(){return _ref2.apply(this,arguments)}}();(0,react.useEffect)((function(){storyConfigExists||breathecode.Z.todo({visibility_status:"PRIVATE"}).getFinalProject().then((function(res){var _res$data2,currentProject=null==res||null===(_res$data2=res.data)||void 0===_res$data2?void 0:_res$data2.find((function(project){var _project$cohort2;return(null==project||null===(_project$cohort2=project.cohort)||void 0===_project$cohort2?void 0:_project$cohort2.slug)===cohortSlug}));void 0!==currentProject?setFinalProjects({currentProject,allProjects:null==res?void 0:res.data}):setIsOpen(!0)}))}),[]);var tasksProjects=tasks.filter((function(task){return"PROJECT"===(null==task?void 0:task.task_type)})),tasksProjectCompleted=tasksProjects.filter((function(task){return"DONE"===(null==task?void 0:task.task_status)})),fakeCompletedNumber=null==storyConfig?void 0:storyConfig.completedTasks,fakeTaskLengthNumber=null==storyConfig?void 0:storyConfig.totalTasks,progressPercent=fakeCompletedNumber?parseInt(fakeCompletedNumber/fakeTaskLengthNumber*100,10):parseInt((null==tasksProjectCompleted?void 0:tasksProjectCompleted.length)/(null==tasksProjects?void 0:tasksProjects.length)*100,10),isApproved=(null==storyConfig?void 0:storyConfig.approved)||"APPROVED"===(null==finalProjectData?void 0:finalProjectData.revision_status);return __jsx(chunk_6CSUKJP7.xu,{minHeight:"300px",width:null==storyConfig?void 0:storyConfig.width,background:isApproved?"yellow.default":"blue.900",borderRadius:"lg",position:"relative",color:"white",textAlign:"center",padding:"0 34px 24px 34px"},__jsx(chunk_6CSUKJP7.xu,{className:"center-absolute-x",top:"0",background:"yellow.default",padding:"9px",borderBottomRadius:"4px"},__jsx(Icon.Z,{icon:"graduationCap",width:"46px",height:"39px"})),isApproved?__jsx(chunk_6CSUKJP7.xu,{paddingTop:"4rem",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"},__jsx(chunk_6CSUKJP7.xu,{borderRadius:"lg",display:"flex",flexDirection:"column",gridGap:"20px"},__jsx(Heading.Z,{size:"24px"},(null==finalProjectTranslation?void 0:finalProjectTranslation.congratulations)||t("congratulations")),__jsx(Text.Z,{size:"l"},(null==finalProjectTranslation?void 0:finalProjectTranslation["graduated-as"])||t("graduated-as")),__jsx(Heading.Z,{size:"22px",fontWeight:700,textTransform:"uppercase"},(null==storyConfig?void 0:storyConfig.syllabusName)||(null==cohortSession||null===(_cohortSession$syllab=cohortSession.syllabus_version)||void 0===_cohortSession$syllab?void 0:_cohortSession$syllab.name))),__jsx(chunk_6CSUKJP7.xu,{mt:"10px",padding:"12px 30px"},__jsx(chunk_YTV6DHKL.r,{href:"/profile/certificates",target:"_blank",rel:"noopener noreferrer",fontSize:"15px",variant:"buttonDefault",background:"yellow.light",color:"yellow.default",_hover:{opacity:.9}},(null==finalProjectTranslation?void 0:finalProjectTranslation["see-my-certificate"])||t("see-my-certificate")))):__jsx(chunk_6CSUKJP7.xu,{paddingTop:"4rem"},__jsx(Heading.Z,{size:"18px"},isStudent?(null==finalProjectTranslation?void 0:finalProjectTranslation["what-do-you-need-to-graduate"])||t("what-do-you-need-to-graduate"):(null==finalProjectTranslation?void 0:finalProjectTranslation["review-final-projects"])||t("review-final-projects")),__jsx(Text.Z,{size:"l",mt:"10px"},isStudent?(null==finalProjectTranslation?void 0:finalProjectTranslation["almost-there"])||t("almost-there"):(null==finalProjectTranslation?void 0:finalProjectTranslation["almost-there-teacher"])||t("almost-there-teacher")),__jsx(chunk_6CSUKJP7.xu,{display:"flex",flexDirection:"column",gridGap:"20px",padding:"0 24px",mt:"2rem"},isStudent?__jsx(react.Fragment,null,__jsx(chunk_NAA7TEES.z,{display:"flex",height:"45px",gridGap:"10px",m:"0 auto",width:"100%",onClick:function openModal(){setOpenForm(!0)},variant:"unstyled",background:"blue.light",color:"blue.default",padding:"0 27px",whiteSpace:"normal"},__jsx(Icon.Z,{icon:repoUrl?"underlinedPencil":"add",width:"25px",height:"25px"}),repoUrl?(null==finalProjectTranslation?void 0:finalProjectTranslation["edit-final-project"])||t("edit-final-project"):(null==finalProjectTranslation?void 0:finalProjectTranslation["add-final-project"])||t("add-final-project")),__jsx(chunk_6CSUKJP7.xu,{display:"flex",flexDirection:"column",gridGap:"10px",borderColor:"white",border:"1px solid",padding:"10px 22px",borderRadius:"4px"},__jsx(Text.Z,{size:"l",fontWeight:700},100===progressPercent?(null==finalProjectTranslation?void 0:finalProjectTranslation.completed)||t("completed"):(null==finalProjectTranslation?void 0:finalProjectTranslation["complete-required-projects"])||t("complete-required-projects")),__jsx(Progress.Z,{percents:progressPercent||0,duration:.4,widthSize:218,progressColor:100===progressPercent?"green.400":"",barHeight:"5px",borderRadius:"20px"}))):__jsx(chunk_NAA7TEES.z,{display:"flex",height:"45px",gridGap:"10px",m:"0 auto",width:"100%",onClick:function onClick(){var _cohortSession$academ;window.open("/cohort/".concat(cohortSlug,"/assignments?academy=").concat(null==cohortSession||null===(_cohortSession$academ=cohortSession.academy)||void 0===_cohortSession$academ?void 0:_cohortSession$academ.id,"&view=2"),"_blank")},variant:"unstyled",background:hexColor.blueDefault,color:"white",padding:"0 27px",whiteSpace:"normal"},(null==finalProjectTranslation?void 0:finalProjectTranslation["list-projects"])||t("list-projects"),__jsx(Icon.Z,{icon:"longArrowRight",color:"white",width:"25px",height:"25px"})))),__jsx(Modal.Z,{storyConfig,isOpen,closeModal:function closeModal(){return setIsOpen(!1)},studentsData:students,cohortData:cohortSession}),openForm&&__jsx(chunk_UUGUEMMH.u_,{size:"lg",isOpen:openForm,onClose:setOpenForm},__jsx(chunk_OWW5MU75.Z,null),__jsx(chunk_66WFFNY3.h,{margin:"5rem 0 4rem 0",background:modal.background,borderRadius:"13px"},__jsx(chunk_YLPWWAYV.o,null),__jsx(Form.Z,{defaultValues:null==finalProject?void 0:finalProject.currentProject,allProjects:null==finalProject?void 0:finalProject.allProjects,cohortData:cohortSession,studentsData:students,refreshFinalProject,handleClose:function handleClose(){return setOpenForm(!1)}}))))}FinalProject.displayName="FinalProject",FinalProject.propTypes={studentAndTeachers:prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().any])),tasks:prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().any])),storyConfig:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),isStudent:prop_types_default().bool},FinalProject.defaultProps={studentAndTeachers:[],tasks:[],storyConfig:{},isStudent:!0},FinalProject.__docgenInfo={description:"",methods:[],displayName:"FinalProject",props:{studentAndTeachers:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"any"}]}},required:!1},tasks:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"any"}]}},required:!1},storyConfig:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},isStudent:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1}}};const components_FinalProject=FinalProject;var _Default$parameters,_Default$parameters2,console=__webpack_require__("./node_modules/console-browserify/index.js"),FinalProject_stories_jsx=react.createElement;function FinalProject_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function FinalProject_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?FinalProject_stories_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):FinalProject_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const FinalProject_stories={title:"Components/FinalProject",component:components_FinalProject,argTypes:{totalTasks:{control:{type:"number",min:100,max:100}},completedTasks:{control:{type:"number",min:0,max:100}}}};var Template=function Template(args){return console.log("args",args),FinalProject_stories_jsx(chunk_6CSUKJP7.xu,null,FinalProject_stories_jsx(components_FinalProject,{storyConfig:{translation:args.translation,locale:args.locale,completedTasks:null==args?void 0:args.completedTasks,totalTasks:null==args?void 0:args.totalTasks,width:null==args?void 0:args.width,approved:null==args?void 0:args.approved,syllabusName:null==args?void 0:args.syllabusName}}))};Template.displayName="Template";var Default=Template.bind({});Default.args={cohortData:{slug:"miami-xxix",academy:4},completedTasks:33,totalTasks:100,width:"370px",approved:!0,syllabusName:"Full Stack Engineer"},Default.parameters=FinalProject_stories_objectSpread(FinalProject_stories_objectSpread({},Default.parameters),{},{docs:FinalProject_stories_objectSpread(FinalProject_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:FinalProject_stories_objectSpread({originalSource:"args => {\n  console.log('args', args);\n  return <Box>\n    <FinalProject storyConfig={{\n      translation: args.translation,\n      locale: args.locale,\n      completedTasks: args?.completedTasks,\n      totalTasks: args?.totalTasks,\n      width: args?.width,\n      approved: args?.approved,\n      syllabusName: args?.syllabusName\n    }} />\n  </Box>;\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/common/components/ProgressBar/Progress.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ProgressBar_Progress});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),chunk_7NLW6UB6=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-7NLW6UB6.mjs"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_3LE6AY5Q=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),valid_prop=__webpack_require__("./node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs");const components_MotionBox=(0,chunk_3LE6AY5Q.m)(motion.E.div,{shouldForwardProp:valid_prop.Z});var __jsx=react.createElement;function Progress(_ref){var percents=_ref.percents,duration=_ref.duration,delay=_ref.delay,easing=_ref.easing,barHeight=_ref.barHeight,progressColor=_ref.progressColor,baseColor=_ref.baseColor,borderRadius=_ref.borderRadius,widthSize=_ref.widthSize,_useState=(0,react.useState)(0),barWidth=_useState[0],setBarWidth=_useState[1],_useState2=(0,react.useState)(!1),initialized=_useState2[0],setInitialized=_useState2[1],progressClass="undefined"!=typeof document&&document.querySelector(".progress-bar");(0,react.useEffect)((function(){progressClass&&(setBarWidth(progressClass.scrollWidth),setTimeout((function(){setInitialized(!0)}),600))}),[progressClass]);var barWidthDefault=widthSize||barWidth,variants={enter:{opacity:0,x:-barWidthDefault},animate:{opacity:1,x:barWidthDefault/100*(percents-100),transition:{duration,delay,ease:easing}}},progressColorDefault=(0,chunk_7NLW6UB6.ff)("blue.default","blue.200"),baseColorDefault=(0,chunk_7NLW6UB6.ff)("gray.100","whiteAlpha.300");return __jsx(chunk_6CSUKJP7.xu,{className:"progress-bar",width:"100%",overflow:"hidden",position:"relative",borderRadius,height:barHeight,bg:baseColor||baseColorDefault},__jsx(components_MotionBox,{variants,initial:"enter",position:"absolute",top:0,left:0,width:"100%",height:"100%",animate:initialized?"animate":"enter",exit:"enter",bg:progressColor||progressColorDefault}))}Progress.displayName="Progress",Progress.propTypes={percents:prop_types_default().number,duration:prop_types_default().number,delay:prop_types_default().number,easing:prop_types_default().string,barHeight:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),progressColor:prop_types_default().string,baseColor:prop_types_default().string,borderRadius:prop_types_default().string,widthSize:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().any])},Progress.defaultProps={percents:0,duration:2,delay:.5,easing:"easeInOut",barHeight:"4px",progressColor:"",baseColor:"",borderRadius:"2px",widthSize:null},Progress.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{percents:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},duration:{defaultValue:{value:"2",computed:!1},description:"",type:{name:"number"},required:!1},delay:{defaultValue:{value:"0.5",computed:!1},description:"",type:{name:"number"},required:!1},easing:{defaultValue:{value:"'easeInOut'",computed:!1},description:"",type:{name:"string"},required:!1},barHeight:{defaultValue:{value:"'4px'",computed:!1},description:"",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},progressColor:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},baseColor:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},borderRadius:{defaultValue:{value:"'2px'",computed:!1},description:"",type:{name:"string"},required:!1},widthSize:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"union",value:[{name:"number"},{name:"any"}]},required:!1}}};const ProgressBar_Progress=Progress}}]);