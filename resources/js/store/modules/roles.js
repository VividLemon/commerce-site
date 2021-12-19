// import { RoleDataAccess as rda } from '../../api'

const state = () => ({
	roles: {
		userRoles: []
	}
})
const mutations = {
	SET_ALL_USER_ROLES (state, payload) {
		state.roles.userRoles = payload
	},
	ADD_SINGLE_ROLE (state, payload) {
		state.roles.userRoles.push(payload)
	},
	UPDATE_SINGLE_ROLE (state, payload) {
		const index = state.roles.userRoles.findIndex((element) => element.id === payload.id)

		state.roles.userRoles[index] = payload
	}
}

const getters = {
	getAllRoles: (state) => state.roles.userRoles
}

export default {
	namespaced: true,
	state,
	mutations,
	// actions,
	getters
}
