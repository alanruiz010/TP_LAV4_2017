webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Donde se encuentre este tag, se instancian los componentes dependientes del ruteo-->\n\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_login_login_component__ = __webpack_require__("../../../../../src/app/componentes/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__servicios_mi_http_mi_http_service__ = __webpack_require__("../../../../../src/app/servicios/mi-http/mi-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__servicios_paises_service__ = __webpack_require__("../../../../../src/app/servicios/paises.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__servicios_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/jugadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__servicios_archivos_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/archivos-jugadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_error_error_component__ = __webpack_require__("../../../../../src/app/componentes/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__componentes_principal_principal_component__ = __webpack_require__("../../../../../src/app/componentes/principal/principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_menu_menu_component__ = __webpack_require__("../../../../../src/app/componentes/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ruteando_ruteando_module__ = __webpack_require__("../../../../../src/app/ruteando/ruteando.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_listado_listado_component__ = __webpack_require__("../../../../../src/app/componentes/listado/listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_jugadores_listado_jugadores_listado_component__ = __webpack_require__("../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_listado_de_resultados_listado_de_resultados_component__ = __webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_listados_listados_component__ = __webpack_require__("../../../../../src/app/componentes/listados/listados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__componentes_juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__componentes_registro_registro_component__ = __webpack_require__("../../../../../src/app/componentes/registro/registro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__componentes_menu_card_menu_card_component__ = __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__componentes_cabecera_cabecera_component__ = __webpack_require__("../../../../../src/app/componentes/cabecera/cabecera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__componentes_quien_soy_quien_soy_component__ = __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__componentes_anagrama_anagrama_component__ = __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__componentes_listado_de_paises_listado_de_paises_component__ = __webpack_require__("../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__componentes_mapa_de_google_mapa_de_google_component__ = __webpack_require__("../../../../../src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__componentes_input_jugadores_input_jugadores_component__ = __webpack_require__("../../../../../src/app/componentes/input-jugadores/input-jugadores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipes_sexo_pipe__ = __webpack_require__("../../../../../src/app/pipes/sexo.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__componentes_adivina_el_numero_adivina_el_numero_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__componentes_agilidad_aritmetica_agilidad_aritmetica_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__componentes_adivina_mas_listado_adivina_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__componentes_agilidad_mas_listado_agilidad_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__componentes_pptijera_pptijera_component__ = __webpack_require__("../../../../../src/app/componentes/pptijera/pptijera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__componentes_pptijera_mas_listado_pptijera_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/pptijera-mas-listado/pptijera-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__componentes_anagrama_mas_listado_anagrama_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/anagrama-mas-listado/anagrama-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__componentes_ta_te_ti_ta_te_ti_component__ = __webpack_require__("../../../../../src/app/componentes/ta-te-ti/ta-te-ti.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';










// declaro donde quiero que se dirija
/*
const MiRuteo = [{path: 'error' , component: ErrorComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Principal' , component: PrincipalComponent , pathMatch: 'full'},
{path: 'Adivina' , component: AdivinaElNumeroComponent},
{path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
{path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
{path: 'Agilidad' , component: AgilidadAritmeticaComponent},
{path: '' , component: LoginComponent , pathMatch: 'full'},

{path: '**' , component: ErrorComponent} ];
*/












// import { AgmCoreModule } from '../../node_modules/@agm/core';












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_29__componentes_adivina_el_numero_adivina_el_numero_component__["a" /* AdivinaElNumeroComponent */],
            __WEBPACK_IMPORTED_MODULE_16__componentes_listado_de_resultados_listado_de_resultados_component__["a" /* ListadoDeResultadosComponent */],
            __WEBPACK_IMPORTED_MODULE_10__componentes_error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_11__componentes_principal_principal_component__["a" /* PrincipalComponent */],
            __WEBPACK_IMPORTED_MODULE_4__componentes_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_30__componentes_agilidad_aritmetica_agilidad_aritmetica_component__["a" /* AgilidadAritmeticaComponent */],
            __WEBPACK_IMPORTED_MODULE_12__componentes_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_31__componentes_adivina_mas_listado_adivina_mas_listado_component__["a" /* AdivinaMasListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_32__componentes_agilidad_mas_listado_agilidad_mas_listado_component__["a" /* AgilidadMasListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_14__componentes_listado_listado_component__["a" /* ListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_17__componentes_listados_listados_component__["a" /* ListadosComponent */],
            __WEBPACK_IMPORTED_MODULE_19__componentes_juegos_juegos_component__["a" /* JuegosComponent */],
            __WEBPACK_IMPORTED_MODULE_20__componentes_registro_registro_component__["a" /* RegistroComponent */],
            __WEBPACK_IMPORTED_MODULE_21__componentes_menu_card_menu_card_component__["a" /* MenuCardComponent */],
            __WEBPACK_IMPORTED_MODULE_22__componentes_cabecera_cabecera_component__["a" /* CabeceraComponent */],
            __WEBPACK_IMPORTED_MODULE_23__componentes_quien_soy_quien_soy_component__["a" /* QuienSoyComponent */],
            __WEBPACK_IMPORTED_MODULE_24__componentes_anagrama_anagrama_component__["a" /* AnagramaComponent */],
            __WEBPACK_IMPORTED_MODULE_25__componentes_listado_de_paises_listado_de_paises_component__["a" /* ListadoDePaisesComponent */],
            __WEBPACK_IMPORTED_MODULE_26__componentes_mapa_de_google_mapa_de_google_component__["a" /* MapaDeGoogleComponent */],
            __WEBPACK_IMPORTED_MODULE_15__componentes_jugadores_listado_jugadores_listado_component__["a" /* JugadoresListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_27__componentes_input_jugadores_input_jugadores_component__["a" /* InputJugadoresComponent */],
            __WEBPACK_IMPORTED_MODULE_28__pipes_sexo_pipe__["a" /* SexoPipe */],
            __WEBPACK_IMPORTED_MODULE_33__componentes_pptijera_pptijera_component__["a" /* PPTijeraComponent */],
            __WEBPACK_IMPORTED_MODULE_34__componentes_pptijera_mas_listado_pptijera_mas_listado_component__["a" /* PPTijeraMasListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_35__componentes_anagrama_mas_listado_anagrama_mas_listado_component__["a" /* AnagramaMasListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_36__componentes_ta_te_ti_ta_te_ti_component__["a" /* TaTeTiComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__ruteando_ruteando_module__["a" /* RuteandoModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_37__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_38__angular_material__["c" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_38__angular_material__["a" /* MatGridListModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_18__servicios_juego_service_service__["a" /* JuegoServiceService */], __WEBPACK_IMPORTED_MODULE_6__servicios_mi_http_mi_http_service__["a" /* MiHttpService */], __WEBPACK_IMPORTED_MODULE_7__servicios_paises_service__["a" /* PaisesService */], __WEBPACK_IMPORTED_MODULE_9__servicios_archivos_jugadores_service__["a" /* ArchivosJugadoresService */], __WEBPACK_IMPORTED_MODULE_8__servicios_jugadores_service__["a" /* JugadoresService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-adivina.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAdivina; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoAdivina = (function (_super) {
    __extends(JuegoAdivina, _super);
    function JuegoAdivina(nombre, gano, jugador) {
        var _this = _super.call(this, "Adivina el número", gano, jugador) || this;
        _this.numeroSecreto = 0;
        _this.numeroIngresado = 0;
        return _this;
    }
    JuegoAdivina.prototype.verificar = function () {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    JuegoAdivina.prototype.generarnumero = function () {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    };
    JuegoAdivina.prototype.retornarAyuda = function () {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        return "Te pasate";
    };
    return JuegoAdivina;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-adivina.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-agilidad.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAgilidad; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//export class JuegoAgilidad {
//}
//===================================

var JuegoAgilidad = (function (_super) {
    __extends(JuegoAgilidad, _super);
    function JuegoAgilidad(nombre, gano, jugador) {
        var _this = _super.call(this, "Agilidad Aritmetica", gano, jugador) || this;
        _this.resultadoParticipante = 0;
        return _this;
    }
    JuegoAgilidad.prototype.generarNuevo = function () {
        this.numero1 = Math.floor(Math.random() * 10);
        this.numero2 = Math.floor(Math.random() * 10);
        this.operador = Math.floor(Math.random() * 4);
        if (this.operador == 0) {
            this.operardorMostrar = "+";
            this.resulatdoReal = this.numero1 + this.numero2;
        }
        if (this.operador == 1) {
            this.operardorMostrar = "-";
            this.resulatdoReal = this.numero1 - this.numero2;
        }
        if (this.operador == 2) {
            this.operardorMostrar = "/";
            this.resulatdoReal = this.numero1 / this.numero2;
        }
        if (this.operador == 3) {
            this.operardorMostrar = "x";
            this.resulatdoReal = this.numero1 * this.numero2;
        }
        console.info(this.numero1 + this.operardorMostrar + this.numero2 + "=" + this.resulatdoReal);
    };
    JuegoAgilidad.prototype.verificar = function () {
        if (this.resulatdoReal == this.resultadoParticipante) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    return JuegoAgilidad;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-agilidad.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-anagrama.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAnagrama; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//export class JuegoAnagrama {
//}
//==========================

var JuegoAnagrama = (function (_super) {
    __extends(JuegoAnagrama, _super);
    function JuegoAnagrama(nombre, gano, jugador) {
        return _super.call(this, "Anagrama", gano, jugador) || this;
    }
    JuegoAnagrama.prototype.verificar = function () {
        if (this.palabra == this.respuesta.toUpperCase()) {
            this.gano = true;
        }
        if (this.gano)
            return true;
        else
            return false;
    };
    ;
    return JuegoAnagrama;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-anagrama.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-piedra-papel-tijera.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PiedraPapelTijera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*export class JuegoPiedraPapelTijera {
}*/

var PiedraPapelTijera = (function (_super) {
    __extends(PiedraPapelTijera, _super);
    function PiedraPapelTijera(unNombre, jugador, gano) {
        var _this = _super.call(this, "Piedra Papel Tijera", gano, jugador) || this;
        _this.numeroRandom = 0;
        _this.piedra = 1;
        _this.papel = 2;
        _this.tijera = 3;
        _this.nombre = unNombre;
        _this.jugador = jugador;
        _this.gano = gano;
        return _this;
    }
    PiedraPapelTijera.prototype.Comenzar = function () {
        this.numeroRandom = Math.floor((Math.random() * 3) + 1);
    };
    PiedraPapelTijera.prototype.Piedra = function () {
        this.Comenzar();
        if (this.numeroRandom == 1) {
            this.resultado = "Empato";
            this.gano = false;
        }
        if (this.numeroRandom == 2) {
            this.gano = false;
            this.resultado = "Perdio";
        }
        if (this.numeroRandom == 3) {
            this.gano = true;
            this.resultado = "Gano";
        }
    };
    PiedraPapelTijera.prototype.Papel = function () {
        this.Comenzar();
        if (this.numeroRandom == 1) {
            this.gano = true;
            this.resultado = "Gano";
        }
        if (this.numeroRandom == 2) {
            this.gano = false;
            this.resultado = "Empato";
        }
        if (this.numeroRandom == 3) {
            this.gano = false;
            this.resultado = "Perdio";
        }
    };
    PiedraPapelTijera.prototype.Tijera = function () {
        this.Comenzar();
        if (this.numeroRandom == 1) {
            this.gano = false;
            this.resultado = "Perdio";
        }
        if (this.numeroRandom == 2) {
            this.gano = true;
            this.resultado = "Gano";
        }
        if (this.numeroRandom == 3) {
            this.resultado = "Empato";
        }
    };
    PiedraPapelTijera.prototype.verificar = function () {
        return true;
    };
    return PiedraPapelTijera;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-piedra-papel-tijera.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Juego; });
var Juego = (function () {
    function Juego(nombre, gano, jugador) {
        this.nombre = 'Sin Nombre';
        this.gano = false;
        if (nombre)
            this.nombre = nombre;
        if (gano)
            this.gano = gano;
        if (jugador)
            this.jugador = jugador;
        else
            this.jugador = "natalia natalia";
    }
    Juego.prototype.retornarAyuda = function () {
        return "NO hay Ayuda definida";
    };
    return Juego;
}());

/*

export abstract class Juego {
  public nombre = 'Sin Nombre';
  public jugador: string;
  public gano = false;

  constructor(nombre?: string, gano?: boolean,jugador?:string) {
    if (nombre)
      this.nombre = nombre;

    if (gano)
      this.gano = gano;
    if(jugador)
      this.jugador=jugador;
    else
      this.jugador= "natalia natalia";
  }


  

  public abstract verificar():any;
  
  public retornarAyuda() {
    
    return "NO hay Ayuda definida";
  }
}

*/ 
//# sourceMappingURL=juego.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nform {\n  \n    width: 100%;\n    margin: 0; padding: 0;\n}\n\nlabel{\n    font-family: 'Press Start 2P',cursive; \n    font-size: 13px;\n}\n.centro{\n    margin-right: auto;\n    margin-left: auto;\n    width: 500px;\n    border: 10px solid #f1f1f1;\n    background: #3664F3;\n    text-align: center;\n    -ms-flex-align: center;\n        align-items: center;\n   \n}\n\ninput[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n\n\n\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n.aceptbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #3664F4;\n}\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n}\n\nimg.avatar {\n    width: 40%;\n    border-radius: 50%;\n}\n\n.container {\n    padding: 16px;\n}\n\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}\n\n\n\n#snackbar {\n    visibility: hidden;\n    min-width: 250px;\n    margin-right: 300px;\n    margin-left: 300px; \n    \n    \n    font-family: 'Press Start 2P',cursive; \n    font-size: 15px;\n\n    color: #fff;\n    text-align: center;\n    border-radius: 2px;\n    padding: 16px;\n    position: fixed;\n    z-index: 1;\n    left: 5%;\n    bottom: 30px;\n}\n#snackbar.Ganador {\n    background-color: #059F2F;\n}\n#snackbar.Perdedor {\n    background-color: #FF0000;\n}\n#snackbar.show {\n    visibility: visible;\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n@keyframes fadein {\n    from {bottom: 0; opacity: 0;}\n    to {bottom: 30px; opacity: 1;}\n}\n\n@keyframes fadeout {\n    from {bottom: 30px; opacity: 1;}\n    to {bottom: 0; opacity: 0;}\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--app-menu></app-menu-->\n<!--<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<div style=\"text-align:center\">\n  <h1>\n    {{nuevoJuego.nombre}}!\n  </h1>\n </div>\n<h2></h2>\n<form name=\"juego\">\n\n   <label>ingrese numero:  </label>  \n   <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\n    <h1>{{nuevoJuego.numeroIngresado}}  </h1>\n \n    <h2 [hidden]=\"ocultarVerificar\">\n      <button  *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar</button></h2>\n \n    <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn btn-info btn-lg\">Nuevo número secreto</button></h2>\n \n    <h2><p *ngIf=\"nuevoJuego.numeroSecreto!=0\" ><i class=\"fa fa-spinner fa-spin\"></i>Esperando que ingrese un número</p></h2>\n\n    <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\n    <h3 [hidden]=\"nuevoJuego.gano\">usted aún no gano </h3>\n\n\n</form>\n<div id=\"snackbar\">{{Mensajes}}</div>\n-->\n\n  <div style=\"text-align:center ;font-family: 'Press Start 2P',cursive;color: white; \">\n    <h2>\n     Adivina el numero\n    </h2>\n   </div>\n  \n      <form name=\"juego\" style=\"font-family: 'Press Start 2P',cursive; font-size: 10px\" >\n        \n        <div class=\"centro\" >\n        <label>ingrese numero:  </label>  <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:20%\"/>\n      \n          <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\" class=\"btn2\">Verificar</button></h2>\n      \n          <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn2 orange\">Nuevo número secreto</button></h2>\n      \n          <h2><p *ngIf=\"nuevoJuego.numeroSecreto!=0\" ></p></h2>\n\n          \n        </div>\n      </form>\n<div id=\"snackbar\">{{Mensajes}}</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdivinaElNumeroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__ = __webpack_require__("../../../../../src/app/clases/juego-adivina.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdivinaElNumeroComponent = (function () {
    //constructor() { 
    function AdivinaElNumeroComponent(miServicio) {
        this.miServicio = miServicio;
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]();
        console.info("numero Secreto:", this.nuevoJuego.numeroSecreto);
        this.ocultarVerificar = false;
        // Sumo otra linea
        this.nuevoJuego.jugador = this.miServicio.TraerUsuario();
    }
    //===============================================================
    AdivinaElNumeroComponent.prototype.generarnumero = function () {
        //
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]();
        //
        this.nuevoJuego.generarnumero();
        this.contador = 0;
    };
    AdivinaElNumeroComponent.prototype.verificar = function () {
        this.contador++;
        this.ocultarVerificar = true;
        console.info("numero Secreto:", this.nuevoJuego.gano);
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Sos un Genio!!!", true);
            this.nuevoJuego.numeroSecreto = 0;
        }
        else {
            var mensaje = void 0;
            switch (this.contador) {
                case 1:
                    mensaje = "No, intento fallido, animo";
                    break;
                case 2:
                    mensaje = "No,Te estaras Acercando???";
                    break;
                case 3:
                    mensaje = "No es, Yo crei que la tercera era la vencida.";
                    break;
                case 4:
                    mensaje = "No era el  " + this.nuevoJuego.numeroIngresado;
                    break;
                case 5:
                    mensaje = " intentos y nada.";
                    break;
                case 6:
                    mensaje = "Afortunado en el amor";
                    break;
                default:
                    mensaje = "Ya le erraste " + this.contador + " veces";
                    break;
            }
            this.MostarMensaje("#" + this.contador + " " + mensaje + " ayuda :" + this.nuevoJuego.retornarAyuda());
        }
        console.info("numero Secreto:", this.nuevoJuego.gano);
    };
    AdivinaElNumeroComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    };
    AdivinaElNumeroComponent.prototype.ngOnInit = function () {
    };
    return AdivinaElNumeroComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], AdivinaElNumeroComponent.prototype, "enviarJuego", void 0);
AdivinaElNumeroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-adivina-el-numero',
        template: __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _b || Object])
], AdivinaElNumeroComponent);

