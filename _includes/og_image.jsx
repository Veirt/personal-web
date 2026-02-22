export default function ({ title, description, site }) {
	return (
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-end",
				backgroundColor: "#0f0f0f",
				padding: "60px 72px",
				fontFamily: "Inter, sans-serif",
				gap: "16px",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "12px",
					flex: 1,
					justifyContent: "center",
				}}
			>
				<div
					style={{
						fontSize: 52,
						fontWeight: 700,
						color: "#f5f5f5",
						lineHeight: 1.2,
						letterSpacing: "-0.02em",
					}}
				>
					{title}
				</div>
				{description && (
					<div
						style={{
							fontSize: 24,
							color: "#888888",
							lineHeight: 1.5,
						}}
					>
						{description}
					</div>
				)}
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					borderTop: "1px solid #333",
					paddingTop: "20px",
				}}
			>
				<div
					style={{
						fontSize: 20,
						color: "#555555",
						fontFamily: "monospace",
					}}
				>
					{site?.url?.replace("https://", "") ?? "veirt.is-a.dev"}
				</div>
				<div
					style={{
						fontSize: 20,
						color: "#7c6af7",
						fontWeight: 600,
					}}
				>
					{site?.author?.name ?? "veirt"}
				</div>
			</div>
		</div>
	);
}
