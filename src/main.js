import {createApp} from 'vue'
import App from './App.vue'
import './assets/index.scss';
import ElementPlus from 'element-plus'
import {createRouter} from "@/router";

createApp(App).use(ElementPlus).use(createRouter()).mount('#app')