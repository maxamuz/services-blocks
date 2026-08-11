import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	const {
		yearsCount,
		yearsLabel,
		yearsDesc,
		carsCount,
		carsHasPlus,
		carsDesc,
		adaptersCount,
		adaptersHasPlus,
		adaptersDesc,
		ratingValue,
		ratingDesc,
	} = attributes;

	return (
		<>
			{/* Панель настроек в сайдбаре (опционально, для переключателей +) */}
			<InspectorControls>
				<PanelBody title={__("Настройки отображения", "services-blocks")}>
					<ToggleControl
						label="Показать плюс у авто"
						checked={carsHasPlus}
						onChange={(val) => setAttributes({ carsHasPlus: val })}
					/>
					<ToggleControl
						label="Показать плюс у адаптеров"
						checked={adaptersHasPlus}
						onChange={(val) => setAttributes({ adaptersHasPlus: val })}
					/>
				</PanelBody>
			</InspectorControls>

			{/* Визуальный редактор */}
			<div {...blockProps}>
				<div className="trustbar">
					<div className="container trust-grid">
						{/* Блок 1: Годы */}
						<div className="rv">
							<div className="num">
								<TextControl
									type="number"
									value={yearsCount}
									onChange={(val) => setAttributes({ yearsCount: val })}
									className="num-input"
								/>
								<RichText
									tagName="span"
									value={yearsLabel}
									onChange={(val) => setAttributes({ yearsLabel: val })}
									placeholder="лет"
								/>
							</div>
							<RichText
								tagName="p"
								value={yearsDesc}
								onChange={(val) => setAttributes({ yearsDesc: val })}
								placeholder="Описание"
							/>
						</div>

						{/* Блок 2: Авто */}
						<div className="rv">
							<div className="num">
								<TextControl
									type="number"
									value={carsCount}
									onChange={(val) => setAttributes({ carsCount: val })}
									className="num-input"
								/>
								{carsHasPlus && <i>+</i>}
							</div>
							<RichText
								tagName="p"
								value={carsDesc}
								onChange={(val) => setAttributes({ carsDesc: val })}
								placeholder="Описание"
							/>
						</div>

						{/* Блок 3: Адаптеры */}
						<div className="rv">
							<div className="num">
								<TextControl
									type="number"
									value={adaptersCount}
									onChange={(val) => setAttributes({ adaptersCount: val })}
									className="num-input"
								/>
								{adaptersHasPlus && <i>+</i>}
							</div>
							<RichText
								tagName="p"
								value={adaptersDesc}
								onChange={(val) => setAttributes({ adaptersDesc: val })}
								placeholder="Описание"
							/>
						</div>

						{/* Блок 4: Рейтинг */}
						<div className="rv">
							<div className="num">
								<TextControl
									value={ratingValue}
									onChange={(val) => setAttributes({ ratingValue: val })}
									className="num-input"
								/>
							</div>
							<RichText
								tagName="p"
								value={ratingDesc}
								onChange={(val) => setAttributes({ ratingDesc: val })}
								placeholder="Рейтинг и отзывы"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
