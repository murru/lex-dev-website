<template>
  <div
    class="w3-btn w3-round-large w3-text-white profile-button"
    :style="`background-color: ${color}`"
  >
    <i :class="[icon, 'icon']"></i>
  </div>
  <!-- <a
    :href="url"
    target="_blank"
    class="w3-btn w3-round-large w3-text-white icon-btn"
    :style="`background-color: ${color}`"
  >
    <i :class="[icon, 'icon']"></i>
  </a> -->
</template>
<script lang="ts" setup>
defineProps<{
  url: string;
  color: string;
  icon: string;
  name: string;
}>();
</script>
<style>
.profile-button {
  height: 100px;
  justify-self: center;
  padding: 10px 25px;
  width: 150px;
}
/* .icon-btn {
  padding: 20px 25px;
}
.icon {
  font-size: 5rem;
}

@media (max-width: 7680px) {
  .icon-btn {
    padding: 10px 15px;
  }
  .icon {
    font-size: 2.5rem;
  }
}

@media (max-width: 430px) {
  .icon-btn {
    padding: 5px;
  }
  .icon {
    font-size: 1.5rem;
  }
} */
</style>
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
