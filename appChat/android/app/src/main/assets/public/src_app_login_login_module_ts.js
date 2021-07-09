(self["webpackChunkappChat"] = self["webpackChunkappChat"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 6770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 1339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 7556);






let LoginPage = class LoginPage {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    login(form) {
        var formData = new FormData();
        formData.append('email', form.value['email']);
        formData.append('password', form.value['password']);
        this.authService.login(formData)
            .subscribe((data) => {
            console.log(data);
            this.router.navigate(['/home']);
        }, (error) => {
            console.log("#ERROR Login " + JSON.stringify(error));
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 1339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n}\n\n.body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background-color: #f7f7f7;\n}\n\n.wrapper {\n  background-color: #fff;\n  width: 450px;\n  border-radius: 16px;\n  box-shadow: 0 0 128px rgba(0, 0, 0, 0.1), 0 32px 64px -48px rgba(0, 0, 0, 0.5);\n}\n\n/* Signup form CSS Code*/\n\n.form {\n  padding: 25px 30px;\n}\n\n.form header {\n  font-size: 25px;\n  font-weight: 600;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #e6e6e6;\n}\n\n.form form {\n  margin: 20px 0;\n}\n\n.form form .errorTxt {\n  color: #721c24;\n  background-color: #f8d7da;\n  padding: 8px 10px;\n  text-align: center;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  border: 1px solid #f5c6cb;\n}\n\n.form form .name-details {\n  display: flex;\n}\n\nform .name-details .field:first-child {\n  margin-right: 10px;\n}\n\nform .name-details .field:last-child {\n  margin-left: 10px;\n}\n\n.form form .field label {\n  margin-bottom: 2px;\n}\n\n.form form .button input {\n  margin-top: 13px;\n  height: 45px;\n  border: none;\n  font-size: 17px;\n  font-weight: 500;\n  background: #333;\n  color: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.form .link {\n  text-align: center;\n  margin: 10px 0;\n  font-size: 17px;\n}\n\n.form .link a {\n  color: #333;\n}\n\n.form .link a:hover {\n  text-decoration: underline;\n}\n\n.form form .field {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n}\n\n.form form .field input {\n  outline: none;\n}\n\n.form form .input input {\n  height: 40px;\n  width: 100%;\n  font-size: 16px;\n  padding: 0 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDhFQUFBO0FBQ0o7O0FBSUUsd0JBQUE7O0FBRUE7RUFDRSxrQkFBQTtBQUZKOztBQUtFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQUZKOztBQUtFO0VBQ0UsY0FBQTtBQUZKOztBQUtFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUZKOztBQUtFO0VBQ0UsYUFBQTtBQUZKOztBQUtFO0VBQ0Usa0JBQUE7QUFGSjs7QUFLRTtFQUNFLGlCQUFBO0FBRko7O0FBS0U7RUFDRSxrQkFBQTtBQUZKOztBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUtFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUtFO0VBQ0UsV0FBQTtBQUZKOztBQUtFO0VBQXFCLDBCQUFBO0FBRHZCOztBQUdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7QUFBSjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQUoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuYm9keXtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OjEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjdmN2Y3O1xyXG4gIH1cclxuICBcclxuICAud3JhcHBlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICAgIHdpZHRoOjQ1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxNnB4O1xyXG4gICAgYm94LXNoYWRvdzowIDAgMTI4cHggcmdiYSgwLDAsMCwwLjEpLFxyXG4gICAgICAgICAgICAgIDAgMzJweCA2NHB4IC00OHB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAvKiBTaWdudXAgZm9ybSBDU1MgQ29kZSovXHJcbiAgXHJcbiAgLmZvcm0ge1xyXG4gICAgcGFkZGluZzogMjVweCAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybSBoZWFkZXIge1xyXG4gICAgZm9udC1zaXplOjI1cHg7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gIH1cclxuICBcclxuICAuZm9ybSBmb3JtIHtcclxuICAgIG1hcmdpbjoyMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtIGZvcm0gLmVycm9yVHh0IHtcclxuICAgIGNvbG9yOiAjNzIxYzI0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcclxuICAgIHBhZGRpbmc6OHB4IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmNWM2Y2I7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtIGZvcm0gLm5hbWUtZGV0YWlsc3tcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICB9XHJcbiAgXHJcbiAgZm9ybSAubmFtZS1kZXRhaWxzIC5maWVsZDpmaXJzdC1jaGlsZHtcclxuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xyXG4gIH1cclxuICBcclxuICBmb3JtIC5uYW1lLWRldGFpbHMgLmZpZWxkOmxhc3QtY2hpbGR7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybSBmb3JtIC5maWVsZCBsYWJlbHtcclxuICAgIG1hcmdpbi1ib3R0b206MnB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybSBmb3JtIC5idXR0b24gaW5wdXR7XHJcbiAgICBtYXJnaW4tdG9wIDogMTNweDtcclxuICAgIGhlaWdodDo0NXB4O1xyXG4gICAgYm9yZGVyOm5vbmUgO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuZm9ybSAubGlua3tcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgbWFyZ2luOjEwcHggMDtcclxuICAgIGZvbnQtc2l6ZToxN3B4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybSAubGluayBhe1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtIC5saW5rIGE6aG92ZXJ7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO31cclxuICBcclxuICAuZm9ybSBmb3JtIC5maWVsZHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtIGZvcm0gLmZpZWxkIGlucHV0e1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0gZm9ybSAuaW5wdXQgaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzowIDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAgICAgXHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 6770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<ion-content>\r\n  <div class=\"body\">\r\n    <!-- Container du formulaire -->\r\n    <div class=\"wrapper\">\r\n      <div class=\"form login\">\r\n        <header>Realtime Chat App</header>\r\n        <form #form=\"ngForm\" (ngSubmit)=\"login(form)\" >\r\n          <!-- Message d'erreur en cas de mauvaise combinaison  -->\r\n          <div class=\"errorTxt\">Ceci Est un message d'erreur</div>\r\n          <!-- Toute les entrées -->\r\n          <div class=\"field input\">\r\n            <label>Email</label>\r\n            <input type=\"text\" placeholder=\"Email\" name=\"email\" ngModel required>\r\n          </div>\r\n          <div class=\"field input\">\r\n            <label>Mot de Passe</label>\r\n            <input type=\"password\" placeholder=\"enter Password\" name=\"password\" ngModel required>\r\n            <!-- <ion-icon slot=\"end\" name=\"eye\" ></ion-icon> -->\r\n          </div>\r\n          <div class=\"field button\">\r\n            <input type=\"submit\" value=\"Go !\">\r\n          </div>\r\n        </form>\r\n        <div class=\"link\">Not yet sign Up ? <a href=\"#\">Sign in !</a></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map