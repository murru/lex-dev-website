<template>
  <div class="wrapper">
    <p class="icon"><i class="fa-solid fa-code"></i></p>
    <p class="title"><strong>Murru Dev Website</strong></p>
    <p class="subtitle">We will be on production soon!</p>
  </div>
</template>
<style>

/* Mobile, laptops and large screens rules */
* { margin: 0 !important; }
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}
.icon { font-size: 10em; }

/* Tablet rules */
@media (min-width: 768px) {
  .icon { font-size: 15em; }
  .title { font-size: 2.5em; }
  .subtitle { font-size: 1.5em; }
}
</style>