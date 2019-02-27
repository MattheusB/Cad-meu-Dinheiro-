webpackJsonp([0],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginCadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginCadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginCadastroPage = /** @class */ (function () {
    function LoginCadastroPage(navCtrl, navParams, toastCtrl, autenticacao, menuController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.autenticacao = autenticacao;
        this.menuController = menuController;
        this.usuario = {};
        this.isCadastro = 0; // 0 = login, 1 = cadastro, 2 = esqueci minha senha
        this.nomeVazio = false;
        this.usernameVazio = false;
        this.emailVazio = false;
        this.senhaVazia = false;
        this.senhaInvalida = false;
    }
    LoginCadastroPage.prototype.ionViewWillEnter = function () {
        this.menuController.enable(false);
    };
    LoginCadastroPage.prototype.ionViewWillLeave = function () {
        this.menuController.enable(true);
    };
    LoginCadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginCadastroPage');
    };
    LoginCadastroPage.prototype.loginOuCadastro = function (resposta) {
        if (resposta === "login") {
            this.isCadastro = 0;
        }
        else if (resposta === "cadastro") {
            this.isCadastro = 1;
        }
        else {
            this.isCadastro = 2;
        }
    };
    LoginCadastroPage.prototype.abrirToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    LoginCadastroPage.prototype.realizaLogin = function () {
        var _this = this;
        if (!this.confirmaDadosLogin()) {
            this.abrirToast("Ops! Parece que você deixou de preencher algo, ou preencheu incorretamente.");
        }
        else {
            this.autenticacao.login(this.email, this.senha).then(function (result) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                _this.abrirToast("Bem-vindo(a) de volta!");
            }, function (error) {
                _this.abrirToast(error);
            });
        }
    };
    LoginCadastroPage.prototype.realizaCadastro = function () {
        var _this = this;
        if (!this.confirmaDadosCadastro()) {
            this.abrirToast("Ops! Parece que você deixou de preencher algo, ou preencheu incorretamente.");
        }
        else {
            this.autenticacao.registrar(this.email, this.senha, this.username, this.nome).then(function (result) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                _this.abrirToast("Olá, " + _this.nome + "!");
            }, function (error) {
                _this.abrirToast(error);
            });
        }
    };
    LoginCadastroPage.prototype.alterarSenha = function (email) {
        var _this = this;
        this.autenticacao.resetarSenha(email).then(function (result) {
            _this.abrirToast("E-mail para recuperação de senha enviado.");
            _this.isCadastro = 0;
        }, function (error) {
            _this.abrirToast(error);
        });
    };
    LoginCadastroPage.prototype.confirmaDadosLogin = function () {
        this.emailVazio = this.email == "" || this.email == null;
        this.senhaVazia = this.senha == "" || this.senha == null;
        return !this.emailVazio && !this.senhaVazia;
    };
    LoginCadastroPage.prototype.confirmaDadosCadastro = function () {
        this.nomeVazio = this.nome == "" || this.nome == null;
        this.usernameVazio = this.username == "" || this.username == null;
        this.emailVazio = this.email == "" || this.email == null;
        this.senhaVazia = this.senha == "" || this.senha == null;
        this.senhaInvalida = this.senha != "" && this.senha.length < 6;
        return !this.nomeVazio && !this.usernameVazio && !this.emailVazio && !this.senhaVazia && !this.senhaInvalida;
    };
    LoginCadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-cadastro',template:/*ion-inline-start:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/pages/login-cadastro/login-cadastro.html"*/'<ion-header>\n  <ion-navbar color="corPrimaria">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cadê Meu Dinheiro</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="cor-background">\n\n  <img padding src="assets/imgs/cmd.png">\n\n<div *ngIf="isCadastro == 0">\n  <ion-card>\n    <ion-card-header color="corPrimaria">\n      Login\n    </ion-card-header>\n\n    <ion-item>\n      <ion-icon name=\'mail\' item-start color="corPrimaria"></ion-icon>\n      <ion-input type="text" placeholder="E-mail" [(ngModel)]="email"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="emailVazio">\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n      <p class="erro">Digite seu endereço de e-mail.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'key\' item-start color="corPrimaria"></ion-icon>\n      <ion-input type="password" [(ngModel)]="senha" placeholder="Senha"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="senhaVazia">\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n      <p class="erro">Digite sua senha.</p>\n    </ion-item>\n\n  </ion-card>\n</div>\n\n<div *ngIf="isCadastro == 1">\n  <ion-card>\n    <ion-card-header color="corEmprestimo">\n      Cadastrar\n    </ion-card-header>\n\n    <ion-item>\n      <ion-icon name=\'person\' item-start color="corEmprestimo"></ion-icon>\n      <ion-input type="text" placeholder="Nome" [(ngModel)]="nome"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="nomeVazio">\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n      <p class="erro">Digite seu nome.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'contact\' item-start color="corEmprestimo"></ion-icon>\n      <ion-input type="text" placeholder="Usuário" [(ngModel)]="username"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="usernameVazio">\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n      <p class="erro">Digite seu nome de usuário.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'mail\' item-start color="corEmprestimo"></ion-icon>\n      <ion-input type="text" placeholder="Email" [(ngModel)]="email"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="emailVazio">\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n      <p class="erro">Digite seu endereço de e-mail.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'key\' item-start color="corEmprestimo"></ion-icon>\n      <ion-input type="password" [(ngModel)]="senha" placeholder="Senha"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="senhaVazia">\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n      <p class="erro">Digite sua senha.</p>\n    </ion-item>\n    <ion-item *ngIf="senhaInvalida">\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n      <p class="erro">A senha deve conter no mínimo 6 caracteres.</p>\n    </ion-item>\n\n  </ion-card>\n\n</div>\n\n<div *ngIf="isCadastro == 2">\n  <ion-card>\n    <ion-card-header color="corDivida">\n      Esqueci minha senha\n    </ion-card-header>\n\n    <ion-item>\n      <ion-icon name=\'mail\' item-start color="corDivida"></ion-icon>\n      <ion-input type="text" placeholder="E-mail" [(ngModel)]="email"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="emailVazio">\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n      <p class="erro">Digite seu endereço de e-mail.</p>\n    </ion-item>\n  </ion-card>\n\n</div>\n\n<ion-row>\n  <ion-col width-50 style="text-align: center">\n    <button padding ion-button clear icon-start color="corEmprestimo" *ngIf="isCadastro == 0" (click)="loginOuCadastro(\'cadastro\')">\n        <ion-icon color="corEmprestimo" name="send"></ion-icon>\n      Primeira vez no app? Registre-se!\n    </button>\n    <button padding ion-button clear icon-start color="corPrimaria" *ngIf="isCadastro == 1 || isCadastro == 2" (click)="loginOuCadastro(\'login\')">\n      <ion-icon color="corPrimaria" name="arrow-dropleft"></ion-icon>\n      Voltar para login\n    </button>\n    <button padding ion-button clear icon-start color="corDivida" *ngIf="isCadastro == 0" (click)="loginOuCadastro(\'senha\')">\n        <ion-icon color="corDivida" name="lock"></ion-icon>\n      Esqueci minha senha\n    </button>\n    </ion-col>\n</ion-row>\n\n\n<ion-fab *ngIf="isCadastro == 0" bottom right>\n  <button ion-fab (click)="realizaLogin()" color="corPrimaria">\n    <ion-icon name="log-in"></ion-icon>\n  </button>\n</ion-fab>\n\n\n<ion-fab *ngIf="isCadastro == 1" bottom right>\n  <button ion-fab (click)="realizaCadastro()" color="corEmprestimo">\n    <ion-icon name="arrow-dropright-circle"></ion-icon>\n  </button>\n</ion-fab>\n\n<ion-fab *ngIf="isCadastro == 2" bottom right>\n  <button ion-fab (click)="alterarSenha(email)" color="corDivida">\n    <ion-icon name="send"></ion-icon>\n  </button>\n</ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/pages/login-cadastro/login-cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], LoginCadastroPage);
    return LoginCadastroPage;
}());

