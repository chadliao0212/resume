<template>
  <div>
    <div class="home-title h-screen flex justify-center items-center relative">
      <div class="flex-1 pa-4">
        <img src="@/assets/AnimalCrossing/images/Top-Left.png" />
      </div>
      <div class="flex-1 pa-4">
        <img src="@/assets/AnimalCrossing/images/Top-Right.png" />
      </div>
      <!-- <button class="absolute bottom-8">button</button> -->
    </div>

    <div class="flex justify-center mb-6">
      <img width="435px" src="@/assets/AnimalCrossing/images/Logo.png" />
    </div>
    <div class="part">
      <div
        class="part__title"
        v-html="$t('AnimalCrossing.intriduction.title')"
      ></div>
      <div
        class="part__content"
        v-html="$t('AnimalCrossing.intriduction.content')"
      ></div>
    </div>
    <div class="part">
      <div
        class="part__title"
        v-html="$t('AnimalCrossing.rolesAndTasks.title')"
      ></div>
      <div class="part__content">
        <div v-html="$t('AnimalCrossing.rolesAndTasks.content')"></div>
        <div
          v-for="(item, index) of $t('AnimalCrossing.rolesAndTasks.items')"
          v-html="item"
          :key="index"
        />
      </div>
    </div>

    <div class="part">
      <div class="part__title" v-html="$t('AnimalCrossing.overview.title')" />
      <div
        class="part__subtitle"
        v-html="$t('AnimalCrossing.overview.subtitle')"
      ></div>
      <div class="part__content">
        <div v-html="$t('AnimalCrossing.overview.content')" />
        <div
          class="ul__title mt-4"
          v-html="$t('AnimalCrossing.overview.gameRules.title')"
        ></div>
        <ul>
          <li
            v-for="(item, index) of $t(
              'AnimalCrossing.overview.gameRules.items'
            )"
            :key="index"
            v-html="item"
          />
        </ul>
      </div>
    </div>

    <div class="part">
      <div class="part__title" v-html="$t('AnimalCrossing.demands.title')" />
      <div class="part__content">
        <div v-html="$t('AnimalCrossing.demands.content')" />
        <div
          v-for="(part, index) of $t('AnimalCrossing.demands.parts')"
          :key="index"
        >
          <div class="ul__title mt-4" v-html="part.title" />
          <ul>
            <li
              v-for="(item, itemIndex) of part.items"
              :key="itemIndex"
              v-html="item"
            />
          </ul>
        </div>
      </div>
    </div>

    <div
      class="part text-4xl"
      style="line-height: 52px"
      v-html="$t('AnimalCrossing.demands.conclution')"
    />

    <div class="part">
      <div
        class="part__title"
        v-html="$t('AnimalCrossing.designExploration.title')"
      ></div>
      <div class="part__content">
        <div
          class="ul__title mt-4"
          v-html="$t('AnimalCrossing.designExploration.roles.title')"
        />
        <ul class="decimal">
          <li
            v-for="(item, index) of $t(
              'AnimalCrossing.designExploration.roles.items'
            )"
            :key="index"
            v-html="item"
          />
        </ul>
      </div>

      <div class="table">
        <div
          class="mb-4"
          v-html="$t('AnimalCrossing.designExploration.table.title')"
          style="margin-top:42px; font-size: 24px"
        />
        <div
          v-for="(row, index) of $t(
            'AnimalCrossing.designExploration.table.rows'
          )"
          :key="index"
          class="mb-10"
        >
          <div class="table__title">
            <div v-html="row.header" />
          </div>
          <div class="row">
            <div
              class="col"
              v-for="(col, colIndex) of row.cols"
              :key="colIndex"
            >
              <div class="col__title" v-html="col.role"></div>
              <div class="col__content">
                <div
                  v-for="(item, itemIndex) of col.items"
                  :key="itemIndex"
                  v-html="item.text"
                  :class="[`color__${item.color}`]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="text-2xl color__red mt-10"
        v-html="$t('AnimalCrossing.designExploration.conclution')"
      />
    </div>

    <div class="part">
      <div class="part__title" v-html="$t('AnimalCrossing.mainDesign.title')" />
      <div
        v-for="(item, index) of $t('AnimalCrossing.mainDesign.items')"
        :key="index"
        style="margin-bottom: 128px"
      >
        <div
          class="mb-2"
          style="font-weight:400;font-size: 18px;"
          v-html="item.title"
        />
        <div
          class="mb-10"
          style="font-weight:300;font-size: 18px;"
          v-html="item.content"
        />
        <video autoplay muted loop="true">
          <source
            :src="require(`@/assets/AnimalCrossing/videos/${item.video}`)"
            type="video/mp4"
          />
        </video>
      </div>
    </div>

    <div class="part">
      <div
        class="part__title"
        v-html="$t('AnimalCrossing.otherDesign.title')"
      />
      <v-img src="@/assets/AnimalCrossing/images/OtherDesign.png"></v-img>
      <div class="pa-10" v-html="$t('AnimalCrossing.otherDesign.content')" />
      <div
        v-for="(item, index) of $t('AnimalCrossing.otherDesign.items')"
        :key="index"
        style="margin-bottom: 128px"
      >
        <div
          class="mb-2"
          style="font-weight:400;font-size: 18px;"
          v-html="item.title"
        />
        <div
          class="mb-10"
          style="font-weight:300;font-size: 18px;"
          v-html="item.content"
        />
        <video controls>
          <source
            :src="require(`@/assets/AnimalCrossing/videos/${item.video}`)"
            type="video/mp4"
          />
        </video>
      </div>
    </div>

    <div class="part">
      <div class="part__title" v-html="$t('AnimalCrossing.conclution.title')" />
      <div
        v-for="(item, index) of $t('AnimalCrossing.conclution.items')"
        :key="index"
        style="margin-bottom: 68px"
      >
        <div
          class="mb-2"
          style="font-weight:400;font-size: 24px;"
          v-html="item.title"
        />
        <div style="font-weight:300;font-size: 18px;" v-html="item.content" />
        <ul :key="index">
          <li
            v-for="(subitem, subitemIndex) of item.items"
            :key="subitemIndex"
            v-html="subitem"
          />
        </ul>
      </div>
    </div>
  </div>
</template>
