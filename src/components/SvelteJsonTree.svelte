<script>
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

<div class="block w-full">
  <JsonTree {value} />
</div>
