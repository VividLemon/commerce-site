// import { ProductDataAccess as pda } from '../../api'

const state = () => ({
	cookiesPreference: true,
	allProducts: [],
	queryProducts: [],
	relatedProducts: [],
	product: {
		id: 0,
		name: '',
		description: '',
		price: 0,
		typeId: 0,
		defaultImageUrl: ''
	}
})
const mutations = {
	SET_ALL_PRODUCTS (state, payload) {
		state.allProducts = payload
	},
	SET_QUERIES_PRODUCTS (state, payload) {
		state.queryProducts = payload
	},
	SET_RELATED_PRODUCTS (state, payload) {
		state.relatedProducts = payload
	},
	SET_SINGLE_PRODUCT (state, { id, name, description, price, typeId, defaultImageUrl }) {
		state.product.id = id
		state.product.name = name
		state.product.description = description
		state.product.price = price
		state.product.typeId = typeId
		state.product.defaultImageUrl = defaultImageUrl
	},
	ADD_SINGLE_PRODUCT (state, payload) {
		state.allProducts.push(payload)
	},
	UPDATE_SINGLE_PRODUCT (state, payload) {
		const index = state.allProducts.findIndex((element) => element.id === payload.id)

		state.allProducts[index] = payload
	}
}

const getters = {
	getAllProducts: (state) => state.allProducts,
	getSingleProduct: (state) => state.product,
	getSearchedProducts: (state) => state.queryProducts,
	getRelatedProducts: (state) => state.relatedProducts
}

export default {
	namespaced: true,
	state,
	mutations,
	// actions,
	getters
}
