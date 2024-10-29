<template>
  <div class="article-card">
    <div class="card-content" @click="goto(link)">
      <h1 class="title">{{ title }}</h1>
      <p class="description">{{ desc }}</p>

      <div class="info">
        <span class="date">{{ date }}</span>

        <div class="tags">
          <span class="tag" v-for="(tag, index) in tags" :key="index">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 16px 0;
  transition: transform 0.2s;
  overflow: hidden;
}

.card-content {
  padding: 24px;
}

.title {
  font-size: 1.25rem;
  margin: 0 0 8px 0;
}

.description {
  font-size: 1rem;
  margin-bottom: 16px;
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.date {
  font-size: 0.85rem;
  color: #999;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  border: 1px solid #007bff;
  padding: 4px 8px;
  font-size: 0.75rem;
  border-radius: 12px;
  display: inline-block;
  background-color: transparent;
}

.article-card:hover {
  transform: translateY(-5px);
}
</style>

<script setup lang="ts">
import { useRouter } from "vitepress";

const { title, date, desc, tags, link } = defineProps([
  "title",
  "date",
  "desc",
  "tags",
  "link",
]);

const router = useRouter();
const goto = (link: string) => router.go("/vicord24" + link);

</script>