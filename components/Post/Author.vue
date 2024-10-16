<template>
    <div class="
        px-3
        py-1
        w-min
        text-sm
        font-semibold
        bg-gray-100 bg-opacity-50
        dark:bg-gray-700
        dark:text-light-800
        rounded-md
        mr-2
      ">
        <!-- <slot></slot> -->
        <a :href="`https://github.com/${author}`" rel="noreferrer" target="_blank">
            {{ author }}
        </a>
    </div>
</template>
<script setup>
const props = defineProps({
    author: {
        type: String,
        required: true,
    }
});
</script>