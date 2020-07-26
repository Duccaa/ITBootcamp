// Ispisati Mario piramidu odre]ene visine
// za n = 5
/*
    # # 
   ## ##
  ### ###
 #### ####
##### #####    
*/
 let n = 5;
 let br = 0;
 for(let i = 1, j = n; i <= n, j > 0; i++, j--) {
     let red = ' '.repeat(j) + '#'.repeat(i) + ' ' + '#'.repeat(i);
    console.log(red);
    br++; 
 }