import { createApp } from "vue"
import router from "./router"
import { pinia } from "./utils/pinia-state-management"
import App from "./views/Home.vue"

createApp(App).use(pinia).use(router).mount("#app")
