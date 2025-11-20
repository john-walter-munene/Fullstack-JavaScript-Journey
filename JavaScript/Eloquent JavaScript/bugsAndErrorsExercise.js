class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(numberOne, numberTwo) {
    let randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber < 3) return numberOne * numberTwo; 
    throw new MultiplicatorUnitFailure();
}

function primitiveMultiplyWrapper(numberOne, numberTwo) {
    while (true) {  // Keep trying until successful
        try {
            return primitiveMultiply(numberOne, numberTwo);
        } catch (e) {
            if (!(e instanceof MultiplicatorUnitFailure)) {
                throw e; // Re-throw unexpected errors
            }
        }
    }
}

// Example usage:
console.log(primitiveMultiplyWrapper(4, 5));

const box = new class {
    locked = true;
    #content = [];
  
    unlock() { 
        this.locked = false; 
    }
    lock() { 
        this.locked = true;  
    }
    
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this.#content;
    }
};
  
  function withBoxUnlocked(body) {
    let locked = box.locked;
    if (locked) box.unlock();
    try {
      return body();
    } finally {
      if (locked) box.lock();
    }
  }
  
withBoxUnlocked(() => {
    box.content.push("gold piece");
});
  
try {
    withBoxUnlocked(() => {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised:", e);  
}
  
console.log(box.locked);  // → true