//# sourceMappingURL=login-cadastro.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_divida_service_divida_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adiciona_divida_adiciona_divida__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adiciona_emprestimo_adiciona_emprestimo__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mostra_divida_mostra_divida__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_emprestimo_service_emprestimo_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mostra_emprestimo_mostra_emprestimo__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, dividaService, emprestimoService, statusBar) {
        this.navCtrl = navCtrl;
        this.dividaService = dividaService;
        this.emprestimoService = emprestimoService;
        this.statusBar = statusBar;
        this.dividas = [];
        this.emprestimos = [];
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.statusBar.backgroundColorByHexString("#006400");
        this.dividas = this.filtraAbertos(this.dividaService.recebeDividas());
        this.emprestimos = this.filtraAbertos(this.emprestimoService.recebeEmprestimos());
    };
    HomePage.prototype.retornaSoma = function (lista) {
        var soma = 0.0;
        for (var i = 0; i < lista.length; i++) {
            soma += +lista[i].valor;
        }
        return this.formataValor(soma);
    };
    HomePage.prototype.filtraAbertos = function (lista) {
        return lista.filter(function (x) { return x.aberta == true; });
    };
    HomePage.prototype.formataValor = function (valor) {
        return Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(valor);
    };
    //Dividas
    HomePage.prototype.modalAdicionaDivida = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__adiciona_divida_adiciona_divida__["a" /* AdicionaDividaPage */]);
        this.fab.close();
    };
    HomePage.prototype.modalMostraDivida = function (divida) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__mostra_divida_mostra_divida__["a" /* MostraDividaPage */], divida);
    };
    HomePage.prototype.existeDivida = function () {
        return this.dividas.length > 0;
    };
    //Empréstimos
    HomePage.prototype.modalAdicionaEmprestimo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__adiciona_emprestimo_adiciona_emprestimo__["a" /* AdicionaEmprestimoPage */]);
        this.fab.close();
    };
    HomePage.prototype.existeEmprestimo = function () {
        return this.emprestimos.length > 0;
    };
    HomePage.prototype.modalMostraEmprestimo = function (emprestimo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__mostra_emprestimo_mostra_emprestimo__["a" /* MostraEmprestimoPage */], emprestimo);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fab'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "fab", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar color="corPrimaria">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cor-background">\n\n\n\n<ion-list>\n\n  <ion-card>\n\n    <ion-card-header color="corEmprestimo">\n\n      Empréstimos\n\n      <p *ngIf="existeEmprestimo()" class="totalEmprestimo">R$ {{retornaSoma(emprestimos)}}</p>\n\n    </ion-card-header>\n\n\n\n    <ion-item *ngIf="!existeEmprestimo()">\n\n      <p style="white-space: normal;" text-center>Não há nenhum empréstimo registrado.</p>\n\n    </ion-item>\n\n\n\n    <ion-item *ngFor="let emprestimo of emprestimos">\n\n      <div id="nome" item-start></div>\n\n      <ion-thumbnail item-start style="\n\n      min-width: 65px;\n\n      min-height:  65px;\n\n  ">\n\n        <ion-avatar>\n\n          <img class="fotoUsuario" src="assets/imgs/emprestimo.png" style="\n\n          width:  65px;\n\n          height:  65px;\n\n      ">\n\n        </ion-avatar>\n\n      </ion-thumbnail>\n\n      <ion-label>\n\n        <h2>{{emprestimo.nome}}</h2>\n\n        <div style="overflow: hidden;">\n\n          <p style="float: left;">Valor: </p>\n\n          <p class="precoEmprestimo">R$ {{formataValor(emprestimo.valor)}}</p>\n\n        </div>\n\n      </ion-label>\n\n      <button ion-button color="corEmprestimo" clear item-end (click)="modalMostraEmprestimo(emprestimo)">Detalhes</button>\n\n    </ion-item>\n\n  </ion-card>\n\n</ion-list>\n\n\n\n  <ion-list>\n\n    <ion-card>\n\n      <ion-card-header color="corDivida">\n\n        Dívidas\n\n        <p *ngIf="existeDivida()" class="totalDivida">R$ {{retornaSoma(dividas)}}</p>\n\n      </ion-card-header>\n\n\n\n      <ion-item *ngIf="!existeDivida()">\n\n        <p style="white-space: normal;" text-center>Não há nenhuma dívida registrada.</p>\n\n      </ion-item>\n\n  \n\n      <ion-item *ngFor="let divida of dividas">\n\n             \n\n        <div id="nome" item-start></div>\n\n        <ion-thumbnail item-start style="\n\n        min-width: 65px;\n\n        min-height:  65px;\n\n    ">\n\n          <ion-avatar>\n\n            <img src="assets/imgs/divida.png" style="\n\n            width:  65px;\n\n            height:  65px;\n\n        ">\n\n          </ion-avatar>\n\n        </ion-thumbnail>\n\n        <ion-label>\n\n          <h2>{{divida.nome}}</h2>\n\n          <div style="overflow: hidden;">\n\n            <p style="float: left;">Valor: </p>\n\n            <p class="precoDivida">R$ {{formataValor(divida.valor)}}</p>\n\n          </div>\n\n        </ion-label>\n\n        <button ion-button color="corDivida" clear item-end (click)="modalMostraDivida(divida)" >Detalhes</button>\n\n      </ion-item>\n\n\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n  <ion-fab bottom right #fab>\n\n    <button ion-fab color="corPrimaria">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n    <ion-fab-list side="top">\n\n        <button ion-fab (click)="modalAdicionaDivida()" color="corDivida">\n\n          <ion-icon name="cash" color="light"></ion-icon>\n\n          <ion-label>Dívida</ion-label>\n\n        </button>\n\n        <button ion-fab (click)="modalAdicionaEmprestimo()"color="corEmprestimo">\n\n          <ion-icon name="cash" color="light"></ion-icon>\n\n          <ion-label>Empréstimo</ion-label>\n\n      </button>\n\n    </ion-fab-list>\n\n\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_divida_service_divida_service__["a" /* DividaServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_emprestimo_service_emprestimo_service__["a" /* EmprestimoServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 175:
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
webpackEmptyAsyncContext.id = 175;

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adiciona-divida/adiciona-divida.module": [
		221
	],
	"../pages/adiciona-emprestimo/adiciona-emprestimo.module": [
		226
	],
	"../pages/edita-divida/edita-divida.module": [
		228
	],
	"../pages/edita-emprestimo/edita-emprestimo.module": [
		230
	],
	"../pages/edita-perfil/edita-perfil.module": [
		232
	],
	"../pages/login-cadastro/login-cadastro.module": [
		342
	],
	"../pages/mostra-divida/mostra-divida.module": [
		345
	],
	"../pages/mostra-emprestimo/mostra-emprestimo.module": [
		346
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 220;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdicionaDividaPageModule", function() { return AdicionaDividaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adiciona_divida__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdicionaDividaPageModule = /** @class */ (function () {
    function AdicionaDividaPageModule() {
    }
    AdicionaDividaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__adiciona_divida__["a" /* AdicionaDividaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__adiciona_divida__["a" /* AdicionaDividaPage */]),
            ],
        })
    ], AdicionaDividaPageModule);
    return AdicionaDividaPageModule;
}());

