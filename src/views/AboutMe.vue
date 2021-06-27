<template>
  <div id="about-me" class="pt-16">
    <v-container>
      <v-card height="363px" tile flat>
        <div class="d-flex flex-no-wrap">
          <div>
            <v-img
              height="363px"
              :src="require(`@/assets/${$t('AboutMe.me.image')}`)"
            ></v-img>
          </div>
          <div
            style="background: #E7E8EA; flex: 1;padding-top:70px; padding-left:50px"
          >
            <div
              class="mb-2 font-medium text-4xl"
              v-html="$t('AboutMe.me.name')"
            ></div>
            <div
              class="mb-4 font-medium text-2xl"
              v-html="$t('AboutMe.me.nickname')"
            ></div>
            <div
              class="mb-4 font-medium text-2xl"
              v-html="$t('AboutMe.me.position')"
            ></div>
            <div
              class="mb-4 text-2xl"
              v-html="$t('AboutMe.me.education')"
            ></div>
            <div class="text-2xl" v-html="$t('AboutMe.me.email')"></div>
          </div>
        </div>
      </v-card>
      <v-row
        no-gutters
        class="pt-8 px-10"
        style="background:#202121; color: #ffffff"
      >
        <v-col cols="12" sm="7" md="7" class="pb-10" style="border-right: 1px solid #99908D;">
          <div
            class="font-normal"
            style="font-size:32px; color:#99908D"
            v-html="$t('AboutMe.experience.title')"
          ></div>

          <div
            v-for="(part, index) of $t('AboutMe.experience.parts')"
            :key="index"
          >
            <template>
              <span
                style="font-size:32px;"
                class="font-medium mr-8 mt-9 inline-flex"
                v-html="part.title"
              ></span>
              <span
                class="text-lg mb-2"
                style="color:#99908D"
                v-html="part.time"
              ></span>
            </template>
            <div
              class="text-lg mb-2"
              style="color:#99908D"
              v-html="part.company"
            ></div>
            <ul class="mb-4">
              <li
                style="font-size:22px"
                v-for="(item, itemIndex) of part.items"
                :key="itemIndex"
                v-html="item"
              ></li>
            </ul>
            <div
              style="color:#99908D;font-size:22px"
              v-html="part.others.title"
            ></div>
            <ul>
              <li
                style="font-size:22px"
                v-for="(item, itemIndex) of part.others.items"
                :key="itemIndex"
                v-html="item"
              ></li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" sm="4" md="4" class="ml-9">
          <div
            v-html="$t('AboutMe.skill.title')"
            style="font-size:32px; color:#99908D"
          ></div>
          <div v-for="(part, index) of $t('AboutMe.skill.parts')" :key="index">
            <div
              v-html="part.title"
              style="font-size:32px;"
              class="font-medium mr-8 mt-9 inline-flex"
            />
            <ul>
              <li
                style="font-size:22px"
                v-for="(item, itemIndex) of part.items"
                :key="itemIndex"
                v-html="item"
              ></li>
            </ul>
          </div>
          <div
            style="color:#99908D;font-size:32px"
            class="mt-12 mb-2"
            v-html="$t('AboutMe.other.title')"
          ></div>
          <div v-for="(part, index) of $t('AboutMe.other.parts')" :key="index">
            <div class="text-2xl mt-6" v-html="part.title"></div>
            <ul>
              <li
                style="color:#99908D;font-size:22px"
                v-for="(item, itemIndex) of part.items"
                :key="itemIndex"
                v-html="item"
              ></li>
            </ul>
          </div>
          <!-- </div> -->
        </v-col>
      </v-row>
      <div
        class="px-10 pt-8 text-lg"
        style="background:#202121; color: #ffffff; padding-bottom: 160px"
        v-html="$t('AboutMe.content')"
      ></div>
    </v-container>
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
      // justify-content: center;
      // margin-top: 264px;

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
