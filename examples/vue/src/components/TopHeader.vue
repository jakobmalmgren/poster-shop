<script setup>

function scroll(){
    const h = window.innerHeight;
    window.scrollTo({ top: h, behavior: 'smooth' });
}

</script>
<template>
    <header class="top">
        <h1 @click="scroll">Poster shop</h1>
    </header>
</template>
<style lang="scss" scoped>
@import '@/assets/variables';
.top {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f6df7a;
    background-image: url('@/assets/ninjahead.svg');
    background-repeat: no-repeat;
    background-position:48% bottom;
    background-attachment: fixed;
    h1 {
        font-size: 4rem;
    }
}
</style>