document.addEventListener('DOMContentLoaded', function () {
	const hero = document.querySelector('.wp-block-services-blocks-hero-block.hero, #hero');
	if (!hero) {
		return;
	}

	// 1. Плавная прокрутка по якорям внутри hero (ctaPrimaryUrl = #calc, #check и т.д.)
	const anchorButtons = hero.querySelectorAll('a[href^="#"]');
	anchorButtons.forEach(function (link) {
		link.addEventListener('click', function (e) {
			const hash = link.getAttribute('href');
			if (!hash || hash.length < 2) {
				return;
			}
			const target = document.querySelector(hash);
			if (!target) {
				return;
			}
			e.preventDefault();
			const rect = target.getBoundingClientRect();
			const offset = rect.top + window.scrollY - 24;
			try {
				window.scrollTo({ top: offset, behavior: 'smooth' });
			} catch (_) {
				window.scrollTo(0, offset);
			}
			if ('URL' in window && history.pushState) {
				history.replaceState(null, '', hash);
			}
		});
	});

	// 2. Маска для телефона в формах CF7 внутри hero
	function applyPhoneMask(input) {
		if (input.dataset.maskedPhone === '1') {
			return;
		}
		input.dataset.maskedPhone = '1';

		var allowChars = /[\d+]/;

		function reformat() {
			var raw = input.value.replace(/[^0-9]/g, '');
			if (raw.length === 0) {
				input.value = '';
				return;
			}

			if (raw[0] === '8' || raw[0] === '7') {
				raw = '7' + raw.slice(1);
			} else if (raw[0] !== '7') {
				raw = '7' + raw;
			}

			var out = '+7';
			if (raw.length > 1) {
				out += ' (' + raw.slice(1, Math.min(4, raw.length));
			}
			if (raw.length >= 4) {
				out += ') ' + raw.slice(4, Math.min(7, raw.length));
			}
			if (raw.length >= 7) {
				out += '-' + raw.slice(7, Math.min(9, raw.length));
			}
			if (raw.length >= 9) {
				out += '-' + raw.slice(9, 11);
			}
			input.value = out;
		}

		input.addEventListener('beforeinput', function (e) {
			if (e.data && !allowChars.test(e.data)) {
				e.preventDefault();
			}
		});

		input.addEventListener('input', reformat);
		input.addEventListener('blur', reformat);
		input.addEventListener('focus', function () {
			if (!input.value) {
				input.value = '+7 (';
				try {
					input.setSelectionRange(4, 4);
				} catch (_) {}
			}
		});
	}

	function maskPhonesIn(root) {
		root.querySelectorAll(
			'input[type="tel"], input[name*="phone"], input[name*="tel"]'
		).forEach(applyPhoneMask);
	}

	maskPhonesIn(document);

	// Если CF7 рендерит форму асинхронно (AJAX / wpcf7), повторно применить маску
	document.addEventListener('wpcf7submit', function () {}, false);
	document.addEventListener('wpcf7init', function () {
		maskPhonesIn(document);
	});
	var CF7 = window.wpcf7;
	if (CF7 && typeof CF7.then === 'function') {
		CF7.then(function () {
			maskPhonesIn(document);
		});
	}
	setTimeout(function () {
		maskPhonesIn(document);
	}, 600);

	// 3. Автофокус в поле телефона формы hero после небольшой задержки
	var heroForm = hero.querySelector('.hero-form');
	if (heroForm) {
		setTimeout(function () {
			var tel = heroForm.querySelector(
				'input[type="tel"], input[name*="phone"], input[name*="tel"]'
			);
			if (tel && !tel.value) {
				try {
					tel.focus({ preventScroll: true });
				} catch (_) {
					tel.focus();
				}
			}
		}, 900);
	}
});
