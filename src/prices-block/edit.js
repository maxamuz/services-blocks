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
	SelectControl,
	Button,
} from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const {
		eyebrow,
		title,
		description,
		cards,
		extraRows,
		footText,
		footBtnText,
		footBtnHref,
	} = attributes;

	const blockProps = useBlockProps({ className: "sec", id: "prices" });

	function updateCard(index, field, value) {
		var next = cards.slice();
		next[index] = Object.assign({}, next[index], { [field]: value });
		setAttributes({ cards: next });
	}

	function updateCardFeature(cardIndex, featIndex, value) {
		var next = cards.slice();
		var features = (next[cardIndex].features || []).slice();
		features[featIndex] = value;
		next[cardIndex] = Object.assign({}, next[cardIndex], { features: features });
		setAttributes({ cards: next });
	}

	function addCardFeature(cardIndex) {
		var next = cards.slice();
		var features = (next[cardIndex].features || []).slice();
		features.push(__("Новый пункт", "services-blocks"));
		next[cardIndex] = Object.assign({}, next[cardIndex], { features: features });
		setAttributes({ cards: next });
	}

	function removeCardFeature(cardIndex, featIndex) {
		var next = cards.slice();
		var features = (next[cardIndex].features || []).slice();
		features.splice(featIndex, 1);
		next[cardIndex] = Object.assign({}, next[cardIndex], { features: features });
		setAttributes({ cards: next });
	}

	function addCard() {
		setAttributes({
			cards: cards.concat([
				{
					title: __("Новый тариф", "services-blocks"),
					price: "от 3 000 ₽",
					timing: __("≈ 1,5 часа", "services-blocks"),
					features: [__("Пункт списка", "services-blocks")],
					btnText: __("Записаться", "services-blocks"),
					btnHref: "#booking",
					btnStyle: "out",
					isHit: false,
					hitLabel: "",
				},
			]),
		});
	}

	function removeCard(index) {
		setAttributes({ cards: cards.filter(function (_, i) { return i !== index; }) });
	}

	function updateRow(index, field, value) {
		var next = extraRows.slice();
		next[index] = Object.assign({}, next[index], { [field]: value });
		setAttributes({ extraRows: next });
	}

	function addRow() {
		setAttributes({
			extraRows: extraRows.concat([
				{
					label: __("Наименование услуги", "services-blocks"),
					value: "от 2 000 ₽",
					isGreen: false,
				},
			]),
		});
	}

	function removeRow(index) {
		setAttributes({
			extraRows: extraRows.filter(function (_, i) { return i !== index; }),
		});
	}

	function btnClass(style) {
		if (style === "red") return "btn btn-red";
		if (style === "ink") return "btn btn-ink";
		return "btn btn-out";
	}

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
					<TextareaControl
						label={__("Описание под заголовком", "services-blocks")}
						value={description}
						onChange={(val) => setAttributes({ description: val })}
					/>
				</PanelBody>

				<PanelBody
					title={__("Тарифы / карточки цен", "services-blocks")}
					initialOpen={false}
				>
					{cards.map(function (card, i) {
						return (
							<div
								key={i}
								style={{
									marginBottom: "1rem",
									padding: "0.9rem",
									background: "#f9fafb",
									borderRadius: "10px",
									border: "1px solid #eef0f3",
								}}
							>
								<div
									style={{
										fontWeight: 600,
										marginBottom: "0.6rem",
										color: "#374151",
									}}
								>
									{__(`Тариф #${i + 1}`, "services-blocks")}
								</div>
								<ToggleControl
									label={__(
										"Хит продаж (обводка + бейдж)",
										"services-blocks",
									)}
									checked={!!card.isHit}
									onChange={(val) => updateCard(i, "isHit", val)}
								/>
								{card.isHit && (
									<TextControl
										label={__(
											"Текст бейджа хита",
											"services-blocks",
										)}
										value={card.hitLabel || ""}
										onChange={(val) =>
											updateCard(i, "hitLabel", val)
										}
									/>
								)}
								<TextControl
									label={__("Заголовок тарифа", "services-blocks")}
									value={card.title}
									onChange={(val) => updateCard(i, "title", val)}
								/>
								<TextControl
									label={__("Стоимость (от 2 500 ₽)", "services-blocks")}
									value={card.price}
									onChange={(val) => updateCard(i, "price", val)}
								/>
								<TextControl
									label={__(
										"Срок / объём обновления ATF",
										"services-blocks",
									)}
									value={card.timing}
									onChange={(val) => updateCard(i, "timing", val)}
								/>
								<div
									style={{
										margin: "0.6rem 0 0.35rem",
										fontSize: "0.9rem",
										color: "#6b7280",
									}}
								>
									{__("Пункты списка", "services-blocks")}
								</div>
								{(card.features || []).map(function (f, fi) {
									return (
										<div
											key={fi}
											style={{
												display: "flex",
												gap: "6px",
												alignItems: "flex-start",
												marginBottom: "4px",
											}}
										>
											<TextControl
												value={f}
												onChange={(val) =>
													updateCardFeature(i, fi, val)
												}
												style={{ flexGrow: 1 }}
											/>
											<Button
												isDestructive
												variant="secondary"
												onClick={() =>
													removeCardFeature(i, fi)
												}
											>
												×
											</Button>
										</div>
									);
								})}
								<Button
									variant="secondary"
									onClick={() => addCardFeature(i)}
								>
									+ {__("Пункт списка", "services-blocks")}
								</Button>
								<div style={{ height: "10px" }} />
								<TextControl
									label={__(
										"Текст кнопки (Записаться)",
										"services-blocks",
									)}
									value={card.btnText}
									onChange={(val) => updateCard(i, "btnText", val)}
								/>
								<TextControl
									label={__(
										"Ссылка кнопки",
										"services-blocks",
									)}
									value={card.btnHref}
									onChange={(val) => updateCard(i, "btnHref", val)}
								/>
								<SelectControl
									label={__("Стиль кнопки", "services-blocks")}
									value={card.btnStyle || "out"}
									options={[
										{
											label: __("Контур (btn-out)", "services-blocks"),
											value: "out",
										},
										{
											label: __(
												"Красная (btn-red)",
												"services-blocks",
											),
											value: "red",
										},
										{
											label: __(
												"Чёрная (btn-ink)",
												"services-blocks",
											),
											value: "ink",
										},
									]}
									onChange={(val) => updateCard(i, "btnStyle", val)}
								/>
								<Button
									isDestructive
									variant="secondary"
									onClick={() => removeCard(i)}
									style={{ marginTop: "0.5rem" }}
								>
									{__("Удалить тариф", "services-blocks")}
								</Button>
							</div>
						);
					})}
					<Button variant="primary" onClick={addCard}>
						+ {__("Добавить тариф", "services-blocks")}
					</Button>
				</PanelBody>

				<PanelBody
					title={__("Extra-прайс (строки под карточками)", "services-blocks")}
					initialOpen={false}
				>
					{extraRows.map(function (row, i) {
						return (
							<div
								key={i}
								style={{
									marginBottom: "1rem",
									padding: "0.9rem",
									background: "#f9fafb",
									borderRadius: "10px",
									border: "1px solid #eef0f3",
								}}
							>
								<div
									style={{
										fontWeight: 600,
										marginBottom: "0.5rem",
										color: "#374151",
									}}
								>
									{__(`Строка #${i + 1}`, "services-blocks")}
								</div>
								<TextareaControl
									label={__("Наименование услуги", "services-blocks")}
									value={row.label}
									onChange={(val) => updateRow(i, "label", val)}
								/>
								<TextControl
									label={__("Стоимость", "services-blocks")}
									value={row.value}
									onChange={(val) => updateRow(i, "value", val)}
								/>
								<ToggleControl
									label={__(
										"Выделить зелёным (как 0 ₽)",
										"services-blocks",
									)}
									checked={!!row.isGreen}
									onChange={(val) => updateRow(i, "isGreen", val)}
								/>
								<Button
									isDestructive
									variant="secondary"
									onClick={() => removeRow(i)}
								>
									{__("Удалить строку", "services-blocks")}
								</Button>
							</div>
						);
					})}
					<Button variant="primary" onClick={addRow}>
						+ {__("Добавить строку", "services-blocks")}
					</Button>
				</PanelBody>

				<PanelBody
					title={__("Нижний блок (price-foot)", "services-blocks")}
					initialOpen={false}
				>
					<TextareaControl
						label={__("Поясняющий текст", "services-blocks")}
						value={footText}
						onChange={(val) => setAttributes({ footText: val })}
					/>
					<TextControl
						label={__("Текст кнопки", "services-blocks")}
						value={footBtnText}
						onChange={(val) => setAttributes({ footBtnText: val })}
					/>
					<TextControl
						label={__("Ссылка кнопки", "services-blocks")}
						value={footBtnHref}
						onChange={(val) => setAttributes({ footBtnHref: val })}
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
							placeholder={__(
								"Прозрачные цены — без сюрпризов",
								"services-blocks",
							)}
						/>
						<RichText
							tagName="p"
							value={description}
							onChange={(val) => setAttributes({ description: val })}
							placeholder={__(
								"Поясняющее описание под заголовком…",
								"services-blocks",
							)}
						/>
					</div>

					<div className="price-cards">
						{cards.map(function (card, i) {
							return (
								<div
									className={
										"pcard rv on" + (card.isHit ? " hit" : "")
									}
									key={i}
								>
									{card.isHit && card.hitLabel && (
										<span className="hit-tag">{card.hitLabel}</span>
									)}
									<RichText
										tagName="h3"
										value={card.title}
										onChange={(val) => updateCard(i, "title", val)}
										placeholder={__("Тариф", "services-blocks")}
									/>
									<div className="p">
										<RichText
											value={card.price}
											onChange={(val) =>
												updateCard(i, "price", val)
											}
											placeholder="от 2 500 ₽"
										/>
									</div>
									<div className="t">
										<RichText
											value={card.timing}
											onChange={(val) =>
												updateCard(i, "timing", val)
											}
											placeholder="≈ 1 час · ~40% ATF"
										/>
									</div>
									<ul>
										{(card.features || []).map(function (f, fi) {
											return (
												<li key={fi}>
													<RichText
														value={f}
														onChange={(val) =>
															updateCardFeature(
																i,
																fi,
																val,
															)
														}
														placeholder={__(
															"Пункт…",
															"services-blocks",
														)}
													/>
												</li>
											);
										})}
									</ul>
									<a
										className={btnClass(card.btnStyle)}
										href={card.btnHref || "#booking"}
										onClick={(e) => e.preventDefault()}
									>
										<RichText
											value={card.btnText}
											onChange={(val) =>
												updateCard(i, "btnText", val)
											}
											placeholder={__(
												"Записаться",
												"services-blocks",
											)}
										/>
									</a>
								</div>
							);
						})}
					</div>

					{extraRows && extraRows.length > 0 && (
						<div className="price-extra rv on">
							{extraRows.map(function (row, i) {
								return (
									<div className="prow" key={i}>
										<span>
											<RichText
												value={row.label}
												onChange={(val) =>
													updateRow(i, "label", val)
												}
												placeholder={__(
													"Услуга…",
													"services-blocks",
												)}
											/>
										</span>
										<b
											style={
												row.isGreen
													? { color: "#16a34a" }
													: undefined
											}
										>
											<RichText
												value={row.value}
												onChange={(val) =>
													updateRow(i, "value", val)
												}
												placeholder="от 2 000 ₽"
											/>
										</b>
									</div>
								);
							})}
						</div>
					)}

					<div className="price-foot rv on">
						<RichText
							tagName="p"
							value={footText}
							onChange={(val) => setAttributes({ footText: val })}
							placeholder={__(
								"Пояснение про жидкость и допуски…",
								"services-blocks",
							)}
						/>
						<a
							className="btn btn-ink"
							href={footBtnHref || "#calc"}
							onClick={(e) => e.preventDefault()}
						>
							<RichText
								value={footBtnText}
								onChange={(val) =>
									setAttributes({ footBtnText: val })
								}
								placeholder={__(
									"Рассчитать под моё авто →",
									"services-blocks",
								)}
							/>
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
