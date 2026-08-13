document.addEventListener("DOMContentLoaded", function () {
	var blocks = document.querySelectorAll(".wp-block-services-blocks-faq-block");
	if (blocks.length === 0) return;

	blocks.forEach(function (block) {
		var items = block.querySelectorAll(".faq-item");
		items.forEach(function (item) {
			var btn = item.querySelector(".faq-q");
			var ans = item.querySelector(".faq-a");
			var pl = item.querySelector(".pl");
			if (!btn || !ans) return;

			function closeOthers() {
				items.forEach(function (other) {
					if (other === item) return;
					if (other.classList.contains("open")) {
						other.classList.remove("open");
						var ob = other.querySelector(".faq-q");
						if (ob) ob.setAttribute("aria-expanded", "false");
					}
				});
			}

			function setHeight() {
				if (!item.classList.contains("open")) return;
				var h = ans.scrollHeight;
				ans.style.maxHeight = h + 40 + "px";
			}

			btn.addEventListener("click", function (e) {
				e.preventDefault();
				var isOpen = item.classList.contains("open");
				if (isOpen) {
					item.classList.remove("open");
					btn.setAttribute("aria-expanded", "false");
					ans.style.maxHeight = "";
					if (pl) pl.textContent = "+";
				} else {
					closeOthers();
					item.classList.add("open");
					btn.setAttribute("aria-expanded", "true");
					ans.style.maxHeight = ans.scrollHeight + 40 + "px";
					if (pl) pl.textContent = "+";
				}
			});

			window.addEventListener("resize", setHeight);
		});
	});
});
