/**
 * Funciones relacionadas a Monedas
 */
export const Moneda = {
    /**
     * Funcion para formatear un string
     * @param str Valor a formatear
     * @param simbolo Simbolo a mostrar
     * @param decimales Cantidad de decimales
     * @example
     * strFormatoMoneda('10');
     * strFormatoMoneda('10','$',2)
     */
    convertirStr: (str: string, simbolo?: string, decimales?: number): string => {
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