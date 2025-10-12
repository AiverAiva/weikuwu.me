<template>
    <div ref="scrollButton"
        class="absolute left-0 right-0 bottom-10 mx-auto mb-4 h-8 w-5 cursor-pointer rounded-full border-2 border-gray-300 text-center dark:border-gray-700 transition-opacity duration-500 ease-out"
        :style="{ opacity }" tabindex="0" @click="scrollToNextSection">
        <div
            class="absolute left-0 right-0 mx-auto w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700 animate-bounce-dot">
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"

const opacity = ref(1)
const scrollButton = ref<HTMLElement | null>(null)

const handleScroll = () => {
    const fadeStart = 0
    const fadeEnd = window.innerHeight / 10 // fade out by mid screen
    const scrollY = window.scrollY
    const fadeRange = fadeEnd - fadeStart

    if (scrollY <= fadeStart) opacity.value = 1
    else if (scrollY >= fadeEnd) opacity.value = 0
    else opacity.value = 1 - (scrollY - fadeStart) / fadeRange
}

const scrollToNextSection = () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
    })
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})
</script>

<style scoped>
@keyframes bounce-dot {
    0% {
        transform: translateY(0.3em);
        opacity: 1;
    }

    50% {
        transform: translateY(0.8em);
        opacity: 0.7;
    }

    100% {
        transform: translateY(0.3em);
        opacity: 1;
    }
}

.animate-bounce-dot {
    animation: bounce-dot 1.5s infinite ease-in-out;
}
</style>
