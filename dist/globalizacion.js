"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GFormatoMap = void 0;
/**
 * Enumerador que almacena las regiones soportadas por la libreria
 */
var GlobalizacionEnum;
(function (GlobalizacionEnum) {
    /**
     *Configuración de El Salvador
     */
    GlobalizacionEnum["esSV"] = "es-sv";
})(GlobalizacionEnum || (GlobalizacionEnum = {}));
/**
 * Mapeo de las configuraciones de las regiones.
 */
exports.GFormatoMap = new Map();
//Mapeo de region es SV
exports.GFormatoMap.set(GlobalizacionEnum.esSV, {
    "Moneda": "$",
    "Formato": {
        "Guion": {
            "Identificacion": [8]
        }
    }
});
exports.default = GlobalizacionEnum;
//# sourceMappingURL=globalizacion.js.map