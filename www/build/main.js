webpackJsonp([2],{

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/church-detail/church-detail.module": [
		279,
		1
	],
	"../pages/give-modal/give-modal.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChurchDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage_dist_src_storage__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChurchDetailPage = (function () {
    function ChurchDetailPage(navCtrl, navParams, getChurches, modalCtrl, alertController, toastController, storage, getFavorites) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getChurches = getChurches;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.toastController = toastController;
        this.storage = storage;
        this.getFavorites = getFavorites;
        this.isFollowing = false;
        this.data = navParams.get('data');
        console.log('the data is:', this.data);
        this.churchId = this.data.church.id;
        console.log('The id is:', this.churchId);
        //hard-coded in until authentication is set up GREAT PRACTICE I AM GOOD AT PROGRAMMING
        this.userId = 7;
        this.getFavorites.isFavorite(this.churchId).then(function (value) { return _this.isFollowing = value; });
    }
    ChurchDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChurchDetailPage');
        this.transactions = this.getUserTransactions(this.getChurches.initializeTransactions(), this.userId, this.churchId);
        console.log('the transactions are:', this.transactions);
    };
    ChurchDetailPage.prototype.getUserTransactions = function (trans, userId, churchId) {
        console.log('getUserTransactions method called');
        //console.log('the userId is:', this.userId);
        //console.log('The transactions to filter are:', trans);
        return __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](trans, { 'userId': this.userId, 'churchId': this.churchId });
    };
    ChurchDetailPage.prototype.openModal = function () {
        var obj = this.data;
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages__["b" /* GiveModalPage */], { 'obj': obj });
        myModal.present();
    };
    ChurchDetailPage.prototype.goHome = function (index) {
        this.navCtrl.pop();
        var t = this.navCtrl.parent;
        t.select(index);
    };
    ChurchDetailPage.prototype.toggleFollow = function () {
        var _this = this;
        if (this.isFollowing) {
            var confirm_1 = this.alertController.create({
                title: "Unfollow?",
                message: "Are you sure you want to unfollow?",
                buttons: [
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.isFollowing = false;
                            _this.getFavorites.unfavoriteChurch(_this.churchId);
                            console.log('The church with id #', _this.churchId, 'has been removed from favorites');
                            var toast = _this.toastController.create({
                                message: 'You have unfollowed this church',
                                duration: 1000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                    },
                    { text: 'No' }
                ]
            });
            confirm_1.present();
        }
        else {
            this.isFollowing = true;
            this.getFavorites.favoriteChurch(this.data.church);
            var toast = this.toastController.create({
                message: 'You are following this church',
                duration: 1000,
                position: 'bottom'
            });
            toast.present();
            console.log('The church with id #', this.churchId, 'has been added to favorites');
        }
    };
    return ChurchDetailPage;
}());
ChurchDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-church-detail',template:/*ion-inline-start:"/Users/mmoesta/Documents/Ionic/church-giving-app/src/pages/church-detail/church-detail.html"*/'<!--\n  Generated template for the ChurchDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = "primary">\n    <ion-title>{{data.church.name}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)=\'goHome(0)\'>\n        <ion-icon name=\'home\'></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src={{data.church.pastorUrl}}>\n      </ion-avatar>\n      <h2 class = "headercenter">{{data.church.name}}</h2>\n      \n      <button ion-button item-right item-top *ngIf = "isFollowing" (click)=\'toggleFollow()\'>\n        <ion-icon name="star"></ion-icon>\n      </button>\n      <button ion-button item-right item-top *ngIf = "!isFollowing" (click)=\'toggleFollow()\'>\n        <ion-icon name="sad"></ion-icon>\n      </button>\n\n    </ion-item>\n    <ion-item>\n      <h2 class = "headercenter">{{data.church.pastor}}</h2>\n      <h2 class = "headercenter">{{data.church.city}}, {{data.church.state}}</h2>\n    </ion-item>\n    <button ion-button block color="secondary" (click)="openModal()">\n        Give\n    </button>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-title>Your Recent Giving</ion-title>\n        <ion-grid *ngFor="let item of transactions">\n          <ion-row align-items-start>\n            <ion-col>\n                {{item.date| date:\'MM/dd/yyyy\'}} \n            </ion-col>\n            <ion-col>\n                {{item.amount| currency:\'USD\':true}}\n            </ion-col> \n          </ion-row>\n        </ion-grid>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/mmoesta/Documents/Ionic/church-giving-app/src/pages/church-detail/church-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_shared_shared__["a" /* GetChurches */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage_dist_src_storage__["a" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__app_shared_shared__["b" /* GetFavorites */]])
], ChurchDetailPage);

