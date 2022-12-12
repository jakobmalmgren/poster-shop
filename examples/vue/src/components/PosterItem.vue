<script setup>
import { defineProps, computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps(['poster']);
const router = useRouter();

const posterImg = computed(() => {
    return new URL(`/src/assets/char-${props.poster.id}.png`, import.meta.url)
})

async function go($event) {
    $event.target.classList.add('animate');
    await router.push(`/posters/${props.poster.id}`);
    $event.target.classList.remove('animate');
}
</script>
<template>
    <article class="poster-item" @click="go">
        <img :src="posterImg" :alt="poster.title" />
        <h2>{{poster.title}}</h2>
        <p>{{poster.desc}}</p>
    </article>
</template>
<style lang="scss" scoped>
@import '@/assets/variables';
.poster-item {
    padding: calc($padding * 0.5);
    transition: all .2s ease;
    border-radius: .5rem;

    img {
        width: 100%;
        border-radius: .25rem;
        
        &.animate {
            view-transition-name: single-poster;
            contain: layout;
        }
    }

    h2 {
        margin: .5rem 0;
    }

    p {
        margin: .5rem 0;
        font-size: 1rem;
        line-height: 140%;
        font-weight: 300;
    }

    &:hover {
        background-color: rgba($color: #222, $alpha: .06);
        cursor: pointer;
    }
}


</style>