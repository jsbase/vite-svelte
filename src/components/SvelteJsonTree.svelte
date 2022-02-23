<script>
import JsonTree from 'svelte-json-tree';
// import * as Routers from '../../db.json';

const emptyData = {
	title: '',
	url: '',
	tags: [],
};

// render with vite backend
// const value = Routers.routers || emptyData;

import { onMount } from 'svelte';

	let photos = [];

	onMount(async () => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
		photos = await res.json();
	});
</script>

<JsonTree value={value} />

<hr />

<p>{ JSON.stringify(value) }</p>
