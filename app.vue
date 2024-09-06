<template>
  <!-- Left side Carousel -->
  <div class="w3-sidebar w3-hide-medium w3-hide-small carousel-wrapper">
    <ImgCarousel />
  </div>

  <!-- Hidden Sidebar (reveals when clicked on menu icon)-->
  <Sidebar />

  <!-- Page Content -->
  <div class="w3-main w3-padding-large" style="margin-left: 40%">
    <!-- Menu icon to open sidebar -->
    <span
      class="w3-button w3-top w3-white w3-large w3-text-grey w3-hover-text-black nav-btn w3-hide-large w3-hide-medium"
      @click="toggleSidebar"
    >
      <i class="fa-solid fa-bars"></i>
    </span>
    <span
      class="w3-button w3-top w3-white w3-xxlarge w3-text-grey w3-hover-text-black nav-btn w3-hide-small"
      @click="toggleSidebar"
    >
      <i class="fa-solid fa-bars"></i>
    </span>

    <!-- Header -->
    <header class="w3-container w3-center header" id="home">
      <h1 class="responsive-title"><b>MurruDev</b></h1>
      <p>Desarrollador Full Stack</p>

      <!-- Profiles Section -->
      <div
        class="w3-content w3-justify w3-text-grey w3-padding-32 profiles-wrapper"
      >
        <!-- Go to linked in profile -->
        <ProfileButton
          v-for="pb in profileButtons"
          :key="pb.name.toLowerCase().replace(' ', '')"
          :url="pb.url"
          :color="pb.color"
          :icon="pb.icon"
          :name="pb.name"
        />
      </div>

      <!-- Alex's images -->
      <!-- TABLET -->
      <div
        class="w3-hide-large w3-hide-small"
        style="width: 90%; height: 900px; margin: 0 auto"
      >
        <ImgCarousel />
      </div>
      <!-- MOBILE -->
      <div
        class="w3-hide-large w3-hide-medium"
        style="width: 100%; height: 500px"
      >
        <ImgCarousel />
      </div>
    </header>

    <!-- About Section -->
    <div class="w3-content w3-justify w3-text-grey w3-padding-32" id="about">
      <h2>Sobre mí</h2>
      <hr class="w3-opacity" />
      <p>
        Ingeniero en Informática con más de una década de experiencia en
        desarrollo full stack. Me apasiona transformar ideas en realidad,
        creando soluciones digitales innovadoras y eficientes. Desde el diseño
        hasta la implementación, disfruto de todo el proceso de desarrollo.
        Cuando no estoy sumergido en código, me encontrarás en la pista de
        baile, compartiendo mi amor por la danza y la creatividad con otros.
      </p>
      <!-- End About Section -->
    </div>

    <!-- Reputation Section -->
    <div
      class="w3-content w3-justify w3-text-grey w3-padding-32"
      id="reputation"
    >
      <h2>Reputación</h2>
      <hr class="w3-opacity" />
      <div class="w3-padding-32">
        <Carousel :autoplay="8000" :wrap-around="true">
          <Slide v-for="slide in 5" :key="slide">
            <Testimony />
          </Slide>
          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="w3-content w3-justify w3-text-grey w3-padding-32" id="stats">
      <h2>Mis Números</h2>
      <hr class="w3-opacity" />
      <div class="w3-dark-grey w3-padding-16 stats-wrapper">
        <Stat
          v-for="stat in stats"
          :key="stat.name"
          :name="stat.name"
          :number="stat.number"
        />
      </div>
    </div>

    <!-- Portfolio Section -->
    <div class="w3-padding-32 w3-content" id="portfolio">
      <h2 class="w3-text-grey">Portafolio</h2>
      <hr class="w3-opacity" />

      <div class="projects-wrapper">
        <Project
          v-for="project in projects"
          :key="project.name.toLowerCase().replace(' ', '')"
          :name="project.name"
          :url="project.url"
          :img="project.img"
          :client="project.client"
          :description="project.description"
        />
      </div>
    </div>

    <!-- Demos Section -->
    <div class="w3-padding-32 w3-content" id="demos">
      <h2 class="w3-text-grey">Demos</h2>
      <hr class="w3-opacity" />
      <!-- End Demos Section -->
    </div>

    <!-- Tutorials Section -->
    <!-- <div class="w3-padding-32 w3-content" id="tutorials">
      <h2 class="w3-text-grey">Tutorials</h2>
      <hr class="w3-opacity" />
    </div> -->

    <!-- Footer -->
    <footer
      class="w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-xlarge footer"
    >
      <p class="w3-medium">
        Powered by
        <a
          href="https://www.w3schools.com/w3css/default.asp"
          target="_blank"
          class="w3-hover-text-green"
          >w3.css</a
        >
      </p>
      <!-- End footer -->
    </footer>

    <!-- END PAGE CONTENT -->
  </div>
</template>
<script setup lang="ts">
const { toggleSidebar } = useSidebar();

const profileButtons = [
  {
    url: "https://www.linkedin.com/in/murrugarra/",
    color: "#0a65c2",
    icon: "fa-brands fa-linkedin-in",
    name: "Linked in",
  },
  {
    url: "https://github.com/murru-dev",
    color: "black",
    icon: "fa-brands fa-github",
    name: "Git Hub",
  },
  {
    url: "https://www.fiverr.com/murrugarra",
    color: "#1dbf73",
    icon: "fa-brands fa-dev",
    name: "Fiverr",
  },
];

const stats = [
  { name: "Proyectos", number: 2 },
  { name: "Demos", number: 2 },
  { name: "Tutoriales", number: 2 },
];

const projects = [
  {
    name: "Vocabulary Tracker",
    url: "https://students.dcvocabulary.com",
    img: "/vocab-tracker-students.png",
    client: "DC Vocabulary",
    description:
      "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsumesent tincidunts ipsum lipsud",
  },
];
</script>
<style>
.carousel-wrapper {
  width: 40%;
}

.w3-row-padding img {
  margin-bottom: 12px;
}

.nav-btn {
  right: 0;
  width: auto;
}

.header {
  /* padding: 128px 16px; */
  padding: 30px 16px;
}

.responsive-title {
  font-size: 55px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}

.responsive-btn-text {
  display: none;
}

.profiles-wrapper {
  display: flex;
  justify-content: center;
}

.profiles-wrapper > * {
  flex: 1;
}

#reputation .carousel {
  text-align: unset;
}

#reputation .carousel__pagination {
  margin-top: 5em;
}

.stats-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.projects-wrapper {
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr;
}

.footer {
  margin: -24px;
}

@media (min-width: 768px) {
  .responsive-title {
    font-size: 64px;
  }

  .responsive-btn-text {
    display: block;
  }

  .projects-wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
