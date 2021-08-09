<template>
  <div>
    <v-container>
      <div
        class="home-title h-screen flex justify-center items-center relative"
      >
        <div class="flex-1 pa-4 justify-center	 d-flex">
          <img width="300px" src="@/assets/PersonalWeb/images/首頁圖-左.png" />
        </div>
        <div class="flex-1 pa-4 justify-center	 d-flex">
          <img width="300px" src="@/assets/PersonalWeb/images/首頁圖-右.png" />
        </div>
      </div>

      <div class="part">
        <div class="part__title">目標</div>
        <div class="part__content">
          希望透過快速的條件設定與搜尋，找到適合或推薦的自助行程；並能夠以彈性的方式，自由的調整行程規劃，來達到符合自身需求的旅遊行程
        </div>
      </div>
      <div class="part">
        <div class="part__title">角色＆任務</div>
        <div class="part__content">
          此次開發為入門工作坊，參與人大多非資訊相關科系，在討論與設計中，大家多以自身經驗為主來討論開發。
          因個人為設計相關科系畢業，在此次合作中，除了整體架構的討論外，也負責
          App 中色彩和 UI 配置。
        </div>
      </div>

      <div class="part">
        <div class="part__title">情境</div>
        <div class="part__content">
          對於忙碌的上班族或家長，需要有個有品質的旅遊，除了直接跟旅行社購買外，從無到有的旅遊規劃，從找資料，安排景點、交通、住宿、查訊價格，這一系列的動作都需要花費大量精神和時間。
        </div>
      </div>

      <div class="part">
        <div class="part__title">Persona</div>
        <div class="part__content">
          我們從使用的情境上，預設使用者的人物誌。
          使用者特質為「喜愛旅遊」、「有休閒時間可安排旅遊」並「有穩定的收入」來確保旅遊的品質，使用以上條件作為人物誌的基本設定。

          <img class="mt-10" src="@/assets/PersonalWeb/images/人物誌01.png" />
          <img class="mt-10" src="@/assets/PersonalWeb/images/人物誌02.png" />
        </div>
      </div>

      <div class="part">
        <div class="part__title d-flex items-center">
          UI Flow <v-spacer></v-spacer
          ><v-btn
            @click="dialog = true"
            color="#F99D44"
            class="white--text"
            depressed
            >更多細節</v-btn
          >
        </div>
        <div class="part__content">
          <img src="@/assets/PersonalWeb/images/UIFlow.png" />
        </div>
      </div>

      <div class="part">
        <div class="part__title">測試＆回饋</div>
        <div class="part__content">
          <div>
            在使用者測試方面，選擇使用微軟的「產品反應卡」作評估，讓受試者排列產品的
            Wireframe ，完成後選出操作時的感受，同時測量完成時間。藉此測試
            Wireframe是否符合使用邏輯，且操作過程流暢。
          </div>
          <img class="mt-12" src="@/assets/PersonalWeb/images/測試回饋.png" />
          <div class="mt-12">
            根據測試結果，正面的評價皆認為，此
            APP能夠快速地符合使用者設定的需求。<br /><br />
            而負面的評價則認為，在使用上的提示，包括「可以做哪些事情」、「怎麼做」及「做了會發生什麼」不夠明確，產生誤導或誤解的情況。<br /><br />
            我們從旁觀察到，受試者在排列Wireframe時，在「行程內容」這個區塊猶豫很久無從下手。透過觀察和訪談後，得知受試者對原先的「選擇/複製推薦行程」、「修改行程」和「自訂行程」的操作行為不太直覺。因此，我們需要加強這一區塊的操作識別。
          </div>
        </div>
      </div>

      <div class="part">
        <div class="part__title">主要設計</div>
        <div class="part__content mb-8">
          <div
            class="part__card mb-8"
            v-for="(data, index) of mainDesignData"
            :key="index"
          >
            <video style="height:600px; flex:1" controls>
              <source
                :src="require(`@/assets/PersonalWeb/videos/${data.video}`)"
                type="video/mp4"
              />
            </video>
            <div style="flex:1; max-width: 336px">
              <div class="part__card__title mb-4">{{ data.title }}</div>
              <div v-html="data.content"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="part">
        <div class="part__title">結語</div>
        <div class="part__content">
          這次
          APP的設計是團隊第一次合作開發。過程中，在發想時期意見便非常分歧，透過整理後才逐漸開始有共識，慢慢討論出情境、人物等架構。在討論功能時，又幾乎產生了多方不同的意見僵持，在回頭檢視設計目標後，才又步回正軌繼續發展。<br /><br />
          這次設計流程中，因為自己本身有設計基礎，主要負責整體App色調與風格的呈現。在色彩與風格上，我們在「活潑」和「穩重」之間徘徊，最後團隊共識是，旅行應該是一件歡樂、有朝氣的事，最終以明亮色系與活潑的風格作為設計基底。<br /><br />
          最後，用戶的測試回饋，不僅給團隊帶來意見的整合，同時也打破我們許多認知上的錯誤，例如：我們製作時認為理所當然的地方，使用者卻不明所以，是指示上的缺乏，也點醒我們開發思路的不足。
        </div>
      </div>
    </v-container>
    <v-dialog v-model="dialog" max-width="1024px">
      <v-card class="pa-4">
        <img src="@/assets/PersonalWeb/images/Flow細節.png" />
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    data: () => {
      return {
        dialog: false,
        mainDesignData: [
          {
            video: "瀏覽行程01.mp4",
            title: "搜尋行程",
            content: `使用者透過搜尋條件的設定，搜尋想要或是相關的旅遊行程。<br/>也可藉由下方系統預設的分類，來協助搜尋`,
          },
          {
            video: "編輯行程02.mp4",
            title: "收藏、複製行程",
            content: `可點擊進入搜尋出的行程，查看該行程的內容，通過複製和收藏功能，將行程放入自己的行程列表中。<br/>複製和收藏的不同在於，複製會立即打開行程編輯頁，讓使用者進行調整或修改；收藏則直接新增至會員專區的「我的旅程」中。`,
          },
          {
            video: "自訂行程03.mp4",
            title: "自訂行程",
            content: `使用者可新增並自定行程內容，透過選擇地點、設定時間及旅遊日期，並在景點那天加備註或外部連結，來完成客製行程。`,
          },
          {
            video: "文章瀏覽04.mp4",
            title: "旅遊文章",
            content:
              "由使用者組成社群，每位使用者都可發表旅遊文章，並附上行程讓其他玩家參考或複製。",
          },
          {
            video: "會員專區05.mp4",
            title: "會員專區",
            content: `
            會員專區有三個部分：<br/><br/>
            「我的行程」：收藏、複製和自訂的行程內容，會放在此處，使用者可隨時進入編輯。<br/><br/>
            「收藏文章」：收藏其他使用者撰寫的文章，會放在此處，使用者可點擊進入查看或取消收藏。<br/><br/>
            「我的文章」：我們希望每位使用者分享自己的旅遊體驗與行程，可在此處看見自己撰寫的內容項目，可點擊進入設定文章狀態與編輯；也可新增文章。<br/><br/>
            `,
          },
        ],
      };
    },
  };
</script>
<style lang="scss">
  .part__card {
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    .part__card__title {
      font-weight: 400;
      font-size: 24px;
    }
  }
</style>
