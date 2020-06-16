
/**
 *Grupo de funciones relacionadas al manejo de números
 * @class Numero
 */
class Numero {
    /**
     * Elimina los caracteres $ y , retornando un valor numerico
     * @param str Valor a evaluar
     * @example
     * Numero.covertir('$ 10.00');
     * @returns
     * 10
     */
    static convertir = (str: string): number => {
        let r: number = 0;
        let valor: string = str.replace(/\$|,/g, '');
        if (valor) {
            r = parseInt(valor);
        }
        return r;
    }
}

export default Numero;