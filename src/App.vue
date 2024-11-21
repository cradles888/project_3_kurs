<template>
  <div>
    <TheHeader/>
    <main>
    <RouterView />
  </main>
  </div>
</template>

<script setup>
  import TheHeader from './components/TheHeader/TheHeader.vue';
  // import TheMain from './components/TheMain/TheMain.vue';
</script>

