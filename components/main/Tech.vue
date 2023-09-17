<script setup>
import Title from "./Title.vue";
import react from "../../assets/images/react-logo.png";
import node from "../../assets/images/node.png";
import js from "../../assets/images/js.png";
import vue from "../../assets/images/vue.png";
import typescript from "../../assets/images/typescript.png";
import nuxt from "../../assets/images/nuxt.png";
import mongo from "../../assets/images/mongo.png";
import prisma from "../../assets/images/prisma.png";
import mysql from "../../assets/images/mysql.png";
</script>

<template>
  <div
    class="flex flex-col items-center justify-center bg-black min-h-[300px] p-20"
  >
    <Title text="Tech Stack" />
    <div class="w-[50%]">
      <div class="grid grid-cols-4 gap-5 mt-20 text-white">
        <div class="flex flex-col items-center">
          <img class="w-[100px]" :src="typescript" />
          <div>Typescript</div>
        </div>
        <div class="flex flex-col items-center">
          <img class="w-[100px]" :src="js" />
          <div>Javascript</div>
        </div>
        <div class="flex flex-col items-center">
          <img class="w-[100px]" :src="vue" />
          <div>Vue JS</div>
        </div>
        <div class="flex flex-col items-center">
          <img class="w-[100px]" :src="nuxt" />
          <div>Nuxt</div>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-5 mt-20 text-white">
        <div class="flex flex-col items-center">
          <img class="w-[100px]" :src="react" />
          <div>React Native</div>
        </div>
        <div class="flex flex-col items-center">
          <img class="w-[100px]" :src="node" />
          <div>Node Js</div>
        </div>
        <div class="flex flex-col items-center">
          <img class="w-[100px]" :src="mongo" />
          <div>Mongo DB</div>
        </div>
        <div class="flex flex-col items-center">
          <img class="w-[100px]" :src="mysql" />
          <div>MySql</div>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-5 mt-20 text-white">
        <div class="flex flex-col items-center">
          <img class="w-[100px]" :src="prisma" />
          <div>Prisma</div>
        </div>
      </div>
    </div>
  </div>
</template>
