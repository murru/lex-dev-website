<template>
  <Section :title="titleVal" id="about">
    <template #content>
      <p>{{ contentVal }}</p>
    </template>
  </Section>
</template>
<script lang="ts" setup>
import type { IAbout } from "~/types";

const { lang } = useLanguage();
const { title, content } = defineProps<IAbout>();

const titleVal = computed<string | undefined>(() =>
  lang.value === "ES" ? title?.es : title?.en
);
const contentVal = computed<string | undefined>(() =>
  lang.value === "ES" ? content?.es : content?.en
);
</script>
