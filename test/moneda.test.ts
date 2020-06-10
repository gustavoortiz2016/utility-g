import {Moneda} from './../src/moneda';
import {expect} from 'chai';

describe('Validaciones de las funciones de Moneda',()=>{
    //Valor ingresado
    const iValor:string = '10';
    //Valor esperado
    const sValor:string='$ 10.00';
    it(`Moneda.convertirStr valor ingresado ${iValor} valor esperado ${sValor}`,()=>{
        const valor = Moneda.convertirStr(iValor);
        expect(valor).to.equals(sValor);
    });
});