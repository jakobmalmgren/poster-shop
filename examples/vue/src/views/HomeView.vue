<script setup>
import data from '@/assets/data.json';
import PosterItem from '@/components/PosterItem.vue';
import TopHeader from '@/components/TopHeader.vue';
import { ref } from 'vue';

const posters = ref(data.posters);

</script>

<template>
  <main>
    <TopHeader />
    <section class="posters">
      <PosterItem v-for="poster in posters" :key="poster.id" :poster="poster"/>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';

.posters {
  max-width: $maxWidth;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  padding: $padding;
}

</style>