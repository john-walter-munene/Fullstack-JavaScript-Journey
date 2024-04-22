const barker = (state) => ({
    bark: () => console.log(`Woof, I am ${state.name}`),
});

const driver = (state) => ({
    drive: () => state.position += state.speed,
});

const murderRobotDog = (name) => {
    let state = {
        name,
        speed: 100,
        position: 0,
    };

    // Methods for controlled access to internal state
    const getName = () => state.name;
    const getSpeed = () => state.speed;
    const getPosition = () => state.position;

    return Object.assign({},
        barker(state),
        driver(state),
        {
            getName,
            getSpeed,
            getPosition,
        }
    );
};

// Usage
const robotDog = murderRobotDog('Rex');

// Check enumerables
for (let key in robotDog) {
    console.log(key);
}

robotDog.bark();         // Woof, I am Rex
console.log(robotDog.drive()); // 100
console.log(robotDog.getPosition()); // 100
robotDog.getSpeed();

// Real world examples.

class GoToDefinition {
    goToDefinition () {
      const word = this.getWordUnderCursor()
      const func = FunctionRepository.find(word)
      if (func) {
        this.open(func.file, func.index)
      }
    }
  
    open (file, index) {
      // use the editor's API to open the file at the specified index
    }
  
    getWordUnderCursor () {
      // ... a long method to get the word under the cursor
      // it might use regular expressions and some complex logic
    }
  }

class OpenHelp {
    openHelp () {
      const word = this.getWordUnderCursor()
      const help = HelpRepository.find(word)
      if (help) {
        this.open(help)
      }
    }
  
    open (help) {
      // open the browser
    }
  
    getWordUnderCursor () {
      // ... a long method to get the word under the cursor
      // it might use regular expressions and some complex logic
    }
  }

class WordAction {
    getWordUnderCursor () {
      // ... a long method to get the word under the cursor
      // it might use regular expressions and some complex logic
    }
  }

// Extending my new classes from the old one.
class GoToDefinition extends WordAction { /* ... */ }
class OpenHelp extends WordAction { /* ... */ }

// Impmenting new functionality...
class WordAction {
    getWordUnderCursor () {
      // ...
    }
  
    getLineUnderCursor () {
      // ...
    }
  }

class GoToInclude extends WordAction {
    goToInclude () {
      const line = this.getLineUnderCursor()
      const match = line.match(/some-regex/)
      if (match) {
        this.open(match.groups.file)
      }
    }
  
    open (file) {
      // check if file exists and use the editor's API
      // to open the file
    }
  }

// Refactor to use composition.
class Finder {
    getWordUnderCursor () {
      // ...
    }
  
    getLineUnderCursor () {
      // ...
    }
  }
  
class GoToDefinition {
    constructor () {
      this.finder = new Finder()
    }
  
    goToDefinition () {
      const word = this.finder.getWordUnderCursor()
      // ...
    }
  
    // ...
  }
  
class OpenHelp {
    constructor () {
      this.finder = new Finder()
    }
  
    openHelp () {
      const word = this.finder.getWordUnderCursor()
      // ...
    }
  
    // ...
  }
  
class GoToInclude {
    constructor () {
      this.finder = new Finder()
    }
  
    goToInclude () {
      const line = this.finder.getLineUnderCursor()
      // ...
    }
  
    // ...
  }

// Reusing code.
class GoToDefinition {
    constructor (finder) {
      this.finder = finder
    }
  
    goToDefinition () {
      const word = this.finder.getWordUnderCursor()
      // ...
    }
  
    // ...
  }
  
const goToDefinitionTwo = new GoToDefinition(new VSCodeFinder()) // vscode
const goToDefinitionThree = new GoToDefinition(new AtomFinder())   // atom