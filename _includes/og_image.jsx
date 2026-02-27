export default function ({ title, description, site, screenshot }) {
	const pageTitle = title || site?.title || "veirt's website";
	const pageDescription =
		description ||
		site?.description ||
		"wandering the web, building and breaking things, sometimes to solve a problem, sometimes to try an interesting idea.";
	const domain = site?.url?.replace("https://", "") ?? "veirt.is-a.dev";
	const author = site?.author?.name ?? "veirt";

	return (
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				backgroundColor: "#060709",
				backgroundImage:
					"linear-gradient(135deg, #0f1419 0%, #060709 50%, #060709 100%)",
				padding: "80px",
				fontFamily: "Inter, sans-serif",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					flex: 1,
					gap: "40px",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						flex: 1,
						gap: "32px",
					}}
				>
					<div
						style={{
							fontSize: 72,
							fontWeight: 800,
							color: "#e8e3e3",
							lineHeight: 1.1,
							letterSpacing: "-0.03em",
							maxWidth: screenshot ? "100%" : "90%",
						}}
					>
						{pageTitle}
					</div>
					<div
						style={{
							fontSize: 32,
							color: "#a4afcb",
							lineHeight: 1.4,
							maxWidth: screenshot ? "100%" : "85%",
							fontWeight: 400,
						}}
					>
						{pageDescription}
					</div>
				</div>

				{screenshot && (
					<div
						style={{
							display: "flex",
							width: "400px",
							height: "280px",
							borderRadius: "16px",
							overflow: "hidden",
							border: "2px solid #262930",
							boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
							flexShrink: 0,
						}}
					>
						<img
							src={
								screenshot.startsWith("http")
									? screenshot
									: `${site?.url}${screenshot}`
							}
							alt={`${pageTitle} screenshot`}
							width={400}
							height={280}
							style={{
								width: "400px",
								height: "280px",
								objectFit: "cover",
							}}
						/>
					</div>
				)}
			</div>

			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					borderTop: "1px solid #262930",
					paddingTop: "32px",
				}}
			>
				<div
					style={{
						fontSize: 26,
						color: "#7c7981",
						fontFamily: "monospace",
						letterSpacing: "0.02em",
					}}
				>
					{domain}
				</div>
				<div
					style={{
						fontSize: 26,
						color: "#5b73ae",
						fontWeight: 600,
						letterSpacing: "0.01em",
					}}
				>
					{author}
				</div>
			</div>
		</div>
	);
}
