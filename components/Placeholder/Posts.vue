<template>
    <!-- <ScrollReveal>
        <div id="posts">
            <div class="container mx-auto px-10 md:px-20 pb-6">
                <div class="flex flex-col md:flex-row gap-5 md:gap-10">
                    <div>
                        <h1 class="text-4xl font-bold mb-4">Posts</h1>
                    </div>
                </div>
                <h3 v-if="latestPosts.length === 0" class="text-3xl text-center font-sans mb-4 text-gray-800">No Posts
                    Found</h3>
                <PostContainer v-for="p in latestPosts" v-bind:key="p.slug" :post="p" :slug="p._path.split('/').pop()"
                    class="mb-4" />
                <div v-if="posts.length > 3" class="text-center mt-2">
                    <a href="/post" class="font-mono text-pink-500 hover:text-pink-700 no-underline">Show More <i
                            class='bx bxs-chevron-down'></i></a>
                </div>
            </div>
        </div>
    </ScrollReveal> -->
</template>

<script setup>
// import ScrollReveal from '../ScrollReveal.vue'

// const { data: posts } = await useAsyncData('post', () => queryContent('/post').find());
// const latestPosts = posts.value.slice(0, 3);
</script>