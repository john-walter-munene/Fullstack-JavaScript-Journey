function createPerson(name) {
    let obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
        console.log(`Hi! I am ${this.name}`);
    }
    return obj;
}

const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf();
// "Hi! I'm Frankie."

function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
  }

const salvaTwo = new Person("Salva");
salvaTwo.name;
salvaTwo.introduceSelf();
// "Hi! I'm Salva."

const frankieTwo = new Person("Frankie");
frankieTwo.name;
frankieTwo.introduceSelf();
// "Hi! I'm Frankie."
  