// function multiplier (factor) {
//   return function (number) {
//     return number * factor
//   }
// }
//
// var twice = multiplier(3)
//
// console.log(twice(6))

// function sayHello (name) {
//   var text = 'Hello ' + name
//   var say = function () { console.log(text) }
//   return say
// }
//
// var say1 = sayHello('Jon')
// var say2 = sayHello('Bob')
// say1()
// say2()

// function findSolution (target) {
//   function find (start, history) {
//     if (start === target) {
//       return history
//     } else if (start > target) {
//       return null
//     } else {
//       return find(start + 5, '(' + history + ' + 5)') || find(start * 3, '(' + history + ' * 3)')
//     }
//   }
//   return find(1, '1')
// }
//
// console.log(findSolution(24))
