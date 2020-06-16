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
        let r: string = '';
        if (isNaN(ivalor))
            r = 'Valor invalido';
        if (!simbolo)
            simbolo = '$';
        if (!decimales)
            decimales = 2;
        r = `${simbolo} ${ivalor.toFixed(decimales)}`;
        return r;
    }
}
export default Moneda;