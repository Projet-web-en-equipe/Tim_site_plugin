var groupeImg = [];
var ctnGalerie;
var lesImg;

window.addEventListener("load", appliquerImg);

function appliquerImg(){
    lesImg = document.getElementsByClassName("imgGalerie");
    ctnGalerie = document.getElementById("ctnGalerie");
    groupeImg = [];
    for(var i = 0; i < lesImg.length; i++){
        groupeImg.push(lesImg[i].firstChild);
        lesImg[i].firstChild.style.zIndex = (lesImg.length - 1 - i)*1000 + 1000 + "";
        ctnGalerie.appendChild(lesImg[i].firstChild);
    }
    ordonnerOrdre();
}

function ordonnerOrdre(){
    ordre = [];
    for (i = 0; i < groupeImg.length; i++) {
        var bhay = (groupeImg.length - 1 - i);
        ordre.push(bhay);
    }
}