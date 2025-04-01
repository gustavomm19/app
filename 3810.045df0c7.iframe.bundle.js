"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3810],{"./node_modules/@chakra-ui/layout/dist/chunk-YTV6DHKL.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>Link});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Link=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.R)((function Link2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.Vl)("Link",props),{className,isExternal,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.MN)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.B.a,{target:isExternal?"_blank":void 0,rel:isExternal?"noopener":void 0,ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-link",className),...rest,__css:styles})}));Link.displayName="Link"},"./node_modules/@chakra-ui/lazy-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function lazyDisclosure(options){const{wasSelected,enabled,isSelected,mode="unmount"}=options;return!enabled||(!!isSelected||!("keepMounted"!==mode||!wasSelected))}__webpack_require__.d(__webpack_exports__,{q:()=>lazyDisclosure})},"./node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"./node_modules/@chakra-ui/tabs/dist/chunk-ROBISDLO.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{at:()=>TabsDescendantsProvider,O_:()=>TabsProvider,Vh:()=>useTab,Ss:()=>useTabIndicator,$c:()=>useTabList,Jn:()=>useTabPanel,uo:()=>useTabPanels,uc:()=>useTabs});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_use_merge_refs_dist=__webpack_require__("./node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs");function isValidElement(event){const element=event.target,{tagName,isContentEditable}=element;return"INPUT"!==tagName&&"TEXTAREA"!==tagName&&!0!==isContentEditable}function useClickable(props={}){const{ref:htmlRef,isDisabled,isFocusable,clickOnEnter=!0,clickOnSpace=!0,onMouseDown,onMouseUp,onClick,onKeyDown,onKeyUp,tabIndex:tabIndexProp,onMouseOver,onMouseLeave,...htmlProps}=props,[isButton,setIsButton]=(0,react.useState)(!0),[isPressed,setIsPressed]=(0,react.useState)(!1),listeners=function useEventListeners(){const listeners=(0,react.useRef)(new Map),currentListeners=listeners.current,add=(0,react.useCallback)(((el,type,listener,options)=>{listeners.current.set(listener,{type,el,options}),el.addEventListener(type,listener,options)}),[]),remove=(0,react.useCallback)(((el,type,listener,options)=>{el.removeEventListener(type,listener,options),listeners.current.delete(listener)}),[]);return(0,react.useEffect)((()=>()=>{currentListeners.forEach(((value,key)=>{remove(value.el,value.type,key,value.options)}))}),[remove,currentListeners]),{add,remove}}(),tabIndex=isButton?tabIndexProp:tabIndexProp||0,trulyDisabled=isDisabled&&!isFocusable,handleClick=(0,react.useCallback)((event=>{if(isDisabled)return event.stopPropagation(),void event.preventDefault();event.currentTarget.focus(),null==onClick||onClick(event)}),[isDisabled,onClick]),onDocumentKeyUp=(0,react.useCallback)((e=>{isPressed&&isValidElement(e)&&(e.preventDefault(),e.stopPropagation(),setIsPressed(!1),listeners.remove(document,"keyup",onDocumentKeyUp,!1))}),[isPressed,listeners]),handleKeyDown=(0,react.useCallback)((event=>{if(null==onKeyDown||onKeyDown(event),isDisabled||event.defaultPrevented||event.metaKey)return;if(!isValidElement(event.nativeEvent)||isButton)return;const shouldClickOnEnter=clickOnEnter&&"Enter"===event.key;if(clickOnSpace&&" "===event.key&&(event.preventDefault(),setIsPressed(!0)),shouldClickOnEnter){event.preventDefault();event.currentTarget.click()}listeners.add(document,"keyup",onDocumentKeyUp,!1)}),[isDisabled,isButton,onKeyDown,clickOnEnter,clickOnSpace,listeners,onDocumentKeyUp]),handleKeyUp=(0,react.useCallback)((event=>{if(null==onKeyUp||onKeyUp(event),isDisabled||event.defaultPrevented||event.metaKey)return;if(!isValidElement(event.nativeEvent)||isButton)return;if(clickOnSpace&&" "===event.key){event.preventDefault(),setIsPressed(!1);event.currentTarget.click()}}),[clickOnSpace,isButton,isDisabled,onKeyUp]),onDocumentMouseUp=(0,react.useCallback)((event=>{0===event.button&&(setIsPressed(!1),listeners.remove(document,"mouseup",onDocumentMouseUp,!1))}),[listeners]),handleMouseDown=(0,react.useCallback)((event=>{if(0!==event.button)return;if(isDisabled)return event.stopPropagation(),void event.preventDefault();isButton||setIsPressed(!0);event.currentTarget.focus({preventScroll:!0}),listeners.add(document,"mouseup",onDocumentMouseUp,!1),null==onMouseDown||onMouseDown(event)}),[isDisabled,isButton,onMouseDown,listeners,onDocumentMouseUp]),handleMouseUp=(0,react.useCallback)((event=>{0===event.button&&(isButton||setIsPressed(!1),null==onMouseUp||onMouseUp(event))}),[onMouseUp,isButton]),handleMouseOver=(0,react.useCallback)((event=>{isDisabled?event.preventDefault():null==onMouseOver||onMouseOver(event)}),[isDisabled,onMouseOver]),handleMouseLeave=(0,react.useCallback)((event=>{isPressed&&(event.preventDefault(),setIsPressed(!1)),null==onMouseLeave||onMouseLeave(event)}),[isPressed,onMouseLeave]),ref=(0,react_use_merge_refs_dist.Px)(htmlRef,(node=>{node&&"BUTTON"!==node.tagName&&setIsButton(!1)}));return isButton?{...htmlProps,ref,type:"button","aria-disabled":trulyDisabled?void 0:isDisabled,disabled:trulyDisabled,onClick:handleClick,onMouseDown,onMouseUp,onKeyUp,onKeyDown,onMouseOver,onMouseLeave}:{...htmlProps,ref,role:"button","data-active":(0,dist.sE)(isPressed),"aria-disabled":isDisabled?"true":void 0,tabIndex:trulyDisabled?void 0:tabIndex,onClick:handleClick,onMouseDown:handleMouseDown,onMouseUp:handleMouseUp,onKeyUp:handleKeyUp,onKeyDown:handleKeyDown,onMouseOver:handleMouseOver,onMouseLeave:handleMouseLeave}}var __defProp=Object.defineProperty,__publicField=(obj,key,value)=>(((obj,key,value)=>{key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value})(obj,"symbol"!=typeof key?key+"":key,value),value);function sortNodes(nodes){return nodes.sort(((a,b)=>{const compare=a.compareDocumentPosition(b);if(compare&Node.DOCUMENT_POSITION_FOLLOWING||compare&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(compare&Node.DOCUMENT_POSITION_PRECEDING||compare&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(compare&Node.DOCUMENT_POSITION_DISCONNECTED||compare&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function getNextIndex(current,max,loop){let next=current+1;return loop&&next>=max&&(next=0),next}function getPrevIndex(current,max,loop){let next=current-1;return loop&&next<0&&(next=max),next}var useSafeLayoutEffect="undefined"!=typeof window?react.useLayoutEffect:react.useEffect,DescendantsManager=class{constructor(){__publicField(this,"descendants",new Map),__publicField(this,"register",(nodeOrOptions=>{var el;if(null!=nodeOrOptions)return"object"==typeof(el=nodeOrOptions)&&"nodeType"in el&&el.nodeType===Node.ELEMENT_NODE?this.registerNode(nodeOrOptions):node=>{this.registerNode(node,nodeOrOptions)}})),__publicField(this,"unregister",(node=>{this.descendants.delete(node);const sorted=sortNodes(Array.from(this.descendants.keys()));this.assignIndex(sorted)})),__publicField(this,"destroy",(()=>{this.descendants.clear()})),__publicField(this,"assignIndex",(descendants=>{this.descendants.forEach((descendant=>{const index=descendants.indexOf(descendant.node);descendant.index=index,descendant.node.dataset.index=descendant.index.toString()}))})),__publicField(this,"count",(()=>this.descendants.size)),__publicField(this,"enabledCount",(()=>this.enabledValues().length)),__publicField(this,"values",(()=>Array.from(this.descendants.values()).sort(((a,b)=>a.index-b.index)))),__publicField(this,"enabledValues",(()=>this.values().filter((descendant=>!descendant.disabled)))),__publicField(this,"item",(index=>{if(0!==this.count())return this.values()[index]})),__publicField(this,"enabledItem",(index=>{if(0!==this.enabledCount())return this.enabledValues()[index]})),__publicField(this,"first",(()=>this.item(0))),__publicField(this,"firstEnabled",(()=>this.enabledItem(0))),__publicField(this,"last",(()=>this.item(this.descendants.size-1))),__publicField(this,"lastEnabled",(()=>{const lastIndex=this.enabledValues().length-1;return this.enabledItem(lastIndex)})),__publicField(this,"indexOf",(node=>{var _a,_b;return node&&null!=(_b=null==(_a=this.descendants.get(node))?void 0:_a.index)?_b:-1})),__publicField(this,"enabledIndexOf",(node=>null==node?-1:this.enabledValues().findIndex((i=>i.node.isSameNode(node))))),__publicField(this,"next",((index,loop=!0)=>{const next=getNextIndex(index,this.count(),loop);return this.item(next)})),__publicField(this,"nextEnabled",((index,loop=!0)=>{const item=this.item(index);if(!item)return;const nextEnabledIndex=getNextIndex(this.enabledIndexOf(item.node),this.enabledCount(),loop);return this.enabledItem(nextEnabledIndex)})),__publicField(this,"prev",((index,loop=!0)=>{const prev=getPrevIndex(index,this.count()-1,loop);return this.item(prev)})),__publicField(this,"prevEnabled",((index,loop=!0)=>{const item=this.item(index);if(!item)return;const prevEnabledIndex=getPrevIndex(this.enabledIndexOf(item.node),this.enabledCount()-1,loop);return this.enabledItem(prevEnabledIndex)})),__publicField(this,"registerNode",((node,options)=>{if(!node||this.descendants.has(node))return;const sorted=sortNodes(Array.from(this.descendants.keys()).concat(node));(null==options?void 0:options.disabled)&&(options.disabled=!!options.disabled);const descendant={node,index:-1,...options};this.descendants.set(node,descendant),this.assignIndex(sorted)}))}},react_context_dist=__webpack_require__("./node_modules/@chakra-ui/react-context/dist/index.mjs");var[DescendantsContextProvider,useDescendantsContext]=(0,react_context_dist.q)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});var react_use_safe_layout_effect_dist=__webpack_require__("./node_modules/@chakra-ui/react-use-safe-layout-effect/dist/index.mjs"),react_use_callback_ref_dist=__webpack_require__("./node_modules/@chakra-ui/react-use-callback-ref/dist/index.mjs");var react_children_utils_dist=__webpack_require__("./node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),lazy_utils_dist=__webpack_require__("./node_modules/@chakra-ui/lazy-utils/dist/index.mjs"),[TabsDescendantsProvider,useTabsDescendantsContext,useTabsDescendants,useTabsDescendant]=function createDescendantContext(){return[DescendantsContextProvider,()=>useDescendantsContext(),()=>function useDescendants(){const descendants=(0,react.useRef)(new DescendantsManager);return useSafeLayoutEffect((()=>()=>descendants.current.destroy())),descendants.current}(),options=>function useDescendant(options){const descendants=useDescendantsContext(),[index,setIndex]=(0,react.useState)(-1),ref=(0,react.useRef)(null);useSafeLayoutEffect((()=>()=>{ref.current&&descendants.unregister(ref.current)}),[]),useSafeLayoutEffect((()=>{if(!ref.current)return;const dataIndex=Number(ref.current.dataset.index);index==dataIndex||Number.isNaN(dataIndex)||setIndex(dataIndex)}));const refCallback=options?descendants.register(options):descendants.register;return{descendants,index,enabledIndex:descendants.enabledIndexOf(ref.current),register:(0,react_use_merge_refs_dist.Px)(refCallback,ref)}}(options)]}();function useTabs(props){var _a;const{defaultIndex,onChange,index,isManual,isLazy,lazyBehavior="unmount",orientation="horizontal",direction="ltr",...htmlProps}=props,[focusedIndex,setFocusedIndex]=(0,react.useState)(null!=defaultIndex?defaultIndex:0),[selectedIndex,setSelectedIndex]=function useControllableState(props){const{value:valueProp,defaultValue,onChange,shouldUpdate=(prev,next)=>prev!==next}=props,onChangeProp=(0,react_use_callback_ref_dist.c)(onChange),shouldUpdateProp=(0,react_use_callback_ref_dist.c)(shouldUpdate),[uncontrolledState,setUncontrolledState]=(0,react.useState)(defaultValue),controlled=void 0!==valueProp,value=controlled?valueProp:uncontrolledState,setValue=(0,react_use_callback_ref_dist.c)((next=>{const nextValue="function"==typeof next?next(value):next;shouldUpdateProp(value,nextValue)&&(controlled||setUncontrolledState(nextValue),onChangeProp(nextValue))}),[controlled,onChangeProp,value,shouldUpdateProp]);return[value,setValue]}({defaultValue:null!=defaultIndex?defaultIndex:0,value:index,onChange});(0,react.useEffect)((()=>{null!=index&&setFocusedIndex(index)}),[index]);const descendants=useTabsDescendants(),uuid=(0,react.useId)();return{id:`tabs-${null!=(_a=props.id)?_a:uuid}`,selectedIndex,focusedIndex,setSelectedIndex,setFocusedIndex,isManual,isLazy,lazyBehavior,orientation,descendants,direction,htmlProps}}var[TabsProvider,useTabsContext]=(0,react_context_dist.q)({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"});function useTabList(props){const{focusedIndex,orientation,direction}=useTabsContext(),descendants=useTabsDescendantsContext(),onKeyDown=(0,react.useCallback)((event=>{const nextTab=()=>{var _a;const next=descendants.nextEnabled(focusedIndex);next&&(null==(_a=next.node)||_a.focus())},prevTab=()=>{var _a;const prev=descendants.prevEnabled(focusedIndex);prev&&(null==(_a=prev.node)||_a.focus())},isHorizontal="horizontal"===orientation,isVertical="vertical"===orientation,eventKey=event.key,ArrowStart="ltr"===direction?"ArrowLeft":"ArrowRight",ArrowEnd="ltr"===direction?"ArrowRight":"ArrowLeft",action={[ArrowStart]:()=>isHorizontal&&prevTab(),[ArrowEnd]:()=>isHorizontal&&nextTab(),ArrowDown:()=>isVertical&&nextTab(),ArrowUp:()=>isVertical&&prevTab(),Home:()=>{var _a;const first=descendants.firstEnabled();first&&(null==(_a=first.node)||_a.focus())},End:()=>{var _a;const last=descendants.lastEnabled();last&&(null==(_a=last.node)||_a.focus())}}[eventKey];action&&(event.preventDefault(),action(event))}),[descendants,focusedIndex,orientation,direction]);return{...props,role:"tablist","aria-orientation":orientation,onKeyDown:(0,dist.Hj)(props.onKeyDown,onKeyDown)}}function useTab(props){const{isDisabled,isFocusable,...htmlProps}=props,{setSelectedIndex,isManual,id,setFocusedIndex,selectedIndex}=useTabsContext(),{index,register}=useTabsDescendant({disabled:isDisabled&&!isFocusable}),isSelected=index===selectedIndex;return{...useClickable({...htmlProps,ref:(0,react_use_merge_refs_dist.Px)(register,props.ref),isDisabled,isFocusable,onClick:(0,dist.Hj)(props.onClick,(()=>{setSelectedIndex(index)}))}),id:makeTabId(id,index),role:"tab",tabIndex:isSelected?0:-1,type:"button","aria-selected":isSelected,"aria-controls":makeTabPanelId(id,index),onFocus:isDisabled?void 0:(0,dist.Hj)(props.onFocus,(()=>{setFocusedIndex(index);!isManual&&!(isDisabled&&isFocusable)&&setSelectedIndex(index)}))}}var[TabPanelProvider,useTabPanelContext]=(0,react_context_dist.q)({});function useTabPanels(props){const context=useTabsContext(),{id,selectedIndex}=context,children=(0,react_children_utils_dist.a)(props.children).map(((child,index)=>(0,react.createElement)(TabPanelProvider,{key:index,value:{isSelected:index===selectedIndex,id:makeTabPanelId(id,index),tabId:makeTabId(id,index),selectedIndex}},child)));return{...props,children}}function useTabPanel(props){const{children,...htmlProps}=props,{isLazy,lazyBehavior}=useTabsContext(),{isSelected,id,tabId}=useTabPanelContext(),hasBeenSelected=(0,react.useRef)(!1);isSelected&&(hasBeenSelected.current=!0);return{tabIndex:0,...htmlProps,children:(0,lazy_utils_dist.q)({wasSelected:hasBeenSelected.current,isSelected,enabled:isLazy,mode:lazyBehavior})?children:null,role:"tabpanel","aria-labelledby":tabId,hidden:!isSelected,id}}function useTabIndicator(){const context=useTabsContext(),descendants=useTabsDescendantsContext(),{selectedIndex,orientation}=context,isHorizontal="horizontal"===orientation,isVertical="vertical"===orientation,[rect,setRect]=(0,react.useState)((()=>isHorizontal?{left:0,width:0}:isVertical?{top:0,height:0}:void 0)),[hasMeasured,setHasMeasured]=(0,react.useState)(!1);return(0,react_use_safe_layout_effect_dist.U)((()=>{if(null==selectedIndex)return;const tab=descendants.item(selectedIndex);if(null==tab)return;isHorizontal&&setRect({left:tab.node.offsetLeft,width:tab.node.offsetWidth}),isVertical&&setRect({top:tab.node.offsetTop,height:tab.node.offsetHeight});const id=requestAnimationFrame((()=>{setHasMeasured(!0)}));return()=>{id&&cancelAnimationFrame(id)}}),[selectedIndex,isHorizontal,isVertical,descendants]),{position:"absolute",transitionProperty:"left, right, top, bottom, height, width",transitionDuration:hasMeasured?"200ms":"0ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",...rect}}function makeTabId(id,index){return`${id}--tab-${index}`}function makeTabPanelId(id,index){return`${id}--tabpanel-${index}`}},"./node_modules/@chakra-ui/tabs/dist/chunk-TPBRUKW6.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Tab});var _chunk_ZWUY3VWT_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-ZWUY3VWT.mjs"),_chunk_ROBISDLO_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-ROBISDLO.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Tab=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.R)((function Tab2(props,ref){const styles=(0,_chunk_ZWUY3VWT_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(),tabProps=(0,_chunk_ROBISDLO_mjs__WEBPACK_IMPORTED_MODULE_3__.Vh)({...props,ref}),tabStyles={outline:"0",display:"flex",alignItems:"center",justifyContent:"center",...styles.tab};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.B.button,{...tabProps,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-tabs__tab",props.className),__css:tabStyles})}));Tab.displayName="Tab"},"./node_modules/@chakra-ui/tabs/dist/chunk-ZWUY3VWT.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>useTabsStyles,t:()=>Tabs});var _chunk_ROBISDLO_mjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/tabs/dist/chunk-ROBISDLO.mjs"),_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/react-context/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),[TabsStylesProvider,useTabsStyles]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.q)({name:"TabsStylesContext",errorMessage:"useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tabs />\" "}),Tabs=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.R)((function Tabs2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.o5)("Tabs",props),{children,className,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.MN)(props),{htmlProps,descendants,...ctx}=(0,_chunk_ROBISDLO_mjs__WEBPACK_IMPORTED_MODULE_6__.uc)(rest),context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>ctx),[ctx]),{isFitted:_,...rootProps}=htmlProps;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chunk_ROBISDLO_mjs__WEBPACK_IMPORTED_MODULE_6__.at,{value:descendants,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chunk_ROBISDLO_mjs__WEBPACK_IMPORTED_MODULE_6__.O_,{value:context,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TabsStylesProvider,{value:styles,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_7__.B.div,{className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_8__.cx)("chakra-tabs",className),ref,...rootProps,__css:styles.root,children})})})})}));Tabs.displayName="Tabs"}}]);