//# sourceMappingURL=adiciona-divida.module.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdicionaDividaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_divida_service_divida_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdicionaDividaPage = /** @class */ (function () {
    function AdicionaDividaPage(navCtrl, navParams, dividaService, toastCtrl, statusBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dividaService = dividaService;
        this.toastCtrl = toastCtrl;
        this.statusBar = statusBar;
        this.divida = {};
        this.nomeVazio = false;
        this.valorInvalido = false;
        this.valorVazio = false;
        this.dataVazia = false;
        this.descricaoVazia = false;
    }
    AdicionaDividaPage.prototype.ionViewWillEnter = function () {
        this.statusBar.backgroundColorByHexString("#d30000");
    };
    AdicionaDividaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdicionaDividaPage');
    };
    AdicionaDividaPage.prototype.abrirToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    AdicionaDividaPage.prototype.adicionaDivida = function () {
        if (!this.confirmaDados()) {
            this.abrirToast("Ops! Parece que você deixou de preencher algo, ou preencheu incorretamente.");
        }
        else {
            this.ajustaData();
            this.divida.aberta = true;
            this.dividaService.adiciona(this.divida);
            this.navCtrl.pop();
            this.abrirToast("A dívida de " + this.divida.nome + " foi adicionada.");
        }
    };
    AdicionaDividaPage.prototype.ajustaData = function () {
        var dataSeparada = this.data.split("-");
        console.log(dataSeparada);
        var ano = Number(dataSeparada[0]);
        var mes = Number(dataSeparada[1]) - 1;
        var dia = Number(dataSeparada[2]);
        console.log(new Date(ano, mes, dia));
        this.divida.data = new Date(ano, mes, dia);
    };
    AdicionaDividaPage.prototype.confirmaDados = function () {
        this.nomeVazio = this.divida.nome == "" || this.divida.nome == null;
        this.valorInvalido = this.divida.valor <= 0 && this.divida.valor != {};
        this.valorVazio = this.divida.valor == null || this.divida.valor == {};
        this.dataVazia = this.data == null;
        this.descricaoVazia = this.divida.descricao == "" || this.divida.descricao == null;
        return !this.valorInvalido && !this.nomeVazio && !this.valorVazio &&
            !this.dataVazia && !this.descricaoVazia;
    };
    AdicionaDividaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adiciona-divida',template:/*ion-inline-start:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/pages/adiciona-divida/adiciona-divida.html"*/'<ion-header>\n\n  <ion-navbar color="corDivida">\n\n    <ion-title>Nova dívida</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="cor-background">\n\n  <ion-card>\n\n    <ion-card-header color="corDivida">\n\n      Informações\n\n    </ion-card-header>\n\n    \n\n\n\n    <ion-item>\n\n      <ion-icon name=\'person\' item-start color="corDivida"></ion-icon>\n\n      <ion-input type="text" placeholder="Nome" [(ngModel)]="divida.nome"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="nomeVazio">\n\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n\n      <p class="erro">Digite o nome da dívida.</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name=\'cash\' item-start color="corDivida"></ion-icon>\n\n      <ion-input type="number" placeholder="Valor" [(ngModel)]="divida.valor"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="valorInvalido">\n\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n\n      <p class="erro">O valor deverá ser maior que zero.</p>\n\n    </ion-item>\n\n    <ion-item *ngIf="valorVazio">\n\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n\n      <p class="erro">Digite o valor.</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Data</ion-label>\n\n      <ion-icon name=\'calendar\' item-start color="corDivida"></ion-icon>\n\n      <ion-datetime cancelText="Cancelar" doneText="Ok" min="2017" max="2020" displayFormat="DD/MM/YYYY" [(ngModel)]="data"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item *ngIf="dataVazia">\n\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n\n      <p class="erro">Selecione a data.</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name=\'clipboard\' item-start color="corDivida"></ion-icon>\n\n      <ion-input type="text" [(ngModel)]="divida.descricao" placeholder="Descrição"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="descricaoVazia">\n\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n\n      <p class="erro">Digite a descrição.</p>\n\n    </ion-item>\n\n\n\n   \n\n  </ion-card>\n\n\n\n  <ion-fab bottom right>\n\n    <button ion-fab (click)="adicionaDivida()" color="corDivida">\n\n      <ion-icon name="checkmark"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/pages/adiciona-divida/adiciona-divida.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_divida_service_divida_service__["a" /* DividaServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]])
    ], AdicionaDividaPage);
    return AdicionaDividaPage;
}());

//# sourceMappingURL=adiciona-divida.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdicionaEmprestimoPageModule", function() { return AdicionaEmprestimoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adiciona_emprestimo__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdicionaEmprestimoPageModule = /** @class */ (function () {
    function AdicionaEmprestimoPageModule() {
    }
    AdicionaEmprestimoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__adiciona_emprestimo__["a" /* AdicionaEmprestimoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__adiciona_emprestimo__["a" /* AdicionaEmprestimoPage */]),
            ],
        })
    ], AdicionaEmprestimoPageModule);
    return AdicionaEmprestimoPageModule;
}());

//# sourceMappingURL=adiciona-emprestimo.module.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdicionaEmprestimoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_emprestimo_service_emprestimo_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdicionaEmprestimoPage = /** @class */ (function () {
    function AdicionaEmprestimoPage(navCtrl, navParams, toastCtrl, emprestimoService, statusBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.emprestimoService = emprestimoService;
        this.statusBar = statusBar;
        this.emprestimo = {};
        this.nomeVazio = false;
        this.valorInvalido = false;
        this.valorVazio = false;
        this.dataVazia = false;
        this.descricaoVazia = false;
    }
    AdicionaEmprestimoPage.prototype.ionViewWillEnter = function () {
        this.statusBar.backgroundColorByHexString("#00006b");
    };
    AdicionaEmprestimoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdicionaEmprestimoPage');
    };
    AdicionaEmprestimoPage.prototype.abrirToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    AdicionaEmprestimoPage.prototype.adicionaEmprestimo = function () {
        if (!this.confirmaDados()) {
            this.abrirToast("Ops! Parece que você deixou de preencher algo, ou preencheu incorretamente.");
        }
        else {
            this.ajustaData();
            this.emprestimo.aberta = true;
            this.emprestimoService.adiciona(this.emprestimo);
            this.navCtrl.pop();
            this.abrirToast("O empréstimo " + this.emprestimo.nome + " foi adicionado.");
        }
    };
    AdicionaEmprestimoPage.prototype.ajustaData = function () {
        var dataSeparada = this.data.split("-");
        console.log(dataSeparada);
        var ano = Number(dataSeparada[0]);
        var mes = Number(dataSeparada[1]) - 1;
        var dia = Number(dataSeparada[2]);
        console.log(new Date(ano, mes, dia));
        this.emprestimo.data = new Date(ano, mes, dia);
    };
    AdicionaEmprestimoPage.prototype.confirmaDados = function () {
        this.nomeVazio = this.emprestimo.nome == "" || this.emprestimo.nome == null;
        this.valorInvalido = this.emprestimo.valor <= 0 && this.emprestimo.valor != {};
        this.valorVazio = this.emprestimo.valor == null || this.emprestimo.valor == {};
        this.dataVazia = this.data == null;
        this.descricaoVazia = this.emprestimo.descricao == "" || this.emprestimo.descricao == null;
        return !this.valorInvalido && !this.nomeVazio && !this.valorVazio &&
            !this.dataVazia && !this.descricaoVazia;
    };
    AdicionaEmprestimoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adiciona-emprestimo',template:/*ion-inline-start:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/pages/adiciona-emprestimo/adiciona-emprestimo.html"*/'<ion-header>\n\n  <ion-navbar color="corEmprestimo">\n\n    <ion-title>Novo empréstimo</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="cor-background">\n\n  <ion-card>\n\n    <ion-card-header color="corEmprestimo">\n\n      Informações\n\n    </ion-card-header>\n\n    <ion-item>\n\n      <ion-icon name=\'person\' item-start color="corEmprestimo"></ion-icon>\n\n      <ion-input type="text" [(ngModel)]="emprestimo.nome" placeholder="Nome"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="nomeVazio">\n\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n\n      <p class="erro">Digite o nome do empréstimo.</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name=\'cash\' item-start color="corEmprestimo"></ion-icon>\n\n      <ion-input type="number" [(ngModel)]="emprestimo.valor" placeholder="Valor"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="valorInvalido">\n\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n\n      <p class="erro">O valor deverá ser maior que zero.</p>\n\n    </ion-item>\n\n    <ion-item *ngIf="valorVazio">\n\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n\n      <p class="erro">Digite o valor.</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Data</ion-label>\n\n      <ion-icon name=\'calendar\' item-start color="corEmprestimo"></ion-icon>\n\n      <ion-datetime cancelText="Cancelar" doneText="Ok" min="2017" max="2020" displayFormat="DD/MM/YYYY" [(ngModel)]="data"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item *ngIf="dataVazia">\n\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n\n      <p class="erro">Selecione a data.</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name=\'clipboard\' item-start color="corEmprestimo"></ion-icon>\n\n      <ion-input type="text" [(ngModel)]="emprestimo.descricao" placeholder="Descrição"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="descricaoVazia">\n\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n\n      <p class="erro">Digite a descrição.</p>\n\n    </ion-item>\n\n\n\n  </ion-card>\n\n\n\n  <ion-fab bottom right>\n\n    <button ion-fab (click)="adicionaEmprestimo()" color="corEmprestimo">\n\n      <ion-icon name="checkmark"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/pages/adiciona-emprestimo/adiciona-emprestimo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_emprestimo_service_emprestimo_service__["a" /* EmprestimoServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]])
    ], AdicionaEmprestimoPage);
    return AdicionaEmprestimoPage;
}());

//# sourceMappingURL=adiciona-emprestimo.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditaDividaPageModule", function() { return EditaDividaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edita_divida__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditaDividaPageModule = /** @class */ (function () {
    function EditaDividaPageModule() {
    }
    EditaDividaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edita_divida__["a" /* EditaDividaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edita_divida__["a" /* EditaDividaPage */]),
            ],
        })
    ], EditaDividaPageModule);
    return EditaDividaPageModule;
}());

