import Cookie from 'js-cookie'

const state = () => ({
	products: []
})
const mutations = {
	SET_COOKIES_TO_CART (state, payload) {
		state.products = JSON.parse(payload)
	},
	ADD_PRODUCT_TO_CART (state, payload) {
		const product = state.products.find((product) => product.id === payload.id)

		if (product) {
			product.quantity++
		} else {
			payload.quantity = 1
			state.products.push(payload)
		}
		if (state.cookiesPreference) {
			const cart = JSON.stringify(state.products)

			Cookie.set('cart-deletable', cart, { sameSite: 'strict', secure: true, expires: 7 })
		}
	},
	REMOVE_PRODUCT_FROM_CART (state, id) {
		state.products.splice(state.products.findIndex((element) => element.id === id), 1)
		if (state.cookiesPreference) {
			const cart = JSON.stringify(state.products)

			Cookie.set('cart-deletable', cart, { sameSite: 'strict', secure: true, expires: 7 })
		}
	},
	UPDATE_CART_QUANTITY (state, { product, quantity }) {
		product.quantity = quantity
		const index = state.products.findIndex((el) => el.id === product.id)

		state.products.splice(index, 1, product)
		if (state.cookiesPreference) {
			const cart = JSON.stringify(state.products)

			Cookie.set('cart-deletable', cart, { sameSite: 'strict', secure: true, expires: 7 })
		}
	},
	SET_COOKIE_POLICY (state, payload) {
		Cookie.set('cookie-preference', payload, { sameSite: 'lax' })
		state.cookiesPreference = payload
	}
}

const getters = {
	getCart: (state) => state.products,
	getCookiePreference: (state) => state.cookiesPreference,
	getCartSize: (state) => state.products.length
}

export default {
	namespaced: true,
	state,
	mutations,
	getters
}
