<template>
    <header class="flex gap-[5vh] pt-[2.5vh] items-center" key="header">
        <section>
            <h1 class="text-2xl font-light font-roboto pr-[5vh] border-r-2">ДОКУМЕНТАЦИЯ РАБОТ</h1>
        </section>
        <nav class="flex gap-[32vh] font-roboto font-normal">
            <section class="flex gap-[7vh]">
                <a class="pb-2" id="homeLink" href="/src/index.html">Главная</a>
                <a class="pb-2" id="codengLink" href="/src/sandbox/index.html">Песочница</a>
                <a class="pb-2" href="">Пусто</a>
                <a class="pb-2" href="">Пусто</a>
                <section>
                    <PopularWorks__header/>
                </section>
            </section> <!-- Это место нужно исправить -->
            <section class="flex gap-[10vh]">
                <a href="">Пусто</a>
                <a href="">Пусто</a>
            </section>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import PopularWorks__header from './PopularWorks__header.vue';




const isMenuOpen = ref(false);

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}

function fetchData() {
    // Ваша логика здесь
}

function openWindowDM() {
    // Ваша логика здесь
}

</script>

<style scoped>

.hidden {
    display: none;
}

#gradientAnimTextHeader {
    font-weight: bold;
    background-image: linear-gradient(-15deg, #ff0000, #ff7b00a2, #1100ff, #ff00f2);
    background-size: 100% 4000%;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text; /* Для Safari */
    animation: gradientAnimation 3s ease infinite;
}

@keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 50% 100%; }
    100% { background-position: 100% 50%; }
}
</style>
