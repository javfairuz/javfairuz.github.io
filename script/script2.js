
function guessNumber(){
    alert ('you have 3 chance')
    var AI = [Math.floor(Math.random() * 10) + 1];
        // debuging console
console.log(AI)
        // tebakan player

    var p;
    p = prompt('choose number between 1-10');
 
        for(i=0; i<2 ; i++){
            if (p == AI ){
                alert(p + ' BENAR!!!')
                alert('kau hebat')
                break;

            }else if (p >AI) {
              p =  prompt(p + ' terlalu rendah \n coba lagi');
            }else if( p < AI ){
                p = prompt(p + ' terlalu rendah \n coba lagi');
            }else {
                alert('Error!')
                p = prompt('Error!! \n coba lagi');
            }
            
    }
}