<template>
  <div class="container mx-auto flex flex-wrap justify-center gap-x-4 gap-y-4">
    <ArticleCard
      v-for="article in articles"
      :title="article.frontmatter.title"
      :date="article.date.string"
      :desc="article.frontmatter.desc"
      :tags="formatTags(article.frontmatter.tags)"
      :link="article.link"
    >  
    </ArticleCard>
  </div>
</template>

<script setup lang="ts">
import ArticleCard from "./ArticleCard.vue";
import { data as articles } from "../data/articles.data";

function formatTags(tags: string) {
  return tags ? tags.split("/") : []
}
</script>