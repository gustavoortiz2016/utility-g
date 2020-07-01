/**
 * Enumerador que almacena las regiones soportadas por la libreria
 */
declare enum GlobalizacionEnum {
    /**
     *Configuración de El Salvador
     */
    esSV = "es-sv"
}
/**
 * Interfaces utilizada para el manejo de la globalización de la librería
 */
export interface IGuion {
    /**
     *Almacena los guiones que lleva un documento de identificación personal para una región especifica
     * @type {number[]}
     * @memberof IGuion
     */
    Identificacion: number[];
}
/**
 * Interfaces utilizada para el manejo de la globalización de la librería
 */
export interface IFormato {
    /**
     *Almacena los documentos que llevan guion para una determinada región
     * @type {IGuion}
     * @memberof IFormato
     */
    Guion: IGuion;
}
/**
 * Interfaces utilizada para el manejo de la globalización de la librería
 */
export interface IGlobalizacion {
    /**
     *Almacena el símbolo de moneda utilizado para una región especifica
     * @type {string}
     * @memberof IGlobalizacion
     */
    Moneda: string;
    /**
     *Almacena los formatos utilizados por región
     * @type {IFormato}
     * @memberof IGlobalizacion
     */
    Formato: IFormato;
}
/**
 * Mapeo de las configuraciones de las regiones.
 */
export declare let GFormatoMap: Map<string, IGlobalizacion>;
export default GlobalizacionEnum;
//# sourceMappingURL=globalizacion.d.ts.map