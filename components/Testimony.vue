<template>
  <div class="w3-container testimony-wrapper">
    <div class="w3-center">
      <img
        src="~/assets/img/avatar_smoke.jpg"
        alt="Avatar"
        class="w3-circle author-img"
      />
    </div>
    <article>
      <span class="w3-hide-medium w3-hide-large">
        <p class="my-0"><strong>John Doe</strong></p>
        <p class="my-0">
          <a href="https://linkedin.com" target="_blank"
            >President/CEO at Mighty Schools</a
          >
        </p>
      </span>
      <span class="w3-hide-small">
        <p class="my-0">
          John Doe -
          <a href="https://linkedin.com" target="_blank"
            >President/CEO at Mighty Schools</a
          >
        </p>
      </span>
      <br />
      <p class="my-0">
        Jane Doe is just awesome. I am so happy to have met her! Jane Doe is
        just awesome awesome.
      </p>
    </article>
  </div>
</template>
<style>
.no-shadow {
  box-shadow: none;
}

.my-0 {
  margin-top: 0px;
  margin-bottom: 0px;
}

.testimony-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.author-img {
  width: 50%;
}

@media (min-width: 768px) {
  .testimony-wrapper {
    flex-direction: row;
  }
}
</style>
