<template>
  <app-layout
    :can-login="canLogin"
    :can-register="canRegister"
    title="Product Types"
  >
    <c-table
      title="Product Types"
      class="m-2"
    >
      <template #head>
        <c-tr>
          <c-th>
            Id
          </c-th>
          <c-th>
            Name
          </c-th>
          <c-th>
            Description
          </c-th>
          <c-th>
            Actions
          </c-th>
        </c-tr>
      </template>
      <c-tr
        v-for="productType in productTypes"
        :key="productType.id"
      >
        <c-td>
          {{ productType.id }}
        </c-td>
        <c-td>
          {{ productType.name }}
        </c-td>
        <c-td>
          {{ productType.description.slice(0,25) }}
        </c-td>
        <c-td>
          <button
            class="rounded-full bg-gray-500 hover:bg-gray-400 transition duration-400 text-white py-1 mx-1 px-3"
          >
            Edit
          </button>
          <button
            class="rounded-full bg-red-600 hover:bg-red-500 transition duration-400 text-white py-1 mx-1 px-3"
          >
            Delete
          </button>
        </c-td>
      </c-tr>
    </c-table>
  </app-layout>
</template>

<script>
import CTh from '../../components/table/CTh.vue'
import CTr from '../../components/table/CTr.vue'
import AppLayout from '../../Layouts/AppLayout.vue'
import CTd from '../../components/table/CTd.vue'
import CTable from '../../components/table/CTable.vue'
export default {
	components: { AppLayout, CTr, CTh, CTd, CTable },
	props: {
		canLogin: {
			type: Boolean,
			required: true
		},
		canRegister: {
			type: Boolean,
			required: true
		},
		productTypes: {
			type: Array,
			required: true
		}
	}
}
</script>

<style>

</style>
