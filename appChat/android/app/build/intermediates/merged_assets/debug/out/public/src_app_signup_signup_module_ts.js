(self["webpackChunkappChat"] = self["webpackChunkappChat"] || []).push([["src_app_signup_signup_module_ts"],{

/***/ 159:
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 771);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 7648:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 159);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 771);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 771:
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signup.page.html */ 1355);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 4194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 7556);






let SignupPage = class SignupPage {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    signup(form) {
        // var myForm = document.getElementById('myForm');
        console.log(form.value);
        var formData = new FormData();
        // formData.append('nom', form.value['nom']);
        formData.append('nom', form.value['nom']);
        formData.append('prenom', form.value['prenom']);
        formData.append('email', form.value['email']);
        formData.append('password', form.value['password']);
        this.authService.signup(formData)
            .subscribe((data) => {
            console.log(data);
            this.router.navigate(['/login']);
        }, (err) => {
            console.log("##ERROR signup" + JSON.stringify(err));
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignupPage);



/***/ }),

/***/ 4194:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n}\n\n.body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background-color: #f7f7f7;\n}\n\n.wrapper {\n  background-color: #fff;\n  width: 450px;\n  border-radius: 16px;\n  box-shadow: 0 0 128px rgba(0, 0, 0, 0.1), 0 32px 64px -48px rgba(0, 0, 0, 0.5);\n}\n\n/* Signup form CSS Code*/\n\n.form {\n  padding: 25px 30px;\n}\n\n.form header {\n  font-size: 25px;\n  font-weight: 600;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #e6e6e6;\n}\n\n.form form {\n  margin: 20px 0;\n}\n\n.form form .errorTxt {\n  color: #721c24;\n  background-color: #f8d7da;\n  padding: 8px 10px;\n  text-align: center;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  border: 1px solid #f5c6cb;\n}\n\n.form form .name-details {\n  display: flex;\n}\n\nform .name-details .field:first-child {\n  margin-right: 10px;\n}\n\nform .name-details .field:last-child {\n  margin-left: 10px;\n}\n\n.form form .field label {\n  margin-bottom: 2px;\n}\n\n.form form .button input {\n  margin-top: 13px;\n  height: 45px;\n  border: none;\n  font-size: 17px;\n  font-weight: 500;\n  background: #333;\n  color: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.form .link {\n  text-align: center;\n  margin: 10px 0;\n  font-size: 17px;\n}\n\n.form .link a {\n  color: #333;\n}\n\n.form .link a:hover {\n  text-decoration: underline;\n}\n\n.form form .field {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n}\n\n.form form .field input {\n  outline: none;\n}\n\n.form form .input input {\n  height: 40px;\n  width: 100%;\n  font-size: 16px;\n  padding: 0 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVFO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4RUFBQTtBQUNKOztBQUlFLHdCQUFBOztBQUVBO0VBQ0Usa0JBQUE7QUFGSjs7QUFLRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUFGSjs7QUFLRTtFQUNFLGNBQUE7QUFGSjs7QUFLRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFGSjs7QUFLRTtFQUNFLGFBQUE7QUFGSjs7QUFLRTtFQUNFLGtCQUFBO0FBRko7O0FBS0U7RUFDRSxpQkFBQTtBQUZKOztBQUtFO0VBQ0Usa0JBQUE7QUFGSjs7QUFLRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFGSjs7QUFLRTtFQUNFLFdBQUE7QUFGSjs7QUFLRTtFQUFxQiwwQkFBQTtBQUR2Qjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0U7RUFDRSxhQUFBO0FBQUo7O0FBR0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUFKIiwiZmlsZSI6InNpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib2R5e1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6MTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmN2Y3Zjc7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwcGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgd2lkdGg6NDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjE2cHg7XHJcbiAgICBib3gtc2hhZG93OjAgMCAxMjhweCByZ2JhKDAsMCwwLDAuMSksXHJcbiAgICAgICAgICAgICAgMCAzMnB4IDY0cHggLTQ4cHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNpZ251cCBmb3JtIENTUyBDb2RlKi9cclxuICBcclxuICAuZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtIGhlYWRlciB7XHJcbiAgICBmb250LXNpemU6MjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtIGZvcm0ge1xyXG4gICAgbWFyZ2luOjIwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0gZm9ybSAuZXJyb3JUeHQge1xyXG4gICAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xyXG4gICAgcGFkZGluZzo4cHggMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2Y1YzZjYjtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0gZm9ybSAubmFtZS1kZXRhaWxze1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gIH1cclxuICBcclxuICBmb3JtIC5uYW1lLWRldGFpbHMgLmZpZWxkOmZpcnN0LWNoaWxke1xyXG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGZvcm0gLm5hbWUtZGV0YWlscyAuZmllbGQ6bGFzdC1jaGlsZHtcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtIGZvcm0gLmZpZWxkIGxhYmVse1xyXG4gICAgbWFyZ2luLWJvdHRvbToycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtIGZvcm0gLmJ1dHRvbiBpbnB1dHtcclxuICAgIG1hcmdpbi10b3AgOiAxM3B4O1xyXG4gICAgaGVpZ2h0OjQ1cHg7XHJcbiAgICBib3JkZXI6bm9uZSA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtIC5saW5re1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBtYXJnaW46MTBweCAwO1xyXG4gICAgZm9udC1zaXplOjE3cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtIC5saW5rIGF7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0gLmxpbmsgYTpob3ZlcnsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7fVxyXG4gIFxyXG4gIC5mb3JtIGZvcm0gLmZpZWxke1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0gZm9ybSAuZmllbGQgaW5wdXR7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZm9ybSBmb3JtIC5pbnB1dCBpbnB1dHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOjAgMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7ICAgICBcclxuICB9Il19 */");

/***/ }),

/***/ 1355:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"body\">\r\n    <div class=\"wrapper\">\r\n      <div class=\"form signup\">\r\n        <header>Realtime Chat App</header>\r\n        <form #form=\"ngForm\" (ngSubmit)=\"signup(form)\" >\r\n          <div class=\"errorTxt\">Ceci Est un message d'erreur</div>\r\n          <div class=\"name-details\">\r\n            <div class=\"field input\">\r\n              <label>Nom</label>\r\n              <input type=\"text\" name=\"nom\" placeholder=\"Nom de Famille\" ngModel required>\r\n            </div>\r\n            <div class=\"field input\">\r\n              <label>Prenom</label>\r\n              <input type=\"text\" name=\"prenom\" placeholder=\"Prenom\" ngModel required>\r\n            </div>\r\n          </div>\r\n          <div class=\"field input\">\r\n            <label>Email</label>\r\n            <input type=\"text\" name=\"email\" placeholder=\"Email\" ngModel required>\r\n          </div>\r\n          <div class=\"field input\">\r\n            <label>Mot de Passe</label>\r\n            <input type=\"password\" name=\"password\" placeholder=\"enter Password\" ngModel required>\r\n          </div>\r\n          <div class=\"field button\">\r\n            <input type=\"submit\" [disabled]=\"form.invalid\" value=\"Go !\">\r\n          </div>\r\n        </form>\r\n        <div class=\"link\">Already sign Up ?<a href=\"#\">Log in !</a></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_signup_signup_module_ts.js.map