import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import InputText from "primevue/inputtext";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("PButton", Button);
  nuxtApp.vueApp.component("PInputText", InputText);
  nuxtApp.vueApp.component("PSidebar", Sidebar);
  //other components that you need
});
