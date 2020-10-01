(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["meu-perfil-meu-perfil-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/meu-perfil/meu-perfil.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/meu-perfil/meu-perfil.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMeuPerfilMeuPerfilPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-menu-button></ion-menu-button> -->\n      <ion-button  ><ion-icon name=\"create-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<p style=\"text-align: center; font-size: 20px;\"><b>Olá Thalys</b></p>\n<p style=\"text-align: center; font-size: 12px;\">Meu telefone: +55 33 9 9999-9999</p>\n<p style=\"text-align: center; font-size: 12px;\">Meu endereço: Av. Gesios Carlos da Silva</p>\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/meu-perfil/meu-perfil-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/meu-perfil/meu-perfil-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: MeuPerfilPageRoutingModule */

    /***/
    function srcAppMeuPerfilMeuPerfilRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MeuPerfilPageRoutingModule", function () {
        return MeuPerfilPageRoutingModule;
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


      var _meu_perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./meu-perfil.page */
      "./src/app/meu-perfil/meu-perfil.page.ts");

      var routes = [{
        path: '',
        component: _meu_perfil_page__WEBPACK_IMPORTED_MODULE_3__["MeuPerfilPage"]
      }];

      var MeuPerfilPageRoutingModule = function MeuPerfilPageRoutingModule() {
        _classCallCheck(this, MeuPerfilPageRoutingModule);
      };

      MeuPerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MeuPerfilPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/meu-perfil/meu-perfil.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/meu-perfil/meu-perfil.module.ts ***!
      \*************************************************/

    /*! exports provided: MeuPerfilPageModule */

    /***/
    function srcAppMeuPerfilMeuPerfilModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MeuPerfilPageModule", function () {
        return MeuPerfilPageModule;
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


      var _meu_perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./meu-perfil-routing.module */
      "./src/app/meu-perfil/meu-perfil-routing.module.ts");
      /* harmony import */


      var _meu_perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./meu-perfil.page */
      "./src/app/meu-perfil/meu-perfil.page.ts");

      var MeuPerfilPageModule = function MeuPerfilPageModule() {
        _classCallCheck(this, MeuPerfilPageModule);
      };

      MeuPerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _meu_perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["MeuPerfilPageRoutingModule"]],
        declarations: [_meu_perfil_page__WEBPACK_IMPORTED_MODULE_6__["MeuPerfilPage"]]
      })], MeuPerfilPageModule);
      /***/
    },

    /***/
    "./src/app/meu-perfil/meu-perfil.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/meu-perfil/meu-perfil.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMeuPerfilMeuPerfilPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ldS1wZXJmaWwvbWV1LXBlcmZpbC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/meu-perfil/meu-perfil.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/meu-perfil/meu-perfil.page.ts ***!
      \***********************************************/

    /*! exports provided: MeuPerfilPage */

    /***/
    function srcAppMeuPerfilMeuPerfilPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MeuPerfilPage", function () {
        return MeuPerfilPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MeuPerfilPage = /*#__PURE__*/function () {
        function MeuPerfilPage() {
          _classCallCheck(this, MeuPerfilPage);
        }

        _createClass(MeuPerfilPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MeuPerfilPage;
      }();

      MeuPerfilPage.ctorParameters = function () {
        return [];
      };

      MeuPerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-meu-perfil',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./meu-perfil.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/meu-perfil/meu-perfil.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./meu-perfil.page.scss */
        "./src/app/meu-perfil/meu-perfil.page.scss"))["default"]]
      })], MeuPerfilPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=meu-perfil-meu-perfil-module-es5.js.map