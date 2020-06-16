"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Grupo de funciones relacionadas al manejo de Monedas
 */
class Moneda {
}
/**
* Funcion para formatear un string
* @param str Valor a formatear
* @param simbolo Simbolo a mostrar
* @param decimales Cantidad de decimales
* @example
* strFormatoMoneda('10');
* strFormatoMoneda('10','$',2)
*/
Moneda.convertirStr = (str, simbolo, decimales) => {
    const ivalor = Number(str);
    let r = '';
    if (isNaN(ivalor))
        r = 'Valor invalido';
    if (!simbolo)
        simbolo = '$';
    if (!decimales)
        decimales = 2;
    r = `${simbolo} ${ivalor.toFixed(decimales)}`;
    return r;
};
exports.default = Moneda;
//# sourceMappingURL=moneda.js.map