document.addEventListener('DOMContentLoaded', function () {
	const symChipsEl = document.getElementById('symChips');
	const verdictTitleEl = document.getElementById('verdictTitle');
	const verdictTextEl = document.getElementById('verdictText');
	const verdictCtaEl = document.getElementById('verdictCta');

	if (!symChipsEl || !verdictTitleEl || !verdictTextEl) {
		return;
	}

	const symptomButtons = symChipsEl.querySelectorAll('.sym');
	const defaultTitle = verdictTitleEl.textContent;
	const defaultText = verdictTextEl.textContent;

	const verdicts = [
		{
			minSymptoms: 4,
			title: '🚨 Срочно на диагностику',
			text:
				'Судя по набору признаков, есть высокая вероятность серьёзного износа внутренних деталей АКПП (фрикционы, гидроблок, соленоиды). Откладывать опасно: ремонт выйдет в разы дороже. Приезжайте — бесплатно считаем уровень, цвет и запах ATF и скажем, что можно сделать.',
			cta: true,
		},
		{
			minSymptoms: 2,
			title: '⚠ Пора заехать на замену',
			text:
				'Признаки указывают на то, что рабочая жидкость отработала свой ресурс или начался первый этап износа. В 8 из 10 случаев полная аппаратная замена ATF с промывкой поддона снимает 90% симптомов — ещё до того, как что-то сломается. Рекомендуем не тянуть.',
			cta: true,
		},
		{
			minSymptoms: 1,
			title: '🔍 Есть повод проверить',
			text:
				'Один признак — ещё не диагноз, но лучше проверить заранее. Бесплатно замерим уровень ATF на горячую, посмотрим цвет и запах, сравним с пробегом. Если всё в порядке — успокоим, если нет — предложим самый лёгкий вариант решения.',
			cta: true,
		},
	];

	function findVerdict(count) {
		for (const v of verdicts) {
			if (count >= v.minSymptoms) {
				return v;
			}
		}
		return { title: defaultTitle, text: defaultText, cta: false };
	}

	function updateVerdict() {
		const activeCount = symChipsEl.querySelectorAll('.sym.is-active').length;
		const verdict = findVerdict(activeCount);

		verdictTitleEl.textContent = verdict.title;
		verdictTextEl.textContent = verdict.text;

		if (verdict.cta && verdictCtaEl) {
			verdictCtaEl.style.display = 'inline-flex';
		} else if (verdictCtaEl) {
			verdictCtaEl.style.display = 'none';
		}
	}

	symptomButtons.forEach(function (btn) {
		btn.addEventListener('click', function () {
			btn.classList.toggle('is-active');
			updateVerdict();
		});
	});
});
