import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		eyebrow,
		title,
		badgeScore,
		badgeStars,
		badgeMeta,
		reviews,
	} = attributes;

	return (
		<section
			{...useBlockProps.save({
				className: 'sec white',
				id: 'reviews',
			})}
		>
			<div className="container">
				<div className="rev-top rv">
					<div className="sec-head" style={{ marginBottom: 0 }}>
						<div className="eyebrow">{eyebrow}</div>
						<h2>{title}</h2>
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
								data-dir="-1"
								aria-label="Предыдущий отзыв"
								type="button"
							>
								←
							</button>
							<button
								className="rev-btn"
								data-dir="1"
								aria-label="Следующий отзыв"
								type="button"
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
									{!RichText.isEmpty(r.author) && (
										<RichText.Content tagName="b" value={r.author} />
									)}
									{!RichText.isEmpty(r.status) && (
										<RichText.Content tagName="small" value={r.status} />
									)}
								</div>
							</div>
							{!RichText.isEmpty(r.text) && (
								<RichText.Content tagName="p" value={r.text} />
							)}
							{!RichText.isEmpty(r.src) && (
								<RichText.Content tagName="div" className="src" value={r.src} />
							)}
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
