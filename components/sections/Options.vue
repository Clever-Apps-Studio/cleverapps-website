<script setup lang="ts">
import GIcons from "@/components/common/GIcons.vue";
</script>

<template>
  <div
    class="flex flex-col items-center min-h-[600px] p-10 px-5 lg:p-12 bg-white mb-20"
  >
    <div class="font-title font-[900] text-[25px] text-center">
      Why CleverPopups?
    </div>
    <div
      class="grid grid-cols-2 gap-10 w-[100%] lg:w-[70%] justify-center mt-20"
    >
      <div
        class="flex flex-col lg:flex-row col-span-2 lg:col-span-1 items-center"
      >
        <div>
          <GIcons
            name="celebration"
            class="!text-[70px] lg:!text-[100px] mr-5 text-[#47C00E]"
          />
        </div>

        <div class="text-center lg:text-left">
          <div class="font-title text-[20px] font-bold">
            Free festive templates
          </div>
          <div class="font-text text-[16px] mt-5">
            We provide various themes from Halloween, BFCM, Chrismas to New
            Year, etc. to bring the best experience to your customers. You can
            also design your template that matches your storefront.
          </div>
        </div>
      </div>
      <div
        class="flex flex-col lg:flex-row col-span-2 lg:col-span-1 items-center"
      >
        <GIcons
          name="palette"
          class="!text-[70px] lg:!text-[100px] mr-5 text-[#47C00E]"
        />
        <div class="text-center lg:text-left">
          <div class="font-title text-[20px] font-bold">
            Beautifully responsive design
          </div>
          <div class="font-text text-[16px] mt-5">
            CleverPopups helps you grab every potential visitor by showing
            highly converted pop-ups on desktop, tablet or mobile.
          </div>
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-2 gap-10 w-[100%] lg:w-[70%] justify-center mt-20"
    >
      <div
        class="flex flex-col lg:flex-row col-span-2 lg:col-span-1 items-center"
      >
        <GIcons
          name="grid_view"
          class="!text-[70px] lg:!text-[100px] mr-5 text-[#47C00E]"
        />
        <div class="text-center lg:text-left">
          <div class="font-title text-[20px] font-bold">
            Better user experience
          </div>
          <div class="font-text text-[16px] mt-5">
            Our app offers a seamless UI/UX, both on the front-end and back-end,
            ensuring the easiest and simplest experience for creating
            social-proof notifications that drive conversions.
          </div>
        </div>
      </div>
      <div
        class="flex flex-col lg:flex-row col-span-2 lg:col-span-1 items-center"
      >
        <GIcons
          name="tune"
          class="!text-[70px] lg:!text-[100px] mr-5 text-[#47C00E]"
        />
        <div class="text-center lg:text-left">
          <div class="font-title text-[20px] font-bold">Advanced settings</div>
          <div class="font-text text-[16px] mt-5">
            Experience complete customization with our app! Tailor messages,
            positions, display, and delay time for each notification on your
            storefront. Get creative and make each notification uniquely yours!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
