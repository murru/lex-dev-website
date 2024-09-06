<template>
  <div>
    <a :href="url" target="_blank" class="project-url">
      <NuxtImg :src="img" alt="Sandwich" style="width: 100%" format="avif" />
      <span class="w3-center">
        <h3>{{ name }}</h3>
        <h4>{{ client }}</h4>
        <p>{{ description }}</p>
      </span>
    </a>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  name: string;
  url: string;
  img: string;
  client: string;
  description: string;
}>();
</script>
<style>
.project-url {
  text-decoration: none;
}
</style>
