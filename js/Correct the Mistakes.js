// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
//
// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
//
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
//
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// My solution:
function correct(string){
  return string.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S');
}

// Test cases:
console.log(correct("1F-RUDYARD K1PL1NG")); // should return "IF-RUDYARD KIPLING"
console.log(correct("R0BERT MERLE - THE DAY 0F THE D0LPH1N")); // should return "ROBERT MERLE - THE DAY OF THE DOLPHIN"
console.log(correct("R1CHARD P. FEYNMAN - THE FEYNMAN LECTURE5 0N PHY51C5")); // should return "RICHARD P. FEYNMAN - THE FEYNMAN LECTURES ON PHYSICS"
console.log(correct("R1CHARD P. FEYNMAN - 5TAT15T1CAL MECHAN1C5")); // should return "RICHARD P. FEYNMAN - STATISTICAL MECHANICS"
console.log(correct("5TEPHEN HAWK1NG - A BR1EF H15T0RY 0F T1ME")); // should return "STEPHEN HAWKING - A BRIEF HISTORY OF TIME"
console.log(correct("5TEPHEN HAWK1NG - THE UN1VER5E 1N A NUT5HELL")); // should return "STEPHEN HAWKING - THE UNIVERSE IN A NUTSHELL"
console.log(correct("ERNE5T HEM1NGWAY - A FARWELL T0 ARM5")); // should return "ERNEST HEMINGWAY - A FARWELL TO ARMS"
console.log(correct("ERNE5T HEM1NGWAY - F0R WH0M THE BELL T0LL5")); // should return "ERNEST HEMINGWAY - FOR WHOM THE BELL TOLLS"
console.log(correct("ERNE5T HEM1NGWAY - THE 0LD MAN AND THE 5EA")); // should return "ERNEST HEMINGWAY - THE OLD MAN AND THE SEA"
console.log(correct("J. R. R. T0LK1EN - THE L0RD 0F THE R1NG5")); // should return "J. R. R. TOLKIEN - THE LORD OF THE RINGS"
console.log(correct("J. D. 5AL1NGER - THE CATCHER 1N THE RYE")); // should return "J. D. SALINGER - THE CATCHER IN THE RYE"
console.log(correct("J. K. R0WL1NG - HARRY P0TTER AND THE PH1L050PHER'5 5T0NE")); // should return "J. K. ROWLING - HARRY POTTER AND THE PHILOSOPHER'S STONE"
console.log(correct("J. K. R0WL1NG - HARRY P0TTER AND THE CHAMBER 0F 5ECRET5")); // should return "J. K. ROWLING - HARRY POTTER AND THE CHAMBER OF SECRETS"
console.log(correct("J. K. R0WL1NG - HARRY P0TTER AND THE PR150NER 0F Azkaban")); // should return "J. K. ROWLING - HARRY POTTER AND THE PRISONER OF Azkaban"
console.log(correct("J. K. R0WL1NG - HARRY P0TTER AND THE G0BLET 0F F1RE")); // should return "J. K. ROWLING - HARRY POTTER AND THE GOBLET OF FIRE"
console.log(correct("J. K. R0WL1NG - HARRY P0TTER AND THE 0RDER 0F PH0EN1X")); // should return "J. K. ROWLING - HARRY POTTER AND THE ORDER OF PHOENIX"
console.log(correct("J. K. R0WL1NG - HARRY P0TTER AND THE HALF-BL00D PR1NCE")); // should return "J. K. ROWLING - HARRY POTTER AND THE HALF-BLOOD PRINCE"
console.log(correct("J. K. R0WL1NG - HARRY P0TTER AND THE DEATHLY HALL0W5")); // should return "J. K. ROWLING - HARRY POTTER AND THE DEATHLY HALLOWS"
console.log(correct("UR5ULA K. LE GU1N - A W1ZARD 0F EARTH5EA")); // should return "URSULA K. LE GUIN - A WIZARD OF EARTHSEA"
console.log(correct("UR5ULA K. LE GU1N - THE T0MB5 0F ATUAN")); // should return "URSULA K. LE GUIN - THE TOMBS OF ATUAN"
console.log(correct("UR5ULA K. LE GU1N - THE FARTHE5T 5H0RE")); // should return "URSULA K. LE GUIN - THE FARTHEST SHORE"
console.log(correct("UR5ULA K. LE GU1N - TALE5 FR0M EARTH5EA")); // should return "URSULA K. LE GUIN - TALES FROM EARTHSEA"
