document.addEventListener('DOMContentLoaded', function () {
	var bars = document.querySelectorAll(
		'.wp-block-services-blocks-mathematics-block .math-bar > i[data-w]'
	);
	if (bars.length === 0) {
		return;
	}

	function easeOutCubic(t) {
		return 1 - Math.pow(1 - t, 3);
	}

	function animateBar(bar) {
		var targetRaw = bar.getAttribute('data-w') || '0';
		var target = Math.max(0, Math.min(100, parseFloat(targetRaw)));
		if (!isFinite(target)) {
			bar.style.width = '0%';
			return;
		}

		var duration = 1100 + Math.min(500, target * 6);
		var start = null;

		function step(now) {
			if (start === null) {
				start = now;
			}
			var elapsed = now - start;
			var progress = Math.min(1, elapsed / duration);
			var eased = easeOutCubic(progress);
			var current = target * eased;
			bar.style.width = current.toFixed(2) + '%';

			if (progress < 1) {
				requestAnimationFrame(step);
			} else {
				bar.style.width = target + '%';
			}
		}

		requestAnimationFrame(step);
	}

	if ('IntersectionObserver' in window) {
		var seen = new WeakSet();
		var observer = new IntersectionObserver(
			function (entries, obs) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting && !seen.has(entry.target)) {
						seen.add(entry.target);
						animateBar(entry.target);
						obs.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.25, rootMargin: '0px 0px -20px 0px' }
		);

		bars.forEach(function (bar) {
			observer.observe(bar);
		});
	} else {
		bars.forEach(animateBar);
	}
});
