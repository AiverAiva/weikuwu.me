<template>
  <NavigationBar />
  <PlaceholderHero />
  <div class="custom-bg loading-blur">
    <PlaceholderAbout />
    <PlaceholderGame />
    <PlaceholderPosts />
  </div>

  <!-- <Experience /> -->
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'home'
})
</script>

<style scoped>
.custom-bg {
  background:
    url('/img/background-pattern.png'),
    linear-gradient(to bottom, #f8fafc 0%, #fecdd3 100%);
  background-repeat: repeat;
  background-size: auto;
  background-blend-mode: color-burn;
}
</style>
