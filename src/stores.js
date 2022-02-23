import {get, writable} from 'svelte/store';
import * as RouterDataBase from '../../db.json';

let routes = writable(RouterDataBase);

export const Routers = get(routes);
