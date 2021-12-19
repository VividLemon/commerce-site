<template>
  <!-- TODO extend search functionality, make working -->
  <div class="p-3 drop-shadow flex-none border-2 dark:border-dark-800 rounded-md">
    <h1>Search</h1>
    <field-input
      v-model="searchQuery"
      :icon="search"
      placeholder="Search"
    />
    <h1>Types</h1>
    <field-input :prepend-icon="search" />
  </div>
</template>

<script>
import FieldInput from '../FieldInput.vue'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { ref } from '@vue/reactivity'
export default {
	components: {
		FieldInput
	},
	setup () {
		const searchQuery = ref('')
		const search = faSearch

		return {
			searchQuery,
			search
		}
	}
}
</script>

<style>

</style>
