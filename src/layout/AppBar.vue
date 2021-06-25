<template>
  <v-app-bar id="app-bar" color="#222222" fixed dark dense flat>
    <div class="app-bar-content">
      <router-link to="/">
        <v-toolbar-title class="font-weight-black">CHAD LIAO</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

      <!-- <v-btn
        class="d-none d-sm-flex"
        v-for="(btn, index) in buttons"
        :key="index"
        text
        @click="jumpPage(btn.link)"
      >
        <span>{{ btn.text }}</span>
      </v-btn> -->

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Dropdown
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
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
      items: [{
          title: 'CN',
      }, {
          title: 'EN'
      }]
    }),
    methods: {
      jumpPage(link) {
        this.$router.push(link);
      },
    },
  };
</script>
<style lang="scss">
  #app-bar {
    .v-toolbar__content {
      justify-content: center;
    }
    .app-bar-content {
      display: flex;
      width: 100%;
      max-width: 960px;
    }
  }
</style>
