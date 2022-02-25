<script>
// @ts-nocheck
import JsonTree from 'svelte-json-tree';
import {onMount} from 'svelte';
// import {apiData, routers, routerTitles} from '../stores.js';
// import * as routers from '../../db.json';

const ROUTERS_API = import.meta.env.VITE_ROUTERS_API;

let emptyData = {
  title: '',
  url: '',
  tags: []
};

// render with vite backend
//const value = Routers.routers || emptyData;
//console.log(JSON.stringify(value));

// render with fetch and async await
let value = [];

onMount(async () => {
  const res = await fetch(ROUTERS_API);
  value = (await res.json()) || emptyData;
});

// render with fetch and promises
/* fetch(ROUTERS_API)
  .then(response => response.json())
  .then(data => {
	console.log(data);
	routers.set(data);
	value = data;
  }).catch(error => {
	console.log(error);
	return [];
  }); */
</script>

<h1>await</h1>
{#await value}
  <!-- pending -->
  <p class="text-gray-600">Loading...</p>
{:then value}
  <!-- fulfilled -->
  <p class="text-green-600">Loaded!</p>
  <JsonTree {value} />
{:catch error}
  <!-- rejected -->
  <p class="text-red-600">Something went wrong! (Error: {error.message})</p>
{/await}

<h1>simple if/else</h1>
{#if value}
  <JsonTree {value} />
{:else}
  <p class="text-red-600">Something went wrong!</p>
{/if}
