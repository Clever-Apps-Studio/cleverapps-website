<script setup lang="ts">
import GIcons from "@/components/common/GIcons.vue";
import Title from "./Title.vue";
</script>

<template>
  <div class="bg-gray-50 pt-20">
    <Title text="Why Us?" />
    <div class="flex flex-col items-center min-h-[600px] p-10 px-5 lg:p-12">
      <div
        class="grid grid-cols-2 gap-10 w-[100%] lg:w-[90%] justify-center mt-20"
      >
        <div class="flex flex-col md:flex-row col-span-2 lg:col-span-1 text-center">
          <div>
            <GIcons
              name="forum"
              class="!text-[70px] lg:!text-[100px] mr-5 text-[#ffbd02]"
            />
          </div>

          <div class="text-center lg:text-left">
            <div class="font-title text-[20px] font-bold">
              Responsive Communication
            </div>
            <div class="font-text text-[16px] mt-5 leading-7">
              At CleverApps, we prioritize responsive communication. We're here
              to listen, answer your questions, and address any concerns
              promptly. Our commitment to keeping you informed and engaged
              throughout our collaboration ensures that your project stays on
              track and aligns perfectly with your expectations. Your input is
              not only valued but also essential for our mutual success.
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row col-span-2 lg:col-span-1 text-center">
          <GIcons
            name="handshake"
            class="!text-[70px] lg:!text-[100px] mr-5 text-[#ffbd02]"
          />
          <div class="text-center lg:text-left">
            <div class="font-title text-[20px] font-bold">
              Long Term Engagements
            </div>
            <div class="font-text text-[16px] mt-5 leading-7">
              Our commitment to your success doesn't stop at project completion.
              We're here for the long run, dedicated to supporting your evolving
              needs. As we continue our partnership, you can count on us for
              ongoing collaboration, expertise, and solutions tailored to your
              changing goals.
            </div>
          </div>
        </div>
      </div>
      <div
        class="grid grid-cols-2 gap-10 w-[100%] lg:w-[90%] justify-center mt-20"
      >
        <div
          class="flex flex-col md:flex-row col-span-2 lg:col-span-1 items-center"
        >
          <GIcons
            name="grid_view"
            class="!text-[70px] lg:!text-[100px] mr-5 text-[#ffbd02]"
          />
          <div class="text-center lg:text-left">
            <div class="font-title text-[20px] font-bold">
              Project Management
            </div>
            <div class="font-text text-[16px] mt-5 leading-7">
              Our project management is the engine driving your project's
              success. Experienced professionals meticulously coordinate every
              aspect, ensuring timelines are met, resources are optimized, and
              your vision is realized seamlessly. With us, your project is in
              expert hands.
            </div>
          </div>
        </div>
        <div
          class="flex flex-col lg:flex-row col-span-2 lg:col-span-1 items-center"
        >
          <GIcons
            name="shield_person"
            class="!text-[70px] lg:!text-[100px] mr-5 text-[#ffbd02]"
          />
          <div class="text-center lg:text-left">
            <div class="font-title text-[20px] font-bold">Expert Engineers</div>
            <div class="font-text text-[16px] mt-5 leading-7">
              Our team is powered by expert engineers who bring unparalleled
              technical expertise to your project. Their proficiency and
              experience are the backbone of our ability to deliver top-quality
              solutions. With these skilled professionals at the helm, you can
              trust that your project is in capable hands.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
