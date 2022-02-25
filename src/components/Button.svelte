<script>
let title = '';
</script>

<button {title} class="btn hover:bg-indigo-700">
  <slot />
</button>

<style global lang="postcss">
.btn {
  @apply rounded bg-indigo-500 py-2 px-4 font-bold text-gray-100;
}
</style>
