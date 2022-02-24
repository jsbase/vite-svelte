<script>
// @ts-nocheck

import JsonTree from 'svelte-json-tree';
import { onMount } from 'svelte';
// import { apiData, routers, routerTitles } from '../stores.js';
// import * as routers from '../../db.json';

let value = [];

const emptyData = {
	title: '',
	url: '',
	tags: [],
};

// render with vite backend
//const value = Routers.routers || emptyData;
//console.log(JSON.stringify(value));

// render with fetch and async await
onMount(async () => {
	const res = await fetch('http://localhost:3303/routers')
	value = await res.json();
});

// render with fetch and promises
/*
fetch('http://localhost:3303/routers')
.then(response => response.json())
.then(data => {
	console.log(data);
	routers.set(data);
	value = data;
}).catch(error => {
	console.log(error);
	return [];
});
*/
</script>

<JsonTree {value} />