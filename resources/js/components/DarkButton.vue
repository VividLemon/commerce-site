<template>
  <button-icon
    :icon="(isDark) ? moon : sun"
    aria-label="Toggle dark mode"
    @click="isDark = !isDark"
  />
</template>

<script>
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import ButtonIcon from './ButtonIcon.vue'
import Cookie from 'js-cookie'
import { ref } from '@vue/reactivity'
import { watchEffect } from '@vue/runtime-core'
export default {
	components: {
		ButtonIcon
	},
	setup () {
		const isDark = ref(!!Cookie.get('dark-mode'))
		const sun = faSun
		const moon = faMoon

		watchEffect(() => {
			if (isDark.value) {
				document.documentElement.classList.add('dark')
				Cookie.set('dark-mode', true, { expires: 7, sameSite: 'lax' })
			} else {
				document.documentElement.classList.remove('dark')
				Cookie.remove('dark-mode')
			}
		})
		return {
			isDark,
			sun,
			moon
		}
	}
}
</script>

<style>

</style>
