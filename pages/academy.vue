<script setup lang="ts">
import Footer from "../components/main/Footer.vue";
import Nav from "../components/main/Nav.vue";
import PageHeader from "../components/common/PageHeader.vue";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

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
import Arduino from "../../assets/svg/arduino.svg?component";
import Ai from "../../assets/svg/ai.svg?component";

import { getDuration } from "~/utils/functions";

import "animate.css";

dayjs.extend(duration);

const currentTraining: any = ref(null);
const showModal = ref(false);

const trainings = [
  {
    name: "Free AI Integration Webinar",
    start_date: "2025-02-13",
    end_date: "2025-02-13",
    online_time: "7pm - 8:30pm",
    description:
      "Learn how you can leverage various AI tools and platforms to enhance your workflow and improve productivity",
    modules: [
      "How to run your own personal and local AI chatbot",
      "How to leverage AI chat bots",
      "Leveraging AI image and video generation",
      "AI photo enhancements and edits",
      "AI audio and music generation",
      "Learn about various free AI tools",
    ],
    value: "ai_webinar",
    soon: false,
    isWebinar: true,
    amount: "FREE"
  },
  {
    name: "Web Development Training",
    start_date: "2025-03-01",
    end_date: "2025-08-1",
    offline_time: "6pm - 9pm",
    online_time: "1pm - 4pm",
    offline_days: ["Monday", "Wednesday"],
    online_days: ["Sunday"],
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
    amount: "₵1,000",
    location: {
      name: "Ennovate BLCK",
      link: "https://maps.app.goo.gl/SvJHcQVuebqpNU4MA",
    },
  },
  {
    name: "Mobile Development Training",
    start_date: "2025-03-01",
    end_date: "2025-08-01",
    offline_time: "6pm - 9pm",
    online_time: "4:30pm - 7:30pm",
    offline_days: ["Tuesday", "Thursday"],
    online_days: ["Sunday"],
    description:
      "Master the skills to create engaging and functional mobile apps for Android and iOS using platforms like React Native or Flutter.",
    modules: ["React-Native", "Firebase", "Deployment"],
    value: "mobile_app_dev",
    soon: false,
    amount: "₵700",
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
    modules: [
      "Data Cleaning",
      "Python",
      "Predictive Analysis",
      "Data extraction with AI",
    ],
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
    modules: [
      "Introduction to electronics",
      "Basic Arduino Programming",
      "Introduction to Arduino and Embedded Systems",
      "Working with Sensors and Actuators",
      "Building Real-World Projects",
    ],
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
  arduino: Arduino,
  ai_webinar: Ai,
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
    company_website: "https://www.64robots.com/",
    description: `Ben Kissi is an experienced full-stack developer with six years of hands-on expertise in web and mobile development. He studied Software Development in a 2 year programme at the Meltwater Entrepreneurial School of Technology (MEST). He alongside Hambau Abdulai Yaya and Samuel Amoah, won the 
    MEST-Vodafone Hackathon with <a class="underline font-medium" target="_blank" href="https://www.myjoyonline.com/tech-anti-drugs-counterfeit-app-tops-maiden-mest-vodafone-hackathon/">an anti-drug counterfeit app</a>. After MEST, he led the startup team at AdGeek, successfully raising $50,000 before the
    company was acquired by Kudobuzz in 2018. <br> Currently, he works as a full-stack developer at 64Robots, a US-based software agency, and is the co-founder and CEO of CleverApps, a Ghanaian software development and technology agency. His skills span web development, mobile development, and Arduino, making him a well-rounded tutor for aspiring developers.`,
    courses: [
      "Web Development Training",
      "Mobile Development Training",
      "Arduino Training",
    ],
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/benkissi/",
      },
      {
        label: "Github",
        url: "https://github.com/benkissi",
      },
      {
        label: "Website",
        url: "https://benkissi.com/",
      },
    ],
  },
  {
    name: "Edward Watts Adjei",
    image: "/tutors/eddy.png",
    role: "UI/UX Designer & Software Developer",
    company: "AgroInnova",
    company_website: "https://agroinnovagh.com/",
    description:
      "Edward is astute software developer and UI/UX designer with over half a decade of experience work. He has excelled at UI/UX design and product design, leading the creation of innovative digital solutions for companies in Ghana and the UK. <br> Currently, he works as a UI/UX designer, software developer and project team lead at Agro Innova (An agri-tech company) based in Ghana. He is the founder and CEO of CODO, a Ghanaian mentorship and coaching organisation. He also leads the creatives for several businesses in the technology, education and medical sectors.",
    courses: ["UI/UX Design", "Frontend Development"],
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/edward-watts-adjei/",
      },
      {
        label: "Dribbble",
        url: "https://dribbble.com/Eddie_Watts",
      },
    ],
  },
];
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
    <div
      class="text-xl md:text-2xl p-2 flex text-center justify-center items-center bg-cleverYellow"
    >
      <div>
        <a
          href="https://maps.app.goo.gl/SvJHcQVuebqpNU4MA"
          target="_blank"
          class="underline font-bold"
          ><p>
            <span
              ><Icon class="!inline" name="ion:ios-location" size="40" /></span
            >Ennovate BLCK - Innovation Hub - Adenta
          </p></a
        >
        <p class="text-sm">Click here to get directions</p>
      </div>
    </div>

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
            <div
              v-if="training.start_date"
              class="flex items-center justify-center md:justify-start mt-2 gap-3 text-left"
            >
              <GIcons name="event" class="text-cleverBlack" />
              <p class="md:text-xl font-bold font-title">
                {{ dayjs(training.start_date).format("MMMM D, YYYY") }} -
                {{ dayjs(training.end_date).format("MMMM D, YYYY") }}
                <span v-if="!training.isWebinar"
                  >({{
                    getDuration(training.start_date, training.end_date).months
                  }}
                  months)</span
                >
              </p>
            </div>
            <div v-if="!training.soon">
              <div
                class="flex justify-center md:justify-start flex-wrap gap-2 mt-2"
              >
                <p class="underline font-medium">In-Person Days:</p>
                <p v-for="day in training.offline_days">{{ day }},</p>
                <p class="font-semibold">{{ training.offline_time }}</p>
              </div>
              <div class="flex justify-center md:justify-start gap-2 mt-2">
                <p class="underline font-medium">Online Days:</p>
                <p v-for="day in training.online_days">{{ day }},</p>
                <p class="font-semibold">{{ training.online_time }}</p>
              </div>
            </div>
            <p class="text-lg font-text mt-4 text-left">
              {{ training.description }}
            </p>
            <ul class="mt-4 font-text text-lg text-left">
              <li class="mb-2" v-for="(item, idx) in training.modules">
                {{ idx + 1 }}. {{ item }}
              </li>
            </ul>
            <div v-if="training?.amount?.toLowerCase() === 'free'" class="">
               <p class="text-3xl font-bold ">{{ training.amount }} !</p>
            </div>
            <div class="mt-4" v-else-if="training.amount">
              <p class="text-xl font-bold">{{ training.amount }}/month</p>
            </div>
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
              <p
                v-if="!training.soon && !training.isWebinar"
                class="text-sm text-gray-400 mt-2 text-center"
              >
                Limited seats available (30 seats)
              </p>
              <p
                v-if="training.soon"
                class="text-sm text-gray-400 mt-2 text-center"
              >
                Join waiting list
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 p-4 mx-0 md:mx-20 mb-20">
      <Title text="Tutors" class="mb-10" />
      <Tutor
        v-for="(tutor, idx) in tutors"
        :key="idx"
        :tutor="tutor"
        class="mb-10"
      />
    </div>
    <JoinCohort v-model="showModal" :training="currentTraining" />
    <div
      class="flex flex-col gap-4 bg-slate-200 justify-center items-center p-10"
    >
      <p class="text-xl md:text-4xl font-bold">For further information call</p>
      <p class="text-xl md:text-4xl font-bold">020 507 6696</p>
    </div>
    <div class="mt-auto">
      <Footer />
    </div>
  </div>
</template>