var _a, _b;
/*


import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
 @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();

  nuevoJuego: JuegoAdivina;
  Mensajes:string;
  contador:number;
  ocultarVerificar:boolean;
 
  constructor(public miServicio : JuegoServiceService) {
    this.nuevoJuego = new JuegoAdivina();
    console.info("numero Secreto:",this.nuevoJuego.numeroSecreto);
    this.ocultarVerificar=false;
    this.nuevoJuego.jugador = this.miServicio.TraerUsuario();
  }
  generarnumero() {
    this.nuevoJuego = new JuegoAdivina();
    
    this.nuevoJuego.jugador = this.miServicio.TraerUsuario();
    this.nuevoJuego.generarnumero();
    this.contador=0;
  }

  verificar()
  {
    this.contador++;
    this.ocultarVerificar=true;
 
    if (this.nuevoJuego.verificar()){
      
      this.enviarJuego.emit(this.nuevoJuego);
      this.MostarMensaje("Sos un Genio!!!",true);
      this.nuevoJuego.numeroSecreto=0;

    }else{

      let mensaje:string;
      switch (this.contador) {
        case 1:
          mensaje="No, intento fallido, animo";
          break;
          case 2:
          mensaje="No,Te estaras Acercando???";
          break;
          case 3:
          var modelo=this;
          mensaje="La tercera fue la vencida.";
          this.enviarJuego.emit(this.nuevoJuego);
          this.MostarMensaje("Sos un Genio!!!",true);
          this.nuevoJuego.numeroSecreto=0;
          modelo.ocultarVerificar=false;
          break;
         
          
      
        default:
            mensaje="Ya le erraste "+ this.contador+" veces";
          break;
      }
      this.MostarMensaje("#"+this.contador+" "+mensaje+" ayuda :"+this.nuevoJuego.retornarAyuda());
     

    }
  }

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;

    setTimeout(function(){
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
     }, 3000);
  
   }
  ngOnInit() {
  }

}

*/ 
//# sourceMappingURL=adivina-el-numero.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<app-adivina-el-numero (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-adivina-el-numero> \n<h1> listado </h1>\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\n-->\n\n<div class=\"row\">\n    <div class=\"col-sm-6\">\n        \n            <app-adivina-el-numero (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-adivina-el-numero> \n      </div>\n    <div class=\"col-sm-6\">\n        <app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\n    </div>\n    \n  </div>"

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdivinaMasListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdivinaMasListadoComponent = (function () {
    //constructor() { this.listadoParaCompartir = new Array<any>()}
    function AdivinaMasListadoComponent(servicioJuego) {
        this.servicioJuego = servicioJuego;
    }
    AdivinaMasListadoComponent.prototype.ngOnInit = function () {
        this.listadoParaCompartir = this.servicioJuego.InicializarLista();
        this.lista = JSON.stringify(this.listadoParaCompartir);
    };
    AdivinaMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        //orginal-->
        this.listadoParaCompartir.push(juego);
        this.servicioJuego.CargarLista(this.listadoParaCompartir);
        this.listadoParaCompartir = this.servicioJuego.InicializarLista();
        this.lista = JSON.stringify(this.listadoParaCompartir);
        // console.info("en app",this.listadoParaCompartir);
    };
    return AdivinaMasListadoComponent;
}());
AdivinaMasListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-adivina-mas-listado',
        template: __webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _a || Object])
], AdivinaMasListadoComponent);

var _a;
/*
export class AdivinaMasListadoComponent implements OnInit {
  public listadoParaCompartir: any;
  lista:any;
  
  constructor(public servicioJuego:JuegoServiceService) {
    
  }


  ngOnInit() {
    this.listadoParaCompartir = this.servicioJuego.InicializarLista();
    this.lista = JSON.stringify(this.listadoParaCompartir);
  }

   tomarJuegoTerminado(juego: Juego)
  {
    this.listadoParaCompartir.push(juego);
    this.servicioJuego.CargarLista(this.listadoParaCompartir);
    this.listadoParaCompartir = this.servicioJuego.InicializarLista();
    this.lista = JSON.stringify(this.listadoParaCompartir);
   // console.info("en app",this.listadoParaCompartir);
  }
}
*/ 
//# sourceMappingURL=adivina-mas-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nform {\r\n    \r\n    width: 100%;\r\n    margin: 0; padding: 0;\r\n}\r\n\r\n.centro{\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    width: 500px;\r\n    border: 10px solid #f1f1f1;\r\n    background: #BE3600;\r\n    text-align: center;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n   \r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.cancelbtn {\r\n  width: auto;\r\n  padding: 10px 18px;\r\n  background-color: #f44336;\r\n}\r\n.aceptbtn {\r\n  width: auto;\r\n  padding: 10px 18px;\r\n  background-color: #3664F4;\r\n}\r\n.imgcontainer {\r\n  text-align: center;\r\n  margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n  width: 40%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.container {\r\n  padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n  span.psw {\r\n     display: block;\r\n     float: none;\r\n  }\r\n  .cancelbtn {\r\n     width: 100%;\r\n  }\r\n}\r\n\r\n\r\n\r\n#snackbar {\r\n  visibility: hidden;\r\n  min-width: 250px;\r\n  margin-right: 300px;\r\n  margin-left: 300px; \r\n  \r\n  \r\n  font-family: 'Press Start 2P',cursive; \r\n  font-size: 15px;\r\n\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 2px;\r\n  padding: 16px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 5%;\r\n  bottom: 30px;\r\n}\r\n#snackbar.Ganador {\r\n  background-color: #059F2F;\r\n}\r\n#snackbar.Perdedor {\r\n  background-color: #0A0000;\r\n}\r\n#snackbar.show {\r\n  visibility: visible;\r\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@keyframes fadein {\r\n  from {bottom: 0; opacity: 0;}\r\n  to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadeout {\r\n  from {bottom: 30px; opacity: 1;}\r\n  to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--app-menu></app-menu-->\n<!-- index.html -->\n<!--\n\n<form name=\"juego\">\n<ul>\n   <li>\n   Primer número: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\n  \n  </li>\n  <li>\n   Operador: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\n    \n  </li>\n  <li>\n   Segundo número: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\n    \n  </li>\n  <li>\n    Respuesta: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\n     \n   </li>\n  <li>\n    <h2 [hidden]=\"ocultarVerificar\" ><button (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar {{Tiempo}} </button></h2>\n  </li>\n  <li>\n    <h2 [hidden]=\"!ocultarVerificar\"><button  (click)=\"NuevoJuego()\"  class=\"btn btn-info btn-lg\">Nuevo</button></h2>\n  </li>\n  <li>\n    <h2><p><i class=\"fa fa-spinner fa-spin\"></i>Esperando numero...</p></h2>\n\n    <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\n    <h3 [hidden]=\"nuevoJuego.gano\">usted aún no gano </h3>\n  </li>\n</ul>\n\n</form>-->\n\n\n<div style=\"text-align:center ;font-family: 'Press Start 2P',cursive;color: white; \">\n    <h2>\n     Agilidad Aritmetica\n    </h2>\n   </div>\n\n<form name=\"juego\" style=\"font-family: 'Press Start 2P',cursive; font-size: 10px\">\n  <div class=\"centro\">\n<h3 style=\"text-align: center\">{{nuevoJuego.numero1}}\n    {{nuevoJuego.operardorMostrar}}\n    {{nuevoJuego.numero2}}</h3>\n  \n <h3>\n    Respuesta: <input [(ngModel)]=\"nuevoJuego.resultadoParticipante\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\n </h3>\n  \n    <h2 [hidden]=\"ocultarVerificar\" ><button (click)=\"verificar()\" class=\"btn2\">Verificar {{Tiempo}} </button></h2>\n \n    <h2 [hidden]=\"!ocultarVerificar\"><button  (click)=\"NuevoJuego()\"  class=\"btn2 orange\">Nuevo</button></h2>\n  \n  \n\n \n\n</div>\n</form>\n<div id=\"snackbar\">{{Mensajes}}</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgilidadAritmeticaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__ = __webpack_require__("../../../../../src/app/clases/juego-agilidad.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//=================

var AgilidadAritmeticaComponent = (function () {
    //==========original=============================0
    // constructor() {
    // this.ocultarVerificar=true;
    //this.Tiempo=5; 
    //this.nuevoJuego = new JuegoAgilidad();
    //console.info("Inicio agilidad");  
    // }
    //================Modificado==============================
    function AgilidadAritmeticaComponent(miServicio) {
        this.miServicio = miServicio;
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.ocultarVerificar = true;
        this.Tiempo = 5;
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__["a" /* JuegoAgilidad */]();
        this.nuevoJuego.jugador = this.miServicio.TraerUsuario();
        console.info("Inicio agilidad");
    }
    AgilidadAritmeticaComponent.prototype.ngOnInit = function () {
    };
    //================original=========================1
    /*NuevoJuego() {
      this.ocultarVerificar=false;
     this.repetidor = setInterval(()=>{
        
        this.Tiempo--;
        console.log("llego", this.Tiempo);
        if(this.Tiempo==0 ) {
          clearInterval(this.repetidor);
          this.verificar();
          this.ocultarVerificar=true;
          this.Tiempo=5;
        }
        }, 900);
  
    }*/
    //===============modificado=========================1
    AgilidadAritmeticaComponent.prototype.NuevoJuego = function () {
        var _this = this;
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__["a" /* JuegoAgilidad */]();
        this.nuevoJuego.jugador = this.miServicio.TraerUsuario();
        this.ocultarVerificar = false;
        this.nuevoJuego.generarNuevo();
        this.repetidor = setInterval(function () {
            _this.Tiempo--;
            if (_this.Tiempo == 0) {
                clearInterval(_this.repetidor);
                _this.verificar();
                _this.ocultarVerificar = true;
                _this.Tiempo = 5;
            }
        }, 900);
    };
    //=================originail=============================
    // verificar()
    // {
    //  this.ocultarVerificar=false;
    //   clearInterval(this.repetidor);
    //}  
    //=================Modificado===============================
    AgilidadAritmeticaComponent.prototype.verificar = function () {
        this.ocultarVerificar = false;
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Sos un Genio!!!", true);
            this.ocultarVerificar = true;
            clearInterval(this.repetidor);
        }
        else {
            this.MostarMensaje("Puede fallar!!!");
            clearInterval(this.repetidor);
            this.ocultarVerificar = true;
            this.enviarJuego.emit(this.nuevoJuego);
            this.Tiempo = 5;
        }
    };
    //==MOSTramos el mensaje
    AgilidadAritmeticaComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);
    };
    return AgilidadAritmeticaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], AgilidadAritmeticaComponent.prototype, "enviarJuego", void 0);
AgilidadAritmeticaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-agilidad-aritmetica',
        template: __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _b || Object])
], AgilidadAritmeticaComponent);

var _a, _b;
/*

import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad';
import { JuegoServiceService } from '../../servicios/juego-service.service';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})

export class AgilidadAritmeticaComponent implements OnInit {
   @Output()
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();

  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  private subscription: Subscription;
  Mensajes:string;
  
  ngOnInit() {
  }
   constructor(public miServicio : JuegoServiceService) {
     this.ocultarVerificar=true;
     this.Tiempo=5;
     this.nuevoJuego = new JuegoAgilidad();
     
    this.nuevoJuego.jugador = this.miServicio.TraerUsuario();

    console.info("Inicio agilidad");
  }

  NuevoJuego() {
    this.nuevoJuego = new JuegoAgilidad();
    
    this.nuevoJuego.jugador = this.miServicio.TraerUsuario();
    this.ocultarVerificar=false;
    this.nuevoJuego.generarNuevo();
    this.repetidor = setInterval(()=>{
      
      this.Tiempo--;
     
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar()
        this.ocultarVerificar=true;
        this.Tiempo=5;
        
      }
      }, 900);

  }
  verificar()
  {
    this.ocultarVerificar=false;
    if (this.nuevoJuego.verificar()){
      
      this.enviarJuego.emit(this.nuevoJuego);
      this.MostarMensaje("Sos un Genio!!!",true);
      
      this.ocultarVerificar=true;
      clearInterval(this.repetidor);
      

    }else{
      this.MostarMensaje("Puede fallar!!!");
      clearInterval(this.repetidor);
      this.ocultarVerificar=true;
      this.enviarJuego.emit(this.nuevoJuego);
      
      this.Tiempo=5;
    }
    
      
  }

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    
    setTimeout(function(){
      x.className = x.className.replace("show", "");
     }, 3000);
  
   }

}

*/ 
//# sourceMappingURL=agilidad-aritmetica.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-agilidad-aritmetica (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-agilidad-aritmetica> \n<h1> Listado de Resultados </h1>\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\n\n<!--\n\n\n    \n<div class=\"row\">\n        <div class=\"col-sm-6\">\n            \n                <app-agilidad-aritmetica (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-agilidad-aritmetica> \n          </div>\n        <div class=\"col-sm-6\">\n            <app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\n        </div>\n        \n      </div>\n-->"

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgilidadMasListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//llamamos a servicio

