<script>
  //import { createEventDispatcher } from 'svelte';
  import Logo from '@iconify/svelte';
  import Icon from '@iconify/svelte';
  import save24Filled from '@iconify/icons-fluent/save-24-filled';
  //import closeFilled from '@iconify/icons-carbon/close-filled';
  //import addFilled from '@iconify/icons-carbon/add-filled';
  //import clearOutlined from '@iconify/icons-ant-design/clear-outlined';
  //import arrowReset24Filled from '@iconify/icons-fluent/arrow-reset-24-filled';
  //import Toggler from './components/Toggler.svelte';
  import SearchBar from './components/SearchBar.svelte'; 
  import SvelteJsonTree from './components/SvelteJsonTree.svelte'
  import SvelteForm from './components/SvelteForm.svelte';
  import Results from './components/Results.svelte';

  /*
  const dispatch = createEventDispatcher();
  
  function onSumbit() {
    let newRoute = {
      formInfo: set(RouteManager.formInfo),
      formValues: set(RouteManager.formValues),
    };

    console.log('before dispatch new route: ', newRoute);
    
    dispatch('save', newRoute);
  }
  */
</script>

<main>
  <Logo />

  <SvelteJsonTree />

  <SvelteForm />

  <button title="save" type="button" on:click={ console.log }>
    <span class="group-focus:hidden">save</span>
    <Icon icon={save24Filled} />
  </button>

  <!--
  <form use:form on:submit|preventDefault={onSumbit} class="max-w-md w-full space-y-8 bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <!--
    <label for="rtName">Create new routing table</label>
    <input name="rtName"
      id="rtName"
      type="text"
      placeholder="Name of the new routing table."
      required
      class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      bind:value={RouteList.routename} />
    ->

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

        <!-- README: https://tailwindcomponents.com/component/toggle-switch ->
        <!--div class="flex items-start">
          <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
            
            <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
          </div>
          <label for="toggle" class="text-xs text-gray-700">Toggle me</label>
        </div>
        ->

        <!-- README: alpinejs switch toggle approach ->
        <!--
        ...
        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script>
        ...
        <div class="flex justify-center items-center" x-data="{toggle: '0'}">
          <div class="relative rounded-full w-12 h-6 transition duration-200 ease-linear" :class="[toggle === '1' ? 'bg-green-400' : 'bg-gray-400']">
            <label for="tags-{i}-3" class="absolute left-0 bg-white border-2 mb-2 w-6 h-6 rounded-full transition transform duration-100 ease-linear cursor-pointer" :class="[toggle === '1' ? 'translate-x-full border-green-400' : 'translate-x-0 border-gray-400']">
              Monthly
            </label>

            <input name="tags"
              type="checkbox"
              id="tags-{i}-3"
              class="appearance-none w-full h-full active:outline-none focus:outline-none"
              @click="toggle === '0' ? toggle = '1' : toggle = '0'"
            />
          </div>
        </div>
        ->

        <!--div class="flex justify-center items-center">
          <Toggler name="tags" value="tag-1" />
          <Toggler name="tags" value="tag-2" />
          <Toggler name="tags" value="tag-3" />
        </div>
        ->
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
img {
  @apply h-4 w-4;
}

button {
  @apply pt-4 py-5 pb-5;
}
/*
.toggle-checkbox:checked {
  @apply right-0 border-green-400;
  right: 0;
  border-color: #68D391;
}

.toggle-checkbox:checked + .toggle-label {
  @apply bg-green-400;
  background-color: #68D391;
}

input:checkbox,
input:checkbox,
input:checkbox {
  @apply text-gray-700;
}

input:checkbox:hover,
input:checkbox:focus,
input:checkbox:active {
  @apply text-gray-900;
}

.form-text {
  @apply appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md;
}
*/
</style>
