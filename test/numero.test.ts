import { Numero } from './../src/numero';
import {expect} from 'chai';

describe('Validaciones de las funciones de Numero',()=>{
    //Valor ingresado
    const sValor:string = '$ 10.00';
    //Valor esperado
    const iValor:number=10;
    it(`Numero.convertir valor ingresado ${sValor} valor esperado ${iValor}`,()=>{
        expect(Numero.convertir(sValor)).to.equals(iValor);
    });
});