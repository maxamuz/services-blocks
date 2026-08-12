import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	const {
		eyebrow,
		eyebrowColor,
		title,
		titleColor,
		description,
		makeGroupTitle,
		gearGroupTitle,
		methodGroupTitle,
		makePills,
		gearPills,
		methodPills,
		workPrices,
		oilPrices,
		timeLabels,
		asideTitle,
		workLabel,
		oilLabel,
		timeLabel,
		totalLabel,
		ctaText,
		ctaHref,
		disclaimer,
		emptyValue,
	} = attributes;

	function esc(s) {
		if (s === undefined || s === null) return "";
		return String(s);
	}

	const workData = workPrices || {};
	const oilData = oilPrices || {};
	const timeData = timeLabels || {};

	function pillsList(items) {
		return (items || []).map(function (p, i) {
			return Object.assign({ label: "", value: "v" + i, default: false }, p);
		});
	}

	const makeList = pillsList(makePills);
	const gearList = pillsList(gearPills);
	const methodList = pillsList(methodPills);

	const dWork =
		"data-work=\"" +
		escapeAttr(JSON.stringify(workData)) +
		"\"";
	const dOil =
		"data-oil=\"" + escapeAttr(JSON.stringify(oilData)) + "\"";
	const dTime =
		"data-time=\"" + escapeAttr(JSON.stringify(timeData)) + "\"";
	const dEmpty = "data-empty=\"" + escapeAttr(esc(emptyValue)) + "\"";

	function escapeAttr(str) {
		if (typeof str !== "string") return "";
		return str
			.replace(/&/g, "&amp;")
			.replace(/"/g, "&quot;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;");
	}

	return (
		<div {...blockProps}>
			<section className="sec calc" id="calc">
				<div className="container">
					<div className="sec-head rv">
						<div
							className="eyebrow"
							style={
								eyebrowColor
									? { color: eyebrowColor }
									: undefined
							}
						>
							<RichText.Content value={eyebrow} />
						</div>
						<h2
							style={
								titleColor
									? { color: titleColor }
									: undefined
							}
						>
							<RichText.Content value={title} />
						</h2>
						{description && (
							<RichText.Content tagName="p" value={description} />
						)}
					</div>

					<div
						className="calc-grid"
						{...{
							["data-work"]: JSON.stringify(workData),
							["data-oil"]: JSON.stringify(oilData),
							["data-time"]: JSON.stringify(timeData),
							["data-empty"]: esc(emptyValue),
						}}
					>
						<div className="rv">
							<div className="pill-group">
								<h4>
									<RichText.Content value={makeGroupTitle} />
								</h4>
								<div className="pills" data-group="make">
									{makeList.map(function (p, i) {
										return (
											<button
												key={i}
												type="button"
												className={
													"pill" +
													(p.default ? " act" : "")
												}
												data-val={esc(p.value)}
											>
												<RichText.Content value={p.label} />
											</button>
										);
									})}
								</div>
							</div>

							<div className="pill-group">
								<h4>
									<RichText.Content value={gearGroupTitle} />
								</h4>
								<div className="pills" data-group="gear">
									{gearList.map(function (p, i) {
										return (
											<button
												key={i}
												type="button"
												className={
													"pill" +
													(p.default ? " act" : "")
												}
												data-val={esc(p.value)}
											>
												<RichText.Content value={p.label} />
											</button>
										);
									})}
								</div>
							</div>

							<div className="pill-group">
								<h4>
									<RichText.Content value={methodGroupTitle} />
								</h4>
								<div className="pills" data-group="method">
									{methodList.map(function (p, i) {
										return (
											<button
												key={i}
												type="button"
												className={
													"pill" +
													(p.default ? " act" : "")
												}
												data-val={esc(p.value)}
											>
												<RichText.Content value={p.label} />
											</button>
										);
									})}
								</div>
							</div>
						</div>

						<aside className="calc-res rv">
							<h3>
								<RichText.Content value={asideTitle} />
							</h3>
							<div className="crow">
								<span>
									<RichText.Content value={workLabel} />
								</span>
								<b id="calcWork">{esc(emptyValue)}</b>
							</div>
							<div className="crow">
								<span>
									<RichText.Content value={oilLabel} />
								</span>
								<b id="calcOil">{esc(emptyValue)}</b>
							</div>
							<div className="crow">
								<span>
									<RichText.Content value={timeLabel} />
								</span>
								<b id="calcTime">{esc(emptyValue)}</b>
							</div>
							<div className="ctotal">
								<span>
									<RichText.Content value={totalLabel} />
								</span>
								<b id="calcTotal">{esc(emptyValue)}</b>
							</div>
							<a className="btn btn-red" href={ctaHref || "#booking"}>
								<RichText.Content value={ctaText} />
							</a>
							{disclaimer && (
								<small>
									<RichText.Content value={disclaimer} />
								</small>
							)}
						</aside>
					</div>
				</div>
			</section>
		</div>
	);
}
