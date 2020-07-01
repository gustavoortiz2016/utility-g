import GlobalizacionEnum from "./globalizacion";
/**
 * Grupo de funciones relacionadas al manejo de cadenas
 */
declare class Cadena {
    /**
     *Almacena la región configurada.
     * @private
     * @type {GlobalizacionEnum}
     * @memberof Cadena
     */
    private _region;
    /**
     *Almacena la información del formato de la región
     * @private
     * @type {*}
     * @memberof Cadena
     */
    private _formato;
    /**
     *Crea una instancia de Cadena
     * @param {GlobalizacionEnum} region
     * @memberof Cadena
     */
    constructor(region: GlobalizacionEnum);
    /**
     * Formato documento de identificación,Este formato varia dependiendo la región seleccionada
     * @param valor cadena a formatear
     * @example
     * Cadena.di('888888888')
     * @returns
     * '88888888-8'
     */
    di(valor: string): string;
    /**
     * Ingreso de Guiones, esta función inyecta guiones en las posiciones indicadas
     * @param valor cadena a formatear
     * @param arrPosicion Un array con la posición en la que quiera que se ingresen los guiones
     * @example
     * Cadena.ig('88888888', [2, 4, 6])
     * @returns
     * '88-88-88-88'
     */
    ig(valor: string, arrPosicion: number[]): string;
}
export default Cadena;
//# sourceMappingURL=cadena.d.ts.map