//# sourceMappingURL=edita-divida.module.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditaDividaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_divida_service_divida_service__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditaDividaPage = /** @class */ (function () {
    function EditaDividaPage(navCtrl, navParams, dividaService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dividaService = dividaService;
        this.toastCtrl = toastCtrl;
        this.divida = {};
        this.nomeVazio = false;
        this.valorInvalido = false;
        this.valorVazio = false;
        this.dataVazia = false;
        this.descricaoVazia = false;
        this.divida = this.navParams.data;
    }
    EditaDividaPage.prototype.ionViewDidLoad = function () {
        console.log(this.navParams.data);
        console.log('ionViewDidLoad EditaDividaPage');
    };
    EditaDividaPage.prototype.ionViewWillLeave = function () {
        console.log(this.divida);
        console.log(this.navParams.data);
        console.log('ionViewDidLoad EditaDividaPage');
    };
    EditaDividaPage.prototype.abrirToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    EditaDividaPage.prototype.editaDivida = function () {
        if (!this.confirmaDados()) {
            this.abrirToast("Ops! Parece que você deixou de preencher algo, ou preencheu incorretamente.");
        }
        else {
            this.navCtrl.pop();
            this.abrirToast("Dívida editada.");
        }
    };
    EditaDividaPage.prototype.confirmaDados = function () {
        this.nomeVazio = this.divida.nome == "" || this.divida.nome == null;
        this.valorInvalido = this.divida.valor <= 0 && this.divida.valor != {};
        this.valorVazio = this.divida.valor == null || this.divida.valor == {};
        this.dataVazia = this.divida.data == null;
        this.descricaoVazia = this.divida.descricao == "" || this.divida.descricao == null;
        return !this.valorInvalido && !this.nomeVazio && !this.valorVazio &&
            !this.dataVazia && !this.descricaoVazia;
    };
    EditaDividaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edita-divida',template:/*ion-inline-start:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/pages/edita-divida/edita-divida.html"*/'<ion-header>\n\n    <ion-navbar color="corDivida">\n\n      <ion-title>Editar dívida de {{divida.nome}}</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content class="cor-background">\n\n    <ion-card>\n\n      <ion-card-header color="corDivida">\n\n        Informações\n\n      </ion-card-header>\n\n      <ion-item>\n\n        <ion-icon name=\'person\' item-start color="corDivida"></ion-icon>\n\n        <ion-input type="text" placeholder="Nome" [(ngModel)]="divida.nome"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="nomeVazio">\n\n        <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n\n        <p class="erro">Digite o nome da dívida.</p>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-icon name=\'cash\' item-start color="corDivida"></ion-icon>\n\n        <ion-input type="number" placeholder="Valor" [(ngModel)]="divida.valor"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="valorInvalido">\n\n        <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n\n        <p class="erro">O valor deverá ser maior que zero.</p>\n\n      </ion-item>\n\n      <ion-item *ngIf="valorVazio">\n\n        <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n\n        <p class="erro">Digite o valor.</p>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label>Data</ion-label>\n\n        <ion-icon name=\'calendar\' item-start color="corDivida"></ion-icon>\n\n        <ion-datetime cancelText="Cancelar" doneText="Ok" min="2017" max="2020" displayFormat="MM/DD/YYYY" [(ngModel)]="divida.data"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item *ngIf="dataVazia">\n\n        <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n\n        <p class="erro">Selecione a data.</p>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-icon name=\'clipboard\' item-start color="corDivida"></ion-icon>\n\n        <ion-input type="text" [(ngModel)]="divida.descricao" placeholder="Descrição"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="descricaoVazia">\n\n        <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n\n        <p class="erro">Digite a descrição.</p>\n\n      </ion-item>\n\n  \n\n  \n\n    </ion-card>\n\n  \n\n    <ion-fab bottom right>\n\n      <button ion-fab (click)="editaDivida(divida)" color="corDivida">\n\n        <ion-icon name="checkmark"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n  \n\n  </ion-content>\n\n  '/*ion-inline-end:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/pages/edita-divida/edita-divida.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_divida_service_divida_service__["a" /* DividaServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], EditaDividaPage);
    return EditaDividaPage;
}());

//# sourceMappingURL=edita-divida.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditaEmprestimoPageModule", function() { return EditaEmprestimoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edita_emprestimo__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditaEmprestimoPageModule = /** @class */ (function () {
    function EditaEmprestimoPageModule() {
    }
    EditaEmprestimoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edita_emprestimo__["a" /* EditaEmprestimoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edita_emprestimo__["a" /* EditaEmprestimoPage */]),
            ],
        })
    ], EditaEmprestimoPageModule);
    return EditaEmprestimoPageModule;
}());

//# sourceMappingURL=edita-emprestimo.module.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditaEmprestimoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_emprestimo_service_emprestimo_service__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditaEmprestimoPage = /** @class */ (function () {
    function EditaEmprestimoPage(navCtrl, navParams, toastController, emprestimoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastController = toastController;
        this.emprestimoService = emprestimoService;
        this.emprestimo = {};
        this.nomeVazio = false;
        this.valorInvalido = false;
        this.valorVazio = false;
        this.dataVazia = false;
        this.descricaoVazia = false;
        this.emprestimo = this.navParams.data;
    }
    EditaEmprestimoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditaEmprestimoPage');
    };
    EditaEmprestimoPage.prototype.abrirToast = function (text) {
        var toast = this.toastController.create({
            message: text,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    EditaEmprestimoPage.prototype.editaEmprestimo = function (emprestimo) {
        if (!this.confirmaDados()) {
            this.abrirToast("Ops! Parece que você deixou de preencher algo, ou preencheu incorretamente.");
        }
        else {
            this.navCtrl.pop();
            this.abrirToast("Empréstimo editado.");
        }
    };
    EditaEmprestimoPage.prototype.ajustaData = function () {
        var dataSeparada = this.data.split("-");
        console.log(dataSeparada);
        var ano = Number(dataSeparada[0]);
        var mes = Number(dataSeparada[1]) - 1;
        var dia = Number(dataSeparada[2]);
        console.log(new Date(ano, mes, dia));
        this.emprestimo.data = new Date(ano, mes, dia);
    };
    EditaEmprestimoPage.prototype.confirmaDados = function () {
        this.nomeVazio = this.emprestimo.nome == "" || this.emprestimo.nome == null;
        this.valorInvalido = this.emprestimo.valor <= 0 && this.emprestimo.valor != {};
        this.valorVazio = this.emprestimo.valor == null || this.emprestimo.valor == {};
        this.dataVazia = this.data == null;
        this.descricaoVazia = this.emprestimo.descricao == "" || this.emprestimo.descricao == null;
        return !this.valorInvalido && !this.nomeVazio && !this.valorVazio &&
            !this.dataVazia && !this.descricaoVazia;
    };
    EditaEmprestimoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edita-emprestimo',template:/*ion-inline-start:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/pages/edita-emprestimo/edita-emprestimo.html"*/'<ion-header>\n\n  <ion-navbar color="corEmprestimo">\n\n    <ion-title>Editar empréstimo para {{emprestimo.nome}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="cor-background">\n\n  <ion-card>\n\n    <ion-card-header color="corEmprestimo">\n\n      Informações\n\n    </ion-card-header>\n\n    <ion-item>\n\n      <ion-icon name=\'person\' item-start color="corEmprestimo"></ion-icon>\n\n      <ion-input type="text" [(ngModel)]="emprestimo.nome" placeholder="Nome"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="nomeVazio">\n\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n\n      <p class="erro">Digite o nome do empréstimo.</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name=\'cash\' item-start color="corEmprestimo"></ion-icon>\n\n      <ion-input type="number" [(ngModel)]="emprestimo.valor" placeholder="Valor"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="valorInvalido">\n\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n\n      <p class="erro">O valor deverá ser maior que zero.</p>\n\n    </ion-item>\n\n    <ion-item *ngIf="valorVazio">\n\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n\n      <p class="erro">Digite o valor.</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Data</ion-label>\n\n      <ion-icon name=\'calendar\' item-start color="corEmprestimo"></ion-icon>\n\n      <ion-datetime cancelText="Cancelar" doneText="Ok" min="2017" max="2020" displayFormat="DD/MM/YYYY" [(ngModel)]="data"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item *ngIf="dataVazia">\n\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n\n      <p class="erro">Selecione a data.</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name=\'clipboard\' item-start color="corEmprestimo"></ion-icon>\n\n      <ion-input type="text" [(ngModel)]="emprestimo.descricao" placeholder="Descrição"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="descricaoVazia">\n\n      <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n\n      <p class="erro">Digite a descrição.</p>\n\n    </ion-item>\n\n\n\n  </ion-card>\n\n\n\n  <ion-fab bottom right>\n\n    <button ion-fab (click)="editaEmprestimo(emprestimo)" color="corEmprestimo">\n\n      <ion-icon name="checkmark"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/pages/edita-emprestimo/edita-emprestimo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_emprestimo_service_emprestimo_service__["a" /* EmprestimoServiceProvider */]])
    ], EditaEmprestimoPage);
    return EditaEmprestimoPage;
}());

//# sourceMappingURL=edita-emprestimo.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditaPerfilPageModule", function() { return EditaPerfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edita_perfil__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditaPerfilPageModule = /** @class */ (function () {
    function EditaPerfilPageModule() {
    }
    EditaPerfilPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edita_perfil__["a" /* EditaPerfilPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edita_perfil__["a" /* EditaPerfilPage */]),
            ],
        })
    ], EditaPerfilPageModule);
    return EditaPerfilPageModule;
}());

