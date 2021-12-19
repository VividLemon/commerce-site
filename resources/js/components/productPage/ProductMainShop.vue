<template>
  <div class="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
	components: { ProductCard },
	props: {
		products: {
			type: Array,
			default: () => {
				return []
			}
		}
	}
}
</script>

<style>

</style>
