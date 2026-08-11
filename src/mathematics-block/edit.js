import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const {
		eyebrow,
		title,
		cardGoodLabel,
		cardGoodSum,
		cardGoodCurrency,
		cardGoodText,
		cardGoodWidth,
		cardGoodHasVs,
		cardBadLabel,
		cardBadSum,
		cardBadCurrency,
		cardBadText,
		cardBadWidth,
		note,
	} = attributes;

	const blockProps = useBlockProps({
		className: "sec",
		id: "math",
	});

	const goodWidth = Math.max(0, Math.min(100, parseInt(cardGoodWidth || "0", 10)));
	const badWidth = Math.max(0, Math.min(100, parseInt(cardBadWidth || "0", 10)));

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Шапка блока", "services-blocks")}>
					<TextControl
						label={__("Надзаголовок (eyebrow)", "services-blocks")}
						value={eyebrow}
						onChange={(val) => setAttributes({ eyebrow: val })}
					/>
					<TextareaControl
						label={__("Заголовок H2", "services-blocks")}
						value={title}
						onChange={(val) => setAttributes({ title: val })}
					/>
				</PanelBody>

				<PanelBody
					title={__("Карточка 1 — замена масла (зелёная)", "services-blocks")}
					initialOpen={false}
				>
					<ToggleControl
						label={__("Показывать бейдж VS", "services-blocks")}
						checked={cardGoodHasVs}
						onChange={(val) => setAttributes({ cardGoodHasVs: val })}
					/>
					<TextControl
						label={__("Заголовок (lbl)", "services-blocks")}
						value={cardGoodLabel}
						onChange={(val) => setAttributes({ cardGoodLabel: val })}
					/>
					<TextControl
						label={__("Сумма (без валюты)", "services-blocks")}
						value={cardGoodSum}
						onChange={(val) => setAttributes({ cardGoodSum: val })}
					/>
					<TextControl
						label={__("Знак валюты", "services-blocks")}
						value={cardGoodCurrency}
						onChange={(val) => setAttributes({ cardGoodCurrency: val })}
					/>
					<TextareaControl
						label={__("Описание", "services-blocks")}
						value={cardGoodText}
						onChange={(val) => setAttributes({ cardGoodText: val })}
					/>
					<TextControl
						label={__("Ширина прогресс-бара (%)", "services-blocks")}
						type="number"
						min="0"
						max="100"
						value={cardGoodWidth}
						onChange={(val) => setAttributes({ cardGoodWidth: val })}
						help={__("0–100", "services-blocks")}
					/>
				</PanelBody>

				<PanelBody
					title={__("Карточка 2 — ремонт (красная)", "services-blocks")}
					initialOpen={false}
				>
					<TextControl
						label={__("Заголовок (lbl)", "services-blocks")}
						value={cardBadLabel}
						onChange={(val) => setAttributes({ cardBadLabel: val })}
					/>
					<TextControl
						label={__("Сумма (без валюты)", "services-blocks")}
						value={cardBadSum}
						onChange={(val) => setAttributes({ cardBadSum: val })}
					/>
					<TextControl
						label={__("Знак валюты", "services-blocks")}
						value={cardBadCurrency}
						onChange={(val) => setAttributes({ cardBadCurrency: val })}
					/>
					<TextareaControl
						label={__("Описание", "services-blocks")}
						value={cardBadText}
						onChange={(val) => setAttributes({ cardBadText: val })}
					/>
					<TextControl
						label={__("Ширина прогресс-бара (%)", "services-blocks")}
						type="number"
						min="0"
						max="100"
						value={cardBadWidth}
						onChange={(val) => setAttributes({ cardBadWidth: val })}
						help={__("0–100", "services-blocks")}
					/>
				</PanelBody>

				<PanelBody title={__("Примечание (math-note)", "services-blocks")} initialOpen={false}>
					<TextareaControl
						label={__("Текст вывода", "services-blocks")}
						value={note}
						onChange={(val) => setAttributes({ note: val })}
						help={__("Разрешён HTML: <b>, <em> и т.д.", "services-blocks")}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="container">
					<div className="sec-head rv on">
						<RichText
							tagName="div"
							className="eyebrow"
							value={eyebrow}
							onChange={(val) => setAttributes({ eyebrow: val })}
							placeholder={__("Шаг · надзаголовок", "services-blocks")}
						/>
						<RichText
							tagName="h2"
							value={title}
							onChange={(val) => setAttributes({ title: val })}
							placeholder={__("Заголовок блока", "services-blocks")}
						/>
					</div>

					<div className="math-grid">
						<div className="math-card rv on">
							{cardGoodHasVs && <div className="math-vs">VS</div>}
							<RichText
								tagName="div"
								className="lbl"
								value={cardGoodLabel}
								onChange={(val) => setAttributes({ cardGoodLabel: val })}
								placeholder={__("Заголовок карточки", "services-blocks")}
							/>
							<div className="sum">
								<RichText
									value={cardGoodSum}
									onChange={(val) => setAttributes({ cardGoodSum: val })}
									placeholder="≈ 7 500"
								/>{" "}
								<i>
									<RichText
										value={cardGoodCurrency}
										onChange={(val) => setAttributes({ cardGoodCurrency: val })}
										placeholder="₽"
									/>
								</i>
							</div>
							<RichText
								tagName="p"
								value={cardGoodText}
								onChange={(val) => setAttributes({ cardGoodText: val })}
								placeholder={__("Описание карточки", "services-blocks")}
							/>
							<div className="math-bar">
								<i
									style={{
										width: `${goodWidth}%`,
										background:
											"linear-gradient(90deg,#16a34a 0%,#22c55e 100%)",
										display: "block",
										height: "100%",
										borderRadius: "8px",
									}}
								></i>
							</div>
						</div>

						<div className="math-card bad rv on">
							<RichText
								tagName="div"
								className="lbl"
								value={cardBadLabel}
								onChange={(val) => setAttributes({ cardBadLabel: val })}
								placeholder={__("Заголовок карточки", "services-blocks")}
							/>
							<div className="sum">
								<RichText
									value={cardBadSum}
									onChange={(val) => setAttributes({ cardBadSum: val })}
									placeholder="от 60 000"
								/>{" "}
								<i>
									<RichText
										value={cardBadCurrency}
										onChange={(val) => setAttributes({ cardBadCurrency: val })}
										placeholder="₽"
									/>
								</i>
							</div>
							<RichText
								tagName="p"
								value={cardBadText}
								onChange={(val) => setAttributes({ cardBadText: val })}
								placeholder={__("Описание карточки", "services-blocks")}
							/>
							<div className="math-bar">
								<i
									style={{
										width: `${badWidth}%`,
										background:
											"linear-gradient(90deg,#dc2626 0%,#ef4444 100%)",
										display: "block",
										height: "100%",
										borderRadius: "8px",
									}}
								></i>
							</div>
						</div>
					</div>

					<div className="math-note rv on">
						<RichText
							value={note}
							onChange={(val) => setAttributes({ note: val })}
							placeholder={__("💡 Примечание под блоком…", "services-blocks")}
						/>
					</div>
				</div>
			</section>
		</>
	);
}
