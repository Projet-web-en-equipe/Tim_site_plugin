var groupeImg = document.getElementsByClassName("imgGalerie");
var ctnGalerie = document.getElementById("ctnGalerie");
console.log(groupeImg.length);
for(i=0; i < groupeImg.length; i++){
    //groupeImg[i].style.left = "50%";
    //groupeImg[i].style.marginLeft = groupeImg[i].clientWidth / -2 + "px"
    groupeImg[i].style.zIndex = (groupeImg.length - 1 - i)*1000 + 1000 + "";
    // groupeImg[i].style.transformOrigin = ctnGalerie.getBoundingClientRect().x 
    console.log(groupeImg[i].parentNode);
    // if(groupeImg[i].parentNode.parentNode.parentNode.classlist == "ctnInutile"){
    //     console.log("kill da hoe");
    // }
}