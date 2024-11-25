var flecheG = document.getElementById("flecheG");
var flecheD = document.getElementById("flecheD");
var ordre = [];
var enAnim = false;

function ordonnerOrdre(){
    for (i = 0; i < groupeImg.length; i++) {
        console.log("OWAEDKJWO");
        var bhay = (groupeImg.length - 1 - i);
        ordre.push(bhay);
    }
}

function setZImg() {
    for (var i = 0; i < groupeImg.length; i++) {
        groupeImg[i].style.zIndex = ordre[i] * 1000 + 1000;
    }
    enAnim = false;
}

document.body.addEventListener('click', function (event) {
    event.target.classList.forEach(element => {
        if (element == "D") {
            if (!enAnim) {
                enAnim = true;
                console.log(ordre);
                console.log(ordre.indexOf(groupeImg.length));
                groupeImg[ordre.indexOf(groupeImg.length - 1)].classList.add("skip");
                window.setTimeout(() => {
                    groupeImg[ordre.indexOf(groupeImg.length - 1)].classList.remove("skip");
                    var bhay = ordre.pop();
                    ordre.unshift(bhay);
                    console.log(ordre)
                    setZImg();
                }, 1500)
            } else {
                console.log("nuh uh");
            }
        }
        if (element == "G") {
            if (!enAnim) {
                enAnim = true;
                groupeImg[ordre.indexOf(0)].classList.add("avant");
                window.setTimeout(() => {
                    groupeImg[ordre.indexOf(0)].classList.remove("avant");
                    var bhay = ordre[0];
                    ordre.shift();
                    ordre.push(bhay);
                    console.log(ordre)
                    setZImg();
                }, 1500)
            } else {
                console.log("nuh uh");
            }
        }
    });
});