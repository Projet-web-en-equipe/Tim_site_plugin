////////////////VARIABLES DE DEPART//////////////////

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
//variable des coorconnees
var listePoints = [
  {
    x: 400,
    y: 400,
    xPoint: 300,
    yPoint: 280,
    xInitBulle: 230,
    yInitBulle: 80,
    xBulle: 230,
    yBulle: 80,
    varAnim: 0,
    rayon: 120,
    couleur: "rgb(255, 0, 0)",
    tag: "Évènements",
    lien: "category/evenements", // remplace par l'URL de la catégorie Projets
  },
  {
    x: 570,
    y: 385,
    xPoint: 650,
    yPoint: 210,
    xInitBulle: 570,
    yInitBulle: 50,
    xBulle: 570,
    yBulle: 50,
    varAnim: 0,
    rayon: 160,
    couleur: "rgb(255, 0, 0)",
    tag: "Cours",
    lien: "category/cours", // remplace par l'URL de la catégorie Cours
    hover: false,
  },
  {
    x: 640,
    y: 550,
    xPoint: 670,
    yPoint: 485,
    xInitBulle: 600,
    yInitBulle: 320,
    xBulle: 600,
    yBulle: 320,
    varAnim: 0,
    rayon: 105,
    couleur: "rgb(255, 0, 0)",
    tag: "Projets",
    lien: "category/projets", // remplace par l'URL de la catégorie Profs
    hover: false,
  },
  {
    x: 550,
    y: 700,
    xPoint: 555,
    yPoint: 760,
    xInitBulle: 475,
    yInitBulle: 450,
    xBulle: 475,
    yBulle: 450,
    varAnim: 0,
    rayon: 135,
    couleur: "rgb(255, 0, 0)",
    tag: "Futur",
    lien: "category/futur", // remplace par l'URL de la catégorie Emplois
    hover: false,
  },
  {
    x: 350,
    y: 670,
    xPoint: 340,
    yPoint: 575,
    xInitBulle: 250,
    yInitBulle: 385,
    xBulle: 250,
    yBulle: 385,
    varAnim: 0,
    rayon: 110,
    couleur: "rgb(255, 0, 0)",
    tag: "Vie etudiante",
    lien: "category/vie-etudiante", // remplace par l'URL de la catégorie Évènements
    hover: false,
  },
  {
    x: 210,
    y: 500,
    xPoint: 110,
    yPoint: 480,
    xInitBulle: 25,
    yInitBulle: 280,
    xBulle: 25,
    yBulle: 280,
    varAnim: 0,
    rayon: 100,
    couleur: "rgb(255, 0, 0)",
    tag: "Profs",
    lien: "category/profs", // remplace par l'URL de la catégorie Vie étudiante
    hover: false,
  },
];
//variable du personnage
var perso = {
  img: new Image(),
  urlImage:
    "https://gftnth00.mywhc.ca/tim14/wp-content/uploads/2024/10/EricG.png",
  x: 0,
  y: 0,
  largeur: 75,
  hauteur: 101,
  vitesse: 5,
  vitesseAnim: 5,
  indexAnim: 0,
  taille: 20,
  pos: 0,
  nbVignettes: 4,
  indexVignette: 0,
  sourceX: 0,
  gauche: false,
  surIle: false,
};
perso.img.src = perso.urlImage;
//position init perso
perso.x = listePoints[perso.pos].x;
perso.y = listePoints[perso.pos].y;
//image bulle info
var bulle = {
  img: new Image(),
  urlImage: "https://gftnth00.mywhc.ca/tim14/wp-content/uploads/2024/11/caca.png",
  active: true,
  posX: 450,
  posY: 450,
  width: 100,
  height: 50,
}
bulle.img.src = bulle.urlImage;
//le guide
var guide = {
  img: new Image(),
  urlImage:
    "https://gftnth00.mywhc.ca/tim14/wp-content/uploads/2024/10/grille_Ile.png",
};
guide.img.src = guide.urlImage;
//le renderer du canvas
var render = setInterval(renderer, 1000 / 60);
//bool qui detecte si le canvas doit etre afficher
var isGuide = false;
//bool debug cercle rouge
var isRouge = false;
//bool qui detecte si le personnage bouge
var enMouvement = false;
//depart de la liste des points a lequelles le perso devra aller
var cheminPerso = [];
//la position ou le perso doit aller
var destination = 0;
//le nuage qui devra rester jusqu'a ce qu<un autre nuage se fasse activer
var nuageActif = "";
//TEST
// var vPoint = 2;

/////////////////CODE QUI SE REFRESH EN BOUCLE//////////////////////

