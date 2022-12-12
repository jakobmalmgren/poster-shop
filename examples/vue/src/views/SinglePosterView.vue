<script setup>
import data from "@/assets/data.json";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const poster = ref({
  title: "",
  id: "",
  price: 0,
});

const posterImg = ref();

async function goBack($event){
  $event.target.classList.add('animate');
  await router.go(-1);
  $event.target.classList.remove('animate');
}

onMounted(() => {
  const p = data.posters.find((p) => p.id == route.params.id);
  poster.value = p;
  posterImg.value = new URL(`/src/assets/char-${route.params.id}.png`, import.meta.url);
});
</script>
<template>
  <article class="poster-article">
    <img :src="posterImg" :alt="poster.title" />
    <h2>{{ poster.title }}</h2>
    <p>{{ poster.desc }}</p>
    <button @click="goBack">Take me back!</button>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';

.poster-article {
  max-width: 320px;
  height: 100vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: $gap;
  margin: 0 auto;

  img {
    width: 100%;
    border-radius: 0.5rem;
    &.animate {
      view-transition-name: single-poster;
      contain: layout;
    }
  }

  h2 {
    font-size: 3.2rem;
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 160%;
  }

  button {
    margin-top: 1rem;
    background-color: #222;
    color: #eee;
    border-radius: 999rem;
    font-size: 1.2rem;
    padding: .75rem 1.5rem;
    border: none;
    align-self: flex-start;

    &:hover {
      cursor: pointer;
      background-color: #c9233f;
    }
  }
}

</style>
