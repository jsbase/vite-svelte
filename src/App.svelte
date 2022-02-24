<script>
  import Icon from '@iconify/svelte';
  import SvelteJsonTree from './components/SvelteJsonTree.svelte'
  //import closeFilled from '@iconify/icons-carbon/close-filled';
  //import addFilled from '@iconify/icons-carbon/add-filled';
  //import clearOutlined from '@iconify/icons-ant-design/clear-outlined';
  //import arrowReset24Filled from '@iconify/icons-fluent/arrow-reset-24-filled';
  //import Toggler from './components/Toggler.svelte';
  //import SearchBar from './components/SearchBar.svelte';
  //import SvelteForm from './components/SvelteForm.svelte';
  import Logo from './components/Logo.svelte';
</script>

<main>
  <Logo />

  <SvelteJsonTree />

  <!--
  <SvelteForm />
  -->

  <!--
  <form use:form on:submit|preventDefault={onSumbit} class="max-w-md w-full space-y-8 bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <label for="rtName">Create new routing table</label>
    <input name="rtName"
      id="rtName"
      type="text"
      placeholder="Name of the new routing table."
      required
      class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      bind:value={RouteList.routename} />

    <button title="save" type="submit">
      <span class="group-focus:hidden">save</span>
      <Icon icon={save24Filled} />
    </button>

    <button title="add route" type="button" on:click|preventDefault={onAdd}>
      <Icon icon={addFilled} />
    </button>

    <button title="reset route" type="button" on:click|preventDefault={() => RouteManager.init([emptyRoute])}>
      <Icon icon={arrowReset24Filled} />
    </button>

    <button title="clear field" on:click|preventDefault={() => RouteManager.clear()}>
      <Icon icon={clearOutlined} />
    </button>

    <div use:RouteManager.formValues class="w-full mt-8 space-y-6 flex items-center py-12 px-4">
      {#each $formValues as routeItem, i}
      <fieldset>
        <label for="title-{i}">Title</label>
        <input name="title"
          type="text"
          id="title-{i}"
          required
          class="form-text focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 focus:outline-none sm:text-sm"
        />
      </fieldset>

      <fieldset>
        <label for="url-{i}">URL</label>
        <input name="url"
          type="url"
          id="url-{i}"
          required
          class="form-text focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 focus:outline-none sm:text-sm"
        />
      </fieldset>

      <fieldset>
        <h4>Tags</h4>

        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input name="tags"
              type="checkbox"
              id="tags-{i}-1"
              value="daily"
              class="form-text focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="tags-{i}-1" class="font-medium text-gray-700">
              Daily
            </label>
          </div>
        </div>

        <div class="flex items-start">
          <div class="ml-3 text-sm">
            <input name="tags"
              type="checkbox"
              id="tags-{i}-2"
              value="weekly"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
          </div>
          <div class="flex items-center h-5">
            <div class="ml-3 text-sm">
              <label for="tags-{i}-2" class="font-medium text-gray-700">
                Weekly
              </label>
            </div>
          </div>
        </div>

        <!-- Default checkbox ->
        <div class="flex items-start">
          <div class="ml-3 text-sm">
            <input name="tags"
              type="checkbox"
              id="tags-{i}-3"
              value="monthly"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
          </div>
          <div class="flex items-center h-5">
            <div class="ml-3 text-sm">
              <label for="tags-{i}-3" class="font-medium text-gray-700">
                Monthly
              </label>
            </div>
          </div>
        </div>

        <div class="flex justify-center items-center">
          <Toggler name="tags" value="tag-1" />
          <Toggler name="tags" value="tag-2" />
          <Toggler name="tags" value="tag-3" />
        </div>
      </fieldset>

      <div class="bg-gradient--blue min-h-full flex items-center justify-center py-12 px-4">
        <button title="remove" on:click|preventDefault={() => onRemove(i)}>
          <Icon icon={closeFilled} />
        </button>
      </div>
      {/each}
    </div>
  </form>
  -->
</main>

<style type="postcss">
/*
button {
  @apply pt-4 py-5 pb-5;
}

.form-text {
  @apply appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md;
}
*/
</style>
