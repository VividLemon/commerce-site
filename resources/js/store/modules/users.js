// import { UserDataAccess as uda } from '../../api'

// TODO fix user state. Response from serve is not found exception
const state = () => ({
	allUsers: [],
	currentUser: {
		id: 0,
		name: '',
		email: '',
		roleId: 0
	}
})

const mutations = {
	SET_CURRENT_USER_LOGIN (state, { id, name, email, roleId }) {
		state.currentUser.id = id
		state.currentUser.name = name
		state.currentUser.email = email
		state.currentUser.roleId = roleId
	},
	SET_ALL_USERS (state, payload) {
		state.allUsers = payload
	},
	ADD_SINGLE_USER (state, payload) {
		state.allUsers.push(payload)
	},
	UPDATE_SINGLE_USER (state, payload) {
		const index = state.allUsers.findIndex((element) => element.id === payload.id)

		state.allUsers[index] = payload
	},
	WIPE_CURRENT_USER (state) {
		state.currentUser.id = 0
		state.currentUser.name = ''
		state.currentUser.email = ''
		state.currentUser.roleId = 0
	}
}

const getters = ({
	getCurrentUserRole: (state) => state.currentUser.roleId,
	getAllUsers: (state) => state.allUsers,
	getCurrentUser: (state) => state.currentUser
})

export default {
	namespaced: true,
	state,
	mutations,
	// actions,
	getters
}
