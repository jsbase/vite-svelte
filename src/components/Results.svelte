<script>
import Icon from '@iconify/svelte';
import editIcon from '@iconify/icons-akar-icons/edit';

let routers = [
  {
    "id": 1,
    "title": "Good Router 5000",
    "url": "https://www.duckduckgo.com/",
    "tags": [
      "one",
      "three"
    ]
  },
  {
    "title": "Super DupaX",
    "url": "https:/brave.search.com",
    "tags": [
      "two"
    ],
    "id": 2
  },
  {
    "title": "Mega Route",
    "url": "https://searx.me",
    "tags": [
      "two",
      "three"
    ],
    "id": 3
  }
];
</script>

<main>
  <div class="container min-h-full flex items-center justify-center py-12 px-4">
    <!-- example: list -->
    <section>
      <h1>unorderd list</h1>
      <ul class="p-6 divide-y divide-slate-200">
        {#each routers as router}
        <li class="flex py-4 first:pt-0 last:pb-0">
          <div class="ml-3 overflow-hidden">
            <p class="text-sm font-medium text-slate-900">{router.title}</p>
            <p class="text-sm text-slate-500 truncate">{router.url}</p>

            <ul class="pt-3 pb-0 divide-y divide-slate-200">
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
          {#each routers as router}
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
              <!--
              <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              -->

              <button title="save" type="button" on:click={ console.log }>
                <span class="group-focus:hidden">edit</span>
                <Icon icon={editIcon} />
              </button>
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
 * See: https://tailwindcss.com/docs/hover-focus-and-other-states
 **/
</style>
