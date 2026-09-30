import type { Localized } from "../i18n/ui";

interface Project {
	title: Localized;
	description: Localized;
	longDescription: Localized;
	image: string;
	technologies: string[];
	github: string;
	demo: string;
}

export const projects: Project[] = [

	{
		title: {
			cs: "TaskHub",
			en: "TaskHub",
		},

		description: {
			cs: "Full-stack aplikace pro správu firemních procesů, uživatelů a dat.",
			en: "Full-stack application for managing company processes, users and data.",
		},

		longDescription: {
			cs: "Projekt řeší návrh REST API, autentizaci, práci s databází, role uživatelů a kompletní deployment pomocí Dockeru.",
			en: "The project covers REST API design, authentication, database work, user roles and a complete Docker deployment.",
		},

		image: "/projects/taskhub.png",

		technologies: [
			"Vue 3",
			"Django",
			"Django REST Framework",
			"PostgreSQL",
			"Docker",
			"Nginx"
		],

		github:
			"https://github.com/TommyShelby21/taskhub",

		demo:
			"#"

	},


	{
		title: {
			cs: "JavaScript aplikace",
			en: "JavaScript application",
		},

		description: {
			cs: "Interaktivní aplikace vytvořená pro rozšíření frontend zkušeností.",
			en: "Interactive application built to broaden my frontend experience.",
		},

		longDescription: {
			cs: "Projekt zaměřený na JavaScript, práci s API a moderní frontend postupy.",
			en: "A project focused on JavaScript, working with APIs and modern frontend practices.",
		},

		image: "/projects/javascript.png",

		technologies: [
			"JavaScript",
			"HTML",
			"CSS"
		],

		github:"#",

		demo:"#"

	},


	{
		title: {
			cs: "Python aplikace",
			en: "Python application",
		},

		description: {
			cs: "Aplikace zaměřená na backend logiku a práci s Pythonem.",
			en: "Application focused on backend logic and working with Python.",
		},

		longDescription: {
			cs: "Projekt pro demonstraci Python znalostí, struktury aplikace a čistého kódu.",
			en: "A project demonstrating Python skills, application structure and clean code.",
		},

		image: "/projects/python.png",

		technologies:[
			"Python",
			"API",
			"Database"
		],

		github:"#",

		demo:"#"

	}

];
