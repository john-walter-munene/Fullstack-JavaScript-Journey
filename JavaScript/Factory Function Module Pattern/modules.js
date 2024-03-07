// Modules.
const SomeModule = (function () {})();

const Formatter = (function () {
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

    const makeUpperCase = (text) => {
        log ("Making uppercase");
        return text.toUpperCase();
    };

    return { makeUpperCase, };
})();

console.log(Formatter.makeUppercase("tomek"));

// Modules can house Objects, Arrays, and primitives.

const FormatterTwo = (function () {
    let timesRun = 0;

    const log = (message) => console.log(`[${Date.now()}]: Logger: ${message}`);
    const setTimesRun = () => {
        log ("Setting times run");
        ++timesRun;
    }

    const makeUppercase = (text) => {
        log ("Making uppercase");
        setTimesRun();
        return text.toUpperCase();
    }

    return { makeUppercase, timesRun, };
})();

console.log(FormatterTwo.makeUppercase("tomek"));
console.log(FormatterTwo.timesRun);

// Reference types work differently.
const FormatterThree = (function () {
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
    const timesRun = [];

    const makeUppercase = (text) => {
        log ("Making uppercase");
        timesRun.push(null);
        return text.toUpperCase();
    };

    return { makeUppercase, timesRun, };
})();

console.log(FormatterThree.makeUppercase("tomek"));
console.log(FormatterThree.makeUppercase("tomek"));
console.log(FormatterThree.makeUppercase("tomek"));
console.log(FormatterThree.timesRun.length);

// Declaring module dependencies.

const documentMock = (() => ({
    querySelector: (selector) => ({
        innerHTML: null,
    }),
}))();

const FormatterFour = (function () {
    const log = (message) => console.log(`[${Date.now}] Loggers: ${message}`);

    const makeUppercase = text => {
        log("Making uppercase");
        return text.toUpperCase();
    }

    const writeDOM = (selector, message) => {
        document.querySelector(selector).innerHTML = message;
    }

    return { makeUppercase, writeDOM, };
})(document || documentMock);