//# sourceMappingURL=edita-perfil.module.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditaPerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_photo_service_photo_service__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EditaPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditaPerfilPage = /** @class */ (function () {
    function EditaPerfilPage(navCtrl, authProvider, navParams, actionSheetCtrl, photoServiceProvider, toastController) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.photoServiceProvider = photoServiceProvider;
        this.toastController = toastController;
        this.usuario = {};
        this.nomeVazio = false;
    }
    EditaPerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditaPerfilPage');
    };
    EditaPerfilPage.prototype.ionViewWillEnter = function () {
        this.usuario = this.navParams.data;
        this.verificaFoto();
    };
    EditaPerfilPage.prototype.editaUsuario = function (usuario) {
        var _this = this;
        if (!this.confirmaDados()) {
            this.abrirToast("Ops! Parece que você deixou de preencher algo, ou preencheu incorretamente.");
        }
        else {
            this.abrirToast("Salvando...");
            if (this.novaFoto != null) {
                this.photoServiceProvider.realizaUpload(this.novaFoto).then(function (result) {
                }, function (error) {
                    _this.abrirToast("Erro: " + error);
                });
            }
            if (this.fotoExcluida) {
                this.authProvider.excluiFoto();
            }
            this.authProvider.salvarNomeUsuario(this.usuario.nome).then(function (result) {
                _this.navCtrl.pop();
                _this.abrirToast("Dados salvos.");
            });
        }
    };
    EditaPerfilPage.prototype.verificaFoto = function () {
        if (this.usuario != null) {
            if (this.usuario.fotosrc != null) {
                this.existeFoto = true;
            }
        }
        else {
            this.existeFoto = false;
        }
    };
    EditaPerfilPage.prototype.mudarFoto = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Tirar foto',
                    icon: 'camera',
                    handler: function () {
                        _this.photoServiceProvider.retornaFoto("Camera").then(function (result) {
                            _this.novaFoto = result;
                        });
                    }
                }, {
                    text: 'Selecionar da galeria',
                    icon: 'images',
                    handler: function () {
                        _this.photoServiceProvider.retornaFoto("Galeria").then(function (result) {
                            _this.novaFoto = result;
                        });
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EditaPerfilPage.prototype.excluiFoto = function () {
        this.existeFoto = false;
        this.fotoExcluida = true;
    };
    EditaPerfilPage.prototype.confirmaDados = function () {
        this.nomeVazio = this.usuario.nome == "" || this.usuario.nome == null;
        return !this.nomeVazio;
    };
    EditaPerfilPage.prototype.abrirToast = function (text) {
        var toast = this.toastController.create({
            message: text,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    EditaPerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edita-perfil',template:/*ion-inline-start:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/pages/edita-perfil/edita-perfil.html"*/'<ion-header>\n  <ion-navbar color="corPrimaria">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Editar Perfil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cor-background">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n      </ion-col>\n      <ion-col col-9 text-center>\n        <img *ngIf="!existeFoto && novaFoto == null" class="image_circle" src="assets/imgs/user.png">\n      <img *ngIf="existeFoto && novaFoto == null" class="image_circle" [src]="usuario.fotosrc">\n      <img *ngIf="novaFoto != null" class="image_circle" [src]="novaFoto">\n    </ion-col>\n      <ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-row *ngIf="!existeFoto && novaFoto == null" >\n    <ion-col width-50 style="text-align: center">\n      <button padding icon-start ion-button round color="corPrimaria" (click)="mudarFoto()">\n        <ion-icon name="add"></ion-icon>\n        Adicionar foto\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="existeFoto || novaFoto != null">\n      <ion-col width-50 style="text-align: center">\n        <button padding icon-start ion-button round color="light" (click)="mudarFoto()">\n          <ion-icon name="swap"></ion-icon>\n          Trocar foto\n        </button>\n      </ion-col>\n      <ion-col width-50 style="text-align: center">\n          <button padding icon-start ion-button round color="danger" (click)="excluiFoto()">\n            <ion-icon name="trash"></ion-icon>\n            Excluir foto\n          </button>\n        </ion-col>\n  </ion-row>\n\n\n    <br>\n    <br>\n  <ion-item>\n    <ion-icon name=\'person\' item-start color="corBackground"></ion-icon>\n    <ion-input type="text" [(ngModel)]="usuario.nome" placeholder="Nome"></ion-input>\n  </ion-item>\n  <ion-item *ngIf="nomeVazio">\n    <ion-icon name="information-circle" color="grey" item-start></ion-icon>\n    <p class="erro">Digite o seu novo nome.</p>\n  </ion-item>\n\n\n  <ion-fab bottom right>\n    <button ion-fab (click)="editaUsuario(usuario)" color="corPrimaria">\n      <ion-icon name="checkmark"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/pages/edita-perfil/edita-perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_photo_service_photo_service__["a" /* PhotoServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], EditaPerfilPage);
    return EditaPerfilPage;
}());

//# sourceMappingURL=edita-perfil.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_storage__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PhotoServiceProvider = /** @class */ (function () {
    function PhotoServiceProvider(camera, auth, file, filePath, database) {
        this.camera = camera;
        this.auth = auth;
        this.file = file;
        this.filePath = filePath;
        this.database = database;
        this.basePath = 'fotosUsuarios/';
        this.opcoesCamera = {
            allowEdit: true,
            saveToPhotoAlbum: true,
            targetWidth: 1000,
            targetHeight: 1000,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.FILE_URI,
        };
        this.opcoesGaleria = {
            allowEdit: true,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            targetWidth: 1000,
            targetHeight: 1000,
            correctOrientation: true
        };
        console.log('Hello PhotoServiceProvider Provider');
    }
    PhotoServiceProvider.prototype.retornaFoto = function (fonte) {
        if (fonte == "Camera") {
            return this.recebeFoto(this.opcoesCamera);
        }
        else {
            return this.recebeFoto(this.opcoesGaleria);
        }
    };
    PhotoServiceProvider.prototype.recebeFoto = function (tipo) {
        return this.camera.getPicture(tipo).then(function (imagePath) {
            return imagePath;
        });
    };
    PhotoServiceProvider.prototype.realizaUpload = function (caminhoFoto) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.converteImagemParaBlob(caminhoFoto).then(function (imageBlob) {
                return _this.salvarNoStorage(imageBlob); //upload the blob
            }).then(function (url) {
                return _this.salvarLinkNoDB(url);
            }).then(function () {
                console.log("Upload realizado.");
                resolve();
            }, function (_error) {
                reject(_error);
            });
        });
    };
    PhotoServiceProvider.prototype.converteImagemParaBlob = function (_imagePath) {
        return new Promise(function (resolve, reject) {
            window.resolveLocalFileSystemURL(_imagePath, function (fileEntry) {
                fileEntry.file(function (resFile) {
                    var reader = new FileReader();
                    reader.onloadend = function (evt) {
                        var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                        imgBlob.name = 'amostra.jpg';
                        resolve(imgBlob);
                    };
                    reader.onerror = function (e) {
                        console.log('Falha ao ler arquivo: ' + e.toString());
                        reject(e);
                    };
                    reader.readAsArrayBuffer(resFile);
                });
            });
        });
    };
    PhotoServiceProvider.prototype.salvarNoStorage = function (imgBlob) {
        var _this = this;
        var userUID = this.auth.getUID();
        return new Promise(function (resolve, reject) {
            var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref(_this.basePath + userUID + '.jpg');
            var metadata = {
                contentType: 'image/jpeg',
            };
            var uploadTask = storageRef.put(imgBlob, metadata);
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_4_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            }, function (error) {
                // upload failed
                console.log(error);
                reject(error);
            }, function () {
                // upload success
                resolve(_this.basePath + userUID + '.jpg');
            });
        });
    };
    PhotoServiceProvider.prototype.salvarLinkNoDB = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth.salvarFoto(url).then(function (result) {
                resolve();
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    PhotoServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], PhotoServiceProvider);
    return PhotoServiceProvider;
}());

//# sourceMappingURL=photo-service.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCadastroPageModule", function() { return LoginCadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_cadastro__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginCadastroPageModule = /** @class */ (function () {
    function LoginCadastroPageModule() {
    }
    LoginCadastroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_cadastro__["a" /* LoginCadastroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_cadastro__["a" /* LoginCadastroPage */]),
            ],
        })
    ], LoginCadastroPageModule);
    return LoginCadastroPageModule;
}());

