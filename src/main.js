import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'

const app = createApp(App)

axios.interceptors.request.use((config) => {
    // console.log(config); 
    let params = new URLSearchParams();
    params.append('hai', 'Abhi');
    config.params = params;
    return config;
});
app.use(router)
app.use(store)
app.mount('#app')