var AgilidadMasListadoComponent = (function () {
    //============original==========
    //constructor() { this.listadoParaCompartir = new Array<any>()}
    //============modificado========
    function AgilidadMasListadoComponent(servicioJuego) {
        this.servicioJuego = servicioJuego;
    }
    //============original==========
    //ngOnInit() {
    // }
    //============modificado========
    AgilidadMasListadoComponent.prototype.ngOnInit = function () {
        this.listadoParaCompartir = this.servicioJuego.InicializarLista();
        this.lista = JSON.stringify(this.listadoParaCompartir);
    };
    AgilidadMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        // console.info("en app",this.listadoParaCompartir);
        this.servicioJuego.CargarLista(this.listadoParaCompartir);
        console.log(this.listadoParaCompartir);
        console.log(this.lista);
    };
    return AgilidadMasListadoComponent;
}());
AgilidadMasListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-agilidad-mas-listado',
        template: __webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _a || Object])
], AgilidadMasListadoComponent);

var _a;
/*
import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';

import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-agilidad-mas-listado',
  templateUrl: './agilidad-mas-listado.component.html',
  styleUrls: ['./agilidad-mas-listado.component.css']
})
export class AgilidadMasListadoComponent implements OnInit {
  public listadoParaCompartir: any;
  lista:any;

  constructor(public servicioJuego:JuegoServiceService) {
    }

  ngOnInit() {
    this.listadoParaCompartir = this.servicioJuego.InicializarLista();
    this.lista = JSON.stringify(this.listadoParaCompartir);
  }

  tomarJuegoTerminado(juego: Juego)
  {
    this.listadoParaCompartir.push(juego);
    this.servicioJuego.CargarLista(this.listadoParaCompartir);

    console.log(this.listadoParaCompartir);console.log(this.lista);
  }
}


*/ 
//# sourceMappingURL=agilidad-mas-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama-mas-listado/anagrama-mas-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama-mas-listado/anagrama-mas-listado.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n      \n      <app-anagrama (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-anagrama> \n    </div>\n  <div class=\"col-sm-6\">\n      <app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\n  </div>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama-mas-listado/anagrama-mas-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnagramaMasListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnagramaMasListadoComponent = (function () {
    function AnagramaMasListadoComponent(servicioJuego) {
        this.servicioJuego = servicioJuego;
    }
    AnagramaMasListadoComponent.prototype.ngOnInit = function () {
        this.listadoParaCompartir = this.servicioJuego.InicializarLista();
        this.lista = JSON.stringify(this.listadoParaCompartir);
    };
    AnagramaMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        this.servicioJuego.CargarLista(this.listadoParaCompartir);
        console.log(this.listadoParaCompartir);
        console.log(this.lista);
    };
    return AnagramaMasListadoComponent;
}());
AnagramaMasListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-anagrama-mas-listado',
        template: __webpack_require__("../../../../../src/app/componentes/anagrama-mas-listado/anagrama-mas-listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/anagrama-mas-listado/anagrama-mas-listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _a || Object])
], AnagramaMasListadoComponent);

var _a;
/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagrama-mas-listado',
  templateUrl: './anagrama-mas-listado.component.html',
  styleUrls: ['./anagrama-mas-listado.component.css']
})
export class AnagramaMasListadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/ 
//# sourceMappingURL=anagrama-mas-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nform {\r\n    \r\n    width: 100%;\r\n    margin: 0; padding: 0;\r\n}\r\n\r\n.centro{\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    width: 700px;\r\n    border: 10px solid #f1f1f1;\r\n    background: rgb(246, 4, 77);\r\n    text-align: center;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    \r\n   \r\n}\r\n\r\n#snackbar {\r\n  visibility: hidden;\r\n  min-width: 250px;\r\n  margin-right: 300px;\r\n  margin-left: 300px; \r\n  \r\n  \r\n  font-family: 'Press Start 2P',cursive; \r\n  font-size: 15px;\r\n\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 2px;\r\n  padding: 16px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 5%;\r\n  bottom: 30px;\r\n}\r\n#snackbar.Ganador {\r\n  background-color: #059F2F;\r\n}\r\n#snackbar.Perdedor {\r\n  background-color: #FF0000;\r\n}\r\n#snackbar.show {\r\n  visibility: visible;\r\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@keyframes fadein {\r\n  from {bottom: 0; opacity: 0;}\r\n  to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadeout {\r\n  from {bottom: 30px; opacity: 1;}\r\n  to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<p>\n  anagrama works!\n</p>-->\n<div style=\"text-align:center ;font-family: 'Press Start 2P',cursive;color: white; \">\n  <h2>\n   Anagrama\n  </h2>\n </div>\n<form name=\"juego\" style=\"font-family: 'Press Start 2P',cursive; font-size: 10px\">\n  <div class=\"centro\">\n      <div align=\"center\" class=\"titulo\" style=\"color:aliceblue\">\n          <h4>Presione Generar</h4>\n          </div>\n    <h3 [hidden]=\"ocultarVerificar\" style=\"color:aliceblue\">{{miJuego.desordenada}}</h3>\n    <h3 [hidden]=\"!ocultarVerificar\" style=\"color:aliceblue\">{{miJuego.palabra}}</h3>\n\n    <input type=\"text\" [(ngModel)]=\"miJuego.respuesta\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"ingrese respuesta\" >\n    <h3></h3>\n    <button [hidden]=\"!ocultarVerificar\" class=\"btn2 blue\" (click)=\"GenerarNuevo()\">Generar Palabra</button>\n    \n    <button [hidden]=\"ocultarVerificar\" class=\"btn2 purple\"(click)=\"Verificar()\">Validar</button>\n    <h3></h3>\n</div>\n</form>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnagramaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clases_juego_anagrama__ = __webpack_require__("../../../../../src/app/clases/juego-anagrama.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/



var AnagramaComponent = (function () {
    function AnagramaComponent(serv) {
        this.serv = serv;
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.miJuego = new __WEBPACK_IMPORTED_MODULE_2__clases_juego_anagrama__["a" /* JuegoAnagrama */]();
        this.miJuego.jugador = this.serv.TraerUsuario();
        this.miJuego.desordenada = "Presiona el Boton";
        this.ocultarVerificar = true;
    }
    AnagramaComponent.prototype.GenerarNuevo = function () {
        this.ocultarVerificar = false;
        this.miJuego = new __WEBPACK_IMPORTED_MODULE_2__clases_juego_anagrama__["a" /* JuegoAnagrama */]();
        this.miJuego.jugador = this.serv.TraerUsuario();
        this.miPalabra = this.Palabras[Math.floor((Math.random() * 32))];
        this.miJuego.palabra = this.miPalabra["palabra"];
        this.miJuego.desordenada = this.miPalabra["desordenada"];
    };
    AnagramaComponent.prototype.Verificar = function () {
        if (this.miJuego.verificar()) {
            this.enviarJuego.emit(this.miJuego);
            console.log(this.miJuego);
            this.ocultarVerificar = true;
        }
        else {
            this.enviarJuego.emit(this.miJuego);
            console.log(this.miJuego);
            this.ocultarVerificar = true;
        }
    };
    AnagramaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serv.TraerPalabas().then(function (data) { _this.Palabras = data; });
    };
    AnagramaComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);
    };
    return AnagramaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], AnagramaComponent.prototype, "enviarJuego", void 0);
AnagramaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-anagrama',
        template: __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _b || Object])
], AnagramaComponent);

var _a, _b;
//# sourceMappingURL=anagrama.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/cabecera/cabecera.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel\n{\n    height: 200px;\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/imagenes/listadoFondoGame.jpg")) + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n}\n\n\n.hero-text {\ntext-align: center;\nposition: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\ncolor: #3E06B0;\n}\n\n.hero-text a {\nborder: none;\noutline: 0;\ndisplay: inline-block;\npadding: 10px 25px;\ncolor: black;\nbackground-color: #ddd;\ntext-align: center;\ncursor: pointer;\n}\n\n.hero-text a:hover {\nbackground-color: #555;\ncolor: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/cabecera/cabecera.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"hero-text\">\n      <h1 style=\"font-size:50px\">Sala de Juegos</h1>\n      <p>Alan Ruiz</p>\n      <a href=\"https://github.com/alanruiz010\"target=\"_blank\">en GitHub <i class=\"fa fa-github\"></i></a>\n      <a  routerLink=\"/QuienSoy\" >Quien Soy? <i class=\"fa fa-user\"></i></a>\n  </div>\n  <ul class=\"nav navbar-nav navbar-right\">\n          <li><a routerLink=\"/Registro\"><span class=\"glyphicon glyphicon-user\"></span>Registrarse</a></li>\n          <li><a  routerLink=\"/Login\"><span class=\"glyphicon glyphicon-log-in\"></span> Ingresar</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/cabecera/cabecera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabeceraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CabeceraComponent = (function () {
    function CabeceraComponent() {
    }
    CabeceraComponent.prototype.ngOnInit = function () {
    };
    return CabeceraComponent;
}());
CabeceraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cabecera',
        template: __webpack_require__("../../../../../src/app/componentes/cabecera/cabecera.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/cabecera/cabecera.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CabeceraComponent);

//# sourceMappingURL=cabecera.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"panel panel-default\">\n    <div class=\"hero-text\">\n        <h1 style=\"font-size:50px\">Sala de Juegos</h1>\n        <p>Alan Ruiz</p>\n        <a href=\"https://github.com/alanruiz010\"target=\"_blank\">en GitHub <i class=\"fa fa-github\"></i></a>\n        <a  routerLink=\"/QuienSoy\"target=\"_blank\">Quien Soy? <i class=\"fa fa-github\"></i></a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span>Registrase</a></li>\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Ingresar</a></li>\n          </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-error',
        template: __webpack_require__("../../../../../src/app/componentes/error/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/error/error.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/input-jugadores/input-jugadores.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/input-jugadores/input-jugadores.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  input-jugadores works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/input-jugadores/input-jugadores.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputJugadoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputJugadoresComponent = (function () {
    function InputJugadoresComponent() {
    }
    InputJugadoresComponent.prototype.ngOnInit = function () {
    };
    return InputJugadoresComponent;
}());
InputJugadoresComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-input-jugadores',
        template: __webpack_require__("../../../../../src/app/componentes/input-jugadores/input-jugadores.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/input-jugadores/input-jugadores.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputJugadoresComponent);

//# sourceMappingURL=input-jugadores.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-menu></app-menu>\n<html>\n    <body style=\"background-color:coral\">\n<div style=\"text-align:center\">\n  <h1>\n   Sala de Juegos - Listado de Juegos\n  </h1>\n </div>\n </body>\n</html>\n <router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JuegosComponent = (function () {
    function JuegosComponent() {
    }
    JuegosComponent.prototype.ngOnInit = function () {
    };
    return JuegosComponent;
}());
JuegosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-juegos',
        template: __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.css")]
    }),
    __metadata("design:paramtypes", [])
], JuegosComponent);

//# sourceMappingURL=juegos.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills nav-justified\">\n  <li class=\"active\"><a routerLink=\"/Principal\">Ir a inicio</a></li>\n  <li><a (click)=\"TraerTodos()\">Todos los jugadores</a></li>\n  <li><a (click)=\"TraerGanadores()\">Los ganadores</a></li>\n  <li><a (click)=\"TraerPerdedores()\">Los perdedores</a></li>\n</ul>\n\n\n\n<table class=\"table table-condensed\">\n  <thead>\n    <tr>\n      <th>usuario</th>\n      <th>cuit</th>\n      <th>sexo</th>\n      <th>gano</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let jugador of listado\" >\n      <td>{{jugador.usuario}} </td>\n      <td>{{jugador.cuit}} </td> \n      <td>{{jugador.sexo | sexo| uppercase}} </td> \n      <td>{{jugador.gano}} </td> \n      \n    </tr>\n   \n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/jugadores.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JugadoresListadoComponent = (function () {
    function JugadoresListadoComponent(serviceJugadores) {
        this.miJugadoresServicio = serviceJugadores;
    }
    JugadoresListadoComponent.prototype.ngOnInit = function () {
    };
    JugadoresListadoComponent.prototype.TraerTodos = function () {
        var _this = this;
        //alert("totos");
        this.miJugadoresServicio.traertodos('jugadores/', 'todos').then(function (data) {
            //console.info("jugadores listado",(data));
            _this.listado = data;
        });
    };
    JugadoresListadoComponent.prototype.TraerGanadores = function () {
        var _this = this;
        this.miJugadoresServicio.traertodos('jugadores/', 'ganadores').then(function (data) {
            //console.info("jugadores listado",(data));
            _this.listado = data;
        });
    };
    JugadoresListadoComponent.prototype.TraerPerdedores = function () {
        var _this = this;
        this.miJugadoresServicio.traertodos('jugadores/', 'perdedores').then(function (data) {
            //console.info("jugadores listado",(data));
            _this.listado = data;
        });
    };
    return JugadoresListadoComponent;
}());
JugadoresListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-jugadores-listado',
        template: __webpack_require__("../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__["a" /* JugadoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__["a" /* JugadoresService */]) === "function" && _a || Object])
], JugadoresListadoComponent);

var _a;
//# sourceMappingURL=jugadores-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n Listado de paises\n</h1>\n<table class=\"table table-condensed\">\n  <thead>\n    <tr>\n      <th>Pais</th>\n      <th>Región</th>\n      <th>Nombre local</th>\n      <th>Sub Región</th>\n      <th>Población</th>\n      <th>Bandera</th>\n      <th>Capital</th>\n      <th>GPS</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let pais of listadoDePaises\">\n      <td>{{pais.name}} </td>\n      <td>{{pais.region}} </td> \n      <td>{{pais.nativeName}} </td> \n      <td>{{pais.subregion}} </td>       \n      <td>{{pais.population}} </td> \n      <td><img src='{{pais.flag}}' width=\"50px\"/> </td> \n      <td>{{pais.capital}} </td> \n      <td>{{pais.borders}} </td> \n      <td>{{pais.latlng}} </td> \n    </tr>\n   \n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoDePaisesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_paises_service__ = __webpack_require__("../../../../../src/app/servicios/paises.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoDePaisesComponent = (function () {
    function ListadoDePaisesComponent(servicioPaises) {
        this.miServicioDePaises = servicioPaises;
    }
    ListadoDePaisesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.miServicioDePaises.listar()
            .then(function (datos) {
            console.info("listado de paises", datos);
            _this.listadoDePaises = datos;
        });
    };
    return ListadoDePaisesComponent;
}());
ListadoDePaisesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listado-de-paises',
        template: __webpack_require__("../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_paises_service__["a" /* PaisesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_paises_service__["a" /* PaisesService */]) === "function" && _a || Object])
], ListadoDePaisesComponent);

var _a;
//# sourceMappingURL=listado-de-paises.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div *ngFor=\"let juego of listado\">\n\n<p> {{juego.nombre}} </p>\n<p> {{juego.jugador}} </p>\n\n</div-->\n\n<table class=\"table table-condensed\">\n    <thead>\n      <tr>\n        <th>Juego</th>\n        <th>Jugador</th>\n        <th>Resultado</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let juego of listado\">\n        <td>{{juego.nombre}} </td>\n        <td>{{juego.jugador}} </td> \n        <td *ngIf=\"juego.gano\">Gano </td>   \n        <td *ngIf=\"!juego.gano\">Perdio</td>     \n      </tr>\n     \n    </tbody>\n  </table>"

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoDeResultadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListadoDeResultadosComponent = (function () {
    function ListadoDeResultadosComponent() {
    }
    ListadoDeResultadosComponent.prototype.ngOnInit = function () {
    };
    ListadoDeResultadosComponent.prototype.ver = function () {
        console.info(this.listado);
    };
    return ListadoDeResultadosComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ListadoDeResultadosComponent.prototype, "listado", void 0);
ListadoDeResultadosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listado-de-resultados',
        template: __webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListadoDeResultadosComponent);

