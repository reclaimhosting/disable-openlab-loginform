<?php
/**
 * Register networkwide JS to modify login link on toolbar.
 */

add_action( 'wp_enqueue_scripts', function() {
	wp_enqueue_script( 'disable-header-login', content_url() . '/mu-plugins/disable-openlab-loginform/assets/js/login.js', array( 'openlab-nav-js' ) );
} );
