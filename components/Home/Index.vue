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
          v-for="(pb, i) in webProfiles"
          :key="pb.name.toLowerCase().replace(' ', '')"
          :url="pb.url"
          :color="pb.color"
          :icon="pb.icon"
          :name="pb.name"
          :class="`pb-${i}`"
        />
      </div>
      <div class="mobile-carousel">mobile carousel</div>
      <!-- <div class="profile-buttons-wrapper">
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
      </div> -->
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
  display: grid;
  grid-template-columns: 1fr;
  padding-top: 32px;
  padding-bottom: 32px;
}

.profile-buttons-wrapper {
  align-items: flex-start;
  display: grid;
  column-gap: 1.75rem;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  margin-top: 9rem;
  row-gap: 1.75rem;
}

.pb-0,
.pb-3 {
  margin-top: -84px;
}

.pb-2,
.pb-5 {
  margin-top: 58px;
}

.mobile-carousel {
  background-color: aqua;
  display: none;
}

@media (max-width: 992px) {
  .home-wrapper {
    gap: 1em;
    grid-template-columns: auto 1fr;
  }

  .profile-buttons-wrapper {
    margin-top: 0;
    grid-template-columns: 1fr;
  }

  .pb-0,
  .pb-3 {
    margin-top: 0;
  }

  .pb-2,
  .pb-5 {
    margin-top: 0;
  }

  .mobile-carousel {
    display: block;
  }
}

@media (max-width: 640px) {
  .home-wrapper {
    grid-template-columns: 1fr;
  }

  .profile-buttons-wrapper {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
