const utility = require('../dist').utility;
const expect = require('chai').expect;

describe('Validaciones de las funciones de Cadena', () => {
    describe('Cadena.ig', () => {
        //Valor ingresado
        const iValor = '88888888';
        //Valor esperado
        const sValor = '88-88-88-88';
        it(`Valor ingresado ${iValor} valor esperado ${sValor}`, () => {
            const valor = utility.Cadena().ig(iValor, [2, 4, 6]);
            console.log('respuesta: ', valor)
            expect(valor).to.equals(sValor);
        });
    });
    describe('Cadena.di', () => {
        //Valor ingresado
        const iValor = '888888888';
        //Valor esperado
        const sValor = '88888888-8';
        it(`Valor ingresado ${iValor} valor esperado ${sValor}`, () => {
            const valor = utility.Cadena().di(iValor);
            console.log('respuesta: ', valor)
            expect(valor).to.equals(sValor);
        });
    });
});