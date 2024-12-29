<script lang="ts" setup>
const colorMode = useColorMode();

const themeIcon = computed(() =>
  colorMode.value === "light"
    ? "i-line-md-moon-filled-alt-loop"
    : "i-line-md-moon-filled-alt-to-sunny-filled-loop-transition"
);
const themeTooltip = computed(() =>
  colorMode.value === "light" ? "Change to dark theme" : "Change to light theme"
);

const toggleTheme = () => {
  localStorage.setItem("theme", colorMode.value === "light" ? "dark" : "light");
  colorMode.value = localStorage.getItem("theme")!;
};

if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "light");
}
</script>
<template>
  <UTooltip :text="themeTooltip">
    <UButton
      :icon="themeIcon"
      size="sm"
      color="primary"
      square
      variant="ghost"
      @click="toggleTheme"
    />
  </UTooltip>
</template>
