"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5203],{"./node_modules/@codemirror/legacy-modes/mode/ebnf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ebnf:()=>ebnf});var commentType_slash=0,commentType_parenthesis=1,stateType_comment=0,stateType__string=1,stateType_characterClass=2;const ebnf={name:"ebnf",startState:function(){return{stringType:null,commentType:null,braced:0,lhs:!0,localState:null,stack:[],inDefinition:!1}},token:function(stream,state){if(stream){switch(0===state.stack.length&&('"'==stream.peek()||"'"==stream.peek()?(state.stringType=stream.peek(),stream.next(),state.stack.unshift(stateType__string)):stream.match("/*")?(state.stack.unshift(stateType_comment),state.commentType=commentType_slash):stream.match("(*")&&(state.stack.unshift(stateType_comment),state.commentType=commentType_parenthesis)),state.stack[0]){case stateType__string:for(;state.stack[0]===stateType__string&&!stream.eol();)stream.peek()===state.stringType?(stream.next(),state.stack.shift()):"\\"===stream.peek()?(stream.next(),stream.next()):stream.match(/^.[^\\\"\']*/);return state.lhs?"property":"string";case stateType_comment:for(;state.stack[0]===stateType_comment&&!stream.eol();)state.commentType===commentType_slash&&stream.match("*/")||state.commentType===commentType_parenthesis&&stream.match("*)")?(state.stack.shift(),state.commentType=null):stream.match(/^.[^\*]*/);return"comment";case stateType_characterClass:for(;state.stack[0]===stateType_characterClass&&!stream.eol();)stream.match(/^[^\]\\]+/)||stream.match(".")||state.stack.shift();return"operator"}var peek=stream.peek();switch(peek){case"[":return stream.next(),state.stack.unshift(stateType_characterClass),"bracket";case":":case"|":case";":return stream.next(),"operator";case"%":if(stream.match("%%"))return"header";if(stream.match(/[%][A-Za-z]+/))return"keyword";if(stream.match(/[%][}]/))return"bracket";break;case"/":if(stream.match(/[\/][A-Za-z]+/))return"keyword";case"\\":if(stream.match(/[\][a-z]+/))return"string.special";case".":if(stream.match("."))return"atom";case"*":case"-":case"+":case"^":if(stream.match(peek))return"atom";case"$":if(stream.match("$$"))return"builtin";if(stream.match(/[$][0-9]+/))return"variableName.special";case"<":if(stream.match(/<<[a-zA-Z_]+>>/))return"builtin"}return stream.match("//")?(stream.skipToEnd(),"comment"):stream.match("return")?"operator":stream.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)?stream.match(/(?=[\(.])/)?"variable":stream.match(/(?=[\s\n]*[:=])/)?"def":"variableName.special":-1!=["[","]","(",")"].indexOf(stream.peek())?(stream.next(),"bracket"):(stream.eatSpace()||stream.next(),null)}}}}}]);