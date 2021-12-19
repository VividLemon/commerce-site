<template>
  <app-layout
    :can-login="canLogin"
    :can-register="canRegister"
    title="Departments"
  >
    <!-- Implmenent all modals, and their respected api methods -->
    <c-table
      title="Departments"
      class="m-2"
    >
      <template #head>
        <c-tr>
          <c-th>
            Id
          </c-th>
          <c-th>
            Staff Count
          </c-th>
          <c-th>
            Manager Id
          </c-th>
          <c-th>
            Actions
          </c-th>
        </c-tr>
      </template>
      <c-tr
        v-for="department in departments"
        :key="department.id"
      >
        <c-td>
          {{ department.id }}
        </c-td>
        <c-td>
          {{ department.staff_count }}
        </c-td>
        <c-td>
          {{ department.manager_id }}
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
		departments: {
			type: Array,
			required: true
		}
	}
}
</script>

<style>

</style>
