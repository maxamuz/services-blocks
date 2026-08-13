import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { eyebrow, title, items } = attributes;

	return (
		<section
			{...useBlockProps.save({
				className: 'sec',
				id: 'faq',
			})}
		>
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
						{eyebrow}
					</div>
					<h2>{title}</h2>
				</div>

				<div className="faq-wrap rv">
					{(items || []).map((it, i) => (
						<div key={i} className="faq-item">
							<button
								className="faq-q"
								type="button"
								aria-expanded="false"
							>
								{!RichText.isEmpty(it.q) ? (
									<RichText.Content value={it.q} />
								) : null}
								<span className="pl">+</span>
							</button>
							<div className="faq-a">
								{!RichText.isEmpty(it.a) ? (
									<RichText.Content tagName="p" value={it.a} />
								) : null}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
