<?php
/**
 * Plugin Name: Galerie de photo
 * Plugin URI: https://gftnth00.mywhc.ca/tim14/
 * Description: Permet de montrer une galerie d'image de maniere interactive
 * Version: 1.1
 * Author: Lohan Moutquin
 * Author URI: https://www.behance.net/lohanmoutquin
 * License: GPL2
 */

 function enqueue_style_script_galerie(){
        wp_enqueue_style('galerie.css', plugins_url('style.css', __FILE__));
        wp_enqueue_script('posImg', plugins_url('js/positionnerImg.js', __FILE__), array('jquery'), null, true);
        wp_enqueue_script('switchImg', plugins_url('js/switchImg.js', __FILE__), array('jquery'), null, true);
}

add_action('wp_enqueue_scripts','enqueue_style_script_galerie');

function shortcodeGalerie() {
    return '<div id="ctnGalerie">
        <div id="flecheG" class="fleche G"><h1 class="G"><</h1></div>
        <div id="flecheD" class="fleche D"><h1 class="D">></h1></div>
    </div>';
}

add_shortcode('la_galerie', 'shortcodeGalerie');

// <img class="imgGalerie" src="https://gftnth00.mywhc.ca/tim14/wp-content/uploads/2024/11/og-manon-bertrand.jpg" alt="">
//         <img class="imgGalerie" src="https://gftnth00.mywhc.ca/tim14/wp-content/uploads/2024/11/og-denis-pellerin.jpg" alt="">
//         <img class="imgGalerie" src="https://gftnth00.mywhc.ca/tim14/wp-content/uploads/2024/11/og-david-ross.jpg" alt="">
//         <img class="imgGalerie" src="https://gftnth00.mywhc.ca/tim14/wp-content/uploads/2024/11/martin_Article-scaled.jpg" alt="">