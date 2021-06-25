<template>
  <div
    class="fixed top-0 flex flex-1 justify-end items-center pr-8"
    style="height: 64px; width: 100%; background: #ffffff; z-index: 10;"
  >
    <!-- <div
    style="height: 64px; width: 100%; background: #ffffff; z-index: 10;"
  > -->
    <v-btn text to="/">Work</v-btn>
    <v-btn text to="/about-me" class="ml-4">About</v-btn>

    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" class="ml-4" text>
          <v-icon>mdi-translate</v-icon>
        </v-btn>
      </template>
      <v-list style=" z-index: 10;">
        <v-list-item v-for="(item, index) in items" :key="index" @click="transformLang(item.value)">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
  export default {
    data: () => ({
      buttons: [
        {
          text: "關於我",
          link: "/about-me",
        },
        {
          text: "關於專案",
          link: "/about-project",
        },
      ],
      items: [
        {
          title: "CH",
          value: "ch"
        },
        {
          title: "EN",
          value: "en"
        },
      ],
    }),
    methods: {
      transformLang(value) {
        this.$i18n.locale = value;
        window.localStorage.setItem("locale", value)
      }
    }
  };
</script>
