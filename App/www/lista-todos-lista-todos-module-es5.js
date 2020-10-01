(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lista-todos-lista-todos-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/lista-todos/lista-todos.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lista-todos/lista-todos.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppListaTodosListaTodosPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-searchbar showCancelButton=\"never\"></ion-searchbar>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-card *ngFor=\"let ani of Animais\">\n      <ion-card-header>\n        <ion-img (click)=\"abriDescricao();\" style=\"pointer-events:none; border-radius: 6px;\"\n        src={{ani.img}}></ion-img>  \n        <ion-card-title style=\"text-align: center;\">\n          {{ani.nome}}\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-button color=\"primary\" expand=\"full\" (click)=\"abriDescricao();\">Ver</ion-button>\n        <!-- <ion-row class=\"ion-aling-itens-center\">\n          <ion-col size=\"4\" class=\"ion-text-right\">\n            <ion-button fill=\"clear\" >\n              <ion-icon name=\"add\"></ion-icon>\n            </ion-button>\n           \n\n          </ion-col>\n        </ion-row> -->\n      </ion-card-content>\n    </ion-card>\n\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/lista-todos/lista-todos-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/lista-todos/lista-todos-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: ListaTodosPageRoutingModule */

    /***/
    function srcAppListaTodosListaTodosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListaTodosPageRoutingModule", function () {
        return ListaTodosPageRoutingModule;
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


      var _lista_todos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lista-todos.page */
      "./src/app/lista-todos/lista-todos.page.ts");

      var routes = [{
        path: '',
        component: _lista_todos_page__WEBPACK_IMPORTED_MODULE_3__["ListaTodosPage"]
      }];

      var ListaTodosPageRoutingModule = function ListaTodosPageRoutingModule() {
        _classCallCheck(this, ListaTodosPageRoutingModule);
      };

      ListaTodosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ListaTodosPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/lista-todos/lista-todos.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/lista-todos/lista-todos.module.ts ***!
      \***************************************************/

    /*! exports provided: ListaTodosPageModule */

    /***/
    function srcAppListaTodosListaTodosModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListaTodosPageModule", function () {
        return ListaTodosPageModule;
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


      var _lista_todos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista-todos-routing.module */
      "./src/app/lista-todos/lista-todos-routing.module.ts");
      /* harmony import */


      var _lista_todos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./lista-todos.page */
      "./src/app/lista-todos/lista-todos.page.ts");

      var ListaTodosPageModule = function ListaTodosPageModule() {
        _classCallCheck(this, ListaTodosPageModule);
      };

      ListaTodosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _lista_todos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListaTodosPageRoutingModule"]],
        declarations: [_lista_todos_page__WEBPACK_IMPORTED_MODULE_6__["ListaTodosPage"]]
      })], ListaTodosPageModule);
      /***/
    },

    /***/
    "./src/app/lista-todos/lista-todos.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/lista-todos/lista-todos.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppListaTodosListaTodosPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RhLXRvZG9zL2xpc3RhLXRvZG9zLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/lista-todos/lista-todos.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/lista-todos/lista-todos.page.ts ***!
      \*************************************************/

    /*! exports provided: ListaTodosPage */

    /***/
    function srcAppListaTodosListaTodosPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListaTodosPage", function () {
        return ListaTodosPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _detalhe_produto_detalhe_produto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../detalhe-produto/detalhe-produto.page */
      "./src/app/detalhe-produto/detalhe-produto.page.ts");

      var ListaTodosPage = /*#__PURE__*/function () {
        function ListaTodosPage(modalCtrl) {
          _classCallCheck(this, ListaTodosPage);

          this.modalCtrl = modalCtrl;
        }

        _createClass(ListaTodosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.listaAnimais(1);
          }
        }, {
          key: "listaAnimais",
          value: function listaAnimais(tipo) {
            if (tipo == 1) {
              this.Animais = [{
                id: 1,
                nome: "Bob",
                idade: "1 mes",
                img: "https://amoraospets.com/wp-content/uploads/2019/10/Cavalier-King-Charles-Spaniel.jpg",
                tipo: 1,
                sexo: "M",
                cor: "branco",
                porte: "medio"
              }, {
                id: 2,
                nome: "Rex",
                idade: "1 mes",
                img: "https://amoraospets.com/wp-content/uploads/2019/10/Cavalier-King-Charles-Spaniel.jpg",
                tipo: 1,
                sexo: "M",
                cor: "branco",
                porte: "medio"
              }, {
                id: 3,
                nome: "Bob",
                idade: "1 mes",
                img: "https://amoraospets.com/wp-content/uploads/2019/10/Cavalier-King-Charles-Spaniel.jpg",
                tipo: 1,
                sexo: "M",
                cor: "branco",
                porte: "medio"
              }, {
                id: 4,
                nome: "Bob",
                idade: "1 mes",
                img: "https://amoraospets.com/wp-content/uploads/2019/10/Cavalier-King-Charles-Spaniel.jpg",
                tipo: 1,
                sexo: "M",
                cor: "branco",
                porte: "medio"
              }];
            }

            if (tipo == 2) {
              this.Animais = [{
                id: 1,
                nome: "Preto",
                idade: "1 mes",
                img: "https://www.loucadosgatos.com/wp-content/uploads/2015/09/Persa-BJ-1-melhor-gato-2014-676x368.jpg",
                tipo: 2,
                sexo: "M",
                cor: "branco",
                porte: "medio"
              }, {
                id: 2,
                nome: "Lulu",
                idade: "1 mes",
                img: "https://www.loucadosgatos.com/wp-content/uploads/2015/09/Persa-BJ-1-melhor-gato-2014-676x368.jpg",
                tipo: 2,
                sexo: "M",
                cor: "branco",
                porte: "medio"
              }, {
                id: 3,
                nome: "Tom",
                idade: "1 mes",
                img: "https://www.loucadosgatos.com/wp-content/uploads/2015/09/Persa-BJ-1-melhor-gato-2014-676x368.jpg",
                tipo: 2,
                sexo: "M",
                cor: "branco",
                porte: "medio"
              }, {
                id: 4,
                nome: "Bob",
                idade: "1 mes",
                img: "https://www.loucadosgatos.com/wp-content/uploads/2015/09/Persa-BJ-1-melhor-gato-2014-676x368.jpg",
                tipo: 2,
                sexo: "M",
                cor: "branco",
                porte: "medio"
              }];
            }
          }
        }, {
          key: "abriDescricao",
          value: function abriDescricao() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _detalhe_produto_detalhe_produto_page__WEBPACK_IMPORTED_MODULE_3__["DetalheProdutoPage"]
                      });

                    case 2:
                      modal = _context.sent;
                      modal.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ListaTodosPage;
      }();

      ListaTodosPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      ListaTodosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista-todos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./lista-todos.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/lista-todos/lista-todos.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./lista-todos.page.scss */
        "./src/app/lista-todos/lista-todos.page.scss"))["default"]]
      })], ListaTodosPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=lista-todos-lista-todos-module-es5.js.map