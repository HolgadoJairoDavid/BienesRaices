import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
// vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import App from "./App.vue";
import router from "./router";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// firebase

import {VueFire, VueFireAuth} from 'vuefire'
import {firebaseApp} from './config/firebase'


const app = createApp(App);
const vuetify = createVuetify({
    components,
    directives
})
app.use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()]
})
app.use(vuetify)
app.use(createPinia());
app.use(router);

app.mount("#app");
