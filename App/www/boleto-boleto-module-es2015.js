(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["boleto-boleto-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/boleto/boleto.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/boleto/boleto.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title><b>Segunda via</b></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/boleto/boleto-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/boleto/boleto-routing.module.ts ***!
  \*************************************************/
/*! exports provided: BoletoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoletoPageRoutingModule", function() { return BoletoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _boleto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boleto.page */ "./src/app/boleto/boleto.page.ts");




const routes = [
    {
        path: '',
        component: _boleto_page__WEBPACK_IMPORTED_MODULE_3__["BoletoPage"]
    }
];
let BoletoPageRoutingModule = class BoletoPageRoutingModule {
};
BoletoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BoletoPageRoutingModule);



/***/ }),

/***/ "./src/app/boleto/boleto.module.ts":
/*!*****************************************!*\
  !*** ./src/app/boleto/boleto.module.ts ***!
  \*****************************************/
/*! exports provided: BoletoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoletoPageModule", function() { return BoletoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _boleto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./boleto-routing.module */ "./src/app/boleto/boleto-routing.module.ts");
/* harmony import */ var _boleto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./boleto.page */ "./src/app/boleto/boleto.page.ts");







let BoletoPageModule = class BoletoPageModule {
};
BoletoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _boleto_routing_module__WEBPACK_IMPORTED_MODULE_5__["BoletoPageRoutingModule"]
        ],
        declarations: [_boleto_page__WEBPACK_IMPORTED_MODULE_6__["BoletoPage"]]
    })
], BoletoPageModule);



/***/ }),

/***/ "./src/app/boleto/boleto.page.scss":
/*!*****************************************!*\
  !*** ./src/app/boleto/boleto.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvbGV0by9ib2xldG8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/boleto/boleto.page.ts":
/*!***************************************!*\
  !*** ./src/app/boleto/boleto.page.ts ***!
  \***************************************/
/*! exports provided: BoletoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoletoPage", function() { return BoletoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BoletoPage = class BoletoPage {
    constructor() { }
    ngOnInit() {
    }
};
BoletoPage.ctorParameters = () => [];
BoletoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-boleto',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./boleto.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/boleto/boleto.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./boleto.page.scss */ "./src/app/boleto/boleto.page.scss")).default]
    })
], BoletoPage);



/***/ })

}]);
//# sourceMappingURL=boleto-boleto-module-es2015.js.map