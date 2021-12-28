// import { EmployeeDataAccess as eda } from '../../api'

const state = () => ({
	allEmployees: []
})
const mutations = {
	SET_ALL_EMPLOYEES (state, payload) {
		state.allEmployees = payload
	},
	ADD_SINGLE_EMPLOYEE (state, payload) {
		state.allEmployees.push(payload)
	},
	UPDATE_SINGLE_EMPLOYEE (state, payload) {
		const index = state.allEmployees.findIndex((element) => element.id === payload.id)

		state.allEmployees[index] = payload
	}
}

const getters = {
	getAllEmployees: (state) => state.allEmployees
}

export default {
	namespaced: true,
	state,
	mutations,
	// actions,
	getters
}
