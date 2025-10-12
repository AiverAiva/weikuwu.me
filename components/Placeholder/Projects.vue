<template>
    <ScrollReveal>
        <section id="my-stack" ref="containerRef" class="p-6 flex flex-col justify-center">
            <div class="container mx-auto px-10 md:px-20 pb-6">
                <!-- <section class="pb-section" id="selected-projects"> -->
                <!-- <div class="container"> -->
                <!-- <SectionTitle title="SELECTED PROJECTS" /> -->

                <div class="group/projects relative" ref="containerRef">
                    <div class="flex flex-col md:flex-row gap-5 md:gap-10">
                        <div>
                            <h1 class="text-4xl font-light mb-4">My Projects</h1>
                        </div>
                    </div>
                    <!-- Hover preview image -->
                    <div v-if="selectedProject"
                        class="max-md:hidden absolute right-0 top-0 z-[1] pointer-events-none w-[200px] xl:w-[350px] flex justify-center items-center opacity-0"
                        ref="imageContainer">
                        <img v-for="project in PROJECTS" :key="project.slug" :src="project.thumbnail" alt="Project"
                            class="max-w-full h-auto object-contain rounded-lg transition-all duration-500"
                            :class="{ 'opacity-0': project.slug !== selectedProject }" ref="imageRefs" />
                    </div>


                    <!-- Project list -->
                    <div class="flex flex-col max-md:gap-10" ref="projectListRef">
                        <Project v-for="(p, i) in PROJECTS" :key="p.slug" :index="i" :project="p"
                            :selectedProject="selectedProject" :onMouseEnter="handleMouseEnter" />
                    </div>
                </div>
            </div>
        </section>
    </ScrollReveal>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
// import SectionTitle from '~/components/SectionTitle.vue'
import Project from '../Project.vue'
import { PROJECTS } from '@/lib/data'
import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const containerRef = ref<HTMLElement | null>(null)
const projectListRef = ref<HTMLElement | null>(null)
const imageContainer = ref<HTMLElement | null>(null)
const imageRefs = ref<HTMLImageElement[]>([])
const selectedProject = ref<string | null>(PROJECTS[0].slug)

// Mouse move + hover logic
onMounted(() => {
    const el = containerRef.value
    if (!el) return

    if (window.innerWidth < 768) {
        selectedProject.value = null
        return
    }

    const handleMouseMove = (e: MouseEvent) => {
        if (!el || !imageContainer.value) return

        if (window.innerWidth < 768) {
            selectedProject.value = null
            return
        }

        const containerRect = el.getBoundingClientRect()
        const imageRect = imageContainer.value.getBoundingClientRect()
        const offsetTop = e.clientY - containerRect.y

        // Hide image if cursor leaves the container
        if (
            containerRect.y > e.clientY ||
            containerRect.bottom < e.clientY ||
            containerRect.x > e.clientX ||
            containerRect.right < e.clientX
        ) {
            gsap.to(imageContainer.value, {
                duration: 0.3,
                opacity: 0,
            })
            return
        }

        gsap.to(imageContainer.value, {
            y: offsetTop - imageRect.height / 2,
            duration: 1,
            opacity: 1,
        })
    }

    window.addEventListener('mousemove', handleMouseMove)

    onBeforeUnmount(() => {
        window.removeEventListener('mousemove', handleMouseMove)
    })

    // Scroll fade-in animation
    gsap.timeline({
        scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom 60%',
            scrub: 0.5,
            toggleActions: 'restart none none reverse',
        },
    }).from(el, { y: 150, opacity: 0 })
})

// Mouse enter to change selected project
function handleMouseEnter(slug: string) {
    if (window.innerWidth < 768) {
        selectedProject.value = null
        return
    }
    selectedProject.value = slug
}
</script>
