export function formatDate(date: Date, options?: Intl.DateTimeFormatOptions) {
	return new Intl.DateTimeFormat("en", {
		day: "numeric",
		month: "short",
		year: "numeric",
		...options,
	}).format(date);
}

export function escapeXml(value: string) {
	return value.replace(/[<>&'\"]/g, (character) => {
		const entities: Record<string, string> = {
			"<": "&lt;",
			">": "&gt;",
			"&": "&amp;",
			"'": "&apos;",
			'"': "&quot;",
		};
		return entities[character];
	});
}
