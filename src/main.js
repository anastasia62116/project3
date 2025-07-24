import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const fetchOriginal = window.fetch;
window.fetch = (path, options) => {
    const uri = new URL(path, "http:212.193.30.175:5046")
    return fetchOriginal(uri, options);
}
createApp(App).mount('#app')
