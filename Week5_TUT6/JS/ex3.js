const anObject = {
    myProp: 2
  };
  
  // Create anotherObject using anObject as a prototype
  const anotherObject = Object.create(anObject);
  
  // myProp is found in anotherObject's prototype chain (in anObject)
  console.log(anotherObject.myProp); // 2
  
  
  // Create yetAnotherObject using anotherObject as a prototype
  const yetAnotherObject = Object.create(anotherObject);
  
  // myProp is found in yetAnotherObject's prototype chain (in anObject)
  console.log(yetAnotherObject.myProp); // 2
  
  // myOtherProp can’t be found in yetAnotherObject's prototype chain
  console.log(yetAnotherObject.myOtherProp); // undefined
  

  // Experiment
  anotherObject.myProp2 = 7;
console.log(anObject.myProp2);
console.log(anotherObject.myProp2);
console.log(yetAnotherObject.myProp2);

anotherObject.myProp2 = 6;
console.log(anObject.myProp);
console.log(anotherObject.myProp);
console.log(yetAnotherObject.myProp);

