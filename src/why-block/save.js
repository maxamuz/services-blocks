import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { eyebrow, title, cards } = attributes;

	return (
		<section {...useBlockProps.save({ className: 'sec', id: 'why' })}>
			<div className="container">
				<div className="sec-head rv">
					<div className="eyebrow">{eyebrow}</div>
					<h2>{title}</h2>
				</div>

				<div className="why-grid">
					{(cards || []).map((c, i) => (
						<div key={i} className="wcard rv">
							<div className="wi">{c.icon || '🛡'}</div>
							{!RichText.isEmpty(c.title) && (
								<RichText.Content tagName="b" value={c.title} />
							)}
							{!RichText.isEmpty(c.text) && (
								<RichText.Content tagName="p" value={c.text} />
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
