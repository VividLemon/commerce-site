import Cookie from 'js-cookie'

const state = () => ({
	cart: {
		products: []
	}
})
const mutations = {
	SET_COOKIES_TO_CART (state, payload) {
		state.cart.products = JSON.parse(payload)
	},
	ADD_PRODUCT_TO_CART (state, payload) {
		payload.quantity = 1
		const filter = state.cart.products.filter((product) => { return product.id === payload.id })

		if (filter.length) {
			filter[0].quantity++
		} else {
			state.cart.products.push(payload)
		}
		if (state.cookiesPreference) {
			const cart = JSON.stringify(state.cart.products)

			Cookie.set('cart-deletable', cart, { sameSite: 'strict', secure: true, expires: 7 })
		}
	},
	REMOVE_PRODUCT_FROM_CART (state, id) {
		state.cart.products.splice(state.cart.products.findIndex((element) => element.id === id), 1)
		if (state.cookiesPreference) {
			const cart = JSON.stringify(state.cart.products)

			Cookie.set('cart-deletable', cart, { sameSite: 'strict', secure: true, expires: 7 })
		}
	},
	UPDATE_CART_QUANTITY (state, { product, quantity }) {
		product.quantity = quantity
		const index = state.cart.products.findIndex((el) => el.id === product.id)

		state.cart.products.splice(index, 1, product)
		if (state.cookiesPreference) {
			const cart = JSON.stringify(state.cart.products)

			Cookie.set('cart-deletable', cart, { sameSite: 'strict', secure: true, expires: 7 })
		}
	},
	SET_COOKIE_POLICY (state, payload) {
		Cookie.set('cookie-preference', payload, { sameSite: 'lax' })
		state.cookiesPreference = payload
	}
}

const getters = {
	getCart: (state) => state.cart.products,
	getCookiePreference: (state) => state.cookiesPreference,
	getCartSize: (state) => state.cart.products.length
}

export default {
	namespaced: true,
	state,
	mutations,
	getters
}
