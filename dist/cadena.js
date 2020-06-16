"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalizacion_1 = require("./globalizacion");
/**
 * Grupo de funciones relacionadas al manejo de cadenas
 */
class Cadena {
    constructor(region) {
        this._region = region;
        this._formato = globalizacion_1.GFormatoMap.get(this._region);
    }
    /**
     * Formato documento de identificación,Este formato varia dependiendo la región seleccionada
     * @param valor cadena a formatear
     * @example
     * Cadena.di('888888888')
     * @returns
     * '88888888-8'
     */
    di(valor) {
        let r = '';
        r = this.ig(valor, this._formato.Formato.Guion.Identificacion);
        return r;
    }
    /**
     * Ingreso de Guiones, esta función inyecta guiones en las posiciones indicadas
     * @param valor cadena a formatear
     * @param arrPosicion Un array con la posición en la que quiera que se ingresen los guiones
     * @example
     * Cadena.ig('88888888', [2, 4, 6])
     * @returns
     * '88-88-88-88'
     */
    ig(valor, arrPosicion) {
        let r = '';
        if (valor && arrPosicion.length > 0) {
            for (let i = 0, m = valor.length; i < m; i++) {
                if (arrPosicion.indexOf(i) !== -1)
                    r += '-' + valor.charAt(i);
                else
                    r += valor.charAt(i);
            }
        }
        return r;
    }
}
exports.default = Cadena;
//# sourceMappingURL=cadena.js.map