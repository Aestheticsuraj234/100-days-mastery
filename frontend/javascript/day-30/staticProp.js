// class MathUtils {
//     constructor() {
//         console.log("Object created");
//     }
//     static PI = 3.1416;

//     static add(a, b) {
//         return a + b;
//     }
// }

// const mathUtils = new MathUtils();

// console.log(
//     mathUtils.add(5, 5),
// )

class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(500);
console.log(myAccount.getBalance()); // Output: 1500
