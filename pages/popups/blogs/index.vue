<script setup lang="ts">
definePageMeta({
  layout: "popups",
});

const { blogList } = useBlogs();
</script>

<template>
  <div class="min-h-fit bg-white">
    <SectionsHeader
      title="Welcome to our blog"
      desc="Great brands use CleverPopups to boost conversions"
    >
    </SectionsHeader>
    <div class="grid rid-cols-1 md:grid-cols-3 py-10 px-5 md:px-52">
      <div v-for="blog in blogList" :key="blog.slug">
        <BlogItem :blog="blog" />
      </div>
    </div>
  </div>
</template>
