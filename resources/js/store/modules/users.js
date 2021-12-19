// import { UserDataAccess as uda } from '../../api'

// TODO fix user state. Response from serve is not found exception
const state = () => ({
	users: {
		allUsers: [],
		user: {
			id: 0,
			name: '',
			email: '',
			roleId: 0
		}
	}
})

const mutations = {
	SET_CURRENT_USER_LOGIN (state, { id, name, email, role_id }) {
		state.users.user.id = id
		state.users.user.name = name
		state.users.user.email = email
		state.users.user.roleId = role_id
	},
	SET_ALL_USERS (state, payload) {
		state.users.allUsers = payload
	},
	ADD_SINGLE_USER (state, payload) {
		state.users.allUsers.push(payload)
	},
	UPDATE_SINGLE_USER (state, payload) {
		const index = state.users.allUsers.findIndex((element) => element.id === payload.id)

		state.users.allUsers[index] = payload
	},
	WIPE_CURRENT_USER (state) {
		state.users.user.id = ''
		state.users.user.name = ''
		state.users.user.email = ''
		state.users.user.roleId = 0
	}
}

const getters = ({
	getCurrentUserRole: (state) => state.users.user.roleId,
	getAllUsers: (state) => state.users.allUsers,
	getCurrentUser: (state) => state.users.user
})

export default {
	namespaced: true,
	state,
	mutations,
	// actions,
	getters
}
