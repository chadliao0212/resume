<template>
  <div>
    <v-container>
      <div
        class="home-title h-screen flex justify-center items-center relative"
      >
        <div class="flex-1 pa-4">
          <img width="310px" src="@/assets/KFC/image/InitialImage-1.png" />
        </div>
        <div class="flex-1 pa-4">
          <img width="270px" src="@/assets/KFC/image/InitialImage-2.png" />
        </div>
        <!-- <button class="absolute bottom-8">button</button> -->
      </div>
      <div class="part">
        <div class="part__title" v-html="$t(`KFC.target.title`)" />
        <div class="part__content" v-html="$t(`KFC.target.content`)" />
        <div
          class="part__subtitle mt-8 mb-4"
          v-html="$t(`KFC.target.subtitle`)"
        />
        <div class="part__content" v-html="$t(`KFC.target.subcontent`)" />
      </div>

      <div class="part">
        <div class="part__title" v-html="$t(`KFC.painPointAndDesign.title`)" />
        <div
          class="part__content"
          v-html="$t(`KFC.painPointAndDesign.content`)"
        />
      </div>

      <div
        class="ordering-process"
        v-for="(row, index) of $t(`KFC.painPointAndDesign.table.rows`)"
        :key="index"
      >
        <div
          class="flex justify-center relative"
          :style="[index === 0 || !row.title ? '' : { 'padding-top': '192px' }]"
        >
          <div
            class="absolute ordering-process-top"
            :style="[index === 0 ? { top: '-64px' } : { top: '110px' }]"
            v-if="row.title"
            v-html="row.title"
          />
          <div class="absolute ordering-process-left  mt-6">
            <div
              class="mb-4"
              v-for="(point, pointIndex) of row.leftColumn.points"
              :key="pointIndex"
            >
              <svg>
                <circle cx="6" cy="6" r="6" />
              </svg>
              <div v-html="point" class="ordering-process-left__text" />
            </div>
          </div>

          <div class="absolute ordering-process-right mt-6">
            <div
              v-for="(point, pointIndex) of row.rightColumn.points"
              :key="pointIndex"
              class="mb-4"
            >
              <svg>
                <circle cx="6" cy="6" r="6" />
              </svg>
              <div class="ordering-process-right__text" v-html="point" />
            </div>
          </div>

          <div
            v-if="row.title"
            class="ordering-process-content"
            style="border-right: 1px solid black; padding:0 16px;"
          >
            <div class="font-normal mb-4">Before</div>
            <div class="flex mb-4" style="overflow: scroll">
              <div
                v-for="(image, imageIndex) of row.leftColumn.images"
                :key="imageIndex"
              >
                <v-img
                  width="230px"
                  v-if="image.type === 'image'"
                  :src="require(`@/assets/KFC/image/${image.value}`)"
                  :class="[imageIndex > 0 ? 'ml-4' : '']"
                />
                <video v-if="image.type === 'video'" controls width="230px">
                  <source
                    :src="require(`@/assets/KFC/video/${image.value}`)"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <ul>
              <div
                v-for="(item, itemIndex) of row.leftColumn.items"
                :key="itemIndex"
              >
                <li v-if="item.type === 'text'" v-html="item.value"></li>
              </div>
            </ul>
            <div
              class="flex justify-center mt-2"
              v-for="(item, itemIndex) of row.leftColumn.items"
              :key="itemIndex"
            >
              <img
                v-if="item.type === 'image'"
                :src="require(`@/assets/KFC/image/${item.value}`)"
                width="200px"
              />
            </div>
          </div>

          <div class="ordering-process-content px-8">
            <div v-if="row.title" class="font-normal mb-4">After</div>
            <div class="flex mb-4">
              <div
                v-for="(image, imageIndex) of row.rightColumn.images"
                :key="imageIndex"
              >
                <v-img
                  width="230px"
                  v-if="image.type === 'image'"
                  :src="require(`@/assets/KFC/image/${image.value}`)"
                />
                <video v-if="image.type === 'video'" controls width="230px">
                  <source
                    :src="require(`@/assets/KFC/video/${image.value}`)"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <ul>
              <div
                v-for="(item, itemIndex) of row.rightColumn.items"
                :key="itemIndex"
              >
                <li v-if="item.type === 'text'" v-html="item.value"></li>
              </div>
            </ul>
            <div
              class="flex justify-center mt-6"
              v-for="(item, itemIndex) of row.rightColumn.items"
              :key="itemIndex"
            >
              <img
                v-if="item.type === 'image'"
                :src="require(`@/assets/KFC/image/${item.value}`)"
                width="200px"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="part" style="margin-top: 128px">
        <div class="part__title" v-html="$t(`KFC.testAndResult.title`)" />
        <div class="part__content" v-html="$t(`KFC.testAndResult.content`)" />
        <div
          class="part__subtitle mt-6 mb-4"
          v-html="$t(`KFC.testAndResult.subtitle`)"
        />
        <div class="part__content">
          <div v-html="$t(`KFC.testAndResult.subcontent`)" />
          <ul>
            <li
              v-for="(item, index) of $t(`KFC.testAndResult.items`)"
              :key="index"
              v-html="item"
            />
          </ul>
        </div>
      </div>

      <div class="part">
        <div class="part__title" v-html="$t(`KFC.conclution.title`)" />
        <div class="part__content" v-html="$t(`KFC.conclution.content`)" />
      </div>
    </v-container>
  </div>
</template>
