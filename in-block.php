<?php
/**
 * Plugin Name:     In Block
 * Plugin URI:
 * Description:     Gutenberg's blocks starter plugin
 * Author:          Sulli
 * Author URI:
 * Text Domain:     in-block
 * Domain Path:     /languages
 * Version:         1.1.0
 *
 * @package         In_Block
 */
require_once( dirname(__FILE__) .'/classes/in_block.php' );

In_Block\InBlock::getInstance();
