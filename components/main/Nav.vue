<script setup>
import GIcons from "../common/GIcons.vue";
import Button from "../common/Button.vue";
import logo from "@/assets/images/main-logo.png";
import logo2 from "@/assets/images/main-logo-2.png";
import ContactModal from "./ContactModal.vue";

const route = useRoute();

const showSideBar = ref(false);
const showModal = ref(false);
onMounted(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 52) {
      document.getElementById("scroll-nav").style.top = "0";
    } else if (window.scrollY < 52) {
      document.getElementById("scroll-nav").style.top = "-100px";
    }
  });
});

const invert = computed(() => {
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
      class="absolute flex justify-between top-0 left-0 right-0 z-20 text-cleverBlack py-5"
    >
      <div class="flex items-center pl-10">
        <NuxtLink to="/">
          <div class="flex items-center">
            <img class="w-[50px]" :src="logo" />
            <div class="font-title text-[20px] font-[700] ml-3 text-white">
              CleverApps
            </div>
          </div>
        </NuxtLink>

        <div class="flex ml-10 items-center">
          <!-- <div class="font-text mr-10 cursor-pointer">Concerts</div> -->
        </div>
      </div>

      <div class="flex items-center">
        <div class="flex items-center font-albert">
          <a href="/#howItWorks" class="mr-10 cursor-pointer text-white"
            >How it works</a
          >
          <a href="/#techStack" class="mr-10 cursor-pointer text-white"
            >Tech stack</a
          >
          <a href="/#price" class="mr-10 cursor-pointer text-white">Pricing</a>
          <NuxtLink href="/academy" class="mr-10 cursor-pointer text-white"
            >Academy</NuxtLink
          >
          <!-- <div class="font-text mr-10 cursor-pointer">Product</div> -->
          <div class="mr-10 cursor-pointer font-text">
            <Button
              type="normal"
              color="light"
              rounded
              @click="showModal = true"
              >Let's talk</Button
            >
          </div>
        </div>
      </div>
    </div>
    <div
      id="scroll-nav"
      class="fixed border-b bg-white flex justify-between left-0 z-20 text-black w-full py-5 transition-all top-[-100px] duration-500"
    >
      <div class="flex items-center pl-10">
        <NuxtLink to="/">
          <div class="flex items-center">
            <img class="w-[50px]" :src="logo2" />
            <div class="font-title text-[20px] font-[700] ml-3">CleverApps</div>
          </div>
        </NuxtLink>
        <div class="flex ml-10 items-center text-albert"></div>
      </div>

      <div class="flex items-center">
        <div class="flex items-center font-albert">
          <a href="/#howItWorks" class="mr-10 cursor-pointer">How it works</a>
          <a href="/#techStack" class="mr-10 cursor-pointer">Tech stack</a>
          <a href="/#price" class="mr-10 cursor-pointer">Pricing</a>
          <NuxtLink href="/academy" class="mr-10 cursor-pointer text-black"
            >Academy</NuxtLink
          >
          <div class="mr-10 cursor-pointer font-text">
            <Button
              class="!px-5"
              type="normal"
              color="default"
              rounded
              @click="showModal = true"
              >Let's talk</Button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex fixed bg-white left-0 z-20 items-center justify-between w-full sm:hidden p-5"
  >
    <div
      @click="showSideBar = !showSideBar"
      class="flex justify-between text-white"
    >
      <GIcons name="menu" class="text-cleverBlack" />
    </div>

    <NuxtLink to="/" class="">
      <div class="flex items-center">
        <img class="w-[50px] hidden md:block" :src="logo" />
        <img class="w-[50px] md:hidden" :src="logo2" />
        <div class="font-title text-[16px] font-[700] ml-2">CleverApps</div>
      </div>
    </NuxtLink>

    <PSidebar v-model:visible="showSideBar" class="flex flex-col">
      <div class="flex flex-col gap-8 font-albert flex-1">
        <a @click="showSideBar = false" href="/#howItWorks" class="mr-10 cursor-pointer">How it works</a>
        <a @click="showSideBar = false" href="/#techStack" class="mr-10 cursor-pointer">Tech stack</a>
        <a @click="showSideBar = false" href="/#price" class="mr-10 cursor-pointer">Pricing</a>
        <NuxtLink href="/academy" class="mr-10 cursor-pointer text-black"
          >Academy</NuxtLink
        >
        <div @click="showSideBar = false" class="font-text mr-10 cursor-pointer mt-auto">
          <NuxtLink class="text-cleverBlack" to="/popups/privacy"
            >Privacy Policy</NuxtLink
          >
        </div>

        <div class="mr-10 cursor-pointer font-text">
          <Button
            class="!px-5"
            type="normal"
            color="default"
            rounded
            @click="() => {
              showSideBar = false
              showModal = true
            }
            "
            >Let's talk</Button
          >
        </div>
      </div>
    </PSidebar>
    <ContactModal v-model="showModal" />
  </div>
</template>

<style scoped></style>
