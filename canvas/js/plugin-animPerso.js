console.log("ANMPERSO");
var pseudoPerso =  document.getElementById("perso");
var pseudoVitesse = 3;
var pseudoVal = -1300;
var pseudoCanvas = document.querySelector("canvas");

var tempsAnim = setInterval(fonctionAnim, 1000 / 60);

function fonctionAnim(){
    console.log(pseudoCanvas.getBoundingClientRect().y + listePoints[0].y * (pseudoCanvas.getBoundingClientRect().height / 900) - pseudoPerso.height);
    if(pseudoVal <= 0){
        pseudoVal += pseudoVitesse;
        pseudoPerso.style.transform = "RotateZ(" + pseudoVal * pseudoVitesse + "deg) scale(" + leCanvas.zoom * 100 + "%)"
        pseudoPerso.style.left = checkXPerso() + "px";
        pseudoPerso.style.top = checkYPerso() + pseudoVal + "px";
    } else {
        pseudoVal = 0;
        pseudoPerso.style.display  = "none";
        clearInterval(tempsAnim);
        perso.surIle = true;
    }
}

function checkXPerso(){
    var bhay = (pseudoCanvas.getBoundingClientRect().x + listePoints[0].x * (pseudoCanvas.getBoundingClientRect().width / 900) - pseudoPerso.width / 2);
    return bhay;
}

function checkYPerso(){
    var bhay2 = (pseudoCanvas.getBoundingClientRect().y + listePoints[0].y * (pseudoCanvas.getBoundingClientRect().height / 900) - pseudoPerso.height);
    return bhay2;
}
