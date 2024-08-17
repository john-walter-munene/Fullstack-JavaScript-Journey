const server = {
    people: [
        {
            name: "Odin",
            age: 20,
        },
        {
            name: "Thor",
            age: 30,
        },
        {
            name: "Freyja",
            age: 29,
        },
    ],

    getPeople() {
        return new Promise((resolve, reject) => {
            // Simulating a delayed network call to the server.
            setTimeout(() => {
                resolve(this.people);
            }, 2000);
        });
    }
};

console.log(server.getPeople());