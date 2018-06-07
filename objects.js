//Manejo
  //Creación de un objeto
  var miObjeto = {}

  //Con propiedades
  var person = {
    name: "Miguel",
    lastName: "Soler",
    age: 26
  }

  //Con métodos
  var person = {
    name: "Miguel",
    lastName: "Soler",
    age: 26,
    greet: function(){
      console.log("Hola a todos mi nombre es:" this.name)
    }
  }

  //Usando las propiedades y los metodos
  var person = {
    name: "Miguel",
    lastName: "Soler",
    age: 26,
    greet: function(){
      console.log("Hola a todos mi nombre es:" this.name)
    }
  }
  //Recuperando el varlor de la propiedad name
  console.log("Hola mi nombre es:" + person.name)

  //Invocando el método
  person.greet();

  // Cambiando el valor de una propierdad

  var skills = {
    backend: "Ruby",
    frontend: "Js"
  }

  skills.backend = "Js";
