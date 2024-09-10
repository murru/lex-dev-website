<template>
  <div>
    <a :href="url" target="_blank" class="project-url">
      <NuxtImg :src="img" alt="Sandwich" style="width: 100%" format="avif" />
      <span class="w3-center">
        <h3>{{ client }}</h3>
        <h4>{{ name }}</h4>
        <p>{{ description }}</p>
      </span>
    </a>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  client: string;
  url: string;
  img: string;
  name: string;
  description: string;
}>();
</script>
<style>
.project-url {
  text-decoration: none;
}
</style>
