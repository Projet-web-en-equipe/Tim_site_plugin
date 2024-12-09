var flecheG = document.getElementById("flecheG");
var flecheD = document.getElementById("flecheD");
var ordre = [];
var enAnim = false;

//arranger le zindex des images dans la galerie selon l'ordre
function setZImg() {
    for (var i = 0; i < groupeImg.length; i++) {
        groupeImg[i].style.zIndex = ordre[i] * 1000 + 1000;
    }
}

document.body.addEventListener('click', function (event) {
    setZImg();
    //chercher toute les classes de ce qui a ete toucher
    event.target.classList.forEach(element => {
        //si cest la fleche droite:
        if (element == "D") {
            //si l'animation des images qui change n'est pas en cours
            if (!enAnim) {
                enAnim = true;
                //ajouter a la premiere image la class qui a l'animation css 
                groupeImg[ordre.indexOf(groupeImg.length - 1)].classList.add("skip");
                //lorsque l'anim est fini:
                window.setTimeout(() => {
                    //enlever a la premiere image la class qui a l'animation css 
                    groupeImg[ordre.indexOf(groupeImg.length - 1)].classList.remove("skip");
                    //enlever le dernier chiffre de l'ordre et l'enregistrer
                    var bhay = ordre.pop();
                    //remettre le chiffre enregistrer au debut de l'ordre
                    ordre.unshift(bhay);
                    setZImg();
                    enAnim = false;
                }, 1500)
            } else {
                console.log("nuh uh");
            }
        }
        //si cest la fleche gauche:
        if (element == "G") {
            //si l'animation des images qui change n'est pas en cours
            if (!enAnim) {
                enAnim = true;
                //ajouter a la premiere image la class qui a l'animation css 
                groupeImg[ordre.indexOf(0)].classList.add("avant");
                window.setTimeout(() => {
                    groupeImg[ordre.indexOf(0)].classList.remove("avant");
                    //elever le premier chiffre et l'enregistrer
                    var bhay = ordre.shift();
                    //remettre le chiffre enregistrer a la fin
                    ordre.push(bhay);
                    setZImg();
                    enAnim = false;
                }, 1500)
            } else {
                console.log("nuh uh");
            }
        }
    });
});