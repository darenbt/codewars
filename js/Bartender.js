// Complete the function that receives as input a string, and produces outputs according to the following table:
//
// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".
//
// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

// My solution:
function getDrinkByProfession(param){
  switch(param.toLowerCase()){
    case 'jabroni':
      return 'Patron Tequila'
      break;
    case 'school counselor':
      return 'Anything with Alcohol'
      break;
   case 'programmer':
     return 'Hipster Craft Beer'
     break;
   case 'bike gang member':
     return 'Moonshine'
     break;
   case 'politician':
     return 'Your tax dollars'
     break;
   case 'rapper':
     return 'Cristal'
     break;
   default:
     return 'Beer'
  }

}

// Test cases:
console.log(getDrinkByProfession("jabrOni")); // should return "Patron Tequila"
console.log(getDrinkByProfession("scHOOl counselor")); // should return "Anything with Alcohol"
console.log(getDrinkByProfession("prOgramMer")); // should return "Hipster Craft Beer"
console.log(getDrinkByProfession("bike ganG member")); // should return "Moonshine"
console.log(getDrinkByProfession("poLiTiCian")); // should return "Your tax dollars"
console.log(getDrinkByProfession("rapper")); // should return "Cristal"
console.log(getDrinkByProfession("pundit")); // should return "Beer"
console.log(getDrinkByProfession("Pug")); // should return "Beer"

console.log(getDrinkByProfession("jabrOnI")); // should return "Patron Tequila"
console.log(getDrinkByProfession("scHOOl COUnselor")); // should return "Anything with Alcohol"
console.log(getDrinkByProfession("prOgramMeR")); // should return "Hipster Craft Beer"
console.log(getDrinkByProfession("bike GanG member")); // should return "Moonshine"
console.log(getDrinkByProfession("poLiTiCiAN")); // should return "Your tax dollars"
console.log(getDrinkByProfession("RAPPer")); // should return "Cristal"
console.log(getDrinkByProfession("punDIT")); // should return "Beer"
console.log(getDrinkByProfession("pUg")); // should return "Beer"
