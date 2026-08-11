import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();

	const {
		yearsCount,
		yearsLabel,
		yearsDesc,
		carsCount,
		carsHasPlus,
		carsDesc,
		adaptersCount,
		adaptersHasPlus,
		adaptersDesc,
		ratingValue,
		ratingDesc,
	} = attributes;

	return (
		<div {...blockProps}>
			<div className="trustbar">
				<div className="container trust-grid">
					<div className="rv">
						<div className="num">
							<span data-to={yearsCount}>0</span> {yearsLabel}
						</div>
						<RichText.Content tagName="p" value={yearsDesc} />
					</div>

					<div className="rv">
						<div className="num">
							<span data-to={carsCount}>0</span>
							{carsHasPlus && <i>+</i>}
						</div>
						<RichText.Content tagName="p" value={carsDesc} />
					</div>

					<div className="rv">
						<div className="num">
							<span data-to={adaptersCount}>0</span>
							{adaptersHasPlus && <i>+</i>}
						</div>
						<RichText.Content tagName="p" value={adaptersDesc} />
					</div>

					<div className="rv">
						<div className="num">
							<span data-to={ratingValue}>0</span>
						</div>
						<RichText.Content tagName="p" value={ratingDesc} />
					</div>
				</div>
			</div>
		</div>
	);
}
