<script setup lang="ts">
import { ref } from "vue";

import RadioInput from "./common/RadioInput.vue";
import GIcons from "./common/GIcons.vue";
import Button from "./common/Button.vue";

interface IItem {
  name: string;
  amount: number;
  annual: number;
  currency: string;
  features: string[];
}

const period = ref("monthly");

const props = defineProps<{ item: IItem }>();
</script>

<template>
  <div
    class="w-full lg:max-w-[500px] min-h-[500px] border rounded-[10px] bg-white"
  >
    <div class="p-5">
      <div class="flex flex-col items-center justify-center pt-5">
        <div class="font-title text-[20px] font-bold">Boost your sales</div>
        <div
          class="font-text text-gray-500 text-[13px] text-center mt-1 w-[80%]"
        >
          Use social proof to increase your conversion rate and boost your sales
          growth.
        </div>
      </div>
      <div class="flex justify-center mt-12">
        <RadioInput
          label="Monthly"
          class="mr-5"
          :selected="period === 'monthly'"
          @click="period = 'monthly'"
        />
        <RadioInput
          label="Annual"
          :selected="period === 'annually'"
          @click="period = 'annually'"
        />
      </div>
      <div>
        <div class="mt-10 font-text text-[16px] font-[600]">What you get</div>
        <div class="mt-5">
          <div class="mb-3 flex items-center" v-for="feature in item.features">
            <GIcons name="check_circle" />
            <div class="ml-2">{{ feature }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t p-5">
      <div class="text-cleverGreen h-[6px] mb-2 text-[12px]">
        {{ period === "annually" ? "Save 16%" : "" }}
      </div>
      <div class="flex flex-col sm:flex-row items-center justify-between">
        <div class="flex">
          <div class="text-[16px]">{{ item.currency }}</div>
          <div class="font-title text-[25px] font-bold self-end leading-3">
            {{ period === "monthly" ? item.amount : item.annual }}
          </div>
          <div class="self-end leading-3 ml-1 text-gray-500 text-[14px]">
            / {{ period === "monthly" ? "month" : "year" }} ( billed
            {{ period }} )
          </div>
          <div></div>
        </div>
        <Button class="!w-[130px] mt-6 sm:mt-0"> Try it for free</Button>
      </div>
    </div>
  </div>
</template>
