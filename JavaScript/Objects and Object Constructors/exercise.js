function Book(title, author, pages, readOrNot) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readOrNot = readOrNot;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.readOrNot}`
    };
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

console.log(theHobbit.info());