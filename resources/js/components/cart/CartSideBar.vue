<template>
  <div class="p-3 drop-shadow flex-none border-2 dark:border-dark-800 rounded-md">
    <h1>Price:</h1>
    <h2 class="text-green-700 dark:text-green-500">
      {{ cartTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD'}) }}
    </h2>
    <h1>Shipping:</h1>
    <h2 class="text-green-700 dark:text-green-500">
      {{ shippingTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD'}) }}
    </h2>
    <h1>Tax:</h1>
    <h2 class="text-green-700 dark:text-green-500">
      {{ taxTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD'}) }}
    </h2>
    <h1>Total:</h1>
    <h1 class="text-green-700 dark:text-green-500">
      {{ finalTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD'}) }}
    </h1>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
	setup () {
		const store = useStore()
		const cart = store.getters['cart/getCart']

		const cartTotal = computed(() => cart.reduce((total, curr) => total + (curr.price * curr.quantity), 0))
		const shippingTotal = computed(() => cart.reduce((total, curr) => total + (curr.quantity * 1), 0))
		const taxTotal = computed(() => (cartTotal.value + shippingTotal.value) * 0.055)
		const finalTotal = computed(() => cartTotal.value + shippingTotal.value + taxTotal.value)

		return { cartTotal, shippingTotal, taxTotal, finalTotal }
	}
}
</script>

<style>

</style>
