import type { Localized } from "../i18n/ui";

interface SkillGroup {
	category: Localized;
	items: string[];
}

export const skills: SkillGroup[] = [

	{
		category: { cs: "Frontend", en: "Frontend" },
		items: [
			"HTML",
			"CSS",
			"JavaScript",
			"TypeScript",
			"Vue.js",
			"Astro"
		]
	},

	{
		category: { cs: "Backend", en: "Backend" },
		items: [
			"Python",
			"Django",
			"Django REST Framework",
			"REST API"
		]
	},

	{
		category: { cs: "Databáze", en: "Databases" },
		items: [
			"PostgreSQL",
			"SQLite"
		]
	},

	{
		category: { cs: "DevOps", en: "DevOps" },
		items: [
			"Docker",
			"Nginx",
			"Linux",
			"Oracle Cloud",
			"Git"
		]
	}

];