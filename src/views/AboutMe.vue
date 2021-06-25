<template>
  <div id="about-me" class="pt-10">
    <v-card height="264px" tile flat>
      <div class="d-flex flex-no-wrap">
        <div>
          <v-img
            height="300"
            :src="require(`@/assets/${aboutMe.image}`)"
          ></v-img>
        </div>
        <div>
          <div v-html="$t('AboutMe.me.name')"></div>
          <div v-html="$t('AboutMe.me.nickname')"></div>
          <div v-html="$t('AboutMe.me.position')"></div>
          <div v-html="$t('AboutMe.me.education')"></div>
          <div v-html="$t('AboutMe.me.email')"></div>
        </div>
      </div>
    </v-card>
    <v-row no-gutters class="pt-8">
      <v-col cols="12" sm="7" md="7">
        <div v-html="$t('AboutMe.experience.title')"></div>

        <div
          v-for="(part, index) of $t('AboutMe.experience.parts')"
          :key="index"
        >
          <template>
            <span v-html="part.title"></span>
            <span v-html="part.time"></span>
          </template>
          <div
            v-for="(content, contentIndex) of part.contents"
            :key="contentIndex"
          >
            <div v-html="content.title"></div>
            <ul>
              <li
                v-for="(item, itemIndex) of content.items"
                :key="itemIndex"
                v-html="item"
              ></li>
            </ul>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <div v-html="$t('AboutMe.skill.title')"></div>
        <div v-for="(part, index) of $t('AboutMe.skill.parts')" :key="index">
          <div v-html="part.title"></div>
          <ul>
            <li
              v-for="(item, itemIndex) of part.items"
              :key="itemIndex"
              v-html="item"
            ></li>
          </ul>
        </div>
        <div v-html="$t('AboutMe.other.title')">
          <div v-for="(part, index) of $t('AboutMe.other.parts')" :key="index">
            <div v-html="part.title"></div>
            <ul>
              <li
                v-for="(item, itemIndex) of part.items"
                :key="itemIndex"
                v-html="item"
              ></li>
            </ul>
          </div>
        </div>
      </v-col>
    </v-row>
    <div v-html="$t('AboutMe.content')"></div>
  </div>
</template>
<script>
  import Data from "@/data/about.me.json";
  import Experience from "@/components/Experience.vue";
  import Skill from "@/components/Skill.vue";
  import Connection from "@/components/Connection.vue";

  export default {
    data: () => ({
      tabs: null,
      aboutMe: Data,
      items: [
        {
          title: "CN",
        },
        {
          title: "EN",
        },
      ],
    }),
    components: {
      experience: Experience,
      skill: Skill,
      connection: Connection,
    },
  };
</script>
<style lang="scss">
  #about-me {
    > .row {
      justify-content: center;
      margin-top: 264px;

      .v-card {
        .v-card__title {
          color: #f633a8;
          font-size: 14px;
          font-weight: 500;
        }

        .v-card__text {
          color: #333333;
        }
      }
      @media screen and (min-width: 600px) {
        > div {
          max-width: 360px;
        }
      }
    }

    .about-me-block {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 36px;
      font-weight: 500;
      background: #222222;
      color: #ffffff;
    }
  }
</style>
