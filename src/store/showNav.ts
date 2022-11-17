import { writable } from 'svelte/store'

const showNav = writable<boolean>(false);

export default showNav;