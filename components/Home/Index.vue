<template>
  <div class="screen-height w3-container w3-center header" id="home">
    <header>
      <h1 class="responsive-title">
        <b>{{ title }}</b>
      </h1>
      <h2 class="responsive-subtitle">{{ sub }}</h2>
    </header>

    <div class="home-wrapper">
      <!-- Profiles buttons -->
      <div class="profile-buttons-wrapper fixed-width">
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

      <!-- Mobile carousel -->
      <div class="mobile-carousel">
        <ImgCarousel />
      </div>
    </div>

    <!-- Intro text -->
    <div class="intro fixed-width">
      {{ inText }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { IHome } from "~/types";

const { title, subtitle, webProfiles, intro } = defineProps<IHome>();

const { lang } = useLanguage();

const sub = computed<string | undefined>(() =>
  lang.value === "ES" ? subtitle?.es : subtitle?.en
);

const inText = computed<string | undefined>(() =>
  lang.value === "ES" ? intro?.es : intro?.en
);
</script>
<style>
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
  margin: 0 auto;
  justify-items: center;
  padding-top: 9rem;
  row-gap: 1.75rem;
}

.fixed-width {
  width: 60%;
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
  height: 650px;
  display: none;
}

.intro {
  font-size: 1.3rem;
  margin: 0 auto;
  line-height: 1.8em;
  padding-top: 8em;
}

@media (max-width: 992px) {
  .home-wrapper {
    gap: 1em;
    grid-template-columns: auto 1fr;
  }

  .profile-buttons-wrapper {
    align-items: center;
    padding-top: 0;
    grid-template-columns: 1fr;
  }

  .fixed-width {
    width: unset;
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
    height: 700px;
  }

  .intro {
    font-size: 1.1rem;
    padding-top: unset;
  }
}

@media (max-width: 640px) {
  .home-wrapper {
    grid-template-columns: 1fr;
  }

  .profile-buttons-wrapper {
    grid-template-columns: repeat(4, 1fr);
  }

  .mobile-carousel {
    height: 650px;
  }
}

@media (max-width: 430px) {
  .responsive-title {
    font-size: 30px;
  }

  .responsive-subtitle {
    font-size: 20px;
  }

  .mobile-carousel {
    height: 560px;
  }

  .intro {
    font-size: 1rem;
  }
}

@media (max-width: 390px) {
  .mobile-carousel {
    height: 480px;
  }

  .intro {
    font-size: 0.9rem;
  }
}

@media (max-width: 375px) {
  .mobile-carousel {
    height: 350px;
  }

  .intro {
    font-size: 0.8rem;
  }
}
</style>
