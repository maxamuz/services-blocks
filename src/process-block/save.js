import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		eyebrow,
		title,
		steps,
		comfortImageUrl,
		comfortImageAlt,
		comfortTitle,
		comfortText,
	} = attributes;

	return (
		<section {...useBlockProps.save({ className: 'sec white', id: 'process' })}>
			<div className="container">
				<div className="sec-head rv">
					<div className="eyebrow">{eyebrow}</div>
					<h2>{title}</h2>
				</div>

				<div className="proc-grid">
					{(steps || []).map((step, i) => (
						<div
							key={i}
							className="pstep rv"
							data-n={step.n || i + 1}
						>
							{!RichText.isEmpty(step.title) && (
								<RichText.Content tagName="h3" value={step.title} />
							)}
							{!RichText.isEmpty(step.text) && (
								<RichText.Content tagName="p" value={step.text} />
							)}
						</div>
					))}
				</div>

				<div className="proc-comfort rv">
					{comfortImageUrl ? (
						<img
							className="proc-comfort-img"
							src={comfortImageUrl}
							alt={comfortImageAlt || ''}
							loading="lazy"
						/>
					) : (
						<figure>
							<div className="img-ph">☕</div>
						</figure>
					)}
					<div className="txt">
						{!RichText.isEmpty(comfortTitle) && (
							<RichText.Content tagName="h3" value={comfortTitle} />
						)}
						{!RichText.isEmpty(comfortText) && (
							<RichText.Content tagName="p" value={comfortText} />
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
