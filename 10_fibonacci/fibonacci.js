const fibonacci = function (num) {
    let firstNum = 0
    let secondNum = 1

    nextNum = firstNum + secondNum
    if (num <= 0) return "OOPS";
    else {
        for (i = 0; i < num - 2; i++) {// because the first and second numbers are already written (firstNum, secondNum)
            firstNum = secondNum
            secondNum = nextNum
            nextNum = firstNum + secondNum

        }
        return nextNum;
    }

};
// Do not edit below this line
module.exports = fibonacci;
