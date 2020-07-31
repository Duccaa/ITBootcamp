// Написати функцију која исписује све елементе низа који су дељиви са 5

let set = [7, 5, -10, -4, 13, 15, 20, 5];

function printDivisibleBy5 (arr) {
    let divisible = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 5 === 0) {
           divisible.push(arr[i]);
        }
    }
    console.log(`The following numbers from a set are divisible by 5: ${divisible}`);
    console.log(divisible);
}
printDivisibleBy5(set);
