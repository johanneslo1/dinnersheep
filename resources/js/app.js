require('./bootstrap');

import { InertiaApp } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'

Vue.use(InertiaApp)
Vue.use(Autocomplete)

Vue.component('pagination', require('laravel-vue-pagination'));
Vue.use(require('vue-moment'));

const app = document.getElementById('app')

Vue.filter('money', function (value) {
    let val = (value/1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '€';
})

new Vue({
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(app)
