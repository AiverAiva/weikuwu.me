<template>
    <div class="block p-6 rounded-lg shadow-md bg-white bg-opacity-30 transition duration-300 backdrop-filter backdrop-blur-lg hover:bg-opacity-10">
            <nuxt-link :to="`/posts/${slug}`">
                <h3 class="font-sans font-black text-2xl text-gray-800 mb-3 ">{{ title }}</h3>
                <div class="font-sans font-thin text-lg text-gray-600">{{ desc }}</div>
            </nuxt-link>
        </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: "Title"
    },
    desc: {
        type: String,
        default: "Description"
    },
    slug: {
        type: String,
        default: ""
    }
});
</script>
