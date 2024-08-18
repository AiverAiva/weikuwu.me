<template>
    <div class="bg-white p-4 shadow-md rounded-md">
        <h1 class="text-3xl font-bold mb-2">{{ doc.title }}</h1>
        <p class="text-gray-600 text-sm mb-4">{{ doc.date }}</p>
        <p class="text-gray-700 mb-4">{{ doc.description }}</p>
        <nuxt-content :document="doc" class="prose max-w-none" />
    </div>
</template>
 
<script setup>
const { params } = useRoute();
const { data: doc } = await useAsyncData('document', () => queryContent(`/posts/${params.slug}`).findOne());
</script>