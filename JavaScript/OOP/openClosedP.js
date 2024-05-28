function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description);
        switch(question.type) {
            case 'boolean': 
                console.log("1. True");
                console.log("2. False");
                break;
            case 'multipleChoice': 
                question.options.forEach((option, index) => {
                    console.log(`${index + 1}. ${option}`);
                });
                break;
            case 'text': 
                console.log("Answer: _________");
                break;
            case 'range': 
                console.log("Minimum: _________");
                console.log("Maximum: _________");
                break;
        }
        console.log("");
    });
}

const questions = [
    {
        type: "boolean",
        description: "This video is useful",
    },
    {
        type: "multipleChoice",
        description: "What is your favorite language?",
        options: ['CSS', 'HTML', 'JS', 'Python',],
    },
    {
        type: "text",
        description: "Describe your favorite JS feature.",
    },
    {
        type: "range", 
        description: "What is the speed limit in your city?",
    },
];

// printQuiz(questions);

// Swap to a new approach.
class BooleanQuestion {
    constructor(description) {
        this.description = description;
    }

    printQuestionChoices() {
        console.log("1. True");
        console.log("2. False");
    }
}

class MultipeChoiceQuestion {
    constructor(description, options) {
        this.description = description;
        this.options = options;
    }

    printQuestionChoices() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        })
    }
}

class TextQuestion {
    constructor(description) {
        this.description = description;
    }

    printQuestionChoices() {
        console.log("Answer: _________"); 
    }
}

class RangeQuestion {
    constructor(description) {
        this.description = description;
    }

    printQuestionChoices() {
        console.log("Minimum: _________");
        console.log("Maximum: _________");  
    }
}

function printQuestions(questions) {
    questions.forEach(question => {
        console.log(question.description);
        question.printQuestionChoices();
        console.log("");
    })
}

const newQuestions = [
    new BooleanQuestion("This question is usefull"),
    new MultipeChoiceQuestion(
        "What is your favorite language?",
        ['CSS', 'HTML', 'JS', 'Python'],
    ),
    new TextQuestion("What is your favorite JS feauture?"),
    new RangeQuestion("What is the speed limit in your city?"),
    new RangeQuestion("How fast can you write code?"),
];

printQuestions(newQuestions);

// Best used when I have these big switch or if statements.