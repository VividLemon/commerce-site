<template>
  <div class="grid justify-items-center">
    <img
      :src="image"
      :width="width"
    >
    <div class="border-2 rounded-md dark:border-dark-800 m-3 w-full grid">
      <img
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        width="50"
        class="m-2 cursor-pointer"
        :class="img === image ? 'opacity-70' : ''"
        @click="changeImage(index)"
      >
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
	props: {
		images: {
			type: Array,
			default: () => {
				return []
			}
		},
		width: {
			type: Number,
			default: 250
		}
	},
	setup (props) {
		const image = ref(props.images[0])

		const changeImage = (index) => {
			image.value = props.images[index]
		}

		return {
			image,
			changeImage
		}
	}
}
</script>

<style>

</style>
