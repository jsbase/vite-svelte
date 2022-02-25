<script>
const indigo = 'bg-indigo-500 hover:bg-indigo-600 text-white';
const size = 'px-5 py-3 font-bold text-base';
export let type;
</script>

<button {type} class="btn {indigo} {size}">
  <slot />
</button>

<style global lang="postcss">
.btn {
  @apply flex items-stretch rounded border-transparent text-center align-middle outline-offset-0;
}
svg {
  @apply mt-1 mr-3;
}
</style>
