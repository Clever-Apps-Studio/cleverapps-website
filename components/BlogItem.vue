<script setup lang="ts">
interface IProps {
  blog?: {
    slug: string;
    title: string;
    description: string;
    image: string;
  } | null;
}

const props = withDefaults(defineProps<IProps>(), {
  blog: null,
});

const router = useRouter();

const handleClick = () => {
  router.push(`/popups/blogs/${props.blog?.slug}`);
};
</script>

<template>
  <div
    @click="handleClick"
    class="flex flex-col w-full max-w-xl rounded overflow-hidden cursor-pointer shadow-xl"
  >
    <div class="relative w-full">
      <img class="w-full" :src="blog?.image" />
    </div>
    <div class="w-full p-5 bg-gray-50 flex-1">
      <div class="font-title font-bold max-w-full truncate">
        {{ blog?.title }}
      </div>
      <div class="font-text mt-2">{{ blog?.description }}</div>
    </div>
  </div>
</template>
