<template>
  <Transition>
    <nav
      v-if="sidebarState"
      class="w3-sidebar w3-black nav"
      @click="toggleSidebar"
    >
      <a class="w3-button w3-black w3-xxxlarge w3-display-topright close-btn">
        <i class="fa-solid fa-xmark"></i>
      </a>
      <div class="w3-bar-block w3-center">
        <a
          class="w3-bar-item w3-button w3-text-grey w3-hover-black"
          @click="toggleLanguage"
        >
          {{ lang }}
        </a>
        <a
          v-for="op in navOptions"
          :key="op.slug"
          :href="op.slug"
          class="w3-bar-item w3-button w3-text-grey w3-hover-black"
        >
          {{ lang === "es" ? op.es : op.en }}
        </a>
      </div>
    </nav>
  </Transition>
</template>
<script setup lang="ts">
import type { INavOption } from "~/types";

const { getNav, sidebarState, toggleSidebar } = useSidebar();
const { lang, toggleLanguage } = useLanguage();
const navOptions = ref<INavOption[]>([]);

navOptions.value = await getNav();
</script>
<style scoped>
.nav {
  display: block;
  font-size: 3rem;
  padding-top: 150px;
  right: 0;
  width: 60%;
  z-index: 2;
}

.close-btn {
  padding: 0 12px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media (max-width: 820px) {
  .nav {
    font-size: 2.5rem;
  }
}

@media (max-width: 430px) {
  .nav {
    font-size: 1.5rem;
  }
}
</style>