//# sourceMappingURL=listado-de-resultados.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Style all font awesome icons */\n.fa {\n    padding: 20px;\n    font-size: 30px;\n    width: 50px;\n    text-align: center;\n    text-decoration: none;\n    border-radius: 50%;\n}\n\n/* Add a hover effect if you want */\n.fa:hover {\n    opacity: 0.7;\n}\n\n/* Set a specific color for each brand */\n\n/* Facebook */\n.fa-facebook {\n    background: #3B5998;\n    color: white;\n}\n\n/* Twitter */\n.fa-twitter {\n    background: #55ACEE;\n    color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--input type=\"button\" (click)=\"llamaService()\" class=\"btn btn-info\" value=\"Pulsame\" > \n<input type=\"button\" (click)=\"llamaServicePromesa()\" class=\"btn btn-info\" value=\"Pulsame Promesa\" --> \n\n<!-- Centered Pills -->\n<ul class=\"nav nav-pills nav-justified\">\n    <li class=\"active\"><a routerLink=\"/Principal\">Sala de Juegos</a></li>\n    <li><a (click)=\"llamaService()\">Servicio</a></li>\n    <li><a (click)=\"llamaServicePromesa()\">Serv Promesa</a></li>\n    <li><a (click)=\"llamaServicePromesa()\">Serv observable</a></li>\n  </ul>\n  \n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\n\n"

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoComponent = (function () {
    function ListadoComponent(servicioJuego) {
        this.servicioJuego = servicioJuego;
        this.miServicioJuego = servicioJuego;
        // constructor(public servicioJuego:JuegoServiceService)  
        this.listadoParaCompartir = this.servicioJuego.InicializarLista();
        //this.lista = JSON.stringify(this.listadoParaCompartir);
    }
    ListadoComponent.prototype.ngOnInit = function () {
    };
    ListadoComponent.prototype.llamaService = function () {
        console.log("llamaService");
        this.listadoParaCompartir = this.miServicioJuego.listar();
    };
    ListadoComponent.prototype.llamaServicePromesa = function () {
        var _this = this;
        console.log("llamaServicePromesa");
        this.miServicioJuego.listarPromesa().then(function (listado) {
            _this.listadoParaCompartir = listado;
        });
    };
    return ListadoComponent;
}());
ListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listado',
        template: __webpack_require__("../../../../../src/app/componentes/listado/listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listado/listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _a || Object])
], ListadoComponent);

var _a;
/*
import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';
import { Juego } from '../../clases/juego';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  listadoParaCompartir: Array<Juego>;
  lista:any;
  
  constructor(public servicioJuego:JuegoServiceService) {
    this.listadoParaCompartir = this.servicioJuego.InicializarLista();
    //this.lista = JSON.stringify(this.listadoParaCompartir);
    }
  
  ngOnInit() {
    
    
  }

  
  
}

*/ 
//# sourceMappingURL=listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listados/listados.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listados/listados.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  listados works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/listados/listados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListadosComponent = (function () {
    function ListadosComponent() {
    }
    ListadosComponent.prototype.ngOnInit = function () {
    };
    return ListadosComponent;
}());
ListadosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listados',
        template: __webpack_require__("../../../../../src/app/componentes/listados/listados.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listados/listados.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListadosComponent);

//# sourceMappingURL=listados.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n\nform {\n    border: 10px solid #f1f1f1;\n    padding: 10px;\n    background:gray;\n}\n\ninput[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n\nbutton {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\nbutton:hover {\n    opacity: 0.8;\n}\n\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n.aceptbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #3664F4;\n}\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n}\n\nimg.avatar {\n    width: 40%;\n    border-radius: 50%;\n}\n\n.container {\n    padding: 16px;\n}\n\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n.panel\n{\n    height: 600px;\n    background-image: url(\"../../../assets/imagenes/background.gif\");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n}\n*/\n/* Change styles for span and cancel button on extra small screens */\n/*\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}\n*//*===============================================================*/\n\nform {\n      \n    \n    width: 100%;\n    margin: 0; padding: 0;\n\n    height: 600px;\n  /*  background-image: url(\"../../../assets/imagenes/cascadacueva.gif\");*/\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n\n}/*==============================================================================*/\n\n.button {\n    background-color: rgb(22, 7, 245); /* Green */\n    border: none;\n    color: white;\n    padding: 20px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n}\n.button5 {border-radius: 50%;}\n.button3 {border-radius: 8px;}\n\n.fondo{\nbackground: url(" + escape(__webpack_require__("../../../../../src/assets/imagenes/puentearroyo.gif")) + ") no-repeat center fixed; \nbackground-size: cover;\n}\n/*===================================================================================*/\nlabel{\n    font-family: 'Press Start 2P',cursive; \n    color: #FFFFFF;\n    font-size: 13px;\n}\n.centro{\n    margin-right: auto;\n    margin-left: auto;\n    width: 500px;\n    border: 10px solid rgba(51, 8, 243, 0.49);\n    background: rgba(112, 246, 168, 0.43);\n    text-align: center;\n    -ms-flex-align: center;\n        align-items: center;\n   \n}\n\n\n\n\n\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n.aceptbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #3664F4;\n}\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n}\n\nimg.avatar {\n    width: 40%;\n    border-radius: 50%;\n}\n\n.container {\n    padding: 16px;\n}\n\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div style=\"margin: 20% auto; width: 30%;\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      Usuario\n    </div>\n    <div class=\"col-lg-6\">\n      <input type=\"text\"  [(ngModel)]=\"usuario\">\n    </div>\n  </div>\n  <div class=\"row\" style=\"margin-top: 5px\">\n    <div class=\"col-lg-6\">\n      Clave\n    </div>\n    <div class=\"col-lg-6\">\n      <input type=\"password\" [(ngModel)]=\"clave\">\n    </div>\n  </div>\n  <div class=\"row\" style=\"text-align: center; margin-top: 10px\">\n    <div class=\"col-lg-12\">\n      <button (click)=\"Entrar()\" class=\"btn btn-info btn-lg\" >Entrar</button>\n    </div>\n  </div>\n</div-->\n<!--\n<div class=\"panel panel-default\">\n <div class=\"container\" >\n  <div class=\"jumbotron\" style=\"padding:50px;\">\n    <form action=\"return true;\">\n      <div class=\"imgcontainer\">\n        <img src=\"../../../assets/imagenes/login_here.jpg\" alt=\"Avatar\" class=\"avatar\" max-width=\"104\" >\n      </div>\n\n      <div class=\"container\">\n        <label><b>Usuario</b></label>\n        <input type=\"text\" placeholder=\"Usuario\"  [(ngModel)]=\"usuario\"  name=\"uname\" required>\n\n        <label><b>Clave</b></label>\n        <input type=\"password\" placeholder=\"Clave\"  [(ngModel)]=\"clave\" name=\"psw\" required>\n            \n        <button *ngIf=\"logeando\"  (click)=\"MoverBarraDeProgreso()\" >Ingresar</button>\n       \n        <div *ngIf=\"!logeando\" class=\"progress\">\n            <div class=\"progress-bar progress-bar-info progress-bar-striped active\" [class]=\"clase\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"ProgresoDeAncho\" >\n              {{progresoMensaje}} - {{progreso}}%\n            </div>\n        </div>\n       \n        <input type=\"checkbox\" checked=\"checked\"> Recordar mis datos\n      </div>\n\n      <div class=\"container\" style=\"background-color:#f1f1f1\">\n        <button type=\"button\" class=\"cancelbtn\">Cancelar</button>\n        <button type=\"button\" class=\"aceptbtn\" routerLink=\"/Registro\" >Registrarse</button>\n        <span class=\"psw\">Te olvidaste <a href=\"#\">la clave?</a></span>\n      </div>\n     \n    </form>\n  </div>\n</div>\n</div>\n-->\n\n\n<html>\n\n<body style=\"background-color:lightseagreen;\" class=\"fondo\"  >\n\n  <br><br><br><br><br><br>\n\n<form name=\"juego\" style=\"font-family: 'Press Start 2P',cursive; font-size: 10px\">\n    <div class=\"centro\">\n      <h2></h2>\n            \n      <div class=\"imgcontainer\">\n          <img src=\"../../../assets/imagenes/login_here.jpg\" alt=\"Avatar\" class=\"avatar\" max-width=\"104\" >\n        </div>\n<!--\"../../TP_LAV4_2017/assets/imagenes/login.gif\"-->\n       <label><b>Usuario</b></label>\n        <input type=\"text\" placeholder=\"Usuario\"  [(ngModel)]=\"usuario\"  name=\"uname\" required>\n<h5></h5>\n        <label><b>Clave</b></label>\n        <input type=\"password\" placeholder=\"Clave\"  [(ngModel)]=\"clave\" name=\"psw\" required>\n            \n        \n       \n        <div *ngIf=\"!logeando\" class=\"progress\">\n            <div class=\"progress-bar progress-bar-info progress-bar-striped active\" [class]=\"clase\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"ProgresoDeAncho\" >\n              {{progresoMensaje}} - {{progreso}}%\n            </div>\n        </div>\n       \n        \n        <h2></h2>\n        <button class=\"button button5\" *ngIf=\"logeando\"  (click)=\"MoverBarraDeProgreso()\" >Ingresar</button>\n        <button class=\"button button5\" routerLink=\"/Registro\" >Registrarse</button>\n        <H2></H2>\n      </div>\n\n    \n        \n    \n     \n      <h3></h3>\n  \n</form>\n\n</body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_TimerObservable__ = __webpack_require__("../../../../rxjs/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_TimerObservable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    //======================original======================
    //constructor(
    // private route: ActivatedRoute,
    //private router: Router) {
    //    this.progreso=0;
    //   this.ProgresoDeAncho="0%";
    // }
    //======================Modificado======================
    function LoginComponent(miServicio, route, router) {
        this.miServicio = miServicio;
        this.route = route;
        this.router = router;
        this.usuario = '';
        this.clave = '';
        this.progresoMensaje = "esperando...";
        this.logeando = true;
        this.clase = "progress-bar progress-bar-info progress-bar-striped ";
        this.progreso = 0;
        this.ProgresoDeAncho = "0%";
        this.lista = this.miServicio.InicializarLista();
        console.log(this.lista);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    //===============original================================
    //Entrar() {
    // if (this.usuario === 'admin' && this.clave === 'admin') {
    //    this.router.navigate(['/Principal']);
    // }
    // }
    //==================Modificado==============================
    LoginComponent.prototype.Entrar = function () {
        if (this.usuario === 'admin' && this.clave === 'admin' || this.usuario === 'alan' && this.clave === '1234') {
            this.miServicio.CargarUsuario(this.usuario);
            this.router.navigate(['/Principal']);
        }
        else {
            this.router.navigate([' ']);
        }
    };
    LoginComponent.prototype.MoverBarraDeProgreso = function () {
        var _this = this;
        this.logeando = false;
        this.clase = "progress-bar progress-bar-danger progress-bar-striped active";
        this.progresoMensaje = "NSA spy...";
        var timer = __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_TimerObservable__["TimerObservable"].create(200, 50);
        this.subscription = timer.subscribe(function (t) {
            console.log("inicio");
            _this.progreso = _this.progreso + 1;
            _this.ProgresoDeAncho = _this.progreso + 20 + "%";
            switch (_this.progreso) {
                case 15:
                    _this.clase = "progress-bar progress-bar-warning progress-bar-striped active";
                    _this.progresoMensaje = "Verificando ADN...";
                    break;
                case 30:
                    _this.clase = "progress-bar progress-bar-Info progress-bar-striped active";
                    _this.progresoMensaje = "Adjustando encriptación..";
                    break;
                case 60:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Recompilando Info del dispositivo..";
                    break;
                case 75:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Recompilando claves facebook, gmail, chats..";
                    break;
                case 85:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Instalando KeyLogger..";
                    break;
                case 100:
                    console.log("final");
                    _this.subscription.unsubscribe();
                    _this.Entrar();
                    break;
            }
        });
        //this.logeando=true;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/componentes/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
/*

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JuegoServiceService } from '../../servicios/juego-service.service';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  usuario = '';
  clave= '';
  progreso: number;
  progresoMensaje="esperando...";
  logeando=true;
  ProgresoDeAncho:string;
  lista:any;
  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(private miServicio : JuegoServiceService,
    private route: ActivatedRoute,
    private router: Router) {
      this.progreso=0;
      this.ProgresoDeAncho="0%";
      this.lista = this.miServicio.InicializarLista();
      console.log(this.lista);

  }

  ngOnInit() {
  }

  Entrar() {
    if (this.usuario === 'admin' && this.clave === 'admin' || this.usuario === 'German' && this.clave === '1234') {
      this.miServicio.CargarUsuario(this.usuario);
      this.router.navigate(['/Principal']);
    }
  }
  MoverBarraDeProgreso() {
    
    this.logeando=false;
    this.clase="progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje="NSA spy...";
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      console.log("inicio");
      this.progreso=this.progreso+1;
      this.ProgresoDeAncho=this.progreso+20+"%";
      switch (this.progreso) {
        case 15:
        this.clase="progress-bar progress-bar-warning progress-bar-striped active";
        this.progresoMensaje="Verificando ADN...";
          break;
        case 30:
          this.clase="progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje="Adjustando encriptación..";
          break;
          case 60:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando Info del dispositivo..";
          break;
          case 75:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando claves facebook, gmail, chats..";
          break;
          case 85:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Instalando KeyLogger..";
          break;
          
        case 100:
          console.log("final");
          this.subscription.unsubscribe();
          this.Entrar();
          break;
      }
    });
    //this.logeando=true;
  }

}


*/ 
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/mapa-de-google/mapa-de-google.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n    height: 300px;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/mapa-de-google/mapa-de-google.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\n\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n<!-- <agm-map [latitude]=\"lat\" [longitude]=\"lng\"  (mapClick)=\"mapClicked($event)\">\n   \n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map> -->\n<!-- <input type =\"text\" [(ngModel)]=\"lat\" />\n<input type=\"text\" [(ngModel)]=\"lng\"/>  -->"

/***/ }),

/***/ "../../../../../src/app/componentes/mapa-de-google/mapa-de-google.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaDeGoogleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapaDeGoogleComponent = (function () {
    function MapaDeGoogleComponent() {
        this.title = 'El Primer mapa';
        this.lat = 33.678418;
        this.lng = 5.809007;
        // google maps zoom level
        this.zoom = 8;
    }
    MapaDeGoogleComponent.prototype.ngOnInit = function () {
    };
    return MapaDeGoogleComponent;
}());
MapaDeGoogleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-mapa-de-google',
        template: __webpack_require__("../../../../../src/app/componentes/mapa-de-google/mapa-de-google.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/mapa-de-google/mapa-de-google.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MapaDeGoogleComponent);

//# sourceMappingURL=mapa-de-google.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n    border-radius: 5px; /* 5px rounded corners */\n    max-width: 300px;\n   height: 100%;\n    margin: 10px;\n    padding-bottom: 10px;\n    float: left;\n  background-color: rgba(166, 243, 166, 0.768);\n    text-align: center;\n}\n\n/* Add rounded corners to the top left and the top right corner of the image */\nimg {\n    border-radius: 5px 5px 0 0;\n    width: 200px;\n    height: 200px;\n}/* Add some padding inside the card container */\n.container {\n    padding: 2px 16px;\n}\n\n\n.button{\n    margin-left: 1px;\n    display: inline-block;\n    width: 90%;\n    padding: 5px 15px;\n    font-size: 24px;\n    text-align: center;\n    cursor: pointer;\n    outline: none;\n    color: #fff;\n    background-color:#4CAF50;\n    border: none;\n    border-radius: 15px;\n    box-shadow: 0 9px #999;\n\n    border: none;\n    outline: 0;\n \n    padding: 8px;\n    color: white;\n   /* background-color: #000;*/\n    text-align: center;\n    cursor: pointer;\n    width: 10%;\n    \n  }\n  \n  .button:hover {background-color: #3e8e41}\n  \n  .button:active {\n    background-color: #838e3e;\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n  }\n  h4{\n    color: white;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<html>\r\n  <body style=\"background-color:blue\">\r\n    <div class=\"container\" style=\"font-family: 'Press Start 2P',cursive; font-size: 10px\">\r\n<div class=\"container\" >\r\n    <div class=\"card\">\r\n      <img class=\"img-thumbnail\"   src=\"./assets/imagenes/quiensoy.jpg\" alt=\"Avatar\" style=\"width:100%\">\r\n      <h4>Velocidad y agilidad aritmética </h4>\r\n     <!-- <p class=\"title\">Juego de agilidad mental</p>\r\n      <p>UTN FRA </p>\r\n  \r\n       <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \r\n      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \r\n      <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \r\n      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> -->\r\n      <p>           <button class=\"button\"  (click)=\"Juego('Agilidad')\">Jugar</button></p>\r\n    \r\n    </div>\r\n  \r\n    <div class=\"card\">\r\n      <img class=\"img-thumbnail\" src=\"./assets/imagenes/ppt.jpg\" alt=\"Avatar\" style=\"width:100%\">\r\n      <h4>Piedra Papel o Tijera</h4>\r\n    <!--   <p class=\"title\">Juega contra la máquina</p>\r\n     <p>UTN FRA </p>\r\n      \r\n        <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \r\n      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \r\n      <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \r\n      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> -->\r\n      <p>           <button class=\"button\"  (click)=\"Juego('PPT')\">Jugar</button></p>\r\n    </div>\r\n    <div class=\"card\">\r\n      <img  class=\"img-thumbnail\"  src=\"./assets/imagenes/adivina.png\" alt=\"Avatar\" style=\"width:100%\">\r\n      <h4>Adivina el número secreto</h4>\r\n     <!--  <p class=\"title\">Juega de estrategia</p>\r\n      <p>UTN FRA </p>\r\n      \r\n       <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \r\n      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \r\n      <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \r\n      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> -->\r\n      <p>           <button class=\"button\"  (click)=\"Juego('Adivina')\">Jugar</button></p>\r\n    </div>\r\n    <div class=\"card\">\r\n        <img  class=\"img-thumbnail\"  src=\"./assets/imagenes/quiensoy3.png\" alt=\"Avatar\" style=\"width:100%\">\r\n        <h4>Juego Propio</h4>\r\n       <!-- <p class=\"title\">Juego de Roll</p>\r\n         <p>UTN FRA </p>\r\n        \r\n       <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \r\n        <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \r\n        <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \r\n        <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> -->\r\n        <p>           <button class=\"button\"  (click)=\"Juego('Adivina')\">Jugar</button></p>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <img  class=\"img-thumbnail\"  src=\"./assets/imagenes/chequear.jpg\" alt=\"Avatar\" style=\"width:100%\">\r\n        <H4>Anagrama de Palabra</H4>\r\n      \r\n        <p>           <button class=\"button\"  (click)=\"Juego('Anagrama')\">Jugar</button></p>\r\n      </div>\r\n      <div class=\"card\">\r\n        <img  class=\"img-thumbnail\"  src=\"./assets/imagenes/chequear.jpg\" alt=\"Avatar\" style=\"width:100%\">\r\n        <H4>Tateti</H4>\r\n        <p>           <button class=\"button\"  (click)=\"Juego('tateti')\">Jugar</button></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>\r\n  </html>  \r\n\r\n  \r\n<!--\r\n<div class=\"container\" style=\"font-family: 'Press Start 2P',cursive; font-size: 10px\">\r\n    <div class=\"card\">\r\n      <img class=\"img-thumbnail\"   src=\"../../TP_LAV4_2017/assets/imagenes/cerebro.jpg\" alt=\"Avatar\" style=\"width:100%\">\r\n      <H4>Velocidad aritmética </H4>\r\n  \r\n\r\n      <p>           <button class=\"btn2 blue\"  (click)=\"Juego('Agilidad')\">Jugar</button></p>\r\n    \r\n    </div>\r\n  \r\n       <div class=\"card\">\r\n      <img  class=\"img-thumbnail\"  src=\"../../TP_LAV4_2017/assets/imagenes/adivina.png\" alt=\"Avatar\" style=\"width:100%\">\r\n      <H4>Adivina el número</H4>\r\n    \r\n      <p>           <button class=\"btn2 blue\"  (click)=\"Juego('Adivina')\">Jugar</button></p>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n        <img class=\"img-thumbnail\" src=\"../../TP_LAV4_2017/assets/imagenes/ppt.jpg\" alt=\"Avatar\" style=\"width:100%\">\r\n        <H4>Piedra Papel o Tijera</H4>\r\n       \r\n        <p>           <button class=\"btn2 blue\"  (click)=\"Juego('PPT')\">Jugar</button></p>\r\n      </div>\r\n\r\n    <div class=\"card\">\r\n        <img  class=\"img-thumbnail\"  src=\"../../TP_LAV4_2017/assets/imagenes/Palabra.jpg\" alt=\"Avatar\" style=\"width:100%\">\r\n        <H4>Anagrama de Palabra</H4>\r\n      \r\n        <p>           <button class=\"btn2 blue\"  (click)=\"Juego('Anagrama')\">Jugar</button></p>\r\n      </div>\r\n \r\n      <div class=\"card\">\r\n          <img  class=\"img-thumbnail\"  src=\"../../TP_LAV4_2017/assets/imagenes/banderas.jpg\" alt=\"Avatar\" style=\"width:100%\">\r\n          <H4>Trivia de Banderas</H4>\r\n        \r\n          <p>           <button class=\"btn2 blue\"  (click)=\"Juego('Trivia')\">Jugar</button></p>\r\n        </div>\r\n  </div>\r\n\r\n-->"

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuCardComponent = (function () {
    function MenuCardComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuCardComponent.prototype.ngOnInit = function () {
    };
    MenuCardComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
            case 'Anagrama':
                this.router.navigate(['/Juegos/AnagramaMasListado']);
                break;
            case 'PPT':
                this.router.navigate(['/Juegos/PPTijeraMasListado']);
                break;
            case 'tateti':
                this.router.navigate(['/Juegos/tateti']);
                break;
        }
    };
    return MenuCardComponent;
}());
MenuCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu-card',
        template: __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MenuCardComponent);

