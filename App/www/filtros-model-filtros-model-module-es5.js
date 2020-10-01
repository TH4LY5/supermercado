(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["filtros-model-filtros-model-module"], {
    /***/
    "./src/app/filtros-model/filtros-model-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/filtros-model/filtros-model-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: FiltrosModelPageRoutingModule */

    /***/
    function srcAppFiltrosModelFiltrosModelRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltrosModelPageRoutingModule", function () {
        return FiltrosModelPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _filtros_model_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./filtros-model.page */
      "./src/app/filtros-model/filtros-model.page.ts");

      var routes = [{
        path: '',
        component: _filtros_model_page__WEBPACK_IMPORTED_MODULE_3__["FiltrosModelPage"]
      }];

      var FiltrosModelPageRoutingModule = function FiltrosModelPageRoutingModule() {
        _classCallCheck(this, FiltrosModelPageRoutingModule);
      };

      FiltrosModelPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FiltrosModelPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/filtros-model/filtros-model.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/filtros-model/filtros-model.module.ts ***!
      \*******************************************************/

    /*! exports provided: FiltrosModelPageModule */

    /***/
    function srcAppFiltrosModelFiltrosModelModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltrosModelPageModule", function () {
        return FiltrosModelPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _filtros_model_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./filtros-model-routing.module */
      "./src/app/filtros-model/filtros-model-routing.module.ts");
      /* harmony import */


      var _filtros_model_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./filtros-model.page */
      "./src/app/filtros-model/filtros-model.page.ts");

      var FiltrosModelPageModule = function FiltrosModelPageModule() {
        _classCallCheck(this, FiltrosModelPageModule);
      };

      FiltrosModelPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _filtros_model_routing_module__WEBPACK_IMPORTED_MODULE_5__["FiltrosModelPageRoutingModule"]],
        declarations: [_filtros_model_page__WEBPACK_IMPORTED_MODULE_6__["FiltrosModelPage"]]
      })], FiltrosModelPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=filtros-model-filtros-model-module-es5.js.map