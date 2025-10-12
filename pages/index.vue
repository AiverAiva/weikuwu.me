<template>
  <!-- <NavigationBar /> -->
  <PlaceholderHero />
  <div class="custom-bg custom-bgdark pt-24 pb-64 space-y-12 loading-blur">
    <!-- <PlaceholderAbout /> -->
    <!-- <PlaceholderGame /> -->
    <PlaceholderSkills />
    <PlaceholderProjects />
    <!-- <PlaceholderPosts /> -->
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
