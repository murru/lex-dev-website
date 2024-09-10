<template>
  <div class="w3-container testimony-wrapper">
    <div class="w3-center">
      <NuxtImg
        :src="avatar"
        alt="Avatar"
        format="avif"
        class="w3-circle author-img"
      />
    </div>
    <article>
      <span class="w3-hide-medium w3-hide-large">
        <p class="my-0">
          <strong>{{ name }}</strong>
        </p>
        <p class="my-0">
          <a :href="url" target="_blank"> {{ role }} at {{ company }} </a>
        </p>
      </span>
      <span class="w3-hide-small">
        <p class="my-0">
          {{ name }} -
          <a :href="url" target="_blank"> {{ role }} at {{ company }} </a>
        </p>
      </span>
      <br />
      <p class="my-0">
        {{ text }}
      </p>
    </article>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  avatar: string;
  url: string;
  name: string;
  company: string;
  role: string;
  text: string;
}>();
</script>
<style>
.no-shadow {
  box-shadow: none;
}

.my-0 {
  margin-top: 0px;
  margin-bottom: 0px;
}

.testimony-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.author-img {
  width: 50%;
}

@media (min-width: 768px) {
  .testimony-wrapper {
    flex-direction: row;
  }
}
</style>
