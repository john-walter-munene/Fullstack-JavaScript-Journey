let passiveSupported = false;

try {
  const options = {
    get passive() {
      // This function will be called when the browser
      // attempts to access the passive property.
      passiveSupported = true;
      return false;
    },
  };

  window.addEventListener("test", null, options);
  window.removeEventListener("test", null, options);
} catch (err) {
  passiveSupported = false;
}

someElement.addEventListener(
    "mouseup",
    handleMouseUp,
    passiveSupported ? { passive: true } : false,
  );

my_element.addEventListener("click", function (e) {
    console.log(this.className); // logs the className of my_element
    console.log(e.currentTarget === this); // logs `true`
  });
  
class Something {
    name = "Something Good";
    constructor(element) {
      // bind causes a fixed `this` context to be assigned to `onclick2`
      this.onclick2 = this.onclick2.bind(this);
      element.addEventListener("click", this.onclick1, false);
      element.addEventListener("click", this.onclick2, false); // Trick
    }
    onclick1(event) {
      console.log(this.name); // undefined, as `this` is the element
    }
    onclick2(event) {
      console.log(this.name); // 'Something Good', as `this` is bound to the Something instance
    }
  }
  
const s = new Something(document.body);

class SomethingTwo {
    name = "Something Good";
    constructor(element) {
      // Note that the listeners in this case are `this`, not this.handleEvent
      element.addEventListener("click", this, false);
      element.addEventListener("dblclick", this, false);
    }
    handleEvent(event) {
      console.log(this.name); // 'Something Good', as this is bound to newly created object
      switch (event.type) {
        case "click":
          // some code here…
          break;
        case "dblclick":
          // some code here…
          break;
      }
    }
  }
  
const s2 = new SomethingTwo(document.body);

class SomeClass {
    name = "Something Good";
  
    register() {
      window.addEventListener("keydown", (e) => {
        this.someMethod(e);
      });
    }
  
    someMethod(e) {
      console.log(this.name);
      switch (e.keyCode) {
        case 5:
          // some code here…
          break;
        case 6:
          // some code here…
          break;
      }
    }
  }
  
const myObject = new SomeClass();
myObject.register();
  
// Getting data into an event listener using the outer scope property

const myButton = document.getElementById("my-button-id");
let someString = "Data";

myButton.addEventListener("click", () => {
  console.log(someString); // Expected Value: 'Data'

  someString = "Data Again";
});

console.log(someString); // Expected Value: 'Data' (will never output 'Data Again')


// Memory Issues.
const elts = document.getElementsByTagName("*");

// Case 1
for (const elt of elts) {
  elt.addEventListener(
    "click",
    (e) => {
      // Do something
    },
    false,
  );
}

// Case 2
function processEvent(e) {
  // Do something
}

for (const elt of elts) {
  elt.addEventListener("click", processEvent, false);
}

  