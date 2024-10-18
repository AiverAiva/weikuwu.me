<template>
    <a :href="href">
        <button
            class="text-slate-800 font-mono py-1 px-3 rounded hover:bg-opacity-65 hover:bg-red-200 transition m-2 dark:text-slate-100">
            &larr; Back
        </button>
    </a>
</template>

<script setup>
const props = defineProps({
    href: {
        type: String,
        default: ""
    }
});
</script>