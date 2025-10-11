<template>
  <!-- <NavigationBar /> -->
  <PlaceholderHero />
  <div class="custom-bg loading-blur">
    <!-- <PlaceholderAbout /> -->
    <!-- <PlaceholderProject /> -->
    <!-- <PlaceholderGame /> -->
     <PlaceholderSkills />
    <!-- <PlaceholderPosts /> -->
    <!-- <Transition name="fade">
      <NuxtPage v-if="showModal" />
    </Transition> -->
  </div>

  <!-- <Experience /> -->
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const showModal = computed(() => route.path.startsWith('/project/'))

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
