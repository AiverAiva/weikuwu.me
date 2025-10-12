<template>
    <!-- <div class="
        w-screen
        h-screen
        fixed
        top-0
        left-0
        z-10
        bg-gray-200 
        bg-opacity-50
        dark:bg-slate-900
        flex
        justify-center
        items-center
        duration-150
      ">
        <ThemeSwitcher />
        <ButtonBack href="/"/>
        <div class="
          w-full
          max-w-screen-lg
          overflow-y-auto
          bg-white
          dark:bg-slate-800
          p-6
          mx-4
          rounded-xl
          shadow-lg
          duration-150
        " style="max-height: calc(80vh)">
            <PostContainer v-for="p in posts" v-bind:key="p.slug" :post="p" :slug="p._path.split('/').pop()" />
        </div>
    </div> -->
</template>
 
<script setup>
// const { data: posts } = await useAsyncData('post', () => queryContent('/post').find());

// onMounted(() => {
//     document.body.classList.add('dark');
// })
</script>

<style scoped>
.post-container+.post-container {
    margin-top: 0.5em;
}
</style>