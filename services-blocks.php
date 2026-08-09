<?php

/**
 * Plugin Name:       Services Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       services-blocks
 *
 * @package CreateBlock
 */

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}
/**
 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
 * based on the registered block metadata. Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function create_block_services_blocks_block_init()
{
	wp_register_block_types_from_metadata_collection(__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php');
}
add_action('init', 'create_block_services_blocks_block_init');

/**
 * Регистрируем кастомную категорию для блоков сервиса.
 */
function services_blocks_register_category($categories)
{
	// Добавляем нашу категорию в НАЧАЛО массива (вывод первой)
	array_unshift($categories, [
		'slug'  => 'services',
		'title' => 'Блоки сервиса',
		'icon'  => 'admin-generic', // Иконка из Dashicons (опционально)
	]);

	return $categories;
}
add_filter('block_categories_all', 'services_blocks_register_category', 10, 2);
