<template>
  <teleport to="body">
    <div>
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          v-show="drawer"
          class="z-10 fixed inset-0 transition-opacity"
          @keydown.esc="$emit('close-drawer')"
        >
          <div
            class="absolute inset-0 bg-black opacity-50"
            tabindex="0"
            @click="$emit('close-drawer')"
          />
        </div>
      </transition>
      <aside
        class="transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 dark:bg-dark-700 rounded-r-lg"
        :class="drawer ? 'translate-x-0' : '-translate-x-full'"
      >
        <slot />
      </aside>
    </div>
  </teleport>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
	props: {
		drawer: {
			type: Boolean,
			default: false
		}
	},
	emits: ['close-drawer']
})
</script>

<style>

</style>
