<script>
 /**
  * See: https://tailwindcss.com/docs/hover-focus-and-other-states
  */
 function filterResults (event) {
   console.log('filterResults: ', event);
 }
</script>

<div class="fixed top-0 left-0 w-full h-full bg-gray-200 z-40 select-none">
  <div class="w-4/6 z-50 relative mx-auto mt-36">
    <div class="bg-white w-full h-16 rounded-xl mb-3 shadow-lg p-2">
      <input type="text" placeholder="Search" class="form-text w-full h-full text-2xl rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
    </div>
    <button title="search" type="button" on:click={filterResults}>🕵️ Search</button>
  </div>
</div>

<style type="postcss">
  button {
    @apply pt-4 py-5 pb-5;
  }

  .form-text {
    @apply appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md;
  }
</style>