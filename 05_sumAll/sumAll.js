const sumAll = function (x, y) {
    let sum = 0

    if (typeof x !== 'number' || typeof y !== 'number' || x < 0 || y < 0) {
        return 'ERROR';
    }

    if (x > y) {
        [x, y] = [y, x];
    }

    for (let i = x; i <= y; i++) {
        sum += i
    }
    return sum

}












//     if (x < 0 || y < 0 || (isNaN(x)) || (isNaN(y))) {
//         return "ERROR"
//     }
//     else {
//         if (x < y) {
//             let n = x + y
//             let sum = 0
//             for (x > 0, y > 0; times = y; i++) {
//                 sum += (n * times) / 2
//                 return sum
//             }

//         }
//         else {
//             let n = x + y
//             let sum = 0
//             for (x > 0, y > 0; times = x; i++) {
//                 sum += (n * times) / 2
//                 return sum
//             }
//         }
//     }
// }













// if (x > 0, y > 0) {
//     if  (x < y) {
// let n = x + y
// let sum = 0
//     sum += (n * y) / 2
//     return sum
// }

//     else {
//     let n = x + y
//     let sum = 0
//     sum += (n * x) / 2
//     return sum
//     }
// }
// else {
//     sum = "ERROR"
//     return sum

// }
// }
// console.log(sumAll);
// x(x+1)/2

// Do not edit below this line
module.exports = sumAll;
