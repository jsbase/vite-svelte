<script>
import Logo from './components/Logo.svelte';
import SearchBar from './components/SearchBar.svelte';
import SvelteJsonTree from './components/SvelteJsonTree.svelte';
import SvelteForm from './components/SvelteForm.svelte';
import "./index.css";
</script>

<header>
  <Logo />

  <div class="text-5xl font-extrabold">
    <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
      lancom help center
    </span>
  </div>
</header>

<main>
  <SearchBar />
  <SvelteJsonTree />
  <SvelteForm />
</main>

<footer>
  <ul>
    <li>
      <a href="https://github.com/jsbase/vite-svelte/">Edit on GitHub</a>
    </li>
    <li>
      <a href="https://stackblitz.com/edit/vite-svelte">Edit on Stackblitz</a>
    </li>
  </ul>
</footer>

<style type="postcss">
header {
  @apply sans-serif mb-6 px-6;
}
main {
  @apply text-gray-700 relative z-0 flex min-h-full w-full min-w-full items-center justify-center space-y-1 overflow-x-hidden overflow-y-scroll py-12 px-4 font-sans;
}

footer {
  @apply sans-serif w-full px-6 pb-6;
}

ul {
  @apply flex align-middle;
}
</style>
