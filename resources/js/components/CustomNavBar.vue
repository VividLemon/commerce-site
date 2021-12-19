<template>
  <div
    class="flex w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 dark:border-dark-900 z-10 relative "
  >
    <div class="flex items-center">
      <!-- Activator -->
      <button-icon
        :icon="bars"
        aria-label="Open menu"
        @click="drawer = !drawer"
      />
      <!-- Business name -->
      <Link
        class="md:ml-2 sm:ml-1 dark:text-white"
        href="/"
      >
        NAME
      </Link>
      <!-- Drawer -->
      <nav-drawer
        :drawer="drawer"
        @close-drawer="drawer = false"
      >
        <!-- Logo -->
        <div
          id="Logo"
          aria-label="Home"
          class="p-3 cursor-pointer"
        />
        <!-- Links -->
        <div class="divide-y divide-white">
          <Link
            v-for="link in links"
            :key="link.id"
            class="p-3 m-0 hover:bg-gray-200 cursor-pointer block dark:text-white dark:border-gray-100 dark:hover:bg-dark-600 transition duration-500"
            :href="route(link.to)"
            @click="drawer = false"
          >
            <p class="text-center">
              <font-awesome-icon
                v-if="link.icon"
                :icon="link.icon"
                class="md:mr-1 sm:mr-0"
              />
              {{ link.name }}
            </p>
          </Link>
        </div>
      </nav-drawer>
    </div>
    <!-- Right aside content -->
    <div class="flex">
      <div class="justify-between bg-transparent">
        <!-- Toggle dark -->
        <dark-button />
        <!-- Cart -->
        <Link :href="route('cart')">
          <button-icon
            :icon="cart"
            aria-label="Cart"
            :badge="cartDisplaySize"
          />
        </Link>
        <!-- Settings activator -->
        <button-icon
          :icon="cogs"
          aria-label="Settings"
          @click="settingsDrawer = !settingsDrawer"
        />
      </div>
      <!-- Admin drawer -->
      <nav-drawer
        :drawer="settingsDrawer"
        @close-drawer="settingsDrawer = false"
      >
        <div
          id="Logo"
          aria-label="Home"
          class="p-3 cursor-pointer"
        />
        <!-- Links -->
        <div class="divide-y divide-white">
          <Link
            v-for="link in adminLinks"
            :key="link.id"
            class="p-3 m-0 hover:bg-gray-200 cursor-pointer block dark:text-white dark:border-gray-100 dark:hover:bg-dark-600 transition duration-500"
            :href="route(link.to)"
            @click="drawer = false"
          >
            <p class="text-center">
              <font-awesome-icon
                v-if="link.icon"
                :icon="link.icon"
                class="md:mr-1 sm:mr-0"
              />
              {{ link.name }}
            </p>
          </Link>
        </div>
      </nav-drawer>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faCog, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from '@inertiajs/inertia-vue3'
import NavDrawer from './NavDrawer.vue'
import DarkButton from './DarkButton.vue'
import ButtonIcon from './ButtonIcon.vue'
import { useStore } from 'vuex'

export default defineComponent({
	components: {
		FontAwesomeIcon,
		NavDrawer,
		Link,
		DarkButton,
		ButtonIcon
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
		const drawer = ref(false)
		const settingsDrawer = ref(false)
		const bars = faBars
		const cogs = faCog
		const cart = faShoppingCart
		const links = [
			{ id: 1, name: 'Home', to: 'home', icon: faBars },
			{ id: 2, name: 'About Us', to: 'about-us' }
		]
		const adminLinks = [
			{ id: 1, name: 'Dashboard', to: 'dashboard' },
			{ id: 2, name: 'Departments', to: 'departments' },
			{ id: 3, name: 'Employees', to: 'employees' },
			{ id: 4, name: 'Products', to: 'products' },
			{ id: 5, name: 'Product Types', to: 'productTypes' },
			{ id: 6, name: 'Roles', to: 'roles' },
			{ id: 7, name: 'Users', to: 'users' }
		]

		const cartDisplaySize = computed(() => {
			const store = useStore()
			const get = store.getters['cart/getCartSize']

			if (get > 9) {
				return '9+'
			} else if (get < 1) {
				return ''
			} else {
				return get.toString()
			}
		})

		onMounted(() => {
			document.addEventListener('keydown', (e) => {
				if (e.isComposing) return
				if ((drawer.value || settingsDrawer.value) && e.key === 'Escape') {
					drawer.value = false
					settingsDrawer.value = false
				}
			})
		})

		return {
			drawer,
			settingsDrawer,
			links,
			adminLinks,
			cartDisplaySize,
			bars,
			cogs,
			cart
		}
	}
})
</script>

<style>

</style>
