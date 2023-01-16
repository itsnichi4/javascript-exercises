const palindromes = function (str) {

    let cleanStr = str.replace(/\W/g, '');
    let upperStr = cleanStr.toUpperCase()
    let reverseStr = ""
    for (let i = upperStr.length - 1; i >= 0; i--) {
        reverseStr += upperStr[i]

    }

    if (upperStr != reverseStr) {
        return false
    }
    else {
        return true
    }


};

// Do not edit below this line
module.exports = palindromes;
