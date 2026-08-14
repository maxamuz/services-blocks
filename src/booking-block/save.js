import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		eyebrow,
		title,
		description,
		perks,
		formTitle,
		formSubtitle,
		cf7Shortcode,
	} = attributes;

	return (
		<section
			{...useBlockProps.save({
				className: 'sec booking',
				id: 'booking',
			})}
		>
			<div className="container book-grid">
				<div className="book-left rv">
					<div className="eyebrow">{eyebrow}</div>
					{!RichText.isEmpty(title) && (
						<RichText.Content tagName="h2" value={title} />
					)}
					{!RichText.isEmpty(description) && (
						<RichText.Content tagName="p" value={description} />
					)}
					<ul className="book-perks">
						{(perks || []).map((t, i) =>
							!RichText.isEmpty(t) ? (
								<li key={i}>
									<RichText.Content value={t} />
								</li>
							) : null
						)}
					</ul>
				</div>

				<div className="book-form rv">
					{!RichText.isEmpty(formTitle) ? (
						<h3>
							<RichText.Content value={formTitle} />
						</h3>
					) : null}
					{!RichText.isEmpty(formSubtitle) ? (
						<p className="sub">
							<RichText.Content value={formSubtitle} />
						</p>
					) : null}
					{cf7Shortcode ? cf7Shortcode : null}
				</div>
			</div>
		</section>
	);
}
