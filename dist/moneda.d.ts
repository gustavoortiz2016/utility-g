/**
 * Grupo de funciones relacionadas al manejo de Monedas
 */
declare class Moneda {
    /**
    * Funcion para formatear un string
    * @param str Valor a formatear
    * @param simbolo Simbolo a mostrar
    * @param decimales Cantidad de decimales
    * @example
    * strFormatoMoneda('10');
    * strFormatoMoneda('10','$',2)
    */
    static convertirStr: (str: string, simbolo?: string | undefined, decimales?: number | undefined) => string;
}
export default Moneda;
//# sourceMappingURL=moneda.d.ts.map