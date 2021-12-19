// import { EmployeeDataAccess as eda } from '../../api'

const state = () => ({
	employees: {
		allEmployees: []
	}
})
const mutations = {
	SET_ALL_EMPLOYEES (state, payload) {
		state.employees.allEmployees = payload
	},
	ADD_SINGLE_EMPLOYEE (state, payload) {
		state.employees.allEmployees.push(payload)
	},
	UPDATE_SINGLE_EMPLOYEE (state, payload) {
		const index = state.employees.allEmployees.findIndex((element) => element.id === payload.id)

		state.employees.allEmployees[index] = payload
	}
}

const getters = {
	getAllEmployees: (state) => state.employees.allEmployees
}

export default {
	namespaced: true,
	state,
	mutations,
	// actions,
	getters
}
