import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	Button,
	TextareaControl,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const {
		eyebrow,
		title,
		subtitle,
		chips,
		ctaPrimaryText,
		ctaPrimaryUrl,
		ctaSecondaryText,
		phone,
		note,
		cf7Id,
		formTitle,
		formSubtitle,
		trustText,
	} = attributes;

	const blockProps = useBlockProps({
		className: "hero",
		id: "hero",
	});

	const updateChip = (index, field, value) => {
		const newChips = [...chips];
		newChips[index] = { ...newChips[index], [field]: value };
		setAttributes({ chips: newChips });
	};

	const addChip = () => {
		setAttributes({
			chips: [...chips, { icon: "", text: "", iconClass: "" }],
		});
	};

	const removeChip = (index) => {
		const newChips = chips.filter((_, i) => i !== index);
		setAttributes({ chips: newChips });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Основные тексты", "services-blocks")}>
					<TextControl
						label={__("Надзаголовок (eyebrow)", "services-blocks")}
						value={eyebrow}
						onChange={(val) => setAttributes({ eyebrow: val })}
					/>
					<TextareaControl
						label={__("Заголовок H1", "services-blocks")}
						value={title}
						onChange={(val) => setAttributes({ title: val })}
					/>
					<TextareaControl
						label={__("Подзаголовок", "services-blocks")}
						value={subtitle}
						onChange={(val) => setAttributes({ subtitle: val })}
					/>
					<TextareaControl
						label={__("Примечание под кнопками (note)", "services-blocks")}
						value={note}
						onChange={(val) => setAttributes({ note: val })}
					/>
					<TextControl
						label={__("Телефон (для кнопки Позвонить)", "services-blocks")}
						value={phone}
						onChange={(val) => setAttributes({ phone: val })}
						help={__(
							"Формат: +7XXXXXXXXXX без пробелов",
							"services-blocks",
						)}
					/>
				</PanelBody>

				<PanelBody
					title={__("Кнопки CTA", "services-blocks")}
					initialOpen={false}
				>
					<TextControl
						label={__("Основная кнопка: текст", "services-blocks")}
						value={ctaPrimaryText}
						onChange={(val) => setAttributes({ ctaPrimaryText: val })}
					/>
					<TextControl
						label={__("Основная кнопка: ссылка", "services-blocks")}
						value={ctaPrimaryUrl}
						onChange={(val) => setAttributes({ ctaPrimaryUrl: val })}
						help={__("Например: #calc или /calc/", "services-blocks")}
					/>
					<TextControl
						label={__("Вторая кнопка: текст", "services-blocks")}
						value={ctaSecondaryText}
						onChange={(val) => setAttributes({ ctaSecondaryText: val })}
					/>
				</PanelBody>

				<PanelBody
					title={__("Чипсы (бейджи)", "services-blocks")}
					initialOpen={false}
				>
					{chips.map((chip, index) => (
						<div
							key={index}
							style={{
								marginBottom: "1rem",
								padding: "0.75rem",
								background: "#f9f9f9",
								borderRadius: "6px",
							}}
						>
							<TextControl
								label={__(`Иконка #${index + 1}`, "services-blocks")}
								value={chip.icon}
								onChange={(val) => updateChip(index, "icon", val)}
								placeholder="💰"
							/>
							<TextControl
								label={__(`Текст #${index + 1}`, "services-blocks")}
								value={chip.text}
								onChange={(val) => updateChip(index, "text", val)}
							/>
							<TextControl
								label={__(`CSS-класс иконки #${index + 1}`, "services-blocks")}
								value={chip.iconClass || ""}
								onChange={(val) => updateChip(index, "iconClass", val)}
								help={__(
									"Оставьте пустым, если класс не нужен",
									"services-blocks",
								)}
							/>
							<Button
								isDestructive
								variant="secondary"
								onClick={() => removeChip(index)}
								style={{ marginTop: "0.5rem" }}
							>
								{__("Удалить чипс", "services-blocks")}
							</Button>
						</div>
					))}
					<Button variant="primary" onClick={addChip}>
						{__("+ Добавить чипс", "services-blocks")}
					</Button>
				</PanelBody>

				<PanelBody
					title={__("Форма заявки (CF7)", "services-blocks")}
					initialOpen={false}
				>
					<TextControl
						label={__("Заголовок формы", "services-blocks")}
						value={formTitle}
						onChange={(val) => setAttributes({ formTitle: val })}
					/>
					<TextareaControl
						label={__("Подзаголовок формы", "services-blocks")}
						value={formSubtitle}
						onChange={(val) => setAttributes({ formSubtitle: val })}
					/>
					<TextControl
						label={__("ID формы Contact Form 7", "services-blocks")}
						value={cf7Id}
						onChange={(val) => setAttributes({ cf7Id: val })}
						help={__("Только числовой ID (например: 123)", "services-blocks")}
					/>
					<TextareaControl
						label={__("Блок доверия под формой", "services-blocks")}
						value={trustText}
						onChange={(val) => setAttributes({ trustText: val })}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="container hero-grid">
					<div className="rv on">
						<RichText
							tagName="div"
							className="eyebrow"
							value={eyebrow}
							onChange={(val) => setAttributes({ eyebrow: val })}
							placeholder={__("Надзаголовок…", "services-blocks")}
							allowedFormats={[]}
						/>

						<RichText
							tagName="h1"
							value={title}
							onChange={(val) => setAttributes({ title: val })}
							placeholder={__("Заголовок героя…", "services-blocks")}
							allowedFormats={["core/em", "core/strong"]}
						/>

						<RichText
							tagName="p"
							className="hero-sub"
							value={subtitle}
							onChange={(val) => setAttributes({ subtitle: val })}
							placeholder={__("Подзаголовок…", "services-blocks")}
							allowedFormats={[]}
						/>

						<div className="hero-chips">
							{chips.map((chip, index) => (
								<span className="chip" key={index}>
									{chip.iconClass ? (
										<span className={chip.iconClass}>{chip.icon}</span>
									) : (
										chip.icon
									)}{" "}
									{chip.text}
								</span>
							))}
						</div>

						<div className="hero-cta">
							<a className="btn btn-red btn-lg" href={ctaPrimaryUrl}>
								{ctaPrimaryText}
							</a>
							<a className="btn btn-out btn-lg" href={`tel:${phone}`}>
								{ctaSecondaryText}
							</a>
						</div>

						<RichText
							tagName="p"
							className="hero-note"
							value={note}
							onChange={(val) => setAttributes({ note: val })}
							placeholder={__("Примечание под кнопками…", "services-blocks")}
							allowedFormats={["core/bold", "core/italic"]}
						/>
					</div>

					<div className="hero-form rv on">
						<RichText
							tagName="h3"
							value={formTitle}
							onChange={(val) => setAttributes({ formTitle: val })}
							placeholder={__("Заголовок формы…", "services-blocks")}
							allowedFormats={[]}
						/>

						<RichText
							tagName="p"
							value={formSubtitle}
							onChange={(val) => setAttributes({ formSubtitle: val })}
							placeholder={__("Подзаголовок формы…", "services-blocks")}
							allowedFormats={[]}
						/>

						{cf7Id ? (
							<div
								className="cf7-placeholder"
								style={{
									padding: "2rem",
									background: "#f9f9f9",
									border: "2px dashed #ccc",
									borderRadius: "8px",
									textAlign: "center",
									color: "#666",
									marginBottom: "1rem",
								}}
							>
								📋 Contact Form 7 · ID: {cf7Id}
								<br />
								<small>(Форма отображается только на сайте)</small>
							</div>
						) : (
							<div
								className="cf7-placeholder"
								style={{
									padding: "2rem",
									background: "#fff3cd",
									border: "2px dashed #ffc107",
									borderRadius: "8px",
									textAlign: "center",
									color: "#856404",
									marginBottom: "1rem",
								}}
							>
								⚠️ Укажите ID формы Contact Form 7 в настройках блока
							</div>
						)}

						<RichText
							tagName="div"
							className="hf-trust"
							value={trustText}
							onChange={(val) => setAttributes({ trustText: val })}
							placeholder={__("Блок доверия…", "services-blocks")}
							allowedFormats={["core/bold", "core/italic"]}
						/>
					</div>
				</div>
			</section>
		</>
	);
}
