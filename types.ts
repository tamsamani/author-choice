/// <reference types="react" />
/// <reference path="module-env.d.ts" />

/**
 * Author Choice Web App &copy; 2018-2020
 * Author : TAMSAMANI Mohamed
 * Email : tamsmoha@gmail.com
 * Version : v0.1.0
 */


/** the available Languages for the App */
type Language = "en" | "ar";

/** The Mode type */
type ThemeMode = "dark" | "light";

/** The Possible Client Rule in the App */
type ClientRule = "Guest" | "Reader" | "Writer" | "Editor";

interface ClientParameters {
	language: Language;
	theme: ThemeMode;
}

interface Client {
	/** Special Token of the Actual Client */
	token: string;
	/** the Rule of the Client */
	rule: ClientRule;

	/** fovorites parameters of the cleint */
	parameters: ClientParameters;
}

interface User {
	/** The Unique ID of user */
	id: number;
	/** User Image Avatar */
	avatar: string;
}
