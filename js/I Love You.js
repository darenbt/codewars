// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
//
// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
//
// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

// My solution:
function howMuchILoveYou(nbPetals) {
   if ((nbPetals + 5) % 6 === 0){
     return 'I love you'
   }  else if((nbPetals + 4) % 6 === 0){
     return 'a little'
    } else if ((nbPetals + 3) % 6 === 0){
     return 'a lot'
    } else if ((nbPetals + 2) % 6 === 0){
     return 'passionately'
    } else if ((nbPetals + 1) % 6 === 0 ){
     return 'madly'
    } else if ((nbPetals % 6) === 0){
     return 'not at all'
    }
}

// Test cases:
console.log(howMuchILoveYou(7)); // should return "I love you"
console.log(howMuchILoveYou(3)); // should return "a lot"
console.log(howMuchILoveYou(6)); // should return "not at all"
console.log(howMuchILoveYou(2)); // should return "a little"
console.log(howMuchILoveYou(5)); // should return "madly"
