class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

const person = new Person("Suraj");
console.log(person.name); // John
person.name = "Karan"
console.log(person.name); // Karan
