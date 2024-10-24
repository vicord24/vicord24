// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

import ArticleCard from "../components/ArticleCard.vue";
import CardContainer from "../components/CardContainer.vue";


export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component("ArticleCard", ArticleCard);
    app.component("CardContainer", CardContainer);
  },
} satisfies Theme;
