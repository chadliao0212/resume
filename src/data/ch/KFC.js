export default {
  target: {
    title: "目標",
    content:
      "藉由實際操作經驗，發現點餐流程與介面的不足，因此，透過設計方法，重新設計線上點餐流程與UI，提升易用性、簡化點餐流程和時間",
    subtitle: "設計重點",
    subcontent: "透過流程與 UI 的再設計，讓點餐流程體驗，更加便捷與直覺",
  },
  painPointAndDesign: {
    title: "問題探索與再設計",
    content:
      "在餐廳內用時，觀察到內用客人為了避免壅擠與排隊等待時間，先找到座位後，會掃描桌上的線上點餐 QRcode 來點餐；但經過操作後，大部分客人仍然決定到櫃檯排隊點餐和結帳<br/><br/>經過自己使用，以及做了訪談與放聲思考法後，依據點餐的時間軸，進行問題整理與設計：",
    table: {
      rows: [
        {
          title: "在點餐前，會瀏覽餐點頁面，以便於找到想吃的餐點並訂餐",
          leftColumn: {
            points: ["進入點餐首頁", "查看、搜尋餐點"],
            items: [
              {
                type: "text",
                value: "餐點品項分類方式易產生誤導",
              },
              {
                type: "text",
                value: "資訊層數較深，品項搜尋不易",
              },
              {
                type: "image",
                value: "Before1-3.png",
              },
            ],
            images: [
              {
                type: "image",
                value: "Before1-1.png",
              },
              {
                type: "image",
                value: "Before1-2.png",
              },
            ],
          },
          rightColumn: {
            points: ["進入點餐首頁", "查看、搜尋餐點"],
            items: [
              {
                type: "text",
                value: "減少資訊層數，以利品項搜尋",
              },
              {
                type: "image",
                value: "After1-1.png",
              },
            ],
            images: [
              {
                type: "video",
                value: "After1-1-checkdishes.mp4",
              },
            ],
          },
        },
        {
          title: "決定餐點後，會將餐點加入餐車，以便於接下來修改和結帳",
          leftColumn: {
            points: ["選擇餐點", "選擇取餐方式", "搜尋、選擇餐廳"],
            items: [
              {
                type: "text",
                value:
                  "選擇餐點加入餐車後，卻跳出填寫取餐資訊填寫的 dialog，造成使用上的疑惑",
              },
              {
                type: "text",
                value: "頁面轉跳邏輯不明確<br/>（ 點餐 >> 選擇取餐方式）",
              },
            ],
            images: [
              {
                type: "image",
                value: "Before2-1.png",
              },
              {
                type: "image",
                value: "Before2-2.png",
              },
            ],
          },
          rightColumn: {
            points: ["選擇餐點"],
            items: [
              {
                type: "text",
                value: "將餐點加入餐車後，顯示加入的餐點品項和細節",
              },
              {
                type: "text",
                value:
                  "使用 dialog，在查看餐點細節，無需做換頁，並可明確知道選擇的餐點及數量",
              },
            ],
            images: [
              {
                type: "video",
                value: "After1-2-checkdetail.mp4",
              },
            ],
          },
        },
        {
          title: "點完餐後，會查看餐車中有哪些餐點，以確定要點的餐點都有點到",
          leftColumn: {
            points: [
              "回到餐點首頁<br/>(出現餐車)",
              "繼續選擇餐點<br/>(加入餐車)",
              "選擇結帳",
            ],
            items: [
              {
                type: "text",
                value: "「餐車」使用提示不足",
              },
              {
                type: "text",
                value:
                  "頁面轉跳邏輯不明確<br/>(點擊「結帳」與「餐車」，都會到同一頁）",
              },
              {
                type: "text",
                value:
                  "使用者對於「結帳」，會理解為直接進入結帳頁面，而非餐點客製",
              },
              {
                type: "text",
                value:
                  "購物車icon「可點擊」的提示不明，使用者不認為該圖示是可點擊的",
              },
            ],
            images: [
              {
                type: "image",
                value: "Before3-1.png",
              },
            ],
          },
          rightColumn: {
            points: [
              "回到餐點首頁<br/>(出現餐車)",
              "繼續選擇餐點<br/>(加入餐車)",
            ],
            items: [
              {
                type: "text",
                value: "直接使用文字按鈕取代 icon",
              },
              {
                type: "text",
                value: "點擊「查看餐點」或「結帳」，將導向各自功能的頁面",
              },
              {
                type: "text",
                value:
                  "大部分使用者會將餐點點齊後，再進行餐點客製，因此在設計上，讓使用者能夠先確認餐點和數目，再進入「修改餐點內容」，將兩種行為動作做出區隔。",
              },
            ],
            images: [
              {
                type: "video",
                value: "After1-3-putincart.mp4",
              },
            ],
          },
        },
        {
          title: "結帳前，會客製自己的餐點，以便讓餐點符合自己的口味",
          leftColumn: {
            points: ["修改、確認餐點"],
            items: [
              {
                type: "text",
                value: "無法客製餐點",
              },
              {
                type: "text",
                value:
                  "相同的餐點會合併做修改，例如：兩份同樣套餐，修改時會將餐點內容總數合併，易造成混亂",
              },
              {
                type: "text",
                value:
                  "使用者在發現無法順利客製化餐點後，就會在此時機放棄使用線上點餐",
              },
            ],
            images: [
              {
                type: "image",
                value: "Before4-1.png",
              },
              {
                type: "image",
                value: "Before4-2.png",
              },
              {
                type: "image",
                value: "Before4-3.png",
              },
            ],
          },
          rightColumn: {
            points: ["修改、確認餐點", "選擇結帳"],
            items: [
              {
                type: "text",
                value:
                  "每次可對一份餐點進行修改和備註，降低使用者操作及思考的消耗",
              },
            ],
            images: [
              {
                type: "video",
                value: "After1-4-customization.mp4",
              },
            ],
          },
        },
        {
          title: "送出訂單前，需要填寫取餐資訊，方便用自己習慣的方式付款取餐",
          leftColumn: {
            points: [
              "填寫訂餐資料、備註",
              "選擇付款方式、修改取餐資訊(餐廳、取餐方式）",
            ],
            items: [
              {
                type: "text",
                value: "重複填寫送餐資訊",
              },
            ],
            images: [
              {
                type: "image",
                value: "Before5-1.png",
              },
              {
                type: "image",
                value: "Before5-2.png",
              },
            ],
          },
          rightColumn: {
            points: ["額外加購<br />填寫訂餐資料<br/>選擇付款、取餐資訊"],
            items: [
              {
                type: "text",
                value:
                  "將後續需要的相關資料，統一留在點餐後、訂單送出前完成，將點餐流程與結帳流程分開，減少操作上，使用者的疑惑",
              },
            ],
            images: [
              {
                type: "video",
                value: "After1-5-checkout.mp4",
              },
            ],
          },
        },
        {
          leftColumn: {
            points: ["送出訂單"],
          },
          rightColumn: {
            points: ["送出訂單"],
          },
        },
      ],
    },
  },
  testAndResult: {
    title: "測試與成果",
    content:
      "設計完成後，透過 A/B 測試來比較原始版本和再設計版本<br/>測試設定為相同點餐情境，讓使用者操作原流程與再設計流程，並進行測試後訪談",
    subtitle: "點餐流程時間降低約 30%，並減少使用者操作上的疑惑",
    subcontent:
      "主要降低操作時間的地方，是在「搜尋餐點」與「客製餐點」的部分：",
    items: [
      "因改變餐點呈現的方式與資訊架構，讓使用者能更便捷地，搜尋餐點、查看內容和點餐",
      "原始設計並無對單一餐點客製化的方式，讓大部分使用者在此環節放棄線上點單，選擇直接去櫃臺；若使用者繼續使用線上點餐，則只能在最後的結帳備註填寫，但又因字數限制，造成使用上困擾；所以再設計版中，雖然針對單一餐點客製化會花較多時間，但提升了使用的方便性",
    ],
  },
  conclution: {
    title: "結論",
    content:
      "在初期規劃時，以自身的角度列舉出許多問題，但在訪談過後，發現有些問題假設並不成立(大多為其他使用者不太在意，或是自己的使用習慣差異所造成，但也有可能為訪談樣本數不足)，透過這些訪談回饋，得以剔除許多偏誤的問題假設，針對主要問題做改進<br/><br/>對於再設計後的測試結果，確實有達到「操作便捷」與「減少點餐時間」，且重新設計了原先無法客製餐點的流程，但此次再設計的目的，皆以顧客作為使用者，以一套完整的點餐系統來說，除了顧客體驗重要外，從餐廳人員的工作流程、與線下點餐系統的對接，至整體的商業模式考量，都應該納入需求來做設計規劃；而我們顧客認為原設計不方便的地方(例如：在加入餐點時，就必須填寫送餐取餐資訊；或是無法客製餐點的設計)，也許有其商業目的或考量，這些都會是需要檢視整體服務流程，做出適當的取捨",
  },
};
