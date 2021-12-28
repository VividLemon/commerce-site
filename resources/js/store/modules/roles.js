// import { RoleDataAccess as rda } from '../../api'

const state = () => ({
	userRoles: []
})
const mutations = {
	SET_ALL_USER_ROLES (state, payload) {
		state.userRoles = payload
	},
	ADD_SINGLE_ROLE (state, payload) {
		state.userRoles.push(payload)
	},
	UPDATE_SINGLE_ROLE (state, payload) {
		const index = state.userRoles.findIndex((element) => element.id === payload.id)

		state.userRoles[index] = payload
	}
}

const getters = {
	getAllRoles: (state) => state.userRoles
}

export default {
	namespaced: true,
	state,
	mutations,
	// actions,
	getters
}
