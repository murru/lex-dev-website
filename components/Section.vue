<template>
  <div class="w3-content w3-justify w3-text-grey w3-padding-32" id="about">
    <h2>{{ title }}</h2>
    <hr class="w3-opacity" />
    <slot name="content" />
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  title?: string;
}>();
</script>
