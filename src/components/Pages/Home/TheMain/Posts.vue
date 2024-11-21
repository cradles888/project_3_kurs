<template>
    <section class="grid grid-cols-5 gap-5">
        <section class="w-auto border-2 border-solid border-grey rounded-t-2xl rounded-b-2xl my-6">
            <section class="border-b-2 border-solid rounded-t-2xl border-grey bg-center px-[1vh] py-[4vh] bg-todoList bg-cover bg-no-repeat"></section>
            <section class="flex">
                <button id="favouritesButton__post" class="favouritesButton__post mb-[27vh]">
                    <img id="favourites__post" @click="favour" :src="favouritPost"
                    
                        class="icon favourites-null absolute ml-[25vh] mt-[2.5vh] cursor-pointer" alt=""
                        width="16px">
                </button>
                <section class="px-[3vh] grid">
                    <p class="mr-[2vh] py-[2vh] text-sm font-roboto text-justify">Todo List – это список дел,
                        которые
                        вам нужно выполнить или того, что вы хотите сделать.
                        Традиционно их пишут на листке бумаги и организовывают в порядке приоритета. При выполнении задачи,
                        её
                        обычно вычеркивают из списка.</p>
                    <button type="button" class="flex justify-self-start bg-[#256eff] text-stone-100 font-roboto text-lg px-3 my-3 py-1 rounded-md">Читать →</button>
                </section>
            </section>
        </section>
    </section>
</template>

<script setup>

import { ref } from 'vue';

    const favouritPost = ref('/image_to_posts/favourites.png')
    const favour = () => {
        if (favouritPost.value === '/image_to_posts/favourites.png') {
            favouritPost.value = '/image_to_posts/favourites_active.png'
        } else if (favouritPost.value === '/image_to_posts/favourites_active.png') {
            favouritPost.value = '/image_to_posts/favourites.png'
        }
    } 
</script>

<style scoped>

.visible {
    display: block;
}

</style>