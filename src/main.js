import Vue from 'vue'
import App from './App.vue'
import {MediaQueries} from 'vue-media-queries';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faBell, faPlay, faPlus, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faBell, faPlay, faPlus, faQuestionCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

const mediaQueries = new MediaQueries();

Vue.use(mediaQueries);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mediaQueries: mediaQueries
}).$mount('#app')
