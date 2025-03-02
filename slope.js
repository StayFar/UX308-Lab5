// 5) *Calculate* the **slope** of a line. 
// **Slope** is calculated as **rise / run**, where **rise** is the distance between **y coordinates**, 
// and **run** is the distance between **x coordinates**. 
// Use: slp = slope(x1, y1, x2, y2)


function slope(x1, y1, x2, y2) {
    if (x1 === x2) {
        throw new Error("Undefined slope (vertical line)");
    }
    return (y2 - y1) / (x2 - x1);
 }
 
 
 export { slope }