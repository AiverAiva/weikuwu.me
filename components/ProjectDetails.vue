<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from '#imports'
import { ExternalLink, Github, ArrowLeft } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import ArrowAnimation from '@/components/ArrowAnimation.vue'
import TransitionLink from '~/components/TransitionLink.vue'
// import type { IProject } from '~/types'
import ScrollDownButton from './ScrollDownButton.vue'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  project: any
}
const props = defineProps<Props>()

const containerRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (!containerRef.value) return

  // Fade in sequence
  gsap.set('.fade-in-later', { autoAlpha: 0, y: 30 })
  const tl = gsap.timeline({ delay: 0.5 })
  tl.to('.fade-in-later', {
    autoAlpha: 1,
    y: 0,
    stagger: 0.1,
  })

  // Scroll blur & scale
  if (window.innerWidth >= 992) {
    gsap.to('#info', {
      filter: 'blur(3px)',
      autoAlpha: 0,
      scale: 0.9,
      scrollTrigger: {
        trigger: '#info',
        start: 'bottom bottom',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        scrub: 0.5,
      },
    })
  }

  // Parallax on images
  gsap.utils.toArray<HTMLDivElement>('#images > div').forEach((div, i) => {
    gsap.to(div, {
      backgroundPosition: 'center 0%',
      ease: 'none',
      scrollTrigger: {
        trigger: div,
        start: () => (i ? 'top bottom' : 'top 50%'),
        end: 'bottom top',
        scrub: true,
      },
    })
  })
})
</script>

<template>
  <section class="pt-5 pb-14 p-4">
    <div class='w-full' ref="containerRef">
      <TransitionLink back href="/" class="xl:ml-64 lg:ml-48 md:ml-8 ml-4 mb-16 inline-flex gap-2 items-center group h-12">
        <ArrowLeft class="group-hover:-translate-x-1 group-hover:text-primary transition-all duration-300" />
        Back
      </TransitionLink>

      <div id="info" class="mx-auto top-0 min-h-[calc(100svh-100px)] flex">
        <div class="relative w-full">
          <div class="flex items-start gap-6 mx-auto mb-10 max-w-[635px]">
            <h1 class="fade-in-later opacity-0 text-4xl md:text-[60px] leading-none">
              <span class="inline-block">{{ props.project.title }}</span>
            </h1>

            <div class="fade-in-later opacity-0 flex gap-2">
              <a
                v-if="props.project.sourceCode"
                :href="props.project.sourceCode"
                target="_blank"
                rel="noreferrer noopener"
                class="hover:text-primary"
              >
                <Github :size="30" />
              </a>

              <a
                v-if="props.project.liveUrl"
                :href="props.project.liveUrl"
                target="_blank"
                rel="noreferrer noopener"
                class="hover:text-primary"
              >
                <ExternalLink :size="30" />
              </a>
            </div>
          </div>

          <div class="max-w-[635px] space-y-7 pb-20 mx-auto">
            <div class="fade-in-later">
              <p class="text-muted-foreground mb-3">Year</p>
              <div class="text-lg">{{ props.project.year }}</div>
            </div>

            <div class="fade-in-later">
              <p class="text-muted-foreground mb-3">Tech & Technique</p>
              <div class="text-lg">{{ props.project.techStack.join(', ') }}</div>
            </div>

            <div class="fade-in-later">
              <p class="text-muted-foreground mb-3">Description</p>
              <div class="text-lg prose-xl markdown-text" v-html="props.project.description" />
            </div>

            <div v-if="props.project.role" class="fade-in-later">
              <p class="text-muted-foreground mb-3">My Role</p>
              <div class="text-lg" v-html="props.project.role" />
            </div>
          </div>

          <!-- <ArrowAnimation />
            -->
          <ScrollDownButton />
        </div>
      </div>

      <div id="images" class="fade-in-later relative flex flex-col gap-2 max-w-[800px] mx-auto">
        <div
          v-for="image in props.project.images"
          :key="image"
          class="group relative w-full aspect-[750/400] bg-background-light hover:scale-125 hover:z-20 transition-transform duration-500 rounded-lg overflow-hidden"
          :style="{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 50%',
            backgroundRepeat: 'no-repeat',
          }"
        >
          <a
            :href="image"
            target="_blank"
            class="absolute top-4 right-4 bg-background/70 text-foreground size-12 inline-flex justify-center items-center transition-all opacity-0 hover:bg-primary hover:text-primary-foreground group-hover:opacity-100"
          >
            <ExternalLink />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
