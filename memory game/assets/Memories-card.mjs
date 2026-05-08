var allEmojis = ['🍎', '🍎', '🍓', '🍓', '🍉', '🍉', '🍟', '🍟', '🍒', '🍒', '🌶', '🌶'];
(function(){
    //met les emojis dans les cases
    for(let i = 0; i < 12; i++){
        var x = Math.trunc(Math.random()*allEmojis.length);
        if(allEmojis[x] === undefined){
            while(allEmojis[x] === undefined){
                x = Math.trunc(Math.random()*allEmojis.length);
            }
        }
        //ajoute l'emoji
        document.querySelectorAll('.card')[i].children[0].textContent = allEmojis[x];
        //met l'id
        document.querySelectorAll('.card')[i].id = `card[${i}]`;
        delete allEmojis[x];
    }
})();
/*
Id des carte : 
  card1 / card2 / card3
  card4 / card5 / card6
  card7 / card8 / card9
*/
var count = 0;
var idEmojis = [];
var result;
function CheckCard(){
    if(this.id !== 'already-played'){
        if(idEmojis.includes(this.id)){
            console.log('Already played');
        }else{
            count++;
            //met l'id de la carte dans le tableau
            idEmojis.push(this.id);
            //met le span de la carte en opacity 1
            document.getElementById(this.id).children[0].style.opacity = '1';
            //chek si les carte sont les mêmes
            if(count === 2){
                result = document.getElementById(idEmojis[0]).children[0].textContent === document.getElementById(idEmojis[1]).children[0].textContent ? 'Win' : 'Nope';
                //affcihe le resultat
                document.querySelectorAll('h3')[0].textContent = result;
                if(result === 'Win'){
                    for (let i = 0; i < idEmojis.length; i++) {
                        document.getElementById(idEmojis[i]).id = 'already-played';
                    }
                }else{
                    setTimeout(()=>{
                        for (let i = 0; i < 2; i++) {
                            document.getElementById(idEmojis[i]).children[0].style.opacity = '0';
                        }
                    }, 200);
                }
            }
        }
    }else{
        console.log('Already played');
    }
    setTimeout(()=>{
        //reset les result
        if(count === 2){
            count = 0;
            idEmojis = [];
            result = '';
        } 
    }, 205);
    //check le nombre de result
    let x = 0;
    for (let i = 0; i < 12; i++) {
        if(document.querySelectorAll('.card')[i].id === 'already-played'){
            x++;
        }else{
        }
    }
    if(x === 12){
        document.querySelectorAll('h3')[0].textContent = 'You found all cards';
        document.getElementById('replay-btn').style.display = 'inline-block';
    }
}
//onclick du h3
document.querySelectorAll('h3')[0].onclick = ()=>{
    document.querySelectorAll('h3')[0].onclick = undefined;
    for (let i = 0; i < 12; i++) {
        document.querySelectorAll('.card')[i].children[0].style.opacity = '1';
    }
    var number_time = 4;
    x = setInterval(()=>{
        number_time--;
        document.querySelectorAll('h3')[0].textContent = `Memorize, time left : ${number_time}s`;
        if(number_time === 0){
            clearInterval(x);
            document.querySelectorAll('h3')[0].textContent = `Go !!!`;
            for (let i = 0; i < 12; i++) {
                document.querySelectorAll('.card')[i].children[0].style.opacity = '0';
                //met la fontion sur les cartes
               document.querySelectorAll('.card')[i].onclick = CheckCard;
            }
        }
    }, 1000);
};