var groupeImg = []; 
var ctnGalerie;
var lesImg;

//window.addEventListener("load", appliquerImg);

function appliquerImg(){
    //on va chercher toutes les images dans la categorie
    lesImg = document.getElementsByClassName("imgGalerie");
    //on va chercher le conteneur de la galerie
    ctnGalerie = document.getElementById("ctnGalerie");
    //reset le array des image a chaque fois quon remplace les images
    groupeImg = [];
    //pour toutes les images qui ont ete chercher:
    for(var i = 0; i < lesImg.length; i++){
        if(lesImg[i].firstChild != null){
        //on ditch le parent de l'image pour uniquement avoir la balise IMG dans le array
        console.log(lesImg[0].firstChild);
        groupeImg.push(lesImg[i].firstChild);
        //on leur donne leur zindex initial
        lesImg[i].firstChild.style.zIndex = (lesImg.length - 1 - i)*1000 + 1000 + "";
        //on met l'image dans le conteneur des images
        ctnGalerie.appendChild(lesImg[i].firstChild);
        }
        else{
            console.log("sa pue...");
        }
    }
    ordonnerOrdre();
}

//simple fonction pour arranger l'ordre des images a chaque reset
function ordonnerOrdre(){
    ordre = [];
    for (i = 0; i < groupeImg.length; i++) {
        var bhay = (groupeImg.length - 1 - i);
        ordre.push(bhay);
    }
}