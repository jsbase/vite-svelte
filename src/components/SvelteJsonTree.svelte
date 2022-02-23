<script>
import JsonTree from 'svelte-json-tree'
import * as Routers from '../../db.json'

const emptyData = {
	title: '',
	url: '',
	tags: [],
};

const value = Routers.routers || emptyData;
</script>

<JsonTree value={value} />

<hr />

<p>{ JSON.stringify(value) }</p>