var _a, _b;
/*
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
  }
  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
      case 'Anagrama':
          this.router.navigate(['/Juegos/AnagramaMasListado']);
        break;
      case 'PPT':
          this.router.navigate(['/Juegos/PPTijeraMasListado']);
        break;
        case 'Trivia':
        this.router.navigate(['/Juegos/TriviaPaices']);
      break;
    }
  }
}

*/ 
//# sourceMappingURL=menu-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div>\n    <button routerLink=\"/Principal\">Principal</button>\n    <button (click)=\"Juego('Adivina')\">Adivina</button>\n    <button (click)=\"Juego('Agilidad')\">Agilidad</button>\n    <button (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</button>\n    <button (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</button>  \n    <button routerLink=\"/error\">Error</button>\n  \n</div-->\n\n<!--nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" routerLink=\"/Principal\">Inicio</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a routerLink=\"/Juegos\">Juegos</a></li>\n        <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\n        <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\n        <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\n        <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\n        </ul>\n    </div>\n  </nav-->\n  <html>\n  <body style=\"background-color:aqua\">\n  <nav class=\"navbar navbar-inverse\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>\n                                  \n          </button>\n          <a class=\"navbar-brand\" routerLink=\"/Principal\">Inicio</a>\n          <a class=\"navbar-brand\" routerLink=\"/QuienSoy\">QuienSoy</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a routerLink=\"/Juegos\">Menú de Juegos</a></li>\n                <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\n                <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\n                <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\n                <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\n                <li><a  (click)=\"Juego('AgilidadaMasListado')\">PPT+listado</a></li>\n              </ul>\n              <ul class=\"nav navbar-nav navbar-right\">\n                  <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\n                  <li><a href=\"/Login\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\n                </ul>\n        </div>\n      </div>\n    </nav>\n      \n  </body>\n  </html>"

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
        }
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/componentes/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MenuComponent);

var _a, _b;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/pptijera-mas-listado/pptijera-mas-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/pptijera-mas-listado/pptijera-mas-listado.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n      \n<app-pptijera (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-pptijera> \n    </div>\n  <div class=\"col-sm-6\">\n      <app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\n  </div>\n  \n</div>\n\n<!--<p>\n  pptijera-mas-listado works!\n</p>-->"

/***/ }),

/***/ "../../../../../src/app/componentes/pptijera-mas-listado/pptijera-mas-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PPTijeraMasListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PPTijeraMasListadoComponent = (function () {
    function PPTijeraMasListadoComponent(servicioJuego) {
        this.servicioJuego = servicioJuego;
    }
    PPTijeraMasListadoComponent.prototype.ngOnInit = function () {
        this.listadoParaCompartir = this.servicioJuego.InicializarLista();
        this.lista = JSON.stringify(this.listadoParaCompartir);
    };
    PPTijeraMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        this.servicioJuego.CargarLista(this.listadoParaCompartir);
        console.log(this.listadoParaCompartir);
        console.log(this.lista);
    };
    return PPTijeraMasListadoComponent;
}());
PPTijeraMasListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-pptijera-mas-listado',
        template: __webpack_require__("../../../../../src/app/componentes/pptijera-mas-listado/pptijera-mas-listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/pptijera-mas-listado/pptijera-mas-listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _a || Object])
], PPTijeraMasListadoComponent);

var _a;
/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pptijera-mas-listado',
  templateUrl: './pptijera-mas-listado.component.html',
  styleUrls: ['./pptijera-mas-listado.component.css']
})
export class PptijeraMasListadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/ 
//# sourceMappingURL=pptijera-mas-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/pptijera/pptijera.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nform {\r\n    \r\n    width: 100%;\r\n    margin: 0; padding: 0;\r\n}\r\n\r\n.centro{\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    width: 500px;\r\n    border: 10px solid #f1f1f1;\r\n    background: #178800;\r\n    text-align: center;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    \r\n   \r\n}\r\n\r\nimg{\r\n  border: 5px solid #30131C;\r\n}\r\n\r\n#snackbar {\r\n  visibility: hidden;\r\n  min-width: 250px;\r\n  margin-right: 300px;\r\n  margin-left: 300px; \r\n  \r\n  \r\n  font-family: 'Press Start 2P',cursive; \r\n  font-size: 15px;\r\n\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 2px;\r\n  padding: 16px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 5%;\r\n  bottom: 30px;\r\n}\r\n#snackbar.Ganador {\r\n  background-color: #059F2F;\r\n}\r\n#snackbar.Perdedor {\r\n  background-color: #FF0000;\r\n}\r\n#snackbar.Empate {\r\n  background-color: #FFD000;\r\n}\r\n#snackbar.show {\r\n  visibility: visible;\r\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@keyframes fadein {\r\n  from {bottom: 0; opacity: 0;}\r\n  to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadeout {\r\n  from {bottom: 30px; opacity: 1;}\r\n  to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/pptijera/pptijera.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div style=\"text-align:center ;font-family: 'Press Start 2P',cursive;color: white; \">\n  <h2>\n   Piedra Papel Tijera\n  </h2>\n </div>\n<form name=\"juego\" style=\"font-family: 'Press Start 2P',cursive; font-size: 10px\">\n  <div class=\"centro\">\n      <div align=\"center\" class=\"titulo\">\n      <h4>Elija su opcion</h4>\n      </div>\n      <br>\n      <table border=\"0\" width=\"60%\" height=\"auto\" align=\"center\">\n          <tr>\n              <td><img style=\"margin:2px\" src=\"../../../assets/imagenes/piedra.jpg\" border=\"1\" width=\"100px\" height=\"150px\" (click)=\"Piedra()\"></td>\n            \n              <td><img style=\"margin:2px\" src=\"../../../assets/imagenes/papel.jpg\" border=\"1\" width=\"100px\" height=\"150px\" (click)=\"Papel()\"></td>\n             \n              <td><img style=\"margin:2px\" src=\"../../../assets/imagenes/tijera.jpg\" border=\"1\" width=\"100px\" height=\"150px\" (click)=\"Tijera()\"></td>\n          </tr>\n      </table>\n\n      <br><br>\n      <div [hidden]=ocultarOponente >\n        <div *ngIf=\"juegoPPT.numeroRandom==1\" align=\"center\">\n            <img src=\"../../../assets/imagenes/piedra.jpg\" border=\"1\" width=\"100px\" height=\"150px\">\n        </div>\n\n        <div *ngIf=\"juegoPPT.numeroRandom==2\" align=\"center\">\n            <img src=\"../../../assets/imagenes/papel.jpg\" border=\"1\" width=\"100px\" height=\"150px\">\n        </div>\n\n        <div *ngIf=\"juegoPPT.numeroRandom==3\" align=\"center\">\n            <img src=\"../../../assets/imagenes/tijera.jpg\" border=\"1\" width=\"100px\" height=\"150px\">\n        </div>\n      </div>\n      <h2></h2>\n    </div>\n  </form>\n\n  <div id=\"snackbar\">{{Mensajes}}</div>\n\n\n\n<!--<p>\n  pptijera works!\n</p>-->"

/***/ }),

/***/ "../../../../../src/app/componentes/pptijera/pptijera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PPTijeraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__ = __webpack_require__("../../../../../src/app/clases/juego-piedra-papel-tijera.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PPTijeraComponent = (function () {
    function PPTijeraComponent(miServicio) {
        this.miServicio = miServicio;
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.juegoPPT = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__["a" /* PiedraPapelTijera */]("Piedra, Papel o Tijera", this.miServicio.TraerUsuario(), true);
        this.ocultarOponente = true;
    }
    PPTijeraComponent.prototype.Piedra = function () {
        this.juegoPPT = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__["a" /* PiedraPapelTijera */]("Piedra, Papel o Tijera", this.miServicio.TraerUsuario(), true);
        this.ocultarOponente = false;
        this.juegoPPT.Piedra();
        if (this.juegoPPT.resultado == "Gano")
            this.MostarMensaje("Gano");
        if (this.juegoPPT.resultado == "Empato")
            this.MostarMensaje("Empato");
        if (this.juegoPPT.resultado == "Perdio")
            this.MostarMensaje("Perdio");
        this.ocultarOponente = false;
        //this.juegoPPT.jugador = this.miServicio.retornarUsuario();
        this.enviarJuego.emit(this.juegoPPT);
    };
    PPTijeraComponent.prototype.Papel = function () {
        this.juegoPPT = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__["a" /* PiedraPapelTijera */]("Piedra, Papel o Tijera", this.miServicio.TraerUsuario(), true);
        this.ocultarOponente = false;
        this.juegoPPT.Papel();
        if (this.juegoPPT.resultado == "Gano")
            this.MostarMensaje("Gano");
        if (this.juegoPPT.resultado == "Empato")
            this.MostarMensaje("Empato");
        if (this.juegoPPT.resultado == "Perdio")
            this.MostarMensaje("Perdio");
        //this.juegoPPT.jugador = this.miServicio.retornarUsuario();
        this.enviarJuego.emit(this.juegoPPT);
    };
    PPTijeraComponent.prototype.Tijera = function () {
        this.juegoPPT = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__["a" /* PiedraPapelTijera */]("Piedra, Papel o Tijera", this.miServicio.TraerUsuario(), true);
        this.ocultarOponente = false;
        this.juegoPPT.Tijera();
        if (this.juegoPPT.resultado == "Gano")
            this.MostarMensaje("Gano");
        if (this.juegoPPT.resultado == "Empato")
            this.MostarMensaje("Empato");
        if (this.juegoPPT.resultado == "Perdio")
            this.MostarMensaje("Perdio");
        // this.juegoPPT.jugador = this.miServicio.retornarUsuario();
        this.enviarJuego.emit(this.juegoPPT);
    };
    PPTijeraComponent.prototype.MostarMensaje = function (mensaje) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (this.juegoPPT.resultado == "Gano")
            x.className = "show Ganador";
        if (this.juegoPPT.resultado == "Empato")
            x.className = "show Empate";
        if (this.juegoPPT.resultado == "Perdio")
            x.className = "show Perdedor";
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarOponente = true;
        }, 3000);
    };
    PPTijeraComponent.prototype.ngOnInit = function () {
    };
    return PPTijeraComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], PPTijeraComponent.prototype, "enviarJuego", void 0);
PPTijeraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-pptijera',
        template: __webpack_require__("../../../../../src/app/componentes/pptijera/pptijera.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/pptijera/pptijera.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _b || Object])
], PPTijeraComponent);

var _a, _b;
/*import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-pptijera',
templateUrl: './pptijera.component.html',
styleUrls: ['./pptijera.component.css']
})
export class PptijeraComponent implements OnInit {

constructor() { }

ngOnInit() {
}

}
*/ 
//# sourceMappingURL=pptijera.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imagenDeMenu{\nwidth: 80px;\nheight: 70px;\n}\n\n.hero-text {\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: #100000;\n    }\n    .panel\n{\n    height: 600px;\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/imagenes/background.gif")) + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n}\n/*===============================================*/\n.fondo{\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/imagenes/comet-home.gif")) + "); \n    height: 600px;\n    background-color: black;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n    }\n\n    .container .btn {\n        position: absolute;\n        top: 20%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n        background-color: grey;\n        color: black;\n        font-size: 16px;\n        padding: 16px 30px;\n        border: none;\n        cursor: pointer;\n        border-radius: 5px;\n        text-align: center;\n    }\n    \n    .container .btn:hover {\n        background-color: black;\n        color: grey;\n    }\n    .container .btn2:hover {\n        background-color: black;\n        color: grey;\n    }\n\n\n\n    /*===============================================*/\nform {\n    \n    width: 100%;\n    margin: 0; padding: 0;\n}\n.centro{\n  margin-right: auto;\n  margin-left: auto;\n  \n  text-align: center;\n  -ms-flex-align: center;\n      align-items: center;\n  \n \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<html>\n  <body background=\"../../../assets/imagenes/listadoFondoGame.jpg\">\n  -->\n  \n<!--<app-cabecera>  </app-cabecera>-->\n\n <app-menu>  </app-menu>\n<html>\n  <body  class=\"fondo\" >\n    \n<form >\n  \n<div class=\"centro\" style=\"font-family: 'Press Start 2P',cursive; font-size: 10px; \">\n    <div class=\"container\">\n        <h2> <button class=\"btn\" routerLink=\"/Juegos\">Jugar</button>   </h2>\n      \n        \n          <h4> <button class=\"btn2\" routerLink=\"/Listado\">Listado de Resultados</button></h4>\n        </div>\n  <!--  <h2><a routerLink=\"/Juegos\">Jugar</a></h2>\n          \n           \n                   \n              \n                    <h2>  <a routerLink=\"/Listado\">Listado de Resultados</a></h2>\n           \n  -->\n       \n        \n     \n</div>\n<!--<div class=\"centro\">\n  <img src=\"../../../assets/imagenes/comet-home.gif\" alt=\"Image\" style=\"width:750px \">\n  ../../TP_LAV4_2017/assets/imagenes/saladejuegos.png\n  </div>-->\n</form>  \n\n</body>\n</html>\n<!--\n<html>\n  <body style=\"background-color:black\">\n      <div class=\"panel panel-default\">\n<div class=\"container\" >\n \n    <ul class=\"list-group\">\n        <li class=\"list-group-item list-group-item-danger\">\n           \n                <div class=\"media-body\">\n                    <div class=\"hero-text\">\n                        <h4 >Menú Principal</h4>\n                    </div>\n                 </div>\n               \n             \n          </li>\n        <li class=\"list-group-item list-group-item-success\">\n          <a routerLink=\"/Juegos\">\n            <div class=\"media\">\n              <div class=\"media-left\">\n                    <img src=\"./assets/imagenes/saladejuegos.png\" class=\"media-object imagenDeMenu\" >\n              </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">Juegos</h4>\n                <p>El método lúdico es un conjunto de estrategias diseñadas para crear un ambiente de armonía en los estudiantes que están inmersos en el proceso de aprendizaje. Este método busca que los alumnos se apropien de los temas impartidos por los docentes utilizando el juego.</p>\n              </div>\n             \n            </div> \n          </a>\n        </li>\n        <li class=\"list-group-item list-group-item-info\">\n            <a routerLink=\"/Listado\">\n              <div class=\"media\">\n                  <div class=\"media-left\">\n                      <img src=\"./assets/imagenes/listado.jpg\" class=\"media-object imagenDeMenu\" >\n                    </div>\n                <div class=\"media-body\">\n                  <h4 class=\"media-heading\">Listados de resultados</h4>\n                  <p>Los listados de los resultados con ordenamiento y busqueda</p>\n                </div>\n                \n              </div> \n            </a>\n          </li>\n        <li class=\"list-group-item list-group-item-warning\">\n          <a routerLink=\"/Juegos\">\n            <div class=\"media\">\n                <div class=\"media-left\">\n                    <img src=\"./assets/imagenes/Configuracion.png\" class=\"media-object imagenDeMenu\" >\n                  </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">Configuraci&oacute;n</h4>\n                <p>Ajustes de la aplicacion y los métodos de autentificación</p>\n              </div>\n             \n            </div> \n          </a>\n        </li>\n        <li class=\"list-group-item list-group-item-warning\">\n          <a routerLink=\"/Jugadores\">\n            <div class=\"media\">\n                <div class=\"media-left\">\n                    <img src=\"./assets/imagenes/jugadores.png\" class=\"media-object imagenDeMenu\" >\n                  </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">Jugadores</h4>\n                <p>Listado de jugadores</p>\n              </div>\n             \n            </div> \n          </a>\n        </li>\n       \n        \n      </ul>\n    </div>\n</div>\n</body>\n</html>\n-->"

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrincipalComponent = (function () {
    function PrincipalComponent() {
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    return PrincipalComponent;
}());
PrincipalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-principal',
        template: __webpack_require__("../../../../../src/app/componentes/principal/principal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/principal/principal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PrincipalComponent);

//# sourceMappingURL=principal.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imagenDeQuienSoy{\n    width: 100%;\n   \n    }\nbody {\n    font: 20px Montserrat, sans-serif;\n    line-height: 1.8;\n    color: #f5f6f7;\n}\np {font-size: 16px;}\n.margin {margin-bottom: 45px;}\n.bg-1 { \n    background-color: #1abc9c; /* Green */\n    color: #ffffff;\n}\n.bg-2 { \n    background-color: #474e5d; /* Dark Blue */\n    color: #ffffff;\n}\n.bg-3 { \n    background-color: #ffffff; /* White */\n    color: #555555;\n}\n.bg-4 { \n    background-color: #2f2f2f; /* Black Gray */\n    color: #fff;\n}\n.container-fluid {\n    padding-top: 70px;\n    padding-bottom: 70px;\n}\n.navbar {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    border: 0;\n    border-radius: 0;\n    margin-bottom: 0;\n    font-size: 12px;\n    letter-spacing: 5px;\n}\n.navbar-nav  li a:hover {\n    color: #1abc9c !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.html":
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-default\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>                        \n        </button>\n        <a class=\"navbar-brand\" href=\"./\">Sala De Juegos</a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"./QuienSoy#quien\">Quien</a></li>\n          <li><a href=\"/TP_LAV4_2017/QuienSoy#que\">Ques es</a></li>\n          <li><a href=\"./QuienSoy#donde\">Donde</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  \n  <!-- First Container -->\n  <div id =\"quiwn\"class=\"container-fluid bg-1 text-center\">\n    <h3 class=\"margin\">Quién Soy? </h3>\n    <h3 class=\"margin\">       Alan Ruiz </h3>\n    <img src=\"../../../assets/imagenes/inicio.jpg\" class=\"img-responsive img-circle margin\" style=\"display:inline\" alt=\"Bird\" width=\"350\" height=\"350\">\n    <h3>Soy Un alumno de la UTN FRA</h3>\n  </div>\n  \n  <!-- Second Container -->\n  <div id =\"que\" class=\"container-fluid bg-2 text-center\">\n    <h3 class=\"margin\">Esto es un trabajo práctico</h3>\n    <a class=\"btn btn-default btn-lg\">\n    <span class=\"glyphicon glyphicon-file\"><p>Este Juego se trata de carrera de autos donde se debe esquivar los obstaculos para sumar puntos y llegar a la meta con el mayor puntaje </p></span>\n  </a>\n    <p>Cada universidad, cada facultad, cada carrera y obviamente cada materia en particular tiene estrategias didácticas y formas de evaluación diferentes. A pesar de que en muchos casos las universidades intentan estandarizar la forma de dictar clase para generar un orden en las planificaciones cuatrimestre a cuatrimestre, las formas de evaluación son elementales tanto para las instituciones y profesores como para los alumnos. A través de la evaluación formativa el educador busca información en el alumno para lograr comprender cómo se está\n      produciendo el proceso de aprendizaje y poder reajustar los objetivos pedagógicos. Y para el alumno es una muestra del progreso que está logrando y si puede aplicar, materializar y darle visibilidad a la comprensión del tema. Según Black y William (1998), la evaluación formativa, ayuda a que los estudiantes sean independientes a la hora del aprendizaje, es decir, se presenta como receptor, autorregulador y centro de esa misma evaluación. </p>\n    <a href=\"#\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-file\"></span> Descargar PDF\n    </a>\n  </div>\n  \n  <!-- Third Container (Grid) -->\n  <div id =\"donde\" class=\"container-fluid bg-3 text-center\">    \n    <h3 class=\"margin\">Dónde Funciona?</h3><br>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <p>Con las tecnologias WEB que permiten desarrollar aplicaciones multiplataforma</p>\n        <img src=\"./assets/imagenes/quiensoy1.png\" class=\"img-responsive margin imagenDeQuienSoy\"  alt=\"Image\">\n      </div>\n      <div class=\"col-sm-4\"> \n        <p>Principalmente orientada a la experiencia del usuario, garantizando que su funcionamieto sea fluido y pensado en el comportamiento del usuario y en la funcionalidad.</p>\n        <img src=\"./assets/imagenes/quiensoy2.jpg\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\n      </div>\n      <div class=\"col-sm-4\"> \n        <p>Para los sistemas operativos lideres en el mercado del consumo masivo</p>\n        <img src=\"./assets/imagenes/quiensoy3.png\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\n      </div>\n    </div>\n  </div>\n  \n  <!-- Footer -->\n  <footer class=\"container-fluid bg-4 text-center\">\n    <p>Modificado por <a href=\"https://www.octavio.com.ar\">www.octavio.com.ar</a></p> \n  </footer>"

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuienSoyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuienSoyComponent = (function () {
    function QuienSoyComponent() {
    }
    QuienSoyComponent.prototype.ngOnInit = function () {
    };
    return QuienSoyComponent;
}());
QuienSoyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-quien-soy',
        template: __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.css")]
    }),
    __metadata("design:paramtypes", [])
], QuienSoyComponent);

