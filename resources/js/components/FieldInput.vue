<template>
  <div>
    <!-- TODO dark mode variant -->
    <div class="flex max-w-xs">
      <font-awesome-icon
        v-if="Object.keys(prependIcon).length"
        :icon="prependIcon"
        class="md:mr-1 self-center"
      />
      <div
        class="flex border dark:border-dark-400 rounded-md placeholder-gray-500 cursor-text bg-white drop-shadow w-full"
        :class="addFocusToDiv"
        @click.stop="$refs.input.focus()"
      >
        <font-awesome-icon
          v-if="Object.keys(icon).length"
          :icon="icon"
          class="self-center ml-1 dark:text-black"
        />
        <input
          ref="input"
          v-model="value"
          type="text"
          class="w-full border-none focus:ring-0 text-black pl-2 rounded-md"
          :placeholder="placeholder"
          @focus="focused = true"
          @blur="focused = false"
        >
      </div>
    </div>
    <div v-if="errors.length">
      <span
        v-for="(error, index) in errors"
        :key="index"
        class="px-2 text-red-500 block"
        v-text="error"
      />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed, ref } from '@vue/reactivity'

export default {
	components: {
		FontAwesomeIcon
	},
	props: {
		modelValue: {
			type: String,
			default: ''
		},
		placeholder: {
			type: String,
			default: ''
		},
		errors: {
			type: Array,
			default: () => {
				return []
			}
		},
		prependIcon: {
			type: Object,
			default: () => {
				return {}
			}
		},
		icon: {
			type: Object,
			default: () => {
				return {}
			}
		},
		color: {
			type: String,
			default: 'blue'
		}
	},
	emits: ['update:modelValue'],
	setup (props, { emit }) {
		const focused = ref(false)

		const value = computed({
			get () {
				return props.modelValue
			},
			set (value) {
				emit('update:modelValue', value)
			}
		})

		const addFocusToDiv = computed(() => {
			if (focused.value) {
				return `ring-2 ring-${props.color}-300 dark:ring-blue-600`
			} else {
				return ''
			}
		})

		return {
			focused,
			value,
			addFocusToDiv
		}
	}
}
</script>

<style>

</style>
