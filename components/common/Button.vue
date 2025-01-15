<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed } from "vue";
import { buttonVariantsRef } from "../variants";
import { useVariant } from "@/composables/useVariant";
import SpinnerAlt from "./SpinnerAlt.vue";

const emit = defineEmits(["click"]);
const props = withDefaults(
  defineProps<{
    type: "outline" | "normal";
    color: "success" | "danger" | "default" | "light" | "warning";
    loading?: boolean;
    rounded: boolean;
    to?: string;
    external?: boolean;
  }>(),
  {
    type: "normal",
    color: "default",
    loading: false,
    rounded: true,
    to: "",
    external: false,
  }
);
const router = useRouter()
const styleSelection = computed(() => {
  return {
    button: true,
    [`${props.type}_${props.color}`]: true,
  };
});

const classString = computed(() => {
  return useVariant(styleSelection, buttonVariantsRef);
});

const handleClick = () => {
  if (props.loading) return;
  if (props.to && !props.external) {
    router.push(props.to);
    return
  }

  if(props.external){
    navigateTo(props.to, { external: true })
    return
  }
  emit("click");
};
</script>

<template>
  <div
    :class="[
      classString,
      loading && 'cursor-not-allowed bg-opacity-50 hover:bg-opacity-50',
      rounded && 'rounded-full',
    ]"
    @click="handleClick"
  >
    <SpinnerAlt
      :classStyles="{
        'fill-jetGreen': color === 'success',
        'fill-jetRed': color === 'danger',
        'fill-jetBlack': color === 'default',
      }"
      v-if="loading"
    />
    <slot v-else>Button text</slot>
  </div>
</template>
