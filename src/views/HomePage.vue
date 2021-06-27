<template>
  <div>
    <v-container style="width: 1024px">
      <div
        class="home-title h-screen flex items-center relative"
        v-html="$t(`Home.title`)"
        style="font-size: 48px;font-weight: 500"
      >
        <!-- <button class="absolute bottom-8" @click="handleScroll">button</button> -->
      </div>

      <project-card
        v-for="(project, index) of $t(`Home.projects`)"
        :key="index"
        :reverse="index % 2 == 0 ? true : false"
        :image="project.image"
      >
        <template slot="title">
          <div
            class="mb-4"
            v-html="project.title"
            style="font-size: 24px; font-weight: 500"
          />
          <v-btn
            depressed
            tile
            color="#1A1A1A"
            class="white--text"
            v-html="project.buttonText"
            @click="$router.push(project.link)"
          ></v-btn>
        </template>
      </project-card>
    </v-container>
  </div>
</template>
<script>
  import { data } from "@/data/projects.json";
  import ProjectCard from "@/components/ProjectCard";
  export default {
    data: () => ({
      projects: data,
      currentScroll: "home-title",
    }),
    components: {
      "project-card": ProjectCard,
    },
    methods: {
      handleScroll() {
        const testEl = document.getElementById("test");
        console.log(testEl.scrollTop);
        const projectCardEl = document.getElementsByClassName(
          "project-card"
        )[0];
        console.log(projectCardEl.scrollTop);
        // projectCardEl.animate({scrollTop: '0'}, 2000);
        projectCardEl.scrollIntoView();
      },
    },
  };
</script>
