var flecheG = document.getElementById("flecheG");
var flecheD = document.getElementById("flecheD");
var ordre = [];

for(i=0; i < groupeImg.length; i++){
    var bhay = i;
    ordre.push(bhay);
}

flecheG.addEventListener("click", () => {
    var bhay = ordre[0];
    ordre.shift();
    ordre.push(bhay);
    for(i=0; i < groupeImg.length; i++){
        groupeImg[i].style.zIndex = ordre[i] + "";
    }
});

flecheD.addEventListener("click", () => {
    var bhay = ordre.pop();;
    ordre.unshift(bhay)
    for(i=0; i < groupeImg.length; i++){
        groupeImg[i].style.zIndex = ordre[i] + "";
    }
});