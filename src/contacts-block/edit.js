import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	Button,
	SelectControl,
	ToggleControl,
	__experimentalText as ExpText,
} from '@wordpress/components';
import { plus } from '@wordpress/icons';
import { Fragment } from '@wordpress/element';

const HREF_OPTIONS = [
	{ label: __('Обычная ссылка (в текущей вкладке)', 'services-blocks'), value: 'default' },
	{ label: __('Открыть в новой вкладке (target=_blank)', 'services-blocks'), value: 'blank' },
	{ label: __('Телефон (tel:)', 'services-blocks'), value: 'tel' },
	{ label: __('Почта (mailto:)', 'services-blocks'), value: 'mailto' },
	{ label: __('Нет ссылки', 'services-blocks'), value: 'none' },
];

const BTN_CLASS_OPTIONS = [
	{ label: __('btn-ink (тёмный / дефолт)', 'services-blocks'), value: 'btn-ink' },
	{ label: __('btn-wa (зелёный WhatsApp)', 'services-blocks'), value: 'btn-wa' },
	{ label: __('btn-red (красный)', 'services-blocks'), value: 'btn-red' },
	{ label: __('btn-outline (рамка)', 'services-blocks'), value: 'btn-outline' },
];

export default function Edit({ attributes, setAttributes }) {
	const { eyebrow, title, lines, buttons, mapSrc, mapTitle } = attributes;

	const blockProps = useBlockProps({ className: 'sec white' });

	const updateLine = (i, patch) => {
		const next = [...(lines || [])];
		next[i] = { ...(next[i] || {}), ...patch };
		setAttributes({ lines: next });
	};

	const removeLine = (i) => {
		setAttributes({ lines: (lines || []).filter((_, idx) => idx !== i) });
	};

	const moveLine = (i, dir) => {
		const next = [...(lines || [])];
		const j = i + dir;
		if (j < 0 || j >= next.length) return;
		[next[i], next[j]] = [next[j], next[i]];
		setAttributes({ lines: next });
	};

	const addLine = () => {
		setAttributes({
			lines: [
				...(lines || []),
				{
					icon: '📍',
					bold: '',
					small: '',
					href: '',
					hrefType: 'none',
				},
			],
		});
	};

	const updateBtn = (i, patch) => {
		const next = [...(buttons || [])];
		next[i] = { ...(next[i] || {}), ...patch };
		setAttributes({ buttons: next });
	};

	const removeBtn = (i) => {
		setAttributes({ buttons: (buttons || []).filter((_, idx) => idx !== i) });
	};

	const moveBtn = (i, dir) => {
		const next = [...(buttons || [])];
		const j = i + dir;
		if (j < 0 || j >= next.length) return;
		[next[i], next[j]] = [next[j], next[i]];
		setAttributes({ buttons: next });
	};

	const addBtn = () => {
		setAttributes({
			buttons: [
				...(buttons || []),
				{
					text: __('Новая кнопка', 'services-blocks'),
					href: '#',
					className: 'btn-ink',
					blank: true,
				},
			],
		});
	};

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__('Шапка секции', 'services-blocks')}>
					<TextControl
						label={__('Над-заголовок (eyebrow)', 'services-blocks')}
						value={eyebrow || ''}
						onChange={(v) => setAttributes({ eyebrow: v })}
					/>
					<TextControl
						label={__('Заголовок H2', 'services-blocks')}
						value={title || ''}
						onChange={(v) => setAttributes({ title: v })}
					/>
				</PanelBody>

				<PanelBody
					title={__('Контакты (строки con-line)', 'services-blocks')}
				>
					<ExpText
						weight={600}
						style={{
							display: 'block',
							marginBottom: 8,
							marginTop: 4,
							fontSize: 13,
						}}
					>
						{__(
							'5 строк по умолчанию: адрес · телефон · WA/TG · email · отдел качества',
							'services-blocks'
						)}
					</ExpText>

					{(lines || []).map((l, i) => (
						<div
							key={i}
							style={{
								border: '1px solid #e5e7eb',
								borderRadius: 12,
								padding: '10px 12px',
								marginBottom: 10,
								background: '#fff',
							}}
						>
							<div
								style={{
									display: 'flex',
									justifyContent: 'flex-end',
									gap: 4,
									marginBottom: 6,
								}}
							>
								<Button
									icon="arrow-up-alt2"
									label={__('Выше', 'services-blocks')}
									onClick={() => moveLine(i, -1)}
									isSmall
									disabled={i === 0}
								/>
								<Button
									icon="arrow-down-alt2"
									label={__('Ниже', 'services-blocks')}
									onClick={() => moveLine(i, 1)}
									isSmall
									disabled={i === (lines || []).length - 1}
								/>
								<Button
									icon="trash"
									label={__('Удалить строку', 'services-blocks')}
									onClick={() => removeLine(i)}
									isSmall
									isDestructive
								/>
							</div>

							<TextControl
								label={__(
									`Иконка (emoji) · строка ${i + 1}`,
									'services-blocks'
								)}
								value={l?.icon || ''}
								onChange={(v) => updateLine(i, { icon: v })}
								placeholder="📍 / 📞 / 💬 / ✉️ / 🛡"
								style={{ marginBottom: 6 }}
							/>
							<TextControl
								label={__('Жирный заголовок', 'services-blocks')}
								value={l?.bold || ''}
								onChange={(v) => updateLine(i, { bold: v })}
								style={{ marginBottom: 6 }}
							/>
							<TextControl
								label={__('Подпись (small)', 'services-blocks')}
								value={l?.small || ''}
								onChange={(v) => updateLine(i, { small: v })}
								style={{ marginBottom: 6 }}
							/>
							<SelectControl
								label={__('Тип ссылки для жирного заголовка', 'services-blocks')}
								value={l?.hrefType || 'none'}
								options={HREF_OPTIONS}
								onChange={(v) => updateLine(i, { hrefType: v })}
								style={{ marginBottom: 6 }}
							/>
							<TextControl
								label={__('URL / tel: / mailto: (href)', 'services-blocks')}
								value={l?.href || ''}
								onChange={(v) => updateLine(i, { href: v })}
								placeholder="tel:+7… или https://wa.me/… или mailto:…"
							/>
						</div>
					))}

					<Button variant="secondary" icon={plus} onClick={addLine} isSmall>
						{__('Добавить контактную строку', 'services-blocks')}
					</Button>
				</PanelBody>

				<PanelBody
					title={__('Карта и CTA-кнопки', 'services-blocks')}
				>
					<TextControl
						label={__('src для iframe-карты', 'services-blocks')}
						value={mapSrc || ''}
						onChange={(v) => setAttributes({ mapSrc: v })}
						help={__(
							'Скопируйте src="" из кода встраивания Yandex.Карты / Google Maps / 2GIS.',
							'services-blocks'
						)}
					/>
					<TextControl
						label={__('title атрибут iframe', 'services-blocks')}
						value={mapTitle || ''}
						onChange={(v) => setAttributes({ mapTitle: v })}
					/>

					<ExpText
						weight={600}
						style={{
							display: 'block',
							marginTop: 18,
							marginBottom: 8,
							fontSize: 13,
						}}
					>
						{__('CTA-кнопки под контактами', 'services-blocks')}
					</ExpText>

					{(buttons || []).map((b, i) => (
						<div
							key={i}
							style={{
								border: '1px solid #e5e7eb',
								borderRadius: 12,
								padding: '10px 12px',
								marginBottom: 10,
								background: '#fff',
							}}
						>
							<div
								style={{
									display: 'flex',
									justifyContent: 'flex-end',
									gap: 4,
									marginBottom: 6,
								}}
							>
								<Button
									icon="arrow-up-alt2"
									label={__('Выше', 'services-blocks')}
									onClick={() => moveBtn(i, -1)}
									isSmall
									disabled={i === 0}
								/>
								<Button
									icon="arrow-down-alt2"
									label={__('Ниже', 'services-blocks')}
									onClick={() => moveBtn(i, 1)}
									isSmall
									disabled={i === (buttons || []).length - 1}
								/>
								<Button
									icon="trash"
									label={__('Удалить кнопку', 'services-blocks')}
									onClick={() => removeBtn(i)}
									isSmall
									isDestructive
								/>
							</div>

							<TextControl
								label={__('Текст кнопки', 'services-blocks')}
								value={b?.text || ''}
								onChange={(v) => updateBtn(i, { text: v })}
								style={{ marginBottom: 6 }}
							/>
							<TextControl
								label={__('Ссылка href', 'services-blocks')}
								value={b?.href || ''}
								onChange={(v) => updateBtn(i, { href: v })}
								style={{ marginBottom: 6 }}
							/>
							<SelectControl
								label={__('Вариант оформления', 'services-blocks')}
								value={b?.className || 'btn-ink'}
								options={BTN_CLASS_OPTIONS}
								onChange={(v) => updateBtn(i, { className: v })}
								style={{ marginBottom: 6 }}
							/>
							<ToggleControl
								label={__('Открывать в новой вкладке', 'services-blocks')}
								checked={!!b?.blank}
								onChange={(v) => updateBtn(i, { blank: v })}
							/>
						</div>
					))}

					<Button variant="secondary" icon={plus} onClick={addBtn} isSmall>
						{__('Добавить CTA-кнопку', 'services-blocks')}
					</Button>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="container">
					<div
						className="sec-head rv"
						style={{ textAlign: 'center' }}
					>
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
							placeholder={__('Заголовок H2…', 'services-blocks')}
						/>
					</div>

					<div className="con-grid rv">
						<div className="con-card">
							{(lines || []).map((l, i) => (
								<div className="con-line" key={i}>
									<div
										className="ci"
										title={__(
											'Иконка меняется в панели сайдбара',
											'services-blocks'
										)}
									>
										{l?.icon || '📍'}
									</div>
									<div>
										<RichText
											tagName="b"
											value={l?.bold}
											onChange={(v) => updateLine(i, { bold: v })}
											placeholder={__(
												'Жирный заголовок…',
												'services-blocks'
											)}
										/>
										<RichText
											tagName="small"
											value={l?.small}
											onChange={(v) => updateLine(i, { small: v })}
											placeholder={__('Подпись…', 'services-blocks')}
										/>
									</div>
								</div>
							))}

							{(buttons || []).some((b) => b && b.text) ? (
								<div
									style={{
										display: 'flex',
										gap: '0.8rem',
										flexWrap: 'wrap',
										marginTop: '0.4rem',
									}}
								>
									{(buttons || []).map((b, i) =>
										b && b.text ? (
											<a
												key={i}
												className={
													'btn ' + (b.className || 'btn-ink')
												}
												href="#block-preview"
												onClick={(e) => e.preventDefault()}
											>
												{b.text}
											</a>
										) : null
									)}
								</div>
							) : null}
						</div>

						<div className="con-map">
							{mapSrc ? (
								<iframe
									src={mapSrc}
									title={mapTitle || ''}
									loading="lazy"
								></iframe>
							) : (
								<div
									style={{
										aspectRatio: '1 / 1',
										width: '100%',
										borderRadius: 22,
										border: '1.5px dashed #cbd5e1',
										background: '#f8fafc',
										color: '#64748b',
										display: 'grid',
										placeItems: 'center',
										padding: '0 1rem',
										textAlign: 'center',
										fontSize: '0.92rem',
										lineHeight: 1.5,
									}}
								>
									{__(
										'Поле «src для iframe-карты» в сайдбаре пока пустое — вставьте туда код встраивания Yandex/Google Maps.',
										'services-blocks'
									)}
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
}
