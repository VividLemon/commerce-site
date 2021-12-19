<template>
  <app-layout
    :can-login="canLogin"
    :can-register="canRegister"
    title="Roles"
  >
    <c-table
      title="Roles"
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
        v-for="role in roles"
        :key="role.id"
      >
        <c-td>
          {{ role.id }}
        </c-td>
        <c-td>
          {{ role.name }}
        </c-td>
        <c-td>
          {{ role.description }}
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
		roles: {
			type: Array,
			required: true
		}
	}
}
</script>

<style>

</style>
