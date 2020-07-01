const utility = require('../dist').utility;
const expect = require('chai').expect;

describe('Validaciones de las funciones de Numero', () => {
    //Valor ingresado
    const sValor = '$ 10.10';
    //Valor esperado
    const iValor = 10.10;
    it(`Numero.convertir valor ingresado ${sValor} valor esperado ${iValor}`, () => {
        expect(utility.Numero.convertir(sValor)).to.equals(iValor);
    });
});