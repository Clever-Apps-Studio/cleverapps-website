<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import Button from "../common/Button.vue";

interface IProps {
  modelValue: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  modelValue: true,
});

const emits = defineEmits(["update:modelValue", "fieldEvent", "blur"]);
const localValue = useModelWrapper(props, emits, "modelValue");
const loading = ref(false);
const showSuccess = ref(false);

const form = reactive({
  full_name: "",
  email: "",
  phone: "",
  project_type: [],
  budget: null,
  duration: null,
  project_name: "",
});

const rules = {
  full_name: { required },
  email: { required, email },
  phone: {},
  project_type: { required },
  budget: { required },
  duration: { required },
  project_name: {},
};

const v$ = useVuelidate(rules, form);
console.log("ssss", v$);
const options = ref([
  { label: "Mobile app", value: "mobile_app" },
  { label: "Web app", value: "web_app" },
  { label: "Desktop app", value: "desktop_app" },
  { label: "Third-party Integration", value: "third_party_integration" },
  { label: "AI Integration", value: "ai_integration" },
  { label: "API Development", value: "api" },
  { label: "IT Consulting", value: "it_consulting" },
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
      types: form.project_type.join(", "),
      duration: `${form.duration}`,
      budget: `${form.budget}`,
      name: form.project_name,
    };

    const url = `https://script.google.com/macros/s/AKfycbxmaurT5GyUTSGyLeSyv5G2T5svqZVAni3MQ6jtb1Zv51MI9AtYlRl8yvUoK0323Ik/exec`;

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
</script>

<template>
  <PDialog
    modal
    v-model:visible="localValue"
    @hide="handleClose"
    :style="{ width: '35vw' }"
    :breakpoints="{ '1199px': '50vw', '915px': '90vw' }"
    ><template #header>
      <h3 class="font-bold text-2xl">Let's get started</h3>
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
            Phone number <span class="text-gray-400">(optional)</span>
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
        <p class="mb-1">Select the type of project or service you want?</p>
        <PMultiSelect
          v-model="v$.project_type.$model"
          display="chip"
          :options="options"
          optionLabel="label"
          optionValue="value"
          placeholder="Select service type"
          :maxSelectedLabels="10"
          class="w-full border rounded-full"
        />
        <p v-if="v$.project_type.$errors.length" class="text-xs text-red-400">
          {{ v$.project_type.$errors.map((item) => item?.$message).join(", ") }}
        </p>
      </div>
      <div class="w-full">
        <p class="mb-1">Estimated duration</p>
        <div class="w-full flex gap-5 items-center">
          <PInputNumber
            :maxFractionDigits="0"
            :max="12"
            showButtons
            v-model="v$.duration.$model"
            class="flex-1 border rounded-full py-[6px] px-3"
          />
          <div>Months</div>
        </div>
        <p class="text-xs text-red-400">
          {{ v$.duration.$errors.map((item) => item?.$message).join(", ") }}
        </p>
      </div>
      <div class="w-full">
        <p class="mb-1">Estimated budget</p>
        <div class="w-full">
          <PInputNumber
            :maxFractionDigits="0"
            mode="currency"
            showButtons
            currency="USD"
            v-model="v$.budget.$model"
            class="w-full border rounded-full py-[6px] px-3"
          />
          <p class="text-xs text-red-400">
            {{ v$.budget.$errors.map((item) => item?.$message).join(", ") }}
          </p>
        </div>
      </div>
      <div class="w-full">
        <p class="mb-1">
          Name of project <span class="text-gray-400">(optional)</span>
        </p>
        <div class="w-full">
          <PInputText
            v-model="v$.project_name.$model"
            class="w-full border rounded-full py-[8px] px-3"
          />
        </div>
        <p class="text-xs text-red-400">
          {{ v$.project_name.$errors.map((item) => item?.$message).join(", ") }}
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
