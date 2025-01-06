<script lang="ts" setup>
const { project } = defineProps<{
  project: IProjectItem;
}>();

const bg = computed(() => project.bg);
const name = computed(() => project.name);
const client = computed(() => project.client);
const description = computed(() => project.description);
const tags = computed(() => project.tags);
</script>
<template>
  <!-- <div
    class="grid card border border-gray-600"
    :style="`grid-template-rows: auto 1fr; background-image: url(${bg}); background-position: center;
  background-repeat: no-repeat;
  background-size: cover;`"
  > -->
  <div
    class="grid card border border-gray-600"
    style="grid-template-rows: auto 1fr"
  >
    <!-- Header -->
    <div class="py-4 flex items-center justify-between">
      <div class="text-left">
        <h3 class="text-xl">{{ name }}</h3>
        <span class="text-gray-400 capitalize">{{ client }}</span>
      </div>

      <ButtonCircle icon="i-material-symbols-arrow-outward-rounded" />
    </div>

    <!-- Content -->
    <div style="display: grid; grid-template-rows: 1fr auto">
      <!-- Body -->
      <p class="py-4 text-left">{{ description }}</p>

      <!-- Footer -->
      <div class="mt-4 flex flex-wrap gap-2">
        <UKbd v-for="tag in tags" :key="tag" class="uppercase">{{ tag }}</UKbd>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
