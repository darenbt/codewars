// Task
// You are givena function animal, which accepts 1 parameter:obj like this:
//
// {name:"dog",legs:4,color:"white"}
// and returns a string like this:
//
// "This white dog has 4 legs."

// My solution:
function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

// Test cases:
console.log(animal({name:"dog",legs:4,color:"white"})); // should return "This white dog has 4 legs."
console.log(animal({name:"cock",legs:2,color:"red"})); // should return "This red cock has 2 legs."
console.log(animal({name:"rabbit",legs:4,color:"gray"})); // should return "This gray rabbit has 4 legs."
