<script lang="ts" setup>
import alexAvatar from "@/assets/img/Alex-Pic-no-bg.png";
interface ISocialAccount {
  name?: string;
  icon: string;
  colorClasses?: string[];
  url: string;
}
const socialAccounts: ISocialAccount[] = [
  {
    icon: "i-teenyicons-instagram-solid",
    url: "https://www.instagram.com/garramurru/",
  },
  {
    icon: "i-prime-twitter",
    url: "https://x.com/Murru90",
  },
  {
    icon: "i-brandico-linkedin",
    url: "https://www.linkedin.com/in/murrugarra/",
  },
  {
    icon: "i-bytesize-github",
    url: "https://github.com/murru-dev",
  },
];
</script>
<template>
  <div class="home-wrapper">
    <Card class="id-card">
      <img :src="alexAvatar" alt="Alex M avatar" class="avatar" />
      <h2 class="title">Alex Murrugarra</h2>
      <p class="description">
        I'm a <b>Web Developer</b> based in Entre Ríos, Argentina.
      </p>
      <div class="social-accounts">
        <a
          v-for="sa in socialAccounts"
          :key="sa.icon"
          :href="sa.url"
          target="_blank"
        >
          <UButton :icon="sa.icon" size="xl" square variant="outline" />
        </a>
      </div>
    </Card>

    <div class="rigth-wrapper">
      <Card>
        <p class="text-gray-400">Hello there!</p>
        <h2 class="text-[40px] mb-5">
          I'm Alex M, a dedicated software creator with a deep appreciation for
          the art of coding.
        </h2>
        <UButton
          label="Download my CV"
          :ui="{ rounded: 'rounded-2xl' }"
          class="mt-8 py-3 px-6"
        >
          <template #trailing>
            <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
          </template>
        </UButton>
      </Card>

      <!-- Stats -->
      <Card>
        <div class="stats">
          <div class="text-center">
            <h2 class="text-[40px] mb-7">+10</h2>
            <p class="text-gray-400">Años de Experiencia</p>
          </div>
          <div class="text-center">
            <h2 class="text-[40px] mb-7">3</h2>
            <p class="text-gray-400">Proyectos Entregados</p>
          </div>
          <div class="text-center">
            <h2 class="text-[40px] mb-7">10</h2>
            <p class="text-gray-400">Tutoriales en Youtube</p>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>
<style lang="scss">
.home-wrapper {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2em;

  .id-card {
    @apply text-center w-[412px];

    .avatar {
      @apply w-[300px] mx-auto;
    }

    .title {
      @apply text-[40px] mb-2;
    }

    .description {
      @apply text-gray-400;
    }

    .social-accounts {
      @apply flex items-center justify-around mt-8;
    }

    @media (max-width: 1024px) {
      @apply w-full;
    }
  }

  .rigth-wrapper {
    @apply flex flex-col gap-8;

    .stats {
      @apply grid grid-cols-3 gap-8;

      div:nth-child(3) {
        @media (max-width: 1024px) {
          @apply col-span-2;
        }
        @media (max-width: 530px) {
          @apply col-span-1;
        }
      }

      @media (max-width: 1024px) {
        @apply grid-cols-2;
      }

      @media (max-width: 530px) {
        @apply grid-cols-1;
      }
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}
</style>
