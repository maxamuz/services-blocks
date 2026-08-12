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
		'example' => array(
			'attributes' => array(
				'eyebrow' => 'Шаг 1 · Самодиагностика',
				'title' => 'Отметьте, что замечаете в поведении коробки',
				'description' => 'Нажмите на признаки — подскажем, что делать именно в вашей ситуации.',
				'symptoms' => array(
					'Толчки и пинки при переключении',
					'Пробуксовки: обороты растут, разгона нет',
					'Масло на щупе тёмное или пахнет гарью',
					'Прошло 4 года или 60 000 км с замены'
				),
				'imageAlt' => 'Сравнение чистого и отработанного масла ATF',
				'figcaption' => 'Слева — рабочая ATF, справа — отработанная. Разница видна без приборов.'
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
		'example' => array(
			'attributes' => array(
				'eyebrow' => 'Автосервис ГаражСАО · с 2009 года',
				'title' => 'Замена масла в АКПП, вариаторе и роботе <em>в Москве</em>',
				'subtitle' => 'Сначала бесплатно проверим состояние жидкости и честно скажем, нужна ли замена.',
				'chips' => array(
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
				),
				'ctaPrimaryText' => 'Рассчитать мою стоимость',
				'ctaSecondaryText' => '☎ Позвонить',
				'note' => '🎁 При записи через сайт — <b>скидка 5%</b>. Диагностикa трансмиссии — <b>0 ₽</b> при замене.',
				'formTitle' => 'Узнайте точную стоимость для вашего авто',
				'trustText' => '<span class="st">★★★★★</span> 5.0 на Яндекс Картах · нас рекомендуют с 2009 года'
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'honest-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'services-blocks/honest-block',
		'version' => '0.1.0',
		'title' => 'Блок Доверие',
		'category' => 'services',
		'icon' => 'shield',
		'description' => 'Блок «Почему нам доверяют» с фото, цитатой и списком преимуществ.',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'eyebrow' => array(
				'type' => 'string',
				'default' => 'Шаг 3 · Доверие'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Почему нам спокойно доверяют коробку'
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => 'Механик'
			),
			'quote' => array(
				'type' => 'string',
				'default' => '«Мы за диагноз, а не за замену всего подряд» — <b>так про нас пишут в отзывах</b>, и это наш принцип.'
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'icon' => '🔍',
						'title' => 'Бесплатная диагностика и честный вердикт',
						'text' => 'Проверим жидкость, ошибки и поведение коробки. Если масло в порядке — скажем «ездите спокойно» и не будем навязывать замену.'
					),
					array(
						'icon' => '📋',
						'title' => 'Фиксированная смета до начала работ',
						'text' => 'Цену согласуем на приёмке и не меняем в процессе. «При приёмке цена ни разу не отличалась от согласованной» — цитата из отзыва.'
					),
					array(
						'icon' => '📷',
						'title' => 'Фотоотчёт и открытая ремзона',
						'text' => 'Покажем слитое масло, старый фильтр и магниты с отложениями. Можете прийти и посмотреть на любой стадии — ничего не прячем.'
					),
					array(
						'icon' => '🛡',
						'title' => 'Гарантия до 2 лет / 60 000 км в заказ-наряде',
						'text' => 'И отдельный отдел качества: +7 (977) 778-73-98 — для любых вопросов и рекламаций. Нам важно долгосрочное сотрудничество.'
					)
				)
			)
		),
		'example' => array(
			'attributes' => array(
				'eyebrow' => 'Шаг 3 · Доверие',
				'title' => 'Почему нам спокойно доверяют коробку',
				'imageAlt' => 'Механик',
				'quote' => '«Мы за диагноз, а не за замену всего подряд» — <b>так про нас пишут в отзывах</b>, и это наш принцип.',
				'items' => array(
					array(
						'icon' => '🔍',
						'title' => 'Бесплатная диагностика',
						'text' => 'Проверим жидкость, ошибки и поведение коробки.'
					),
					array(
						'icon' => '📋',
						'title' => 'Фиксированная смета',
						'text' => 'Цену согласуем на приёмке и не меняем в процессе.'
					),
					array(
						'icon' => '📷',
						'title' => 'Фотоотчёт',
						'text' => 'Покажем слитое масло, старый фильтр и магниты с отложениями.'
					),
					array(
						'icon' => '🛡',
						'title' => 'Гарантия',
						'text' => 'До 2 лет / 60 000 км в заказ-наряде.'
					)
				)
			)
		),
		'textdomain' => 'services-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'mathematics-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'services-blocks/mathematics-block',
		'version' => '0.1.0',
		'title' => 'Блок Математика',
		'category' => 'services',
		'icon' => 'chart-bar',
		'description' => 'Блок сравнения стоимости: замена масла АКПП vs ремонт.',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'eyebrow' => array(
				'type' => 'string',
				'default' => 'Шаг 2 · Математика'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Профилактика в 8 раз дешевле ремонта'
			),
			'cardGoodLabel' => array(
				'type' => 'string',
				'default' => 'Замена масла в АКПП'
			),
			'cardGoodSum' => array(
				'type' => 'string',
				'default' => '≈ 7 500'
			),
			'cardGoodCurrency' => array(
				'type' => 'string',
				'default' => '₽'
			),
			'cardGoodText' => array(
				'type' => 'string',
				'default' => '1–2 часа времени, плавные переключения и +60 000 км спокойной езды. Продлевает ресурс коробки в разы.'
			),
			'cardGoodWidth' => array(
				'type' => 'string',
				'default' => '12'
			),
			'cardGoodHasVs' => array(
				'type' => 'boolean',
				'default' => true
			),
			'cardBadLabel' => array(
				'type' => 'string',
				'default' => 'Ремонт или замена АКПП'
			),
			'cardBadSum' => array(
				'type' => 'string',
				'default' => 'от 60 000'
			),
			'cardBadCurrency' => array(
				'type' => 'string',
				'default' => '₽'
			),
			'cardBadText' => array(
				'type' => 'string',
				'default' => 'Если ездить с отработанной жидкостью до конца: продукты износа работают как абразив и добивают коробку. Доходит до 300 000 ₽ на премиуме.'
			),
			'cardBadWidth' => array(
				'type' => 'string',
				'default' => '100'
			),
			'note' => array(
				'type' => 'string',
				'default' => '💡 <b>Вывод простой:</b> если коробке больше 3–4 лет или 60 000 км без замены — дешевле обновить жидкость сейчас, чем платить за ремонт потом. Проверка состояния — бесплатно.'
			)
		),
		'example' => array(
			'attributes' => array(
				'eyebrow' => 'Шаг 2 · Математика',
				'title' => 'Профилактика в 8 раз дешевле ремонта',
				'cardGoodLabel' => 'Замена масла в АКПП',
				'cardGoodSum' => '≈ 7 500',
				'cardGoodCurrency' => '₽',
				'cardGoodWidth' => '12',
				'cardBadLabel' => 'Ремонт или замена АКПП',
				'cardBadSum' => 'от 60 000',
				'cardBadCurrency' => '₽',
				'cardBadWidth' => '100'
			)
		),
		'textdomain' => 'services-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'prices-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'services-blocks/prices-block',
		'version' => '0.1.0',
		'title' => 'Блок Цены',
		'category' => 'services',
		'icon' => 'money-alt',
		'description' => 'Блок цен с 3 тарифами, хит-пометкой, extra-прайсом и CTA-кнопками.',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'eyebrow' => array(
				'type' => 'string',
				'default' => 'Шаг 4 · Цены'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Прозрачные цены — без сюрпризов'
			),
			'description' => array(
				'type' => 'string',
				'default' => 'Работа + жидкость по допуску вашего авто. Точную смету фиксируем после бесплатной диагностики.'
			),
			'cards' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Частичная замена',
						'price' => 'от 2 500 ₽',
						'timing' => '≈ 1 час · обновляет ~40% ATF',
						'features' => array(
							'Слив и залив через пробку',
							'Проверка уровня по регламенту',
							'Подходит для планового освежения'
						),
						'btnText' => 'Записаться',
						'btnHref' => '#booking',
						'btnStyle' => 'out',
						'isHit' => false,
						'hitLabel' => ''
					),
					array(
						'title' => 'Полная аппаратная замена',
						'price' => 'от 6 500 ₽',
						'timing' => '≈ 2 часа · обновляет ~95% ATF',
						'features' => array(
							'Подключение установки в контур охлаждения',
							'Вытеснение из гидротрансформатора и радиатора',
							'Контроль цвета на выходе — до чистой жидкости',
							'100+ адаптеров под любую коробку'
						),
						'btnText' => 'Записаться',
						'btnHref' => '#booking',
						'btnStyle' => 'red',
						'isHit' => true,
						'hitLabel' => 'Выбирают чаще'
					),
					array(
						'title' => 'С поддоном и фильтром',
						'price' => 'от 4 500 ₽',
						'timing' => '1,5–2 часа · максимум чистоты',
						'features' => array(
							'Снятие и очистка поддона, магниты',
							'Новый фильтр и прокладка',
							'Затяжка динамометрическим ключом'
						),
						'btnText' => 'Записаться',
						'btnHref' => '#booking',
						'btnStyle' => 'out',
						'isHit' => false,
						'hitLabel' => ''
					)
				)
			),
			'extraRows' => array(
				'type' => 'array',
				'default' => array(
					array(
						'label' => 'Вариатор CVT — аппаратная замена со специализированной жидкостью',
						'value' => 'от 7 200 ₽'
					),
					array(
						'label' => 'Робот DSG / Powershift — жидкость и фильтр мехатроника по допуску',
						'value' => 'от 5 500 ₽'
					),
					array(
						'label' => 'Редуктор / раздаточная коробка',
						'value' => 'от 1 800 ₽'
					),
					array(
						'label' => 'Диагностика трансмиссии и проба жидкости — при последующей замене',
						'value' => '0 ₽',
						'isGreen' => true
					)
				)
			),
			'footText' => array(
				'type' => 'string',
				'default' => 'Жидкость ATF/CVT — 900–2 500 ₽/л в зависимости от допуска: подберём оригинал или проверенный аналог по VIN. Гарантия на оба варианта одинаковая.'
			),
			'footBtnText' => array(
				'type' => 'string',
				'default' => 'Рассчитать под моё авто →'
			),
			'footBtnHref' => array(
				'type' => 'string',
				'default' => '#calc'
			)
		),
		'example' => array(
			'attributes' => array(
				'eyebrow' => 'Шаг 4 · Цены',
				'title' => 'Прозрачные цены — без сюрпризов',
				'description' => 'Работа + жидкость по допуску вашего авто.',
				'cards' => array(
					array(
						'title' => 'Частичная замена',
						'price' => 'от 2 500 ₽',
						'timing' => '≈ 1 час',
						'features' => array(
							'Слив и залив через пробку',
							'Проверка уровня по регламенту'
						),
						'btnText' => 'Записаться',
						'btnHref' => '#booking',
						'btnStyle' => 'out',
						'isHit' => false
					),
					array(
						'title' => 'Полная аппаратная замена',
						'price' => 'от 6 500 ₽',
						'timing' => '≈ 2 часа',
						'features' => array(
							'Подключение установки в контур охлаждения',
							'Вытеснение из гидротрансформатора'
						),
						'btnText' => 'Записаться',
						'btnHref' => '#booking',
						'btnStyle' => 'red',
						'isHit' => true,
						'hitLabel' => 'Выбирают чаще'
					),
					array(
						'title' => 'С поддоном и фильтром',
						'price' => 'от 4 500 ₽',
						'timing' => '1,5–2 часа',
						'features' => array(
							'Снятие и очистка поддона',
							'Новый фильтр и прокладка'
						),
						'btnText' => 'Записаться',
						'btnHref' => '#booking',
						'btnStyle' => 'out',
						'isHit' => false
					)
				),
				'extraRows' => array(
					array(
						'label' => 'Вариатор CVT',
						'value' => 'от 7 200 ₽'
					),
					array(
						'label' => 'Робот DSG / Powershift',
						'value' => 'от 5 500 ₽'
					),
					array(
						'label' => 'Диагностика при замене',
						'value' => '0 ₽',
						'isGreen' => true
					)
				)
			)
		),
		'textdomain' => 'services-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
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
		'example' => array(
			'attributes' => array(
				'yearsCount' => '17',
				'yearsLabel' => 'лет',
				'yearsDesc' => 'обслуживаем автомобили',
				'carsCount' => '12400',
				'carsHasPlus' => true,
				'carsDesc' => 'авто в год проходит через нас',
				'adaptersCount' => '100',
				'adaptersHasPlus' => true,
				'adaptersDesc' => 'адаптеров аппаратной замены',
				'ratingValue' => '5.0',
				'ratingDesc' => 'рейтинг · 557 отзывов'
			)
		),
		'textdomain' => 'services-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
