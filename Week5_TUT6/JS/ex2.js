class Account {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }
    credit(amt) {
        this.balance += amt;
    }
    describe() {
        return `owner: ${this.name}, balance: ${this.balance}`;
    }
}

// Create without a loop
const seanAcct = new Account("Sean");
const bradAcct = new Account("Brad");
const georgesAcct = new Account("Georges");

// Add 1000 to each account
seanAcct.credit(1000);
bradAcct.credit(1000);
georgesAcct.credit(1000);

// Display
console.log(seanAcct.describe());
console.log(bradAcct.describe());
console.log(georgesAcct.describe());

// Using a loop
console.log ("================== USE A LOOP =============")
const accountNames = ["Sean", "Brad", "Georges"];
const accounts = []; // Array to store account objects

// Loop through account names, create accounts, credit them, and display
accountNames.forEach(name => {
    const account = new Account(name); // Create a new account
    account.credit(1000); // Credit 1000 to the account
    accounts.push(account); // Store the account in the array
    console.log(account.describe()); // Display the account details
});