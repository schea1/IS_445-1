// Define the Dog class
class Dog {
    // Constructor to initialize the Dog object
    constructor(inName, species, size) {
        this.name = inName;
        this.species = species;
        this.size = size;
    }

    // Method to determine the bark sound based on the dog's size
    bark() {
        if (this.size > 60) {
            return "Grrr! Grrr!";
        } else {
            return "Woof! Woof!";
        }
    }
}

// Create an instance of Dog
const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

// Create another instance of Dog
const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);