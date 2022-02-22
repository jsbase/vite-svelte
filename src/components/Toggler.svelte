<script>
import { getRoutes, set } from './../stores.js';

let id = `toggler--${Math.random()}`
let name = name;
let value = value;

// let {
//  formInfo,
//  formValues
// } = routingTables;

//$: fValues = formValues.length === 1 ? formValues[0] : formValues;

function save(payload) {
  console.log('save: ', payload);
  
  // routingTables.push(payload);

  // set(routingTables);
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

<style type="postcss">
label {
 @apply flex items-center justify-start w-10 border border-black h-6 p-1 rounded-full cursor-pointer;
}

label > span {
  @apply w-4 h-4 bg-black rounded-full;
}
</style>
