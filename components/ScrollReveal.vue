<template>
    <div ref="revealRef" class="transition-all duration-700 ease-out" :class="isVisible
        ? 'opacity-100 blur-0 scale-100'
        : 'opacity-0 blur-md scale-90'">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const revealRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                isVisible.value = true
                observer.disconnect() // reveal once
            }
        },
        { threshold: 0.2 }
    )

    if (revealRef.value) observer.observe(revealRef.value)

    onUnmounted(() => observer.disconnect())
})
</script>

<style scoped>
/* optional: smoother blur transition */
.blur-md {
    filter: blur(10px);
}

.blur-0 {
    filter: blur(0px);
}
</style>
