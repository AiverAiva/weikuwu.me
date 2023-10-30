<template>
    <MobileNavBar />
    <div id="header" class="flex flex-col justify-center">
        <NavigationBar />
    </div>
</template>
  
<script>
import MobileNavBar from '~/components/MobileNavBar.vue';
import NavigationBar from '~/components/NavigationBar.vue';

</script>
  
<script setup>
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
  