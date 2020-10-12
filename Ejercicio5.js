exports.Ejercicio5 = (encontrarNumero) => {

    let numeroMayorMenor  = encontrarNumero;
    let arrayAleatorio = []
    let aleatorios = numeroMayorMenor + 1;

        for (let i = 0; i < numeroMayorMenor; i++) {
            arrayAleatorio.push(Math.floor(Math.random()*aleatorios));
        }
        
      console.log(arrayAleatorio);
       
       console.log("Menor:", Math.min.apply(null, arrayAleatorio), "Mayor:", Math.max.apply(null, arrayAleatorio ));
       
};

     