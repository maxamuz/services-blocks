import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	const { eyebrow, title, imageUrl, imageAlt, quote, items } = attributes;

	return (
		<div {...blockProps}>
			<section className="sec white" id="honest">
				<div className="container honest-grid">
					<div className="honest-photo rv">
						{imageUrl && (
							<img
								className="honest-img"
								src={imageUrl}
								alt={imageAlt}
								loading="lazy"
							/>
						)}
						<div className="honest-quote">
							<RichText.Content value={quote} />
						</div>
					</div>

					<div className="rv">
						<RichText.Content
							tagName="div"
							className="eyebrow"
							value={eyebrow}
						/>
						<RichText.Content tagName="h2" value={title} />

						<div className="honest-list">
							{items.map(function (item, i) {
								return (
									<div className="h-item" key={i}>
										<div className="ic">{item.icon}</div>
										<div>
											<b>
												<RichText.Content value={item.title} />
											</b>
											<RichText.Content tagName="p" value={item.text} />
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
