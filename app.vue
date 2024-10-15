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
    <SidebarToggler />

    <!-- Header -->
    <!-- <HomeHeader
      :title="homeData?.title"
      :subtitle="homeData?.subtitle"
      :web-profiles="homeData?.webProfiles"
    /> -->
    <Home
      :title="homeData?.title"
      :subtitle="homeData?.subtitle"
      :web-profiles="homeData?.webProfiles"
    />

    <!-- About Section -->
    <HomeAbout
      :title="homeData?.about?.title"
      :content="homeData?.about?.content"
    />

    <!-- Reputation Section -->
    <Section title="Reputación" id="reputation">
      <template #content>
        <div class="w3-padding-32">
          <Carousel :autoplay="8000" :wrap-around="true">
            <Slide v-for="slide in testimonies.length" :key="slide">
              <Testimony
                :avatar="testimonies[slide - 1].avatar"
                :url="testimonies[slide - 1].url"
                :name="testimonies[slide - 1].name"
                :company="testimonies[slide - 1].company"
                :role="testimonies[slide - 1].role"
                :text="testimonies[slide - 1].text"
              />
            </Slide>
            <template #addons>
              <Pagination />
            </template>
          </Carousel>
        </div>
      </template>
    </Section>

    <!-- Stats Section -->
    <Section title="Mis Números" id="stats">
      <template #content>
        <div class="w3-dark-grey w3-padding-16 stats-wrapper">
          <Stat
            v-for="stat in stats"
            :key="stat.name"
            :name="stat.name"
            :number="stat.number"
          />
        </div>
      </template>
    </Section>

    <!-- Portfolio Section -->
    <Section title="Portafolio" id="portfolio">
      <template #content>
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
      </template>
    </Section>

    <!-- Demos Section -->
    <Section title="Demos" id="demos">
      <template #content>
        <Demo
          v-for="demo in demos"
          :key="demo.name.toLowerCase().replace(' ', '')"
          :name="demo.name"
          :description="demo.description"
          :url="demo.url"
        />
      </template>
    </Section>

    <!-- Tutorials Section -->
    <Section title="Tutoriales" id="tutorials" v-if="tutorials.length > 0">
      <template #content> TUTORIALES! </template>
    </Section>

    <!-- Footer -->
    <footer
      class="w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-xlarge footer"
    >
      <p class="w3-medium">
        Desarrollado con
        <a
          href="https://www.w3schools.com/w3css/default.asp"
          target="_blank"
          class="w3-hover-text-green"
        >
          w3.css
        </a>
      </p>
      <p class="w3-medium">
        Fotografías tomadas por
        <a href="https://www.instagram.com/luchogbenitez/" target="_blank">
          Lucho Benitez
        </a>
      </p>
      <p class="w3-medium">Sígueme en mis redes sociales:</p>
      <div class="rrss-wrapper">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>
      <!-- End footer -->
    </footer>

    <!-- END PAGE CONTENT -->
  </div>
</template>
<script setup lang="ts">
import type { IHome } from "./types";

const { getHomeData } = useHomePage();
const homeData = ref<IHome | null>(null);

const testimonies = [
  {
    avatar: "/daniel-cordoba-avatar.jpg",
    url: "https://dcvocabulary.com",
    name: "Daniel Córdoba",
    company: "DC Vocabulary",
    role: "President & CEO",
    text: "Alex es verdaderamente un experto. Diseñó mi Vocab Tracker y ahora es lo más destacado de mi curso.",
  },
  {
    avatar: "/waleska-caballero-avatar.jpg",
    url: "https://www.instagram.com/huehouseagency/",
    name: "Waleska caballero",
    company: "Hue House Agency",
    role: "Founder & CEO",
    text: "Increíble trabajar con Alex! Sabe muchísimo y créanme, puede poner a andar el proyecto que quieran.",
  },
];

const projects = [
  {
    client: "DC Vocabulary",
    url: "https://students.dcvocabulary.com",
    img: "/vocab-tracker-students.png",
    name: "Vocabulary Tracker App",
    description:
      "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsumesent tincidunts ipsum lipsud",
  },
  {
    client: "Casas Padel Club",
    url: "https://casaspadelclub.com",
    img: "/casas-padel-club.png",
    name: "Website",
    description:
      "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsumesent tincidunts ipsum lipsud",
  },
  {
    client: "Fast Track Talent",
    url: "https://fttalent.work",
    img: "/fast-track-talent.png",
    name: "Website",
    description:
      "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsumesent tincidunts ipsum lipsud",
  },
];

const demos = [
  {
    name: "Aplicatión de tareas",
    description:
      "Esta apliación sencilla me consiguió trabajo con un desarrollador de españa, quien necesitaba tercerizar varios de sus entregables con sus clientes.",
    url: "https://todos-app.cp.murrudev.com",
  },
  {
    name: "Componente de autocompletado",
    description:
      "Este componente me lo pidió una empresa para verificar mis conocimientos en React y TypeScript.",
    url: "https://react-autocomplete.cp.murrudev.com",
  },
  {
    name: "Prueba de whatsapp web",
    description:
      "Simple formulario con el que puedes iniciar una conversación de whatsapp con cualquier número. Un cliente me lo pidió porque lo necesitaba en su proyecto actual pero con un botón. Luego de mandarle esto me contrataron.",
    url: "https://wa-me-test.cp.murrudev.com",
  },
  {
    name: "Juego Wordle",
    description:
      'Es una versión muy simple del juego del New York Times, Wordle. Me pidieron una copia del mismo para comenzar un proyecto hace unos años. Pueden conseguir el original buscando "Wordle New York Times" en google.',
    url: "https://murru-dev.github.io/wordle-game/",
  },
];
const tutorials: Array<any> = [];

const stats = [
  { name: "Proyectos", number: projects.length },
  { name: "Demos", number: demos.length },
  { name: "Tutoriales", number: tutorials.length },
];

homeData.value = await getHomeData();
</script>
<style>
/* General styles */
.screen-height {
  height: 100vh;
}
/* General styles */
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

.rrss-wrapper {
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: center;
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
