<?php

/**
 * Enqueue Bootstrap scripts and styles.
 */
function _s_bootstrap_scripts() {

	wp_enqueue_style( '_s-structure', get_template_directory_uri() . '/css/structure.css', array(), '1.0.0', );
	wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/css/bootstrap.css', array(), '3.1.1', );

	wp_enqueue_script( 'bootstrap', get_template_directory_uri() . '/js/bootstrap.js', array(), '3.1.1', true );

}
add_action( 'wp_enqueue_scripts', '_s_bootstrap_scripts' );

/**
 * Register Bootstrap Navigation Walker.
 */
require get_template_directory() . '/bootstrap/wp-bootstrap-navwalker/wp_bootstrap_navwalker.php';
