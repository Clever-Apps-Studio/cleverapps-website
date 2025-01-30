<script setup lang="ts">
interface ITutor {
  name: string;
  image: string;
  description?: string;
  role?: string;
  company?: string;
  linkedin?: string;
  website?: string;
  github?: string;
  company_website?: string;
  links: any[];
  courses: string[];
}

interface IProps {
  tutor: ITutor;
}

defineProps<IProps>();
</script>

<template>
  <div class="flex flex-col md:flex-row items-center gap-10 jus">
    <div class="w-full md:w-[30%]">
      <img :src="tutor.image" />
    </div>
    <div class="w-full md:w-[70%]">
      <div class="text-center md:text-left">
        <p class="font-bold text-4xl">{{ tutor.name }}</p>
        <p class="mt-2 text-xl">{{ tutor.role }}</p>
        <p class="mt-1 text-base">
          {{ tutor.company
          }}<span
            >-
            <a
              class="underline text-cleverYellow font-medium"
              :href="tutor.company_website"
              >{{ tutor.company_website }}</a
            ></span
          >
        </p>
      </div>

      <div class="mt-5 leading-8" v-html="tutor.description"></div>

      <div class=" mt-2">
        <p class="font-medium mb-3">Courses</p>
        <div class="flex flex-col md:flex-row items-center gap-2 ">
          <p class="bg-cleverGreen/20 p-2 px-3 rounded text-green-700 w-full md:w-auto" v-for="course in tutor.courses">{{ course }}</p>
        </div>
      </div>

      <div class="mt-8 flex items-center gap-4 flex-wrap">
        <a
          v-for="link in tutor.links"
          :href="link.url"
          class="p-2 px-3 border rounded-full w-fit hover:bg-gray-200 hover:border-white"
          target="_blank"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </div>
</template>
