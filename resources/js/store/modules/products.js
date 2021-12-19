// import { ProductDataAccess as pda } from '../../api'

const state = () => ({
	cookiesPreference: true,
	products: {
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
	}
})
const mutations = {
	SET_ALL_PRODUCTS (state, payload) {
		state.products.allProducts = payload
	},
	SET_QUERIES_PRODUCTS (state, payload) {
		state.products.queryProducts = payload
	},
	SET_RELATED_PRODUCTS (state, payload) {
		state.products.relatedProducts = payload
	},
	SET_SINGLE_PRODUCT (state, { id, name, description, price, type_id, default_image_url }) {
		state.products.product.id = id
		state.products.product.name = name
		state.products.product.description = description
		state.products.product.price = price
		state.products.product.typeId = type_id
		state.products.product.defaultImageUrl = default_image_url
	},
	ADD_SINGLE_PRODUCT (state, payload) {
		state.products.allProducts.push(payload)
	},
	UPDATE_SINGLE_PRODUCT (state, payload) {
		const index = state.products.allProducts.findIndex((element) => element.id === payload.id)

		state.products.allProducts[index] = payload
	}
}

const getters = {
	getAllProducts: (state) => state.products.allProducts,
	getSingleProduct: (state) => state.products.product,
	getSearchedProducts: (state) => state.products.queryProducts,
	getRelatedProducts: (state) => state.products.relatedProducts
}

export default {
	namespaced: true,
	state,
	mutations,
	// actions,
	getters
}
