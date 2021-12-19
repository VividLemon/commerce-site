<template>
  <!-- TODO dark mode variant -->
  <section class="px-4">
    <div class="flex flex-col justify-center">
      <!-- Table -->
      <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-md border border-gray-200">
        <header class="px-5 py-4 border-b border-gray-100">
          <h2 class="font-semibold text-gray-800">
            <slot
              v-if="!title"
              name="title"
            />
            <span v-else>
              {{ title }}
            </span>
          </h2>
        </header>
        <div class="p-3">
          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <slot name="head" />
              </thead>
              <tbody class="text-sm divide-y divide-gray-100">
                <slot />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Example ! -->
  <!-- <c-table title="h">
      <template #head>
        <c-tr>
          <c-th>
            Hel
          </c-th>
        </c-tr>
      </template>
      <c-tr>
        <c-td>
          body
        </c-td>
      </c-tr>
    </c-table> -->
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: ''
		}
	}
}
</script>

<style>

</style>
