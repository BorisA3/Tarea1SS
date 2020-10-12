exports.Ejercicio2 = (numeroSuma) => {

    let numero  = numeroSuma ;
    let resultado = 0;
    
    console.log(numero);

    function suma(){

for (let i = 1; i <= numero; i++) {

    resultado = i + resultado;

}
console.log(resultado);

return resultado;

}

suma();

}