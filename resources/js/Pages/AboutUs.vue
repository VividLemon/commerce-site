<template>
  <app-layout
    :can-login="canLogin"
    :can-register="canRegister"
    title="About Us"
  >
    <c-table title="h">
      <template #head>
        <c-tr>
          <c-th>
            hello
          </c-th>
        </c-tr>
      </template>
      <c-tr>
        <c-td>
          body
        </c-td>
      </c-tr>
    </c-table>
  </app-layout>
</template>

<script>
import CTable from '../components/table/CTable.vue'
import CTd from '../components/table/CTd.vue'
import CTh from '../components/table/CTh.vue'
import CTr from '../components/table/CTr.vue'
import AppLayout from '../Layouts/AppLayout.vue'
export default {
	components: {
		AppLayout,
		CTr,
		CTd,
		CTh,
		CTable
	},
	props: {
		canLogin: {
			type: Boolean,
			required: true
		},
		canRegister: {
			type: Boolean,
			required: true
		}
	}
}
</script>

<style>

</style>