//# sourceMappingURL=church-detail.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiveModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_stripe__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GiveModalPage = (function () {
    function GiveModalPage(navCtrl, navParams, viewController, stripe, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
        this.stripe = stripe;
        this.http = http;
        this.cardinfo = {
            number: '4242424242424242',
            expMonth: '05',
            expYear: '2020',
            cvc: '844'
        };
        this.churchGive = navParams.get('obj');
        console.log('the church data is: ', this.churchGive);
    }
    GiveModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GiveModalPage');
    };
    GiveModalPage.prototype.cancelModal = function () {
        this.viewController.dismiss();
    };
    GiveModalPage.prototype.giveClose = function () {
        this.navCtrl.setPages([
            { page: __WEBPACK_IMPORTED_MODULE_2__pages__["f" /* TabsPage */] }
        ]);
    };
    GiveModalPage.prototype.pay = function () {
        var _this = this;
        this.stripe.setPublishableKey('pk_test_VCjpSYZvlpb4hCGjLJWERGgH');
        this.stripe.createCardToken(this.cardinfo).then(function (token) {
            var data = 'stripetoken=' + token + '&amount=50';
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append('Content-type', 'application/x-www-form-urlencoded');
            _this.http.post('http:localhost:5000/processpay', data, { headers: headers }).subscribe(function (res) {
                if (res.json().success) {
                    alert('transaction successful!!');
                }
                else {
                    alert('your transaction failed!');
                }
            });
        });
    };
    return GiveModalPage;
}());
GiveModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-give-modal',template:/*ion-inline-start:"/Users/mmoesta/Documents/Ionic/church-giving-app/src/pages/give-modal/give-modal.html"*/'<!--\n  Generated template for the GiveModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Give</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  {{churchGive.church.name}}\n  <button ion-button (click)=\'cancelModal()\'>\n    Cancel\n  </button>\n  <button ion-button (click)=\'giveClose()\'>\n    Give\n  </button>\n  <!---\n  <ion-input [(ngModel)] = \'cardinfo.number\' placeholder = \'card number\'></ion-input>\n  <ion-input [(ngModel)] = \'cardinfo.expMonth\' placeholder=\'expiry month\'></ion-input>\n  <ion-input [(ngModel)] = \'cardinfo.expYear\' placeholder=\'expiry year\'></ion-input>\n  <ion-input [(ngModel)] = \'cardinfo.cvc\' placeholder=\'cvc\'></ion-input>\n  -->\n  <button ion-button (click) = "pay()">Pay whenever you click am changing the info</button>\n</ion-content>\n'/*ion-inline-end:"/Users/mmoesta/Documents/Ionic/church-giving-app/src/pages/give-modal/give-modal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_stripe__["a" /* Stripe */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
], GiveModalPage);

