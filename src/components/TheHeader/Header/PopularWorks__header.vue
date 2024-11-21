<template>
    <section>
        <section class="flex items-center gap-1" @click="toggleMenu">
            <a class="cursor-pointer pb-2">Популярное</a>
            <!-- <img :src="iconToDropMenu /public/icons/close.png" alt="iconToDropMenu" @click="changeIconDM" :class="{ 'hidden': !isMenuOpen }" class="mb-2 h-[22.4px] w-[19.2px]"> -->
            <img :src="iconClose" alt="close" :class="{ 'hidden': !isMenuOpen }" class="mb-2 cursor-pointer h-[22.4px] w-[19.2px]">
            <img class="mb-2 cursor-pointer h-[22.4px] w-[19.2px]" :class="{ 'hidden': isMenuOpen }" :src="iconTodown" alt="">
            <p id="gradientAnimTextHeader" class="absolute ml-[14.5vh] font-roboto hover:stroke-cyan-700 -rotate-[15deg] font-bold text-2xl">NEW</p>
        </section>

        <section class="absolute z-1 bg-slate-200" :class="{ 'hidden': !isMenuOpen }">
            <p class="pb-2 text-center font-light font-roboto border-b-2 border-gray-300">Авторские работы</p>
            <section class="grid gap-3 text-left">
                <button type="button" @click.stop="fetchData; openWindowDM">Работа1</button>
                <button type="button" @click.stop="fetchData; openWindowDM">Работа2</button>
                <button type="button" @click.stop="fetchData; openWindowDM">Работа3</button>
            </section>
        </section>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
// const isIconDM = ref(false)
const iconTodown = '/public/icons/todown.png';
const iconClose = '/public/icons/close.png';

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const fetchData = () => {
    console.log('Данные загружены');
};

const openWindowDM = () => {
    isMenuOpen.value = !isMenuOpen.value;
    console.log('Открытие окна для работ');
};

const changeIconDM = () => {
    if (isMenuOpen.value = !isMenuOpen.value) {
        iconTodown = ''
    } else if (isMenuOpen) {
        iconClose = ''
    }

};

</script>


<style>

#gradientAnimTextHeader {
    font-weight: bold;
    background-image: linear-gradient(-15deg, #ff0000, #ff7b00a2, #1100ff, #ff00f2);
    background-size: 100% 4000%;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text; 
    animation: gradientAnimation 3s ease infinite;
}

@keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 50% 100%; }
    100% { background-position: 100% 50%; }
}

</style>