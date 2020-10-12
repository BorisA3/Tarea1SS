// Importar express
const express = require("express");
// Importar handlebars como template engine
const exphbs = require("express-handlebars");
// Importar body parser que nos permite acceder al cuerpo de la petición HTTP
const bodyParser = require("body-parser");

// Importar la función
//const { Ejercicio00 } = require("./Ejercicio00");
const { Ejercicio1 } = require("./Ejercicio1");
const { Ejercicio2 } = require("./Ejercicio2");
const { Ejercicio3 } = require("./Ejercicio3");
const { Ejercicio4 } = require("./Ejercicio4");
const { Ejercicio5 } = require("./Ejercicio5");
const { Ejercicio6 } = require("./Ejercicio6");
const { Ejercicio7 } = require("./Ejercicio7");

// Crear un servidor express
const app = express();

// Indicar a express utilizar handlebars como template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.set("view engine", "hbs");

// Habilitar body parse para leer los datos del cuerpo de peticiones POST
app.use(bodyParser.urlencoded({ extended: true }));

// Crear una ruta para /
// Información sobre los verbos HTTP
// https://developer.mozilla.org/es/docs/Web/HTTP/Methods

//amortizacion
app.get("/", (req, res, next) => {
    res.render("menu_principal");
  });


// Ejercicio1
app.get("/Ejercicio1", (req, res, next) => {
res.render("Ejercicio1");
});

// Ejercicio2
app.get("/Ejercicio2", (req, res, next) => {
res.render("Ejercicio2");
});

// Ejercicio3
app.get("/Ejercicio3", (req, res, next) => {
    res.render("Ejercicio3");
    });

// Ejercicio4
app.get("/Ejercicio4", (req, res, next) => {
    res.render("Ejercicio4");
    });

// Ejercicio5
app.get("/Ejercicio5", (req, res, next) => {
    res.render("Ejercicio5");
    });

// Ejercicio6
app.get("/Ejercicio6", (req, res, next) => {
    res.render("Ejercicio6");
    });

// Ejercicio7
app.get("/Ejercicio7", (req, res, next) => {
    res.render("Ejercicio7");
    });


// Ejercicio1
app.post("/dividirnumero", (req, res, next) => {
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { dividir } = req.body;

   Ejercicio1(dividir);

  res.send("Peticion aceptada");
});

// Ejercicio2
app.post("/Ejercicio2", (req, res, next) => {
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { numeroSuma } = req.body;

   Ejercicio2(numeroSuma);

  res.send("Peticion aceptada");
});

// Ejercicio3
app.post("/Ejercicio3", (req, res, next) => {
    // Asignación por destructuring
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
    const { retornarNumero1, retornarNumero2 } = req.body;
  
     Ejercicio3(retornarNumero1, retornarNumero2);
  
    res.send("Peticion aceptada");
  });

  // Ejercicio4
app.post("/Ejercicio4", (req, res, next) => {
    // Asignación por destructuring
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
    const { numeroAConvertir } = req.body;
  
     Ejercicio4(numeroAConvertir);
  
    res.send("Peticion aceptada");
  });
  
 // Ejercicio5
 app.post("/Ejercicio5", (req, res, next) => {
    // Asignación por destructuring
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
    const { encontrarNumero } = req.body;
  
     Ejercicio5(encontrarNumero);
  
    res.send("Peticion aceptada");
  });

// Ejercicio6
 app.post("/Ejercicio6", (req, res, next) => {
    // Asignación por destructuring
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
    const { letrasMinusculas } = req.body;
  
     Ejercicio6(letrasMinusculas);
  
    res.send("Peticion aceptada");
  });

// Ejercicio7
app.post("/Ejercicio7", (req, res, next) => {
    // Asignación por destructuring
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
    const { casas } = req.body;
  
     Ejercicio7(casas);
  
    res.send("Peticion aceptada");
  });

// Inicializar el servidor en un puerto en específico
app.listen(5000, () => {
  console.log("Servidor ejecutándose en el puerto 5500");
});