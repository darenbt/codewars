//Complete the solution so that it reverses the string passed into it.

function solution(str){
  return str.split('').reverse().join('');
}

console.log(solution('world') //should equal 'dlrow'
console.log(solution('hello') //should equal 'olleh'
console.log(solution('') //should equal ''
console.log(solution('h') //should equal 'h'
