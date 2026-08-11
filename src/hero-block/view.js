document.addEventListener("DOMContentLoaded", function () {
	const hero = document.querySelector(
		".wp-block-services-blocks-hero-block.hero, #hero",
	);
	if (!hero) {
		return;
	}

	// 1. Плавная прокрутка по якорям внутри hero (ctaPrimaryUrl = #calc, #check и т.д.)
	const anchorButtons = hero.querySelectorAll('a[href^="#"]');
	anchorButtons.forEach(function (link) {
		link.addEventListener("click", function (e) {
			const hash = link.getAttribute("href");
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
				window.scrollTo({ top: offset, behavior: "smooth" });
			} catch (_) {
				window.scrollTo(0, offset);
			}
			if ("URL" in window && history.pushState) {
				history.replaceState(null, "", hash);
			}
		});
	});
});
