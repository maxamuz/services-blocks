<?php
// This file is generated. Do not modify it manually.
return array(
	'diagnost-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'services-blocks/diagnost-block',
		'version' => '0.1.0',
		'title' => 'Блок Диагностики АКПП',
		'category' => 'services',
		'icon' => 'heart',
		'description' => 'Интерактивный блок самодиагностики коробки передач.',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'eyebrow' => array(
				'type' => 'string',
				'default' => 'Шаг 1 · Самодиагностика'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Отметьте, что замечаете в поведении коробки'
			),
			'description' => array(
				'type' => 'string',
				'default' => 'Нажмите на признаки — подскажем, что делать именно в вашей ситуации. Это бесплатно и ни к чему не обязывает.'
			),
			'symptoms' => array(
				'type' => 'array',
				'default' => array(
					'Толчки и пинки при переключении',
					'Пробуксовки: обороты растут, разгона нет',
					'Задержки при переключении передач',
					'Масло на щупе тёмное или пахнет гарью',
					'Гул, вой или шум при движении',
					'Прошло 4 года или 60 000 км с замены'
				)
			),
			'verdictDefaultTitle' => array(
				'type' => 'string',
				'default' => '💬 Наш подсказ'
			),
			'verdictDefaultText' => array(
				'type' => 'string',
				'default' => 'Отметьте признаки выше — и мы честно подскажем, нужна ли замена сейчас или можно спокойно ездить дальше.'
			),
			'ctaText' => array(
				'type' => 'string',
				'default' => 'Записаться на бесплатную диагностику'
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => 'Сравнение чистого и отработанного масла ATF'
			),
			'figcaption' => array(
				'type' => 'string',
				'default' => 'Слева — рабочая ATF, справа — отработанная. Разница видна без приборов.'
			)
		),
		'textdomain' => 'services-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
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
				'default' => '☎ Позвонить'
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
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'trust-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'services-blocks/trust-block',
		'version' => '0.1.0',
		'title' => 'Trust Block',
		'category' => 'services',
		'icon' => 'star-filled',
		'description' => 'Блок с цифрами доверия.',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'yearsCount' => array(
				'type' => 'string',
				'default' => '17'
			),
			'yearsLabel' => array(
				'type' => 'string',
				'default' => 'лет'
			),
			'yearsDesc' => array(
				'type' => 'string',
				'default' => 'обслуживаем автомобили'
			),
			'carsCount' => array(
				'type' => 'string',
				'default' => '12400'
			),
			'carsHasPlus' => array(
				'type' => 'boolean',
				'default' => true
			),
			'carsDesc' => array(
				'type' => 'string',
				'default' => 'авто в год проходит через нас'
			),
			'adaptersCount' => array(
				'type' => 'string',
				'default' => '100'
			),
			'adaptersHasPlus' => array(
				'type' => 'boolean',
				'default' => true
			),
			'adaptersDesc' => array(
				'type' => 'string',
				'default' => 'адаптеров аппаратной замены'
			),
			'ratingValue' => array(
				'type' => 'string',
				'default' => '5.0'
			),
			'ratingDesc' => array(
				'type' => 'string',
				'default' => 'рейтинг · 557 отзывов'
			)
		),
		'textdomain' => 'services-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
