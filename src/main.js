import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify.js";
// import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";
import "./style.css";

import PrimeVue from "primevue/config";
import Listbox from 'primevue/listbox';
import router from './router'


const app = createApp(App);

app.use(PrimeVue, { ripple: true  }).use(router).use(vuetify);

app.component('list-box', Listbox);

app.mount("#app");


// createApp(App).mount('#app')

// .use(router).mount("#app");
