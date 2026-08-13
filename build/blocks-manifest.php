<?php
// This file is generated. Do not modify it manually.
return array(
	'calc-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'services-blocks/calc-block',
		'version' => '0.1.0',
		'title' => 'Блок Калькулятор',
		'category' => 'services',
		'icon' => 'calculator',
		'description' => 'Калькулятор ориентировочной стоимости замены масла АКПП.',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'eyebrow' => array(
				'type' => 'string',
				'default' => 'Шаг 5 · Калькулятор'
			),
			'eyebrowColor' => array(
				'type' => 'string',
				'default' => '#f5c518'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Сколько будет стоить для вашего авто?'
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'description' => array(
				'type' => 'string',
				'default' => 'Три нажатия — и у вас ориентир по цене, с которым можно сравнивать любые сервисы.'
			),
			'makeGroupTitle' => array(
				'type' => 'string',
				'default' => 'Ваш автомобиль'
			),
			'gearGroupTitle' => array(
				'type' => 'string',
				'default' => 'Коробка передач'
			),
			'methodGroupTitle' => array(
				'type' => 'string',
				'default' => 'Метод замены'
			),
			'makePills' => array(
				'type' => 'array',
				'default' => array(
					array(
						'label' => 'Бюджетный / РФ',
						'value' => 'budget',
						'default' => false
					),
					array(
						'label' => 'Kia, Hyundai, Toyota, VAG…',
						'value' => 'pop',
						'default' => true
					),
					array(
						'label' => 'BMW, Mercedes, Lexus, Porsche…',
						'value' => 'prem',
						'default' => false
					)
				)
			),
			'gearPills' => array(
				'type' => 'array',
				'default' => array(
					array(
						'label' => 'Автомат',
						'value' => 'at',
						'default' => true
					),
					array(
						'label' => 'Вариатор',
						'value' => 'cvt',
						'default' => false
					),
					array(
						'label' => 'Робот',
						'value' => 'dsg',
						'default' => false
					)
				)
			),
			'methodPills' => array(
				'type' => 'array',
				'default' => array(
					array(
						'label' => 'Частичная',
						'value' => 'part',
						'default' => false
					),
					array(
						'label' => 'С поддоном и фильтром',
						'value' => 'filter',
						'default' => false
					),
					array(
						'label' => 'Полная аппаратная',
						'value' => 'app',
						'default' => true
					)
				)
			),
			'workPrices' => array(
				'type' => 'object',
				'default' => array(
					'budget' => array(
						'part' => 1800,
						'filter' => 3200,
						'app' => 4500
					),
					'pop' => array(
						'part' => 2500,
						'filter' => 4500,
						'app' => 6500
					),
					'prem' => array(
						'part' => 4500,
						'filter' => 7500,
						'app' => 11000
					)
				)
			),
			'oilPrices' => array(
				'type' => 'object',
				'default' => array(
					'at' => array(
						'part' => 2400,
						'filter' => 3600,
						'app' => 7200
					),
					'cvt' => array(
						'part' => 3300,
						'filter' => 4900,
						'app' => 9600
					),
					'dsg' => array(
						'part' => 2800,
						'filter' => 4400,
						'app' => 8500
					)
				)
			),
			'timeLabels' => array(
				'type' => 'object',
				'default' => array(
					'part' => '≈ 1 час',
					'filter' => '1,5–2 часа',
					'app' => '≈ 2 часа'
				)
			),
			'asideTitle' => array(
				'type' => 'string',
				'default' => 'Предварительный расчёт'
			),
			'workLabel' => array(
				'type' => 'string',
				'default' => 'Работы'
			),
			'oilLabel' => array(
				'type' => 'string',
				'default' => 'Жидкость и расходники'
			),
			'timeLabel' => array(
				'type' => 'string',
				'default' => 'Время в сервисе'
			),
			'totalLabel' => array(
				'type' => 'string',
				'default' => 'Итого под ключ'
			),
			'ctaText' => array(
				'type' => 'string',
				'default' => 'Зафиксировать эту цену'
			),
			'ctaHref' => array(
				'type' => 'string',
				'default' => '#booking'
			),
			'disclaimer' => array(
				'type' => 'string',
				'default' => 'Расчёт предварительный. Точную смету зафиксируем после диагностики — и она не изменится. При записи онлайн действует скидка 5%.'
			),
			'emptyValue' => array(
				'type' => 'string',
				'default' => '—'
			)
		),
		'example' => array(
			'attributes' => array(
				'eyebrow' => 'Шаг 5 · Калькулятор',
				'title' => 'Сколько будет стоить для вашего авто?',
				'description' => 'Три нажатия — и у вас ориентир по цене.'
			)
		),
		'textdomain' => 'services-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
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
	'process-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'services-blocks/process-block',
		'version' => '0.1.0',
		'title' => 'Блок: Процесс',
		'category' => 'services',
		'icon' => 'yes-alt',
		'description' => '6 шагов процесса с нумерацией + комфортная зона ожидания.',
		'example' => array(
			'attributes' => array(
				'eyebrow' => 'Шаг 6 · Как это проходит',
				'title' => 'Понятный процесс — вы контролируете каждый шаг',
				'steps' => array(
					array(
						'n' => 1,
						'title' => 'Приёмка и диагностика',
						'text' => 'Считываем ошибки, тестовый круг, проба жидкости. Занимает 20 минут и ничего не стоит при замене.'
					),
					array(
						'n' => 2,
						'title' => 'Честный вердикт и смета',
						'text' => 'Показываем масло на щупе, объясняем и согласуем метод и цену. Цена после этого не меняется.'
					),
					array(
						'n' => 3,
						'title' => 'Слив или подключение установки',
						'text' => 'Вытесняем отработку из гидротрансформатора и контура охлаждения — до чистой жидкости на выходе.'
					),
					array(
						'n' => 4,
						'title' => 'Поддон, магниты, фильтр',
						'text' => 'Очищаем поддон и магниты от металлической пыли, ставим новый фильтр и прокладку.'
					),
					array(
						'n' => 5,
						'title' => 'Заливка и уровень по регламенту',
						'text' => 'Жидкость по допуску производителя, уровень — по рабочей температуре, затяжка — динамометрическим ключом.'
					),
					array(
						'n' => 6,
						'title' => 'Тест-драйв и гарантия',
						'text' => 'Проверяем переключения на ходу, отдаём авто с фотоотчётом и гарантией до 2 лет в заказ-наряде.'
					)
				),
				'comfortImageAlt' => 'Кофе и комфортная зона',
				'comfortTitle' => 'А вы в это время — кофе и Wi-Fi ☕',
				'comfortText' => 'Уютная зона ожидания с видом на ремзону: удобные диваны, кофе, Wi-Fi и игровая зона для детей. Хотите — наблюдайте за работой мастеров через панорамное окно или лично в ремзоне. Парковка для клиентов — у сервиса.'
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'services-blocks',
		'attributes' => array(
			'eyebrow' => array(
				'type' => 'string',
				'default' => 'Шаг 6 · Как это проходит'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Понятный процесс — вы контролируете каждый шаг'
			),
			'steps' => array(
				'type' => 'array',
				'default' => array(
					array(
						'n' => 1,
						'title' => 'Приёмка и диагностика',
						'text' => 'Считываем ошибки, тестовый круг, проба жидкости. Занимает 20 минут и ничего не стоит при замене.'
					),
					array(
						'n' => 2,
						'title' => 'Честный вердикт и смета',
						'text' => 'Показываем масло на щупе, объясняем и согласуем метод и цену. Цена после этого не меняется.'
					),
					array(
						'n' => 3,
						'title' => 'Слив или подключение установки',
						'text' => 'Вытесняем отработку из гидротрансформатора и контура охлаждения — до чистой жидкости на выходе.'
					),
					array(
						'n' => 4,
						'title' => 'Поддон, магниты, фильтр',
						'text' => 'Очищаем поддон и магниты от металлической пыли, ставим новый фильтр и прокладку.'
					),
					array(
						'n' => 5,
						'title' => 'Заливка и уровень по регламенту',
						'text' => 'Жидкость по допуску производителя, уровень — по рабочей температуре, затяжка — динамометрическим ключом.'
					),
					array(
						'n' => 6,
						'title' => 'Тест-драйв и гарантия',
						'text' => 'Проверяем переключения на ходу, отдаём авто с фотоотчётом и гарантией до 2 лет в заказ-наряде.'
					)
				),
				'items' => array(
					'type' => 'object',
					'properties' => array(
						'n' => array(
							'type' => 'integer',
							'default' => 1
						),
						'title' => array(
							'type' => 'string',
							'default' => 'Шаг'
						),
						'text' => array(
							'type' => 'string',
							'default' => 'Описание шага.'
						)
					)
				)
			),
			'comfortImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'comfortImageAlt' => array(
				'type' => 'string',
				'default' => 'Комфорт'
			),
			'comfortTitle' => array(
				'type' => 'string',
				'default' => 'А вы в это время — кофе и Wi-Fi ☕'
			),
			'comfortText' => array(
				'type' => 'string',
				'default' => 'Уютная зона ожидания с видом на ремзону: удобные диваны, кофе, Wi-Fi и игровая зона для детей. Хотите — наблюдайте за работой мастеров через панорамное окно или лично в ремзоне. Парковка для клиентов — у сервиса.'
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'reviews-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'services-blocks/reviews-block',
		'version' => '0.1.0',
		'title' => 'Reviews Block',
		'category' => 'services',
		'icon' => 'testimonial',
		'description' => 'Горизонтальный слайдер отзывов с рейтинг-бейджем и навигацией ←/→.',
		'example' => array(
			'attributes' => array(
				'eyebrow' => 'Отзывы',
				'title' => 'Нас рекомендуют друзьям — буквально',
				'badgeScore' => '5.0',
				'badgeStars' => '★★★★★',
				'badgeMeta' => 'Яндекс Карты · 557 отзывов · 916 оценок',
				'reviews' => array(
					array(
						'ava' => 'ВГ',
						'author' => 'Виктория Г.',
						'status' => 'постоянный клиент, 3 года',
						'text' => '«Дотошно всё осматривают, каждый шаг обсуждают, стоимость озвучивают сразу. При приёмке цена ни разу не отличилась от согласованной. Вместо замены узла целиком предложили бюджетный ремонт. Ничего не навязывают!»',
						'src' => '✓ ЯНДЕКС КАРТЫ · 5.0'
					),
					array(
						'ava' => 'АС',
						'author' => 'Андраник С.',
						'status' => 'сложная диагностика',
						'text' => '«Объездил три сервиса — никто не мог понять проблему. Здесь починили за полчаса и денег почти не взяли. Сказали: „Мы за диагноз, а не за замену всего подряд". Вот это подход!»',
						'src' => '✓ ЯНДЕКС КАРТЫ · 5.0'
					),
					array(
						'ava' => 'ЕТ',
						'author' => 'Егор Т.',
						'status' => 'замена масла + ТО',
						'text' => '«Записывался на замену масла — мастер заметил проблему с сайлентблоками, согласовали замену и сделали по отличной цене и качественно. Всё честно, только по делу. Рекомендую 👍»',
						'src' => '✓ ЯНДЕКС КАРТЫ · 5.0'
					),
					array(
						'ava' => 'КН',
						'author' => 'Кирилл Н.',
						'status' => 'приехал без записи',
						'text' => '«Приняли без записи за считанные минуты, сделали чётко и быстро. Уютная зона отдыха с кофе — время пролетело незаметно. Цены адекватные. Теперь это мой постоянный сервис.»',
						'src' => '✓ ЯНДЕКС КАРТЫ · 5.0'
					),
					array(
						'ava' => 'РХ',
						'author' => 'Руслан Х.',
						'status' => 'проблему не могли найти полгода',
						'text' => '«Полгода боролся с неисправностью — три сервиса оказались бессильны. Ребята справились на ура! Менеджер Дмитрий неделю держал в курсе по всем нюансам. Однозначно рекомендую!»',
						'src' => '✓ ЯНДЕКС КАРТЫ · 5.0'
					)
				)
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'services-blocks',
		'attributes' => array(
			'eyebrow' => array(
				'type' => 'string',
				'default' => 'Отзывы'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Нас рекомендуют друзьям — буквально'
			),
			'badgeScore' => array(
				'type' => 'string',
				'default' => '5.0'
			),
			'badgeStars' => array(
				'type' => 'string',
				'default' => '★★★★★'
			),
			'badgeMeta' => array(
				'type' => 'string',
				'default' => 'Яндекс Карты · 557 отзывов · 916 оценок'
			),
			'reviews' => array(
				'type' => 'array',
				'default' => array(
					array(
						'ava' => 'ВГ',
						'author' => 'Виктория Г.',
						'status' => 'постоянный клиент, 3 года',
						'text' => '«Дотошно всё осматривают, каждый шаг обсуждают, стоимость озвучивают сразу. При приёмке цена ни разу не отличилась от согласованной. Вместо замены узла целиком предложили бюджетный ремонт. Ничего не навязывают!»',
						'src' => '✓ ЯНДЕКС КАРТЫ · 5.0'
					),
					array(
						'ava' => 'АС',
						'author' => 'Андраник С.',
						'status' => 'сложная диагностика',
						'text' => '«Объездил три сервиса — никто не мог понять проблему. Здесь починили за полчаса и денег почти не взяли. Сказали: „Мы за диагноз, а не за замену всего подряд". Вот это подход!»',
						'src' => '✓ ЯНДЕКС КАРТЫ · 5.0'
					),
					array(
						'ava' => 'ЕТ',
						'author' => 'Егор Т.',
						'status' => 'замена масла + ТО',
						'text' => '«Записывался на замену масла — мастер заметил проблему с сайлентблоками, согласовали замену и сделали по отличной цене и качественно. Всё честно, только по делу. Рекомендую 👍»',
						'src' => '✓ ЯНДЕКС КАРТЫ · 5.0'
					),
					array(
						'ava' => 'КН',
						'author' => 'Кирилл Н.',
						'status' => 'приехал без записи',
						'text' => '«Приняли без записи за считанные минуты, сделали чётко и быстро. Уютная зона отдыха с кофе — время пролетело незаметно. Цены адекватные. Теперь это мой постоянный сервис.»',
						'src' => '✓ ЯНДЕКС КАРТЫ · 5.0'
					),
					array(
						'ava' => 'РХ',
						'author' => 'Руслан Х.',
						'status' => 'проблему не могли найти полгода',
						'text' => '«Полгода боролся с неисправностью — три сервиса оказались бессильны. Ребята справились на ура! Менеджер Дмитрий неделю держал в курсе по всем нюансам. Однозначно рекомендую!»',
						'src' => '✓ ЯНДЕКС КАРТЫ · 5.0'
					)
				),
				'items' => array(
					'type' => 'object',
					'properties' => array(
						'ava' => array(
							'type' => 'string',
							'default' => 'ИО'
						),
						'author' => array(
							'type' => 'string',
							'default' => 'Имя Ф.'
						),
						'status' => array(
							'type' => 'string',
							'default' => 'статус клиента'
						),
						'text' => array(
							'type' => 'string',
							'default' => 'Текст отзыва.'
						),
						'src' => array(
							'type' => 'string',
							'default' => '✓ ЯНДЕКС КАРТЫ · 5.0'
						)
					)
				)
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
	),
	'why-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'services-blocks/why-block',
		'version' => '0.1.0',
		'title' => 'Блок: Почему мы?',
		'category' => 'services',
		'icon' => 'shield',
		'description' => '6 карточек «Почему ГаражСАО» с иконками, заголовками и текстами.',
		'example' => array(
			'attributes' => array(
				'eyebrow' => 'Почему ГаражСАО',
				'title' => 'Что вы получаете, кроме свежего масла',
				'cards' => array(
					array(
						'icon' => '🛡',
						'title' => 'Гарантия до 2 лет / 60 000 км',
						'text' => 'Фиксируем в заказ-наряде. Если что-то повторится — устраним в рамках гарантии.'
					),
					array(
						'icon' => '🔌',
						'title' => '100+ адаптеров аппаратной замены',
						'text' => 'Полная замена почти в любой коробке, а не «слил-залил» как в обычных сервисах.'
					),
					array(
						'icon' => '🧬',
						'title' => 'Подбор жидкости по VIN и допускам',
						'text' => 'ATF, CVT-fluid или жидкость для робота — точно по спецификации производителя.'
					),
					array(
						'icon' => '🔩',
						'title' => 'Динамометрический ключ и регламенты',
						'text' => 'Затяжка поддона моментом из справочной системы производителя. Никакого «на глазок».'
					),
					array(
						'icon' => '✅',
						'title' => 'Оригиналы и проверенные аналоги',
						'text' => 'Никакого барахла и подделок: расходники проходят входной контроль качества.'
					),
					array(
						'icon' => '🚗',
						'title' => 'Удобно добраться и припарковаться',
						'text' => 'Москва, Зеленоградская 15. Парковка у сервиса, зона ожидания с кофе и Wi-Fi.'
					)
				)
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'services-blocks',
		'attributes' => array(
			'eyebrow' => array(
				'type' => 'string',
				'default' => 'Почему ГаражСАО'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Что вы получаете, кроме свежего масла'
			),
			'cards' => array(
				'type' => 'array',
				'default' => array(
					array(
						'icon' => '🛡',
						'title' => 'Гарантия до 2 лет / 60 000 км',
						'text' => 'Фиксируем в заказ-наряде. Если что-то повторится — устраним в рамках гарантии.'
					),
					array(
						'icon' => '🔌',
						'title' => '100+ адаптеров аппаратной замены',
						'text' => 'Полная замена почти в любой коробке, а не «слил-залил» как в обычных сервисах.'
					),
					array(
						'icon' => '🧬',
						'title' => 'Подбор жидкости по VIN и допускам',
						'text' => 'ATF, CVT-fluid или жидкость для робота — точно по спецификации производителя.'
					),
					array(
						'icon' => '🔩',
						'title' => 'Динамометрический ключ и регламенты',
						'text' => 'Затяжка поддона моментом из справочной системы производителя. Никакого «на глазок».'
					),
					array(
						'icon' => '✅',
						'title' => 'Оригиналы и проверенные аналоги',
						'text' => 'Никакого барахла и подделок: расходники проходят входной контроль качества.'
					),
					array(
						'icon' => '🚗',
						'title' => 'Удобно добраться и припарковаться',
						'text' => 'Москва, Зеленоградская 15. Парковка у сервиса, зона ожидания с кофе и Wi-Fi.'
					)
				),
				'items' => array(
					'type' => 'object',
					'properties' => array(
						'icon' => array(
							'type' => 'string',
							'default' => '🛡'
						),
						'title' => array(
							'type' => 'string',
							'default' => 'Заголовок'
						),
						'text' => array(
							'type' => 'string',
							'default' => 'Описание преимущества.'
						)
					)
				)
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	)
);
