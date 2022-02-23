<script>
import JsonTree from 'svelte-json-tree';
import Routers from '../stores.js';
// import * as Routers from '../../db.json';

const emptyData = {
	title: '',
	url: '',
	tags: [],
};

// render with vite backend
// const value = Routers.routers || emptyData;
// console.log(JSON.stringify(value));

import { onMount } from 'svelte';

let routers = [];

onMount(async () => {
	const res = await fetch('http://localhost:3303/routers`);
	routers = await res.json();
});
</script>

<JsonTree {value} />