//fonction qui render l'ile
function renderer() {
  // tout effacer
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //dessiner les nuages en permanence pendant l'animation du debut
  if (!perso.surIle) {
    listePoints.forEach((point) => {
      //si le nuage bouge assez bas 
      ctx.drawImage(bulle.img, point.xBulle, point.yBulle);
      // if(point.varAnim > - 5){
      //   ctx.globalAlpha = 1;
      // }
      //mettre le texte
      ctx.strokeStyle = "rgb(200, 184, 190)"; //set the color of the stroke line 
      ctx.lineWidth = 0.5;  //define the width of the stroke line
      ctx.font = "22px hwt-artz";
      ctx.fillText(point.tag, point.xBulle + (150 - ctx.measureText(point.tag).width) / 2, point.yBulle + bulle.height + 20);
      ctx.strokeText(point.tag, point.xBulle + (150 - ctx.measureText(point.tag).width) / 2, point.yBulle + bulle.height + 20);
    });
  }
  //dessiner les cercles
  if (isRouge) {
    listePoints.forEach((circle) => {
      ctx.beginPath();
      ctx.globalAlpha = 0.5;
      ctx.arc(circle.xPoint, circle.yPoint, circle.rayon, 0, 2 * Math.PI);
      ctx.fillStyle = circle.couleur;
      ctx.fill();
      ctx.globalAlpha = 1;
    });
  }
  //dessiner perso
  if (perso.surIle) {
    ctx.drawImage(
      perso.img,
      perso.sourceX,
      0,
      perso.largeur,
      perso.hauteur,
      perso.x - perso.largeur / 2,
      perso.y - perso.hauteur,
      perso.largeur,
      perso.hauteur
    );
  }
  //dessiner nuage si elle est active
  listePoints.forEach((point) => {
    animerNuage(point);
    //si le nuage bouge assez bas 
    if (perso.surIle && point.yInitBulle - 140 <= point.yBulle) {
      ctx.drawImage(bulle.img, point.xBulle, point.yBulle);
      // if(point.varAnim > - 5){
      //   ctx.globalAlpha = 1;
      // }
      //mettre le texte
      ctx.strokeStyle = "rgb(200, 184, 190)"; //set the color of the stroke line 
      ctx.lineWidth = 0.5;  //define the width of the stroke line
      ctx.font = "22px hwt-artz";
      ctx.fillText(point.tag, point.xBulle + (150 - ctx.measureText(point.tag).width) / 2, point.yBulle + bulle.height + 20);
      ctx.strokeText(point.tag, point.xBulle + (150 - ctx.measureText(point.tag).width) / 2, point.yBulle + bulle.height + 20);
    }
  });
  //remettre les sprite opaque
  ctx.globalAlpha = 1;
  //dessiner guide
  if (isGuide) {
    ctx.drawImage(guide.img, 0, 0);
  }
  //detecter si le perso doit bouger
  if (enMouvement) {
    bougerPerso();
    animerPerso();
  }
  //TEST changer deplacement point 1
  // if (listePoints[1].x == 800) {
  //   vPoint = -2;
  // } else if (listePoints[1].x == 500) {
  //   vPoint = 2;
  // }
  // listePoints[1].x += vPoint;
}

//////////////ADDEVENTLISTENER//////////////////

//detecter les clicks
canvas.addEventListener("click", (event) => {
  const pos = {
    x: event.clientX - canvas.offsetLeft + (leCanvas.html.getBoundingClientRect().width - 900) / 2,
    y: event.clientY - canvas.offsetTop + (leCanvas.html.getBoundingClientRect().height - 900) / 2,
  };
  //faire que les clics s'active uniquement lorsque le perso est sur l'ile et pas en deplacement
  if (perso.surIle && !enMouvement) {
    listePoints.forEach((point) => {
      if (intersecte(pos, point)) {
        if (listePoints.indexOf(point) == perso.pos) {
          changerPage(point.lien);
        } else {
          cheminPerso = trouverChemin(listePoints.indexOf(point));
          enMouvement = true;
        }
      }
    });
  }
});

//detecter les hovers sur les zones des batiments
canvas.addEventListener("mousemove", (event) => {
  //trouver la position de la souris
  const pos = {
    x: event.clientX - canvas.offsetLeft + (leCanvas.html.getBoundingClientRect().width - 900) / 2,
    y: event.clientY - canvas.offsetTop + (leCanvas.html.getBoundingClientRect().height - 900) / 2,
  };
  //check si la position de la souris est sur un POI
  if (perso.surIle) {
    var hoverClick = false;
    listePoints.forEach((point) => {
      if (intersecte(pos, point)) {
        point.hover = true
        hoverClick = true;
        nuageActif = point.tag;
      } else {
        point.hover = false;
      }
    });
    //si un point est en hover, mettre le curseur en pointer
    if (hoverClick) {
      canvas.style.cursor = "pointer";
    } else {
      canvas.style.cursor = "default";
    }
  }
});

