<script>
//import Routers from '../stores.js';
//import {createEventDispatcher} from 'svelte';

let id = `toggler--${Math.random()}`;
// @ts-ignore
let name = name;
// @ts-ignore
let value = value;

/* function onChange(event) {
  console.log('onChange: ', event);
}

//on:change={onChange} */
</script>

<div class="flex items-start">
  <input
    {id}
    {name}
    {value}
    type="checkbox"
    class="toggle-checkbox absolute block h-6 w-6 cursor-pointer appearance-none rounded border-4 bg-white"
    bind:group={name} />

  <label for={name} class="text-xs text-gray-700">
    <span>
      {name.toUpperCase()}
    </span>
  </label>
</div>

<!-- README: https://tailwindcomponents.com/component/toggle-switch

<div class="flex items-center justify-start">
  <div
    class="relative mr-2 inline-block w-10 select-none align-middle transition duration-200 ease-in">
    <input
      {id}
      {name}
      type="checkbox"
      class="toggle-checkbox absolute block h-6 w-6 cursor-pointer appearance-none rounded border-4 bg-white" />

    <label
      for={name}
      class="toggle-label block h-6 cursor-pointer overflow-hidden text-pink-300">
      <span class="text-xs text-gray-700">{name.toUpperCase()}</span>
    </label>
  </div>
</div> -->
<style scoped lang="postcss">
.toggle-checkbox {
  @apply rounded text-pink-500;
}
label {
  @apply flex cursor-pointer rounded-full border border-black p-1;
}
label > span {
  @apply h-6 min-h-full w-6 min-w-full;
}
</style>
