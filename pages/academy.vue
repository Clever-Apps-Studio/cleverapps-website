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

import react from "../../assets/images/react-logo.png";
import node from "../../assets/images/node.png";
import js from "../../assets/images/js.png";
import vue from "../../assets/images/vue.png";
import typescript from "../../assets/images/typescript.png";
import nuxt from "../../assets/images/nuxt.png";
import mongo from "../../assets/images/mongo.png";
import prisma from "../../assets/images/prisma.png";
import mysql from "../../assets/images/mysql.png";
import figma from "../../assets/images/figma.png";
import python from "../../assets/images/python.png";
import GPT from "../../assets/svg/gpt.svg?component";
import Excel from "../../assets/svg/excel.svg?component";

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
  {
    name: "Excel Training",
    start_date: "2025-02-01",
    end_date: "2022-03-30",
    description:
      "Master the art of data analysis and visualization using Excel. Learn to create pivot tables, charts, and automate tasks with VBA.",
      modules: ["Data Cleaning", "Pivot Tables", "VBA", "Charts"],
    value: "excel_training"
  }
];

const illustrations: any = {
  web_app_dev: WebI,
  mobile_app_dev: MobileI,
  ui_ux_training: DesignI,
  data_science_training: DataI,
  excel_training: Excel
}

const logos = [
  react,
  node,
  python,
  js,
  vue,
  typescript,
  nuxt,
  mongo,
  prisma,
  mysql,
  figma
]
</script>

<template>
  <div class="flex flex-col h-full">
    <Nav />
    <PageHeader title="Academy" subtitle="CleverApps Academy" >
     <div class="absolute bottom-0 w-full">
       <NuxtMarquee autoFill class="flex items-center !gap-10">
          <img v-for="(logo, idx) in logos" :key="idx" :src="logo" class="h-24 mx-8" />
      </NuxtMarquee>
     </div>
    </PageHeader>
    
    <div class="flex items-center justify-center p-5 md:p-20">
      <div class="flex flex-col gap-40 w-full md:w-[70%] h-full">
        <div
          class="flex flex-col md:flex-row items-center gap-20"
          v-for="(training, idx) in trainings"
          :key="idx"
        >
          <div class="h-full min-w-[40%] ">
            <component :is="illustrations[training.value]" class="w-full h-full" />
          </div>
          <div class="text-center md:text-left">
            <p class="text-2xl font-bold font-title">{{ training.name }}</p>
            <div class="flex items-center mt-2 gap-3 text-left">
              <GIcons name="event" class="text-cleverBlack" />
              <p class="text-xl font-bold font-title">
                {{ dayjs(training.start_date).format("MMMM D, YYYY") }} -
                {{ dayjs(training.end_date).format("MMMM D, YYYY") }}
              </p>
            </div>
            <p class="text-lg font-text mt-4">{{ training.description }}</p>
            <ul class="mt-4 font-text text-lg text-left">
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
