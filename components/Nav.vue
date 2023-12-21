<script setup>
import GIcons from "./common/GIcons.vue";
import Button from "./common/Button.vue";
import logo from "@/assets/images/logo.png";

const route = useRoute();

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

const invert = computed(() => {
  console.log("hey---", route.name);
  if (route.name.toLowerCase().includes("privacy")) {
    return true;
  }
  return false;
});

const isHomePage = computed(() => {
  if (route.name === "popups") return true;
  return false;
});
</script>

<template>
  <div class="hidden relative w-full sm:block">
    <div
      class="absolute flex justify-between top-0 left-0 right-0 z-10 text-cleverBlack py-5"
    >
      <div class="flex items-center pl-10">
        <NuxtLink to="/popups">
          <div class="flex items-center">
            <img class="w-[50px]" :src="logo" />
            <div
              class="font-title text-[16px] font-[700]"
              :class="{
                'text-white': invert,
              }"
            >
              CleverPopups
            </div>
          </div>
        </NuxtLink>

        <div class="flex ml-10 items-center">
          <!-- <div class="font-text mr-10 cursor-pointer">Concerts</div> -->
        </div>
      </div>

      <div class="flex items-center">
        <div class="flex items-center font-albert">
          <a
            v-if="isHomePage"
            href="#pricing"
            class="mr-10 cursor-pointer"
            :class="{
              'text-white': invert,
            }"
            >Pricing</a
          >
          <NuxtLink to="/popups/blogs" class="font-text mr-10 cursor-pointer"
            >Blogs</NuxtLink
          >
          <div class="mr-10 cursor-pointer font-text">
            <Button
              to="https://apps.shopify.com/cleverpopups-production"
              external
              type="normal"
              :color="invert ? 'light' : 'default'"
              rounded
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
        <NuxtLink to="/popups">
          <div class="flex items-center">
            <img class="w-[50px]" :src="logo" />
            <div class="font-title text-[16px] font-[700]">CleverPopups</div>
          </div>
        </NuxtLink>
        <div class="flex ml-10 items-center text-albert">
          <!-- <div class="font-text mr-10 cursor-pointer">Concerts</div> -->
        </div>
      </div>

      <div class="flex items-center">
        <div class="flex items-center font-albert">
          <a href="#pricing" class="mr-10 cursor-pointer" v-if="isHomePage"
            >Pricing</a
          >
          <!-- <div class="font-text mr-10 cursor-pointer">Product</div> -->
          <div class="mr-10 cursor-pointer font-text">
            <Button
              to="https://apps.shopify.com/cleverpopups-production"
              external
              class="!px-5"
              type="normal"
              color="default"
              rounded
              >Try it for free</Button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-between relative w-full sm:hidden p-5">
    <div
      @click="showSideBar = !showSideBar"
      class="flex justify-between text-white"
    >
      <GIcons name="menu" class="text-cleverBlack" />
    </div>

    <NuxtLink to="/popups" class="">
      <div class="flex items-center">
        <img class="w-[50px]" :src="logo" />
        <div class="font-title text-[16px] font-[700]">CleverPopups</div>
      </div>
    </NuxtLink>

    <PSidebar v-model:visible="showSideBar">
      <div class="font-text mr-10 cursor-pointer mb-3">
        <a
          v-if="isHomePage"
          href="#pricing"
          class="mr-10 cursor-pointer text-cleverBlack"
          >Pricing</a
        >
      </div>
      <div class="font-text mr-10 cursor-pointer mb-3">
        <NuxtLink class="text-cleverBlack" to="/popups/blogs">Blog</NuxtLink>
      </div>
      <div class="font-text mr-10 cursor-pointer mb-3">
        <NuxtLink class="text-cleverBlack" to="/popups/privacy"
          >Privacy Policy</NuxtLink
        >
      </div>
    </PSidebar>
  </div>
</template>

<style scoped></style>