//# sourceMappingURL=login-cadastro.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MostraDividaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_divida_service_divida_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edita_divida_edita_divida__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MostraDividaPage = /** @class */ (function () {
    function MostraDividaPage(navCtrl, navParams, dividaService, toastCtrl, alertCtrl, statusBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dividaService = dividaService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.statusBar = statusBar;
        this.divida = {};
        this.divida = this.navParams.data;
    }
    MostraDividaPage.prototype.ionViewWillEnter = function () {
        this.statusBar.backgroundColorByHexString("#d30000");
    };
    MostraDividaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MostraDividaPage');
    };
    MostraDividaPage.prototype.abreToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    MostraDividaPage.prototype.fechaDivida = function (divida) {
        this.divida.aberta = false;
        this.navCtrl.pop();
        this.abreToast("Dívida concluída.");
    };
    MostraDividaPage.prototype.formataValor = function (valor) {
        return Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(valor);
    };
    MostraDividaPage.prototype.deletaDivida = function (divida) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Excluir dívida",
            message: "Você tem certeza que deseja excluir a dívida de " + divida.nome + "?"
                + "\n\n" + "Todas as informações serão deletadas",
            buttons: [{
                    text: 'Cancelar',
                    handler: function () {
                        console.log('Clicou em cancelar');
                    }
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        _this.apagaDivida(divida);
                    }
                }
            ]
        });
        alert.present();
    };
    MostraDividaPage.prototype.apagaDivida = function (divida) {
        this.dividaService.removeDivida(divida);
        this.navCtrl.pop();
        this.abreToast("Dívida removida.");
    };
    MostraDividaPage.prototype.modalEditaDivida = function (divida) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edita_divida_edita_divida__["a" /* EditaDividaPage */], divida);
    };
    MostraDividaPage.prototype.getData = function (divida) {
        return divida.data.toLocaleString("pt-BR");
    };
    MostraDividaPage.prototype.getTextoData = function () {
        var options = { weekday: "long", month: 'long', day: '2-digit' };
        return this.divida.data.toLocaleDateString("pt-br", options);
    };
    MostraDividaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mostra-divida',template:/*ion-inline-start:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/pages/mostra-divida/mostra-divida.html"*/'<ion-header>\n\n  <ion-navbar color="corDivida">\n\n    <ion-title>Dívida de {{divida.nome}}</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button (click)="deletaDivida(divida)" icon-only>\n\n            <ion-icon name="trash"></ion-icon>\n\n          </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cor-background">\n\n  <ion-list>\n\n    <ion-card>\n\n      <ion-card-header color="corDivida">\n\n        Informações\n\n      </ion-card-header>\n\n  \n\n      <ion-item>\n\n        <ion-icon name="cash" color="corDivida" item-start></ion-icon>\n\n        <h2>\n\n          <strong>Valor:</strong> R$ {{formataValor(divida.valor)}}</h2>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-icon name="calendar" color="corDivida" item-start></ion-icon>\n\n        <h2>\n\n          <strong>Data:</strong> {{getTextoData()}}</h2>\n\n          </ion-item>\n\n        <ion-item>\n\n            <ion-icon name="clipboard" color="corDivida" item-start></ion-icon>\n\n          <h2>\n\n            <strong>Descrição:</strong> {{divida.descricao}}</h2>\n\n        </ion-item>\n\n    </ion-card>\n\n  </ion-list>\n\n  \n\n  <ion-list>\n\n    <ion-card>\n\n        \n\n      <ion-card-header color="corDivida">\n\n        Acordos\n\n      </ion-card-header>\n\n      <ion-item>\n\n          <ion-icon name="chatboxes" color="corDivida" item-start></ion-icon>\n\n          <h2>\n\n              Nenhum acordo registrado.\n\n            </h2>\n\n      </ion-item>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n\n\n  <ion-row>\n\n      <ion-col width-50 style="text-align: center">\n\n        <button padding icon-start ion-button round color="corPrimaria" (click)="fechaDivida(divida)">\n\n            <ion-icon name="checkmark"></ion-icon>\n\n          Fechar dívida\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n\n\n\n\n    <ion-fab bottom right>\n\n    <button ion-fab color="corDivida" (click)="modalEditaDivida(divida)">\n\n        <ion-icon name="create"></ion-icon>\n\n      </button>\n\n      </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/pages/mostra-divida/mostra-divida.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_divida_service_divida_service__["a" /* DividaServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */]])
    ], MostraDividaPage);
    return MostraDividaPage;
}());

//# sourceMappingURL=mostra-divida.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MostraEmprestimoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_emprestimo_service_emprestimo_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edita_emprestimo_edita_emprestimo__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MostraEmprestimoPage = /** @class */ (function () {
    function MostraEmprestimoPage(navCtrl, navParams, emprestimoService, toastController, alertController, statusBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emprestimoService = emprestimoService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.statusBar = statusBar;
        this.emprestimo = {};
        this.emprestimo = this.navParams.data;
    }
    MostraEmprestimoPage.prototype.ionViewWillEnter = function () {
        this.statusBar.backgroundColorByHexString("#00006b");
    };
    MostraEmprestimoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MostraEmprestimoPage');
    };
    MostraEmprestimoPage.prototype.formataValor = function (valor) {
        return Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(valor);
    };
    MostraEmprestimoPage.prototype.fechaEmprestimo = function (emprestimo) {
        this.emprestimo.aberta = false;
        this.navCtrl.pop();
        this.abreToast("Empréstimo concluído.");
    };
    MostraEmprestimoPage.prototype.abreToast = function (text) {
        var toast = this.toastController.create({
            message: text,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    MostraEmprestimoPage.prototype.deletaEmprestimo = function (emprestimo) {
        var _this = this;
        var alert = this.alertController.create({
            title: "Excluir empréstimo",
            message: "Você tem certeza que deseja excluir o empréstimo para " + emprestimo.nome + "?"
                + "\n\n" + "Todas as informações serão deletadas",
            buttons: [{
                    text: 'Cancelar',
                    handler: function () {
                        console.log('Clicou em cancelar');
                    }
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        _this.emprestimoService.removeEmprestimo(emprestimo);
                        _this.navCtrl.pop();
                        _this.abreToast("Empréstimo removido.");
                    }
                }
            ]
        });
        alert.present();
    };
    MostraEmprestimoPage.prototype.modalEditaEmprestimo = function (emprestimo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edita_emprestimo_edita_emprestimo__["a" /* EditaEmprestimoPage */], emprestimo);
    };
    MostraEmprestimoPage.prototype.getTextoData = function () {
        var options = { weekday: "long", month: 'long', day: '2-digit' };
        return this.emprestimo.data.toLocaleDateString("pt-br", options);
    };
    MostraEmprestimoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mostra-emprestimo',template:/*ion-inline-start:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/pages/mostra-emprestimo/mostra-emprestimo.html"*/'<ion-header>\n\n  <ion-navbar color="corEmprestimo">\n\n    <ion-title>Empréstimo de {{emprestimo.nome}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="deletaEmprestimo(emprestimo)" icon-only>\n\n        <ion-icon name="trash"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cor-background">\n\n  <ion-list>\n\n    <ion-card>\n\n      <ion-card-header color="corEmprestimo">\n\n        Informações\n\n      </ion-card-header>\n\n  \n\n      <ion-item>\n\n        <ion-icon name="cash" color="corEmprestimo" item-start></ion-icon>\n\n        <h2>\n\n          <strong>Valor:</strong> R$ {{formataValor(emprestimo.valor)}}</h2>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-icon name="calendar" color="corEmprestimo" item-start></ion-icon>\n\n        <h2>\n\n          <strong>Data:</strong> {{getTextoData()}}</h2>\n\n          </ion-item>\n\n        <ion-item>\n\n            <ion-icon name="clipboard" color="corEmprestimo" item-start></ion-icon>\n\n          <h2>\n\n            <strong>Descrição:</strong> {{emprestimo.descricao}}</h2>\n\n        </ion-item>\n\n    </ion-card>\n\n  </ion-list>\n\n  \n\n  <ion-list>\n\n    <ion-card>\n\n        \n\n      <ion-card-header color="corEmprestimo">\n\n        Acordos\n\n      </ion-card-header>\n\n      <ion-item>\n\n          <ion-icon name="chatboxes" color="corEmprestimo" item-start></ion-icon>\n\n          <h2>\n\n              Nenhum acordo registrado.\n\n            </h2>\n\n      </ion-item>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n  <ion-row>\n\n      <ion-col width-50 style="text-align: center">\n\n        <button padding icon-start ion-button round color="corPrimaria" (click)="fechaEmprestimo(emprestimo)">\n\n            <ion-icon name="checkmark"></ion-icon>\n\n          Fechar empréstimo\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  <ion-fab bottom right>\n\n      <button ion-fab color="corEmprestimo" (click)="modalEditaEmprestimo(emprestimo)">\n\n        <ion-icon name="create"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/pages/mostra-emprestimo/mostra-emprestimo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_emprestimo_service_emprestimo_service__["a" /* EmprestimoServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */]])
    ], MostraEmprestimoPage);
    return MostraEmprestimoPage;
}());

