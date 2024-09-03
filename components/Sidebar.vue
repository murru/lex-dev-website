<template>
  <Transition>
    <nav
      v-if="sidebarState"
      class="w3-sidebar w3-black w3-xxlarge nav"
      @click="toggleSidebar()"
    >
      <a
        class="w3-button w3-black w3-xxxlarge w3-display-topright close-btn"
        @click=""
      >
        <i class="fa-solid fa-xmark"></i>
      </a>
      <div class="w3-bar-block w3-center">
        <a
          href="#home"
          class="w3-bar-item w3-button w3-text-grey w3-hover-black"
          >Home</a
        >
        <a
          href="#reputation"
          class="w3-bar-item w3-button w3-text-grey w3-hover-black"
          >Reputation</a
        >
        <a
          href="#about"
          class="w3-bar-item w3-button w3-text-grey w3-hover-black"
          >About</a
        >
        <a
          href="#stats"
          class="w3-bar-item w3-button w3-text-grey w3-hover-black"
          >Stats</a
        >
        <a
          href="#portfolio"
          class="w3-bar-item w3-button w3-text-grey w3-hover-black"
          >Portfolio</a
        >
        <a
          href="#demos"
          class="w3-bar-item w3-button w3-text-grey w3-hover-black"
          >Demos</a
        >
        <a
          href="#tutorials"
          class="w3-bar-item w3-button w3-text-grey w3-hover-black"
          >Tutorials</a
        >
      </div>
    </nav>
  </Transition>
</template>
<script setup lang="ts">
const { sidebarState, toggleSidebar } = useSidebar();
</script>
<style scoped>
.nav {
  display: block;
  width: 60%;
  padding-top: 150px;
  right: 0;
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
</style>
