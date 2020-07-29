// Написати функцију која враћа максимум од 3 броја (параметри функције су 3 броја)

// function maxValue(x, y, z) {
//     return Math.max(x, y, z);
// }
// console.log(maxValue(3, -150, 50));

 function maxValue(x, y, z) {
     if(x >= y && x >= z) {
         return x;
     } else if (y >= x && y >= z) {
         return y;
     } else {
         return z;
     }
 }
 console.log(maxValue(3, -150, 50))

//Jos uvek nisam skapirala kako da uradim sa Math.min, kao sto je Cvijan rekao ...

