document.addEventListener('DOMContentLoaded', function () {
	const counters = document.querySelectorAll('[data-to]');
	if (counters.length === 0) {
		return;
	}

	function getDecimals(targetStr) {
		const dot = targetStr.indexOf('.');
		return dot === -1 ? 0 : targetStr.length - dot - 1;
	}

	function formatNumber(num, decimals) {
		const fixed = num.toFixed(decimals);
		const parts = fixed.split('.');
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
		return parts.join('.');
	}

	function easeOutQuart(t) {
		return 1 - Math.pow(1 - t, 4);
	}

	function animateCounter(el) {
		const targetStr = el.getAttribute('data-to');
		const target = parseFloat(targetStr);

		if (!isFinite(target) || target <= 0) {
			el.textContent = targetStr;
			return;
		}

		const decimals = getDecimals(targetStr);
		const duration = Math.min(2000, Math.max(900, target * 0.12));
		const startTime = performance.now();

		function step(now) {
			const elapsed = now - startTime;
			const progress = Math.min(1, elapsed / duration);
			const eased = easeOutQuart(progress);
			const current = target * eased;
			el.textContent = formatNumber(current, decimals);

			if (progress < 1) {
				requestAnimationFrame(step);
			} else {
				el.textContent = formatNumber(target, decimals);
			}
		}

		requestAnimationFrame(step);
	}

	if ('IntersectionObserver' in window) {
		const observer = new IntersectionObserver(
			function (entries, obs) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						animateCounter(entry.target);
						obs.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.3, rootMargin: '0px 0px -40px 0px' }
		);

		counters.forEach(function (el) {
			observer.observe(el);
		});
	} else {
		counters.forEach(animateCounter);
	}
});
