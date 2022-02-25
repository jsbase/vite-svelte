<script>
// @ts-nocheck

import Button from './Button.svelte';
import Icon from '@iconify/svelte';
import editIcon from '@iconify/icons-akar-icons/edit';

let routers = [
  {
    id: 1,
    title: 'Good Router 5000',
    url: 'https://www.duckduckgo.com/',
    tags: ['one', 'three']
  },
  {
    title: 'Super DupaX',
    url: 'https:/brave.search.com',
    tags: ['two'],
    id: 2
  },
  {
    title: 'Mega Route',
    url: 'https://searx.me',
    tags: ['two', 'three'],
    id: 3
  }
];
</script>

<main>
  <div class="container flex min-h-full items-center justify-center py-12 px-4">
    <!-- example: list -->
    <section>
      <h1>unorderd list</h1>
      <ul class="divide-y divide-slate-200 p-6">
        {#each routers as router}
          <li class="flex py-4 first:pt-0 last:pb-0">
            <div class="ml-3 overflow-hidden">
              <p class="text-sm font-medium text-slate-900">{router.title}</p>
              <p class="truncate text-sm text-slate-500">{router.url}</p>

              <ul class="divide-y divide-slate-200 pt-3 pb-0">
                {#each router.tags as tag}
                  <li class="flex py-4 first:pt-0 last:pb-0">
                    <span class="ml-3 text-sm font-medium text-slate-900">
                      {tag}
                    </span>
                  </li>
                {/each}
              </ul>
            </div>
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
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Title
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              URL
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Tags
            </th>
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">
                <Button title="edit" on:click={console.log}>
                  <Icon icon={editIcon} />
                  <span class="group-focus:hidden">Edit</span>
                </Button>
              </span>
            </th>
          </tr>
        </thead>

        <tbody>
          {#each routers as router}
            <tr>
              <td class="whitespace-nowrap px-6 py-4">
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">🔖</div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      {router.name}
                    </div>
                  </div>
                </div>
              </td>

              <td class="whitespace-nowrap px-6 py-4">
                <div class="text-sm text-gray-500">{router.url}</div>
              </td>

              <td class="whitespace-nowrap px-6 py-4">
                {#each router.tags as tag}
                  <li class="flex py-4 first:pt-0 last:pb-0">
                    <span
                      class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                      {tag}
                    </span>
                  </li>
                {/each}
              </td>

              <td
                class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                <Button title="edit" on:click={console.log}>
                  <Icon icon={editIcon} />
                  <span class="group-focus:hidden">Edit</span>
                </Button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </section>
  </div>
</main>

<style scoped lang="postcss">
/**
 * see: https://tailwindcss.com/docs/hover-focus-and-other-states
 */
table {
  @apply w-full min-w-full divide-y divide-gray-200 p-4;
}
thead {
  @apply bg-gray-50;
}
tbody {
  @apply divide-y divide-gray-200 bg-white;
}
</style>
