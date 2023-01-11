const fibonacci = function (num) {
    let firstNum = 0
    let secondNum = 1

    nextNum = firstNum + secondNum
    if (num > 0) {
        for (i = 0; i < num - 2; i++) {// because the first and second numbers are already written (firstNum, secondNum)
            firstNum = secondNum
            secondNum = nextNum
            nextNum = firstNum + secondNum

        }
        return nextNum
    }
    else return "OOPS"

};
console.log(fibonacci)
// Do not edit below this line
module.exports = fibonacci;
