const palindromes = function (str) {

    let upperStr = str.replace(/\W/g, '').toUpperCase();
    let reverseStr = ""
    for (let i = upperStr.length - 1; i >= 0; i--) {
        reverseStr += upperStr[i]

    }
    return upperStr == reverseStr


};

// Do not edit below this line
module.exports = palindromes;
