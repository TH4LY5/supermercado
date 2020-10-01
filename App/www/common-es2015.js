(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-0d5784f9.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-0d5784f9.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-44bf8136.js */ "./node_modules/@ionic/core/dist/esm/index-44bf8136.js");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");




const createButtonActiveGesture = (el, isButton) => {
    let currentTouchedButton;
    let initialTouchedButton;
    const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === 'undefined') {
            return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    const setActiveButton = (button, hapticFeedbackFn) => {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
            return;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */
        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
        }
        currentTouchedButton = undefined;
    };
    return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
        onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
        onEnd: () => {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction, animation);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detalhe-produto/detalhe-produto.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detalhe-produto/detalhe-produto.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n        </ion-buttons>\n      </ion-buttons>\n      <!-- <ion-buttons slot=\"end\">\n        <ion-button (click)=\"presentPopover($event)\">\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\n        </ion-button>\n      </ion-buttons> -->\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"about-header\">\n    <!-- Instead of loading an image each time the select changes, use opacity to transition them -->\n    <div class=\"about-image madison\" [ngStyle]=\"'madison' && {'opacity': '1'}\"></div>\n    <!-- <div class=\"about-image austin\" [ngStyle]=\"location === 'austin' && {'opacity': '1'}\"></div>\n    <div class=\"about-image chicago\" [ngStyle]=\"location === 'chicago' && {'opacity': '1'}\"></div>\n    <div class=\"about-image seattle\" [ngStyle]=\"location === 'seattle' && {'opacity': '1'}\"></div> -->\n  </div>\n\n  <div class=\"about-info\">\n    <h3 class=\"ion-padding-top ion-padding-start\">Bob</h3>\n\n    <p class=\"ion-padding-start ion-padding-end\">\n     <b style=\"color: white;\"> Detalhe do broduto dslfjsjdgfsdfksdkfndsjanaslçjdnas</b> <br>\n     <b style=\"font-size: 14px;\">DETALHES:</b> <br>\n     <b style=\"font-size: 12px;\">IDADE: </b> 3 meses <br>\n     <b style=\"font-size: 12px;\">PORTE: </b> Medio <br>\n     <b style=\"font-size: 12px;\">COR: </b> Caramelo <br>\n     <b style=\"font-size: 12px;\">RAÇA: </b> Misto <br>\n     <b style=\"font-size: 12px;\">SEXO: </b> Macho <br>\n    </p>\n    <ion-button expand=\"full\"><b>ME ADOTE</b> 🐕</ion-button>\n  </div>\n</ion-content>\n\n<!-- <ion-footer class=\"ion-no-border\" style=\"align-items: center;\">\n  <ion-toolbar>\n    <ion-buttons >\n      <ion-button color=\"primary\">Primary</ion-button>\n    </ion-buttons>\n  \n\n  <ion-grid style=\"align-items: center;\">\n    <ion-row>\n      <ion-col>\n        <ion-buttons >\n          <ion-button  >Full Button</ion-button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col >\n        <ion-buttons >\n          <ion-button expand=\"full\">Full Button</ion-button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </ion-toolbar>\n</ion-footer> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/filtros-model/filtros-model.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filtros-model/filtros-model.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar >\n    <ion-title>Selecionar filtros</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>Animal</ion-label>\n    <ion-select placeholder=\"Select One\">\n      <ion-select-option value=\"f\">Cachorro </ion-select-option>\n      <ion-select-option value=\"m\">Gato</ion-select-option>\n      <ion-select-option value=\"m\">Outros</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Sexo</ion-label>\n    <ion-select placeholder=\"Select One\">\n      <ion-select-option value=\"f\">Macho</ion-select-option>\n      <ion-select-option value=\"m\">Femia</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Cor</ion-label>\n    <ion-select placeholder=\"Select One\">\n      <ion-select-option value=\"f\">Caramelo</ion-select-option>\n      <ion-select-option value=\"m\">Preto</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Porte</ion-label>\n    <ion-select placeholder=\"Select One\">\n      <ion-select-option value=\"f\">Médio</ion-select-option>\n      <ion-select-option value=\"m\">Pequeno</ion-select-option>\n      <ion-select-option value=\"m\">Grande</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Idade</ion-label>\n    <ion-select placeholder=\"Select One\">\n      <ion-select-option value=\"f\">Adultos </ion-select-option>\n      <ion-select-option value=\"m\">Filhotes</ion-select-option>\n      <ion-select-option value=\"m\">Idosos</ion-select-option>\n    </ion-select>\n  </ion-item>\n \n</ion-content>\n\n\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-button expand=\"full\" color=\"success\" > <b>SALVAR FILTROS</b></ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/detalhe-produto/detalhe-produto.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/detalhe-produto/detalhe-produto.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  --background: transparent;\n  --color: white;\n}\n\nion-toolbar ion-button,\nion-toolbar ion-back-button,\nion-toolbar ion-menu-button {\n  --color: white;\n}\n\n.about-header {\n  position: relative;\n  width: 100%;\n  height: 30%;\n}\n\n.about-header .about-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  opacity: 0;\n  transition: opacity 500ms ease-in-out;\n}\n\n.about-header .madison {\n  background-image: url(/assets/img/caramelo.jpg);\n}\n\n.about-header .austin {\n  background-image: url(/assets/img/caramelo.jpg);\n}\n\n.about-header .chicago {\n  background-image: url(/assets/img/caramelo.jpg);\n}\n\n.about-header .seattle {\n  background-image: url(/assets/img/caramelo.jpg);\n}\n\n.about-info {\n  position: absolute;\n  margin-top: -10px;\n  border-radius: 10px;\n  background: var(--ion-background-color, #fff);\n}\n\n.about-info h3 {\n  margin-top: 0;\n}\n\n.about-info ion-list {\n  padding-top: 0;\n}\n\n.about-info p {\n  line-height: 130%;\n  color: var(--ion-color-dark);\n}\n\n.about-info ion-icon {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px;\n}\n\n/*\n * iOS Only\n */\n\n.ios .about-info {\n  --ion-padding: 19px;\n}\n\n.ios .about-info h3 {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWxoZS1wcm9kdXRvL2RldGFsaGUtcHJvZHV0by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUVBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUVBLHlCQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlFOzs7RUFHRSxjQUFBO0FBREo7O0FBSUU7RUFDRSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0U7RUFDRSxrQkFBQTtFQUVBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFFQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFFQSxVQUFBO0VBRUEscUNBQUE7QUFOSjs7QUFTRTtFQUNFLCtDQUFBO0FBTko7O0FBUUU7RUFDRSwrQ0FBQTtBQUxKOztBQU9FO0VBQ0UsK0NBQUE7QUFKSjs7QUFNRTtFQUNFLCtDQUFBO0FBSEo7O0FBTUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQUhKOztBQU1FO0VBQ0UsYUFBQTtBQUhKOztBQU1FO0VBQ0UsY0FBQTtBQUhKOztBQU1FO0VBQ0UsaUJBQUE7RUFFQSw0QkFBQTtBQUpKOztBQU9FO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQUpKOztBQU9FOztFQUFBOztBQUlBO0VBQ0UsbUJBQUE7QUFMSjs7QUFRRTtFQUNFLGdCQUFBO0FBTEoiLCJmaWxlIjoic3JjL2FwcC9kZXRhbGhlLXByb2R1dG8vZGV0YWxoZS1wcm9kdXRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICBcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICBpb24tdG9vbGJhciBpb24tYnV0dG9uLFxuICBpb24tdG9vbGJhciBpb24tYmFjay1idXR0b24sXG4gIGlvbi10b29sYmFyIGlvbi1tZW51LWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5hYm91dC1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMCU7XG4gIH1cbiAgXG4gIC5hYm91dC1oZWFkZXIgLmFib3V0LWltYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgXG4gICAgb3BhY2l0eTogMDtcbiAgXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmFib3V0LWhlYWRlciAubWFkaXNvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2NhcmFtZWxvLmpwZyk7XG4gIH1cbiAgLmFib3V0LWhlYWRlciAuYXVzdGluIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvY2FyYW1lbG8uanBnKTtcbiAgfVxuICAuYWJvdXQtaGVhZGVyIC5jaGljYWdvIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvY2FyYW1lbG8uanBnKTtcbiAgfVxuICAuYWJvdXQtaGVhZGVyIC5zZWF0dGxlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvY2FyYW1lbG8uanBnKTtcbiAgfVxuICBcbiAgLmFib3V0LWluZm8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTtcbiAgfVxuICBcbiAgLmFib3V0LWluZm8gaDMge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbiAgXG4gIC5hYm91dC1pbmZvIGlvbi1saXN0IHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxuICBcbiAgLmFib3V0LWluZm8gcCB7XG4gICAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gIFxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIH1cbiAgXG4gIC5hYm91dC1pbmZvIGlvbi1pY29uIHtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMzJweDtcbiAgfVxuICBcbiAgLypcbiAgICogaU9TIE9ubHlcbiAgICovXG4gIFxuICAuaW9zIC5hYm91dC1pbmZvIHtcbiAgICAtLWlvbi1wYWRkaW5nOiAxOXB4O1xuICB9XG4gIFxuICAuaW9zIC5hYm91dC1pbmZvIGgzIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/detalhe-produto/detalhe-produto.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/detalhe-produto/detalhe-produto.page.ts ***!
  \*********************************************************/
