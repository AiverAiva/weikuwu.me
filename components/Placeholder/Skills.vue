<template>
    <section id="my-stack" ref="containerRef" class="p-6 pt-12 flex flex-col justify-center">
        <div class="container mx-auto px-10 md:px-20 pb-6">
            <ScrollReveal>
                <div class="flex flex-col md:flex-row gap-5 md:gap-10">
                    <div>
                        <h1 class="text-4xl font-light mb-4">Tech Stacks</h1>
                    </div>
                </div>
            </ScrollReveal>
            <div class="space-y-20">
                <div v-for="(value, key) in MY_STACK" :key="key">
                    <ScrollReveal>
                        <div class="grid sm:grid-cols-12">
                            <div class="sm:col-span-5">
                                <p
                                    class="slide-up text-2xl font-extralight leading-none text-muted-foreground uppercase">
                                    {{ key }}
                                </p>
                            </div>

                            <div class="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
                                <div v-for="item in value" :key="item.name"
                                    class="slide-up flex gap-3.5 items-center leading-none">
                                    <img :src="getIconUrl(item.name, item.icon)" :alt="item.name" width="40" height="40"
                                        class="max-h-10" />
                                    <span class="text-2xl font-extralight capitalize">{{ item.name }}</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { MY_STACK } from '@/lib/data'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const containerRef = ref<HTMLElement | null>(null)

function getIconUrl(name: string, icon: string) {
    const customIcons: Record<string, string> = {
        'Nuxt.js': 'https://raw.githubusercontent.com/nuxt/modules/main/icons/nuxt.svg',
        'CSS3': 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png',
        'Java': 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
        'AWS': 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png',
    }

    if (customIcons[name]) {
        return customIcons[name]
    }

    return `https://cdn.simpleicons.org/${icon}`
}

onMounted(() => {
    const el = containerRef.value
    if (!el) return

    const slideUpEls = el.querySelectorAll('.slide-up')
    if (!slideUpEls.length) return

    // === Slide-up animation ===
    gsap.timeline({
        scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: 0.5,
        },
    }).from(slideUpEls, {
        opacity: 0,
        y: 40,
        ease: 'none',
        stagger: 0.4,
    })

    // === Fade-out + move-up animation ===
    gsap.timeline({
        scrollTrigger: {
            trigger: el,
            start: 'bottom 50%',
            end: 'bottom 10%',
            scrub: 1,
        },
    }).to(el, {
        y: -150,
        opacity: 0,
    })
})
</script>

<style scoped></style>
