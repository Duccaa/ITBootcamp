//Ispisati Mario piramidu odredjene visine
// Za n = 5
/*
    # 
   ##
  ###
 ####
#####    
*/
let n = 5;
let br = 0;
for(let i = 1, j = n; i <= n, j > 0; i++, j--) {
    let red = ' '.repeat(j) + '#'.repeat(i);
    if (br < n) {
        console.log (red);
        br++
    }
}
