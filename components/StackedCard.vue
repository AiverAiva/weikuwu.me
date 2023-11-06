<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" :src="imageUrl" :alt="altText">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ title }}</div>
            <p class="text-gray-700 text-base">{{ description }}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span v-for="tag in tags" :key="tag"
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ tag
                }}</span>
        </div>
    </div>
</template>
  
<script setup>
const props = defineProps({
    imageUrl: String,
    altText: String,
    title: String,
    description: String,
    tags: Array
});
</script>
  
<!-- <StackedCard imageUrl="/img/Avatar.png" 
            altText="Sunset in the mountains" 
            title="The Coldest Sunset"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
        :tags="['#photography', '#travel', '#winter']" 
/> -->