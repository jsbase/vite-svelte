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
<nav>
  <form action="http://localhost:3303/routers" method="post">
    <input
      id="searchfield"
      type="search"
      placeholder="What are you looking for?"
      autofocus="autofocus"
      class="form-input rounded border-transparent px-4 py-3 focus:shadow-xl focus:outline-none" />

    <Button>
      <Icon icon={searchIcon} />
      <span class="group-focus:hidden">Search</span>
    </Button>
  </form>
</nav>

<style global lang="postcss">
nav {
  @apply container mx-auto w-full;
}
form {
  @apply flex w-full flex-row py-4;
}
input {
  @apply mr-5 grow appearance-none rounded border bg-white p-6 p-2 text-xl leading-normal text-gray-800 shadow outline-offset-0 transition;
}
</style>