//# sourceMappingURL=give-modal.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pages__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_stripe__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_pages__["d" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_pages__["e" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_pages__["c" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_pages__["a" /* ChurchDetailPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_pages__["f" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_pages__["b" /* GiveModalPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/church-detail/church-detail.module#ChurchDetailPageModule', name: 'ChurchDetailPage', segment: 'church-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/give-modal/give-modal.module#GiveModalPageModule', name: 'GiveModalPage', segment: 'give-modal', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_pages__["d" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_pages__["e" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_pages__["c" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_pages__["a" /* ChurchDetailPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_pages__["f" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_pages__["b" /* GiveModalPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__shared_shared__["a" /* GetChurches */],
            __WEBPACK_IMPORTED_MODULE_7__shared_shared__["b" /* GetFavorites */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_stripe__["a" /* Stripe */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetChurches; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GetChurches = (function () {
    function GetChurches() {
    }
    GetChurches.prototype.initializeChurches = function () {
        this.allChurches = [
            {
                church: { id: 1, name: 'CityLight Church', address: '123 Main Avenue', pastor: 'Tim Smith', city: 'Philadelphia', state: 'PA',
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtm1gNfspDXYDGM3lXiCQAVRlS3iBt2nuecJYALVgBiYQzZ_HV",
                    pastorUrl: "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr02/2013/6/24/13/enhanced-buzz-orig-27318-1372096625-31.jpg?downsize=715:*&output-format=auto&output-quality=auto" }
            },
            {
                church: { id: 2, name: 'Christ Presbyterian Church', address: '161 Leverington Avenue', pastor: 'Craig Luekens', city: 'New Haven', state: 'CT',
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtm1gNfspDXYDGM3lXiCQAVRlS3iBt2nuecJYALVgBiYQzZ_HV",
                    pastorUrl: "https://static1.squarespace.com/static/53959f2ce4b0d0ce55449ea5/55e47a42e4b04628c9f642e0/560015e7e4b0d0893715381d/1490702123519/OWEN+WILSON.jpg?format=300w" }
            },
            {
                church: { id: 3, name: 'Rock Church', address: '123 Smith Avenue', pastor: 'Tim Smith', city: 'Richmond', state: 'VA',
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtm1gNfspDXYDGM3lXiCQAVRlS3iBt2nuecJYALVgBiYQzZ_HV",
                    pastorUrl: "https://static1.squarespace.com/static/53959f2ce4b0d0ce55449ea5/55e47a42e4b04628c9f642e0/560015e7e4b0d0893715381d/1490702123519/OWEN+WILSON.jpg?format=300w" }
            },
            {
                church: { id: 4, name: 'Epic Church On the Lake', address: '161 Leverington Avenue', pastor: 'Craig Luekens', city: 'Nashville', state: 'TN',
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtm1gNfspDXYDGM3lXiCQAVRlS3iBt2nuecJYALVgBiYQzZ_HV",
                    pastorUrl: "https://upload.wikimedia.org/wikipedia/en/d/d8/Michael_J._Fox_as_Marty_McFly_in_Back_to_the_Future%2C_1985.jpg" }
            },
            {
                church: { id: 5, name: 'Grace Episcopal Church', address: '123 Main Avenue', pastor: 'Tim Smith', city: 'Little Rock', state: 'AK',
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtm1gNfspDXYDGM3lXiCQAVRlS3iBt2nuecJYALVgBiYQzZ_HV",
                    pastorUrl: "https://upload.wikimedia.org/wikipedia/en/d/d8/Michael_J._Fox_as_Marty_McFly_in_Back_to_the_Future%2C_1985.jpg" }
            },
            {
                church: { id: 6, name: 'Church of the Cross', address: '161 Leverington Avenue', pastor: 'Craig Luekens', city: 'Detroit', state: 'MI',
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtm1gNfspDXYDGM3lXiCQAVRlS3iBt2nuecJYALVgBiYQzZ_HV",
                    pastorUrl: "https://upload.wikimedia.org/wikipedia/en/d/d8/Michael_J._Fox_as_Marty_McFly_in_Back_to_the_Future%2C_1985.jpg" }
            }
        ];
        return this.allChurches;
    };
    GetChurches.prototype.initializeTransactions = function () {
        this.allTransactions = [
            { churchId: 1, tId: 1, date: "2012-04-23T18:25:43.511Z", amount: 25.13, userId: 1, paymentTypeId: 1, cause: "" },
            { churchId: 2, tId: 2, date: "2014-11-11T18:25:43.511Z", amount: 100, userId: 2, paymentTypeId: 2, cause: "General Donations" },
            { churchId: 3, tId: 3, date: "2014-11-11T18:25:43.511Z", amount: 100, userId: 7, paymentTypeId: 2, cause: "Mission Trip" },
            { churchId: 4, tId: 4, date: "2014-11-11T18:25:43.511Z", amount: 100, userId: 4, paymentTypeId: 2, cause: "Other" },
            { churchId: 2, tId: 5, date: "2014-11-11T18:25:43.511Z", amount: 100, userId: 5, paymentTypeId: 2, cause: "" },
            { churchId: 2, tId: 6, date: "2014-11-11T18:25:43.511Z", amount: 100, userId: 6, paymentTypeId: 2, cause: "General Donations" },
            { churchId: 2, tId: 7, date: "2014-11-18T18:25:43.511Z", amount: 4.30, userId: 7, paymentTypeId: 2, cause: "Random Act of Kindess" },
            { churchId: 2, tId: 8, date: "2014-11-25T18:25:43.511Z", amount: 55.15, userId: 7, paymentTypeId: 2, cause: "Thing" },
            { churchId: 2, tId: 9, date: "2014-12-02T18:25:43.511Z", amount: 120.45, userId: 7, paymentTypeId: 2, cause: "This is a great app" },
            { churchId: 2, tId: 10, date: "2014-12-09T18:25:43.511Z", amount: 1000.00, userId: 7, paymentTypeId: 2, cause: "I'm Rich" }
        ];
        return this.allTransactions;
    };
    return GetChurches;
}());
GetChurches = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], GetChurches);

