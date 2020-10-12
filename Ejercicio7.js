exports.Ejercicio7 = (casas) => {

    let cantidadCasas = casas;
    let fosforosPorCasa = 6;
    let contadorFosforos = 0;
       
function resultadoFosforos() {
    
    if (cantidadCasas >= 2) {
        for (let i = 0; i < cantidadCasas; i++) {

            fosforosPorCasa = fosforosPorCasa;

            contadorFosforos += fosforosPorCasa ;
            
            contadorFosforos = contadorFosforos - 1;
        
            
        }   
        console.log(`Casas: ${cantidadCasas}`);
        console.log(`Fósforos: ${contadorFosforos + 1}`);
        
    }   else{

        console.log(`Casas: ${cantidadCasas}`);
        console.log(`Fósforos: ${fosforosPorCasa}`);

        }return resultadoFosforos;
 
    }resultadoFosforos();

}
