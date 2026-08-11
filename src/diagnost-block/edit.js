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
	Button,
	TextareaControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	const {
		eyebrow,
		title,
		description,
		symptoms,
		verdictDefaultTitle,
		verdictDefaultText,
		ctaText,
		imageUrl,
		imageAlt,
		figcaption,
	} = attributes;

	const updateSymptom = (index, value) => {
		const newSymptoms = [...symptoms];
		newSymptoms[index] = value;
		setAttributes({ symptoms: newSymptoms });
	};

	const removeSymptom = (index) => {
		const newSymptoms = symptoms.filter((_, i) => i !== index);
		setAttributes({ symptoms: newSymptoms });
	};

	const addSymptom = () => {
		setAttributes({ symptoms: [...symptoms, "Новый симптом"] });
	};

	const onSelectImage = (media) => {
		setAttributes({
			imageUrl: media.url,
			imageAlt: media.alt || imageAlt,
		});
	};

	const removeImage = () => {
		setAttributes({ imageUrl: "" });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Заголовок и описание", "services-blocks")}>
					<TextControl
						label={__("Надзаголовок (eyebrow)", "services-blocks")}
						value={eyebrow}
						onChange={(val) => setAttributes({ eyebrow: val })}
					/>
					<TextControl
						label={__("Заголовок H2", "services-blocks")}
						value={title}
						onChange={(val) => setAttributes({ title: val })}
					/>
					<TextareaControl
						label={__("Описание", "services-blocks")}
						value={description}
						onChange={(val) => setAttributes({ description: val })}
					/>
				</PanelBody>

				<PanelBody title={__("Вердикт и CTA", "services-blocks")}>
					<TextControl
						label={__("Заголовок вердикта (по умолчанию)", "services-blocks")}
						value={verdictDefaultTitle}
						onChange={(val) => setAttributes({ verdictDefaultTitle: val })}
					/>
					<TextareaControl
						label={__("Текст вердикта (по умолчанию)", "services-blocks")}
						value={verdictDefaultText}
						onChange={(val) => setAttributes({ verdictDefaultText: val })}
					/>
					<TextControl
						label={__("Текст кнопки CTA", "services-blocks")}
						value={ctaText}
						onChange={(val) => setAttributes({ ctaText: val })}
					/>
				</PanelBody>

				<PanelBody title={__("Изображение и подпись", "services-blocks")}>
					<TextControl
						label={__("Alt текст изображения", "services-blocks")}
						value={imageAlt}
						onChange={(val) => setAttributes({ imageAlt: val })}
					/>
					<TextareaControl
						label={__("Подпись к изображению (figcaption)", "services-blocks")}
						value={figcaption}
						onChange={(val) => setAttributes({ figcaption: val })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<section className="sec white" id="check">
					<div className="container">
						<div className="sec-head rv">
							<RichText
								tagName="div"
								className="eyebrow"
								value={eyebrow}
								onChange={(val) => setAttributes({ eyebrow: val })}
								placeholder="Введите надзаголовок..."
							/>
							<RichText
								tagName="h2"
								value={title}
								onChange={(val) => setAttributes({ title: val })}
								placeholder="Введите заголовок блока..."
							/>
							<RichText
								tagName="p"
								value={description}
								onChange={(val) => setAttributes({ description: val })}
								placeholder="Введите описание..."
							/>
						</div>

						<div className="check-wrap">
							<div className="rv">
								<div className="sym-chips-editor">
									{symptoms.map((symptom, index) => (
										<div
											key={index}
											style={{
												display: "flex",
												gap: "8px",
												marginBottom: "8px",
											}}
										>
											<input
												type="text"
												value={symptom}
												onChange={(e) => updateSymptom(index, e.target.value)}
												style={{ flex: 1, padding: "8px" }}
											/>
											<Button
												isDestructive
												variant="secondary"
												onClick={() => removeSymptom(index)}
											>
												✕
											</Button>
										</div>
									))}
									<Button variant="primary" onClick={addSymptom}>
										+ Добавить симптом
									</Button>
								</div>

								<div className="verdict" id="verdict">
									<RichText
										tagName="h3"
										value={verdictDefaultTitle}
										onChange={(val) =>
											setAttributes({ verdictDefaultTitle: val })
										}
									/>
									<RichText
										tagName="p"
										value={verdictDefaultText}
										onChange={(val) =>
											setAttributes({ verdictDefaultText: val })
										}
									/>
								</div>
							</div>

							<div className="check-side rv">
								<MediaUploadCheck>
									<MediaUpload
										onSelect={onSelectImage}
										allowedTypes={["image"]}
										value={imageUrl ? "" : undefined}
										render={({ open }) =>
											imageUrl ? (
												<div className="editor-image-preview">
													<img src={imageUrl} alt={imageAlt} />
													<Button
														className="remove-image-btn"
														isDestructive
														variant="secondary"
														onClick={removeImage}
													>
														Удалить
													</Button>
												</div>
											) : (
												<div
													className="editor-image-placeholder"
													onClick={open}
												>
													<div className="components-placeholder__label">
														📷 Нажмите, чтобы выбрать изображение
													</div>
												</div>
											)
										}
									/>
								</MediaUploadCheck>
								<RichText
									tagName="figcaption"
									value={figcaption}
									onChange={(val) => setAttributes({ figcaption: val })}
									placeholder="Подпись к изображению..."
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
