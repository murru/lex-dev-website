<template>
  <header class="w3-container w3-center header" id="home">
    <h1 class="responsive-title">
      <b>{{ title }}</b>
    </h1>
    <p>{{ sub }}</p>

    <!-- Profiles Section -->
    <div
      class="w3-content w3-justify w3-text-grey w3-padding-32 profiles-wrapper"
    >
      <!-- Go to linked in profile -->
      <HomeProfileButton
        v-for="pb in webProfiles"
        :key="pb.name.toLowerCase().replace(' ', '')"
        :url="pb.url"
        :color="pb.color"
        :icon="pb.icon"
        :name="pb.name"
      />
    </div>

    <!-- Alex's images -->
    <!-- TABLET -->
    <div
      class="w3-hide-large w3-hide-small"
      style="width: 90%; height: 900px; margin: 0 auto"
    >
      <ImgCarousel />
    </div>
    <!-- MOBILE -->
    <div
      class="w3-hide-large w3-hide-medium"
      style="width: 100%; height: 500px"
    >
      <ImgCarousel />
    </div>
  </header>
</template>
<script lang="ts" setup>
import type { IHome } from "~/types";

const { title, subtitle, webProfiles } = defineProps<IHome>();

const { lang } = useLanguage();

const sub = computed(() => (lang.value === "es" ? subtitle?.es : subtitle?.en));
</script>
