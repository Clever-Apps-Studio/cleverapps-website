<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import Button from "../common/Button.vue";

interface IProps {
  modelValue: boolean;
  training: any;
}
const props = withDefaults(defineProps<IProps>(), {
  modelValue: false,
  training: null,
});

const emits = defineEmits(["update:modelValue", "fieldEvent", "blur"]);
const localValue = useModelWrapper(props, emits, "modelValue");
const loading = ref(false);
const showSuccess = ref(false);

const form: any = reactive({
  full_name: "",
  email: "",
  phone: "",
  class: []
});

const rules = {
  full_name: { required },
  email: { required, email },
  phone: {required},
  class: { required },
};

const v$ = useVuelidate(rules, form);
console.log("ssss", v$);
const options = ref([
  { label: "Web Development Training", value: "web_app_dev" },
  { label: "Mobile Development Training", value: "mobile_app_dev" },
  { label: "UI/UX Design Training", value: "ui_ux_training" },
  { label: "Data Science Training", value: "data_science_training" },
]);

const handleSend = async () => {
  try {
    loading.value = true;
    v$.value.$validate();

    console.log("sdfdf", v$.value.$error);
    if (v$.value.$error) {
      loading.value = false;
      return;
    }

    const payload = {
      fullname: form.full_name,
      email: form.email,
      phone: form.phone,
      class: form.class,
    };

    const url = `https://script.google.com/macros/s/AKfycbzFSdQ-g2t7PFEhpivFsi4IzXafl59hrAS2lELsKCrKGJ0Uuk6tMnudnK-_rH8gguCI/exec`;

    const formDetails = new FormData();

    Object.keys(payload).forEach((k) => {
      formDetails.append(k, payload[k as keyof typeof payload]);
    });

    const res = await $fetch(url, {
      redirect: "follow",
      method: "POST",
      body: formDetails,
    });

    loading.value = false;
    handleClose();
    showSuccess.value = true;
  } catch (error) {
    loading.value = false;
  }
};

const handleClose = () => {
  v$.value.$reset();
  localValue.value = false;
  Object.keys(form).forEach((k) => {
    //@ts-ignore
    form[k as keyof typeof form] = null as any;
  });
};

watchEffect(() => {
  if(props.training) {
    form.class = [props.training.value];
  }
})
</script>

<template>
  <PDialog
    modal
    v-model:visible="localValue"
    @hide="handleClose"
    :style="{ width: '35vw' }"
    :breakpoints="{ '1199px': '50vw', '915px': '90vw' }"
    ><template #header>
      <h3 class="font-bold text-2xl">Join Cohort: {{ training.name }}</h3>
    </template>
    <div class="flex flex-col gap-5 w-full">
      <div class="w-full">
        <p class="mb-1">Full name</p>
        <div class="w-full">
          <PInputText
            v-model="v$.full_name.$model"
            class="w-full border rounded-full py-[8px] px-3"
          />
        </div>
        <p v-if="v$.full_name.$errors.length" class="text-xs text-red-400">
          {{ v$.full_name.$errors.map((item) => item?.$message).join(", ") }}
        </p>
      </div>
      <div class="w-full grid grid-cols-2 gap-5">
        <div>
          <p class="mb-1">Email</p>
          <div class="w-full">
            <PInputText
              v-model="v$.email.$model"
              class="w-full border rounded-full py-[8px] px-3"
            />
          </div>
          <p v-if="v$.email.$errors.length" class="text-xs text-red-400">
            {{ v$.email.$errors.map((item) => item?.$message).join(", ") }}
          </p>
        </div>
        <div>
          <p class="mb-1">
            Phone number
          </p>
          <div class="w-full">
            <PInputText
              v-model="v$.phone.$model"
              class="w-full border rounded-full py-[8px] px-3"
            />
          </div>
          <p v-if="v$.phone.$errors.length" class="text-xs text-red-400">
            {{ v$.phone.$errors.map((item) => item?.$message).join(", ") }}
          </p>
        </div>
      </div>
      <div class="w-full">
        <p class="mb-1">Select the class you want to join?</p>
        <PMultiSelect
          v-model="v$.class.$model"
          display="chip"
          :options="options"
          optionLabel="label"
          optionValue="value"
          placeholder="Select service type"
          :maxSelectedLabels="10"
          class="w-full border rounded-full"
          disabled
        />
        <p v-if="v$.class.$errors.length" class="text-xs text-red-400">
          {{ v$.class.$errors.map((item) => item?.$message).join(", ") }}
        </p>
      </div>
      
      <div class="mt-5 w-fit mx-auto">
        <Button
          @click="handleSend"
          class="!px-10 py-5"
          type="normal"
          color="default"
          rounded
          :loading="loading"
          >Send</Button
        >
      </div>
    </div>
  </PDialog>
  <PDialog
    modal
    v-model:visible="showSuccess"
    @hide="showSuccess = false"
    :style="{ width: '35vw' }"
    :breakpoints="{ '1199px': '50vw', '915px': '90vw' }"
  >
    <template #header> <div></div></template>
    <div class="flex flex-col items-center">
      <Icon name="uil:check-circle" class="text-green-500 text-7xl" />
      <p class="text-2xl font-bold">Request submitted successfully</p>
      <p class="text-center mt-4">
        You will be contacted soon by our team. Thank you and looking forward to
        working with you.
      </p>
      <div class="w-fit mx-auto mt-10">
        <Button
          @click="showSuccess = false"
          class="!px-10 py-5"
          type="normal"
          color="default"
          rounded
          >Ok</Button
        >
      </div>
    </div>
  </PDialog>
</template>

<style scoped>
:deep(.p-inputnumber .p-inputtext:enabled:focus) {
  outline: none;
  box-shadow: none !important;
}
</style>
