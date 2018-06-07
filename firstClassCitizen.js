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