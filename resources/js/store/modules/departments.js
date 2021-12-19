// import { DepartmentDataAccess as dda } from '../../api'

const state = () => ({
	departments: {
		allDepartments: []
	}
})
const mutations = {
	SET_ALL_DEPARTMENTS (state, payload) {
		state.departments.allDepartments = payload
	},
	ADD_SINGLE_DEPARTMENT (state, payload) {
		state.departments.allDepartments.push(payload)
	},
	UPDATE_SINGLE_DEPARTMENT (state, payload) {
		const index = state.departments.allDepartments.findIndex((element) => element.id === payload.id)

		state.departments.allDepartments[index] = payload
	}
}

const getters = {
	getAllDepartments: (state) => state.departments.allDepartments
}

export default {
	namespaced: true,
	state,
	mutations,
	// actions,
	getters
}
