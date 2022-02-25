<script>
let title = '';
</script>

<button {title} class="btn">
  <slot />
</button>

<style global lang="postcss">
.btn {
  @apply flex items-stretch rounded bg-indigo-500 py-3 px-2 px-4 text-center align-middle font-bold text-gray-100;
}

.btn:hover {
  @apply bg-indigo-700;
}

svg {
  @apply mt-1 mr-3;
}
</style>
