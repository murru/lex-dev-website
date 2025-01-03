<script lang="ts" setup>
import alexAvatar from "@/assets/img/Alex-Pic-no-bg.png";
interface ISocialAccount {
  name?: string;
  icon: string;
  colorClasses?: string[];
  url: string;
}
const socialAccounts: ISocialAccount[] = [
  {
    icon: "i-teenyicons-instagram-solid",
    url: "https://www.instagram.com/garramurru/",
  },
  {
    icon: "i-prime-twitter",
    url: "https://x.com/Murru90",
  },
  {
    icon: "i-brandico-linkedin",
    url: "https://www.linkedin.com/in/murrugarra/",
  },
  {
    icon: "i-bytesize-github",
    url: "https://github.com/murru-dev",
  },
];

// Home logic
const openCV = () => {
  window.open(
    "https://docs.google.com/document/d/1xIHZdrqBZmrJHR-V4vqHuRoI8cxmXSiSi04Rc-0zUZ4/edit?usp=sharing",
    "_blank",
    "noopener,noreferrer"
  );
};

// Works & Tutorials logic
const goToProjectsAndTutorials = () => {
  navigateTo("/projects-and-tutorials");
};
const projects: IProjectItem[] = [
  {
    name: "Web Application One",
    client: "One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales est sit amet tincidunt egestas. Suspendisse vitae ipsum in mi suscipit vestibulum quis eu sapien. Maecenas lacinia ut orci ut.",
    tags: ["project", "application", "web", "fullstack"],
  },
  {
    name: "Web Site One",
    client: "Two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales est sit amet tincidunt egestas. Suspendisse vitae ipsum in mi suscipit vestibulum quis eu sapien. Maecenas lacinia ut orci ut.",
    tags: ["tutorial", "web", "frontend"],
  },
  {
    name: "API One",
    client: "Thre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales est sit amet tincidunt egestas. Suspendisse vitae ipsum in mi suscipit vestibulum quis eu sapien. Maecenas lacinia ut orci ut.",
    tags: ["project", "backend"],
  },
  /* { name: "", client: "", description: "", tags: ["tutorial", "ios"] },
  { name: "", client: "", description: "", tags: ["tutorial", "ios"] },
  { name: "", client: "", description: "", tags: ["tutorial", "ios"] }, */
];
</script>
<template>
  <!-- Home -->
  <section class="home-wrapper">
    <Card class="id-card">
      <img :src="alexAvatar" alt="Alex M avatar" class="avatar" />
      <h2 class="title">Alex Murrugarra</h2>
      <p class="description">
        I'm a <b>Web Developer</b> based in Entre Ríos, Argentina.
      </p>
      <div class="social-accounts">
        <a
          v-for="sa in socialAccounts"
          :key="sa.icon"
          :href="sa.url"
          target="_blank"
        >
          <UButton :icon="sa.icon" size="xl" square variant="outline" />
        </a>
      </div>
    </Card>

    <div class="rigth-wrapper">
      <Card title="hello there!">
        <h2 class="card-title">
          I'm Alex M, a dedicated software creator with a deep appreciation for
          the art of coding.
        </h2>
        <ButtonCallToAction
          label="download my CV"
          icon="i-ph-read-cv-logo-fill"
          @click-call-to-action="openCV"
        />
      </Card>

      <!-- Stats -->
      <Card>
        <div class="stats">
          <div class="text-center">
            <h2 class="card-title mb-7">+10</h2>
            <p class="text-gray-400">Años de Experiencia</p>
          </div>
          <div class="text-center">
            <h2 class="card-title mb-7">3</h2>
            <p class="text-gray-400">Proyectos Entregados</p>
          </div>
          <div class="text-center">
            <h2 class="card-title mb-7">10</h2>
            <p class="text-gray-400">Tutoriales en Youtube</p>
          </div>
        </div>
      </Card>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="testimonials-wrapper">
    <Card title="testimonials" align-title="center">
      <div class="content">
        <h2 class="card-title">What clients say!</h2>
        <br />
        <div class="testimony">
          <h3 class="text">
            "Alex is somebody you need as a steward of your brand. He’s able to
            craft compelling brand narratives that bring a company’s vision
            tadasdo life.”
          </h3>
          <br />
          <br />
          <div class="foot">
            <div class="client">
              <UAvatar
                src="https://cdn.prod.website-files.com/63fbd08ddcf51344a63f9add/63fbd08ddcf5138c183f9b00_Testimonial%20Avatar.png"
                alt="Client Avatar"
                size="3xl"
              />
              <div class="meta">
                <p>Name</p>
                <p class="company">Position and company</p>
              </div>
            </div>
            <div class="controls">
              <UButton
                :ui="{ rounded: 'rounded-full' }"
                icon="i-material-symbols-arrow-back-ios-rounded"
                class="button"
              ></UButton>
              <UButton
                :ui="{ rounded: 'rounded-full' }"
                icon="i-material-symbols-arrow-forward-ios-rounded"
                class="button"
              ></UButton>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </section>

  <!-- Projects -->
  <section class="projects-wrapper">
    <Card class="card">
      <h2 class="card-title">Recent Works & Tutorials</h2>
      <div class="description">
        <p>
          Check out some of my design projects, meticulously crafted with love
          and dedication, each one reflecting the passion and soul I poured into
          every detail.
        </p>
      </div>
      <div class="grid-container">
        <ProjectCard
          v-for="(project, n) in projects"
          :key="`child-${n}`"
          :class="`child-${n}`"
          :project="project"
        />
      </div>
      <div class="call-to-action">
        <ButtonCallToAction
          label="check them all"
          icon="i-material-symbols-light-workspaces"
          @click-call-to-action="goToProjectsAndTutorials"
        />
      </div>
    </Card>
  </section>