//////////////FONCTION CITY/////////////////

//fonction qui cree la liste de destination que le perso devra prendre
function trouverChemin(nouvellePosition) {
  //declarer les variables pour checker clockwise
  var cheminGauche = [];
  var futurPosGauche = perso.pos;
  //et les var counter-clockwise
  var cheminDroite = [];
  var futurPosDroite = perso.pos;
  //accumuler le nbr de move pour arriver a destination clockwise
  while (futurPosGauche != nouvellePosition) {
    futurPosGauche++;
    if (futurPosGauche >= listePoints.length) {
      futurPosGauche = 0;
    }
    cheminGauche.push(futurPosGauche);
  }
  //accumuler le nbr de move pour arriver a destination counter-clockwise
  while (futurPosDroite != nouvellePosition) {
    futurPosDroite--;
    if (futurPosDroite < 0) {
      futurPosDroite = listePoints.length - 1;
    }
    cheminDroite.push(futurPosDroite);
  }
  //comparer les deux pour retourner celui qui est le plus petit
  //(s'ils sont egaux clockwise va gagner)
  if (
    cheminGauche.length < cheminDroite.length ||
    cheminGauche.length == cheminDroite.length
  ) {
    return cheminGauche;
  } else if (cheminGauche.length > cheminDroite.length) {
    return cheminDroite;
  }
}

//fonction qui fait bouger les x et y du perso selon sa destination
function bougerPerso() {
  //trouver la direction du perso pour changer son modele
  trouverDirection(
    listePoints[perso.pos].x,
    listePoints[perso.pos].y,
    listePoints[cheminPerso[destination]].x,
    listePoints[cheminPerso[destination]].y
  );
  //trouver si le perso doit se deplacer a gauche ou a droite
  //et calculer l'angle de la fonction pour que la vitesse reste constante
  if (listePoints[perso.pos].x < listePoints[cheminPerso[destination]].x) {
    perso.x +=
      (perso.vitesse *
        trouverAngle(
          listePoints[perso.pos].x,
          listePoints[perso.pos].y,
          listePoints[cheminPerso[destination]].x,
          listePoints[cheminPerso[destination]].y
        )) /
      50;
  } else {
    perso.x -=
      (perso.vitesse *
        trouverAngle(
          listePoints[perso.pos].x,
          listePoints[perso.pos].y,
          listePoints[cheminPerso[destination]].x,
          listePoints[cheminPerso[destination]].y
        )) /
      50;
  }
  //faire monter ou descendre le perso selon une fonction lineaire pour qu'ils arrivent au point au meme moment
  perso.y =
    trouverFonctionA(
      listePoints[perso.pos].x,
      listePoints[perso.pos].y,
      listePoints[cheminPerso[destination]].x,
      listePoints[cheminPerso[destination]].y
    ) *
    perso.x +
    trouverFonctionB(
      listePoints[perso.pos].x,
      listePoints[perso.pos].y,
      listePoints[cheminPerso[destination]].x,
      listePoints[cheminPerso[destination]].y
    );
  //si le perso est arriver a sa premiere destination:
  if (arriveAuPoint(perso, listePoints[cheminPerso[destination]])) {
    //faire que la pos du perso est la meme que le point
    perso.pos = cheminPerso[destination];
    //s'assurer que les coords du perso soient les meme que celle du point
    perso.x = listePoints[cheminPerso[destination]].x;
    perso.y = listePoints[cheminPerso[destination]].y;
    //si le perso est au bon point:
    if (cheminPerso[cheminPerso.length - 1] == perso.pos) {
      enMouvement = false;
      destination = 0;
      //savoir quel direction du idle utiliser
      if (perso.gauche) {
        perso.urlImage =
          "https://gftnth00.mywhc.ca/tim14/wp-content/uploads/2024/10/EricG.png";
      } else {
        perso.urlImage =
          "https://gftnth00.mywhc.ca/tim14/wp-content/uploads/2024/10/EricD.png";
      }
      perso.img.src = perso.urlImage;
    } else {
      //sinon il se deplace a un point supplementaire
      destination += 1;
    }
  }
}

