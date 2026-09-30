export const languages = {
	cs: "Čeština",
	en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "cs";

/** Text that differs per language (used in data files). */
export type Localized = Record<Lang, string>;

export const ui = {
	cs: {
		"meta.title": "Tomáš Osička | Full Stack Developer",
		"meta.description":
			"Full Stack Developer zaměřený na Vue, Django, Docker a moderní webové aplikace.",

		"nav.about": "O mně",
		"nav.skills": "Skills",
		"nav.projects": "Projekty",
		"nav.contact": "Kontakt",
		"nav.switch": "Přepnout do angličtiny",

		"hero.hello": "Ahoj, jsem",
		"hero.role": "Full Stack Developer",
		"hero.description": "Rád stavím moderní webové aplikace pomocí Vue a Django.",
		"hero.contact": "Kontakt",
		"hero.bubble": "Stavím ti web… 🧱",
		"hero.scroll": "Posunout dolů",

		"about.title": "O mně",
		"about.p1":
			"Jsem Full Stack Developer zaměřený na tvorbu moderních webových aplikací.",
		"about.p2":
			"Pracuji především s Vue.js na frontendu a Django na backendu. Zajímá mě návrh aplikací, architektura systémů a kvalitní řešení problémů.",
		"about.p3":
			"Ve svých projektech řeším celý životní cyklus aplikace – od návrhu databáze a API přes frontend až po Docker deployment a provoz na cloudu.",

		"skills.title": "Technologie",

		"projects.title": "Vybrané projekty",

		"contact.title": "Kontakt",
		"contact.text": "Máš zajímavý projekt nebo nabídku spolupráce? Napiš mi.",

		"footer.built": "Vytvořeno pomocí Astro.",
	},

	en: {
		"meta.title": "Tomáš Osička | Full Stack Developer",
		"meta.description":
			"Full Stack Developer focused on Vue, Django, Docker and modern web applications.",

		"nav.about": "About",
		"nav.skills": "Skills",
		"nav.projects": "Projects",
		"nav.contact": "Contact",
		"nav.switch": "Switch to Czech",

		"hero.hello": "Hi, I'm",
		"hero.role": "Full Stack Developer",
		"hero.description": "I love building modern web applications with Vue and Django.",
		"hero.contact": "Contact",
		"hero.bubble": "Building your website… 🧱",
		"hero.scroll": "Scroll down",

		"about.title": "About me",
		"about.p1":
			"I'm a Full Stack Developer focused on building modern web applications.",
		"about.p2":
			"I mainly work with Vue.js on the frontend and Django on the backend. I'm interested in application design, system architecture and solving problems well.",
		"about.p3":
			"In my projects I handle the whole application lifecycle – from database and API design through the frontend to Docker deployment and running it in the cloud.",

		"skills.title": "Technologies",

		"projects.title": "Selected projects",

		"contact.title": "Contact",
		"contact.text": "Got an interesting project or a collaboration offer? Get in touch.",

		"footer.built": "Built with Astro.",
	},
} as const;

export function getLang(locale: string | undefined): Lang {
	return locale && locale in languages ? (locale as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
	return (key: keyof (typeof ui)[typeof defaultLang]) =>
		ui[lang][key] ?? ui[defaultLang][key];
}

/** Home page URL for the given language. */
export function homePath(lang: Lang) {
	return lang === defaultLang ? "/" : `/${lang}/`;
}
