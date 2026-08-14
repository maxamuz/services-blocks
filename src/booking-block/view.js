document.addEventListener("DOMContentLoaded", function () {
	function maskPhone(input) {
		if (!input || input.dataset.maskedBook) return;
		input.dataset.maskedBook = "1";

		var placeholder =
			input.getAttribute("placeholder") &&
			input.getAttribute("placeholder").indexOf("+7") === 0
				? input.getAttribute("placeholder")
				: "+7 (___) ___-__-__";

		function setCaret(pos) {
			try {
				if (input.createTextRange) {
					var r = input.createTextRange();
					r.move("character", pos);
					r.select();
				} else if (input.setSelectionRange) {
					input.focus();
					input.setSelectionRange(pos, pos);
				}
			} catch (e) {}
		}

		input.addEventListener("beforeinput", function (e) {
			var ch = (e.data || "").replace(/\D/g, "");
			if (e.data && ch !== e.data) {
				e.preventDefault();
			}
		});

		input.addEventListener("input", function () {
			var raw = input.value.replace(/\D/g, "");
			if (raw.length && raw.charAt(0) === "8") {
				raw = "7" + raw.slice(1);
			}
			if (raw.length && raw.charAt(0) !== "7") {
				raw = "7" + raw;
			}
			var d = raw.replace(/^7/, "").slice(0, 10);
			var out = placeholder;
			var i = 0;
			for (; i < d.length; i++) {
				out = out.replace("_", d.charAt(i));
			}
			var stopIdx = out.indexOf("_");
			if (stopIdx === -1) {
				stopIdx = out.length;
			}
			input.value = out.slice(0, stopIdx > 3 ? stopIdx : 3);
		});

		input.addEventListener("focus", function () {
			if (!input.value || input.value.replace(/\D/g, "") === "") {
				input.value = placeholder;
				setCaret(3);
			}
		});
	}

	function applyMaskToAll() {
		var tels = document.querySelectorAll(
			'.book-form input[type="tel"], ' +
				'.book-form .wpcf7 input[type="tel"], ' +
				".book-form .wpcf7-tel, " +
				'.sec.booking input[type="tel"]',
		);
		for (var i = 0; i < tels.length; i++) {
			maskPhone(tels[i]);
		}
	}

	applyMaskToAll();

	document.addEventListener("wpcf7init", applyMaskToAll);
	document.addEventListener("wpcf7submit", applyMaskToAll);

	if (typeof jQuery !== "undefined") {
		jQuery(document).on(
			"wpcf7:init wpcf7:mailsent wpcf7:invalid",
			applyMaskToAll,
		);
	}
});
