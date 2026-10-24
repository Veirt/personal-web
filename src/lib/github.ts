const username = "Veirt";

interface ContributionDay {
	date: string;
	count: number;
	level: number;
}

export interface GitHubActivity {
	total: number | null;
	longestStreak: number | null;
	weeks: { days: (ContributionDay | null)[] }[];
	months: { name: string; week: number }[];
}

function calendarLayout(days: ContributionDay[]) {
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
					name: new Intl.DateTimeFormat("en", { month: "short", timeZone: "UTC" }).format(date),
					week,
				});
			}
		}

		streak = day.count > 0 ? streak + 1 : 0;
		longestStreak = Math.max(longestStreak, streak);
	}

	return { weeks, months, longestStreak };
}

export async function getGitHubActivity(): Promise<GitHubActivity> {
	const empty: GitHubActivity = {
		total: null,
		longestStreak: null,
		weeks: [],
		months: [],
	};

	try {
		const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`, {
			headers: { accept: "application/json" },
			signal: AbortSignal.timeout(5000),
		});
		if (!response.ok) {
			console.warn(`GitHub contribution calendar returned ${response.status}.`);
			return empty;
		}

		const data = await response.json();
		const days: ContributionDay[] = Array.isArray(data.contributions)
			? data.contributions.map((day: { date: string; count: number; level?: number }) => ({
				date: day.date,
				count: day.count,
				level: day.level ?? 0,
			}))
			: [];
		const layout = calendarLayout(days);
		return {
			total: data.total?.lastYear ?? days.reduce((sum, day) => sum + day.count, 0),
			longestStreak: layout.longestStreak,
			weeks: layout.weeks,
			months: layout.months,
		};
	} catch (error) {
		console.warn("GitHub contribution calendar is unavailable:", error);
		return empty;
	}
}
