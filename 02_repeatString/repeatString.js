
const repeatString = function(str, times) {

    if (times < 0) {
        return "ERROR"
    }

    let returnValue = "";

    for(let i=0; i<times;i++){
        returnValue += str;
    }


    return returnValue;
}


//     while (times<0) {
//     return "ERROR"
//     }
//     let returnValue = "";
//     let i = 0;
//     while (i<times) {
        
//         returnValue += str;
//         i++;
//     }
//     return returnValue
// }


//     while (i = times; i > 0 ; ++i) {
//         str+= str
//     }
    
//     return str;
// };


    // let i=0;
    // while(i<times){


    //     i++;
    // }


//     let heyString = ""
//     for (i = 0; i < 10; ++i) {
//         heyString+= "hey"
//     }
//     return heyString



    // let heyString = "hey"
    // return heyString

// let heystring = "";
// for (i=0; i===0; ++i) {
//     return heystring
// }





// if else {
//     i = 0
//     if (i > 0) {
//         heyString += "hey"
//     }
//         else {
//             heyString = "ERROR"
//             return heyString }
//         }
        





    // let heyString = "";
    

    
    





// Do not edit below this line
module.exports = repeatString;

