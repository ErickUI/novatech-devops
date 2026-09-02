const { calcularTotal } = require('../src/app.js');

describe('Suite de Pruebas - Portal de Pedidos NovaTech', () => {
    
    test('Valida que el cálculo del total sea correcto al multiplicar cantidad por precio', () => {
        const cantidad = 2;
        const precio = 150.00;
        const resultadoEsperado = 300.00;
        
        expect(calcularTotal(cantidad, precio)).toBe(resultadoEsperado);
    });

    test('Valida que el total sea 0 si la cantidad de productos es 0', () => {
        const cantidad = 0;
        const precio = 2500.00; 
        
        expect(calcularTotal(cantidad, precio)).toBe(0);
    });
});