var flecheG = document.getElementById("flecheG");
var flecheD = document.getElementById("flecheD");
var ordre = [];
var enAnim = false;

function setZImg() {
    for (var i = 0; i < groupeImg.length; i++) {
        groupeImg[i].style.zIndex = ordre[i] * 1000 + 1000;
    }
}

document.body.addEventListener('click', function (event) {
    setZImg();
    event.target.classList.forEach(element => {
        if (element == "D") {
            if (!enAnim) {
                enAnim = true;
                groupeImg[ordre.indexOf(groupeImg.length - 1)].classList.add("skip");
                window.setTimeout(() => {
                    groupeImg[ordre.indexOf(groupeImg.length - 1)].classList.remove("skip");
                    var bhay = ordre.pop();
                    ordre.unshift(bhay);
                    setZImg();
                    enAnim = false;
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
                    setZImg();
                    enAnim = false;
                }, 1500)
            } else {
                console.log("nuh uh");
            }
        }
    });
});