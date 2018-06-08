//Manejo

  //Declarar funciones
    //Como sentencia

    function greet(){
      console.log("Hola mi nombre es Miguel");
    }
    greet();  
    //Como valor de una variable

    var greet = function(){
      console.log("Hola mi nombre es Miguel");
    }
    greet();
    //Como método de un objeto
    var person = {
      name: "Miguel",
      lastName: "Soler",
      age: 26
      greet: function(){
        console.log("Hola mi nombre es:" + this.name)
      }
    }
    person.greet();

  //Parametros y argumentos
    
    //Declarando parametros

    function suma(n1,n2){
      return n1 + n2
    }

    //Pasando argumentos
    suma(3,7);


    //El exceso de argumentos no es un problema.
    //La falta de un argumento crea un valor indefinido.



    //Parametros opcionales
      //Utilizando el operador ||
      function userID(name,id){
        id = id || "09310230"
        console.log("ID:" name + " " + id);
      }
      userID("Miguel",2233); //ID: Miguel 2233
      userID("Oscar") //Oscar 09310230
      userID("Pepito") // Pepito 09310230

      //Utilizando un IF

      function suma (a,b){
        if(typeof b === 'undefined'){
            b = 0;
        }
        return a+b;
      }
      suma(3,4)// 7
      suma(1) // 1 

      //Con un operador ternario
      function suma(a,b){
        b = typeof b !== 'undefined' ? b : 0;
        return a + b;
      } 

      //Pasando argumentos como objeto

      contactos = [];
      function crearContacto(datos){
        contacto.push({
          "nombre": datos.nombre,
          "@": "@" + datos.twitter
        })
      }

      crearContacto({twitter: "msoler18", nombre: "Miguel"})  


      //Retorno
      function validarPar(numero){
        var esPar = numero % 2 !== 1;
        var mensaje;
      
        if (esPar) {
          mensaje = "Bravo! es un número par!";
        } else {
          mensaje = "ERROR! No es un número par.... ¬¬\"";
        }
        return mensaje;
       };  

       //Anidación
       function greet(person){
          function greetAlert(){
            console.log("Hello" + person)
          }
        return greetAlert;  
       } 

       var saluda = greet("Miguel");
       saluda();

       //Ámbito (Scope)

       //Por defecto en js existen dos tipos de ambitos,(Local, Global)

       var ambitoGlobal = "Hola soy una variable del scope Global";

       function person(){
        var name = "Hola soy una variable del scope local";
       }

       /*
        Una mala practica a la hora de planificar nombres para variables
        es crear o declarar variables en el ámbito local y global
        con el mismo nombre.
       */

       //Funciones anónimas
        // Entre los requisitos de una funcion no esta incluir los nombres necesariamente.

       //Funciones que retornan funciones
        // Cuando una función retorna una función, esta sera logicamente anonima.

        function greet(person){
          return function(){
            console.log("Hola" + person)
          }
        } 

        var saluda = greet("Miguel");
        saluda();

        //Pordemos invocar una funcion sin asignar una variable necesariamente.

        greet("Miguel")();

        //Funciones anónimas autoejectuadas

        (function(){
          console.log("Hola pepito");
        })();

        //Con parametros
        (function(person){
          console.log("Hola" + person)
        })("Miguel");

    //Recursión
      // Una función es capaz de invocarse asi misma durante su ejecución.
      function factorial(n){
        if(n <= 1){
          return 1
        } else {
          return n * factorial(n-1)
        }
      }
      

      //Callbaks
      //Es una técnica de programación y no una facilidad del lenguaje.  


      // Sin Callbacks:
      function primerPaso() {
       console.log("Este es el primer paso");
      };
      
      function segundoPaso() {
        console.log("Este es el segundo paso");
      };
      
      primerPaso();
      segundoPaso();


      //Con callbacks

      function primerPaso(callback) {
        console.log("Este es el primer paso");
        callback();
      };
      
      function segundoPaso() {
        console.log("Este es el segundo paso");
      };
      
      primerPaso(segundoPaso);  

      /*
      2 Declaramos una función que espera dos parámetros
      3 - parametro
      4 - callback
      5 */
      var quieroCallback = function(p1, callback){
      // Consideramos el callback como algo opcional.
        if ((callback){
      // Validamos si es una función o no.
        if (typeof callback === 'function')){
      /*
      De ser una función lo ejecutamos y
      y pasamos como argumento "p1"
      */
        callback(p1);
      } else {
      /*
      Si no se trata de una función...
      simplemente mostramos ambos datos.
      */
      console.log(p1, callback);
      }
      }
      }
      
      quieroCallback('a', 'b');
      
      quieroCallback('a', function(val){
      console.log(val);
      });