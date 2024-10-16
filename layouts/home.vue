<template>
    <NuxtPage />
</template>

<script setup>
onMounted(() => {
  document.body.classList.remove('dark');
})

useSeoMeta({
    url: 'https://weikuwu.me',
    title: 'AiverAiva',
    ogTitle: 'AiverAiva',
    description: 'I\'m a student from Taiwan :3',
    ogDescription: 'I\'m a student from Taiwan :3',
    theme_color: "#ffb3c6",      
    ogImage: '/img/thumbnail.png',
    // twitterCard: 'summary_large_image',
})
</script>

<style scoped>
:global(html, body) {
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

:global(html::-webkit-scrollbar) {
  display: none;
}
</style>