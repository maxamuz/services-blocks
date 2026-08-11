import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	const {
		eyebrow,
		title,
		description,
		symptoms,
		verdictDefaultTitle,
		verdictDefaultText,
		ctaText,
		imageUrl,
		imageAlt,
		figcaption,
	} = attributes;

	return (
		<div {...blockProps}>
			<section className="sec white" id="check">
				<div className="container">
					<div className="sec-head rv">
						<RichText.Content
							tagName="div"
							className="eyebrow"
							value={eyebrow}
						/>
						<RichText.Content tagName="h2" value={title} />
						<RichText.Content tagName="p" value={description} />
					</div>

					<div className="check-wrap">
						<div className="rv">
							<div className="sym-chips" id="symChips">
								{symptoms &&
									symptoms.map((symptom, index) => (
										<button
											key={index}
											className="sym"
											data-symptom-index={index}
											type="button"
										>
											{symptom}
										</button>
									))}
							</div>

							<div className="verdict" id="verdict">
								<RichText.Content
									tagName="h3"
									id="verdictTitle"
									value={verdictDefaultTitle}
								/>
								<RichText.Content
									tagName="p"
									id="verdictText"
									value={verdictDefaultText}
								/>
								<a
									className="btn btn-red"
									href="#booking"
									id="verdictCta"
									style={{ display: "none" }}
								>
									{ctaText}
								</a>
							</div>
						</div>

						<div className="check-side rv">
							{imageUrl && (
								<img
									className="check-img"
									src={imageUrl}
									alt={imageAlt}
									loading="lazy"
								/>
							)}
							{figcaption && (
								<RichText.Content tagName="figcaption" value={figcaption} />
							)}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
