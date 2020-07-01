"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *Grupo de funciones relacionadas al manejo de números
 * @class Numero
 */
class Numero {
}
/**
 * Elimina los caracteres $ y , retornando un valor numerico
 * @param str Valor a evaluar
 * @example
 * Numero.covertir('$ 10.00');
 * @returns
 * 10
 */
Numero.convertir = (str) => {
    let r = 0;
    let valor = str.replace(/\$|,/g, '');
    if (valor) {
        r = parseFloat(valor);
    }
    return r;
};
exports.default = Numero;
//# sourceMappingURL=numero.js.map