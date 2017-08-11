// Basic Closure is a nested function that will have access to its parents variables even when scope closed

// function speak() {
//   var words = 'hi';
//   return function logIt() {
//     console.log(words);
//   }
// }
// var sayHello = speak()
// sayHello()

function name (n) {
  return function (a) {
    return `${n} likes ${a}`
  }
}

var j = name('jon')
var c = name('cindy')

console.log(j('dogs'))
console.log(c('cats'))
