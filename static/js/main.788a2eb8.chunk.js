(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_adi_Desktop_test_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_home_adi_Desktop_test_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_App_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15),_App_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__),_Components_Screen__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),_Components_Buttons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),_useState2=Object(_home_adi_Desktop_test_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),screen=_useState2[0],setScreen=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),_useState4=Object(_home_adi_Desktop_test_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),oldCalc=_useState4[0],setOldCalc=_useState4[1],updateText=function(e){setScreen((function(_){return _+e.target.innerHTML}))},updateSym=function(e){"string"!=typeof screen&&(console.log(typeof screen),setScreen(screen.toString())),(Number.isInteger(parseInt(screen[screen.length-1]))||"number"==typeof screen)&&setScreen((function(_){return _+e.target.value}))},clear=function(){setScreen([""])},symbol=function(){"-"!=screen[0]?setScreen((function(e){return"-"+e})):setScreen((function(e){return e.slice(1)}))},result=function result(){var answer=screen;"string"==typeof answer?(setOldCalc((function(e){return e+screen})),answer=eval(answer)):(Object(_home_adi_Desktop_test_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__.a)("screen"),screen=answer.toString()),console.log(screen),console.log(typeof answer),setScreen(answer)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"App",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_Screen__WEBPACK_IMPORTED_MODULE_3__.a,{result:23,screenVal:screen,oldCalc:oldCalc}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_Buttons__WEBPACK_IMPORTED_MODULE_4__.a,{updateText:updateText,updateSym:updateSym,clear:clear,result:result,symbol:symbol})]})}__webpack_exports__.a=App},,function(e,_,t){"use strict";t(16);var r=t(0);_.a=function(e){var _=e.screenVal,t=e.oldCalc;return Object(r.jsxs)("div",{className:"screen",children:[Object(r.jsx)("p",{className:"old-calc",children:t}),Object(r.jsx)("h2",{className:"result",children:_})]})}},function(e,_,t){"use strict";t(18);var r=t(0);_.a=function(e){var _=e.updateText,t=e.updateSym,n=e.clear,c=e.result,s=e.symbol;return Object(r.jsxs)("div",{className:"button-cont",children:[Object(r.jsx)("button",{className:"light-grey-button",onClick:n,children:"C"}),Object(r.jsx)("button",{className:"light-grey-button",onClick:s,children:"+/-"}),Object(r.jsx)("button",{className:"light-grey-button",onClick:t,value:"",children:"%"}),Object(r.jsx)("button",{className:"orange-button",onClick:t,value:"/",children:"\xf7"}),Object(r.jsx)("button",{className:"dark-grey-button",onClick:_,children:"7"}),Object(r.jsx)("button",{className:"dark-grey-button",onClick:_,children:"8"}),Object(r.jsx)("button",{className:"dark-grey-button",onClick:_,children:"9"}),Object(r.jsx)("button",{className:"orange-button",onClick:t,value:"*",children:"\xd7"}),Object(r.jsx)("button",{className:"dark-grey-button",onClick:_,children:"4"}),Object(r.jsx)("button",{className:"dark-grey-button",onClick:_,children:"5"}),Object(r.jsx)("button",{className:"dark-grey-button",onClick:_,children:"6"}),Object(r.jsx)("button",{className:"orange-button",onClick:t,value:"-",children:"-"}),Object(r.jsx)("button",{className:"dark-grey-button",onClick:_,children:"1"}),Object(r.jsx)("button",{className:"dark-grey-button",onClick:_,children:"2"}),Object(r.jsx)("button",{className:"dark-grey-button",onClick:_,children:"3"}),Object(r.jsx)("button",{className:"orange-button",onClick:t,value:"+",children:"+"}),Object(r.jsx)("button",{className:"dark-grey-button zero-btn",onClick:_,children:"0"}),Object(r.jsx)("button",{className:"dark-grey-button",onClick:_,children:"."}),Object(r.jsx)("button",{className:"orange-button",onClick:c,children:"="})]})}},function(e,_,t){"use strict";t.r(_);var r=t(1),n=t.n(r),c=t(4),s=t.n(c),a=(t(14),t(5)),o=t(0);s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(a.a,{})}),document.getElementById("root"))},,,,,function(e,_,t){},function(e,_,t){},function(e,_,t){},,function(e,_,t){}],[[9,1,2]]]);
//# sourceMappingURL=main.788a2eb8.chunk.js.map