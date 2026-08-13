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
	const { eyebrow, title, cards } = attributes;

	const blockProps = useBlockProps({
		className: 'sec',
		id: 'why',
	});

	function updateCard(i, key, value) {
		const next = [...(cards || [])];
		if (!next[i]) next[i] = {};
		next[i] = { ...next[i], [key]: value };
		setAttributes({ cards: next });
	}

	function removeCard(i) {
		const next = (cards || []).filter((_, idx) => idx !== i);
		setAttributes({ cards: next });
	}

	function addCard() {
		const next = [...(cards || [])];
		next.push({ icon: '🛡', title: __("Заголовок", "services-blocks"), text: __("Описание преимущества.", "services-blocks") });
		setAttributes({ cards: next });
	}

	function moveCard(i, dir) {
		const next = [...(cards || [])];
		const swap = i + dir;
		if (swap < 0 || swap >= next.length) return;
		const tmp = next[i];
		next[i] = next[swap];
		next[swap] = tmp;
		setAttributes({ cards: next });
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
					title={__('Карточки преимуществ', 'services-blocks')}
					initialOpen={true}
				>
					<Button
						icon={plus}
						variant="secondary"
						style={{ marginBottom: '12px' }}
						onClick={addCard}
					>
						{__('Добавить карточку', 'services-blocks')}
					</Button>
					<div style={{ display: 'grid', gap: '14px' }}>
						{(cards || []).map((c, i) => (
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
										justifyContent: 'space-between',
										alignItems: 'center',
										marginBottom: '6px',
										gap: '6px',
									}}
								>
									<b>#{i + 1}</b>
									<div style={{ display: 'flex', gap: '4px' }}>
										<Button
											size="small"
											variant="secondary"
											isSmall
											onClick={() => moveCard(i, -1)}
											disabled={i === 0}
										>
											↑
										</Button>
										<Button
											size="small"
											variant="secondary"
											isSmall
											onClick={() => moveCard(i, 1)}
											disabled={i === (cards || []).length - 1}
										>
											↓
										</Button>
										<Button
											size="small"
											icon={trash}
											variant="secondary"
											isDestructive
											onClick={() => removeCard(i)}
										/>
									</div>
								</div>
								<TextControl
									label={__('Иконка (emoji или символ)', 'services-blocks')}
									value={c.icon || ''}
									onChange={(v) => updateCard(i, 'icon', v)}
									help={__('Пример: 🛡, 🔌, ✅', 'services-blocks')}
								/>
								<TextControl
									label={__('Заголовок (bold)', 'services-blocks')}
									value={c.title || ''}
									onChange={(v) => updateCard(i, 'title', v)}
								/>
								<TextareaControl
									label={__('Описание p', 'services-blocks')}
									value={c.text || ''}
									onChange={(v) => updateCard(i, 'text', v)}
									rows={2}
								/>
							</div>
						))}
					</div>
				</PanelBody>
			</InspectorControls>

			<div className="container">
				<div className="sec-head rv">
					<div className="eyebrow">
						<RichText
							placeholder={__('Почему ГаражСАО', 'services-blocks')}
							value={eyebrow}
							onChange={(v) => setAttributes({ eyebrow: v })}
						/>
					</div>
					<h2>
						<RichText
							placeholder={__('Что вы получаете, кроме свежего масла', 'services-blocks')}
							value={title}
							onChange={(v) => setAttributes({ title: v })}
						/>
					</h2>
				</div>

				<div className="why-grid">
					{(cards || []).map((c, i) => (
						<div key={i} className="wcard rv">
							<div className="wi">{c.icon || '🛡'}</div>
							<b>
								<RichText
									placeholder={__('Заголовок преимущества', 'services-blocks')}
									value={c.title || ''}
									onChange={(v) => updateCard(i, 'title', v)}
								/>
							</b>
							<p>
								<RichText
									placeholder={__('Описание…', 'services-blocks')}
									value={c.text || ''}
									onChange={(v) => updateCard(i, 'text', v)}
								/>
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
