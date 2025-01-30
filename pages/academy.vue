<script setup lang="ts">
import Footer from "../components/main/Footer.vue";
import Nav from "../components/main/Nav.vue";
import PageHeader from "../components/common/PageHeader.vue";
import dayjs from "dayjs";

import Button from "../components/common/Button.vue";
import GIcons from "../components/common/GIcons.vue";
import JoinCohort from "../components/main/JoinCohortModal.vue";
import Title from "@/components/main/Title.vue";
import Tutor from "~/components/main/Tutor.vue";

import WebI from "../assets/svg/web.svg?component";
import MobileI from "../assets/svg/mobile.svg?component";
import DesignI from "../assets/svg/design.svg?component";
import DataI from "../assets/svg/data.svg?component";

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
import Arduino from "../../assets/svg/arduino.svg?component"

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
    soon: false,
  },
  {
    name: "Mobile Development Training",
    start_date: "2025-02-01",
    end_date: "2022-03-30",
    description:
      "Master the skills to create engaging and functional mobile apps for Android and iOS using platforms like React Native or Flutter.",
    modules: ["React-Native", "Firebase", "Deployment"],
    value: "mobile_app_dev",
    soon: false,
  },

  {
    name: "UI/UX Design Training",
    start_date: "",
    end_date: "",
    description:
      "Gain expertise in designing user-friendly interfaces and seamless experiences through design principles, wireframing, and prototyping.",
    modules: ["Figma", "Animation with Adobe After Effects"],
    value: "ui_ux_training",
    soon: true,
  },
  {
    name: "Data Science & AI integration Training",
    start_date: "",
    end_date: "",
    description:
      "Develop skills in data analysis, visualization, and machine learning with Python, R, and real-world datasets to solve complex problems.",
    modules: ["Data Cleaning", "Python", "Predictive Analysis", "Data extraction with AI"],
    value: "data_science_training",
    soon: true,
  },
  {
    name: "Excel Training",
    start_date: "",
    end_date: "",
    description:
      "Master the art of data analysis and visualization using Excel. Learn to create pivot tables, charts, and automate tasks with VBA.",
    modules: ["Data Cleaning", "Pivot Tables", "VBA", "Charts"],
    value: "excel_training",
    soon: true,
  },
  {
    name: "Arduino Training",
    start_date: "",
    end_date: "",
    description:
      "This beginner-friendly Arduino course covers the basics of microcontrollers, programming, and electronics. Students will learn to set up Arduino, work with sensors, and build simple projects, gaining hands-on experience in embedded systems.",
    modules: ["Introduction to electronics", "Basic Arduino Programming", "Introduction to Arduino and Embedded Systems", "Working with Sensors and Actuators", "Building Real-World Projects"],
    value: "arduino",
    soon: true,
  },
];

const illustrations: any = {
  web_app_dev: WebI,
  mobile_app_dev: MobileI,
  ui_ux_training: DesignI,
  data_science_training: DataI,
  excel_training: Excel,
  arduino: Arduino
};

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
  figma,
];

const tutors = [
  {
    name: "Benjamin Kissi",
    image: "/tutors/ben.png",
    role: "Senior Fullstack Developer",
    company: "64Robots",
    company_website: 'https://www.64robots.com/',
    description: `Ben Kissi is an experienced full-stack developer with six years of hands-on expertise in web and mobile development. He studied Software Development in a 2 year programme at the Meltwater Entrepreneurial School of Technology (MEST). He alongside Hambau Abdulai Yaya and Samuel Amoah, won the 
    MEST-Vodafone Hackathon with <a class="underline font-medium" target="_blank" href="https://www.myjoyonline.com/tech-anti-drugs-counterfeit-app-tops-maiden-mest-vodafone-hackathon/">an anti-drug counterfeit app</a>. After MEST, he led the startup team at AdGeek, successfully raising $50,000 before the
    company was acquired by Kudobuzz in 2018. <br> Currently, he works as a full-stack developer at 64Robots, a US-based software agency, and is the co-founder and CEO of CleverApps, a Ghanaian software development and technology agency. His skills span web development, mobile development, and Arduino, making him a well-rounded tutor for aspiring developers.`,
    courses: ['Web Development Training', 'Mobile Development Training', 'Arduino Training'],
    links: [
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/benkissi/'
      },
      {
        label: 'Github',
        url: 'https://github.com/benkissi'
      },
      {
        label: 'Website',
        url: 'https://benkissi.com/'
      }
    ]
  }
]
</script>

<template>
  <div class="flex flex-col h-full">
    <Nav />
    <PageHeader title="Academy" subtitle="CleverApps Academy">
      <div class="absolute bottom-0 w-full">
        <NuxtMarquee autoFill class="flex items-center !gap-10">
          <img
            v-for="(logo, idx) in logos"
            :key="idx"
            :src="logo"
            class="h-24 mx-8"
          />
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
          <div class="h-full min-w-[40%]">
            <component
              :is="illustrations[training.value]"
              class="w-full h-full"
            />
          </div>
          <div class="text-center md:text-left">
            <p class="text-2xl font-bold font-title">{{ training.name }}</p>
            <div  v-if="training.start_date" class="flex items-center justify-center md:justify-start mt-2 gap-3 text-left">
              <GIcons name="event" class="text-cleverBlack" />
              <p class="md:text-xl font-bold font-title">
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
                :color="training.soon ? 'default' : 'warning'"
                class="mt-5"
                >{{ training.soon ? "Coming Soon" : "Enroll Now" }}</Button
              >
              <p v-if="!training.soon" class="text-sm text-gray-400 mt-2 text-center">
                Limited seats available
              </p>
               <p v-if="training.soon" class="text-sm text-gray-400 mt-2 text-center">
                Join waiting list
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 p-4 mx-0 md:mx-20 mb-20">
       <Title text="Tutors" class="mb-10" />
       <Tutor v-for="(tutor, idx) in tutors" :key="idx" :tutor="tutor"/>
    </div>
    <JoinCohort v-model="showModal" :training="currentTraining" />
    <div class="mt-auto">
      <Footer />
    </div>
  </div>
</template>
