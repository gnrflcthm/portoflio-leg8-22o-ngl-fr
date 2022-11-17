import { writable } from "svelte/store";

const currentSection = writable<string>("home");

export default currentSection;