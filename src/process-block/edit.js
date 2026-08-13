import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
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
		steps,
		comfortImageUrl,
		comfortImageAlt,
		comfortTitle,
		comfortText,
	} = attributes;

	const blockProps = useBlockProps({
		className: 'sec white',
		id: 'process',
	});

	function updateStep(index, key, value) {
		const next = [...(steps || [])];
		if (!next[index]) next[index] = {};
		next[index] = { ...next[index], [key]: value };
		setAttributes({ steps: next });
	}

	function removeStep(index) {
		const next = (steps || []).filter((_, i) => i !== index).map((s, i) => ({
			...s,
			n: i + 1,
		}));
		setAttributes({ steps: next });
	}

	function addStep() {
		const next = [...(steps || [])];
		next.push({ n: next.length + 1, title: 'Шаг', text: 'Описание шага.' });
		setAttributes({ steps: next });
	}

	function moveStep(index, dir) {
		const next = [...(steps || [])];
		const swap = index + dir;
		if (swap < 0 || swap >= next.length) return;
		const tmp = next[index];
		next[index] = { ...next[swap], n: index + 1 };
		next[swap] = { ...tmp, n: swap + 1 };
		setAttributes({ steps: next });
	}

	function onSelectComfortImage(img) {
		setAttributes({
			comfortImageUrl: img.url,
			comfortImageAlt: img.alt || attributes.comfortImageAlt || 'Комфорт',
		});
	}

	function removeComfortImage() {
		setAttributes({ comfortImageUrl: '' });
	}

	return (
		<section {...blockProps}>
			<InspectorControls>
				<PanelBody title={__('Шапка', 'services-blocks')}>
					<TextControl
						label={__('Над eyebrow (красная плашка)', 'services-blocks')}
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
					title={__('Шаги процесса', 'services-blocks')}
					initialOpen={true}
				>
					<Button
						icon={plus}
						variant="secondary"
						style={{ marginBottom: '12px' }}
						onClick={addStep}
					>
						{__('Добавить шаг', 'services-blocks')}
					</Button>
					<div style={{ display: 'grid', gap: '14px' }}>
						{(steps || []).map((step, i) => (
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
									<b>Шаг {step.n || i + 1}</b>
									<div style={{ display: 'flex', gap: '4px' }}>
										<Button
											size="small"
											variant="secondary"
											isSmall
											onClick={() => moveStep(i, -1)}
											disabled={i === 0}
										>
											↑
										</Button>
										<Button
											size="small"
											variant="secondary"
											isSmall
											onClick={() => moveStep(i, 1)}
											disabled={i === (steps || []).length - 1}
										>
											↓
										</Button>
										<Button
											size="small"
											icon={trash}
											variant="secondary"
											isDestructive
											onClick={() => removeStep(i)}
										/>
									</div>
								</div>
								<TextControl
									label={__('H3 заголовок шага', 'services-blocks')}
									value={step.title || ''}
									onChange={(v) => updateStep(i, 'title', v)}
								/>
								<TextareaControl
									label={__('Описание p', 'services-blocks')}
									value={step.text || ''}
									onChange={(v) => updateStep(i, 'text', v)}
									rows={2}
								/>
							</div>
						))}
					</div>
				</PanelBody>

				<PanelBody
					title={__('Комфортная зона (кофе)', 'services-blocks')}
					initialOpen={true}
				>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectComfortImage}
							allowedTypes={['image']}
							value={comfortImageUrl ? 0 : 0}
							render={({ open }) => (
								<div style={{ marginBottom: '10px' }}>
									{comfortImageUrl ? (
										<div>
											<div
												style={{
													width: '100%',
													borderRadius: '10px',
													overflow: 'hidden',
													border: '1px solid #e5e7eb',
													marginBottom: '8px',
												}}
											>
												<img
													src={comfortImageUrl}
													style={{ width: '100%', display: 'block' }}
													alt={comfortImageAlt || ''}
												/>
											</div>
											<div style={{ display: 'flex', gap: '6px' }}>
												<Button variant="secondary" onClick={open}>
													{__('Заменить', 'services-blocks')}
												</Button>
												<Button
													variant="secondary"
													isDestructive
													onClick={removeComfortImage}
												>
													{__('Удалить', 'services-blocks')}
												</Button>
											</div>
										</div>
									) : (
										<Button variant="secondary" onClick={open}>
											{__('Загрузить изображение кофе/зоны', 'services-blocks')}
										</Button>
									)}
								</div>
							)}
						/>
					</MediaUploadCheck>
					<TextControl
						label={__('Alt для изображения', 'services-blocks')}
						value={comfortImageAlt || ''}
						onChange={(v) => setAttributes({ comfortImageAlt: v })}
						help={__('Желательно: 3-6 слов для доступности.', 'services-blocks')}
					/>
					<TextControl
						label={__('H3 заголовок', 'services-blocks')}
						value={comfortTitle || ''}
						onChange={(v) => setAttributes({ comfortTitle: v })}
					/>
					<TextareaControl
						label={__('Описание p', 'services-blocks')}
						value={comfortText || ''}
						onChange={(v) => setAttributes({ comfortText: v })}
						rows={4}
					/>
				</PanelBody>
			</InspectorControls>

			<div className="container">
				<div className="sec-head rv">
					<div className="eyebrow">
						<RichText
							placeholder={__('Шаг 6 · Как это проходит', 'services-blocks')}
							value={eyebrow}
							onChange={(v) => setAttributes({ eyebrow: v })}
						/>
					</div>
					<h2>
						<RichText
							placeholder={__('Понятный процесс — вы контролируете каждый шаг', 'services-blocks')}
							value={title}
							onChange={(v) => setAttributes({ title: v })}
						/>
					</h2>
				</div>

				<div className="proc-grid">
					{(steps || []).map((step, i) => (
						<div
							key={i}
							className="pstep rv"
							data-n={step.n || i + 1}
						>
							<h3>
								<RichText
									placeholder={__('Заголовок шага', 'services-blocks')}
									value={step.title || ''}
									onChange={(v) => updateStep(i, 'title', v)}
								/>
							</h3>
							<p>
								<RichText
									placeholder={__('Описание…', 'services-blocks')}
									value={step.text || ''}
									onChange={(v) => updateStep(i, 'text', v)}
								/>
							</p>
						</div>
					))}
				</div>

				<div className="proc-comfort rv">
					{comfortImageUrl ? (
						<img
							className="proc-comfort-img"
							src={comfortImageUrl}
							alt={comfortImageAlt || ''}
						/>
					) : (
						<figure>
							<div className="img-ph">☕</div>
						</figure>
					)}
					<div className="txt">
						<h3>
							<RichText
								placeholder={__('А вы в это время — кофе и Wi-Fi ☕', 'services-blocks')}
								value={comfortTitle || ''}
								onChange={(v) => setAttributes({ comfortTitle: v })}
							/>
						</h3>
						<p>
							<RichText
								placeholder={__('Уютная зона ожидания…', 'services-blocks')}
								value={comfortText || ''}
								onChange={(v) => setAttributes({ comfortText: v })}
							/>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
