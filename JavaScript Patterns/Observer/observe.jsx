import { ToastContainer, toast } from "react-toastify";

class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(func) {
        this.observers.push(func);
    }

    unsubscribe(func) {
        this.observers = this.observers.filter((observer) => observer !== func);
    } 

    notify(data) {
        this.observers.forEach((observer) => observer(data));
    }
}

function AppSample() {
    return (
        <div className="app">
            <Button>Click me!</Button>
            <FormControlLabel control={<Switch />} />
        </div>
    );
}

// Example

const observable = new Observable();

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

function toastify(data) {
  toast(data);
}

observable.subscribe(logger);
observable.subscribe(toastify);

export default function App() {
  return (
    <div className="App">
      <Button>Click me!</Button>
      <FormControlLabel control={<Switch />} />
      <ToastContainer />
    </div>
  );
}