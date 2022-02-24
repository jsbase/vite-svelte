// @ts-nocheck
import { writable, derived } from 'svelte/store';

/**
* Store data
*/
export const apiData = writable([]);

export const routers = derived(apiData, ($apiData) => {
  if ($apiData.routers) {
    return $apiData.routers;
  }

  return [];
});

/**
* Filter titles
*/
export const routerTitles = derived(apiData, ($apiData) => {
  if ($apiData.routers.length) {
    return $apiData.routers.map(router => router.title);
  }

  return [];
});

/*
import {get, writable} from 'svelte/store';
import * as RouterDataBase from '../../db.json';

let routes = writable(RouterDataBase);

export const Routers = get(routes);
*/
