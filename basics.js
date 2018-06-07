//Comentarios
//Una línea
  //Este es un comentario de una linea
//Multiples líneas
  /*
  Esta es una línea
  Esta es otra línea
  Etc..
  */
//JSDoc
 /**
 *Represents a book
 *@constructor
 *@param {string} title - The title of the book
 *@param {string} author - The author of the book
 */

//Nombres de variables
  
  // No usar espacios
  var con espacios = 1;
  // No usar un número adelante
  var 1numero = 1;
  //Evitar simbolos y snake case
  var con_guiones_bajos = 1;
  var dame$ = 1;
  // Usar CamelCase
  var myName = "Miguel";

/*
Si estas realizando cambios en un código que sigue una pauta distinta a cameCase.
¡Síguelo!
La coherencia en el código es más importante, recuérdalo.
*/

//Operadores
  // = Asignación
  var x = x;
  // += Suma
  var x = 1;
  var y = 2;
  x += y //x = x + y
  // -= Resta
  var x = 2;
  var y = 3;
  x -= y // x = x - y
  // *= Resta
  var x = 2;
  var y = 3;
  x *= y // x = x * y
  // /= Resta
  var x = 2;
  var y = 3;
  x /= y // x = x / y  

//Operadores de comparación
var mayorQue = 100 > 10;
var menorQue = 10 < 100;
var mayorIgual = 100 >= 10;
var menorIgual = 10 <= 100;
var igual = 10 == 10;
var igualTotalmente = 10 === 10; // Ojo! Usamos también === Compara valor y tipo
var noIgual = 100 != 10;
var noIgualTotalmente = 100 !== 10;

//Operadores lógicos
 //AND (&&)
 console.log(true && true); // true
 console.log(true && false); // false
 console.log(false && false); // false
 console.log(false && true); // false  
 //OR (||)
 console.log(true || true); // true
 console.log(true || false); // true
 console.log(false || false); // false
 console.log(false || true); // true

//Condicionales
 //IF
 if(1 === 1){
   console.log("1 es igual a 1 y por eso me ejecuto")
  }

  if(1 === "1"){
      console.log("No son del mismo tipo y por eso... este texto jamás será mostra 7 do en la consola.") 
  }
  
  //If else
  console.log("pase lo que pase... esto se ejecutará")
  if (true) {
      console.log("true, por eso me ejecuto");
  } else {
      console.log("false, por eso me ejecuto");
  }
  console.log("pase lo que pase... esto se ejecutará también")
  
  //Else if
  var condicion = 2;
  if (condicion == 1) {
    console.log("1, por eso me ejecuto");
  } else if (condicion == 2){
    console.log("2, por eso me ejecuto");
  } else {
    console.log("no es 1 o 2, por eso me ejecuto");
  }

  //Operador ternario
  //condicional ? expresión1 : expresión2


//Bucles

  //While
  var condicion = true
  while (condicion) {
    console.log("hola");
    condicion = false;
  };

  //For
  for (var i = 0; i < 10; i++) {
    console.log(i);
  } 

  //Errores comunes
      //Bucle infinito
      //Bucle que no se ejecutara 

  //Usos avanzados
    //Decrecimiento
    for (var i = 10; i > 0; i--) {
      console.log(i);
    } 

    //Anidación
    //Maximo dos o tres niveles de anidacion.

    //No refactorizar   