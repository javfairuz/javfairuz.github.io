
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
                alert(p + '  that\'s right')
                alert('you GG')
                break;

            }else if (p >AI) {
              p =  prompt(p + ' too high \n try again');
            }else if( p < AI ){
                p = prompt(p + ' too low \n try again');
            }else {
                alert('Error!')
                p = prompt('error!! \n try again');
            }
            
    }
}
            

