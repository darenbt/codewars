// The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.
//
// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.
//
// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:
//
// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets
//
// Example:
//
// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1
//
// The return Will always be an integer so as the params.

// My solution:
function magNumber(info){
  let mags = 0
  if (info[0] == 'PT92'){
    for(i = 0; i < info[1] * 3; i += 17){
      mags += 1;
    }
    } else if (info[0] == 'M4A1'|| info[0] =='M16A2'){
        for(i = 0; i < info[1] * 3; i += 30){
        mags += 1;
      }
    } else if (info[0] == 'PSG1'){
        for(i = 0; i < info[1] * 3; i += 5){
        mags += 1;
      }
    }
      return mags;
}

// a refactor:
magNumber = info => Math.ceil(info[1] * 3 / {PT92: 17, M4A1: 30, M16A2: 30, PSG1: 5}[info[0]])
