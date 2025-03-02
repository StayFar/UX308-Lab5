// 2) Given the  **width of a lawn in metres**, **length of a lawn in metres** and the **square metres cut per minute** *calculate* the **minutes it would take to mow that lawn**.


function calculateMowingTime(width, length, cutRate) {
    let lawnArea = width * length;
    return lawnArea / cutRate;
 }
 
 
 export { calculateMowingTime }