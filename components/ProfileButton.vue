<template>
  <a
    :href="url"
    target="_blank"
    class="w3-button w3-padding-large w3-margin-top w3-text-white btn"
    :style="`background-color: ${color}`"
  >
    <i :class="icon"></i>
    <span class="responsive-btn-text">{{ name }}</span>
  </a>
</template>
<script lang="ts" setup>
defineProps<{
  url: string;
  color: string;
  icon: string;
  name: string;
}>();
</script>

<!-- Go to git hub profile
<a
href="https://github.com/murru-dev"
target="_blank"
class="w3-button w3-padding-large w3-margin-top w3-text-white btn"
style="background-color: black"
>
<i class="fa-brands fa-github"></i>
<span class="responsive-btn-text">Git Hub</span>
</a>

Go to fiverr profile
<a
href="https://www.fiverr.com/murrugarra"
target="_blank"
class="w3-button w3-padding-large w3-margin-top w3-text-white btn"
style="background-color: #1dbf73"
>
<i class="fa-brands fa-dev"></i>
<span class="responsive-btn-text">Fiverr</span>
</a> -->
