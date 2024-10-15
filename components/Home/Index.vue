<template>
  <div class="screen-height w3-container w3-center header" id="home">
    <header>
      <h1 class="responsive-title">
        <b>{{ title }}</b>
      </h1>
      <h2>{{ sub }}</h2>
    </header>

    <div class="home-wrapper">
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

      <div class="mobile-carousel">
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
  padding-top: 32px;
  padding-bottom: 32px;
}

.profile-buttons-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
}

.mobile-carousel {
  display: none;
}

@media (max-width: 768px) {
  .home-wrapper {
    padding-top: 24px;
    padding-bottom: 24px;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2em;
  }

  .profile-buttons-wrapper {
    grid-template-columns: 1fr;
    align-items: center;
  }

  .mobile-carousel {
    display: block;
    height: 800px;
    margin-top: 1em;
  }
}

@media (max-width: 430px) {
  .home-wrapper {
    padding-top: 16px;
    padding-bottom: 16px;
    grid-template-columns: 1fr;
    gap: 2em;
  }

  .profile-buttons-wrapper {
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
  }

  .mobile-carousel {
    height: 400px;
  }

  /* .mobile-carousel {
    display: block;
    height: 800px;
    margin-top: 1em;
  } */
}
</style>
