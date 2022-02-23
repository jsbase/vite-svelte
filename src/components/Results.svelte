<script>
import Icon from '@iconify/svelte';
import editIcon from '@iconify/icons-akar-icons/edit';
import JsonTree from 'svelte-json-tree';
import Routers from '../stores.js';

let routers = Routers;
</script>

<main>
  <div class="container min-h-full flex items-center justify-center py-12 px-4">
    <!-- example: list -->
    <section>
      <h1>unorderd list</h1>
      <ul role="list" class="p-6 divide-y divide-slate-200">
        {#each routers as router}
        <li class="flex py-4 first:pt-0 last:pb-0">
          <div class="ml-3 overflow-hidden">
            <p class="text-sm font-medium text-slate-900">{router.title}</p>
            <p class="text-sm text-slate-500 truncate">{router.url}</p>

            <ul role="list" class="pt-3 pb-0 divide-y divide-slate-200">
            {#each router.tags as tag}
              <li class="flex py-4 first:pt-0 last:pb-0">
                <span class="ml-3 text-sm font-medium text-slate-900">{tag}</span>
              </li>
            {/each}
            </ul>
        </li>
        {/each}
      </ul>
    </section>
    
    <!-- example: table -->
    <section>
      <h1>table</h1>
      <table>
        <thead>
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              URL
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tags
            </th>
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">
                <button>
                  <Icon icon={editIcon} /> Edit
                </button>
              </span>
            </th>
          </tr>
        </thead>

        <tbody>
          {#each routerListData as router}     
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">🔖</div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">
                    {router.name}
                  </div>
                </div>
              </div>
            </td>

            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">{router.url}</div>
            </td>

            <td class="px-6 py-4 whitespace-nowrap">
              {#each router.tags as tag}
                <li class="flex py-4 first:pt-0 last:pb-0">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {tag}
                  </span>
                </li>
              {/each}
            </td>

            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
            </td>
          </tr>
          {/each}
        </tbody>
      </table>
    </section>
  </div>
</main>

<style>
/**
 * README
 * 
 * https://tailwindcss.com/docs/hover-focus-and-other-states
 **/
</style>