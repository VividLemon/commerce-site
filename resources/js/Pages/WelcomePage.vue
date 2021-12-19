<template>
  <app-layout
    :can-login="canLogin"
    :can-register="canRegister"
    title="Welcome"
  >
    <!-- TODO block looking ugly on mobile. Redo -->
    <div
      class="md:grid md:grid-cols-4"
    >
      <div class="md:col-auto m-2">
        <aside>
          <search-product-sidebar />
        </aside>
      </div>
      <div class="md:col-span-3 m-2">
        <main>
          <product-main-shop :products="products" />
        </main>
      </div>
    </div>
  </app-layout>
</template>

<script>
import { defineComponent } from 'vue'
import SearchProductSidebar from '../components/productPage/SearchProductSidebar.vue'
import AppLayout from '../Layouts/AppLayout.vue'
import ProductMainShop from '../components/productPage/ProductMainShop.vue'

export default defineComponent({
	components: {
		SearchProductSidebar,
		AppLayout,
		ProductMainShop
	},
	props: {
		canLogin: {
			type: Boolean,
			required: true
		},
		canRegister: {
			type: Boolean,
			required: true
		},
		products: {
			type: Array,
			required: true
		}
	}
})
</script>

<style scoped>

</style>
