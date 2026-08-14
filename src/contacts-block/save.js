import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { eyebrow, title, lines, buttons, mapSrc, mapTitle } = attributes;

	return (
		<section
			{...useBlockProps.save({
				className: "sec white",
				id: "contacts",
			})}
		>
			<div className="container">
				<div className="sec-head rv" style={{ textAlign: "center" }}>
					<div className="eyebrow">{eyebrow}</div>
					{!RichText.isEmpty(title) && (
						<RichText.Content tagName="h2" value={title} />
					)}
				</div>

				<div className="con-grid rv">
					<div className="con-card">
						{(lines || []).map((line, i) => {
							if (!line) return null;
							const { icon, bold, small, href, hrefType } = line;
							const isBlank = hrefType === "blank" || hrefType === "default";
							const rel = hrefType === "blank" ? "noopener" : null;
							const target = isBlank ? "_blank" : null;

							return (
								<div className="con-line" key={i}>
									<div className="ci">{icon}</div>
									<div>
										{!RichText.isEmpty(bold) ? (
											href ? (
												<b>
													<a
														href={href}
														{...(target ? { target } : {})}
														{...(rel ? { rel } : {})}
													>
														{bold}
													</a>
												</b>
											) : (
												<b>{bold}</b>
											)
										) : null}
										{!RichText.isEmpty(small) ? <small>{small}</small> : null}
									</div>
								</div>
							);
						})}

						{(buttons || []).some((b) => b && b.text) ? (
							<div
								style={{
									display: "flex",
									gap: "0.8rem",
									flexWrap: "wrap",
									marginTop: "0.4rem",
								}}
							>
								{(buttons || []).map((b, i) =>
									b && b.text ? (
										<a
											key={i}
											className={"btn " + (b.className || "btn-ink")}
											href={b.href || "#"}
											{...(b.blank
												? {
														target: "_blank",
														rel: "noopener",
												  }
												: {})}
										>
											{b.text}
										</a>
									) : null,
								)}
							</div>
						) : null}
					</div>

					{mapSrc ? (
						<div className="con-map">
							<iframe
								src={mapSrc}
								title={mapTitle || ""}
								loading="lazy"
								allowFullScreen
							></iframe>
						</div>
					) : null}
				</div>
			</div>
		</section>
	);
}
