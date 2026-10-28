import { mkdir, readdir } from "node:fs/promises";
import { resolve, join, basename } from "node:path";
import sharp from "sharp";

const iconDirectory = resolve("public/assets/project-icons");
const outputDirectory = resolve("public/assets/social-cards");

await mkdir(outputDirectory, { recursive: true });

const icons = (await readdir(iconDirectory)).filter((file) => file.endsWith(".svg"));

for (const iconFile of icons) {
	const icon = await sharp(join(iconDirectory, iconFile), { density: 192 })
		.resize(256, 256, { fit: "contain" })
		.png()
		.toBuffer();

	await sharp({
		create: {
			width: 1200,
			height: 630,
			channels: 4,
			background: "#111213",
		},
	})
		.composite([{ input: icon, gravity: "center" }])
		.png({ compressionLevel: 9 })
		.toFile(join(outputDirectory, `${basename(iconFile, ".svg")}.png`));
}
