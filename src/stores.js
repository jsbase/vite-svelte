import {writable, derived} from 'svelte/store';
import * as currentRouters from '../db.json';

/**
 * Store data
 */
export const apiData = writable(currentRouters);
export const routers = derived(
  apiData,
  ($apiData) =>
    $apiData?.routers.map((r) => {
      r.title, r.url, r.tags;
    }) || []
);

/**
 * Filter titles
 */
export const routerTitles = derived(apiData, ($apiData) => {
  if ($apiData.routers.length) {
    return $apiData.routers.map((router) => router.title);
  }

  return [];
});