//fonction qui detecte si le perso se deplace vers la gauche ou la droite
//TEST deduit dans quelle direction le perso se deplace exactement
function trouverDirection(cx1, cy1, cx2, cy2) {
  //trouver la direction du personnage
  //var haut = false;
  //var angle = trouverAngle(cx1, cy1, cx2, cy2); //testpour trouver angle
  if (listePoints[perso.pos].x > listePoints[cheminPerso[destination]].x) {
    perso.gauche = true;
  } else {
    perso.gauche = false;
  }
  if (perso.gauche) {
    perso.urlImage =
      "https://gftnth00.mywhc.ca/tim14/wp-content/uploads/2024/10/laVersionMini-Copie.png";
  } else {
    perso.urlImage =
      "https://gftnth00.mywhc.ca/tim14/wp-content/uploads/2024/10/laVersionMini.png";
  }
  perso.img.src = perso.urlImage;
  //TEST pour trouver la direction avec angle exacte
  // if (listePoints[perso.pos].y > listePoints[cheminPerso[destination]].y) {
  //   haut = true;
  // } else {
  //   haut = false;
  // }
  //
  // if (!haut && gauche && angle > 10) {
  //   perso.urlImage = "medias/inshallah1.png";
  // } else if (!haut && angle < 10) {
  //   perso.urlImage = "medias/inshallah2.png";
  // } else if (!haut && !gauche && angle > 10) {
  //   perso.urlImage = "medias/inshallah3.png";
  // } else if (gauche && angle < 10) {
  //   perso.urlImage = "medias/inshallah4.png";
  // } else if (!gauche && angle < 10) {
  //   perso.urlImage = "medias/inshallah6.png";
  // } else if (gauche && haut && angle > 10) {
  //   perso.urlImage = "medias/inshallah7.png";
  // } else if (haut && angle < 10) {
  //   perso.urlImage = "medias/inshallah8.png";
  // } else if (!gauche && haut && angle > 10) {
  //   perso.urlImage = "medias/inshallah9.png";
  // }
  // perso.img.src = perso.urlImage;
}

//fonction pour dessiner le perso
function animerPerso() {
  if (enMouvement) {
    perso.sourceX = perso.indexVignette * perso.largeur;
  } else {
    perso.sourceX = 0;
  }

  if (perso.indexAnim == perso.vitesseAnim) {
    perso.indexVignette += 1;
    perso.indexAnim = 0;
  } else {
    perso.indexAnim++;
  }

  if (perso.indexVignette >= perso.nbVignettes) {
    perso.indexVignette = 0;
  }
}

//fonction pour animer les nuages
function animerNuage(point) {
  ctx.globalAlpha = 1 - (point.varAnim / -24);
  //animer vers le bas si le point est en hover
  if (nuageActif == point.tag && point.varAnim < 0) {
    point.varAnim += 0.7;
    point.yBulle = -1 * (0.5 * point.varAnim) ** 2 + point.yInitBulle;
  }
  //animer vers le haut si le nuage n'est plus en hover
  else if (!point.hover && point.varAnim <= 1 && point.varAnim >= -30 && nuageActif != point.tag && perso.surIle) {
    point.varAnim -= 0.7;
    point.yBulle = -1 * (0.5 * point.varAnim) ** 2 + point.yInitBulle;
  }
}

//fonction pour changer de page
function changerPage(url) {
  window.location.href = url;
}

//fonction pour detecter un click dans un cercle
function intersecte(click, cercle) {
  return (
    Math.sqrt((click.x - cercle.xPoint * (canvas.getBoundingClientRect().width / 900)) ** 2 + (click.y - cercle.yPoint * (canvas.getBoundingClientRect().width / 900)) ** 2) <
    cercle.rayon * leCanvas.zoom
  );
}

//fonction pour detecter quand le perso est assez proche du point pour s'arreter
function arriveAuPoint(perso, cercle) {
  return (
    Math.sqrt((perso.x - cercle.x) ** 2 + (perso.y - cercle.y) ** 2) <
    perso.vitesse
  );
}

//fonction pour trouver le a dans une fonction lineaire
//a partir de 2 coordonnees
function trouverFonctionA(cx1, cy1, cx2, cy2) {
  var a = (cy2 - cy1) / (cx2 - cx1);
  return a;
}

//fonction pour trouver le b dans une fonction lineaire
//a partir de 2 coordonnees
function trouverFonctionB(cx1, cy1, cx2, cy2) {
  var a = (cy2 - cy1) / (cx2 - cx1);
  var b = cy1 - a * cx1;
  return b;
}

//fonction pour trouver l'angle d'une fonction lineaire
//a partir de 2 coordonnees
function trouverAngle(cx1, cy1, cx2, cy2) {
  var coteX = Math.abs(cx1 - cx2);
  var coteY = Math.abs(cy1 - cy2);
  return (Math.atan(coteX / coteY) * 180) / Math.PI;
}
