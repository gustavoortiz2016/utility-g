"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Numero = void 0;
/**
 * Funciones relacionadas a numero
 */
exports.Numero = {
    /**
     * Elimina los caracteres $ y , retornando un valor numerico
     * @param str Valor a evaluar
     * @example
     * Numero.covertir('$ 10.00');
     * @returns
     * 10
     */
    convertir: (str) => {
        let valor = str.replace(/\$|,/g, '');
        if (valor) {
            return parseInt(valor);
        }
        return 0;
    }
};
//# sourceMappingURL=numero.js.map