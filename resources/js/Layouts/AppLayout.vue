<template>
  <div
    id="layout"
    class="flex flex-col min-h-screen"
  >
    <Head :title="title" />
    <nav>
      <custom-nav-bar
        class="dark:bg-dark-800"
        :can-login="canLogin"
        :can-register="canRegister"
      />
    </nav>
    <main class="dark:bg-dark-900 dark:text-white flex-grow">
      <div class="container mx-auto">
        <slot />
      </div>
    </main>
  </div>
</template>

<script>
import { Head } from '@inertiajs/inertia-vue3'
import CustomNavBar from '../components/CustomNavBar.vue'
export default {
	components: { CustomNavBar, Head },
	props: {
		canLogin: {
			type: Boolean,
			required: true
		},
		canRegister: {
			type: Boolean,
			required: true
		},
		title: {
			type: String,
			default: ''
		}
	}
}
</script>

<style>
</style>