//# sourceMappingURL=mostra-emprestimo.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostraDividaPageModule", function() { return MostraDividaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mostra_divida_mostra_divida__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MostraDividaPageModule = /** @class */ (function () {
    function MostraDividaPageModule() {
    }
    MostraDividaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mostra_divida_mostra_divida__["a" /* MostraDividaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mostra_divida_mostra_divida__["a" /* MostraDividaPage */]),
            ],
        })
    ], MostraDividaPageModule);
    return MostraDividaPageModule;
}());

//# sourceMappingURL=mostra-divida.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostraEmprestimoPageModule", function() { return MostraEmprestimoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mostra_emprestimo__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MostraEmprestimoPageModule = /** @class */ (function () {
    function MostraEmprestimoPageModule() {
    }
    MostraEmprestimoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mostra_emprestimo__["a" /* MostraEmprestimoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mostra_emprestimo__["a" /* MostraEmprestimoPage */]),
            ],
        })
    ], MostraEmprestimoPageModule);
    return MostraEmprestimoPageModule;
}());

//# sourceMappingURL=mostra-emprestimo.module.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edita_perfil_edita_perfil__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_divida_service_divida_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_emprestimo_service_emprestimo_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_cadastro_login_cadastro__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams, authService, dividaService, emprestimoService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.dividaService = dividaService;
        this.emprestimoService = emprestimoService;
        this.usuario = {};
        authService.getUsuario().subscribe(function (res) {
            console.log(res);
            _this.usuario = res;
        });
    }
    PerfilPage.prototype.existeFoto = function () {
        if (this.usuario != null) {
            if (this.usuario.fotosrc != null) {
                return true;
            }
        }
        else {
            return false;
        }
    };
    PerfilPage.prototype.editaPerfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edita_perfil_edita_perfil__["a" /* EditaPerfilPage */], this.usuario);
    };
    PerfilPage.prototype.logout = function () {
        this.authService.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_cadastro_login_cadastro__["a" /* LoginCadastroPage */]);
    };
    PerfilPage.prototype.formataValor = function (valor) {
        return Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(valor);
    };
    PerfilPage.prototype.somaDividas = function () {
        return this.formataValor(this.dividaService.retornaSomaDividas());
    };
    PerfilPage.prototype.somaEmprestimos = function () {
        return this.formataValor(this.emprestimoService.somaEmprestimos());
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/pages/perfil/perfil.html"*/'<ion-header>\n\n  <ion-navbar color="corPrimaria">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Perfil</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)=\'logout()\' icon-only>\n\n        <ion-icon name="log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cor-background">\n\n    <ion-grid>\n\n        <ion-row>\n\n          <ion-col>\n\n          </ion-col>\n\n          <ion-col col-9 text-center>\n\n            <img *ngIf="!existeFoto()" class="image_circle" src="assets/imgs/user.png">\n\n          <img *ngIf="existeFoto()" class="image_circle" [src]="usuario.fotosrc">\n\n        </ion-col>\n\n          <ion-col>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n      <ion-item class="cor-background">\n\n          <p text-center style="font-size:  2rem;font-weight: 500;">{{ usuario?.nome }}</p>\n\n        </ion-item>\n\n  <ion-card>\n\n    <ion-card-header color="corPrimaria">\n\n      Meus dados\n\n    </ion-card-header>\n\n    <ion-item>\n\n        <ion-icon name=\'arrow-down\' item-start color="corDivida"></ion-icon>\n\n        <h2>Total de dívidas</h2>\n\n        <p>R$ {{somaDividas()}}</p>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-icon name=\'arrow-up\' item-start color="corEmprestimo"></ion-icon>\n\n          <h2>Total de empréstimos</h2>\n\n          <p>R$ {{somaEmprestimos()}}</p>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-icon name=\'chatbubbles\' item-start color="corPrimaria"></ion-icon>\n\n            <h2>Acordos realizados</h2>\n\n            <p>0</p>\n\n          </ion-item>\n\n  </ion-card>\n\n\n\n  <ion-fab bottom right>\n\n    <button ion-fab color="corPrimaria" (click)="editaPerfil()">\n\n      <ion-icon name="create"></ion-icon>\n\n    </button>\n\n\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/pages/perfil/perfil.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_divida_service_divida_service__["a" /* DividaServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_emprestimo_service_emprestimo_service__["a" /* EmprestimoServiceProvider */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SobrePage = /** @class */ (function () {
    function SobrePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SobrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sobre',template:/*ion-inline-start:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/pages/sobre/sobre.html"*/'<ion-header>\n\n  <ion-navbar color="corPrimaria">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Sobre</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cor-background">\n\n  <ion-avatar>\n\n    <img src="assets/imgs/cmd.png">\n\n  </ion-avatar>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Equipe\n\n    </ion-card-header>\n\n  <ion-item>\n\n      <h2>Desenvolvedores</h2>\n\n      <p>Victor Emanuel</p>\n\n      <p>Mattheus Brito</p>\n\n      <p>Adbys</p>\n\n      <p>Caio Vidal</p>\n\n  </ion-item>\n\n  <ion-item>\n\n      <h2>Gestores</h2>\n\n      <p>Wesley</p>\n\n      <p>Alice</p>\n\n      <p>Pedro Henrique</p>\n\n      </ion-item>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/pages/sobre/sobre.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], SobrePage);
    return SobrePage;
}());

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(395);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firebase_credentials__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sobre_sobre__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_divida_service_divida_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_adiciona_divida_adiciona_divida_module__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_adiciona_emprestimo_adiciona_emprestimo_module__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_emprestimo_service_emprestimo_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_mostra_divida_mostra_divida_module__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_mostra_emprestimo_mostra_emprestimo_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_edita_divida_edita_divida_module__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_edita_emprestimo_edita_emprestimo_module__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_cadastro_login_cadastro_module__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_photo_service_photo_service__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_camera__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_file_path__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_file__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_edita_perfil_edita_perfil_module__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sobre_sobre__["a" /* SobrePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/adiciona-divida/adiciona-divida.module#AdicionaDividaPageModule', name: 'AdicionaDividaPage', segment: 'adiciona-divida', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adiciona-emprestimo/adiciona-emprestimo.module#AdicionaEmprestimoPageModule', name: 'AdicionaEmprestimoPage', segment: 'adiciona-emprestimo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edita-divida/edita-divida.module#EditaDividaPageModule', name: 'EditaDividaPage', segment: 'edita-divida', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edita-emprestimo/edita-emprestimo.module#EditaEmprestimoPageModule', name: 'EditaEmprestimoPage', segment: 'edita-emprestimo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edita-perfil/edita-perfil.module#EditaPerfilPageModule', name: 'EditaPerfilPage', segment: 'edita-perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-cadastro/login-cadastro.module#LoginCadastroPageModule', name: 'LoginCadastroPage', segment: 'login-cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mostra-divida/mostra-divida.module#MostraDividaPageModule', name: 'MostraDividaPage', segment: 'mostra-divida', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mostra-emprestimo/mostra-emprestimo.module#MostraEmprestimoPageModule', name: 'MostraEmprestimoPage', segment: 'mostra-emprestimo', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_15__pages_adiciona_divida_adiciona_divida_module__["AdicionaDividaPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_adiciona_emprestimo_adiciona_emprestimo_module__["AdicionaEmprestimoPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_mostra_divida_mostra_divida_module__["MostraDividaPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_mostra_emprestimo_mostra_emprestimo_module__["MostraEmprestimoPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_edita_divida_edita_divida_module__["EditaDividaPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_edita_emprestimo_edita_emprestimo_module__["EditaEmprestimoPageModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_cadastro_login_cadastro_module__["LoginCadastroPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__pages_edita_perfil_edita_perfil_module__["EditaPerfilPageModule"],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sobre_sobre__["a" /* SobrePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_file_path__["a" /* FilePath */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_divida_service_divida_service__["a" /* DividaServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_emprestimo_service_emprestimo_service__["a" /* EmprestimoServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_photo_service_photo_service__["a" /* PhotoServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DividaServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DividaServiceProvider = /** @class */ (function () {
    function DividaServiceProvider() {
        this.dividas = [];
        console.log('Hello DividaServiceProvider Provider');
    }
    DividaServiceProvider.prototype.adiciona = function (divida) {
        this.dividas.push(divida);
        console.log(this.dividas);
    };
    DividaServiceProvider.prototype.recebeDividas = function () {
        return this.dividas;
    };
    DividaServiceProvider.prototype.removeDivida = function (divida) {
        var index = this.dividas.indexOf(divida);
        this.dividas.splice(index, 1);
    };
    DividaServiceProvider.prototype.editarDivida = function (divida) {
        //edita a divida no firebase
    };
    DividaServiceProvider.prototype.retornaSomaDividas = function () {
        var soma = 0.0;
        for (var i = 0; i < this.dividas.length; i++) {
            soma += +this.dividas[i].valor;
        }
        return soma;
    };
    DividaServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DividaServiceProvider);
    return DividaServiceProvider;
}());

//# sourceMappingURL=divida-service.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmprestimoServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmprestimoServiceProvider = /** @class */ (function () {
    function EmprestimoServiceProvider() {
        this.emprestimos = [];
        console.log('Hello EmprestimoServiceProvider Provider');
    }
    EmprestimoServiceProvider.prototype.adiciona = function (emprestimo) {
        this.emprestimos.push(emprestimo);
        console.log(this.emprestimos);
    };
    EmprestimoServiceProvider.prototype.removeEmprestimo = function (emprestimo) {
        var index = this.emprestimos.indexOf(emprestimo);
        this.emprestimos.splice(index, 1);
    };
    EmprestimoServiceProvider.prototype.recebeEmprestimos = function () {
        return this.emprestimos;
    };
    EmprestimoServiceProvider.prototype.somaEmprestimos = function () {
        var soma = 0.0;
        for (var i = 0; i < this.emprestimos.length; i++) {
            soma += +this.emprestimos[i].valor;
        }
        return soma;
    };
    EmprestimoServiceProvider.prototype.editaEmprestimo = function () {
        //A edicao dos emprestimos sera feita pelo firebase
    };
    EmprestimoServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EmprestimoServiceProvider);
    return EmprestimoServiceProvider;
}());

