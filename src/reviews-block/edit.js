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
	const {
		eyebrow,
		title,
		badgeScore,
		badgeStars,
		badgeMeta,
		reviews,
	} = attributes;

	const blockProps = useBlockProps({
		className: 'sec white',
		id: 'reviews',
	});

	function updateReview(i, key, value) {
		const next = [...(reviews || [])];
		if (!next[i]) next[i] = {};
		next[i] = { ...next[i], [key]: value };
		setAttributes({ reviews: next });
	}

	function removeReview(i) {
		const next = (reviews || []).filter((_, idx) => idx !== i);
		setAttributes({ reviews: next });
	}

	function addReview() {
		const next = [...(reviews || [])];
		next.push({
			ava: 'ИО',
			author: __("Имя Ф.", "services-blocks"),
			status: __("новый клиент", "services-blocks"),
			text: __("Текст отзыва…", "services-blocks"),
			src: '✓ ЯНДЕКС КАРТЫ · 5.0',
		});
		setAttributes({ reviews: next });
	}

	function moveReview(i, dir) {
		const next = [...(reviews || [])];
		const swap = i + dir;
		if (swap < 0 || swap >= next.length) return;
		const tmp = next[i];
		next[i] = next[swap];
		next[swap] = tmp;
		setAttributes({ reviews: next });
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
					title={__('Рейтинг-бейдж', 'services-blocks')}
					initialOpen={true}
				>
					<TextControl
						label={__('Оценка (score)', 'services-blocks')}
						value={badgeScore}
						onChange={(v) => setAttributes({ badgeScore: v })}
						help={__('Пример: 5.0', 'services-blocks')}
					/>
					<TextControl
						label={__('Звёзды', 'services-blocks')}
						value={badgeStars}
						onChange={(v) => setAttributes({ badgeStars: v })}
						help={__('Пример: ★★★★☆', 'services-blocks')}
					/>
					<TextControl
						label={__('Подпись под звёздами', 'services-blocks')}
						value={badgeMeta}
						onChange={(v) => setAttributes({ badgeMeta: v })}
					/>
				</PanelBody>

				<PanelBody
					title={__('Отзывы', 'services-blocks')}
					initialOpen={true}
				>
					<Button
						icon={plus}
						variant="secondary"
						style={{ marginBottom: '12px' }}
						onClick={addReview}
					>
						{__('Добавить отзыв', 'services-blocks')}
					</Button>
					<div style={{ display: 'grid', gap: '14px' }}>
						{(reviews || []).map((r, i) => (
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
									<b>#{i + 1} · {r.author || 'Без имени'}</b>
									<div style={{ display: 'flex', gap: '4px' }}>
										<Button
											size="small"
											variant="secondary"
											isSmall
											onClick={() => moveReview(i, -1)}
											disabled={i === 0}
										>
											↑
										</Button>
										<Button
											size="small"
											variant="secondary"
											isSmall
											onClick={() => moveReview(i, 1)}
											disabled={i === (reviews || []).length - 1}
										>
											↓
										</Button>
										<Button
											size="small"
											icon={trash}
											variant="secondary"
											isDestructive
											onClick={() => removeReview(i)}
										/>
									</div>
								</div>
								<TextControl
									label={__('Аватар (инициалы 2 буквы)', 'services-blocks')}
									value={r.ava || ''}
									onChange={(v) => updateReview(i, 'ava', v)}
								/>
								<TextControl
									label={__('Имя автора', 'services-blocks')}
									value={r.author || ''}
									onChange={(v) => updateReview(i, 'author', v)}
								/>
								<TextControl
									label={__('Статус/подзаголовок', 'services-blocks')}
									value={r.status || ''}
									onChange={(v) => updateReview(i, 'status', v)}
								/>
								<TextareaControl
									label={__('Текст отзыва', 'services-blocks')}
									value={r.text || ''}
									onChange={(v) => updateReview(i, 'text', v)}
									rows={3}
								/>
								<TextControl
									label={__('Источник (src)', 'services-blocks')}
									value={r.src || ''}
									onChange={(v) => updateReview(i, 'src', v)}
									help={__('Пример: ✓ ЯНДЕКС КАРТЫ · 5.0', 'services-blocks')}
								/>
							</div>
						))}
					</div>
				</PanelBody>
			</InspectorControls>

			<div className="container">
				<div className="rev-top rv">
					<div className="sec-head" style={{ marginBottom: 0 }}>
						<div className="eyebrow">
							<RichText
								placeholder={__('Отзывы', 'services-blocks')}
								value={eyebrow}
								onChange={(v) => setAttributes({ eyebrow: v })}
							/>
						</div>
						<h2>
							<RichText
								placeholder={__('Нас рекомендуют друзьям — буквально', 'services-blocks')}
								value={title}
								onChange={(v) => setAttributes({ title: v })}
							/>
						</h2>
					</div>
					<div className="rev-controls">
						<div className="rev-badge">
							<div className="score">{badgeScore}</div>
							<div>
								<div className="stars">{badgeStars}</div>
								<small>{badgeMeta}</small>
							</div>
						</div>
						<div className="rev-nav">
							<button
								className="rev-btn"
								type="button"
								onClick={(e) => e.preventDefault()}
								aria-label="Предыдущий отзыв"
							>
								←
							</button>
							<button
								className="rev-btn"
								type="button"
								onClick={(e) => e.preventDefault()}
								aria-label="Следующий отзыв"
							>
								→
							</button>
						</div>
					</div>
				</div>

				<div className="rev-slider" data-slider="reviews">
					{(reviews || []).map((r, i) => (
						<article key={i} className="rev-card">
							<div className="head">
								<div className="ava">{r.ava || 'ИО'}</div>
								<div>
									<b>
										<RichText
											placeholder={__('Имя Ф.', 'services-blocks')}
											value={r.author || ''}
											onChange={(v) => updateReview(i, 'author', v)}
										/>
									</b>
									<small>
										<RichText
											placeholder={__('статус клиента', 'services-blocks')}
											value={r.status || ''}
											onChange={(v) => updateReview(i, 'status', v)}
										/>
									</small>
								</div>
							</div>
							<p>
								<RichText
									placeholder={__('Текст отзыва…', 'services-blocks')}
									value={r.text || ''}
									onChange={(v) => updateReview(i, 'text', v)}
								/>
							</p>
							<div className="src">
								<RichText
									placeholder={__('✓ ИСТОЧНИК · 5.0', 'services-blocks')}
									value={r.src || ''}
									onChange={(v) => updateReview(i, 'src', v)}
								/>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
