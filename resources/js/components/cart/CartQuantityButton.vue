<template>
  <div>
    <select
      v-if="!isTextMenu"
      v-model="amount"
      class="px-2 py-1 border-2 rounded-md"
      @input="updateQuantity($event.target.value)"
    >
      <option
        v-for="n in 9"
        :key="n"
        class="m-2"
        :value="n"
      >
        {{ n }}
      </option>
      <option :value="10">
        10+
      </option>
      <option value="remove">
        Remove
      </option>
    </select>
    <field-input
      v-else
      v-model.number="amount"
      @change="updateQuantity($event.target.value)"
    />
  </div>
</template>

<script>
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useStore } from 'vuex'
import { computed, ref } from '@vue/reactivity'
import FieldInput from '../FieldInput.vue'
import { onMounted } from '@vue/runtime-core'
export default {
	components: {
		FieldInput
	},
	props: {
		id: {
			type: Number,
			required: true
		}
	},
	setup (props) {
		const isTextMenu = ref(false)
		const plus = faPlus
		const minus = faMinus
		const store = useStore()

		const product = computed(() => store.getters['cart/getCart'].find((el) => el.id === props.id))

		const updateQuantity = (quantity) => {
			const val = Number.parseInt(quantity)

			if (val <= 0 || Number.isNaN(val)) {
				return store.commit('cart/REMOVE_PRODUCT_FROM_CART', product.value.id)
			}
			if (val >= 10) {
				isTextMenu.value = true
			} else {
				isTextMenu.value = false
			}
			store.commit('cart/UPDATE_CART_QUANTITY', { product: product.value, quantity: val })
		}

		const amount = ref(product.value.quantity)

		onMounted(() => {
			if (amount.value >= 10) {
				isTextMenu.value = true
			}
		})

		return {
			plus,
			minus,
			updateQuantity,
			isTextMenu,
			amount
		}
	}
}
</script>

<style>

</style>
