<template>
  <div class="w3-panel">
    <h4>{{ name }}</h4>
    <p>{{ description }}</p>
    <a :href="url" target="_blank" class="w3-button w3-grey w3-hide-small">
      ¡Probarlo ya!
    </a>
    <a
      :href="url"
      target="_blank"
      class="w3-button w3-grey w3-block w3-hide-medium w3-hide-large"
    >
      ¡Probarlo ya!
    </a>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  name: string;
  description: string;
  url: string;
}>();
</script>
