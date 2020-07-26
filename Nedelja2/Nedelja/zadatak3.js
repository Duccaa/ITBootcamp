// ispisati Mario piramidu određene visine za n = 5
/*
#
##
###
####
#####
*/

let n = 5;
let br = 0;
let i = 1;
for (; i <= n; i++) {
    let red ='#'.repeat(i);
    if (br < n) {
        console.log(red);
        br++;
    }
} 
  