import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	const {
		eyebrow,
		title,
		cardGoodLabel,
		cardGoodSum,
		cardGoodCurrency,
		cardGoodText,
		cardGoodWidth,
		cardGoodHasVs,
		cardBadLabel,
		cardBadSum,
		cardBadCurrency,
		cardBadText,
		cardBadWidth,
		note,
	} = attributes;

	return (
		<div {...blockProps}>
			<section className="sec" id="math">
				<div className="container">
					<div className="sec-head rv">
						<RichText.Content
							tagName="div"
							className="eyebrow"
							value={eyebrow}
						/>
						<RichText.Content tagName="h2" value={title} />
					</div>

					<div className="math-grid">
						<div className="math-card rv">
							{cardGoodHasVs && <div className="math-vs">VS</div>}
							<div className="lbl">
								<RichText.Content value={cardGoodLabel} />
							</div>
							<div className="sum">
								<RichText.Content value={cardGoodSum} />{" "}
								<i>
									<RichText.Content value={cardGoodCurrency} />
								</i>
							</div>
							<RichText.Content tagName="p" value={cardGoodText} />
							<div className="math-bar">
								<i data-w={cardGoodWidth}></i>
							</div>
						</div>

						<div className="math-card bad rv">
							<div className="lbl">
								<RichText.Content value={cardBadLabel} />
							</div>
							<div className="sum">
								<RichText.Content value={cardBadSum} />{" "}
								<i>
									<RichText.Content value={cardBadCurrency} />
								</i>
							</div>
							<RichText.Content tagName="p" value={cardBadText} />
							<div className="math-bar">
								<i data-w={cardBadWidth}></i>
							</div>
						</div>
					</div>

					<div className="math-note rv">
						<RichText.Content value={note} />
					</div>
				</div>
			</section>
		</div>
	);
}
