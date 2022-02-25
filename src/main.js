import {createApp} from 'vue'
import App from './App.vue'
import './assets/index.scss';
import ElementPlus from 'element-plus'
import router from "@/router";
import store from "@/store"

createApp(App).use(ElementPlus).use(router).use(store).mount('#app')