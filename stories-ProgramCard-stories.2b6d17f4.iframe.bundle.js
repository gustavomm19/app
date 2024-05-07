"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2690],{"./src/stories/ProgramCard.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,courseHasStarted:()=>courseHasStarted,courseNotStarted:()=>courseNotStarted,default:()=>ProgramCard_stories,expiredFreeTrial:()=>expiredFreeTrial,freeTrialNoValidUntil:()=>freeTrialNoValidUntil,isAvailableForSaas:()=>isAvailableForSaas,isAvailableForSaasCancelled:()=>isAvailableForSaasCancelled,isHiddenOnPrework:()=>isHiddenOnPrework,isLoading:()=>isLoading,isNotAvailableForSaas:()=>isNotAvailableForSaas,ongoingFreeTrial:()=>ongoingFreeTrial,ongoingPaidCourse:()=>ongoingPaidCourse});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),addDays=__webpack_require__("./node_modules/date-fns/esm/addDays/index.js"),subDays=__webpack_require__("./node_modules/date-fns/esm/subDays/index.js"),subMinutes=__webpack_require__("./node_modules/date-fns/esm/subMinutes/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),chunk_MPFPK3CX=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs"),chunk_7NLW6UB6=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-7NLW6UB6.mjs"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_SMHKDLMK=__webpack_require__("./node_modules/@chakra-ui/image/dist/chunk-SMHKDLMK.mjs"),chunk_NAA7TEES=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs"),chunk_W6SSP5F2=__webpack_require__("./node_modules/@chakra-ui/progress/dist/chunk-W6SSP5F2.mjs"),useTranslation=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),intervalToDuration=__webpack_require__("./node_modules/date-fns/esm/intervalToDuration/index.js"),formatDuration=__webpack_require__("./node_modules/date-fns/esm/formatDuration/index.js"),es=__webpack_require__("./node_modules/date-fns/esm/locale/es/index.js"),theme=__webpack_require__("./styles/theme.js"),Text=__webpack_require__("./src/common/components/Text.jsx"),Icon=__webpack_require__("./src/common/components/Icon/index.jsx"),utils=__webpack_require__("./src/utils/index.js"),useStyle=__webpack_require__("./src/common/hooks/useStyle.js"),ProjectsSection=__webpack_require__("./src/common/components/ProjectsSection.jsx"),ButtonHandler=__webpack_require__("./src/js_modules/profile/Subscriptions/ButtonHandler.jsx"),UpgradeModal=__webpack_require__("./src/js_modules/profile/Subscriptions/UpgradeModal.jsx"),__jsx=react.createElement;function FreeTagCapsule(_ref){var isExpired=_ref.isExpired,freeTrialExpireDateValue=_ref.freeTrialExpireDateValue,now=_ref.now,stTranslation=_ref.stTranslation,lang=_ref.lang,t=(0,useTranslation.Z)("program-card").t,timeString="",duration=(0,intervalToDuration.Z)({end:now,start:freeTrialExpireDateValue}),hours=null==duration?void 0:duration.hours,formated={en:(0,formatDuration.Z)(duration,{format:["days"]}),es:(0,formatDuration.Z)(duration,{format:["days"],locale:es.Z})};return timeString=isExpired?stTranslation?stTranslation[lang]["program-card"]["non-left"]:t("non-left"):duration.days>0?"".concat(formated[lang]," ").concat(stTranslation?stTranslation[lang]["program-card"].left:t("left")):0===duration.days&&hours>=0?"".concat(hours>0?"".concat(hours,"h ").concat(t("common:and")):""," ").concat(null==duration?void 0:duration.minutes,"min"):stTranslation?stTranslation[lang]["program-card"].today:t("today"),__jsx(chunk_MPFPK3CX.k,{borderRadius:"15px",background:isExpired?"#FFE7E9":theme.Z.colors.yellow.light,padding:"5px",height:"21px",alignItems:"center"},__jsx(Icon.Z,{icon:"free",width:"29px",height:"14px",style:{marginRight:"5px"}}),__jsx(Text.Z,{fontSize:"xs",lineHeight:"14px",fontWeight:"400",color:isExpired?"#EB5757":"#01455E"},timeString))}function ProgramCard(_ref2){var _stTranslation$lang,_programCardTR$status,_programCardTR$status2,_programCardTR$status3,_programCardTR$status4,programName=_ref2.programName,programDescription=_ref2.programDescription,haveFreeTrial=_ref2.haveFreeTrial,startsIn=_ref2.startsIn,endsAt=_ref2.endsAt,signInDate=_ref2.signInDate,icon=_ref2.icon,iconBackground=_ref2.iconBackground,stTranslation=_ref2.stTranslation,syllabusContent=_ref2.syllabusContent,freeTrialExpireDate=_ref2.freeTrialExpireDate,courseProgress=_ref2.courseProgress,lessonNumber=_ref2.lessonNumber,isLoading=_ref2.isLoading,width=_ref2.width,assistants=_ref2.assistants,teacher=_ref2.teacher,handleChoose=_ref2.handleChoose,isHiddenOnPrework=_ref2.isHiddenOnPrework,isAvailableAsSaas=_ref2.isAvailableAsSaas,subscriptionStatus=_ref2.subscriptionStatus,subscription=_ref2.subscription,isMarketingCourse=_ref2.isMarketingCourse,iconLink=_ref2.iconLink,bullets=_ref2.bullets,background=_ref2.background,isFinantialStatusLate=_ref2.isFinantialStatusLate,isLoadingPageContent=_ref2.isLoadingPageContent,_useTranslation2=(0,useTranslation.Z)("program-card"),t=_useTranslation2.t,lang=_useTranslation2.lang,textColor=(0,chunk_7NLW6UB6.ff)("black","white"),_useState=(0,react.useState)(!1),upgradeModalIsOpen=_useState[0],setUpgradeModalIsOpen=_useState[1],_useState2=(0,react.useState)({}),offerProps=_useState2[0],setOfferProps=_useState2[1],_useState3=(0,react.useState)({}),subscriptionProps=_useState3[0],setSubscriptionProps=_useState3[1],freeTrialExpireDateValue=(0,utils.qb)(freeTrialExpireDate)?new Date(freeTrialExpireDate):new Date((0,subMinutes.Z)(new Date,1)),now=new Date,_useStyle=(0,useStyle.Z)(),backgroundColor=_useStyle.backgroundColor,lightColor=_useStyle.lightColor,hexColor=_useStyle.hexColor,isFreeTrial=isAvailableAsSaas&&"FREE_TRIAL"===subscriptionStatus,isCancelled=isAvailableAsSaas&&("CANCELLED"===subscriptionStatus||"PAYMENT_ISSUE"===subscriptionStatus),isExpired=isFreeTrial&&freeTrialExpireDateValue<now,isNeverEnding=!endsAt,statusActive="ACTIVE"===subscriptionStatus||"FULLY_PAID"===subscriptionStatus,programCardTR=null==stTranslation||null===(_stTranslation$lang=stTranslation[lang])||void 0===_stTranslation$lang?void 0:_stTranslation$lang["program-card"],hasStarted="started"===function statusTimeString(start){return start<now?"started":"idle"}(new Date(startsIn)),startsInDate=function getStartsInDate(){return isNeverEnding&&(0,utils.qb)(signInDate)?new Date(signInDate):(0,utils.qb)(startsIn)?new Date(startsIn):null}(),formatTimeString=function formatTimeString(start){var duration=(0,intervalToDuration.Z)({end:now,start});duration.days>0&&(duration.hours=0);var formated={en:(0,formatDuration.Z)(duration,{format:["months","weeks","days","hours"],delimiter:", "}),es:(0,formatDuration.Z)(duration,{format:["months","weeks","days","hours"],delimiter:", ",locale:es.Z})};return""===formated[lang]?stTranslation?stTranslation[lang]["program-card"]["starting-today"]:t("starting-today"):formated[lang]},statusLabel={active:(null==programCardTR||null===(_programCardTR$status=programCardTR.status)||void 0===_programCardTR$status?void 0:_programCardTR$status.active)||t("status.active"),fully_paid:(null==programCardTR||null===(_programCardTR$status2=programCardTR.status)||void 0===_programCardTR$status2?void 0:_programCardTR$status2.fully_paid)||t("status.fully_paid"),expired:(null==programCardTR?void 0:programCardTR.expired)||t("status.expired"),cancelled:(null==programCardTR||null===(_programCardTR$status3=programCardTR.status)||void 0===_programCardTR$status3?void 0:_programCardTR$status3.cancelled)||t("status.cancelled"),payment_issue:(null==programCardTR||null===(_programCardTR$status4=programCardTR.status)||void 0===_programCardTR$status4?void 0:_programCardTR$status4.payment_issue)||t("status.payment_issue")},onOpenUpgrade=function onOpenUpgrade(data){setOfferProps(data),setUpgradeModalIsOpen(!0)};return __jsx(chunk_6CSUKJP7.xu,{border:"1px solid",borderColor:"#DADADA",borderRadius:"9px",width,padding:"15px",position:"relative",height:"min-content",background},iconLink?__jsx(chunk_6CSUKJP7.xu,{position:"absolute",borderRadius:"full",top:"-30px",padding:"10px"},__jsx(chunk_SMHKDLMK.E,{src:iconLink,width:"44px",height:"44px",borderRadius:"50%"})):__jsx(chunk_6CSUKJP7.xu,{position:"absolute",borderRadius:"full",top:"-30px",background:iconBackground,padding:"10px"},__jsx(Icon.Z,{width:"32px",height:"32px",icon})),!isHiddenOnPrework&&!isMarketingCourse&&__jsx(chunk_MPFPK3CX.k,{height:"30px",id:"upper-left-section",flexDirection:"row-reverse"},isLoading?__jsx(react.Fragment,null):__jsx(react.Fragment,null,__jsx(react.Fragment,null,isAvailableAsSaas&&statusActive&&"FREE_TRIAL"!==subscriptionStatus?0===courseProgress?__jsx(chunk_MPFPK3CX.k,{width:"116px",justifyContent:"flex-end"},__jsx(chunk_6CSUKJP7.xu,{marginRight:"10px"},__jsx(Icon.Z,{width:"14px",height:"21px",icon:"rocket",color:hasStarted?hexColor.blueDefault:""})),__jsx(chunk_6CSUKJP7.xu,null,__jsx(Text.Z,{fontSize:"9px",lineHeight:"9.8px",fontWeight:"600",color:textColor},"".concat(hasStarted?stTranslation?stTranslation[lang]["program-card"]["started-in"]:t("started-in"):stTranslation?stTranslation[lang]["program-card"]["starts-in"]:t("starts-in"))),__jsx(Text.Z,{fontSize:"9px",lineHeight:"9.8px",fontWeight:"400",color:textColor},formatTimeString(startsInDate)))):__jsx(Icon.Z,{icon:"crown",width:"22px",height:"15px"}):__jsx(react.Fragment,null,isAvailableAsSaas&&isFreeTrial?hasStarted?__jsx(FreeTagCapsule,{isExpired,freeTrialExpireDateValue,now,stTranslation,lang}):__jsx(chunk_MPFPK3CX.k,{width:"116px",justifyContent:"flex-end"},__jsx(chunk_6CSUKJP7.xu,{marginRight:"10px"},__jsx(Icon.Z,{width:"14px",height:"21px",icon:"rocket",color:hasStarted?hexColor.blueDefault:""})),__jsx(chunk_6CSUKJP7.xu,null,__jsx(Text.Z,{fontSize:"9px",lineHeight:"9.8px",fontWeight:"600",color:textColor},"".concat(hasStarted?stTranslation?stTranslation[lang]["program-card"]["started-in"]:t("started-in"):stTranslation?stTranslation[lang]["program-card"]["starts-in"]:t("starts-in"))),__jsx(Text.Z,{fontSize:"9px",lineHeight:"9.8px",fontWeight:"400",color:textColor},formatTimeString(startsInDate)))):isCancelled&&!1!==isAvailableAsSaas?__jsx(chunk_6CSUKJP7.xu,{fontSize:"12px",display:"flex",alignItems:"center",background:"red.light",color:"danger",height:"22px",borderRadius:"20px",padding:"0 10px"},statusLabel[subscriptionStatus.toLowerCase()]):__jsx(Icon.Z,{icon:"crown",width:"22px",height:"15px"}))))),__jsx(Text.Z,{fontSize:"md",lineHeight:"19px",fontWeight:"700",color:textColor,marginBottom:"10px",marginTop:(isHiddenOnPrework||isMarketingCourse)&&"30px"},programName," "),__jsx(react.Fragment,null,isHiddenOnPrework||isMarketingCourse?isMarketingCourse?__jsx(react.Fragment,null,__jsx(chunk_6CSUKJP7.xu,{width:"100%",display:"flex",justifyContent:"center"},__jsx(Text.Z,{size:"sm",fontWeight:500,mb:"10px"},programDescription)),(null==bullets?void 0:bullets.length)>0&&__jsx(chunk_MPFPK3CX.k,{flexDirection:"column",gridGap:"8px",background:backgroundColor,padding:"10px 12px",borderRadius:"4px"},bullets.map((function(l){return __jsx(chunk_6CSUKJP7.xu,{display:"flex",fontWeight:700,fontSize:"14px",gridGap:"10px",alignItems:"center"},__jsx(Icon.Z,{icon:"checked2",color:hexColor.green,width:"14px",height:"14px"}),l.name)}))),__jsx(chunk_NAA7TEES.z,{borderRadius:"3px",width:"100%",padding:"0",whiteSpace:"normal",variant:"default",mt:"20px",onClick:handleChoose,isLoading:isLoadingPageContent},t("learn-more"))):__jsx(chunk_6CSUKJP7.xu,{width:"100%",display:"flex",justifyContent:"center"},__jsx(Text.Z,{size:"12px",color:lightColor},(null==programCardTR?void 0:programCardTR["prework-message"])||t("prework-message"))):isLoading?__jsx(react.Fragment,null,__jsx(Text.Z,{fontSize:"xs",lineHeight:"14px",fontWeight:"500",color:textColor},programDescription," "),__jsx(chunk_NAA7TEES.z,{variant:"outline",marginTop:"20px",color:"blue.default",borderColor:"currentcolor",w:"full",fontSize:"12px",letterSpacing:"0.05em"},"Loading...")):__jsx(react.Fragment,null,!hasStarted&&0===courseProgress&&statusActive||!hasStarted&&0===courseProgress&&isFreeTrial?__jsx(chunk_6CSUKJP7.xu,null,__jsx(Text.Z,{fontSize:"xs",lineHeight:"14px",fontWeight:"500",color:textColor},programDescription," "),__jsx(ProjectsSection.Z,{startsIn,stTranslation,syllabusContent,courseProgress,assistants,teacher,isAvailableAsSaas,subscriptionStatus}),isFreeTrial&&isExpired?__jsx(ButtonHandler.Z,{subscription,onOpenUpgrade,setSubscriptionProps,onOpenCancelSubscription:function onOpenCancelSubscription(){},marginTop:!isCancelled&&"20px",borderRadius:"3px",width:"100%",padding:"0",whiteSpace:"normal",variant:"default",alignItems:"center",background:"yellow.default",color:"white"},__jsx(Icon.Z,{style:{marginRight:"10px"},width:"12px",height:"18px",icon:"rocket",color:"currentColor"}),(null==programCardTR?void 0:programCardTR.upgrade)||t("upgrade")):__jsx(chunk_NAA7TEES.z,{marginTop:"20px",borderRadius:"3px",width:"100%",padding:"0",whiteSpace:"normal",variant:isFinantialStatusLate?"danger":"default",onClick:handleChoose,isLoading:isLoadingPageContent},(null==programCardTR?void 0:programCardTR["start-course"])||t("start-course")),haveFreeTrial&&__jsx(chunk_NAA7TEES.z,{marginTop:"15px",borderRadius:"3px",width:"100%",padding:"0",whiteSpace:"normal",variant:"outline",borderColor:"blue.default",color:"blue.default"},(null==programCardTR?void 0:programCardTR["free-trial"])||t("free-trial"))):__jsx(chunk_6CSUKJP7.xu,{marginTop:courseProgress>0},courseProgress<=0&&__jsx(Text.Z,{fontSize:"xs",lineHeight:"14px",fontWeight:"500",color:textColor},programDescription," "),__jsx(chunk_6CSUKJP7.xu,{margin:"auto",width:"90%"},courseProgress>0&&__jsx(chunk_6CSUKJP7.xu,{margin:"20px 0 0 0"},__jsx(chunk_W6SSP5F2.E,{value:courseProgress,colorScheme:"blueDefaultScheme",height:"10px",borderRadius:"20px"}),__jsx(Text.Z,{fontSize:"8px",lineHeight:"9.8px",fontWeight:"500",marginTop:"5px",color:theme.Z.colors.blue.default2},"".concat(courseProgress,"%")))),__jsx(ProjectsSection.Z,{startsIn,stTranslation,syllabusContent,courseProgress,assistants,teacher,isAvailableAsSaas,subscriptionStatus}),__jsx(Text.Z,{marginTop:"20px",color:theme.Z.colors.blue.default,textAlign:"center",fontSize:"xs",lineHeight:"14px",fontWeight:"700"},!isExpired&&__jsx(react.Fragment,null,courseProgress>0&&!isCancelled?__jsx(chunk_NAA7TEES.z,{variant:isFinantialStatusLate?"danger":"link",onClick:handleChoose,width:"100%",isLoading:isLoadingPageContent,gridGap:"6px",fontWeight:700},isFinantialStatusLate&&((null==programCardTR?void 0:programCardTR["action-required"])||t("action-required")),!isFinantialStatusLate&&((0,utils.hj)(String(lessonNumber))?"".concat((null==programCardTR?void 0:programCardTR.continue)||t("continue")," ").concat(lessonNumber," →"):"".concat((null==programCardTR?void 0:programCardTR["continue-course"])||t("continue-course")," →"))):__jsx(react.Fragment,null,(!isAvailableAsSaas||!isCancelled)&&__jsx(chunk_NAA7TEES.z,{borderRadius:"3px",width:"100%",padding:"0",whiteSpace:"normal",variant:isFinantialStatusLate?"danger":"default",mb:isAvailableAsSaas&&!statusActive&&"10px",onClick:handleChoose,isLoading:isLoadingPageContent},isFinantialStatusLate?(null==programCardTR?void 0:programCardTR["action-required"])||t("action-required"):(null==programCardTR?void 0:programCardTR["start-course"])||t("start-course"))))),(isAvailableAsSaas&&isFreeTrial||isAvailableAsSaas&&!statusActive)&&__jsx(ButtonHandler.Z,{subscription,onOpenUpgrade,setSubscriptionProps,onOpenCancelSubscription:function onOpenCancelSubscription(){},marginTop:!isCancelled&&!isExpired&&courseProgress>0&&"5px",borderRadius:"3px",width:"100%",padding:"0",whiteSpace:"normal",variant:"default",alignItems:"center",background:"yellow.default",color:"white"},__jsx(Icon.Z,{style:{marginRight:"10px"},width:"12px",height:"18px",icon:"rocket",color:"currentColor"}),(null==programCardTR?void 0:programCardTR.upgrade)||t("upgrade"))))),__jsx(UpgradeModal.Z,{upgradeModalIsOpen,setUpgradeModalIsOpen,subscriptionProps,offerProps}))}FreeTagCapsule.displayName="FreeTagCapsule",ProgramCard.displayName="ProgramCard",ProgramCard.propTypes={programName:prop_types_default().string.isRequired,programDescription:prop_types_default().string,startsIn:prop_types_default().instanceOf(Date),endsAt:prop_types_default().instanceOf(Date),signInDate:prop_types_default().instanceOf(Date),freeTrialExpireDate:prop_types_default().instanceOf(Date),haveFreeTrial:prop_types_default().bool,icon:prop_types_default().string.isRequired,syllabusContent:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),courseProgress:prop_types_default().number,stTranslation:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),lessonNumber:prop_types_default().number,isLoading:prop_types_default().bool,width:prop_types_default().string,assistants:prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().any])),teacher:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),iconBackground:prop_types_default().string,handleChoose:prop_types_default().func,isHiddenOnPrework:prop_types_default().bool,isMarketingCourse:prop_types_default().bool,iconLink:prop_types_default().string,isAvailableAsSaas:prop_types_default().bool,subscriptionStatus:prop_types_default().string,subscription:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),bullets:prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().any])),background:prop_types_default().string,isLoadingPageContent:prop_types_default().bool,isFinantialStatusLate:prop_types_default().bool},ProgramCard.defaultProps={stTranslation:null,programDescription:null,startsIn:null,endsAt:null,signInDate:null,haveFreeTrial:!1,syllabusContent:null,courseProgress:null,freeTrialExpireDate:null,lessonNumber:null,isLoading:!1,width:"292px",assistants:[],teacher:null,iconBackground:"",handleChoose:function handleChoose(){},isHiddenOnPrework:!1,isMarketingCourse:!1,iconLink:"",isAvailableAsSaas:!1,subscriptionStatus:"",subscription:{},bullets:[],background:"",isLoadingPageContent:!1,isFinantialStatusLate:!1},ProgramCard.__docgenInfo={description:"",methods:[],displayName:"ProgramCard",props:{stTranslation:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},programDescription:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},startsIn:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"instanceOf",value:"Date"},required:!1},endsAt:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"instanceOf",value:"Date"},required:!1},signInDate:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"instanceOf",value:"Date"},required:!1},haveFreeTrial:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},syllabusContent:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},courseProgress:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"number"},required:!1},freeTrialExpireDate:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"instanceOf",value:"Date"},required:!1},lessonNumber:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"number"},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},width:{defaultValue:{value:"'292px'",computed:!1},description:"",type:{name:"string"},required:!1},assistants:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"any"}]}},required:!1},teacher:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},iconBackground:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},handleChoose:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},isHiddenOnPrework:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isMarketingCourse:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},iconLink:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},isAvailableAsSaas:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},subscriptionStatus:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},subscription:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},bullets:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"any"}]}},required:!1},background:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},isLoadingPageContent:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isFinantialStatusLate:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},programName:{description:"",type:{name:"string"},required:!0},icon:{description:"",type:{name:"string"},required:!0}}};const components_ProgramCard=(0,react.memo)(ProgramCard);var _Default$parameters,_Default$parameters2,_isLoading$parameters,_isLoading$parameters2,_courseNotStarted$par,_courseNotStarted$par2,_ongoingPaidCourse$pa,_ongoingPaidCourse$pa2,_ongoingFreeTrial$par,_ongoingFreeTrial$par2,_expiredFreeTrial$par,_expiredFreeTrial$par2,_isHiddenOnPrework$pa,_isHiddenOnPrework$pa2,_courseHasStarted$par,_courseHasStarted$par2,_isNotAvailableForSaa,_isNotAvailableForSaa2,_isAvailableForSaas$p,_isAvailableForSaas$p2,_isAvailableForSaasCa,_isAvailableForSaasCa2,_freeTrialNoValidUnti,_freeTrialNoValidUnti2,ProgramCard_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const ProgramCard_stories={title:"Components/ProgramCard",component:components_ProgramCard,argTypes:{isAvailableAsSaas:{control:{type:"boolean"}},subscriptionStatus:{control:{type:"select",options:["ACTIVE","FREE_TRIAL","FULLY_PAID","CANCELLED","PAYMENT_ISSUE"]}},programName:{control:{type:"string"}},programDescription:{control:{type:"string"}},isBought:{control:{type:"boolean"}},haveFreeTrial:{control:{type:"boolean"}},startsIn:{control:{type:"date"}},icon:{control:{type:"string"}},syllabusContent:{control:{type:"object"}},assistants:{control:{type:"object"}},isFreeTrial:{control:{type:"boolean"}},freeTrialExpireDate:{control:{type:"date"}},courseProgress:{control:{type:"number"}},lessonNumber:{control:{type:"number"}},lessonLink:{control:{type:"string"}}}};var Component=function Component(args,context){return ProgramCard_stories_jsx(components_ProgramCard,(0,esm_extends.Z)({stTranslation:context.parameters.i18n.store.data},args))};Component.displayName="Component";var teachers=[{isOnline:!0,user:{first_name:"Juan",last_name:"López",profile:{avatar_url:"/static/images/p1.png"}}}],mentors=[{isOnline:!0,user:{first_name:"Juan",last_name:"López",profile:{avatar_url:"/static/images/p1.png"}}},{isOnline:!0,user:{first_name:"John",last_name:"Doe",profile:{avatar_url:"/static/images/p2.png"}}},{isOnline:!0,user:{first_name:"Jane",last_name:"Doe",profile:{avatar_url:"/static/images/p3.png"}}},{isOnline:!0,user:{first_name:"Juan",last_name:"López",profile:{avatar_url:"/static/images/p1.png"}}},{isOnline:!0,user:{first_name:"John",last_name:"Doe",profile:{avatar_url:"/static/images/p2.png"}}},{isOnline:!0,user:{first_name:"Jane",last_name:"Doe",profile:{avatar_url:"/static/images/p3.png"}}}],Default=Component.bind({});Default.args={programName:"Data Science",programDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",startsIn:new Date((0,addDays.Z)(new Date,3)),icon:"coding",iconBackground:"blue.default",syllabusContent:{totalLessons:30,totalProjects:15,totalExercises:15,completedLessons:3,completedProjects:10,completedExercises:5},subscriptionStatus:"ACTIVE",assistants:mentors,teacher:teachers[0],haveFreeTrial:!0,isFreeTrial:!1,isBought:!1,freeTrialExpireDate:new Date((0,addDays.Z)(new Date,5)),lessonLink:"https://www.google.com",lessonNumber:1.2,courseProgress:7};var isLoading=Component.bind({});isLoading.args={programName:"Data Science",programDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",startsIn:new Date((0,addDays.Z)(new Date,3)),icon:"coding",iconBackground:"blue.default",isLoading:!0};var courseNotStarted=Component.bind({});courseNotStarted.args={programName:"Data Science",programDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",startsIn:new Date((0,addDays.Z)(new Date,3)),icon:"coding",iconBackground:"blue.default",assistants:mentors,teacher:teachers[0],subscriptionStatus:"ACTIVE",courseProgress:0,isAvailableAsSaas:!0,syllabusContent:{totalLessons:30,totalProjects:15,totalExercises:15,completedLessons:3,completedProjects:10,completedExercises:5}};var ongoingPaidCourse=Component.bind({});ongoingPaidCourse.args=(0,defineProperty.Z)({programName:"Data Science",programDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",startsIn:new Date((0,subDays.Z)(new Date,1)),icon:"coding",iconBackground:"blue.default",syllabusContent:{totalLessons:30,totalProjects:15,totalExercises:15,completedLessons:3,completedProjects:10,completedExercises:5},assistants:mentors,teacher:teachers[0],courseProgress:34,isAvailableAsSaas:!1,subscriptionStatus:"FULLY_PAID",freeTrialExpireDate:new Date((0,addDays.Z)(new Date,5)),lessonNumber:1.2},"courseProgress",34);var ongoingFreeTrial=Component.bind({});ongoingFreeTrial.args={programName:"Data Science",programDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",startsIn:new Date((0,subDays.Z)(new Date,1)),icon:"coding",iconBackground:"blue.default",syllabusContent:{totalLessons:30,totalProjects:15,totalExercises:15,completedLessons:3,completedProjects:10,completedExercises:5},assistants:mentors,teacher:teachers[0],haveFreeTrial:!1,isAvailableAsSaas:!0,subscriptionStatus:"FREE_TRIAL",freeTrialExpireDate:new Date((0,addDays.Z)(new Date,5)),lessonNumber:1.2,courseProgress:34};var expiredFreeTrial=Component.bind({});expiredFreeTrial.args={programName:"Data Science",programDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",startsIn:new Date((0,addDays.Z)(new Date,3)),icon:"coding",iconBackground:"blue.default",syllabusContent:{totalLessons:30,totalProjects:15,totalExercises:15,completedLessons:3,completedProjects:10,completedExercises:5},assistants:mentors,teacher:teachers[0],haveFreeTrial:!1,isAvailableAsSaas:!0,subscriptionStatus:"FREE_TRIAL",freeTrialExpireDate:new Date((0,subDays.Z)(new Date,3)),lessonNumber:1.2,courseProgress:34};var isHiddenOnPrework=Component.bind({});isHiddenOnPrework.args={programName:"Data Science",programDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",startsIn:new Date((0,addDays.Z)(new Date,3)),icon:"coding",subscriptionStatus:"FREE_TRIAL",iconBackground:"blue.default",syllabusContent:{totalLessons:30,totalProjects:15,totalExercises:15,completedLessons:3,completedProjects:10,completedExercises:5},assistants:mentors,teacher:teachers[0],haveFreeTrial:!1,freeTrialExpireDate:new Date((0,addDays.Z)(new Date,0)),lessonNumber:1.2,courseProgress:34,isHiddenOnPrework:!0};var courseHasStarted=Component.bind({});courseHasStarted.args={programName:"Data Science",programDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",startsIn:new Date((0,subMinutes.Z)(new Date,128)),isAvailableAsSaas:!0,subscriptionStatus:"ACTIVE",icon:"coding",iconBackground:"blue.default",assistants:mentors,teacher:teachers[0],syllabusContent:{totalLessons:30,totalProjects:15,totalExercises:15,completedLessons:3,completedProjects:10,completedExercises:5}};var isNotAvailableForSaas=Component.bind({});isNotAvailableForSaas.args={programName:"Data Science",programDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",startsIn:new Date((0,subDays.Z)(new Date,1)),isAvailableAsSaas:!1,icon:"coding",iconBackground:"blue.default",assistants:mentors,teacher:teachers[0],courseProgress:15,syllabusContent:{totalLessons:30,totalProjects:15,totalExercises:15,completedLessons:3,completedProjects:10,completedExercises:5}};var isAvailableForSaas=Component.bind({});isAvailableForSaas.args={programName:"Data Science",programDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",startsIn:new Date((0,subDays.Z)(new Date,1)),isAvailableAsSaas:!0,icon:"coding",iconBackground:"blue.default",assistants:mentors,teacher:teachers[0],courseProgress:15,syllabusContent:{totalLessons:30,totalProjects:15,totalExercises:15,completedLessons:3,completedProjects:10,completedExercises:5},subscriptionStatus:"FREE_TRIAL",freeTrialExpireDate:new Date((0,addDays.Z)(new Date,5))};var isAvailableForSaasCancelled=Component.bind({});isAvailableForSaasCancelled.args={programName:"Data Science",programDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",startsIn:new Date((0,subDays.Z)(new Date,1)),isAvailableAsSaas:!0,icon:"coding",iconBackground:"blue.default",assistants:mentors,teacher:teachers[0],courseProgress:15,syllabusContent:{totalLessons:30,totalProjects:15,totalExercises:15,completedLessons:3,completedProjects:10,completedExercises:5},subscriptionStatus:"CANCELLED",freeTrialExpireDate:new Date((0,addDays.Z)(new Date,5))};var freeTrialNoValidUntil=Component.bind({});freeTrialNoValidUntil.args={programName:"Data Science",programDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",startsIn:new Date((0,subDays.Z)(new Date,1)),isAvailableAsSaas:!0,icon:"coding",iconBackground:"blue.default",assistants:mentors,teacher:teachers[0],syllabusContent:{totalLessons:30,totalProjects:15,totalExercises:15,completedLessons:3,completedProjects:10,completedExercises:5},subscriptionStatus:"FREE_TRIAL"},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"(args, context) => {\n  return <ProgramCard stTranslation={context.parameters.i18n.store.data} {...args} />;\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),isLoading.parameters=_objectSpread(_objectSpread({},isLoading.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_isLoading$parameters=isLoading.parameters)||void 0===_isLoading$parameters?void 0:_isLoading$parameters.docs),{},{source:_objectSpread({originalSource:"(args, context) => {\n  return <ProgramCard stTranslation={context.parameters.i18n.store.data} {...args} />;\n}"},null===(_isLoading$parameters2=isLoading.parameters)||void 0===_isLoading$parameters2||null===(_isLoading$parameters2=_isLoading$parameters2.docs)||void 0===_isLoading$parameters2?void 0:_isLoading$parameters2.source)})}),courseNotStarted.parameters=_objectSpread(_objectSpread({},courseNotStarted.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_courseNotStarted$par=courseNotStarted.parameters)||void 0===_courseNotStarted$par?void 0:_courseNotStarted$par.docs),{},{source:_objectSpread({originalSource:"(args, context) => {\n  return <ProgramCard stTranslation={context.parameters.i18n.store.data} {...args} />;\n}"},null===(_courseNotStarted$par2=courseNotStarted.parameters)||void 0===_courseNotStarted$par2||null===(_courseNotStarted$par2=_courseNotStarted$par2.docs)||void 0===_courseNotStarted$par2?void 0:_courseNotStarted$par2.source)})}),ongoingPaidCourse.parameters=_objectSpread(_objectSpread({},ongoingPaidCourse.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ongoingPaidCourse$pa=ongoingPaidCourse.parameters)||void 0===_ongoingPaidCourse$pa?void 0:_ongoingPaidCourse$pa.docs),{},{source:_objectSpread({originalSource:"(args, context) => {\n  return <ProgramCard stTranslation={context.parameters.i18n.store.data} {...args} />;\n}"},null===(_ongoingPaidCourse$pa2=ongoingPaidCourse.parameters)||void 0===_ongoingPaidCourse$pa2||null===(_ongoingPaidCourse$pa2=_ongoingPaidCourse$pa2.docs)||void 0===_ongoingPaidCourse$pa2?void 0:_ongoingPaidCourse$pa2.source)})}),ongoingFreeTrial.parameters=_objectSpread(_objectSpread({},ongoingFreeTrial.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ongoingFreeTrial$par=ongoingFreeTrial.parameters)||void 0===_ongoingFreeTrial$par?void 0:_ongoingFreeTrial$par.docs),{},{source:_objectSpread({originalSource:"(args, context) => {\n  return <ProgramCard stTranslation={context.parameters.i18n.store.data} {...args} />;\n}"},null===(_ongoingFreeTrial$par2=ongoingFreeTrial.parameters)||void 0===_ongoingFreeTrial$par2||null===(_ongoingFreeTrial$par2=_ongoingFreeTrial$par2.docs)||void 0===_ongoingFreeTrial$par2?void 0:_ongoingFreeTrial$par2.source)})}),expiredFreeTrial.parameters=_objectSpread(_objectSpread({},expiredFreeTrial.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_expiredFreeTrial$par=expiredFreeTrial.parameters)||void 0===_expiredFreeTrial$par?void 0:_expiredFreeTrial$par.docs),{},{source:_objectSpread({originalSource:"(args, context) => {\n  return <ProgramCard stTranslation={context.parameters.i18n.store.data} {...args} />;\n}"},null===(_expiredFreeTrial$par2=expiredFreeTrial.parameters)||void 0===_expiredFreeTrial$par2||null===(_expiredFreeTrial$par2=_expiredFreeTrial$par2.docs)||void 0===_expiredFreeTrial$par2?void 0:_expiredFreeTrial$par2.source)})}),isHiddenOnPrework.parameters=_objectSpread(_objectSpread({},isHiddenOnPrework.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_isHiddenOnPrework$pa=isHiddenOnPrework.parameters)||void 0===_isHiddenOnPrework$pa?void 0:_isHiddenOnPrework$pa.docs),{},{source:_objectSpread({originalSource:"(args, context) => {\n  return <ProgramCard stTranslation={context.parameters.i18n.store.data} {...args} />;\n}"},null===(_isHiddenOnPrework$pa2=isHiddenOnPrework.parameters)||void 0===_isHiddenOnPrework$pa2||null===(_isHiddenOnPrework$pa2=_isHiddenOnPrework$pa2.docs)||void 0===_isHiddenOnPrework$pa2?void 0:_isHiddenOnPrework$pa2.source)})}),courseHasStarted.parameters=_objectSpread(_objectSpread({},courseHasStarted.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_courseHasStarted$par=courseHasStarted.parameters)||void 0===_courseHasStarted$par?void 0:_courseHasStarted$par.docs),{},{source:_objectSpread({originalSource:"(args, context) => {\n  return <ProgramCard stTranslation={context.parameters.i18n.store.data} {...args} />;\n}"},null===(_courseHasStarted$par2=courseHasStarted.parameters)||void 0===_courseHasStarted$par2||null===(_courseHasStarted$par2=_courseHasStarted$par2.docs)||void 0===_courseHasStarted$par2?void 0:_courseHasStarted$par2.source)})}),isNotAvailableForSaas.parameters=_objectSpread(_objectSpread({},isNotAvailableForSaas.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_isNotAvailableForSaa=isNotAvailableForSaas.parameters)||void 0===_isNotAvailableForSaa?void 0:_isNotAvailableForSaa.docs),{},{source:_objectSpread({originalSource:"(args, context) => {\n  return <ProgramCard stTranslation={context.parameters.i18n.store.data} {...args} />;\n}"},null===(_isNotAvailableForSaa2=isNotAvailableForSaas.parameters)||void 0===_isNotAvailableForSaa2||null===(_isNotAvailableForSaa2=_isNotAvailableForSaa2.docs)||void 0===_isNotAvailableForSaa2?void 0:_isNotAvailableForSaa2.source)})}),isAvailableForSaas.parameters=_objectSpread(_objectSpread({},isAvailableForSaas.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_isAvailableForSaas$p=isAvailableForSaas.parameters)||void 0===_isAvailableForSaas$p?void 0:_isAvailableForSaas$p.docs),{},{source:_objectSpread({originalSource:"(args, context) => {\n  return <ProgramCard stTranslation={context.parameters.i18n.store.data} {...args} />;\n}"},null===(_isAvailableForSaas$p2=isAvailableForSaas.parameters)||void 0===_isAvailableForSaas$p2||null===(_isAvailableForSaas$p2=_isAvailableForSaas$p2.docs)||void 0===_isAvailableForSaas$p2?void 0:_isAvailableForSaas$p2.source)})}),isAvailableForSaasCancelled.parameters=_objectSpread(_objectSpread({},isAvailableForSaasCancelled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_isAvailableForSaasCa=isAvailableForSaasCancelled.parameters)||void 0===_isAvailableForSaasCa?void 0:_isAvailableForSaasCa.docs),{},{source:_objectSpread({originalSource:"(args, context) => {\n  return <ProgramCard stTranslation={context.parameters.i18n.store.data} {...args} />;\n}"},null===(_isAvailableForSaasCa2=isAvailableForSaasCancelled.parameters)||void 0===_isAvailableForSaasCa2||null===(_isAvailableForSaasCa2=_isAvailableForSaasCa2.docs)||void 0===_isAvailableForSaasCa2?void 0:_isAvailableForSaasCa2.source)})}),freeTrialNoValidUntil.parameters=_objectSpread(_objectSpread({},freeTrialNoValidUntil.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_freeTrialNoValidUnti=freeTrialNoValidUntil.parameters)||void 0===_freeTrialNoValidUnti?void 0:_freeTrialNoValidUnti.docs),{},{source:_objectSpread({originalSource:"(args, context) => {\n  return <ProgramCard stTranslation={context.parameters.i18n.store.data} {...args} />;\n}"},null===(_freeTrialNoValidUnti2=freeTrialNoValidUntil.parameters)||void 0===_freeTrialNoValidUnti2||null===(_freeTrialNoValidUnti2=_freeTrialNoValidUnti2.docs)||void 0===_freeTrialNoValidUnti2?void 0:_freeTrialNoValidUnti2.source)})})}}]);