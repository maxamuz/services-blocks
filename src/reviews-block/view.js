document.addEventListener('DOMContentLoaded', function () {
	var blocks = document.querySelectorAll(
		'.wp-block-services-blocks-reviews-block'
	);
	if (blocks.length === 0) return;

	blocks.forEach(function (block) {
		var slider = block.querySelector('.rev-slider[data-slider="reviews"]');
		if (!slider) return;
		var prevBtn = block.querySelector('.rev-nav .rev-btn[data-dir="-1"]');
		var nextBtn = block.querySelector('.rev-nav .rev-btn[data-dir="1"]');

		function getCardStep() {
			var card = slider.querySelector('.rev-card');
			if (!card) return slider.clientWidth;
			var style = getComputedStyle(slider);
			var gap = parseFloat(style.columnGap || style.gap || '16') || 16;
			return card.getBoundingClientRect().width + gap;
		}

		function updateButtons() {
			var maxScroll = slider.scrollWidth - slider.clientWidth;
			if (!prevBtn || !nextBtn) return;
			var atEnd = Math.ceil(slider.scrollLeft) >= Math.floor(maxScroll - 1);
			prevBtn.disabled = slider.scrollLeft <= 2;
			nextBtn.disabled = atEnd;
		}

		if (prevBtn) {
			prevBtn.addEventListener('click', function () {
				slider.scrollBy({
					left: -getCardStep(),
					top: 0,
					behavior: 'smooth',
				});
			});
		}

		if (nextBtn) {
			nextBtn.addEventListener('click', function () {
				slider.scrollBy({
					left: getCardStep(),
					top: 0,
					behavior: 'smooth',
				});
			});
		}

		var rafPending = false;
		slider.addEventListener(
			'scroll',
			function () {
				if (rafPending) return;
				rafPending = true;
				window.requestAnimationFrame(function () {
					updateButtons();
					rafPending = false;
				});
			},
			{ passive: true }
		);

		window.addEventListener('resize', updateButtons);
		updateButtons();
	});
});
