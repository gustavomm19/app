"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7390],{"./node_modules/@codemirror/legacy-modes/mode/ntriples.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ntriples:()=>ntriples});var Location_PRE_SUBJECT=0,Location_WRITING_SUB_URI=1,Location_WRITING_BNODE_URI=2,Location_PRE_PRED=3,Location_WRITING_PRED_URI=4,Location_PRE_OBJ=5,Location_WRITING_OBJ_URI=6,Location_WRITING_OBJ_BNODE=7,Location_WRITING_OBJ_LITERAL=8,Location_WRITING_LIT_LANG=9,Location_WRITING_LIT_TYPE=10,Location_POST_OBJ=11,Location_ERROR=12;function transitState(currState,c){var ret,currLocation=currState.location;ret=currLocation==Location_PRE_SUBJECT&&"<"==c?Location_WRITING_SUB_URI:currLocation==Location_PRE_SUBJECT&&"_"==c?Location_WRITING_BNODE_URI:currLocation==Location_PRE_PRED&&"<"==c?Location_WRITING_PRED_URI:currLocation==Location_PRE_OBJ&&"<"==c?Location_WRITING_OBJ_URI:currLocation==Location_PRE_OBJ&&"_"==c?Location_WRITING_OBJ_BNODE:currLocation==Location_PRE_OBJ&&'"'==c?Location_WRITING_OBJ_LITERAL:currLocation==Location_WRITING_SUB_URI&&">"==c||currLocation==Location_WRITING_BNODE_URI&&" "==c?Location_PRE_PRED:currLocation==Location_WRITING_PRED_URI&&">"==c?Location_PRE_OBJ:currLocation==Location_WRITING_OBJ_URI&&">"==c||currLocation==Location_WRITING_OBJ_BNODE&&" "==c||currLocation==Location_WRITING_OBJ_LITERAL&&'"'==c||currLocation==Location_WRITING_LIT_LANG&&" "==c||currLocation==Location_WRITING_LIT_TYPE&&">"==c?Location_POST_OBJ:currLocation==Location_WRITING_OBJ_LITERAL&&"@"==c?Location_WRITING_LIT_LANG:currLocation==Location_WRITING_OBJ_LITERAL&&"^"==c?Location_WRITING_LIT_TYPE:" "!=c||currLocation!=Location_PRE_SUBJECT&&currLocation!=Location_PRE_PRED&&currLocation!=Location_PRE_OBJ&&currLocation!=Location_POST_OBJ?currLocation==Location_POST_OBJ&&"."==c?Location_PRE_SUBJECT:Location_ERROR:currLocation,currState.location=ret}const ntriples={name:"ntriples",startState:function(){return{location:Location_PRE_SUBJECT,uris:[],anchors:[],bnodes:[],langs:[],types:[]}},token:function(stream,state){var ch=stream.next();if("<"==ch){transitState(state,ch);var parsedURI="";return stream.eatWhile((function(c){return"#"!=c&&">"!=c&&(parsedURI+=c,!0)})),state.uris.push(parsedURI),stream.match("#",!1)?"variable":(stream.next(),transitState(state,">"),"variable")}if("#"==ch){var parsedAnchor="";return stream.eatWhile((function(c){return">"!=c&&" "!=c&&(parsedAnchor+=c,!0)})),state.anchors.push(parsedAnchor),"url"}if(">"==ch)return transitState(state,">"),"variable";if("_"==ch){transitState(state,ch);var parsedBNode="";return stream.eatWhile((function(c){return" "!=c&&(parsedBNode+=c,!0)})),state.bnodes.push(parsedBNode),stream.next(),transitState(state," "),"builtin"}if('"'==ch)return transitState(state,ch),stream.eatWhile((function(c){return'"'!=c})),stream.next(),"@"!=stream.peek()&&"^"!=stream.peek()&&transitState(state,'"'),"string";if("@"==ch){transitState(state,"@");var parsedLang="";return stream.eatWhile((function(c){return" "!=c&&(parsedLang+=c,!0)})),state.langs.push(parsedLang),stream.next(),transitState(state," "),"string.special"}if("^"==ch){stream.next(),transitState(state,"^");var parsedType="";return stream.eatWhile((function(c){return">"!=c&&(parsedType+=c,!0)})),state.types.push(parsedType),stream.next(),transitState(state,">"),"variable"}" "==ch&&transitState(state,ch),"."==ch&&transitState(state,ch)}}}}]);