import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from "vue";
import App from "./App.vue";
import 'bootstrap'
import { router } from './plugins/index'
import VueScrollTo from 'vue-scrollto'

const app = createApp(App)
app.use(router)
app.use(VueScrollTo)
app.mount("#app");
