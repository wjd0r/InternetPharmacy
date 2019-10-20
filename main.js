import Vue from 'vue';
import YoungGyun from './YoungGyun';

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMortarPestle } from '@fortawesome/free-solid-svg-icons'
import { faHospital } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faHospital, faMortarPestle)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue(YoungGyun).$mount('#root');