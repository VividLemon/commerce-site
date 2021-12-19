<template>
  <img
    class="rounded-full"
    :src="src"
    :width="width"
    :height="height"
    :alt="alt"
  >
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			required: true
		},
		alt: {
			type: String,
			required: true
		},
		width: {
			type: String,
			default: '40'
		},
		height: {
			type: String,
			default: '40'
		}
	}
}
</script>

<style>

</style>
