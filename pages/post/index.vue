<template>
    <PostContainer v-for="p in posts" v-bind:key="p.slug" :post="p.title" :slug="p._path.split('/').pop()" />
</template>
 
<script setup>
const { data: posts } = await useAsyncData('posts', () => queryContent('/posts').find());
</script>

<style scoped>
.post-container+.post-container {
    margin-top: 0.5em;
}
</style>