<template>
  <app-layout
    :can-login="canLogin"
    :can-register="canRegister"
    :title="product.name"
  >
    <div class="grid grid-cols-4">
      <div class="col-span-auto m-2">
        <product-picture-frame :images="[product.default_image_url]" />
      </div>
      <div class="col-span-3 m-2">
        <h1>{{ product.name }}</h1>
        <h2>{{ product.description }}</h2>
        <h2 class="text-green-700 dark:text-green-500">
          {{ product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD'}) }}
        </h2>
        <button
          class="rounded-full bg-green-500 hover:bg-green-400 transition duration-400 text-white py-1 mx-1 px-3"
          @click="handleProductBuy(product, store)"
        >
          Buy
        </button>
      </div>
    </div>
  </app-layout>
</template>

<script>
import ProductPictureFrame from '../components/productPage/ProductPictureFrame.vue'
import AppLayout from '../Layouts/AppLayout.vue'
import { useStore } from 'vuex'
export default {
	components: { AppLayout, ProductPictureFrame },
	props: {
		canLogin: {
			type: Boolean,
			required: true
		},
		canRegister: {
			type: Boolean,
			required: true
		},
		product: {
			type: Object,
			required: true
		}
	},
	setup () {
		const store = useStore()

		return {
			handleProductBuy: (product) => store.commit('cart/ADD_PRODUCT_TO_CART', product)
		}
	}
}
</script>

<style>

</style>
