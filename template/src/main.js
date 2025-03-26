import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import createQspace from './createQspace.js';
import spaceVueCustomPlugin from './plugins/Space/index.js';

const app = createApp(App);

app.use(spaceVueCustomPlugin);

app.mount('#app');