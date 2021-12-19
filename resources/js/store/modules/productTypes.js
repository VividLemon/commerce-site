// import { ProductTypeDataAccess as ptda } from '../../api'

const state = () => ({
	productTypes: {
		allProductTypes: []
	}
})
const mutations = {
	SET_ALL_PRODUCT_TYPES (state, payload) {
		state.productTypes.allProductTypes = payload
	},
	ADD_SINGLE_PRODUCT_TYPE (state, payload) {
		state.productTypes.allProductTypes.push(payload)
	},
	UPDATE_SINGLE_PRODUCT_TYPE (state, payload) {
		const index = state.productTypes.allProductTypes.findIndex((element) => element.id === payload.id)

		state.productTypes.allProductTypes[index] = payload
	}
}

const getters = {
	getAllProductTypes: (state) => state.productTypes.allProductTypes
}

export default {
	namespaced: true,
	state,
	mutations,
	// actions,
	getters
}
