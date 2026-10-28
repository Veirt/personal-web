export const SITE_URL = "https://veirt.is-a.dev";

export type JsonLd = Record<string, unknown>;

export function absoluteUrl(path: string, site = new URL(SITE_URL)) {
	return new URL(path, site).href;
}

/**
 * Keep user-authored content from terminating the JSON-LD script element.
 * JSON.stringify is not enough when a title or description contains `<`.
 */
export function stringifyJsonLd(value: unknown) {
	return JSON.stringify(value)
		.replaceAll("<", "\\u003c")
		.replaceAll(">", "\\u003e")
		.replaceAll("&", "\\u0026");
}
