<script setup>
import PriceItem from "./PriceItem.vue";
import Title from "./Title.vue";
const prices = [
  {
    name: "Starter",
    amount: 50,
    currency: "$",
    features: [
      "14-days risk-free trial!",
      "Flexible contract",
      "MVP delivered in 60 days",
      "Priority Support",
    ],
  },
];
</script>

<template>
  <div class="flex flex-col items-center p-20">
    <Title text="Pricing" class="mb-10" />
    <PriceItem v-for="item in prices" :item="item" />
  </div>
</template>
