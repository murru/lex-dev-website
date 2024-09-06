<template>
  <div class="w3-section w3-center">
    <span class="w3-xlarge">{{ number }}</span
    ><br />
    {{ name }}
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  name: string;
  number: number;
}>();
</script>
