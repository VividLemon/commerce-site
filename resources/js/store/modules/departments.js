// import { DepartmentDataAccess as dda } from '../../api'

const state = () => ({
	allDepartments: []
})
const mutations = {
	SET_ALL_DEPARTMENTS (state, payload) {
		state.allDepartments = payload
	},
	ADD_SINGLE_DEPARTMENT (state, payload) {
		state.allDepartments.push(payload)
	},
	UPDATE_SINGLE_DEPARTMENT (state, payload) {
		const index = state.allDepartments.findIndex((element) => element.id === payload.id)

		state.allDepartments[index] = payload
	}
}

const getters = {
	getAllDepartments: (state) => state.allDepartments
}

export default {
	namespaced: true,
	state,
	mutations,
	// actions,
	getters
}
