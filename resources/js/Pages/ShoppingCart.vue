<template>
  <app-layout
    :can-login="canLogin"
    :can-register="canRegister"
    title="Shopping Cart"
  >
    <div>{{ getCart }}</div>
    <c-table
      title="cart"
      class="m-2"
    >
      <template #head>
        <c-tr>
          <c-th />
          <c-th>
            Item
          </c-th>
          <c-th>
            Description
          </c-th>
          <c-th>
            Price
          </c-th>
          <c-th />
        </c-tr>
      </template>
      <c-tr
        v-for="item in getCart"
        :key="item.id"
      >
        <c-td>
          <avatar-icon
            :src="item.default_image_url"
            :alt="item.name"
          />
        </c-td>
        <c-td>
          {{ item.name }}
        </c-td>
        <c-td>
          {{ item.description }}
        </c-td>
        <c-td>
          {{ item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD'}) }}
        </c-td>
        <c-td>
          <!-- TODO implement the dropdown menu from before, with clickable modifier -->
          <button>click me</button>
        </c-td>
      </c-tr>
    </c-table>
  </app-layout>
</template>

<script>
import AppLayout from '../Layouts/AppLayout.vue'
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
import CTable from '../components/table/CTable.vue'
import CTr from '../components/table/CTr.vue'
import CTh from '../components/table/CTh.vue'
import CTd from '../components/table/CTd.vue'
import AvatarIcon from '../components/AvatarIcon.vue'
export default {
	components: {
		AppLayout,
		CTable,
		CTr,
		CTh,
		CTd,
		AvatarIcon
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
	},
	setup () {
		const store = useStore()

		return {
			getCart: computed(() => store.getters['cart/getCart'])
		}
	}
}
</script>

<style>

</style>
