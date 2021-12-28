// import { ProductTypeDataAccess as ptda } from '../../api'

const state = () => ({
	allProductTypes: []
})
const mutations = {
	SET_ALL_PRODUCT_TYPES (state, payload) {
		state.allProductTypes = payload
	},
	ADD_SINGLE_PRODUCT_TYPE (state, payload) {
		state.allProductTypes.push(payload)
	},
	UPDATE_SINGLE_PRODUCT_TYPE (state, payload) {
		const index = state.allProductTypes.findIndex((element) => element.id === payload.id)

		state.allProductTypes[index] = payload
	}
}

const getters = {
	getAllProductTypes: (state) => state.allProductTypes
}

export default {
	namespaced: true,
	state,
	mutations,
	// actions,
	getters
}
