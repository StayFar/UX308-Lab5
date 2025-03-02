// 4) **yee_ha** *takes* an **integer parameter** and *returns* one of the following strings:
// "**Yee**" if **number** is evenly divisible by 3
// "**Ha**" if **number** is evenly divisible by 7
// "**Yee Ha**" if **number** is evenly divisible by both 3 and 7
// "**Nada**" if **number** is none of the above


function yee_ha(number) {
    if (number % 3 === 0 && number % 7 === 0) {
        return "Yee Ha";
    } else if (number % 3 === 0) {
        return "Yee";
    } else if (number % 7 === 0) {
        return "Ha";
    } else {
        return "Nada";
    }
 }
 
 
 export { yee_ha }