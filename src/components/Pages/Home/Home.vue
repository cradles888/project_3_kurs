<template>
    <main class="grid gap-[5vh] pt-[1.5vh] items-center">
        <TheHeader/>
       <WarningMess__main/>
       <Posts/>
    </main>
</template>

<script setup>
// import { ref } from 'vue';
import TheHeader from '../../TheHeader/TheHeader.vue';
import WarningMess__main from './TheMain/WarningMess__main.vue';
import Posts from './TheMain/Posts.vue';

// if (header && main && footer) {
//     warningMessage.className = "";
//     warningMessage.style.display = 'none';
// }
</script>
    
<style scoped>
</style>
