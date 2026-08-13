import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
} from '@wordpress/components';
import { plus, trash } from '@wordpress/icons';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { eyebrow, title, items } = attributes;

	const blockProps = useBlockProps({
		className: 'sec',
		id: 'faq',
	});

	function updateItem(i, key, value) {
		const next = [...(items || [])];
		if (!next[i]) next[i] = {};
		next[i] = { ...next[i], [key]: value };
		setAttributes({ items: next });
	}

	function removeItem(i) {
		const next = (items || []).filter((_, idx) => idx !== i);
		setAttributes({ items: next });
	}

	function addItem() {
		const next = [...(items || [])];
		next.push({
			q: __("Вопрос?", "services-blocks"),
			a: __("Ответ.", "services-blocks"),
		});
		setAttributes({ items: next });
	}

	function moveItem(i, dir) {
		const next = [...(items || [])];
		const swap = i + dir;
		if (swap < 0 || swap >= next.length) return;
		const tmp = next[i];
		next[i] = next[swap];
		next[swap] = tmp;
		setAttributes({ items: next });
	}

	return (
		<section {...blockProps}>
			<InspectorControls>
				<PanelBody title={__('Шапка', 'services-blocks')}>
					<TextControl
						label={__('Eyebrow', 'services-blocks')}
						value={eyebrow}
						onChange={(v) => setAttributes({ eyebrow: v })}
					/>
					<TextControl
						label={__('Заголовок H2', 'services-blocks')}
						value={title}
						onChange={(v) => setAttributes({ title: v })}
					/>
				</PanelBody>

				<PanelBody
					title={__('Вопросы и ответы', 'services-blocks')}
					initialOpen={true}
				>
					<Button
						icon={plus}
						variant="secondary"
						style={{ marginBottom: '12px' }}
						onClick={addItem}
					>
						{__('Добавить вопрос', 'services-blocks')}
					</Button>
					<div style={{ display: 'grid', gap: '14px' }}>
						{(items || []).map((it, i) => (
							<div
								key={i}
								style={{
									padding: '10px 12px',
									border: '1px solid #e5e7eb',
									borderRadius: '8px',
									background: '#fafafa',
								}}
							>
								<div
									style={{
										display: 'flex',
										gap: '6px',
										justifyContent: 'space-between',
										alignItems: 'center',
										marginBottom: '6px',
									}}
								>
									<b>#{i + 1}</b>
									<div style={{ display: 'flex', gap: '4px' }}>
										<Button
											size="small"
											variant="secondary"
											isSmall
											onClick={() => moveItem(i, -1)}
											disabled={i === 0}
										>
											↑
										</Button>
										<Button
											size="small"
											variant="secondary"
											isSmall
											onClick={() => moveItem(i, 1)}
											disabled={i === (items || []).length - 1}
										>
											↓
										</Button>
										<Button
											size="small"
											icon={trash}
											variant="secondary"
											isDestructive
											onClick={() => removeItem(i)}
										/>
									</div>
								</div>
								<TextControl
									label={__('Вопрос', 'services-blocks')}
									value={it.q || ''}
									onChange={(v) => updateItem(i, 'q', v)}
								/>
								<TextareaControl
									label={__('Ответ', 'services-blocks')}
									value={it.a || ''}
									onChange={(v) => updateItem(i, 'a', v)}
									rows={3}
								/>
							</div>
						))}
					</div>
				</PanelBody>
			</InspectorControls>

			<div className="container">
				<div
					className="sec-head rv"
					style={{
						textAlign: 'center',
						marginLeft: 'auto',
						marginRight: 'auto',
					}}
				>
					<div
						className="eyebrow"
						style={{ justifyContent: 'center' }}
					>
						<RichText
							placeholder={__('Вопросы и сомнения', 'services-blocks')}
							value={eyebrow}
							onChange={(v) => setAttributes({ eyebrow: v })}
						/>
					</div>
					<h2>
						<RichText
							placeholder={__('Отвечаем на то, что обычно смущает', 'services-blocks')}
							value={title}
							onChange={(v) => setAttributes({ title: v })}
						/>
					</h2>
				</div>

				<div className="faq-wrap rv">
					{(items || []).map((it, i) => (
						<div key={i} className="faq-item is-preview-open">
							<button
								className="faq-q"
								type="button"
								onClick={(e) => e.preventDefault()}
								aria-expanded="false"
							>
								<span className="faq-q-text">
									<RichText
										placeholder={__('Вопрос?', 'services-blocks')}
										value={it.q || ''}
										onChange={(v) => updateItem(i, 'q', v)}
									/>
								</span>
								<span className="pl">+</span>
							</button>
							<div className="faq-a">
								<p>
									<RichText
										placeholder={__('Ответ…', 'services-blocks')}
										value={it.a || ''}
										onChange={(v) => updateItem(i, 'a', v)}
									/>
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
