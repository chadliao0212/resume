import Vue from "vue";

import VueI18n from "vue-i18n";

import en from "./data/en";
import ch from "./data/ch";

Vue.use(VueI18n);
const locale = window.localStorage.getItem("locale") || "ch" ;

window.localStorage.setItem("locale", locale)

const i18n = new VueI18n({
  locale,
  messages: { en, ch },
});

export default i18n;
