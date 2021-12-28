<template>
  <app-layout
    :can-login="canLogin"
    :can-register="canRegister"
    title="Shopping Cart"
  >
    <div class="grid grid-cols-4">
      <div class="col-span-3">
        <cart-table />
      </div>
      <div class="col-auto">
        <cart-side-bar />
      </div>
    </div>
  </app-layout>
</template>

<script>
import CartSideBar from '../components/cart/CartSideBar.vue'
import CartTable from '../components/cart/CartTable.vue'
import AppLayout from '../Layouts/AppLayout.vue'
export default {
	components: {
		AppLayout,
		CartTable,
		CartSideBar
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
