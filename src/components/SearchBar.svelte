<script>
// @ts-nocheck
import Icon from '@iconify/svelte';
import searchIcon from '@iconify/icons-bx/search';

/* function onSearch(event) {
    console.log('filterResults: ', event);
    // dispatch "search"
}

// on:click={onSearch}> */
</script>

<!-- svelte-ignore a11y-autofocus -->
<nav class="flex w-full grow flex-col">
  <div class="container mx-auto bg-white py-4 text-black">
    <input
      id="searchfield"
      type="search"
      placeholder="Search..."
      autofocus="autofocus"
      class="form-text focus:border-transparent focus:shadow-xl focus:outline-none" />
  </div>
</nav>

<style global lang="postcss">
/* stylelint-disable CssSyntaxError */
/* button {
  @apply rounded bg-indigo-500 py-2 px-4 font-bold text-white;
}
 */
.form-text {
  @apply w-full appearance-none rounded border bg-white p-6 p-2 text-xl leading-normal text-gray-800 shadow transition;
}
</style>
