<script>
/**
 * README
 * 
 * https://tailwindcss.com/docs/hover-focus-and-other-states#
 **/
import { get } from '@writeable';

let routerListData = get(formValues);
</script>

<main>
  <div class="container min-h-full flex items-center justify-center py-12 px-4">
    <!-- as ul -->
    <ul role="list" class="p-6 divide-y divide-slate-200">
      {#each routerListData as routerItem}
      <li class="flex py-4 first:pt-0 last:pb-0">
        <img class="h-10 w-10 rounded-full" alt="" src="https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" />

        <div class="ml-3 overflow-hidden">
          <p class="text-sm font-medium text-slate-900">{routerItem.title}</p>
          <p class="text-sm text-slate-500 truncate">{routerItem.url}</p>

          <ul role="list" class="pt-3 pb-0 divide-y divide-slate-200">
          {#each routerItem.tags as tag}
            <li class="flex py-4 first:pt-0 last:pb-0">
              <span class="ml-3 text-sm font-medium text-slate-900">{tag}</span>
            </li>
          {/each}
          </ul>
      </li>
      {/each}
    </ul>
    
    <!-- as table -->
    <table>
      <thead>
        <tr>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Title
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Role
          </th>
          <th scope="col" class="relative px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>

      <tbody>
        {#each routerListData as routerItem}     
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                <img class="h-10 w-10 rounded-full" alt="" src="https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" />
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">{routerItem.name}</div>
              </div>
            </div>
          </td>

          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">{routerItem.url}</div>
          </td>

          <td class="px-6 py-4 whitespace-nowrap">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Active
            </span>
          </td>

          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Admin
          </td>

          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
          </td>
        </tr>
        {/each}
      </tbody>
    </table>
  </div>
</main>

<style>
</style>