//# sourceMappingURL=get-churches.service.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetFavorites; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_events__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetFavorites = (function () {
    function GetFavorites(storage, events) {
        this.storage = storage;
        this.events = events;
    }
    GetFavorites.prototype.getAllFavorites = function () {
        console.log('getAllFavorites method called');
        var favorites = [];
        this.storage.forEach(function (value, key, index) {
            favorites.push(key);
        });
        //console.log('the keys in storage are:',favorites);
        return favorites;
    };
    GetFavorites.prototype.isFavorite = function (churchId) {
        return this.storage.get(churchId.toString());
    };
    GetFavorites.prototype.getFavoriteChurches = function () {
        var favChurches = [];
        console.log('getFavoriteChurches method called');
        this.storage.forEach(function (value, key, index) {
            favChurches.push(value);
        });
        console.log('The data for the favorite churches are:', favChurches);
        return favChurches;
    };
    GetFavorites.prototype.favoriteChurch = function (church) {
        var item = { church: church };
        this.storage.set(church.id, item);
        this.events.publish('favorites:changed');
    };
    GetFavorites.prototype.unfavoriteChurch = function (churchId) {
        this.storage.remove(churchId);
        this.events.publish('favorites:changed');
    };
    GetFavorites.prototype.placeholderMethod = function () {
    };
    return GetFavorites;
}());
GetFavorites = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_events__["a" /* Events */]])
], GetFavorites);

