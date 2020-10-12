exports.Ejercicio4 = (numeroAConvertir) => {

    let numeroBinario  = numeroAConvertir;
    let binario = 0;
    let binario1, i = 1;
          
        function conersion(x) {
          
          
          while (x != 0) {
            binario1 = x % 2;
              x = parseInt(x / 2);
              binario = binario + binario1 * i;
              i = i * 10;
          }
          console.log(`Número a convertir: ${numeroBinario}`);
          console.log(`Binario: ${binario}`);
      }
      
      conersion(numeroBinario);
      
};