var groupeImg = document.getElementsByClassName("imgGalerie");

for(i=0; i < groupeImg.length; i++){
    groupeImg[i].style.left = "50%";
    groupeImg[i].style.marginLeft = groupeImg[i].clientWidth / -2 + "px"
    groupeImg[i].style.zIndex = i + "";
}