//# sourceMappingURL=get-favorites.service.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_shared__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, navParams, modalController, getFavorites, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalController = modalController;
        this.getFavorites = getFavorites;
        this.storage = storage;
        this.hardcodedChurches = [
            {
                church: { id: 1, name: 'CityLight Church', address: '123 Main Avenue', pastor: 'Tim Smith',
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtm1gNfspDXYDGM3lXiCQAVRlS3iBt2nuecJYALVgBiYQzZ_HV" }
            },
            {
                church: { id: 'apartment', name: 'Christ Presbyterian Church', address: '161 Leverington Avenue', pastor: 'Craig Luekens',
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtm1gNfspDXYDGM3lXiCQAVRlS3iBt2nuecJYALVgBiYQzZ_HV" }
            }
        ];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter HomePage');
        this.myChurches = this.getFavorites.getFavoriteChurches();
        this.favArray = this.getFavorites.getAllFavorites();
        //var testMyChurches = myChurches[0];
        console.log('myChurches are:', this.myChurches);
        console.log('hardcoded churches are:', this.hardcodedChurches);
    };
    HomePage.prototype.openModal = function (item) {
        var myModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_2__pages__["b" /* GiveModalPage */], { 'obj': item });
        myModal.present();
    };
    HomePage.prototype.unfollowFromHome = function (churchId) {
        this.getFavorites.unfavoriteChurch(churchId);
        this.ionViewWillEnter();
    };
    HomePage.prototype.areFavorites = function () {
        if (this.storage.keys) {
            return true;
        }
        else {
            return false;
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/mmoesta/Documents/Ionic/church-giving-app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color = \'primary\'>\n      <ion-title>Church Giving</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content *ngIf=\'areFavorites()\'>\n  <ion-list>\n    <ion-list-header>\n      Churches Nearby\n    </ion-list-header>\n    <ion-card *ngFor = \'let item of nearbyChurches\' >\n      <ion-card-title>\n        {{item.church.name}}\n      </ion-card-title>\n      <p>\n        Pastor: {{item.church.pastor}}\n      </p>\n    </ion-card>\n  </ion-list>\n</ion-content>\n\n<ion-content *ngIf=\'areFavorites()\'>\n  <ion-card *ngFor="let item of myChurches">\n    <ion-grid>\n      <ion-row>\n        <ion-col></ion-col>\n        <ion-col><img src={{item.church.imageUrl}}></ion-col>\n        <ion-col>\n          <button ion-button (click)="unfollowFromHome(item.church.id)">\n            Unfollow\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-card-title>\n      {{item.church.name}}\n    </ion-card-title>\n    <p>\n      {{item.church.pastor}}\n    </p>\n    <button ion-button block color="secondary" (click)="openModal(item)">\n      Give\n    </button>\n  </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"/Users/mmoesta/Documents/Ionic/church-giving-app/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__app_shared_shared__["b" /* GetFavorites */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = (function () {
    function SearchPage(navCtrl, getChurches, navParams, modalController) {
        this.navCtrl = navCtrl;
        this.getChurches = getChurches;
        this.navParams = navParams;
        this.modalController = modalController;
        this.allChurches = this.getChurches.initializeChurches();
        console.log('constructor says these are the churches:', this.allChurches);
    }
    SearchPage.prototype.updateChurches = function (ev) {
        // Reset items back to all of the items
        this.allChurches = this.getChurches.initializeChurches();
        // set val to value of ev target
        var val = ev.target.value;
        //if value is '' then don't filter the items
        if (val && val.trim() != '') {
            this.allChurches = this.allChurches.filter(function (item) {
                return (item.church.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SearchPage.prototype.goToCD = function (val) {
        console.log('goToCD method called');
        console.log("The church clicked is:", val.church.name);
        this.data = val;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages__["a" /* ChurchDetailPage */], { 'data': this.data });
    };
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/mmoesta/Documents/Ionic/church-giving-app/src/pages/search/search.html"*/'<ion-header>  \n  <ion-navbar color="primary">\n    <ion-title>\n      Find a Church my brotha!\n    </ion-title>\n  </ion-navbar>\n    <ion-searchbar (ionInput)=\'updateChurches($event)\'>\n    </ion-searchbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n            <button ion-item *ngFor="let item of allChurches" (click)=\'goToCD(item)\' >\n                {{item.church.name}}\n            </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/mmoesta/Documents/Ionic/church-giving-app/src/pages/search/search.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_shared_shared__["a" /* GetChurches */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_platform_platform__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = (function () {
    function SettingsPage(navCtrl, navpParams, platform, alertController) {
        this.navCtrl = navCtrl;
        this.navpParams = navpParams;
        this.platform = platform;
        this.alertController = alertController;
    }
    SettingsPage.prototype.showPlatform = function () {
        var text = 'I run on' + this.platform.platforms();
        var alert = this.alertController.create({
            title: 'My Home',
            subTitle: text,
            buttons: ['Ok']
        });
        alert.present();
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/mmoesta/Documents/Ionic/church-giving-app/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n    <ion-item \n      (click)=\'showPlatform()\'> Where am I? \n    </ion-item> \n  </ion-list>\n   \n</ion-content>\n'/*ion-inline-end:"/Users/mmoesta/Documents/Ionic/church-giving-app/src/pages/settings/settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_platform_platform__["a" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_pages__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tabToShow = 1;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__pages_pages__["c" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__pages_pages__["d" /* SearchPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__pages_pages__["e" /* SettingsPage */];
    }
    return TabsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */])
], TabsPage.prototype, "nav", void 0);
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/mmoesta/Documents/Ionic/church-giving-app/src/pages/tabs/tabs.html"*/'\n<ion-tabs>\n  <ion-tab [root]="tab1Root"  tabTitle="My Churches" tabIcon="heart-outline"></ion-tab>\n  <ion-tab [root]="tab2Root"  tabTitle="Find a Church" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab3Root"  tabTitle="Settings" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/mmoesta/Documents/Ionic/church-giving-app/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared_shared__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_pages__["f" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/mmoesta/Documents/Ionic/church-giving-app/src/app/app.html"*/' <ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/mmoesta/Documents/Ionic/church-giving-app/src/app/app.html"*/,
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__app_shared_shared__["a" /* GetChurches */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared_shared__["b" /* GetFavorites */]
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(247);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search__ = __webpack_require__(248);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__search_search__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(249);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(250);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__church_detail_church_detail__ = __webpack_require__(198);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__church_detail_church_detail__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__give_modal_give_modal__ = __webpack_require__(199);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__give_modal_give_modal__["a"]; });






//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_churches_service__ = __webpack_require__(243);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__get_churches_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_favorites_service__ = __webpack_require__(244);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__get_favorites_service__["a"]; });


//# sourceMappingURL=shared.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map