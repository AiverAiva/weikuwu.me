<template>
    <div class="card w-auto rounded-xl grow bg-slate-50 shadow-lg  mb-4">
        <div class="card-body gap-0" :class="class">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{ title }}</div>
                <p class="text-gray-700 text-base"><slot></slot></p>
            </div>
            <!-- <h1 class="card-title text-2xl font-bold">{{ title }}</h1>
            <slot name="title"></slot> -->
            
        </div>
    </div>
</template>
  
<script setup lang="ts">
const props = withDefaults(defineProps<{
    title?: string;
    class?: string;
}>(), {
    title: "",
    class: ""
})
</script>