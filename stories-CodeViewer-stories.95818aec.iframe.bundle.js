"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9872],{"./src/stories/CodeViewer.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Logged:()=>Logged,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Logged$parameters,_Logged$parameters2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_common_components_CodeViewer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/common/components/CodeViewer.jsx"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"components/Code Viewer",component:_common_components_CodeViewer__WEBPACK_IMPORTED_MODULE_2__.ZP,argTypes:{allowNotLogged:{control:{type:"boolean"}},languagesData:{control:{type:"object"}}}};var Component=function Component(args,context){return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.xu,{width:(null==args?void 0:args.width)||"500px"},__jsx(_common_components_CodeViewer__WEBPACK_IMPORTED_MODULE_2__.ZP,args))};Component.displayName="Component";var Default=Component.bind({});Default.args={languagesData:[{label:"JS",language:"javascript",code:"console.log(1)"},{label:"Python",language:"python",code:"print(1)"},{label:"Html",language:"html",code:"\n  <h1>Hello world!</h1>\n  <div>\n    <p>\n      This is the html test\n    </p>\n  </div>\n"}]};var Logged=Component.bind({});Logged.args={languagesData:[{label:"JS",language:"javascript",code:"console.log(1)"},{label:"Python",language:"python",code:"print(1)"}],allowNotLogged:!0},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"(args, context) => {\n  return <Box width={args?.width || '500px'}>\n      <CodeViewer {...args} />\n    </Box>;\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Logged.parameters=_objectSpread(_objectSpread({},Logged.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Logged$parameters=Logged.parameters)||void 0===_Logged$parameters?void 0:_Logged$parameters.docs),{},{source:_objectSpread({originalSource:"(args, context) => {\n  return <Box width={args?.width || '500px'}>\n      <CodeViewer {...args} />\n    </Box>;\n}"},null===(_Logged$parameters2=Logged.parameters)||void 0===_Logged$parameters2||null===(_Logged$parameters2=_Logged$parameters2.docs)||void 0===_Logged$parameters2?void 0:_Logged$parameters2.source)})})},"./src/common/components/CodeViewer.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ao:()=>languagesLabels,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,nR:()=>languagesNames});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_home_runner_work_app_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_runner_work_app_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_home_runner_work_app_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@chakra-ui/toast/dist/chunk-ENIANY67.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-ZWUY3VWT.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-ZWLVZLKQ.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-TPBRUKW6.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-UCTXUILV.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("./node_modules/@chakra-ui/progress/dist/chunk-FQ7BGFQK.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-45U2LZ4E.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-7W5ZCZ76.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("./node_modules/@chakra-ui/transition/dist/chunk-LRMLOJAR.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("./node_modules/@chakra-ui/tooltip/dist/chunk-HEDGDMHJ.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("./node_modules/@chakra-ui/avatar/dist/chunk-WPAIWTI3.mjs"),next_router__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/router.js"),next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),prop_types__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_30___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_30__),_monaco_editor_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@monaco-editor/react/dist/index.mjs"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/index.js"),_utils_variables__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/utils/variables.js"),_js_modules_moduleMap_modalInfo__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/js_modules/moduleMap/modalInfo.jsx"),_hooks_useAuth__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/common/hooks/useAuth.js"),_hooks_useStyle__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/common/hooks/useStyle.js"),_Text__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/common/components/Text.jsx"),_Icon__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/common/components/Icon/index.jsx"),process=__webpack_require__("./node_modules/process/browser.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),_excluded=["languagesData","allowNotLogged","fileContext"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var notExecutables=["css","shell","windows","mac","linux"],languagesLabels={jsx:"JS",js:"JS",javascript:"JS",node:"Node.js","node.js":"Node.js",python:"Python",py:"Python",html:"Html",css:"CSS",windows:"Windows",mac:"MacOS",macos:"MacOS",linux:"Linux"},languagesNames={jsx:"javascript",js:"javascript",javascript:"javascript",node:"javascript","node.js":"javascript",python:"python",py:"python",html:"html",windows:"windows",mac:"macos",macos:"macos",linux:"shell"};function CodeViewer(_ref){var _languages$tabIndex,_languages$tabIndex3,_languages$tabIndex4,_languages$tabIndex5,languagesData=_ref.languagesData,allowNotLogged=_ref.allowNotLogged,fileContext=_ref.fileContext,rest=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_12__.Z)(_ref,_excluded),editorContainerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),router=(0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(),hexColor=(0,_hooks_useStyle__WEBPACK_IMPORTED_MODULE_13__.Z)().hexColor,t=(0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__.Z)("code-viewer").t,isAuthenticated=(0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_9__.Z)().isAuthenticated,toast=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.p)(),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),initialTouchY=_useState[0],setInitialTouchY=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),tabIndex=_useState2[0],setTabIndex=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),showModal=_useState3[0],setShowModal=_useState3[1],_useState4=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(languagesData),languages=_useState4[0],setLanguages=_useState4[1],defaultPlan=process.env.BASE_PLAN||"basic",isCodeForPreview=languages.some((function(_ref2){return"html"===_ref2.language.toLowerCase()})),isNotExecutable=notExecutables.includes(null===(_languages$tabIndex=languages[tabIndex])||void 0===_languages$tabIndex?void 0:_languages$tabIndex.language),handleTouchStart=function handleTouchStart(event){event.preventDefault(),setInitialTouchY(event.touches[0].clientY)},handleTouchMove=function handleTouchMove(event){if(_utils__WEBPACK_IMPORTED_MODULE_6__.FJ){event.preventDefault();var deltaY=event.touches[0].clientY-initialTouchY;document.body.scrollY=deltaY,window.scrollBy(0,-deltaY)}},getRigobotToken=function(){var _ref3=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__.Z)(_home_runner_work_app_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark((function _callee(){var rigobotToken,bcToken,resp,data;return _home_runner_work_app_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(rigobotToken=(0,_utils__WEBPACK_IMPORTED_MODULE_6__.qn)("rigobotToken"),(rigobotToken=JSON.parse(rigobotToken))&&!(rigobotToken.expires_at<(new Date).toISOString())){_context.next=12;break}return bcToken=(0,_utils__WEBPACK_IMPORTED_MODULE_6__.qn)("accessToken"),_context.next=6,fetch("".concat(_utils_variables__WEBPACK_IMPORTED_MODULE_7__.C5,"/v1/auth/me/token?breathecode_token=").concat(bcToken));case 6:return resp=_context.sent,_context.next=9,resp.json();case 9:data=_context.sent,(0,_utils__WEBPACK_IMPORTED_MODULE_6__.Nh)("rigobotToken",JSON.stringify(data)),rigobotToken=data;case 12:return _context.abrupt("return",rigobotToken.key);case 13:case"end":return _context.stop()}}),_callee)})));return function getRigobotToken(){return _ref3.apply(this,arguments)}}(),showCodePreview=function showCodePreview(){var html=languages.find((function(_ref4){return"html"===_ref4.language.toLowerCase()})),css=languages.find((function(_ref5){return"css"===_ref5.language.toLowerCase()})),js=languages.find((function(_ref6){return"javascript"===_ref6.language.toLowerCase()})),preview="\n      <html>\n        <head>\n          <style>".concat(null==css?void 0:css.code,"</style>\n        </head>\n        <body>\n          ").concat(null==html?void 0:html.code,"\n          <script>").concat(null==js?void 0:js.code,"<\/script>\n        </body>\n      </html>\n    "),updatedLanguages=languages.map((function(language){return _objectSpread(_objectSpread({},language),{},{output:preview})}));setLanguages(updatedLanguages)},run=function(){var _ref7=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__.Z)(_home_runner_work_app_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark((function _callee2(){var currLanguage,_languages$tabIndex2,code,language,path,rigobotToken,completionJob,endpoint,completionRequest,completion,_currLanguage;return _home_runner_work_app_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(!isCodeForPreview){_context2.next=4;break}showCodePreview(),_context2.next=34;break;case 4:if(!isAuthenticated&&!allowNotLogged){_context2.next=33;break}return _context2.prev=5,currLanguage=_objectSpread(_objectSpread({},languages[tabIndex]),{},{running:!0,output:null}),setLanguages([].concat((0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_16__.Z)(languages.slice(0,tabIndex)),[currLanguage],(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_16__.Z)(languages.slice(tabIndex+1)))),_languages$tabIndex2=languages[tabIndex],code=_languages$tabIndex2.code,language=_languages$tabIndex2.language,path=_languages$tabIndex2.path,_context2.next=11,getRigobotToken();case 11:return rigobotToken=_context2.sent,completionJob={execute_async:!1,include_organization_brief:!1,include_purpose_objective:!0},path?(endpoint="".concat(_utils_variables__WEBPACK_IMPORTED_MODULE_7__.C5,"/v1/prompting/completion/code-compiler-with-context/"),completionJob.inputs={main_file:"File path: ".concat(path,"\nFile content:\n").concat(code),language_and_version:language,secondary_files:fileContext}):(endpoint="".concat(_utils_variables__WEBPACK_IMPORTED_MODULE_7__.C5,"/v1/prompting/completion/code-compiler/"),completionJob.inputs={code,language_and_version:language}),_context2.next=16,fetch(endpoint,{method:"POST",body:JSON.stringify(completionJob),headers:{"Content-Type":"application/json",Authorization:"Token ".concat(rigobotToken)}});case 16:return completionRequest=_context2.sent,_context2.next=19,completionRequest.json();case 19:completion=_context2.sent,currLanguage.output=completion.answer.replace("---terminal output---","").replace("\n",""),currLanguage.running=!1,setLanguages([].concat((0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_16__.Z)(languages.slice(0,tabIndex)),[currLanguage],(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_16__.Z)(languages.slice(tabIndex+1)))),_context2.next=31;break;case 25:_context2.prev=25,_context2.t0=_context2.catch(5),console.log(_context2.t0),_currLanguage=_objectSpread(_objectSpread({},languages[tabIndex]),{},{running:!1}),setLanguages([].concat((0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_16__.Z)(languages.slice(0,tabIndex)),[_currLanguage],(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_16__.Z)(languages.slice(tabIndex+1)))),toast({position:"top",title:"string"==typeof _context2.t0?_context2.t0:t("error"),status:"error",duration:7e3,isClosable:!0});case 31:_context2.next=34;break;case 33:setShowModal(!0);case 34:case"end":return _context2.stop()}}),_callee2,null,[[5,25]])})));return function run(){return _ref7.apply(this,arguments)}}(),handleEditorDidMount=function handleEditorDidMount(editor,monaco){monaco.editor.defineTheme("my-theme",{base:"vs-dark",inherit:!0,rules:[],colors:{"editor.background":"#00041A"}}),monaco.editor.setTheme("my-theme")};return null==languagesData||0===languagesData.length?null:__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.xu,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_18__.Z)({overflowX:"hidden",width:"100%"},rest),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.m,{position:"relative",onChange:function onChange(index){return setTabIndex(index)},variant:"unstyled"},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.xu,{borderRadius:"4px 4px 0 0",alignItems:"center",padding:"0 6px",background:"#00041A",display:"flex",justifyContent:"space-between"},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__.t,{width:"fit-content"},languages.map((function(_ref8,i){var label=_ref8.label;return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_21__.O,{key:label,color:i===tabIndex?"blue.500":"white"},label)}))),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_22__.c,{mt:"30px",height:"2px",bg:"blue.500",borderRadius:"1px"}),(!isNotExecutable||"css"===(null===(_languages$tabIndex3=languages[tabIndex])||void 0===_languages$tabIndex3?void 0:_languages$tabIndex3.language)&&isCodeForPreview)&&""!==(null===(_languages$tabIndex4=languages[tabIndex])||void 0===_languages$tabIndex4?void 0:_languages$tabIndex4.code.trim())&&__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,null!==(_languages$tabIndex5=languages[tabIndex])&&void 0!==_languages$tabIndex5&&_languages$tabIndex5.running?__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_23__.D,{isIndeterminate:!0,color:hexColor.blueDefault,size:"32px"}):__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_24__.z,{_hover:{bg:"#ffffff29"},onClick:run,variant:"ghost",size:"sm",color:"white"},__jsx(_Icon__WEBPACK_IMPORTED_MODULE_11__.Z,{icon:"play",width:"14px",height:"14px",style:{marginRight:"5px"},color:"white"}),t(isCodeForPreview?"preview":"run")))),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_25__.n,null,languages.map((function(_ref9,i){var code=_ref9.code,language=_ref9.language,output=_ref9.output,running=_ref9.running;return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_26__.x,{padding:"0"},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.xu,{ref:editorContainerRef,onTouchStart:handleTouchStart,onTouchMove:handleTouchMove,height:"290px",borderRadius:!output&&"0 0 4px 4px",overflow:"hidden"},__jsx(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_5__.ZP,{theme:"my-theme",value:code,onChange:function onChange(value){var currLanguage=_objectSpread(_objectSpread({},languages[i]),{},{code:value});setLanguages([].concat((0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_16__.Z)(languages.slice(0,i)),[currLanguage],(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_16__.Z)(languages.slice(i+1))))},defaultLanguage:language,height:"290px",options:{scrollBeyondLastLine:!1,borderRadius:"4px",scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},cursorStyle:"line"},onMount:handleEditorDidMount})),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_27__.U,{in:running||null!=output,offsetY:"20px"},isCodeForPreview?__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.xu,{borderTop:"1px solid #4A5568",borderRadius:"0 0 4px 4px"},__jsx("iframe",{title:"Live Preview",srcDoc:output,style:{width:"100%",height:"300px",border:"1px solid #4A5568",borderRadius:"0 0 4px 4px"}})):__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.xu,{borderTop:"1px solid #4A5568",color:"white",padding:"20px",background:"#00041A",borderRadius:"0 0 4px 4px"},__jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.Z,{display:"flex",alignItems:"center",gap:"5px",fontWeight:"700",fontSize:"14px",marginBottom:"16px",width:"fit-content",borderBottom:"2px solid white"},t("terminal"),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__.u,{label:t("loading-output"),placement:"right",hasArrow:!0},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.xu,null,__jsx(_Icon__WEBPACK_IMPORTED_MODULE_11__.Z,{icon:"info",width:"14px",height:"14px",color:hexColor.blueDefault})))),__jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.Z,{whiteSpace:"pre-line",fontFamily:"monospace",padding:"8px"},output))))})))),__jsx(_js_modules_moduleMap_modalInfo__WEBPACK_IMPORTED_MODULE_8__.Z,{isOpen:showModal,onClose:function onClose(){return setShowModal(!1)},headerStyles:{textAlign:"center"},title:t("log-in-modal.title"),childrenDescription:__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.xu,{display:"flex",flexDirection:"column",alignItems:"center",gridGap:"17px"},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_29__.q,{src:"".concat(_utils_variables__WEBPACK_IMPORTED_MODULE_7__.k1,"/static/img/avatar-1.png"),border:"3px solid #0097CD",width:"91px",height:"91px",borderRadius:"50px"}),__jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.Z,{size:"14px",textAlign:"center"},t("log-in-modal.text"))),closeText:t("log-in-modal.login"),closeButtonVariant:"outline",closeButtonStyles:{borderRadius:"3px",color:hexColor.blueDefault,borderColor:hexColor.blueDefault},buttonHandlerStyles:{variant:"default"},closeActionHandler:function closeActionHandler(){(0,_utils__WEBPACK_IMPORTED_MODULE_6__.Nh)("redirect",null==router?void 0:router.asPath),router.push("/login")},actionHandler:function actionHandler(){(0,_utils__WEBPACK_IMPORTED_MODULE_6__.Nh)("redirect",null==router?void 0:router.asPath),router.push("/checkout?internal_cta_placement=codeviewer&plan=".concat(defaultPlan))},handlerText:t("log-in-modal.signup")}))}CodeViewer.displayName="CodeViewer",CodeViewer.propTypes={languagesData:prop_types__WEBPACK_IMPORTED_MODULE_30___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_30___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_30___default().any])).isRequired,allowNotLogged:prop_types__WEBPACK_IMPORTED_MODULE_30___default().bool,fileContext:prop_types__WEBPACK_IMPORTED_MODULE_30___default().string},CodeViewer.defaultProps={allowNotLogged:!1,fileContext:""},CodeViewer.__docgenInfo={description:"",methods:[],displayName:"CodeViewer",props:{allowNotLogged:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},fileContext:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},languagesData:{description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"any"}]}},required:!0}}};const __WEBPACK_DEFAULT_EXPORT__=CodeViewer}}]);