var flecheG = document.getElementById("flecheG");
var flecheD = document.getElementById("flecheD");
var ordre = [];

console.log(groupeImg)

for(i=0; i < groupeImg.length; i++){
    var bhay = (groupeImg.length - 1 - i);
    ordre.push(bhay);
}
console.log(ordre)

flecheG.addEventListener("click", () => {
    var bhay = ordre[0];
    ordre.shift();
    ordre.push(bhay);
    console.log(ordre)
    setZImg();
});

flecheD.addEventListener("click", () => {
    var bhay = ordre.pop();
    ordre.unshift(bhay);
    console.log(ordre)
    setZImg();
});

document.addEventListener("keydown", (e)=>{
    if(e.code == "Space"){
        groupeImg[ordre.indexOf(2)].classList.add("skip");
        window.setTimeout(() => {
            groupeImg[ordre.indexOf(2)].classList.remove("skip");
        }, 1500)
    }
})

function setZImg(){
    for(var i = 0; i < groupeImg.length; i++){
        groupeImg[i].style.zIndex = ordre[i];
    }
}