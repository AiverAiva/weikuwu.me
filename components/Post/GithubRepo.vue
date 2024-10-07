<template>
    <div
        class="flex items-center justify-between text-gray-800 border border-gray-400 bg-white max-w-sm font-mono text-sm py-3 px-4 w-[250px] rounded-md">
        <i class='bx bxl-github text-2xl'/>
        <div class="flex gap-1">
            <span class="text-left">{{ user }}/{{ repo }}</span>
        </div>
        <a target="_blank" :href="`https://github.com/${user}/${repo}`" class="flex text-gray-800 cursor-pointer w-5 h-5 hover:text-gray-400 duration-200">
            <!-- bx-tada somehow doesnt work with tailwind css hover event -->
            <i class='bx bx-link text-2xl' 
            :class="{ 'bx-tada': isHovered }"
            @mouseover="isHovered = true"
            @mouseleave="isHovered = false"/>
        </a>
    </div>
    
</template>
<script setup>
const isHovered = ref(false)
const props = defineProps({
    user: {
        type: String,
        required: true,
    },
    repo: {
        type: String,
        required: true,
    }
});
</script>
<style lang="">

</style>