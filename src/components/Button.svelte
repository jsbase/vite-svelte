<script>
const colors = {
  indigo: 'bg-indigo-500 hover:bg-indigo-600 text-white'
};

const sizes = {
  md: 'px-4 py-2 rounded-md text-base'
};
</script>

<button class="btn {colors.indigo} md:{sizes.md}">
  <slot />
</button>

<style global lang="postcss">
.btn {
  @apply flex items-stretch rounded-lg px-5 py-3 text-center align-middle text-lg font-bold;
}
svg {
  @apply mt-1 mr-3;
}
</style>
