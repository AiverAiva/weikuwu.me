<template>
    <div class="block p-6 rounded-lg shadow-md bg-white bg-opacity-30 transition duration-300 backdrop-filter backdrop-blur-sm hover:bg-opacity-10 hover:shadow-lg">
        <nuxt-link :to="`/post/${slug}`" class="flex gap-4 items-start">
            <div class="w-1/3">
                <img 
                    v-if="post.thumbnail" 
                    :src="post.thumbnail" 
                    alt="Thumbnail" 
                    class="w-full h-40 object-cover rounded-lg image-smooth hover:scale-105"
                />
                <img 
                    v-else 
                    src="/img/placeholder.jpg?url" 
                    alt="Placeholder" 
                    class="w-full h-40 object-cover rounded-lg image-smooth hover:scale-105"     
                />
            </div>
            <div class="flex-grow">
                <div 
                    v-if="post.date" 
                    class="font-sans font-thin text-sm text-gray-500 relative h-5"
                    @mouseover="hover = true" 
                    @mouseleave="hover = false"
                >
                    <span
                        class="absolute inset-0 transition-opacity duration-300"
                        :class="{ 'opacity-0': hover, 'opacity-100': !hover }"
                    >
                        {{ formattedDate }}
                    </span>

                    <span
                        class="absolute inset-0 transition-opacity duration-300"
                        :class="{ 'opacity-100': hover, 'opacity-0': !hover }"
                    >
                        {{ daysAgo + ' days ago' }}
                    </span>
                </div>
                <h3 class="font-sans font-black text-2xl text-gray-800 mb-3">{{ post.title }}</h3>
                <div class="font-sans font-thin text-lg text-gray-600 mb-2">{{ post.description }}</div>
            </div>
        </nuxt-link>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const hover = ref(false);

const props = defineProps({
    post: {
        type: Object,
        required: true
    },
    slug: {
        type: String,
        default: ""
    }
});

// Ensure the date is passed properly and parsed
const parsedDate = computed(() => {
    const dateObj = new Date(props.post.date);
    if (isNaN(dateObj.getTime())) {
        console.error("Invalid date passed to PostContainer:", props.post.date);
        return new Date(); // Fallback to current date
    }
    return dateObj;
});

// Format the date to a readable format (e.g., "September 29, 2024")
const formattedDate = computed(() => {
    return parsedDate.value.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
});

// Calculate how many days ago the post was created
const daysAgo = computed(() => {
    const today = new Date();
    const timeDiff = today - parsedDate.value;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return days;
});
</script>

<style scoped>
.image-smooth {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
    border-radius: 0.5rem;
    image-rendering: auto;
    backface-visibility: hidden; 
}
</style>
