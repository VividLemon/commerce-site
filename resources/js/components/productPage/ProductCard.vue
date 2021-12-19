<template>
  <div class="border-2 dark:border-dark-800 rounded-md p-2">
    <h2>{{ product.name }}</h2>
    <img
      :src="product.default_image_url"
      :alt="product.name"
      class="h-52 my-3 mx-auto"
    >
    <p>
      {{ product.description }}
    </p>
    <h3 class="text-green-700">
      {{ product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD'}) }}
    </h3>
    <div class="my-1 flex justify-center">
      <Link :href="route('product-page', { id: product.id })">
        <button
          class="rounded-full bg-gray-500 hover:bg-gray-400 transition duration-400 text-white py-1 mx-1 px-3"
        >
          View page
        </button>
      </Link>
      <button
        class="rounded-full bg-green-500 hover:bg-green-400 transition duration-400 text-white py-1 mx-1 px-3"
        @click="handleProductBuy(product,store)"
      >
        Buy
      </button>
    </div>
  </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'
import { useStore } from 'vuex'
export default {
	components: {
		Link
	},
	props: {
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
