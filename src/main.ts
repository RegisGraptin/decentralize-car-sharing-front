import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// Fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass, faHandshake, faCar, faShieldAlt, faHandHoldingDollar  } from '@fortawesome/free-solid-svg-icons';

library.add(faMagnifyingGlass, faCar, faHandshake, faShieldAlt, faHandHoldingDollar)

import router from './router';



const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app');
