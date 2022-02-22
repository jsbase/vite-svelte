import { get, set, writable } from 'svelte/store';

let routes = writable([]);

export const setRoute = set;

export default get(routes);
