<script>
//import Routers from '../stores.js';
import { createEventDispatcher } from 'svelte';

let id = `toggler--${Math.random()}`
let name = name;
let value = value;

function save(event) {
  console.log('save: ', event);
}
</script>

<input id="{ id }"
       name="{ name }"
       value="{ value }"
       type="checkbox"
       class="hidden"
       on:input={ save } bind:group={ name } />

<label for="{ id }">
	<span title="{ name.toUpperCase() }"></span>
</label>

<!-- README: https://tailwindcomponents.com/component/toggle-switch ->
<!--
<div class="flex items-start">
  <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
    <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
    
    <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
  </div>
  <label for="toggle" class="text-xs text-gray-700">Toggle me</label>
</div>
-->

<style type="postcss">
label {
 @apply flex items-center justify-start w-10 border border-black h-6 p-1 rounded-full cursor-pointer;
}

label > span {
  @apply w-4 h-4 bg-black rounded-full;
}
</style>
