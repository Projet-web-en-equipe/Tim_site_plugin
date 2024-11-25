var groupeImg;
var ctnGalerie = document.getElementById("ctnGalerie");

window.addEventListener("load", function(event) {
    groupeImg = document.getElementsByClassName("imgGalerie");
    for(var i = 0; i < groupeImg.length; i++){
        console.log("positionner");
        groupeImg[i].style.zIndex = (groupeImg.length - 1 - i)*1000 + 1000 + "";
        console.log(groupeImg[i].parentNode);
    }
    ordonnerOrdre();
});