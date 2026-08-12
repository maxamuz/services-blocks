import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	const {
		eyebrow,
		title,
		description,
		cards,
		extraRows,
		footText,
		footBtnText,
		footBtnHref,
	} = attributes;

	const btnClass = function (style) {
		if (style === "red") return "btn btn-red";
		if (style === "ink") return "btn btn-ink";
		return "btn btn-out";
	};

	const greenVar = "#16a34a";

	return (
		<div {...blockProps}>
			<section className="sec" id="prices">
				<div className="container">
					<div className="sec-head rv">
						<RichText.Content
							tagName="div"
							className="eyebrow"
							value={eyebrow}
						/>
						<RichText.Content tagName="h2" value={title} />
						{description && (
							<RichText.Content tagName="p" value={description} />
						)}
					</div>

					<div className="price-cards">
						{cards.map(function (card, i) {
							return (
								<div
									className={
										"pcard rv" + (card.isHit ? " hit" : "")
									}
									key={i}
								>
									{card.isHit && card.hitLabel && (
										<span className="hit-tag">{card.hitLabel}</span>
									)}
									<RichText.Content tagName="h3" value={card.title} />
									<div className="p">
										<RichText.Content value={card.price} />
									</div>
									<div className="t">
										<RichText.Content value={card.timing} />
									</div>
									{card.features && card.features.length > 0 && (
										<ul>
											{card.features.map(function (f, fi) {
												return (
													<li key={fi}>
														<RichText.Content value={f} />
													</li>
												);
											})}
										</ul>
									)}
									<a
										className={btnClass(card.btnStyle)}
										href={card.btnHref || "#booking"}
									>
										<RichText.Content value={card.btnText} />
									</a>
								</div>
							);
						})}
					</div>

					{extraRows && extraRows.length > 0 && (
						<div className="price-extra rv">
							{extraRows.map(function (row, i) {
								return (
									<div className="prow" key={i}>
										<span>
											<RichText.Content value={row.label} />
										</span>
										<b
											style={
												row.isGreen
													? { color: greenVar }
													: undefined
											}
										>
											<RichText.Content value={row.value} />
										</b>
									</div>
								);
							})}
						</div>
					)}

					<div className="price-foot rv">
						{footText && <RichText.Content tagName="p" value={footText} />}
						<a className="btn btn-ink" href={footBtnHref || "#calc"}>
							<RichText.Content value={footBtnText} />
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
