/**
 * Funciones relacionadas a numero
 */
export const Numero={
    /**
     * Elimina los caracteres $ y , retornando un valor numerico
     * @param str Valor a evaluar
     * @example
     * Numero.covertir('$ 10.00');
     * @returns
     * 10
     */
    convertir:(str:string):number=>{
        let valor:string = str.replace(/\$|,/g,'');
        if(valor){
            return parseInt(valor);
        }
        return 0;
    }
}