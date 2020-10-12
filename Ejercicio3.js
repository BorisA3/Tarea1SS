exports.Ejercicio3 = (retornarNumero1, retornarNumero2) => {

    let retornar1  = retornarNumero1;
    let retornar2  = retornarNumero2;
    let numeroMayor = 0 ;
    
    function numero(){
    
            if (retornar1 > retornar2 ) {

                console.log(`${retornar1} , ${retornar2}, El numero mayor es: "g" `);

            }else if(retornar1 < retornar2) 
            {
                console.log(`${retornar1} , ${retornar2}, El numero mayor es: "f" `);
    
            }else{
    
                console.log(`${retornar1} , ${retornar2}, El numero mayor es: ninguna`);
            }
    
        return numero;
    }
    
    numero();
      
};