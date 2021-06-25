export default {
  target: {
    title: "Target",
    content:
      "Simplify the customers’ ordering process and reduce the inconvenience due to lack of user experience design. Make the online ordering easy to use.",
    subtitle: "Highlight",
    subcontent:
      "Redesign the UI and information architecture to to smooth the ordering process and operations.",
  },
  painPointAndDesign: {
    title: "Pain point & Design",
    content:
      "I noticed that, when customers found out there has the QRcode on the table, they tended to take a seat and scan the code for online ordering to avoid the long waiting time. however, they would end up back to the line instead of using online system. <br/><br/>After finishing user interview and think-aloud protocols, I concluded the pain points and re-design the system.<br/>Below are my thoughts:",
    table: {
      rows: [
        {
          title:
            "Before ordering, customers will browse and choose from the menu",
          leftColumn: {
            points: ["Homepage", "Browse and search the meals"],
            items: [
              {
                type: "text",
                value:
                  "The arrangement of the meals on the page is misleading and unclear",
              },
              {
                type: "text",
                value: "Too many levels makes it hard to read",
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
            points: ["Homepage", "Browse and search the meals"],
            items: [
              {
                type: "text",
                value:
                  "Arrange the menu with fewer levels for easing the browsing process.",
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
          title:
            "After deciding the meal, customers will add their choices into carts to customize the details or checkout.",
          leftColumn: {
            points: [
              "Choose the meal",
              "Choose delivery methods",
              "Select the store",
            ],
            items: [
              {
                type: "text",
                value:
                  "After the action of adding to cart, the dialog for selecting store location and delivery method would pop ups, which makes customer confused.",
              },
              {
                type: "text",
                value:
                  "The logic of jumping between the system pages is unclear.",
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
            points: ["Choose the meal"],
            items: [
              {
                type: "text",
                value:
                  "clicking the dish will show the detail. Dish will be added in the basket after customers’ confirmation",
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
          title: "After ordering, customer will verify the cart",
          leftColumn: {
            points: [
              "Go back to homepage (with 'cart' icon)",
              "Keep adding items to order",
              "Checkout",
            ],
            items: [
              {
                type: "text",
                value:
                  "the hint of 'verifying the cart' is unclear and customers don't know the icon is clickable.",
              },
              {
                type: "text",
                value:
                  "No matter clicking 'checkout' or 'cart', both of them go to the same page. The logic of UX design is misleading.",
              },
              {
                type: "text",
                value:
                  "Customers cannot figure out where to customize their order.  They need to click 'checkout' first then do customization.",
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
              "Go back to homepage (with 'cart' icon)",
              "Keep adding items to order",
            ],
            items: [
              {
                type: "text",
                value: "Replace the cart icon with the text 'Verify Cart'.",
              },
              {
                type: "text",
                value:
                  "Customer will be led to two different functioal pages after clicking ‘cart’ or ‘checkout’.",
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
          title:
            "Before checking out, customer will customize the meal with their preferences.",
          leftColumn: {
            points: ["Modify the meal"],
            items: [
              {
                type: "text",
                value:
                  "Customers cannot customize the order like removing onions from the hamburger.",
              },
              {
                type: "text",
                value:
                  "When editing the meal combinations, if there are two same meal in the cart, customers cannot only edit one of them. The changes will be applied on both meals. For example, customers can not just upgrade large fries in one of the several same meals.",
              },
              {
                type: "text",
                value:
                  "Customers will leave the online service and back to the line for ordering since they can’t customize the meal.",
              },
            ],
            images: [
              {
                type: "image",
                value: "Before4-1.png",
              },
              {
                type: "image",
                value: "Before4-1.png",
              },
              {
                type: "image",
                value: "Before4-1.png",
              },
            ],
          },
          rightColumn: {
            points: ["Customerize the meal", "Check out"],
            items: [
              {
                type: "text",
                value:
                  "Customers can edit or customize each meal in the cart as needed. The action buttons and process is clear and simple.",
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
          title:
            "Before sending out the order, customer will confirm the location and payment method.",
          leftColumn: {
            points: [
              "Confirm the order like name and phone nimbers",
              "Set the payment method and location info",
            ],
            items: [
              {
                type: "text",
                value: "The tasks are repeated from the beginning.",
              },
            ],
            images: [
              {
                type: "image",
                value: "Before5-1.png",
              },
              {
                type: "image",
                value: "Before5-1.png",
              },
            ],
          },
          rightColumn: {
            points: [
              "Confirm the order like name and phone nimbers",
              "Set the payment method and location info",
            ],
            items: [
              {
                type: "text",
                value:
                  "Customers complete the form including location and payment method at the end of the checkout process.",
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
            points: ["Send out the order"],
          },
          rightColumn: {
            points: ["Send out the order"],
          },
        },
      ],
    },
  },
  testAndResult: {
    title: "Test & Result",
    content:
      "I generated an A/B test between original and redesign systems. <br/>And I made interviews after the testers completed tasks in the same the same order contents.",
    subtitle:
      "Decrease the confusion and lower 30% of time in the oredering process",
    subcontent:
      "By the research in advance, the processes take the most of time are 'browsing the menu' and 'editing and customization'. So I put a lot of effort in simplifying these two sections:",
    items: [
      "Changing the information architecture made user can browse the menu, read the details and complete the order faster.",
      "Users often gave up ordering online and back to the line when they can't figure out how to customization. They might choose to leave the notes for customization when checking out online, but there are limited characters can be put in the box. My redesign process and UI, although making the customization on each meal takes some times, are more intuitive and clear.",
    ],
  },
  conclution: {
    title: "Conclution",
    content:
      "I listed lots of pain points by myself at first then crossed out a plenty of them, which the most users did not care about or which just based on my own usual practice. Through these feedbacks, I could focus on the real problems rather than my hypothesis.<br/><br/>I redesigned the customization process. And the whole process became more intuitive and time-saving in the end. However, I only took customers' standpoints to design the process in the project. In fact, a comprehensive ordering system takes into account all the factors not only customer experience but also the online-to-offline process. Some inconveniences resulted from the original design ( like setting location before ordering and couldn’t customize the meal) may be under other business considerations from the restaurant side. ",
  },
};
