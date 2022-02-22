<script>
import { routingTables } from './stores.js';

let id = `toggler--${Math.random()}`
let name = name;
let value = value;

let {
  formInfo,
  formValues
} = routingTables;

$: fValues = formValues.length === 1 ? formValues[0] : formValues;

function save(payload) {
  fValues routingTables.push(payload);

  set(fValues);
}
</script>

<input {{ id }}
       {{ name }}
       {{ value }}
       on:input={save} bind:group={checkbox}
       type="checkbox" class="hidden">

<label for="{ id }">
	<span title="{ name.toUpperCase() }"></span>
</label>

<style type="postcss">
label {
 @apply flex items-center justify-start w-10 border border-black h-6 p-1 rounded-full cursor-pointer;
}

label > span {
  @apply w-4 h-4 bg-black rounded-full;
}
</style>
