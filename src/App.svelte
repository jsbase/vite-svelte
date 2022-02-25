<script>
import Logo from './components/Logo.svelte';
import SearchBar from './components/SearchBar.svelte';
import SvelteJsonTree from './components/SvelteJsonTree.svelte';
import SvelteForm from './components/SvelteForm.svelte';
</script>

<header>
  <Logo />

  <h1>comCenter</h1>
</header>

<main>
  <SearchBar />
  <SvelteJsonTree />
  <SvelteForm />
</main>

<footer>
  <ul class="divide-y divide-slate-200 p-6">
    <li class="flex py-4 first:pt-0 last:pb-0">
      <div class="ml-3 overflow-hidden">
        <p class="text-sm font-medium text-slate-900">Edit on</p>
        <a
          href="https://github.com/jsbase/vite-svelte/"
          class="truncate text-sm text-slate-500">GitHub</a>
      </div>
    </li>
    <li class="flex py-4 first:pt-0 last:pb-0">
      <div class="ml-3 overflow-hidden">
        <p class="text-sm font-medium text-slate-900">Edit on</p>
        <a
          href="https://stackblitz.com/edit/vite-svelte/"
          class="truncate text-sm text-slate-500">Stackblitz</a>
      </div>
    </li>
  </ul>
</footer>

<style global lang="postcss">
:global(body) {
  @apply bg-slate-300 font-sans;
}
header {
  @apply mb-6 px-6;
}
h1 {
  @apply mt-6 text-center text-5xl font-extrabold text-slate-900;
}
main {
  @apply relative z-0 min-h-full w-full min-w-full items-center justify-center space-y-1 overflow-x-hidden overflow-y-scroll py-12 px-4 text-gray-700;
}
footer {
  @apply w-full px-6 pb-6;
}
ul {
  @apply flex align-middle;
}
a {
  @apply outline-offset-0;
}
</style>
