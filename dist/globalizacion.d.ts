/**
 * Enumerador que almacena las regiones soportadas por la libreria
 */
declare enum GlobalizacionEnum {
    esSV = "es-sv"
}
/**
 * Interfaces utilizada para el manejo de la globalización de la librería
 */
export interface IGuion {
    Identificacion: number[];
}
/**
 * Interfaces utilizada para el manejo de la globalización de la librería
 */
export interface IFormato {
    Guion: IGuion;
}
/**
 * Interfaces utilizada para el manejo de la globalización de la librería
 */
export interface IGlobalizacion {
    Moneda: string;
    Formato: IFormato;
}
/**
 * Mapeo de las configuraciones de las regiones.
 */
export declare let GFormatoMap: Map<string, IGlobalizacion>;
export default GlobalizacionEnum;
//# sourceMappingURL=globalizacion.d.ts.map