
{
let count = 0;
let i = 1;

while(true) {
    if(i % 5 === 0){
        console.log(i)
        count++
    } 
    if(count === 1000){
        break
    }
    i++
}
}

for(let count = 0, i = 1; count < 1000; i++) {
    if(i % 5 === 0){
     console.log(i)
     count++
    }
}