//# sourceMappingURL=emprestimo-service.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(firebaseAuth, db) {
        var _this = this;
        this.firebaseAuth = firebaseAuth;
        this.db = db;
        this.userDetails = null;
        this.user = {};
        this.firebaseUser = this.firebaseAuth.authState;
        this.firebaseUser.subscribe(function (firebaseUser) {
            if (firebaseUser) {
                _this.userDetails = firebaseUser;
            }
            else {
                _this.userDetails = null;
            }
        });
    }
    AuthProvider.prototype.getUserRef = function () {
        return "user-list/" + this.getUID();
    };
    AuthProvider.prototype.registrar = function (email, senha, username, nome) {
        var _this = this;
        this.user = this.mountUserObject(nome, username, email);
        var promise = new Promise(function (resolve, reject) {
            _this.firebaseAuth.auth.createUserWithEmailAndPassword(email, senha).then(function (result) {
                return _this.db.object("user-list/" + result.user.uid).set(_this.user).then(function (result) {
                    resolve();
                });
            }).catch(function (error) {
                reject(_this.getErroRegistro(error));
            });
        });
        return promise;
    };
    AuthProvider.prototype.login = function (email, senha) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.firebaseAuth.auth.signInWithEmailAndPassword(email, senha).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(_this.getErroRegistro(error));
            });
        });
        return promise;
    };
    AuthProvider.prototype.logout = function () {
        this.firebaseAuth
            .auth
            .signOut();
    };
    AuthProvider.prototype.getUID = function () {
        if (this.userDetails != null) {
            return this.userDetails.uid;
        }
        else {
            return null;
        }
    };
    AuthProvider.prototype.getUsuario = function () {
        return this.db.object(this.getUserRef()).valueChanges();
    };
    AuthProvider.prototype.salvarNomeUsuario = function (nome) {
        return this.db.object(this.getUserRef()).update({ nome: nome });
    };
    AuthProvider.prototype.salvarOneSignalInfo = function (oneSignalId, deviceId) {
        return this.db.list("onesignal-list").push({ oneSignalId: oneSignalId, deviceId: deviceId }).then(function (result) {
        });
    };
    AuthProvider.prototype.salvarFoto = function (url) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            return __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref(url).getDownloadURL()
                .then(function (result) {
                _this.db.object(_this.getUserRef()).update({ fotosrc: result }).then(function (result) {
                    resolve();
                }).catch(function (error) {
                    reject(_this.getErroRegistro(error));
                });
            });
        });
        return promise;
    };
    AuthProvider.prototype.retornaLinkFoto = function () {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref("fotosUsuarios/" + this.getUID() + ".jpg").getDownloadURL();
    };
    AuthProvider.prototype.retornaUserObservable = function () {
        return this.firebaseUser;
    };
    AuthProvider.prototype.resetarSenha = function (email) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.firebaseAuth.auth.sendPasswordResetEmail(email).then(function (result) {
                resolve();
            }).catch(function (error) {
                reject(_this.getErroRegistro(error));
            });
        });
        return promise;
    };
    AuthProvider.prototype.excluiFoto = function () {
        return this.db.object(this.getUserRef()).update({ fotosrc: null });
    };
    AuthProvider.prototype.mountUserObject = function (nome, username, email) {
        var userInstance = {};
        userInstance.username = username;
        userInstance.email = email;
        userInstance.nome = nome;
        return userInstance;
    };
    AuthProvider.prototype.getErroRegistro = function (error) {
        console.log(error);
        switch (error.code) {
            case "auth/email-already-in-use": {
                return "E-mail já foi cadastrado.";
            }
            case "auth/invalid-email": {
                return "E-mail inválido.";
            }
            case "auth/wrong-password": {
                return "Senha incorreta.";
            }
            case "auth/user-not-found": {
                return "E-mail não cadastrado.";
            }
            case "auth/invalid-password": {
                return "Senha inválida.";
            }
            case "auth/weak-password": {
                return "A senha deve ter no mínimo 6 caracteres.";
            }
            case "auth/network-request-failed": {
                return "Sem conexão.";
            }
            default: {
                return error;
            }
        }
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyD60kBs3aYkGk8ayEFM1mrTBPB2Q2X-UvE",
    authDomain: "cademeudinheiro-7e411.firebaseapp.com",
    databaseURL: "https://cademeudinheiro-7e411.firebaseio.com",
    projectId: "cademeudinheiro-7e411",
    storageBucket: "cademeudinheiro-7e411.appspot.com",
    messagingSenderId: "580258323760"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_perfil_perfil__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_sobre_sobre__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_cadastro_login_cadastro__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_is_cordova_available__ = __webpack_require__(739);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, autenticacao, oneSignal, alertCtrl) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.autenticacao = autenticacao;
        this.oneSignal = oneSignal;
        this.alertCtrl = alertCtrl;
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_5__pages_perfil_perfil__["a" /* PerfilPage */] },
            { title: 'Sobre', component: __WEBPACK_IMPORTED_MODULE_6__pages_sobre_sobre__["a" /* SobrePage */] }
        ];
        this.platform.ready().then(function () {
            _this.autenticacao.retornaUserObservable().subscribe(function (user) {
                if (user) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_cadastro_login_cadastro__["a" /* LoginCadastroPage */];
                }
            }, function () {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_cadastro_login_cadastro__["a" /* LoginCadastroPage */];
            });
            statusBar.backgroundColorByHexString("#006400");
            splashScreen.hide();
            var alert = _this.alertCtrl.create({
                title: 'test',
                subTitle: 'test'
            });
            alert.present();
            if (Object(__WEBPACK_IMPORTED_MODULE_10__common_is_cordova_available__["a" /* isCordovaAvailable */])()) {
                _this.oneSignal.startInit('d0ce017c-912b-4859-8ae2-b707856f87de', '580258323760');
                _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.Notification);
                _this.oneSignal.handleNotificationReceived().subscribe(function (data) { return _this.onPushReceived(data.payload); });
                _this.oneSignal.handleNotificationOpened().subscribe(function (data) { return _this.onPushOpened(data.notification.payload); });
                _this.oneSignal.endInit();
                _this.oneSignal.getIds().then(function (result) {
                }, function (error) {
                });
            }
        });
    }
    MyApp.prototype.onPushReceived = function (payload) {
        alert('Push recevied:' + payload.body);
    };
    MyApp.prototype.onPushOpened = function (payload) {
        alert('Push opened: ' + payload.body);
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header color="corPrimaria">\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list no-lines>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"/Users/adbysvasconcelos/Documentos/cademeudinheiro/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isCordovaAvailable; });
var isCordovaAvailable = function () {
    if (!window.cordova) {
        alert('This is a native feature. Please use a device');
        return false;
    }
    return true;
};
//# sourceMappingURL=is-cordova-available.js.map

/***/ })

},[390]);
//# sourceMappingURL=main.js.map