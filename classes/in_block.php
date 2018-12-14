<?php
/**
 * Plugin Name:     In Block
 * Plugin URI:
 * Description:     Gutenberg's blocks starter plugin
 * Author:          Sulli
 * Author URI:
 * Text Domain:     in-block
 * Domain Path:     /languages
 * Version:         1.0.0
 *
 * @package         In_Block
 */
namespace In_Block;

class InBlock {

  /**
   * Singleton instance
   *
   * @since 1.0.0
   */
  private static $_instance = null;

  /**
   * Trigger the block & script registration on init.
   *
   * @since 1.0.0
   */
  private function __construct() {
    add_action('init', array( $this, 'registerBlock' ) );
    add_action('init', array( $this, 'registerScript' ) );
  }

  /**
   * Registers the plugin's script.
   *
   * @since 1.0.0
   */
  public function registerScript() {
    wp_register_script(
   		'in-block-script',
   		plugins_url( 'dist/main.js', plugin_dir_path( __FILE__ ) ),
   		array( 'wp-blocks', 'wp-element' ),
   		'1.0'
   	);
  }

  /**
   * Registers the plugin's block.
   *
   * @since 1.0.0
   */
  public function registerBlock() {
    if( ! function_exists( 'register_block_type' ) ) {
      return;
    }
    register_block_type( 'in-block/hello-world', array(
    	'editor_script' => 'in-block-script',
    ) );
  }

  /**
   * Initialize or return existing instance
   *
   * @since 1.0.0
   * @return InBlock
   */
  public static function getInstance() {
    if(is_null(self::$_instance)) {
      self::$_instance = new InBlock();
    }
    return self::$_instance;
  }

}
