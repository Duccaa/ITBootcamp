// Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање
// Уноси се колико пице поједете на месечном нивоу, и колико година имате (Рачуна се да је довољно достављати до стоте године)

{
function pizzaLifeSupply(numPerMonth, age) {
    let sum = 0;
    let numPerYear = numPerMonth * 12;
    while(age < 100) {
       sum += numPerYear;
       age++;
    } 
    return sum;
}
console.log(pizzaLifeSupply(10, 26));
}
{
function pizzaLifeSupply(numPerMonth, age) {
    let sum = 0;
    let numPerYear = numPerMonth * 12;
    for(age; age < 100; age++) {
        sum += numPerYear;
    }
    return sum;
}
console.log(pizzaLifeSupply(10, 26));
}