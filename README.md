# Tim_site_plugin

## Plugins pour [Tim_site_wp](https://github.com/Projet-web-en-equipe/Tim_site_wp)

- Ce plugin permet de rajouter un canvas présenté sous forme d'ile qui agit en tant que menu complexifié pour rajouter de l'interactivité et de l'originalité a notre site
- Le plugin comprend aussi une animation d'Éric qui tombe sur l'ile 

## Les fonctionnalités du plugin

### Navigation
- Il est possible d'intéragir des points d'interêts sur l'ile. Hover sur ces points va faire apparaitre un nuage avec le nom du point d'interet. Clicker sur un point va faire déplacer Éric jusqu'a ce point. Clicker sur ce point d'interêt lorsqu'Éric est déjà dessus va rediriger l'utilisateur vers le site lié au point
- Les points d'interêts peuvent être créé par l'utilisateur en le rajoutant dans le array ListePoints. Chaque point devra comprendre ces variables:
* x: position x du perso sur le point
* y: position y du perso sur le point
* xPoint: position x de la zone de hover du point
* yPoint: position y de la zone de hover du point
* xBulle: position x ou le nuage apparaitera dans l'animation
* yBulle: position y ou le nuage apparaitera dans l'animation
* rayon: la taille de la zone de hover du point
* tag: le nom de la catégorie que le point représente
* lien: le lieu ou le point va rediriger l'utilisateur

### Adaptabilité du canvas
- Le canvas de l'ile à été fait pour qu'il soit accessible et fonctionnel peu importe la taille de l'écran et l'appareil utilisé
- Le canvas s'adapte en devenant la même taille que l'écran pour qu'il soit visible dès l'arrivé sur le site
- Il peut être zoomer et dézoomer pour mieux voir les éléments ou pouvoir regarder l'entièreté de l'ile même si l'écran est petit
- Si le canvas dépasse de la page, il est possible de le déplacer en le maintenant et en déplaceant la souris ou le doigt de l'utilisateur
- Il est impossible de faire disparaitre l'ile en la déplaçant trop loin. Le déplacement à des limites qu'il ne peut dépasser et changer la taille de la page va automatiquement remmettre l'ile au milieu de la page

#### Le futur du canvas
- Nous avons encore en tête d'améliorer le canvas durant le reste de notre projet.
- Nous avons comme but:
* permettre de zoomer/dézoomer le canvas en pinchant avec les doigts sur mobile
* améliorer le style et l'animation des nuages
* assurer que l'animation d'Éric de skip pas de frame, peu importe de l'ordi et de la situation
