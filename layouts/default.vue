<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'

const transitionRef = ref<HTMLElement | null>(null)
const innerRef = ref<HTMLElement | null>(null)
const router = useRouter()

async function playTransition() {
    await nextTick()
    if (!transitionRef.value || !innerRef.value) return

    const tl = gsap.timeline()
    gsap.set(transitionRef.value, { yPercent: 0 })
    gsap.set(innerRef.value, { yPercent: 100 })

    tl.to(innerRef.value, { yPercent: 0, duration: 0.2 })
        .to(innerRef.value, { yPercent: -100, duration: 0.2 })
        .to(transitionRef.value, { yPercent: -100 })
}

onMounted(() => {
    playTransition()
    watch(() => router.currentRoute.value.fullPath, playTransition)
})
</script>

<template>
    <div class="antialiased">
        <div ref="transitionRef"
            class="page-transition w-screen h-screen fixed top-0 left-0 bg-background-light z-[999]">
            <div ref="innerRef"
                class="page-transition--inner w-screen h-screen fixed top-0 left-0 bg-primary z-[1000] translate-y-full">
            </div>
        </div>

        <slot />
    </div>
</template>
