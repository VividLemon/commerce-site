import { createStore } from 'vuex'
import cart from './modules/cart'
import departments from './modules/departments'
import employees from './modules/employees'
import products from './modules/products'
import productTypes from './modules/productTypes'
import roles from './modules/roles'
import users from './modules/users'

export default createStore({
	modules: {
		cart,
		departments,
		employees,
		products,
		productTypes,
		roles,
		users
	},
	strict: process.env.NODE_ENV !== 'production'
})
