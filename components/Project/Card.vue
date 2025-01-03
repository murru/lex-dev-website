<script lang="ts" setup>
const { project } = defineProps<{
  project: IProjectItem;
}>();

const name = computed(() => project.name);
const client = computed(() => project.client);
const description = computed(() => project.description);
const tags = computed(() => project.tags);
</script>
<template>
  <UCard>
    <div class="project-card-wrapper">
      <div class="header text-left">
        <h2>{{ name }}</h2>
        <h3>{{ client }}</h3>
      </div>
      <div class="body py-5 text-justify">
        <p>{{ description }}</p>
      </div>
      <div class="footer">
        <UKbd v-for="tag in tags" :key="tag" class="uppercase">{{ tag }}</UKbd>
      </div>
    </div>
  </UCard>
</template>
<style lang="scss" scoped></style>
