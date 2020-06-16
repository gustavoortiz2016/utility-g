import GlobalizacionEnum, { IGlobalizacion,GFormatoMap } from "./globalizacion";
/**
 * Grupo de funciones relacionadas al manejo de cadenas
 */
class Cadena {
    /**
     *Almacena la región configurada.
     * @private
     * @type {GlobalizacionEnum}
     * @memberof Cadena
     */
    private _region: GlobalizacionEnum;
    /**
     *Almacena la información del formato de la región
     * @private
     * @type {*}
     * @memberof Cadena
     */
    private _formato:any;
    /**
     *Crea una instancia de Cadena
     * @param {GlobalizacionEnum} region
     * @memberof Cadena
     */
    constructor(region: GlobalizacionEnum) {
        this._region = region;
        this._formato=GFormatoMap.get(this._region);
    }
    /**
     * Formato documento de identificación,Este formato varia dependiendo la región seleccionada
     * @param valor cadena a formatear
     * @example
     * Cadena.di('888888888')
     * @returns
     * '88888888-8'
     */
    di(valor: string): string {
        let r = '';
        r = this.ig(valor, this._formato.Formato.Guion.Identificacion);
        return r;
    }
    /**
     * Ingreso de Guiones, esta función inyecta guiones en las posiciones indicadas
     * @param valor cadena a formatear
     * @param arrPosicion Un array con la posición en la que quiera que se ingresen los guiones
     * @example
     * Cadena.ig('88888888', [2, 4, 6])
     * @returns
     * '88-88-88-88'
     */
    ig(valor: string, arrPosicion: number[]) {
        let r: string = '';
        if (valor && arrPosicion.length > 0) {
            for (let i = 0, m = valor.length; i < m; i++) {
                if (arrPosicion.indexOf(i) !== -1)
                    r += '-' + valor.charAt(i);
                else
                    r += valor.charAt(i);
            }
        }
        return r;
    }
}
export default Cadena;