</template>
<style lang="scss">
.home-wrapper {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2em;

  .id-card {
    @apply text-center w-[412px];

    .avatar {
      @apply w-[300px] mx-auto;
    }

    .title {
      @apply text-[40px] mb-2;
    }

    .description {
      @apply text-gray-400;
    }

    .social-accounts {
      @apply flex items-center justify-around mt-8;
    }

    @media (max-width: 1024px) {
      @apply w-full;
    }
  }

  .rigth-wrapper {
    @apply grid grid-rows-[auto,_1fr] gap-8;

    .stats {
      @apply grid grid-cols-3 gap-8;

      div:nth-child(3) {
        @media (max-width: 1024px) {
          @apply col-span-2;
        }
        @media (max-width: 530px) {
          @apply col-span-1;
        }
      }

      @media (max-width: 1024px) {
        @apply grid-cols-2;
      }

      @media (max-width: 530px) {
        @apply grid-cols-1;
      }
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.testimonials-wrapper {
  @apply mt-8;

  .content {
    @apply text-center;

    .testimony {
      @apply w-9/12 m-auto;

      @media (max-width: 530px) {
        @apply w-full;
      }

      .text {
        @apply text-3xl;

        @media (max-width: 530px) {
          @apply text-2xl;
        }
      }

      .foot {
        @apply w-full flex items-center justify-between;

        @media (max-width: 1024px) {
          @apply flex-col gap-10;
        }

        .client {
          @apply flex items-center gap-4;

          .meta {
            @apply text-left text-xl;

            .company {
              @apply text-gray-400;
            }
          }
        }

        .controls {
          .button {
            @apply w-16 h-16 mx-2 justify-center;

            @media (max-width: 1024px) {
              @apply w-12 h-12;
            }

            @media (max-width: 530px) {
              @apply w-10 h-10;
            }
          }
        }
      }
    }
  }
}

.projects-wrapper {
  @apply mt-8;

  .card {
    @apply text-center;

    .description {
      @apply px-28 text-[16px] text-gray-400 mb-4;

      @media (max-width: 1024px) {
        @apply px-0;
      }
    }

    .grid-container {
      @apply grid;
    }
    /* .grid-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(8, 1fr);
      grid-column-gap: 36px;
      grid-row-gap: 36px;

      .child-1 {
        grid-area: 1 / 1 / 3 / 2;
      }
      .child-2 {
        grid-area: 1 / 2 / 5 / 3;
      }
      .child-3 {
        grid-area: 3 / 1 / 5 / 2;
      }
      .child-4 {
        grid-area: 5 / 1 / 9 / 2;
      }
      .child-5 {
        grid-area: 5 / 2 / 7 / 3;
      }
      .child-6 {
        grid-area: 7 / 2 / 9 / 3;
      }
    } */

    .call-to-action {
      @apply mx-auto;
    }
  }
}
</style>
