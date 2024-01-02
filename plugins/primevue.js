import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Dialog from "primevue/dialog";
import MultiSelect from "primevue/multiselect";

// import "primevue/resources/themes/tailwind-light/theme.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue);
  nuxtApp.vueApp.component("PButton", Button);
  nuxtApp.vueApp.component("PInputText", InputText);
  nuxtApp.vueApp.component("PSidebar", Sidebar);
  nuxtApp.vueApp.component("PDialog", Dialog);
  nuxtApp.vueApp.component("PMultiSelect", MultiSelect);
  nuxtApp.vueApp.component("PInputNumber", InputNumber);
  //other components that you need
});
