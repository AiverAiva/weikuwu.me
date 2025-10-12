<template>
  <TransitionLink :to="`/projects/${project.slug}`"
    class="project-item group leading-none py-5 md:border-b first:!pt-0 last:pb-0 last:border-none md:group-hover/projects:opacity-30 md:hover:!opacity-100 transition-all"
    @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <!-- <img v-if="!selectedProject" :src="project.thumbnail" alt="Project"
      :class="cn('w-full object-cover mb-6 object-top')" loading="lazy" /> -->
    <img v-if="!selectedProject" :src="project.thumbnail" alt="Project"
      class="w-full h-auto max-h-[80vh] object-contain mb-6 rounded-lg" loading="lazy" />
    <div class="flex gap-2 md:gap-5">
      <div class="text-muted-foreground">
        {{ (index + 1).toString().padStart(2, '0') }}.
      </div>
      <div>
        <h4
          class="text-4xl xs:text-6xl flex gap-4 transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
          {{ project.title }}
          <span class="text-foreground opacity-0 group-hover:opacity-100 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              ref="externalLinkSVGRef">
              <path id="box" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <path id="arrow-line" d="M10 14 21 3"></path>
              <path id="arrow-curb" d="M15 3h6v6"></path>
            </svg>
          </span>
        </h4>

        <div class="mt-2 flex flex-wrap gap-3 text-muted-foreground text-xs">
          <template v-for="(tech, idx) in project.techStack.slice(0, 3)" :key="tech">
            <div class="gap-3 flex items-center">
              <span>{{ tech }}</span>
              <span v-if="idx !== project.techStack.slice(0, 3).length - 1"
                class="inline-block size-2 rounded-full bg-background-light"></span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </TransitionLink>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'
import { cn } from '@/lib/utils'
import TransitionLink from '~/components/TransitionLink.vue'
// import type { IProject } from '@/types'

interface Props {
  index: number
  project: any
  selectedProject: string | null
  onMouseEnter: (slug: string) => void
}

const props = defineProps<Props>()

const externalLinkSVGRef = ref<SVGSVGElement | null>(null)
let hoverTimeline: gsap.core.Timeline | null = null

function handleMouseEnter() {
  props.onMouseEnter(props.project.slug)

  const svg = externalLinkSVGRef.value
  if (!svg) return

  const arrowLine = svg.querySelector('#arrow-line') as SVGPathElement
  const arrowCurb = svg.querySelector('#arrow-curb') as SVGPathElement
  const box = svg.querySelector('#box') as SVGPathElement

  if (!arrowLine || !arrowCurb || !box) return

  // Prepare SVG paths
  gsap.set([box, arrowLine, arrowCurb], {
    opacity: 0,
    strokeDasharray: (i, target) => (target as SVGPathElement).getTotalLength(),
    strokeDashoffset: (i, target) => (target as SVGPathElement).getTotalLength(),
  })

  // Looping animation
  hoverTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1 })
  hoverTimeline
    .to(svg, { autoAlpha: 1 })
    .to(box, { opacity: 1, strokeDashoffset: 0 })
    .to(arrowLine, { opacity: 1, strokeDashoffset: 0 }, '<0.2')
    .to(arrowCurb, { opacity: 1, strokeDashoffset: 0 })
    .to(svg, { autoAlpha: 0 }, '+=1')
}

function handleMouseLeave() {
  if (hoverTimeline) {
    hoverTimeline.kill()
    hoverTimeline = null
  }
}
</script>