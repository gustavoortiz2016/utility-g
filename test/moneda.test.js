const utility = require('../dist').utility;
const expect = require('chai').expect;

describe('Validaciones de las funciones de Moneda', () => {
    //Valor ingresado
    const iValor = '10.1';
    //Valor esperado
    const sValor = '$ 10.10';
    it(`Moneda.convertirStr valor ingresado ${iValor} valor esperado ${sValor}`, () => {
        const valor = utility.Moneda.convertirStr(iValor);
        expect(valor).to.equals(sValor);
    });
});