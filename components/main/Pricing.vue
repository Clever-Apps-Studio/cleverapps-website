<script setup>
import PriceItem from "./PriceItem.vue";
import Title from "./Title.vue";

const { location } = await useLocation();
const prices = [
  {
    name: "Starter",
    amount: 10,
    currency: "$",
    features: [
      "14-days risk-free trial!",
      "Flexible contract",
      "MVP delivered in 60 days",
      "Priority Support",
    ],
  },
];

const hideAmount = computed(() => {
  if (location.value) {
    return location.value.country === 'GH'
  }
  return false;
})

watchEffect(() => {
  console.log("location", location);
})
</script>

<template>
  <div class="flex flex-col items-center p-5 md:p-20">
  
    <Title text="Pricing" class="mb-10" />
    <PriceItem :hideAmount="hideAmount" v-for="item in prices" :item="item" />
  </div>
</template>
