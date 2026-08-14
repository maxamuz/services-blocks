import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
	__experimentalText as ExpText,
} from '@wordpress/components';
import { plus } from '@wordpress/icons';
import { Fragment } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
	const {
		eyebrow,
		title,
		description,
		perks,
		formTitle,
		formSubtitle,
		cf7Shortcode,
	} = attributes;

	const blockProps = useBlockProps({
		className: 'sec booking',
	});

	const updatePerk = (i, val) => {
		const next = [...(perks || [])];
		next[i] = val;
		setAttributes({ perks: next });
	};

	const removePerk = (i) => {
		setAttributes({
			perks: (perks || []).filter((_, idx) => idx !== i),
		});
	};

	const movePerk = (i, dir) => {
		const next = [...(perks || [])];
		const j = i + dir;
		if (j < 0 || j >= next.length) return;
		[next[i], next[j]] = [next[j], next[i]];
		setAttributes({ perks: next });
	};

	const addPerk = () => {
		setAttributes({
			perks: [...(perks || []), ''],
		});
	};

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Левая колонка и преимущества', 'services-blocks')}
				>
					<TextControl
						label={__('Над-заголовок (eyebrow)', 'services-blocks')}
						value={eyebrow || ''}
						onChange={(v) => setAttributes({ eyebrow: v })}
						placeholder="Последний шаг"
					/>

					<TextControl
						label={__('Заголовок H2', 'services-blocks')}
						value={title || ''}
						onChange={(v) => setAttributes({ title: v })}
					/>

					<TextareaControl
						label={__('Описание', 'services-blocks')}
						value={description || ''}
						onChange={(v) => setAttributes({ description: v })}
						rows={3}
					/>

					<ExpText
						weight={600}
						style={{
							display: 'block',
							marginTop: 12,
							marginBottom: 6,
							fontSize: 13,
						}}
					>
						{__('Список преимуществ book-perks', 'services-blocks')}
					</ExpText>

					{(perks || []).map((p, i) => (
						<div
							key={i}
							style={{
								display: 'grid',
								gap: 6,
								gridTemplateColumns:
									'1fr auto auto auto',
								alignItems: 'center',
								marginBottom: 8,
							}}
						>
							<TextControl
								value={p || ''}
								onChange={(v) => updatePerk(i, v)}
								placeholder={`${__('Пункт', 'services-blocks')} ${i + 1}`}
							/>
							<Button
								icon="arrow-up-alt2"
								label={__('Выше', 'services-blocks')}
								onClick={() => movePerk(i, -1)}
								isSmall
								disabled={i === 0}
							/>
							<Button
								icon="arrow-down-alt2"
								label={__('Ниже', 'services-blocks')}
								onClick={() => movePerk(i, 1)}
								isSmall
								disabled={
									i === (perks || []).length - 1
								}
							/>
							<Button
								icon="trash"
								label={__('Удалить', 'services-blocks')}
								onClick={() => removePerk(i)}
								isSmall
								isDestructive
							/>
						</div>
					))}

					<Button
						variant="secondary"
						icon={plus}
						onClick={addPerk}
						isSmall
					>
						{__('Добавить преимущество', 'services-blocks')}
					</Button>
				</PanelBody>

				<PanelBody
					title={__('Заголовки формы (над CF7)', 'services-blocks')}
				>
					<TextControl
						label={__('H3 — заголовок формы', 'services-blocks')}
						value={formTitle || ''}
						onChange={(v) => setAttributes({ formTitle: v })}
						placeholder="Онлайн-запись · скидка 5%"
					/>
					<TextareaControl
						label={__('Подзаголовок (p.sub)', 'services-blocks')}
						value={formSubtitle || ''}
						onChange={(v) => setAttributes({ formSubtitle: v })}
						placeholder="После отправки менеджер свяжется с вами и уточнит время визита."
						rows={2}
					/>
				</PanelBody>

				<PanelBody
					title={__('Форма Contact Form 7', 'services-blocks')}
				>
					<TextareaControl
						label={__('Шорткод CF7', 'services-blocks')}
						value={cf7Shortcode || ''}
						onChange={(v) => setAttributes({ cf7Shortcode: v })}
						rows={3}
						placeholder='[contact-form-7 id="6155b65" title="Главная форма"]'
						help={__(
							'Скопируйте шорткод со страницы «Контакт → Формы» (админка). Выводится внутри карточки book-form справа.',
							'services-blocks'
						)}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="container book-grid">
					<div className="book-left rv">
						<div className="eyebrow">
							{eyebrow || (
								<ExpText style={{ color: '#9ca3af' }}>
									{__('Над-заголовок…', 'services-blocks')}
								</ExpText>
							)}
						</div>

						<RichText
							tagName="h2"
							value={title}
							onChange={(v) => setAttributes({ title: v })}
							placeholder={__('Заголовок…', 'services-blocks')}
						/>

						<RichText
							tagName="p"
							value={description}
							onChange={(v) => setAttributes({ description: v })}
							placeholder={__('Описание…', 'services-blocks')}
						/>

						<ul className="book-perks">
							{(perks || []).map((p, i) => (
								<li key={i}>
									<RichText
										value={p}
										onChange={(v) => updatePerk(i, v)}
										placeholder={`${__('Пункт', 'services-blocks')} ${i + 1}`}
									/>
								</li>
							))}
						</ul>
					</div>

					<div className="book-form rv">
						<RichText
							tagName="h3"
							value={formTitle}
							onChange={(v) => setAttributes({ formTitle: v })}
							placeholder={__(
								'Онлайн-запись · скидка 5%',
								'services-blocks'
							)}
						/>
						<RichText
							tagName="p"
							className="sub"
							value={formSubtitle}
							onChange={(v) =>
								setAttributes({ formSubtitle: v })
							}
							placeholder={__(
								'После отправки менеджер свяжется с вами и уточнит время визита.',
								'services-blocks'
							)}
						/>
						<div
							style={{
								padding: '14px 16px',
								border: '1px dashed #d1d5db',
								borderRadius: 14,
								background: '#f9fafb',
								fontSize: '0.9rem',
								color: '#374151',
								wordBreak: 'break-word',
								marginTop: '0.2rem',
							}}
						>
							<div
								style={{
									fontWeight: 600,
									fontSize: '0.95rem',
									marginBottom: 6,
									color: '#111827',
								}}
							>
								{__(
									'Contact Form 7 — шорткод',
									'services-blocks'
								)}
							</div>
							<code style={{ whiteSpace: 'pre-wrap' }}>
								{cf7Shortcode ||
									'[contact-form-7 id="6155b65" title="Главная форма"]'}
							</code>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
}
