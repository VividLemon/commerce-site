<template>
  <c-table
    title="cart"
  >
    <template #head>
      <c-tr>
        <c-th />
        <c-th>
          Item
        </c-th>
        <c-th>
          Description
        </c-th>
        <c-th>
          Price
        </c-th>
        <c-th>
          Quantity
        </c-th>
      </c-tr>
    </template>
    <c-tr
      v-for="item in $store.getters['cart/getCart']"
      :key="item.id"
    >
      <c-td>
        <avatar-icon
          :src="item.default_image_url"
          :alt="item.name"
        />
      </c-td>
      <c-td>
        {{ item.name }}
      </c-td>
      <c-td>
        {{ item.description }}
      </c-td>
      <c-td class="text-green-700 dark:text-green-500">
        {{ (item.price * item.quantity).toLocaleString('en-US', { style: 'currency', currency: 'USD'}) }}
      </c-td>
      <c-td>
        <cart-quantity-button :id="item.id" />
      </c-td>
    </c-tr>
  </c-table>
</template>

<script>
import CTable from '../table/CTable.vue'
import CTr from '../table/CTr.vue'
import CTh from '../table/CTh.vue'
import CTd from '../table/CTd.vue'
import AvatarIcon from '../AvatarIcon.vue'
import CartQuantityButton from './CartQuantityButton.vue'
export default {
	components: {
		CTable,
		CTr,
		CTh,
		CTd,
		AvatarIcon,
		CartQuantityButton
	}
}
</script>

<style>

</style>
