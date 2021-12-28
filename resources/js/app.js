import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import { store } from './store/index'

require('./bootstrap')

createInertiaApp({
	title: (title) => title,
	resolve: (name) => require(`./Pages/${name}.vue`),
	setup ({ el, app, props, plugin }) {
		return createApp({ render: () => h(app, props) })
			.use(plugin)
			.use(store)
			// eslint-disable-next-line no-undef
			.mixin({ methods: { route } })
			.mount(el)
	}
})

InertiaProgress.init({ color: '#4B5563' })
