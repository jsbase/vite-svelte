<script>
  import Icon from '@iconify/svelte';
  import searchIcon from '@iconify/icons-bx/search';
  function onSearch(event) {
    console.log('filterResults: ', event);
  }
</script>

<div class="z-40 select-none bg-gray-300">
  <div class="relative z-50 mx-auto mt-36 w-4/6">
    <div class="mb-3 h-16 w-full rounded-xl bg-white p-2 shadow-lg">
      <!-- svelte-ignore a11y-autofocus -->
      <input
        name="search"
        type="text"
        placeholder="Search"
        autofocus
        class="form-text focus:border-blue-300 focus:outline-none focus:ring"
      />
    </div>

    <button
      title="search"
      type="button"
      class="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
      on:click={onSearch}
    >
      <Icon icon={searchIcon} class="mr-4" />
      <span>Search</span>
    </button>
  </div>
</div>

<style type="postcss">
  /* see: https://tailwindcss.com/docs/hover-focus-and-other-states */
  button {
    @apply rounded-t-md border border-teal-800 bg-teal-400 py-5 pt-4 pb-5 text-center text-lg font-medium text-white;
  }

  .form-text {
    @apply h-ful relative block w-full appearance-none rounded-t-md border border-gray-300 px-3 py-2 text-2xl placeholder-gray-500;
  }
</style>
