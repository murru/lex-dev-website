<template>
  <a :href="url" target="_blank">
    <div
      class="w3-btn w3-text-white profile-button"
      :style="`background-color: ${color}`"
    >
      <i :class="[icon, 'icon']"></i>
    </div>
  </a>
</template>
<script lang="ts" setup>
defineProps<{
  url: string;
  color: string;
  icon: string;
  name: string;
}>();
</script>
<style>
.profile-button {
  align-items: center;
  border-radius: 1.5em;
  display: flex;
  height: 100px;
  justify-self: center;
  justify-content: center;
  padding: 10px 25px;
  width: 100px;
}

.icon {
  font-size: 4rem;
}

@media (max-width: 640px) {
  .profile-button {
    border-radius: 1em;
    height: 50px;
    padding: 5px 12.5px;
    width: 50px;
  }

  .icon {
    font-size: 2rem;
  }
}

@media (max-width: 460px) {
  .profile-button {
    height: 30px;
    padding: 2px 6px;
    width: 30px;
  }

  .icon {
    font-size: 1rem;
  }
}
</style>
