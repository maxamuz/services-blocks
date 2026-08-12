import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { eyebrow, title, imageUrl, imageAlt, quote, items } = attributes;

	const blockProps = useBlockProps({
		className: "sec white",
		id: "honest",
	});

	function updateItem(index, field, value) {
		var next = items.slice();
		next[index] = Object.assign({}, next[index], { [field]: value });
		setAttributes({ items: next });
	}

	function addItem() {
		setAttributes({
			items: items.concat([
				{ icon: "✨", title: __("Новый пункт", "services-blocks"), text: "" },
			]),
		});
	}

	function removeItem(index) {
		setAttributes({ items: items.filter(function (_, i) { return i !== index; }) });
	}

	function onSelectImage(media) {
		var url = "";
		var alt = "";
		if (media && media.url) {
			url = media.url;
			alt = media.alt || media.caption || imageAlt;
		}
		setAttributes({ imageUrl: url, imageAlt: alt });
	}

	function removeImage() {
		setAttributes({ imageUrl: "" });
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Шапка и цитата", "services-blocks")}>
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
						label={__("Цитата под фото (с HTML)", "services-blocks")}
						value={quote}
						onChange={(val) => setAttributes({ quote: val })}
						help={__("Можно использовать <b>…</b>", "services-blocks")}
					/>
				</PanelBody>

				<PanelBody
					title={__("Фото механика", "services-blocks")}
					initialOpen={false}
				>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectImage}
							allowedTypes={["image"]}
							render={({ open }) => (
								<div style={{ marginBottom: "1rem" }}>
									{imageUrl ? (
										<>
											<div
												style={{
													borderRadius: "14px",
													overflow: "hidden",
													border: "1px solid #e5e7eb",
													marginBottom: "0.75rem",
												}}
											>
												<img
													src={imageUrl}
													alt={imageAlt}
													style={{
														display: "block",
														width: "100%",
														aspectRatio: "4 / 5",
														objectFit: "cover",
													}}
												/>
											</div>
											<div
												style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
											>
												<Button variant="secondary" onClick={open}>
													{__("Заменить", "services-blocks")}
												</Button>
												<Button
													isDestructive
													variant="secondary"
													onClick={removeImage}
												>
													{__("Удалить", "services-blocks")}
												</Button>
											</div>
										</>
									) : (
										<Button
											variant="primary"
											onClick={open}
											style={{ width: "100%", justifyContent: "center" }}
										>
											📷 {__("Загрузить фото", "services-blocks")}
										</Button>
									)}
								</div>
							)}
						/>
					</MediaUploadCheck>
					<TextControl
						label={__("Alt текст", "services-blocks")}
						value={imageAlt}
						onChange={(val) => setAttributes({ imageAlt: val })}
					/>
				</PanelBody>

				<PanelBody
					title={__("Список «Почему доверяют»", "services-blocks")}
					initialOpen={false}
				>
					{items.map(function (item, index) {
						return (
							<div
								key={index}
								style={{
									marginBottom: "1rem",
									padding: "0.9rem",
									background: "#f9fafb",
									borderRadius: "10px",
									border: "1px solid #eef0f3",
								}}
							>
								<TextControl
									label={__(`Иконка пункта #${index + 1}`, "services-blocks")}
									value={item.icon}
									onChange={(val) => updateItem(index, "icon", val)}
									placeholder="🔍"
								/>
								<TextControl
									label={__(`Заголовок #${index + 1}`, "services-blocks")}
									value={item.title}
									onChange={(val) => updateItem(index, "title", val)}
								/>
								<TextareaControl
									label={__(`Текст #${index + 1}`, "services-blocks")}
									value={item.text}
									onChange={(val) => updateItem(index, "text", val)}
								/>
								<Button
									isDestructive
									variant="secondary"
									onClick={() => removeItem(index)}
									style={{ marginTop: "0.35rem" }}
								>
									{__("Удалить пункт", "services-blocks")}
								</Button>
							</div>
						);
					})}
					<Button variant="primary" onClick={addItem}>
						+ {__("Добавить пункт", "services-blocks")}
					</Button>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="container honest-grid">
					<div className="honest-photo rv on">
						{imageUrl ? (
							<img
								className="honest-img"
								src={imageUrl}
								alt={imageAlt}
							/>
						) : (
							<div
								style={{
									width: "100%",
									aspectRatio: "4 / 5",
									borderRadius: "20px",
									background: "#f3f4f6",
									border: "2px dashed #d1d5db",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									padding: "1rem",
									textAlign: "center",
									color: "#6b7280",
									fontSize: "0.9rem",
									lineHeight: 1.5,
								}}
							>
								🖼 {__(
									"Фото не выбрано. Загрузите его в панели «Фото механика» справа.",
									"services-blocks",
								)}
							</div>
						)}
						<div className="honest-quote">
							<RichText
								value={quote}
								onChange={(val) => setAttributes({ quote: val })}
								placeholder={__(
									"«Мы за диагноз, а не за замену всего подряд»…",
									"services-blocks",
								)}
							/>
						</div>
					</div>

					<div className="rv on">
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
							style={{ marginBottom: "1.6rem" }}
							placeholder={__(
								"Почему нам спокойно доверяют коробку",
								"services-blocks",
							)}
						/>

						<div className="honest-list">
							{items.map(function (item, index) {
								return (
									<div className="h-item" key={index}>
										<div className="ic">{item.icon}</div>
										<div>
											<b>
												<RichText
													value={item.title}
													onChange={(val) =>
														updateItem(index, "title", val)
													}
													placeholder={__(
														"Заголовок…",
														"services-blocks",
													)}
												/>
											</b>
											<RichText
												tagName="p"
												value={item.text}
												onChange={(val) =>
													updateItem(index, "text", val)
												}
												placeholder={__(
													"Описание пункта…",
													"services-blocks",
												)}
											/>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
