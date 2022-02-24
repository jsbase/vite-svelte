<script>
  import Logo from './components/Logo.svelte';
  import SearchBar from './components/SearchBar.svelte';
  import SvelteJsonTree from './components/SvelteJsonTree.svelte'
  import SvelteForm from './components/SvelteForm.svelte';
</script>

<header>
  <Logo />
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
    @apply px-6 mb-6 sans-serif;
  }

  main {
    @apply px-6 pb-6 sans-serif;
  }

  footer {
    @apply w-full px-6 pb-6 sans-serif;
  }

  ul {
    @apply flex align-middle;
  }
</style>
