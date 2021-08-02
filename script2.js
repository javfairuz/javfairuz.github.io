
function guessNumber(){
    alert ('Kamu Punya 3 kesempatan')
    var AI = [Math.floor(Math.random() * 10) + 1];
        // debuging console
console.log(AI)
        // tebakan player

    var p;
    p = prompt('Pilih lah salah satu angka dari  1-10');
 
        for(i=0; i<3 ; i++){
            if (p == AI ){
                alert(p + ' BENAR!!!')
                alert('kau hebat')
                break;

            }else if (p >AI) {
              p =  prompt(p + ' terlalu rendah \n coba lagi');
            }else if( p < AI ){
                p = prompt(p + ' terlalu tinggi \n coba lagi');
            }else {
                alert('Error!')
                p = prompt('Error!! \n coba lagi');
            }
            
    }
}
