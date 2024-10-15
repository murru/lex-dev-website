<template>
  <div class="screen-height w3-container w3-center header" id="home">
    <header>
      <h1 class="responsive-title">
        <b>{{ title }}</b>
      </h1>
      <h2>{{ sub }}</h2>
    </header>

    <div class="w3-padding-32 home-wrapper">
      <div class="profile-buttons-wrapper">
        <HomeProfileButton
          v-for="pb in webProfiles"
          :key="pb.name.toLowerCase().replace(' ', '')"
          :url="pb.url"
          :color="pb.color"
          :icon="pb.icon"
          :name="pb.name"
        />
      </div>
      <div class="w3-hide-large">
        <ImgCarousel />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { IHome } from "~/types";

const { title, subtitle, webProfiles } = defineProps<IHome>();

const { lang } = useLanguage();

const sub = computed(() => (lang.value === "es" ? subtitle?.es : subtitle?.en));
</script>
<style>
.header {
  /* padding: 128px 16px; */
  padding: 30px 16px;
}

.responsive-title {
  font-size: 55px;
}

.home-wrapper {
  /* display: grid;
  justify-content: center;
  grid-template-columns: auto 1fr; */
}

.profile-buttons-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
}
</style>
