<template>
  <app-layout
    :can-login="canLogin"
    :can-register="canRegister"
    title="Users"
  >
    <c-table
      title="Users"
      class="m-2"
    >
      <template #head>
        <c-tr>
          <c-th>
            Avatar
          </c-th>
          <c-th>
            Id
          </c-th>
          <c-th>
            Name
          </c-th>
          <c-th>
            Name
          </c-th>
          <c-th>
            Role Id
          </c-th>
          <c-th>
            Actions
          </c-th>
        </c-tr>
      </template>
      <c-tr
        v-for="user in users"
        :key="user.id"
      >
        <c-td>
          <avatar-icon
            :src="user.profile_photo_url"
            :alt="user.name"
          />
        </c-td>
        <c-td>
          {{ user.id }}
        </c-td>
        <c-td>
          {{ user.name }}
        </c-td>
        <c-td>
          <span
            @click="hidden = !hidden"
            v-text="(hidden) ? `******${user.email.slice(user.email.indexOf('@'))}` : user.email"
          />
        </c-td>
        <c-td>
          {{ user.role_id }}
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
import CTr from '../../components/table/CTr.vue'
import AppLayout from '../../Layouts/AppLayout.vue'
import AvatarIcon from '../../components/AvatarIcon.vue'
import { ref } from '@vue/reactivity'
import CTable from '../../components/table/CTable.vue'
export default {
	components: { AppLayout, CTr, CTh, CTd, AvatarIcon, CTable },
	props: {
		canLogin: {
			type: Boolean,
			required: true
		},
		canRegister: {
			type: Boolean,
			required: true
		},
		users: {
			type: Array,
			required: true
		}
	},
	setup () {
		const hidden = ref(true)

		return {
			hidden
		}
	}
}
</script>

<style>

</style>
