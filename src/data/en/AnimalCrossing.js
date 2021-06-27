export default {
  intriduction: {
    title: "Intriduction",
    content:
      "Animal Crossing is a social simulation video game series developed and published by Nintendo and created by Katsuya Eguchi and Hisashi Nogami. In Animal Crossing, the player character is a human who lives in a village inhabited by various anthropomorphic animals, carrying out various activities such as fishing, bug catching, and fossil hunting. The series is notable for its open-ended gameplay and extensive use of the video game console's internal clock and calendar to simulate real passage of time.",
  },
  rolesAndTasks: {
    title: "Roles＆Tasks",
    content:
      "We have two software engineers and one UI/UX designer (me), and planning to finish the project in 3 months with the time after work. <br/> We had the sprint meeting every two weeks online.",
    task: {
      title: "My Tasks:",
      items: [
        "Designed UI/UX",
        "Led the sprint planning",
        "Planned user research",
        "Created information architecture",
        "Organized the meetings",
      ],
    },
    // items: [
    //   "My Tasks:",
    //   "Designed UI/UX",
    //   "Led the sprint planning",
    //   "Planned user research",
    //   "Created information architecture",
    //   "Organized the meetings",
    // ],
  },
  overview: {
    title: "Overview",
    subtitle: "Players can trade white turnip to get rich!",
    content:
      "Like stock market, the price of turnips fluctuates over time. Players can sell turnips at different prices to make a profit.",
    gameRules: {
      title: "Game rules:",
      items: [
        "Turnips must be sold within a week. Otherwise, they will rot  and lose their monetary value.",
        "The prices are provided differently from the NPC on each player’s island.",
        "Player can visit other players’ island to trade turnips with better price.",
      ],
    },
  },
  demands: {
    title: "Demands",
    content:
      "By the rules, the players have the following demands to gain profit:",
    parts: [
      {
        title:
          "Turnips must be sold within a week. Otherwise, they will rot  and lose their monetary value.",
        items: [
          "Players want to sell out the turnips while they are still at a great values.",
        ],
      },
      {
        title:
          "The prices are provided differently from the NPC on each player’s island.",
        items: [
          "Price prediction ( The price can be somewhat predicted, adhering to one of the four patterns.)",
          "Asking other players to understand better selling price.",
        ],
      },
      {
        title:
          "Player can visit other players’ island to trade turnips with better price.",
        items: ["Getting the “password” to visit others island."],
      },
    ],
    conclution:
      "Players need somewhere to collect the information <br/> they want and share what they have!",
  },
  designExploration: {
    title: "Design Exploration",
    roles: {
      title: "Two user roles: ",
      items: ["Visitor", "Owner"],
    },
    table: {
      title: "3 stages of trading:",
      rows: [
        {
          header: "Before trading",
          cols: [
            {
              role: "Visitor",
              items: [
                {
                  text: "Check the price on my island",
                  color: "",
                },
                {
                  text: "Understand the prices other owners have",
                  color: "red",
                },
                {
                  text: "Get the password to visit others island",
                  color: "red",
                },
              ],
            },
            {
              role: "Owner",
              items: [
                {
                  text: "Give access to visitors",
                  color: "",
                },
                {
                  text: "On the island, or the trading requirements as needed",
                  color: "red",
                },
                {
                  text: "Select visitors",
                  color: "red",
                },
                {
                  text: "Send out the password",
                  color: "red",
                },
              ],
            },
          ],
        },
        {
          header: "Trading",
          cols: [
            {
              role: "Visitor",
              items: [
                {
                  text: "Trade with the NPC on other islands",
                  color: "",
                },
              ],
            },
            {
              role: "Owner",
              items: [],
            },
          ],
        },
        {
          header: "After trade",
          cols: [
            {
              role: "Visitor",
              items: [
                {
                  text:
                    "Follow the requirements from the owner to complete the trading",
                  color: "",
                },
                {
                  text: "Leave the island by the method the owner requested",
                  color: "",
                },
              ],
            },
            {
              role: "Owner",
              items: [
                {
                  text: "Collected the items left by the visitors",
                  color: "",
                },
              ],
            },
          ],
        },
      ],
    },
    conclution:
      "The main actions of demands are before trade, others are in the game.",
  },
  mainDesign: {
    title: "Main Design",
    items: [
      {
        title: "Home Page",
        content:
          "Visitors can collect the information they need on the home page such as trading price, actitivites and number in the queue",
        video: "01_HomePage.mp4",
      },
      {
        title: "Queue in room",
        content:
          "Vistors can queue in the waiting list. They will see the password in the info board after owner inviting them",
        video: "02_QueueInRoom.mp4",
      },
      {
        title: "Build the Room",
        content:
          "Owner can build a room and announce the information to other players.",
        video: "03_BuildTheRoom.mp4",
      },
      {
        title: "Invite the visitor",
        content:
          "Owner can select the visitors to share the password, and chat with them.",
        video: "04_InviteTheVisitor.mp4",
      },
    ],
  },
  otherDesign: {
    title: "Other Design",
    content:
      "Here is a game mechanism that a 'cutscenes' will be played while a visitor arrives the island. All the activities of visitors, who on the island at the same time, will be interrupted until the cutscenes end. Therefore, the owner will avoid allowing plenty of users visiting the island during the same time period. Otherwise the game will run pretty slowly and unsmoothly. So visitor won’t get the password if there are many player in waiting line.",
    items: [
      {
        title: "My Room (Queueing & Built)",
        content:
          "Visitor can queue in different room at the same time to increase the efficiency",
        video: "05_MyRoom.mp4",
      },
      {
        title: "My Notification (Room & System)",
        content:
          "Once the owner send out the invitation, the visitor can receive it immediately. Besides, players can receive the announce from mamager.",
        video: "06_MyNotification.mp4",
      },
      {
        title: "Report",
        content:
          "This platform is just for sharing the trade and activity information. It’s hard to stop the misconduct in the gmae. However, the misconduct needed to be reported to ensure the experience of the platform. Also, the players can report the bugs to improve the platform development.",
        video: "07_Report.mp4",
      },
    ],
  },
  conclution: {
    title: "Conclution",
    items: [
      {
        title: "Project",
        content:
          "We end up terminated the project and decide not to release it because:",
        items: [
          "This was our first side project. Due to some back-end problems that couldn't be solved in the short time , the project was delayed.",
          "Some similar platform platforms were released during the development.",
          "The trend of game would decrease after we completed the project.",
        ],
      },
      {
        title: "Design",
        content:
          "In user research, we found that players used the social media to resolve the information collecting, like creating the LINE or Facebook group. They used the group for the trading activity. There would have an organizer inviting people he/she knows into the group and discussing the activities in the game. <br/></br/> The information exchange within social media platforms is faster, and the reliability is higher since the members are familiar with each other. However, the amount of resource might be limited due to the group size.  <br/></br/> Using the platform can gather as many as possible players to share the information. And the interaction between players will become important because no one wants be cheated or offended in the game.",
      },
    ],
  },
};
