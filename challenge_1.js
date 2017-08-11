// Looping a Triangle
//
// var hash = '#'
//
// for (var i = 0; i < 7; i++) {
//   console.log(hash)
//   hash = hash + '#'
// }

// FizzBuzz
//
// for (var i = 0; i < 101; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz')
//   } else if (i % 3 === 0) {
//     console.log('Fizz')
//   } else if (i % 5 === 0) {
//     console.log('Buzz')
//   } else {
//     console.log(i)
//   }
// }

// Chessboard

// var hashSpace = '# '
// var spaceHash = ' #'
// var row = ''
// var size = 8
//
// for (var i = 0; i < size; i++) {
//   for (var q = 0; q < size / 2; q++) {
//     if (i % 2 === 0) {
//       row = row + hashSpace
//     } else {
//       row = row + spaceHash
//     }
//   }
//   console.log(row)
//   row = ''
// }

// reorder array
//
// var arr = [1, 2, 3, 4, 5]
//
// function toEnd (list, from, count) {
//   list.push.apply(list, list.splice(from, count))
//   return list
// }
//
// console.log(toEnd(arr, 2, 1))
