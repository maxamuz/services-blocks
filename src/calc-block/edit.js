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
	Button,
	ColorPicker,
} from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const {
		eyebrow,
		eyebrowColor,
		title,
		titleColor,
		description,
		makeGroupTitle,
		gearGroupTitle,
		methodGroupTitle,
		makePills,
		gearPills,
		methodPills,
		workPrices,
		oilPrices,
		timeLabels,
		asideTitle,
		workLabel,
		oilLabel,
		timeLabel,
		totalLabel,
		ctaText,
		ctaHref,
		disclaimer,
		emptyValue,
	} = attributes;

	const blockProps = useBlockProps({ className: "sec calc", id: "calc" });

	function updatePill(groupKey, index, field, value) {
		var src = attributes[groupKey] || [];
		var next = src.slice();
		next[index] = Object.assign({}, next[index], { [field]: value });
		setAttributes({ [groupKey]: next });
	}

	function addPill(groupKey) {
		var src = attributes[groupKey] || [];
		var n = src.length;
		setAttributes({
			[groupKey]: src.concat([
				{
					label: __("Новый вариант", "services-blocks"),
					value: "opt" + (n + 1),
					default: false,
				},
			]),
		});
	}

	function removePill(groupKey, index) {
		var src = attributes[groupKey] || [];
		setAttributes({
			[groupKey]: src.filter(function (_, i) { return i !== index; }),
		});
	}

	function setWorkPrice(make, method, val) {
		var m = workPrices ? Object.assign({}, workPrices) : {};
		m[make] = Object.assign({}, m[make] || {});
		m[make][method] = val === "" ? "" : parseInt(val, 10) || 0;
		setAttributes({ workPrices: m });
	}

	function setOilPrice(gear, method, val) {
		var g = oilPrices ? Object.assign({}, oilPrices) : {};
		g[gear] = Object.assign({}, g[gear] || {});
		g[gear][method] = val === "" ? "" : parseInt(val, 10) || 0;
		setAttributes({ oilPrices: g });
	}

	function setTimeLabel(method, val) {
		var t = timeLabels ? Object.assign({}, timeLabels) : {};
		t[method] = val;
		setAttributes({ timeLabels: t });
	}

	function workRow(make) {
		var w = workPrices && workPrices[make] ? workPrices[make] : {};
		return (
			<div
				style={{
					marginBottom: "6px",
					display: "grid",
					gridTemplateColumns: "90px 1fr 1fr 1fr",
					gap: "4px",
					alignItems: "center",
				}}
			>
				<TextControl
					value={make}
					onChange={(val) => {
						var cur = workPrices || {};
						if (cur[make] && val !== make && !cur[val]) {
							var next = Object.assign({}, cur);
							next[val] = cur[make];
							delete next[make];
							setAttributes({ workPrices: next });
						}
					}}
					placeholder="make key"
					style={{}}
				/>
				{["part", "filter", "app"].map(function (mt) {
					return (
						<TextControl
							key={mt}
							type="number"
							min="0"
							placeholder={mt}
							value={w[mt] ?? ""}
							onChange={(v) => setWorkPrice(make, mt, v)}
						/>
					);
				})}
			</div>
		);
	}

	function oilRow(gear) {
		var o = oilPrices && oilPrices[gear] ? oilPrices[gear] : {};
		return (
			<div
				style={{
					marginBottom: "6px",
					display: "grid",
					gridTemplateColumns: "90px 1fr 1fr 1fr",
					gap: "4px",
					alignItems: "center",
				}}
			>
				<TextControl
					value={gear}
					placeholder="gear key"
					onChange={(val) => {
						var cur = oilPrices || {};
						if (cur[gear] && val !== gear && !cur[val]) {
							var next = Object.assign({}, cur);
							next[val] = cur[gear];
							delete next[gear];
							setAttributes({ oilPrices: next });
						}
					}}
				/>
				{["part", "filter", "app"].map(function (mt) {
					return (
						<TextControl
							key={mt}
							type="number"
							min="0"
							placeholder={mt}
							value={o[mt] ?? ""}
							onChange={(v) => setOilPrice(gear, mt, v)}
						/>
					);
				})}
			</div>
		);
	}

	function renderPillGroup(title, groupKey, items) {
		return (
			<PanelBody title={title} initialOpen={false}>
				{(items || []).map(function (p, i) {
					return (
						<div
							key={i}
							style={{
								marginBottom: "0.8rem",
								padding: "0.8rem",
								background: "#f9fafb",
								borderRadius: "10px",
								border: "1px solid #eef0f3",
							}}
						>
							<div
								style={{
									fontWeight: 600,
									marginBottom: "0.4rem",
									color: "#374151",
									fontSize: "0.88rem",
								}}
							>
								{__(`Вариант #${i + 1}`, "services-blocks")}
							</div>
							<TextControl
								label={__("Надпись на кнопке", "services-blocks")}
								value={p.label}
								onChange={(val) =>
									updatePill(groupKey, i, "label", val)
								}
							/>
							<TextControl
								label={__("Код значения (value)", "services-blocks")}
								value={p.value}
								onChange={(val) =>
									updatePill(groupKey, i, "value", val)
								}
								help={__("Используется в матрице цен", "services-blocks")}
							/>
							<ToggleControl
								label={__(
									"Выбран по умолчанию",
									"services-blocks",
								)}
								checked={!!p.default}
								onChange={(val) =>
									updatePill(groupKey, i, "default", val)
								}
							/>
							<Button
								isDestructive
								variant="secondary"
								onClick={() => removePill(groupKey, i)}
							>
								{__("Удалить", "services-blocks")}
							</Button>
						</div>
					);
				})}
				<Button variant="primary" onClick={() => addPill(groupKey)}>
					+ {__("Добавить вариант", "services-blocks")}
				</Button>
			</PanelBody>
		);
	}

	function defaultMakeValues() {
		return Array.from(
			new Set([
				...(Object.keys(workPrices || {})),
				...((makePills || []).map(function (p) { return p.value; })),
			]),
		);
	}
	function defaultGearValues() {
		return Array.from(
			new Set([
				...(Object.keys(oilPrices || {})),
				...((gearPills || []).map(function (p) { return p.value; })),
			]),
		);
	}
	function defaultMethodValues() {
		return Array.from(
			new Set([
				"part",
				"filter",
				"app",
				...((methodPills || []).map(function (p) { return p.value; })),
			]),
		);
	}

	const methodVals = defaultMethodValues();
	const makeVals = defaultMakeValues();
	const gearVals = defaultGearValues();

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Шапка блока", "services-blocks")}>
					<TextControl
						label={__("Надзаголовок (eyebrow)", "services-blocks")}
						value={eyebrow}
						onChange={(val) => setAttributes({ eyebrow: val })}
					/>
					<div style={{ marginBottom: "0.8rem" }}>
						<div style={{ fontWeight: 600, marginBottom: "4px" }}>
							{__("Цвет eyebrow", "services-blocks")}
						</div>
						<ColorPicker
							color={eyebrowColor || "#f5c518"}
							onChangeComplete={(c) =>
								setAttributes({ eyebrowColor: c.hex })
							}
							enableAlpha
						/>
					</div>
					<TextareaControl
						label={__("Заголовок H2", "services-blocks")}
						value={title}
						onChange={(val) => setAttributes({ title: val })}
					/>
					<div style={{ marginBottom: "0.8rem" }}>
						<div style={{ fontWeight: 600, marginBottom: "4px" }}>
							{__("Цвет заголовка", "services-blocks")}
						</div>
						<ColorPicker
							color={titleColor || "#ffffff"}
							onChangeComplete={(c) =>
								setAttributes({ titleColor: c.hex })
							}
							enableAlpha
						/>
					</div>
					<TextareaControl
						label={__("Описание", "services-blocks")}
						value={description}
						onChange={(val) => setAttributes({ description: val })}
					/>
					<TextControl
						label={__("Заглушка для пустых значений", "services-blocks")}
						value={emptyValue}
						onChange={(val) => setAttributes({ emptyValue: val })}
					/>
				</PanelBody>

				{renderPillGroup(
					__("Пилюли: «Ваш автомобиль» (make)", "services-blocks"),
					"makePills",
					makePills,
				)}
				{renderPillGroup(
					__("Пилюли: «Коробка» (gear)", "services-blocks"),
					"gearPills",
					gearPills,
				)}
				{renderPillGroup(
					__("Пилюли: «Метод замены» (method)", "services-blocks"),
					"methodPills",
					methodPills,
				)}

				<PanelBody
					title={__("Матрица расчётов", "services-blocks")}
					initialOpen={false}
				>
					<div style={{ marginBottom: "1rem" }}>
						<div
							style={{
								fontWeight: 700,
								marginBottom: "0.4rem",
								color: "#111827",
							}}
						>
							{__(
								"Работы (по марке × методу), ₽",
								"services-blocks",
							)}
						</div>
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "90px 1fr 1fr 1fr",
								gap: "4px",
								marginBottom: "2px",
								fontSize: "0.78rem",
								color: "#6b7280",
								fontWeight: 600,
								padding: "0 0 0.35rem 0",
							}}
						>
							<span>Марка</span>
							{methodVals.slice(0, 3).map(function (m) {
								return <span key={m}>{m}</span>;
							})}
						</div>
						{makeVals.map(function (mk) { return workRow(mk); })}
					</div>

					<div style={{ marginBottom: "1rem" }}>
						<div
							style={{
								fontWeight: 700,
								marginBottom: "0.4rem",
								color: "#111827",
							}}
						>
							{__(
								"Жидкость и расходники (gear × method), ₽",
								"services-blocks",
							)}
						</div>
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "90px 1fr 1fr 1fr",
								gap: "4px",
								marginBottom: "2px",
								fontSize: "0.78rem",
								color: "#6b7280",
								fontWeight: 600,
								padding: "0 0 0.35rem 0",
							}}
						>
							<span>Коробка</span>
							{methodVals.slice(0, 3).map(function (m) {
								return <span key={m}>{m}</span>;
							})}
						</div>
						{gearVals.map(function (g) { return oilRow(g); })}
					</div>

					<div>
						<div
							style={{
								fontWeight: 700,
								marginBottom: "0.4rem",
								color: "#111827",
							}}
						>
							{__(
								"Подпись «Время в сервисе» по методу",
								"services-blocks",
							)}
						</div>
						{methodVals.slice(0, 3).map(function (mt) {
							return (
								<TextControl
									key={mt}
									label={mt}
									value={
										(timeLabels && timeLabels[mt])
											? String(timeLabels[mt])
											: ""
									}
									onChange={(val) => setTimeLabel(mt, val)}
									placeholder="≈ 2 часа"
								/>
							);
						})}
					</div>
				</PanelBody>

				<PanelBody
					title={__("Блок расчёта (справа)", "services-blocks")}
					initialOpen={false}
				>
					<TextControl
						label={__("Заголовок H3", "services-blocks")}
						value={asideTitle}
						onChange={(val) => setAttributes({ asideTitle: val })}
					/>
					<TextControl
						label={__(
							"Подпись строки «Работы»",
							"services-blocks",
						)}
						value={workLabel}
						onChange={(val) => setAttributes({ workLabel: val })}
					/>
					<TextControl
						label={__(
							"Подпись строки «Жидкость и расходники»",
							"services-blocks",
						)}
						value={oilLabel}
						onChange={(val) => setAttributes({ oilLabel: val })}
					/>
					<TextControl
						label={__(
							"Подпись строки «Время в сервисе»",
							"services-blocks",
						)}
						value={timeLabel}
						onChange={(val) => setAttributes({ timeLabel: val })}
					/>
					<TextControl
						label={__("Подпись «Итого под ключ»", "services-blocks")}
						value={totalLabel}
						onChange={(val) => setAttributes({ totalLabel: val })}
					/>
					<TextControl
						label={__("Текст CTA-кнопки", "services-blocks")}
						value={ctaText}
						onChange={(val) => setAttributes({ ctaText: val })}
					/>
					<TextControl
						label={__("Ссылка CTA", "services-blocks")}
						value={ctaHref}
						onChange={(val) => setAttributes({ ctaHref: val })}
					/>
					<TextareaControl
						label={__("Дисклеймер <small>", "services-blocks")}
						value={disclaimer}
						onChange={(val) => setAttributes({ disclaimer: val })}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="container">
					<div className="sec-head rv on">
						<div
							className="eyebrow"
							style={
								eyebrowColor
									? { color: eyebrowColor }
									: undefined
							}
						>
							<RichText
								value={eyebrow}
								onChange={(val) =>
									setAttributes({ eyebrow: val })
								}
								placeholder={__(
									"Шаг · надзаголовок",
									"services-blocks",
								)}
							/>
						</div>
						<h2
							style={
								titleColor
									? { color: titleColor }
									: undefined
							}
						>
							<RichText
								value={title}
								onChange={(val) => setAttributes({ title: val })}
								placeholder={__(
									"Сколько будет стоить для вашего авто?",
									"services-blocks",
								)}
							/>
						</h2>
						<RichText
							tagName="p"
							value={description}
							onChange={(val) =>
								setAttributes({ description: val })
							}
							placeholder={__(
								"Три нажатия — и у вас ориентир по цене…",
								"services-blocks",
							)}
						/>
					</div>

					<div className="calc-grid">
						<div className="rv on">
							<div className="pill-group">
								<h4>
									<RichText
										value={makeGroupTitle}
										onChange={(val) =>
											setAttributes({ makeGroupTitle: val })
										}
										placeholder={__(
											"Ваш автомобиль",
											"services-blocks",
										)}
									/>
								</h4>
								<div className="pills">
									{(makePills || []).map(function (p, i) {
										return (
											<button
												type="button"
												key={i}
												className={
													"pill" +
													(p.default ? " act" : "")
												}
												onClick={(e) =>
													e.preventDefault()
												}
											>
												<RichText
													value={p.label}
													onChange={(val) =>
														updatePill(
															"makePills",
															i,
															"label",
															val,
														)
													}
													placeholder={__(
														"Марка…",
														"services-blocks",
													)}
												/>
											</button>
										);
									})}
								</div>
							</div>

							<div className="pill-group">
								<h4>
									<RichText
										value={gearGroupTitle}
										onChange={(val) =>
											setAttributes({ gearGroupTitle: val })
										}
										placeholder={__(
											"Коробка передач",
											"services-blocks",
										)}
									/>
								</h4>
								<div className="pills">
									{(gearPills || []).map(function (p, i) {
										return (
											<button
												type="button"
												key={i}
												className={
													"pill" +
													(p.default ? " act" : "")
												}
												onClick={(e) =>
													e.preventDefault()
												}
											>
												<RichText
													value={p.label}
													onChange={(val) =>
														updatePill(
															"gearPills",
															i,
															"label",
															val,
														)
													}
													placeholder={__(
														"Тип КПП…",
														"services-blocks",
													)}
												/>
											</button>
										);
									})}
								</div>
							</div>

							<div className="pill-group">
								<h4>
									<RichText
										value={methodGroupTitle}
										onChange={(val) =>
											setAttributes({
												methodGroupTitle: val,
											})
										}
										placeholder={__(
											"Метод замены",
											"services-blocks",
										)}
									/>
								</h4>
								<div className="pills">
									{(methodPills || []).map(function (p, i) {
										return (
											<button
												type="button"
												key={i}
												className={
													"pill" +
													(p.default ? " act" : "")
												}
												onClick={(e) =>
													e.preventDefault()
												}
											>
												<RichText
													value={p.label}
													onChange={(val) =>
														updatePill(
															"methodPills",
															i,
															"label",
															val,
														)
													}
													placeholder={__(
														"Метод…",
														"services-blocks",
													)}
												/>
											</button>
										);
									})}
								</div>
							</div>
						</div>

						<aside className="calc-res rv on">
							<h3>
								<RichText
									value={asideTitle}
									onChange={(val) =>
										setAttributes({ asideTitle: val })
									}
									placeholder={__(
										"Предварительный расчёт",
										"services-blocks",
									)}
								/>
							</h3>
							<div className="crow">
								<span>
									<RichText
										value={workLabel}
										onChange={(val) =>
											setAttributes({ workLabel: val })
										}
									/>
								</span>
								<b>{emptyValue}</b>
							</div>
							<div className="crow">
								<span>
									<RichText
										value={oilLabel}
										onChange={(val) =>
											setAttributes({ oilLabel: val })
										}
									/>
								</span>
								<b>{emptyValue}</b>
							</div>
							<div className="crow">
								<span>
									<RichText
										value={timeLabel}
										onChange={(val) =>
											setAttributes({ timeLabel: val })
										}
									/>
								</span>
								<b>{emptyValue}</b>
							</div>
							<div className="ctotal">
								<span>
									<RichText
										value={totalLabel}
										onChange={(val) =>
											setAttributes({ totalLabel: val })
										}
									/>
								</span>
								<b>{emptyValue}</b>
							</div>
							<a
								className="btn btn-red"
								href={ctaHref || "#booking"}
								onClick={(e) => e.preventDefault()}
							>
								<RichText
									value={ctaText}
									onChange={(val) =>
										setAttributes({ ctaText: val })
									}
									placeholder={__(
										"Зафиксировать эту цену",
										"services-blocks",
									)}
								/>
							</a>
							<small>
								<RichText
									value={disclaimer}
									onChange={(val) =>
										setAttributes({ disclaimer: val })
									}
									placeholder={__(
										"Расчёт предварительный…",
										"services-blocks",
									)}
								/>
							</small>
						</aside>
					</div>
				</div>
			</section>
		</>
	);
}
