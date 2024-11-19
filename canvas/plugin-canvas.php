<?php
/**
 * Plugin Name: Canvas
 * Plugin URI: https://gftnth00.mywhc.ca/tim14/
 * Description: Ajout d'un canvas dans une page web
 * Version: 1.0
 * Author: Lohan Moutquin
 * Author URI: https://www.behance.net/lohanmoutquin
 * License: GPL2
 */

 function enqueue_style_script(){
    if(is_front_page()){
        wp_enqueue_style('plugin-Canvas.css', plugins_url('style.css', __FILE__));
        wp_enqueue_script('animPerso', plugins_url('js/plugin-animPerso.js', __FILE__), array('jquery'), null, true);
        wp_enqueue_script('codeAccueil', plugins_url('js/plugin-codeAccueil.js', __FILE__), array('jquery'), null, true);
        wp_enqueue_script('codeCanvas', plugins_url('js/plugin-codeCanvas.js', __FILE__), array('jquery'), null, true);
    }
}

add_action('wp_enqueue_scripts','enqueue_style_script');

function shortcodeCanvas() {
    return '<img src="https://gftnth00.mywhc.ca/tim14/wp-content/uploads/2024/10/EricG.png" alt="inshallah" id="perso" />
    <canvas id="ile" width="900" height="900"></canvas>';
}

add_shortcode('le_canvas', 'shortcodeCanvas');