<script>
// @ts-nocheck
import Icon from '@iconify/svelte';
import searchIcon from '@iconify/icons-bx/search';
import Button from './Button.svelte';

/*
function onSearch(event) {
    console.log('filterResults: ', event);
    // dispatch "search"
}
// on:click={onSearch}>
*/
</script>

<!-- svelte-ignore a11y-autofocus -->
<nav class="container mx-auto py-4">
  <input
    id="searchfield"
    type="search"
    placeholder="What are you looking for?"
    autofocus="autofocus"
    class="form-text focus:border-transparent focus:shadow-xl focus:outline-none" />

  <Button>
    <Icon icon={searchIcon} />
    <span class="group-focus:hidden">Search</span>
  </Button>
</nav>

<style global lang="postcss">
nav {
  @apply flex w-full grow flex-col;
}
.form-text {
  @apply w-full appearance-none rounded border bg-white p-6 p-2 text-xl leading-normal text-gray-800 shadow transition;
}
button {
  @apply rounded bg-indigo-500 py-2 px-4 font-bold text-white;
}
</style>
