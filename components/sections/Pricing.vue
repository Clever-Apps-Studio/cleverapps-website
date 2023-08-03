<script setup lang="ts">
const prices = [
  {
    name: "Starter",
    amount: 4.99,
    annual: 50,
    currency: "$",
    features: [
      "Unlimited Sales Notifications",
      "Templates and layouts",
      "Design customization",
      "Priority Support",
    ],
  },
];
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-[500px] mb-20">
    <div class="flex flex-col justify-center text-center">
      <div class="font-title text-[25px] font-[900]">
        <div>Simple and affordable pricing</div>
      </div>
      <div class="font-text text-[20px] text-gray-800">14 days free trial</div>
    </div>
    <div class="mt-12">
      <PriceItem v-for="item in prices" :item="item" />
    </div>
  </div>
</template>