/*! exports provided: DetalheProdutoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheProdutoPage", function() { return DetalheProdutoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DetalheProdutoPage = class DetalheProdutoPage {
    constructor() {
        this.animal = [
            { id: 1, nome: "Bob", idade: '3 meses', porte: "Médio", cor: "Caramelo", raca: "Misto", sexo: "Macho", observacao: "Castrado" },
            { id: 2, nome: "Felix", idade: '1 mes', porte: "Pequeno", cor: "Laranja", raca: "Misto", sexo: "Macho", observacao: "Castrado" },
        ];
    }
    ngOnInit() {
    }
};
DetalheProdutoPage.ctorParameters = () => [];
DetalheProdutoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalhe-produto',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detalhe-produto.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detalhe-produto/detalhe-produto.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detalhe-produto.page.scss */ "./src/app/detalhe-produto/detalhe-produto.page.scss")).default]
    })
], DetalheProdutoPage);



/***/ }),

/***/ "./src/app/filtros-model/filtros-model.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/filtros-model/filtros-model.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbHRyb3MtbW9kZWwvZmlsdHJvcy1tb2RlbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/filtros-model/filtros-model.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/filtros-model/filtros-model.page.ts ***!
  \*****************************************************/
/*! exports provided: FiltrosModelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltrosModelPage", function() { return FiltrosModelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltrosModelPage = class FiltrosModelPage {
    constructor() { }
    ngOnInit() {
    }
};
FiltrosModelPage.ctorParameters = () => [];
FiltrosModelPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filtros-model',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./filtros-model.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/filtros-model/filtros-model.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./filtros-model.page.scss */ "./src/app/filtros-model/filtros-model.page.scss")).default]
    })
], FiltrosModelPage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map