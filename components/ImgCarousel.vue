<template>
  <Carousel :autoplay="5000" :wrap-around="true">
    <Slide v-for="slide in 5" :key="slide">
      <div :class="`carousel__item bg-img-base bgimg-${slide}`"></div>
    </Slide>
  </Carousel>
</template>
<script setup lang="ts"></script>
<style>
.carousel,
.carousel__viewport,
.carousel__track,
.carousel__slide {
  height: 100%;
}

.bg-img-base {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100%;
  width: 100%;
}

.bgimg-1 {
  background-image: url("~/assets/img/slide-1.jpg");
}

.bgimg-2 {
  background-image: url("~/assets/img/slide-2.jpg");
}

.bgimg-3 {
  background-image: url("~/assets/img/slide-3.jpg");
}

.bgimg-4 {
  background-image: url("~/assets/img/slide-4.jpg");
}

.bgimg-5 {
  background-image: url("~/assets/img/slide-5.jpg");
}
</style>
