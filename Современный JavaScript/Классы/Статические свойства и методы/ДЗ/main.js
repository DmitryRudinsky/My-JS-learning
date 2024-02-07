class Rabbit extends Object {
    constructor(name) {
        super();
        this.name = name;
    }
  }
  
  let rabbit = new Rabbit("Кроль");
  
  alert( rabbit.hasOwnProperty('name') );