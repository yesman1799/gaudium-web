import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles.css';

import vOnView from '@/directives/vOnView.js'

const app = createApp(App);
app.use(router);
app.directive('on-view', vOnView) 
app.mount('#app');