//# sourceMappingURL=quien-soy.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n\n/* Set a style for all buttons */\nbutton {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\n/* Extra styles for the cancel button */\n.cancelbtn {\n    padding: 14px 20px;\n    background-color: #f44336;\n}\n\n/* Float cancel and signup buttons and add an equal width */\n.cancelbtn,.signupbtn {float:left;width:50%}\n\n/* Add padding to container elements */\n.container {\n    padding: 16px;\n}\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    padding-top: 60px;\n}\n\n/* Modal Content/Box */\n.modal-content {\n    background-color: #fefefe;\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n    border: 1px solid #888;\n    width: 98%; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button (x) */\n.close {\n    position: absolute;\n    right: 35px;\n    top: 15px;\n    color: #000;\n    font-size: 40px;\n    font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n    color: red;\n    cursor: pointer;\n}\n\n/* Clear floats */\n.clearfix::after {\n    content: \"\";\n    clear: both;\n    display: table;\n}\n\n/* Change styles for cancel button and signup button on extra small screens */\n@media screen and (max-width: 300px) {\n    .cancelbtn, .signupbtn {\n       width: 100%;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"jumbotron\">\n    <h2 id=\"terminos\">Terminos y condiciones</h2>\n    <p>El Gobierno de la República Argentina (en adelante el “Gobierno Nacional”) no es responsable por los daños y perjuicios que puedan surgir, incluyendo, sin límite, daños, pérdidas o gastos directos, indirectos, que surjan en relación con el uso de los Activos Digitales o la imposibilidad de uso, en relación con cualquier falla en el vencimiento, error, omisión, interrupción, defecto, demora en la operación o transmisión, virus de computadora o falla del sistema de línea, aún en el caso de que el Gobierno Nacional o sus representantes fueran informados sobre la posibilidad de dichos daños, pérdidas o gastos.</p>\n    <p>El Gobierno Nacional no controla ni garantiza la ausencia de virus ni de otros elementos en los contenidos que puedan producir alteraciones en su sistema informático (software y hardware) o en los documentos electrónicos y ficheros almacenados en su sistema informático.</p>\n    <p>El Gobierno Nacional no puede garantizar que la transmisión de información por parte de los Usuarios sea completamente segura. El Usuario asume este riesgo.</p>\n   \n  </div>\n  <strong><p>No leer lo anterior, es solo un ejemplo sacado de https://www.argentina.gob.ar/terminos-y-condiciones </p></strong>\n  <button onclick=\"document.getElementById('id01').style.display='block'\" style=\"width:auto;\">Acepto</button>\n  <button  class=\"cancelbtn\"  routerLink=\"/Principal\" style=\"width:auto;\">No acepto</button>\n  <div id=\"id01\" class=\"modal\">\n    <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\" title=\"Close Modal\">×</span>\n    <form class=\"modal-content animate\" >\n      <div class=\"container\">\n        <label><b>Email</b></label>\n        <input type=\"text\" placeholder=\"Ingresa tu correo\" name=\"email\" required>\n  \n        <label><b>Clave</b></label>\n        <input type=\"password\" placeholder=\"Aca la clave\" name=\"psw\" required>\n  \n        <label><b>Repita la clave</b></label>\n        <input type=\"password\" placeholder=\"Aca repeti la misa clave  de arriba\" name=\"psw-repeat\" required>\n        <input type=\"checkbox\" checked=\"checked\">Recordar mis datos\n        <p>creando la cuenta aceptando los<a  onclick=\"document.getElementById('id01').style.display='none'\"  >Terminos y condiciones</a>.</p>\n  \n        <div class=\"clearfix\">\n          <button type=\"button\" onclick=\"document.getElementById('id01').style.display='none'\" class=\"cancelbtn\">Me arrepenti</button>\n          <button type=\"submit\" class=\"signupbtn\">Registrarme</button>\n        </div>\n      </div>\n    </form>\n  </div>\n  \n  <script>\n  // Get the modal\n  var modal = document.getElementById('id01');\n  \n  // When the user clicks anywhere outside of the modal, close it\n  window.onclick = function(event) {\n      if (event.target == modal) {\n          modal.style.display = \"none\";\n      }\n  }\n  </script>\n  \n  </body>"

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
var RegistroComponent = (function () {
    /* constructor( private miConstructor:FormBuilder) { }
     email=new FormControl('',[Validators.email]);
     formRegistro:FormGroup=this.miConstructor.group({
       usuario:this.email
     });*/
    function RegistroComponent() {
    }
    RegistroComponent.prototype.ngOnInit = function () {
    };
    return RegistroComponent;
}());
RegistroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-registro',
        template: __webpack_require__("../../../../../src/app/componentes/registro/registro.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/registro/registro.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegistroComponent);

//# sourceMappingURL=registro.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/ta-te-ti/block.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Block; });
var Block = (function () {
    function Block() {
        this.free = true;
        this.value = ""; // cross | tick
        this.symbol = ""; // cross | tick
    }
    Block.prototype.setValue = function (value) {
        this.value = value;
        if (this.value == "tick") {
            this.symbol = "done";
        }
        else {
            this.symbol = "close";
        }
    };
    return Block;
}());

//# sourceMappingURL=block.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/ta-te-ti/game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player__ = __webpack_require__("../../../../../src/app/componentes/ta-te-ti/player.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block__ = __webpack_require__("../../../../../src/app/componentes/ta-te-ti/block.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameService = (function () {
    function GameService() {
        this.players = [];
        this.turn = 0; // By Default First Player turn is First
        this.draw = 0;
        this.blocks = [];
        this.freeBlocksRemaining = 9;
        this.initBlocks();
        this.initPlayers();
    }
    GameService.prototype.initBlocks = function () {
        this.blocks = [];
        for (var i = 1; i <= 9; ++i) {
            var block = new __WEBPACK_IMPORTED_MODULE_2__block__["a" /* Block */]();
            block.free = true;
            block.value = "";
            block.symbol = "";
            this.blocks.push(block);
        }
    };
    GameService.prototype.initPlayers = function () {
        // Player1
        var player1 = new __WEBPACK_IMPORTED_MODULE_1__player__["a" /* Player */]();
        player1.bot = false;
        // Bot
        var player2 = new __WEBPACK_IMPORTED_MODULE_1__player__["a" /* Player */]();
        this.players.push(player1);
        this.players.push(player2);
    };
    GameService.prototype.changeTurn = function () {
        if (this.turn == 1) {
            this.turn = 0;
        }
        else {
            this.turn = 1;
        }
        return this.turn;
    };
    GameService.prototype.blockSetComplete = function () {
        var block1 = this.blocks[0];
        var block2 = this.blocks[1];
        var block3 = this.blocks[2];
        var block4 = this.blocks[3];
        var block5 = this.blocks[4];
        var block6 = this.blocks[5];
        var block7 = this.blocks[6];
        var block8 = this.blocks[7];
        var block9 = this.blocks[8];
        if ((block1.free == false && block2.free == false && block3.free == false && (block1.value == block2.value) && (block1.value == block3.value)) ||
            (block1.free == false && block4.free == false && block7.free == false && (block1.value == block4.value) && (block1.value == block7.value)) ||
            (block1.free == false && block5.free == false && block9.free == false && (block1.value == block5.value) && (block1.value == block9.value)) ||
            (block2.free == false && block5.free == false && block8.free == false && (block2.value == block5.value) && (block2.value == block8.value)) ||
            (block3.free == false && block6.free == false && block9.free == false && (block3.value == block6.value) && (block3.value == block9.value)) ||
            (block3.free == false && block5.free == false && block7.free == false && (block3.value == block5.value) && (block3.value == block7.value)) ||
            (block4.free == false && block5.free == false && block6.free == false && (block4.value == block5.value) && (block4.value == block6.value)) ||
            (block7.free == false && block8.free == false && block9.free == false && (block7.value == block8.value) && (block7.value == block9.value))) {
            return true;
        }
        return false;
    };
    GameService.prototype.figureBotMove = function () {
        // Priortize by checking block that is completing
        var bot_move = this.GetCompletingSet();
        if (bot_move > 0) {
            return bot_move;
        }
        // 2nd Priority Block enemy from completing Set
        var bot_move = this.blockEnemyAttemptCompleteSet();
        if (bot_move > 0) {
            return bot_move;
        }
        return Math.floor(Math.random() * 8) + 1;
    };
    /*
        Check if any Block Set is completing
    */
    GameService.prototype.GetCompletingSet = function () {
        var block1 = this.blocks[0];
        var block2 = this.blocks[1];
        var block3 = this.blocks[2];
        var block4 = this.blocks[3];
        var block5 = this.blocks[4];
        var block6 = this.blocks[5];
        var block7 = this.blocks[6];
        var block8 = this.blocks[7];
        var block9 = this.blocks[8];
        // Block#1
        if (block1.free == false && block2.free == true && block3.free == false && (block1.value == 'cross' && block1.value == block3.value)) {
            return 2;
        }
        else if (block1.free == false && block2.free == false && block3.free == true && (block1.value == 'cross' && block1.value == block2.value)) {
            return 3;
        }
        else if (block1.free == false && block4.free == true && block7.free == false && (block1.value == 'cross' && block1.value == block7.value)) {
            return 4;
        }
        else if (block1.free == false && block4.free == false && block7.free == true && (block1.value == 'cross' && block1.value == block4.value)) {
            return 7;
        }
        else if (block1.free == false && block5.free == true && block9.free == false && (block1.value == 'cross' && block1.value == block9.value)) {
            return 5;
        }
        else if (block1.free == false && block5.free == false && block9.free == true && (block1.value == 'cross' && block1.value == block5.value)) {
            return 9;
            // Block#2
        }
        else if (block2.free == false && block3.free == false && block1.free == true && (block2.value == 'cross' && block2.value == block3.value)) {
            return 1;
        }
        else if (block2.free == false && block8.free == false && block5.free == true && (block2.value == 'cross' && block2.value == block8.value)) {
            return 5;
        }
        else if (block2.free == false && block8.free == true && block5.free == false && (block2.value == 'cross' && block2.value == block5.value)) {
            return 8;
            // Block#3
        }
        else if (block3.free == false && block6.free == true && block9.free == false && (block3.value == 'cross' && block3.value == block9.value)) {
            return 6;
        }
        else if (block3.free == false && block9.free == true && block6.free == false && (block3.value == 'cross' && block3.value == block6.value)) {
            return 9;
        }
        else if (block3.free == false && block5.free == true && block7.free == false && (block3.value == 'cross' && block3.value == block7.value)) {
            return 5;
        }
        else if (block3.free == false && block7.free == true && block5.free == false && (block3.value == 'cross' && block3.value == block5.value)) {
            return 7;
            // Block#4
        }
        else if (block4.free == false && block5.free == true && block6.free == false && (block4.value == 'cross' && block4.value == block6.value)) {
            return 5;
        }
        else if (block4.free == false && block6.free == true && block5.free == false && (block4.value == 'cross' && block4.value == block5.value)) {
            return 6;
            // Block#5
        }
        else if (block5.free == false && block4.free == true && block6.free == false && (block5.value == 'cross' && block5.value == block6.value)) {
            return 4;
            // Block#7
        }
        else if (block7.free == false && block8.free == true && block9.free == false && (block7.value == 'cross' && block7.value == block9.value)) {
            return 8;
        }
        else if (block7.free == false && block9.free == true && block8.free == false && (block7.value == 'cross' && block7.value == block8.value)) {
            return 9;
            // Block#8
        }
        else if (block8.free == false && block7.free == true && block9.free == false && (block8.value == 'cross' && block8.value == block9.value)) {
            return 7;
        }
        else {
            return 0;
        }
    };
    /*
        Block Enemy Attempt to Complete Set
    */
    GameService.prototype.blockEnemyAttemptCompleteSet = function () {
        var block1 = this.blocks[0];
        var block2 = this.blocks[1];
        var block3 = this.blocks[2];
        var block4 = this.blocks[3];
        var block5 = this.blocks[4];
        var block6 = this.blocks[5];
        var block7 = this.blocks[6];
        var block8 = this.blocks[7];
        var block9 = this.blocks[8];
        // Block#1
        if (block1.free == false && block2.free == true && block3.free == false && (block1.value == block3.value)) {
            return 2;
        }
        else if (block1.free == false && block2.free == false && block3.free == true && (block1.value == block2.value)) {
            return 3;
        }
        else if (block1.free == false && block4.free == true && block7.free == false && (block1.value == block7.value)) {
            return 4;
        }
        else if (block1.free == false && block4.free == false && block7.free == true && (block1.value == block4.value)) {
            return 7;
        }
        else if (block1.free == false && block5.free == true && block9.free == false && (block1.value == block9.value)) {
            return 5;
        }
        else if (block1.free == false && block5.free == false && block9.free == true && (block1.value == block5.value)) {
            return 9;
            // Block#2
        }
        else if (block2.free == false && block3.free == false && block1.free == true && (block2.value == block3.value)) {
            return 1;
        }
        else if (block2.free == false && block8.free == false && block5.free == true && (block2.value == block8.value)) {
            return 5;
        }
        else if (block2.free == false && block8.free == true && block5.free == false && (block2.value == block5.value)) {
            return 8;
            // Block#3
        }
        else if (block3.free == false && block6.free == true && block9.free == false && (block3.value == block9.value)) {
            return 6;
        }
        else if (block3.free == false && block9.free == true && block6.free == false && (block3.value == block6.value)) {
            return 9;
        }
        else if (block3.free == false && block5.free == true && block7.free == false && (block3.value == block7.value)) {
            return 5;
        }
        else if (block3.free == false && block7.free == true && block5.free == false && (block3.value == block5.value)) {
            return 7;
            // Block#4
        }
        else if (block4.free == false && block5.free == true && block6.free == false && (block4.value == block6.value)) {
            return 5;
        }
        else if (block4.free == false && block6.free == true && block5.free == false && (block4.value == block5.value)) {
            return 6;
            // Block#5
        }
        else if (block5.free == false && block4.free == true && block6.free == false && (block5.value == block6.value)) {
            return 4;
            // Block#7
        }
        else if (block7.free == false && block8.free == true && block9.free == false && (block7.value == block9.value)) {
            return 8;
        }
        else if (block7.free == false && block9.free == true && block8.free == false && (block7.value == block8.value)) {
            return 9;
            // Block#8
        }
        else if (block8.free == false && block7.free == true && block9.free == false && (block8.value == block9.value)) {
            return 7;
        }
        else {
            return 0;
        }
    };
    return GameService;
}());
GameService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GameService);

//# sourceMappingURL=game.service.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/ta-te-ti/player.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
var Player = (function () {
    function Player() {
        this.bot = true;
        this.score = 0;
    }
    Player.prototype.updateScore = function (total) {
        this.score += total;
        return this.score;
    };
    return Player;
}());

//# sourceMappingURL=player.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/ta-te-ti/ta-te-ti.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".game-area {\r\n    margin-top: 25px;\r\n\twidth: 450px;\r\n}\r\n.tick-tack-grid {\r\n    cursor: pointer;\r\n    background-color: white;\r\n}\r\n\r\n        \r\n.mat-grid-tile:nth-child(2), :nth-child(5), :nth-child(8){\r\n    border-left: 1px solid #ccc;\r\n    border-right: 1px solid #ccc;\r\n}\r\n\r\n.mat-grid-tile:nth-child(4), :nth-child(5), :nth-child(6) {\r\n    border-top: 1px solid #ccc;\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n\r\ni.material-icons.tick {\r\n    color: green;\r\n}\r\n\r\ni.material-icons.cross {\r\n    color: red;\r\n}\r\n\t\t\r\n\t\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/ta-te-ti/ta-te-ti.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n  \r\n    <div class=\"col-md-8\">\r\n      <div class=\"game-area\">\r\n        <mat-grid-list class=\"tick-tack-grid\" cols=\"3\">\r\n          <mat-grid-tile *ngFor=\"let block of gs.blocks; let i = index; trackBy: trackByFn\" (click)=\"playerClick(i)\"><i [class]=\"block.symbol == 'done' ? 'material-icons tick' : 'material-icons cross'\">{{ block.symbol }}</i></mat-grid-tile>\r\n        </mat-grid-list>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"col-md-4\">\r\n      <h2>Resultados:</h2>\r\n      <table class=\"table table-bordered\">\r\n        <tbody>\r\n          <tr>\r\n            <td>Ganaste:</td>\r\n            <td>{{ gs.players[0].score }}</td>\r\n          </tr>\r\n  \r\n          <tr>\r\n            <td>Computadora:</td>\r\n            <td>{{ gs.players[1].score }}</td>\r\n          </tr>\r\n  \r\n          <tr>\r\n            <td>Empate:</td>\r\n            <td>{{ gs.draw }}</td>\r\n          </tr>\r\n  \r\n        </tbody>\r\n      </table>\r\n      <a class=\"pull-right text-right\" class=\"btn btn-danger\" (click)=\"resetGame($event)\" href=\"#\">Resetear juego</a>\r\n      <a class=\"pull-right text-right\" class=\"btn btn-danger\" (click)=\"newGame($event)\" href=\"#\">Nuevo juego</a>\r\n    </div>\r\n  \r\n  </div>\r\n    \r\n  \r\n  </div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/componentes/ta-te-ti/ta-te-ti.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaTeTiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_service__ = __webpack_require__("../../../../../src/app/componentes/ta-te-ti/game.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaTeTiComponent = (function () {
    function TaTeTiComponent(gs, snackBar, router) {
        this.gs = gs;
        this.snackBar = snackBar;
        this.router = router;
        this.lock = false;
    }
    TaTeTiComponent.prototype.newGame = function () {
        this.gs.freeBlocksRemaining = 9;
        this.gs.initBlocks();
        this.lock = false;
        this.gs.turn = 0;
    };
    TaTeTiComponent.prototype.resetGame = function (event) {
        event.preventDefault();
        location.reload();
    };
    TaTeTiComponent.prototype.playerClick = function (i) {
        if (this.gs.blocks[i].free == false || this.lock == true) {
            return;
        }
        this.gs.freeBlocksRemaining -= 1; // Reduce no. of free blocks after each selection
        if (this.gs.freeBlocksRemaining <= 0) {
            this.gs.draw += 1;
            this.lock = true;
            this.snackBar.open("Juego:", "Empate", {
                duration: 4000,
            });
            this.newGame();
            return;
        }
        this.gs.blocks[i].free = false;
        if (this.gs.turn == 0) {
            this.gs.blocks[i].setValue("tick");
        }
        else {
            this.gs.blocks[i].setValue("cross");
        }
        var complete = this.gs.blockSetComplete();
        if (complete == false) {
            this.changeTurn();
            return;
        }
        else {
            this.lock = true;
            this.gs.players[this.gs.turn].score += 1;
            this.snackBar.open("Ganador:", "Jugador " + (this.gs.turn + 1), {
                duration: 4000,
            });
            this.newGame();
            return;
        }
    };
    TaTeTiComponent.prototype.botTurn = function () {
        if (this.gs.freeBlocksRemaining <= 0) {
            return;
        }
        var bot_selected = this.gs.figureBotMove() - 1;
        if (this.gs.blocks[bot_selected].free == true) {
            this.playerClick(bot_selected);
        }
        else {
            this.botTurn();
            return;
        }
    };
    TaTeTiComponent.prototype.changeTurn = function () {
        var player = this.gs.changeTurn();
        if (player == 1) {
            this.botTurn();
        }
    };
    return TaTeTiComponent;
}());
TaTeTiComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ta-te-ti',
        template: __webpack_require__("../../../../../src/app/componentes/ta-te-ti/ta-te-ti.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/ta-te-ti/ta-te-ti.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__game_service__["a" /* GameService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__game_service__["a" /* GameService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], TaTeTiComponent);

var _a, _b, _c;
//# sourceMappingURL=ta-te-ti.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/sexo.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SexoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SexoPipe = (function () {
    function SexoPipe() {
    }
    SexoPipe.prototype.transform = function (value, args) {
        if (value = 'M') {
            return "machito";
        }
        else {
            return "señorita";
        }
    };
    return SexoPipe;
}());
SexoPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'sexo'
    })
], SexoPipe);

