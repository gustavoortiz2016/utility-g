import Numero from './numero';
import Moneda from './moneda';
import GlobalizacionEnum from './globalizacion';
import Cadena from './cadena';

/**
 * Libreria de utilidades Javascript
 */
export const utility = {
    Globalizacion:GlobalizacionEnum.esSV,
    Moneda,
    Numero,
    Cadena:function():Cadena{
        return new Cadena(this.Globalizacion);
    }
};