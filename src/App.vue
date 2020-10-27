<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
#app {
  height: 100vh;
  font-family: 'Noto Sans TC';
}
</style>
