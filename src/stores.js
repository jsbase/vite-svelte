import {writable, derived} from 'svelte/store';
//import * as currentRouters from '../db.json';

/**
 * Store data
 */
let fallback = {routers: []};
export const apiData = writable(/* currentRouters || */ fallback);
export const routers = derived(apiData, ($apiData) => $apiData.routers || []);

/**
 * Filter titles
 */
export const routerTitles = derived(apiData, ($apiData) => {
  if ($apiData.routers.length) {
    return $apiData.routers.map((router) => router.title);
  }

  return [];
});
