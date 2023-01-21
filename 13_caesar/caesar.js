const caesar = function (str, num) {
    let asciiArr = [];
    for (let i = 0; i < str.length; i++) {
        let ascii = str.charCodeAt(i);                       
        asciiArr.push(ascii);                                 //get ascii of character + add to array
    }
    for (let i2 = 0; i2 < asciiArr.length; i2++) {
        if ( (64 < asciiArr[i2] && asciiArr[i2] < 91) || (96 < asciiArr[i2] && asciiArr[i2] < 123) ) {      //uppercase or lowercase check
            let restartFromBase 
            if (asciiArr[i2] >= 65 && asciiArr[i2] <= 90) {
                restartFromBase = 65}                          // if uppercase, base = 65
                else {
                    restartFromBase = 97                       // if lowercase, base = 97
                }
                asciiArr[i2] = ((asciiArr[i2] - restartFromBase + num +26) % 26) + restartFromBase   //E - 26    shift by num, wrap, neg number
            }
            asciiArr[i2] = String.fromCharCode(asciiArr[i2])     // convert ascii to normal letters
        }
        return asciiArr.join('');    // add characters together
    }
    ;

// Do not edit below this line
module.exports = caesar;
