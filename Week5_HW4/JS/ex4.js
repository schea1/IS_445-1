// Create the dog object

const dog = {
  name: "Balto",
  species: "Siberian Husky",
  size: "large doggy",

  // How to mak the dog bark

  bark: function () 
  
  {
      return "Woof! Woof!";

  }
};

// Output the results

console.log(`${dog.name} is a ${dog.species} and he's a ${dog.size}`);
console.log(`Sean's neighbor's cat ran outside! ${dog.name} barks: ${dog.bark()}`);