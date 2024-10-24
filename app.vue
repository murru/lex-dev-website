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
    <Home
      :title="homeData?.title"
      :subtitle="homeData?.subtitle"
      :web-profiles="homeData?.webProfiles"
      :intro="homeData?.intro"
    />

    <!-- About Me -->
    <HomeAbout
      :title="homeData?.about.title"
      :content="homeData?.about.content"
    />

    <!-- Footer -->
    <Footer />

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
