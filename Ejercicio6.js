exports.Ejercicio6 = (letrasMinusculas) => {

    let palabra = letrasMinusculas;
    let letras;
       
    console.log(palabra)
      
        function palabraEncontrada(encontrarPlabra) {
            extraerLetras = encontrarPlabra.match(/[a-z]/g)
            console.log(extraerLetras);
        }
            
        palabraEncontrada(palabra);

}