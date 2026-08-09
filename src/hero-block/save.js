import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		eyebrow,
		title,
		subtitle,
		chips,
		ctaPrimaryText,
		ctaPrimaryUrl,
		ctaSecondaryText,
		phone,
		note,
		cf7Id,
		formTitle,
		formSubtitle,
		trustText,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: "hero",
		id: "hero",
	});

	return (
		<section {...blockProps}>
			<div className="container hero-grid">
				<div className="rv on">
					<RichText.Content tagName="div" className="eyebrow" value={eyebrow} />
					<RichText.Content tagName="h1" value={title} />
					<RichText.Content tagName="p" className="hero-sub" value={subtitle} />

					<div className="hero-chips">
						{chips.map((chip, index) => (
							<span className="chip" key={index}>
								{chip.iconClass ? (
									<span className={chip.iconClass}>{chip.icon}</span>
								) : (
									chip.icon
								)}{" "}
								{chip.text}
							</span>
						))}
					</div>

					<div className="hero-cta">
						<a className="btn btn-red btn-lg" href={ctaPrimaryUrl}>
							{ctaPrimaryText}
						</a>
						<a className="btn btn-out btn-lg" href={`tel:${phone}`}>
							{ctaSecondaryText}
						</a>
					</div>

					<RichText.Content tagName="p" className="hero-note" value={note} />
				</div>

				{cf7Id && (
					<div className="hero-form rv on">
						<RichText.Content tagName="h3" value={formTitle} />
						<RichText.Content tagName="p" value={formSubtitle} />

						{cf7Id && `[contact-form-7 id="${cf7Id}"]`}

						<RichText.Content
							tagName="div"
							className="hf-trust"
							value={trustText}
						/>
					</div>
				)}
			</div>
		</section>
	);
}
