export interface ContributionDay {
	date: string;
	count: number;
	level: number;
}

export const CONTRIBUTION_LEVEL_CLASSES = [
	"bg-line/50",
	"bg-accent/25",
	"bg-accent/45",
	"bg-accent/70",
	"bg-accent",
];

export function calendarLayout(days: ContributionDay[]) {
	if (!days.length) return { weeks: [], months: [], longestStreak: null };

	const firstDate = new Date(`${days[0].date}T00:00:00Z`);
	const leading = firstDate.getUTCDay();
	const cells: (ContributionDay | null)[] = [
		...Array.from({ length: leading }, () => null),
		...days,
	];
	const lastDate = new Date(`${days.at(-1)!.date}T00:00:00Z`);
	const trailing = 6 - lastDate.getUTCDay();
	cells.push(...Array.from({ length: trailing }, () => null));

	const weeks = Array.from({ length: cells.length / 7 }, (_, week) => ({
		days: cells.slice(week * 7, week * 7 + 7),
	}));
	const months: { name: string; week: number }[] = [];
	let longestStreak = 0;
	let streak = 0;

	for (const [index, day] of days.entries()) {
		const date = new Date(`${day.date}T00:00:00Z`);
		if (date.getUTCDate() === 1 || index === 0) {
			const week = Math.floor((index + leading) / 7);
			if (!months.length || week - months.at(-1)!.week >= 3) {
				months.push({
					name: new Intl.DateTimeFormat("en", { month: "short", timeZone: "UTC" }).format(
						date,
					),
					week,
				});
			}
		}

		streak = day.count > 0 ? streak + 1 : 0;
		longestStreak = Math.max(longestStreak, streak);
	}

	return { weeks, months, longestStreak };
}
