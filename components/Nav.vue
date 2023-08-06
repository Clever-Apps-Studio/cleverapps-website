<script setup>
import Button from "@/components/common/Button.vue";
import logo from "@/assets/images/logo.png";

const showSideBar = ref(false);
onMounted(() => {
  window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 52) {
      document.getElementById("scroll-nav").style.top = "0";
    } else if (window.scrollY < 52) {
      document.getElementById("scroll-nav").style.top = "-100px";
    }
  });
});
</script>

<template>
  <div class="relative w-full max-[1097px]:hidden">
    <div
      class="absolute flex justify-between top-0 left-0 right-0 z-10 text-cleverBlack py-5"
    >
      <div class="flex items-center pl-10">
        <div class="flex items-center">
          <img class="w-[50px]" :src="logo" />
          <div class="font-title text-[16px] font-[700]">CleverPopups</div>
        </div>

        <div class="flex ml-10 items-center">
          <!-- <div class="font-text mr-10 cursor-pointer">Concerts</div> -->
        </div>
      </div>

      <div class="flex items-center">
        <div class="flex items-center font-albert">
          <a href="#pricing" class="mr-10 cursor-pointer">Pricing</a>
          <!-- <div class="font-text mr-10 cursor-pointer">Product</div> -->
          <div class="mr-10 cursor-pointer font-text">
            <Button type="normal" color="default" rounded
              >Try it for free</Button
            >
          </div>
        </div>
      </div>
    </div>
    <div
      id="scroll-nav"
      class="fixed border-b bg-white flex justify-between left-0 z-10 text-black w-full py-5 transition-all top-[-100px] duration-500"
    >
      <div class="flex items-center pl-10">
        <div class="flex items-center">
          <img class="w-[50px]" :src="logo" />
          <div class="font-title text-[16px] font-[700]">CleverPopups</div>
        </div>
        <div class="flex ml-10 items-center text-albert">
          <!-- <div class="font-text mr-10 cursor-pointer">Concerts</div> -->
        </div>
      </div>

      <div class="flex items-center">
        <div class="flex items-center font-albert">
          <a href="#pricing" class="mr-10 cursor-pointer">Pricing</a>
          <!-- <div class="font-text mr-10 cursor-pointer">Product</div> -->
          <div class="mr-10 cursor-pointer font-text">
            <Button class="!px-5" type="normal" color="default" rounded
              >Try it for free</Button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hidden relative w-full max-[1097px]:flex">
    <div
      @click="showSideBar = !showSideBar"
      class="absolute flex justify-between top-0 left-0 right-0 z-10 text-white p-10"
    >
      <GIcons name="menu" />
    </div>

    <PSidebar v-model:visible="showSideBar">
      <div class="font-text mr-10 cursor-pointer mb-3">Concerts</div>
      <div class="font-text mr-10 cursor-pointer mb-3">Movies</div>
      <div class="font-text mr-10 cursor-pointer mb-3">Theater</div>
      <div class="font-text mr-10 cursor-pointer mb-3">Family</div>
      <div class="w-full border-b mb-3"></div>

      <div class="mr-10 cursor-pointer mb-3 font-text">Sign In</div>
      <div class="mr-10 cursor-pointer mb-3 font-text">Sell</div>
      <div class="mr-10 cursor-pointer mb-3 font-text">Gift Cards</div>
      <div class="mr-10 cursor-pointer mb-3 font-text">Help</div>
    </PSidebar>
  </div>
</template>

<style scoped></style>
