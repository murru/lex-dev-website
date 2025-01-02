<script lang="ts" setup>
const { pages } = usePage();
const { language } = useLanguage();
</script>
<template>
  <!-- Header -->
  <header class="main-header">
    <UContainer>
      <div class="wrapper">
        <div class="logo">MurruDev</div>
        <div class="nav">
          <nav>
            <NuxtLink
              v-for="page in pages"
              :key="page.name.en.toLowerCase().replaceAll(' ', '-')"
              :to="page.url"
              class="link mx-2"
            >
              <span class="uppercase text-sm">
                {{ language === "en" ? page.name.en : page.name.es }}
              </span>
            </NuxtLink>
          </nav>
        </div>
        <div class="actions">
          <UButton
            icon="i-ic-outline-handshake"
            size="sm"
            color="primary"
            variant="ghost"
            label="Hire Me"
            trailing
          />
          <UDivider
            icon="i-fluent-divider-tall-16-filled"
            size="xs"
            class="divider"
          />
          <ButtonThemeToggler />
          <UDivider
            icon="i-fluent-divider-tall-16-filled"
            size="xs"
            class="divider"
          />
          <ButtonLangToggler />
        </div>
        <ButtonMobileToggler />
      </div>
    </UContainer>
  </header>

  <!-- Page slot -->
  <UContainer>
    <slot />
  </UContainer>

  <!-- Footer -->
  <footer>
    <UContainer class="footer">
      <p>Copyright @2024, MurruDev All Rights Reserved.</p>
      <div class="flex items-center gap-2">
        <p>In production thanks to</p>
        <UIcon name="i-logos-digital-ocean-icon" />
        <UIcon name="i-logos-nuxt-icon" />
        <UIcon name="i-vscode-icons-file-type-typescript" class="text-3xl" />
        <UIcon name="i-logos-appwrite-icon" />
      </div>
    </UContainer>
  </footer>
</template>
<style lang="scss">
.fade-out {
  @apply opacity-0 transition duration-500 ease-in-out;
}

.link {
  @apply text-lg cursor-pointer;
}

.active-page {
  @apply text-primary;
}

.inactive-page {
  @apply text-gray-500;
}

.card-title {
  @apply text-[40px] mb-5;

  @media (max-width: 530px) {
    @apply text-3xl;
  }
}

.loading-wrapper {
  @apply w-screen h-screen flex flex-col justify-center items-center gap-5 text-3xl;

  .animation {
    @apply text-8xl;
  }
}
.main-header {
  .wrapper {
    @apply py-8 flex items-center justify-between;

    .nav {
      @media (max-width: 1024px) {
        @apply hidden;
      }
    }

    .logo {
      @apply text-3xl font-semibold;
    }

    .actions {
      @apply flex items-center;

      .divider > div.font-medium {
        @apply mx-0 !important;
      }

      @media (max-width: 1024px) {
        @apply hidden;
      }
    }
  }
}

.footer {
  @apply pt-14 pb-10 flex items-center justify-between;
  @media (max-width: 1024px) {
    @apply flex-col text-center gap-4;
  }
}
</style>
