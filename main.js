var randomNumber1=(Math.floor(Math.random()*6)+1);

var randomNumber2=(Math.floor(Math.random()*6)+1);
// document.getElementsByClassName('img1').src(`./images/dice${randomNumber1}.png`);
document.querySelector('img','.img1').setAttribute('src' ,`./images/dice${randomNumber1}.png`);


document.querySelector('.img2').setAttribute('src' ,`./images/dice${randomNumber2}.png`);

if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML='Play 1 Wins!';
    document.querySelector('h1').style.color='yellow';
}
else if(randomNumber1<randomNumber2){
    document.querySelector('h1').innerHTML='Play 2 Wins!';
    document.querySelector('h1').style.color='yellow';
}
else{
    document.querySelector('h1').innerHTML='Draw!';
    document.querySelector('h1').style.color='#D80032';
}


function fun(){
    location.reload();
}

document.querySelector('footer').innerHTML=`CopyRight🎲Elharba🎲${new Date().getFullYear()}`