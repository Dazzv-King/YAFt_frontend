import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
const cors = require('cors');

createApp(App).mount('#app')

App.use(cors());
App.options('*', cors());
