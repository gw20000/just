
// function to wrap module source code to give each module a private space to excute : every module soure code  is warpped in an individaul function , aiming to create every module  a privite space to excute . 

// requireFn  to load a module/dependency :  modules are  sercursively  to  load ,excute and cached a module ; in simple ,  sercursively to excute requireFn (inside requireFn will call requireFn , if there is a dependent module )


/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

// 我： modules 就是 资源 ， 就是 源代码 
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

      __webpack_require__.r(__webpack_exports__); // 给容器 加 实例标识   并 标识使用 esModule 模块化规范

  /* harmony export */ __webpack_require__.d(__webpack_exports__, {  // 将模块的导出内容 放入 容器  （包括 默认导出  和 基本导出）
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
        /* harmony export */
      });


  /* harmony import */ var _b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
  /* module decorator */ module = __webpack_require__.hmd(module);  // 阻止 使用 common js 模块化规范 ，并提示报错 


      console.log("module a excutes");
      console.dir(module);
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("export from moudle a");  // 默认导出内容 （用一个变量 临时 接收默认导出内容）


      /***/
    }),




  /* 2 */
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
        /* harmony export */
      });


      console.log("module b excute");
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("exports from moudle b");


      /***/
    })
  /******/]);









  /************************************************************************/
  /******/ 	// The module cache
  /******/ 	var __webpack_module_cache__ = {};
  /******/






  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/ 		// Check if module is in cache
  /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
  /******/ 		if (cachedModule !== undefined) {
  /******/ 			return cachedModule.exports;
      /******/
    }
  /******/ 		// Create a new module (and put it into the cache)//存放 模块信息的 容器
  /******/ 		var module = __webpack_module_cache__[moduleId] = {
  /******/ 			id: moduleId,
  /******/ 			loaded: false,//我：false is meant for 未装载
  /******/ 			exports: {} //存放 模块的导出内容 的 容器
      /******/
    };
  /******/
  /******/ 		// Execute the module function
  /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  /******/
  /******/ 		// Flag the module as loaded
  /******/ 		module.loaded = true;
  /******/
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
    /******/
  }
  /******/







  /************************************************************************/
  /******/ 	/* webpack/runtime/define property getters */
  // 我： 定义 存储描述符 中 的 get //定义属性描述符// 定义哪些操作将会被拦截 以及 如何 重定义这些被拦截的操作 ： 将模块的导出内容（包括 基本导出 和 默认导出） 放到 传给模块（模块是函数包裹的，所以可以传递参数）的容器里面 （这个容器是__webpack_module_cache__中的一个空间的首地址）
  /******/ 	(() => {
  /******/ 		// define getter functions for harmony exports
  /******/ 		__webpack_require__.d = (exports, definition) => {
  /******/ 			for (var key in definition) {

  /******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
  /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
        }


        /******/
      }
      /******/
    };
    /******/
  })();



  /******/
  /******/ 	/* webpack/runtime/harmony module decorator */
    //我： the return value is not the origin/primitive module you pass in , but throught it ,you can access the attrs of origin/primitive module : prototype chain inheritary and  define  cap fn (圆形链继承 ， 定义拦截)
  /******/ 	(() => {
  /******/ 		__webpack_require__.hmd = (module) => {
  /******/ 			module = Object.create(module);
  /******/ 			if (!module.children) module.children = [];
  /******/ 			Object.defineProperty(module, 'exports', {
  /******/ 				enumerable: true,
  /******/ 				set: () => {
  /******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
      /******/
    }
    /******/
  });
  /******/ 			return module;
      /******/
    };
    /******/
  })();
  /******/


  /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
    //我：判断 一个 key是否是某个实例自身的属性 而不是  它原型链上的属性   // 屏蔽原型链（不考虑原型链上的属性）
  /******/ 	(() => {
  /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/
  })();




  /******/
  /******/ 	/* webpack/runtime/make namespace object */
  //我： 给容器定义2个数据描述符   / 给这个容器加一个 实例标识 （我：代表这个容器/对象 存放 的是 模块的导出内容）
  //根据 ECMAScript 规范，这个符号作为一个属性表示“一个字符串，该字符串用于创建对象的默认
// 字符串描述。由内置方法 Object.prototype.toString() 使用”。
// 通过 toString() 方法获取对象标识时，会检索由 Symbol.toStringTag 指定的  实例标识符  ，默
// 认为 "Object" 。内置类型已经指定了这个值，但自定义类实例还需要明确定义：


  /******/ 	(() => {
  /******/ 		// define __esModule on exports
  /******/ 		__webpack_require__.r = (exports) => {
  /******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
  /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/












  var __webpack_exports__ = {};//存放 入口模块的导出内容 的  容器 

  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

    function J() {
      console.log(_a_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }


    window.J = J;
  })();

  /******/
})()
  ;