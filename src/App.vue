<template>
  <v-app>
    <header-bar />
    <router-view class="mx-auto" style="max-width: 1024px" />
  </v-app>
</template>

<script>
  import HeaderBar from "@/components/HeaderBar";
  export default {
    name: "App",
    data: () => ({
      //
    }),
    components: {
      "header-bar": HeaderBar,
    },
  };
</script>

<style lang="scss">
  * {
    // border: 1px solid #8ddfee !important;
    font-family: Noto Sans TC;
  }
  #app {
    a {
      text-decoration: none;
      color: black;
      margin-top: 2px;
    }
    //   height: 100vh;
    //   font-family: 'Noto Sans TC';
    //   font-family: "Times New Roman", Georgia, serif;
    // }

    // * {
    //   border: 1px solid #cc9933;
  }
</style>
