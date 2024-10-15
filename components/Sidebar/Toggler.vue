<template>
  <span
    class="w3-button w3-top w3-white w3-xxlarge w3-text-grey w3-hover-text-black nav-btn"
    @click="toggleSidebar"
  >
    <i class="fa-solid fa-bars"></i>
  </span>
</template>
<script lang="ts" setup>
const { toggleSidebar } = useSidebar();
</script>
