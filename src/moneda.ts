/**
 * Grupo de funciones relacionadas al manejo de números Monedas
 * @class Moneda
 */
class Moneda {
    /**
    * Funcion para formatear un string
    * @param str Valor a formatear
    * @param simbolo Simbolo a mostrar
    * @param decimales Cantidad de decimales
    * @example
    * strFormatoMoneda('10');
    * strFormatoMoneda('10','$',2)
    */
    static convertirStr = (str: string, simbolo?: string, decimales?: number) => {
        const ivalor: number = Number(str);
        if (isNaN(ivalor))
            throw 'Valor invalido';
        if (!simbolo)
            simbolo = '$';
        if (!decimales)
            decimales = 2;
        return `${simbolo} ${ivalor.toFixed(decimales)}`;
    }
}
export default Moneda;