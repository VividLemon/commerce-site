<template>
  <button class="mr-1 hover:bg-gray-200 dark:hover:bg-gray-900 rounded-full w-8 h-8 transition duration-500">
    <span class="relative inline-block">
      <font-awesome-icon
        class="dark:text-gray-100"
        :icon="icon"
        :size="iconSize"
      />
      <span
        v-if="badge"
        class="absolute top-0 right-0 w-4 h-4 inline-flex items-center justify-center text-xs transform translate-x-1/2 -translate-y-1/2 rounded-full text-white bg-red-500 p-px"
      >
        <font-awesome-icon
          v-if="badgeIsIcon"
          :icon="badge"
        />
        <p
          v-else
          class="font-bold"
          v-text="badge"
        />
      </span>
    </span>
  </button>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from '@vue/reactivity'
export default {
	components: {
		FontAwesomeIcon
	},
	props: {
		icon: {
			type: Object,
			required: true
		},
		iconSize: {
			type: String,
			default: '1x'
		},
		badge: {
			type: [String, Object],
			default: ''
		}
	},
	setup (props) {
		const badgeIsIcon = computed(() => (typeof props.badge === 'object'))

		return {
			badgeIsIcon
		}
	}
}
</script>

<style>

</style>