//# sourceMappingURL=sexo.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/ruteando/ruteando.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuteandoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__componentes_login_login_component__ = __webpack_require__("../../../../../src/app/componentes/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentes_error_error_component__ = __webpack_require__("../../../../../src/app/componentes/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_principal_principal_component__ = __webpack_require__("../../../../../src/app/componentes/principal/principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_listado_listado_component__ = __webpack_require__("../../../../../src/app/componentes/listado/listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_registro_registro_component__ = __webpack_require__("../../../../../src/app/componentes/registro/registro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_menu_card_menu_card_component__ = __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentes_quien_soy_quien_soy_component__ = __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_listado_de_paises_listado_de_paises_component__ = __webpack_require__("../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__componentes_mapa_de_google_mapa_de_google_component__ = __webpack_require__("../../../../../src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_jugadores_listado_jugadores_listado_component__ = __webpack_require__("../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_adivina_el_numero_adivina_el_numero_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_adivina_mas_listado_adivina_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_anagrama_anagrama_component__ = __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_pptijera_mas_listado_pptijera_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/pptijera-mas-listado/pptijera-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_agilidad_aritmetica_agilidad_aritmetica_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__componentes_agilidad_mas_listado_agilidad_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__componentes_anagrama_mas_listado_anagrama_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/anagrama-mas-listado/anagrama-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__componentes_ta_te_ti_ta_te_ti_component__ = __webpack_require__("../../../../../src/app/componentes/ta-te-ti/ta-te-ti.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// importo del module principal












//import { AnagramaMasListadoComponent } from '../componentes/anagrama-mas-listado/anagrama-mas-listado.component';








// declaro donde quiero que se dirija
var MiRuteo = [
    { path: 'Jugadores', component: __WEBPACK_IMPORTED_MODULE_12__componentes_jugadores_listado_jugadores_listado_component__["a" /* JugadoresListadoComponent */] },
    //{path: '' , component: PrincipalComponent},
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__componentes_login_login_component__["a" /* LoginComponent */] },
    { path: 'Mapa', component: __WEBPACK_IMPORTED_MODULE_11__componentes_mapa_de_google_mapa_de_google_component__["a" /* MapaDeGoogleComponent */] },
    { path: 'QuienSoy', component: __WEBPACK_IMPORTED_MODULE_9__componentes_quien_soy_quien_soy_component__["a" /* QuienSoyComponent */] },
    { path: 'Registro', component: __WEBPACK_IMPORTED_MODULE_7__componentes_registro_registro_component__["a" /* RegistroComponent */] },
    { path: 'Principal', component: __WEBPACK_IMPORTED_MODULE_4__componentes_principal_principal_component__["a" /* PrincipalComponent */] },
    { path: 'Listado', component: __WEBPACK_IMPORTED_MODULE_5__componentes_listado_listado_component__["a" /* ListadoComponent */] },
    { path: 'Paises', component: __WEBPACK_IMPORTED_MODULE_10__componentes_listado_de_paises_listado_de_paises_component__["a" /* ListadoDePaisesComponent */] },
    { path: 'Juegos',
        component: __WEBPACK_IMPORTED_MODULE_6__componentes_juegos_juegos_component__["a" /* JuegosComponent */],
        children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_8__componentes_menu_card_menu_card_component__["a" /* MenuCardComponent */] },
            { path: 'Adivina', component: __WEBPACK_IMPORTED_MODULE_13__componentes_adivina_el_numero_adivina_el_numero_component__["a" /* AdivinaElNumeroComponent */] },
            { path: 'AdivinaMasListado', component: __WEBPACK_IMPORTED_MODULE_14__componentes_adivina_mas_listado_adivina_mas_listado_component__["a" /* AdivinaMasListadoComponent */] },
            { path: 'Agilidad', component: __WEBPACK_IMPORTED_MODULE_17__componentes_agilidad_aritmetica_agilidad_aritmetica_component__["a" /* AgilidadAritmeticaComponent */] },
            { path: 'AgilidadaMasListado', component: __WEBPACK_IMPORTED_MODULE_18__componentes_agilidad_mas_listado_agilidad_mas_listado_component__["a" /* AgilidadMasListadoComponent */] },
            { path: 'Anagrama', component: __WEBPACK_IMPORTED_MODULE_15__componentes_anagrama_anagrama_component__["a" /* AnagramaComponent */] },
            { path: 'AnagramaMasListado', component: __WEBPACK_IMPORTED_MODULE_19__componentes_anagrama_mas_listado_anagrama_mas_listado_component__["a" /* AnagramaMasListadoComponent */] },
            { path: 'PPTijeraMasListado', component: __WEBPACK_IMPORTED_MODULE_16__componentes_pptijera_mas_listado_pptijera_mas_listado_component__["a" /* PPTijeraMasListadoComponent */] },
            { path: 'tateti', component: __WEBPACK_IMPORTED_MODULE_20__componentes_ta_te_ti_ta_te_ti_component__["a" /* TaTeTiComponent */] }]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__componentes_error_error_component__["a" /* ErrorComponent */] },
    { path: 'error', component: __WEBPACK_IMPORTED_MODULE_3__componentes_error_error_component__["a" /* ErrorComponent */] }
];
var RuteandoModule = (function () {
    function RuteandoModule() {
    }
    return RuteandoModule;
}());
RuteandoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(MiRuteo)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], RuteandoModule);

//# sourceMappingURL=ruteando.module.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/archivos-jugadores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchivosJugadoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__ = __webpack_require__("../../../../../src/app/servicios/mi-http/mi-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArchivosJugadoresService = (function () {
    function ArchivosJugadoresService(miHttp) {
        this.miHttp = miHttp;
        //archivo jugadores seria mi servicio 1
        this.api = "http://localhost:8080/jugadoresarchivo/apirestjugadores/"; // esto deberia estar en el generico
    }
    ArchivosJugadoresService.prototype.traerJugadores = function (ruta) {
        return this.miHttp.httpGetO(this.api + ruta)
            .toPromise()
            .then(function (data) {
            console.log("Archivo jugadores");
            // console.log( data );
            return data;
        }, function (err) {
            console.log(err);
        });
    };
    return ArchivosJugadoresService;
}());
ArchivosJugadoresService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__["a" /* MiHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__["a" /* MiHttpService */]) === "function" && _a || Object])
], ArchivosJugadoresService);

var _a;
//# sourceMappingURL=archivos-jugadores.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/juego-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__ = __webpack_require__("../../../../../src/app/clases/juego-adivina.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mi_http_mi_http_service__ = __webpack_require__("../../../../../src/app/servicios/mi-http/mi-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JuegoServiceService = (function () {
    function JuegoServiceService(miHttp, route) {
        this.miHttp = miHttp;
        this.route = route;
        this.miRoute = route;
        this.peticion = this.miHttp.httpGetO("http://localhost:4200");
        this.myArrayServicio = new Array();
        //3003
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    //constructor(private miServicio : MiHttpService) { 
    // this.myArrayServicio = new Array<Juego>();
    // }
    JuegoServiceService.prototype.TraerUsuario = function () {
        return this.UsuarioLogueado;
    };
    JuegoServiceService.prototype.CargarUsuario = function (user) {
        this.UsuarioLogueado = user;
    };
    JuegoServiceService.prototype.CargarLista = function (ArrayParaPasar) {
        this.myArrayServicio.concat(ArrayParaPasar);
        console.info("En el Servicio: ", ArrayParaPasar);
    };
    JuegoServiceService.prototype.InicializarLista = function () {
        return this.myArrayServicio;
    };
    JuegoServiceService.prototype.TraerPalabas = function () {
        return this.miHttp.TraerPalabra().toPromise()
            .then(function (datos) {
            console.log("Datos:" + datos);
            return datos;
        });
    };
    JuegoServiceService.prototype.listar = function () {
        this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(function (data) {
            console.log(data);
        })
            .catch(function (err) {
            console.log(err);
        });
        //Cargar para el tateti
        /*
        public cargar(objeto) {
          return this.miHttp.httpPosttateti(this.miHttp.api + 'api/resultado/', objeto).subscribe(
            success => {
              this.peticion = success;
            }, error => {
              console.log(error);
            });
        }*/
        this.peticion
            .subscribe(function (data) {
            console.log("En listar");
            console.log(data);
        }, function (err) {
            console.info("error: ", err);
        });
        var miArray = new Array();
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 1", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Pepe", true));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 3", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 4", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 5", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 6", false));
        return miArray;
    };
    JuegoServiceService.prototype.listarPromesa = function () {
        this.peticion
            .subscribe(function (data) {
            console.log("En listarPromesa");
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        var promesa = new Promise(function (resolve, reject) {
            var miArray = new Array();
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 1", false, "promesa"));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("PepePromesa", true));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 3", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 4", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 5", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 6", false));
            resolve(miArray);
        });
        return promesa;
    };
    return JuegoServiceService;
}());
JuegoServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__mi_http_mi_http_service__["a" /* MiHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__mi_http_mi_http_service__["a" /* MiHttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], JuegoServiceService);

var _a, _b;
/*

import { Injectable } from '@angular/core';
import { Juego } from '../clases/juego';
import { MiHttpService } from './mi-http/mi-http.service';
import { Router } from '@angular/router';

@Injectable()
export class JuegoServiceService {
  miRoute: Router;
  peticion: any;
  resultados: any;

  constructor(public miHttp: MiHttpService, private route: Router) {
    this.miRoute = route;
  }

  public listar(): Array<Juego> {
    this.miHttp.httpGetP(this.miHttp.api)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
    this.peticion
      .subscribe(data => {
        console.log("En listar");
        console.log(data);
      }, err => {
        console.info("error: ", err);
      });
    let miArray: Array<Juego> = new Array<Juego>();
    return miArray;
  }

  public listarPromesa(): Promise<Array<Juego>> {
    this.peticion
      .subscribe(data => {
        console.log("En listarPromesa");
        console.log(data);
      }, err => {
        console.log(err);
      })
    let promesa: Promise<Array<Juego>> = new Promise((resolve, reject) => {
      let miArray: Array<Juego> = new Array<Juego>();
      resolve(miArray);
    });

    return promesa;
  }

  public cargar(objeto) {
    return this.miHttp.httpPostP(this.miHttp.api + 'api/resultado/', objeto).subscribe(
      success => {
        this.peticion = success;
      }, error => {
        console.log(error);
      });
  }

  public traerTodos(filtro) {
    return this.miHttp.httpGetO(this.miHttp.api + 'api/resultado/')
      .toPromise()
      .then(data => {
        this.resultados = data;
        this.resultados = this.resultados.filter(data => data.juego === filtro || filtro == "");
        return this.resultados;
      }, err => {
        console.log(err);
      });
  }
}
*/ 
//# sourceMappingURL=juego-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/jugadores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__archivos_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/archivos-jugadores.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JugadoresService = (function () {
    //peticion:any;
    function JugadoresService(miHttp) {
        // this.peticion = this.miHttp.traerJugadores();
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
        this.miHttp = miHttp;
    }
    JugadoresService.prototype.traertodos = function (ruta, filtro) {
        var _this = this;
        return this.miHttp.traerJugadores(ruta).then(function (data) {
            console.info("jugadores service", data);
            _this.filtrado = data;
            var ganador;
            if (filtro == "ganadores") {
                ganador = true;
            }
            else {
                ganador = false;
            }
            _this.filtrado = _this.filtrado.filter(function (data) { return data.gano === ganador || filtro == "todos"; });
            return _this.filtrado;
        }) //catch devuelvo
            .catch(function (errror) {
            console.log("error");
            return _this.filtrado;
        });
    };
    return JugadoresService;
}());
JugadoresService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__archivos_jugadores_service__["a" /* ArchivosJugadoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__archivos_jugadores_service__["a" /* ArchivosJugadoresService */]) === "function" && _a || Object])
], JugadoresService);

var _a;
//# sourceMappingURL=jugadores.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/mi-http/mi-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var MiHttpService = (function () {
    function MiHttpService(http) {
        this.http = http;
        this.api = "http://gametimeback.herokuapp.com/";
    }
    MiHttpService.prototype.httpGetP = function (url) {
        return this.http
            .get(url) //url podria pasarle mas paramettros
            .toPromise()
            .then(this.extractData) //extraccion de datos
            .catch(this.handleError);
    };
    MiHttpService.prototype.httpPostP = function (url, objeto) {
        return this.http
            .get(url)
            .subscribe(function (data) {
            console.log(data);
            return data;
        });
    };
    /* public httpPosttateti(url: string, objeto: any) {
       return this.http.post(url, objeto, httpOptions);
     }*/
    MiHttpService.prototype.httpGetO = function (url) {
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(err.json().error || 'Server error'); });
    };
    ///// estos son los agregados
    MiHttpService.prototype.TraerPalabra = function () {
        return this.http
            .get("../../../assets/palabras.json")
            .map(this.extraerDatos)
            .catch(this.handleError);
    };
    ///// estos son los agregados
    MiHttpService.prototype.httpGetJuagdorPromise = function (url, objeto) {
        return this.http
            .get(url)
            .toPromise()
            .then(this.extraerDatos)
            .catch(this.handleError);
    };
    ///// estos son los agregados
    MiHttpService.prototype.httpGetJuagdorPromiseO = function (url) {
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(err.json().error || 'Server error'); });
    };
    ///// estos son los agregados
    MiHttpService.prototype.extraerDatos = function (resp) {
        return resp.json() || {};
    };
    //===========================================================
    MiHttpService.prototype.extractData = function (res) {
        return res.json() || {};
    };
    MiHttpService.prototype.handleError = function (error) {
        return error;
    };
    return MiHttpService;
}());
MiHttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], MiHttpService);

var _a;
//# sourceMappingURL=mi-http.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/paises.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaisesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__ = __webpack_require__("../../../../../src/app/servicios/mi-http/mi-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaisesService = (function () {
    function PaisesService(miHttp) {
        this.miHttp = miHttp;
    }
    PaisesService.prototype.listar = function () {
        return this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(function (data) {
            console.log(data);
            return data;
        })
            .catch(function (err) {
            console.log(err);
            return null;
        });
        //return null;
    };
    return PaisesService;
}());
PaisesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__["a" /* MiHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__["a" /* MiHttpService */]) === "function" && _a || Object])
], PaisesService);

var _a;
//# sourceMappingURL=paises.service.js.map

/***/ }),

/***/ "../../../../../src/assets/imagenes/background.gif":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.d816dffcfd2d7ce2cfe3.gif";

/***/ }),

/***/ "../../../../../src/assets/imagenes/comet-home.gif":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "comet-home.ff2521c435ee390a5d3a.gif";

/***/ }),

/***/ "../../../../../src/assets/imagenes/listadoFondoGame.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "listadoFondoGame.18d34d91ad84bb2bc39a.jpg";

/***/ }),

/***/ "../../../../../src/assets/imagenes/puentearroyo.gif":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "puentearroyo.244ee5bc0799f1d3ea7b.gif";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map