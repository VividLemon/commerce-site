<template>
  <app-layout
    :can-login="canLogin"
    :can-register="canRegister"
    title="Products"
  >
    <c-table
      title="Products"
      class="m-2"
    >
      <template #head>
        <c-tr>
          <c-th>
            Id
          </c-th>
          <c-th>
            Name
          </c-th>
          <c-th>
            Description
          </c-th>
          <c-th>
            Price
          </c-th>
          <c-th>
            Default Image
          </c-th>
          <c-th>
            Actions
          </c-th>
        </c-tr>
      </template>
      <c-tr
        v-for="product in products"
        :key="product.id"
      >
        <c-td>
          {{ product.id }}
        </c-td>
        <c-td>
          {{ product.name }}
        </c-td>
        <c-td>
          {{ product.description.slice(0,25) }}
        </c-td>
        <c-td>
          {{ product.price }}
        </c-td>
        <c-td>
          <a
            :href="product.default_image_url"
            class="underline"
            rel="noreferrer"
            target="_blank"
          >
            {{ product.default_image_url.slice(0,25) }}
          </a>
        </c-td>
        <c-td>
          <button
            class="rounded-full bg-gray-500 hover:bg-gray-400 transition duration-400 text-white py-1 mx-1 px-3"
          >
            Edit
          </button>
          <button
            class="rounded-full bg-red-600 hover:bg-red-500 transition duration-400 text-white py-1 mx-1 px-3"
          >
            Delete
          </button>
        </c-td>
      </c-tr>
    </c-table>
  </app-layout>
</template>

<script>
import CTd from '../../components/table/CTd.vue'
import CTh from '../../components/table/CTh.vue'
import AppLayout from '../../Layouts/AppLayout.vue'
import CTr from '../../components/table/CTr.vue'
import CTable from '../../components/table/CTable.vue'
export default {
	components: { AppLayout, CTh, CTd, CTr, CTable },
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
}
</script>

<style>

</style>
