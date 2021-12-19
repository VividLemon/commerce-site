<template>
  <app-layout
    :can-login="canLogin"
    :can-register="canRegister"
    title="Employees"
  >
    <c-table
      title="Employees"
      class="m-2"
    >
      <template #head>
        <c-tr>
          <c-th>
            Id
          </c-th>
          <c-th>
            Date of Birth
          </c-th>
          <c-th>
            Part Time
          </c-th>
          <c-th>
            Salary
          </c-th>
          <c-th>
            User Id
          </c-th>
          <c-th>
            Actions
          </c-th>
        </c-tr>
      </template>
      <c-tr
        v-for="employee in employees"
        :key="employee.id"
      >
        <c-td>
          {{ employee.id }}
        </c-td>
        <c-td>
          {{ employee.date_of_birth }}
        </c-td>
        <c-td>
          {{ employee.part_time }}
        </c-td>
        <c-td>
          {{ employee.salary.toLocaleString('en-US', { style: 'currency', currency: 'USD'}) }}
        </c-td>
        <c-td>
          {{ employee.user_id }}
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
import CTable from '../../components/table/CTable.vue'
import CTd from '../../components/table/CTd.vue'
import CTh from '../../components/table/CTh.vue'
import CTr from '../../components/table/CTr.vue'
import AppLayout from '../../Layouts/AppLayout.vue'
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
		employees: {
			type: Array,
			required: true
		}
	}
}
</script>

<style>

</style>
