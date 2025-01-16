<script setup lang="ts">
import Footer from "../components/main/Footer.vue";
import Nav from "../components/main/Nav.vue";
import PageHeader from "../components/common/PageHeader.vue";
import dayjs from "dayjs";

import Button from "../components/common/Button.vue";
import GIcons from "../components/common/GIcons.vue";
import JoinCohort from "../components/main/JoinCohortModal.vue";

import WebI from '../assets/svg/web.svg?component';
import MobileI from '../assets/svg/mobile.svg?component';
import DesignI from '../assets/svg/design.svg?component';
import DataI from '../assets/svg/data.svg?component';

import "animate.css";

const currentTraining: any = ref(null);
const showModal = ref(false);

const trainings = [
  {
    name: "Web Development Training",
    start_date: "2025-02-01",
    end_date: "2022-03-30",
    description:
      "Learn to build responsive and dynamic websites using modern tools and technologies like HTML, CSS, JavaScript, and frameworks.",
    modules: [
      "Frontend Development",
      "Backend Development",
      "API Development",
      "Deployment",
    ],
    value: "web_app_dev",
  },
  {
    name: "Mobile Development Training",
    start_date: "2025-02-01",
    end_date: "2022-03-30",
    description:
      "Master the skills to create engaging and functional mobile apps for Android and iOS using platforms like React Native or Flutter.",
    modules: ["React-Native", "Firebase", "Deployment"],
    value: "mobile_app_dev",
  },

  {
    name: "UI/UX Design Training",
    start_date: "2025-02-01",
    end_date: "2022-03-30",
    description:
      "Gain expertise in designing user-friendly interfaces and seamless experiences through design principles, wireframing, and prototyping.",
      modules: ["Figma", "Animation with Adobe After Effects"],
    value: "ui_ux_training",
  },
  {
    name: "Data Science Training",
    start_date: "2025-02-01",
    end_date: "2022-03-30",
    description:
      "Develop skills in data analysis, visualization, and machine learning with Python, R, and real-world datasets to solve complex problems.",
      modules: ["Data Cleaning", "Python", "Predictive Analysis", "R"],
    value: "data_science_training"
  },
];

const illustrations: any = {
  web_app_dev: WebI,
  mobile_app_dev: MobileI,
  ui_ux_training: DesignI,
  data_science_training: DataI
}
</script>

<template>
  <div class="flex flex-col h-full">
    <Nav />
    <PageHeader title="Academy" subtitle="CleverApps Academy" />
    
    <div class="flex items-center justify-center p-5 md:p-20">
      <div class="flex flex-col gap-40 w-full md:w-[70%] h-full">
        <div
          class="flex items-center gap-20"
          v-for="(training, idx) in trainings"
          :key="idx"
        >
          <div class="h-full min-w-[40%] ">
            <component :is="illustrations[training.value]" class="w-full h-full" />
          </div>
          <div>
            <p class="text-2xl font-bold font-title">{{ training.name }}</p>
            <div class="flex items-center mt-2 gap-3">
              <GIcons name="event" class="text-cleverBlack" />
              <p class="text-xl font-bold font-title">
                {{ dayjs(training.start_date).format("MMMM D, YYYY") }} -
                {{ dayjs(training.end_date).format("MMMM D, YYYY") }}
              </p>
            </div>
            <p class="text-lg font-text mt-4">{{ training.description }}</p>
            <ul class="mt-4 font-text text-lg">
              <li class="mb-2" v-for="(item, idx) in training.modules">
                {{ idx + 1 }}. {{ item }}
              </li>
            </ul>
            <div class="w-full md:w-1/2">
              <Button
                @click="
                  () => {
                    currentTraining = training;
                    showModal = true;
                  }
                "
                color="warning"
                class="mt-5"
                >Join Cohort</Button
              >
              <p class="text-sm text-gray-400 mt-2 text-center">
                Limited seats available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <JoinCohort v-model="showModal" :training="currentTraining" />
    <div class="mt-auto">
      <Footer />
    </div>
  </div>
</template>
