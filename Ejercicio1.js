exports.Ejercicio1 = (dividir) => {

    let numero = dividir;
    let numero1 = 0;
    let numero2 = 0;

    const numeros = [];

    numero = numero / 2;

    numero2 = Math.floor(numero);

    numero1 = Math.ceil(numero);

    numeros.push({
         numero2,
         numero1,
    });

    console.log(numeros);

}