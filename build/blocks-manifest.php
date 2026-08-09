<?php
// This file is generated. Do not modify it manually.
return array(
	'hero-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'services-blocks/hero-block',
		'version' => '0.1.0',
		'title' => 'Hero Block',
		'category' => 'services',
		'icon' => 'media-document',
		'description' => 'Главный блок сервиса с формой Contact Form 7',
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'services-blocks',
		'attributes' => array(
			'eyebrow' => array(
				'type' => 'string',
				'default' => 'Автосервис ГаражСАО · с 2009 года'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Замена масла в АКПП, вариаторе и роботе <em>в Москве</em>'
			),
			'subtitle' => array(
				'type' => 'string',
				'default' => 'Сначала бесплатно проверим состояние жидкости и честно скажем, нужна ли замена. Потом согласуем смету — и она не изменится в процессе.'
			),
			'chips' => array(
				'type' => 'array',
				'default' => array(
					array(
						'icon' => '💰',
						'text' => 'от 2 500 ₽'
					),
					array(
						'icon' => '⏱',
						'text' => '1–2 часа'
					),
					array(
						'icon' => '🛡',
						'text' => 'гарантия до 2 лет / 60 000 км',
						'iconClass' => 'gr'
					),
					array(
						'icon' => '★',
						'text' => '5.0 · 557 отзывов',
						'iconClass' => 'st'
					)
				)
			),
			'ctaPrimaryText' => array(
				'type' => 'string',
				'default' => 'Рассчитать мою стоимость'
			),
			'ctaPrimaryUrl' => array(
				'type' => 'string',
				'default' => '#calc'
			),
			'ctaSecondaryText' => array(
				'type' => 'string',
				'default' => '📞 Позвонить'
			),
			'phone' => array(
				'type' => 'string',
				'default' => '+74957989887'
			),
			'note' => array(
				'type' => 'string',
				'default' => '🎁 При записи через сайт — <b>скидка 5%</b>. Диагностикa трансмиссии — <b>0 ₽</b> при замене.'
			),
			'cf7Id' => array(
				'type' => 'string',
				'default' => ''
			),
			'formTitle' => array(
				'type' => 'string',
				'default' => 'Узнайте точную стоимость для вашего авто'
			),
			'formSubtitle' => array(
				'type' => 'string',
				'default' => 'Оставьте телефон — мастер перезвонит в течение 15 минут, сориентирует по цене и запишет на удобное время.'
			),
			'trustText' => array(
				'type' => 'string',
				'default' => '<span class="st">★★★★★</span> 5.0 на Яндекс Картах · нас рекомендуют друзьям с 2009 года'
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'services-blocks' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/services-blocks',
		'version' => '0.1.0',
		'title' => 'Services Blocks',
		'category' => 'services',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'services-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
