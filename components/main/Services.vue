<script setup>
import Title from "./Title.vue";
</script>

<template>
  <div class="p-5 md:p-20">
    <Title text="Our Services" />
    <div class="grid grid-cols-1 items-center md:grid-cols-3 gap-8 mt-20 text-center">
      <div
        class="flex flex-col items-center justify-center p-4 bg-gradient-to-t from-teal-500/50 to-white h-[200px] rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300"
      >
        <p class="text-xl font-bold text-teal-600">Web Application Development</p>
      </div>
      <div
        class="flex flex-col items-center justify-center p-4 bg-gradient-to-t from-indigo-500/50 to-white h-[200px] rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300"
      >
        <p class="text-xl font-bold text-indigo-600">Mobile Application Development</p>
      </div>
       <div
        class="flex flex-col items-center justify-center p-4 bg-gradient-to-t from-sky-500/50 to-white h-[200px] rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300"
      >
        <p class="text-xl font-bold text-sky-600">Desktop Application Development</p>
      </div>
      <div
        class="flex flex-col items-center justify-center p-4 bg-gradient-to-t from-red-500/50 to-white h-[200px] rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300"
      >
        <p class="text-xl font-bold text-red-600">Website Development</p>
      </div>
      <div
        class="flex flex-col items-center justify-center p-4 bg-gradient-to-t from-lime-500/50 to-white h-[200px] rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300"
      >
        <p class="text-xl font-bold text-lime-600">UI/UX Design</p>
      </div>
      <div
        class="flex flex-col items-center justify-center p-4 bg-gradient-to-t from-orange-500/50 to-white h-[200px] rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300"
      >
        <p class="text-xl font-bold text-orange-600">Enterprise Software</p>
      </div>
      <div
        class="flex flex-col items-center justify-center p-4 bg-gradient-to-t from-cyan-500/50 to-white h-[200px] rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300"
      >
        <p class="text-xl font-bold text-cyan-600">IT Consultancy</p>
      </div>
       <div
        class="flex flex-col items-center justify-center p-4 bg-gradient-to-t from-fuchsia-500/50 to-white h-[200px] rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300"
      >
        <p class="text-xl font-bold text-fuchsia-600">IT Training</p>
      </div>
      <div
        class="flex flex-col items-center justify-center p-4 bg-gradient-to-t from-blue-500/50 to-white h-[200px] rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300"
      >
        <p class="text-xl font-bold text-blue-600">AI Integration</p>
      </div>
    </div>
  </div>
</template>
