<template>
  <footer
    class="w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-xlarge footer"
  >
    <p class="w3-medium">
      {{ developedWith }}
      <a
        href="https://www.w3schools.com/w3css/default.asp"
        target="_blank"
        class="w3-hover-text-green"
      >
        w3.css</a
      >,
      <a href="https://nuxt.com" target="_blank" class="w3-hover-text-green">
        Nuxt 3</a
      >,
      <a
        href="https://fontawesome.com/"
        target="_blank"
        class="w3-hover-text-green"
      >
        Fontawesome
      </a>
      y
      <a
        href="https://appwrite.io/"
        target="_blank"
        class="w3-hover-text-green"
      >
        Appwrite
      </a>
    </p>
    <p class="w3-medium">
      {{ picsAuthor }}
      <a href="https://www.instagram.com/luchogbenitez/" target="_blank">
        Lucho Benitez
      </a>
    </p>
    <!-- End footer -->
  </footer>
</template>
<script lang="ts" setup>
const { lang } = useLanguage();

const developedWith = computed<string>(() =>
  lang.value === "ES" ? "Desarrollado con" : "Developed with"
);

const picsAuthor = computed<string>(() =>
  lang.value === "ES" ? "Fotografías tomadas por" : "Photographer"
);
</script>
<style>
.footer {
  margin: 0px -24px -24px -24px;
}
</style>
