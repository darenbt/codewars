// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

// My solution:
function include(arr, item){
  return arr.indexOf(item)<0 ? false : true;
}

// Best practice with .includes (duh!):
function include(arr, item){
  return arr.includes(item);
}
