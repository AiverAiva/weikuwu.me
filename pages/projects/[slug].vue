<script setup lang="ts">
import { useRoute, useHead, createError } from '#imports'
import ProjectDetails from '@/components/ProjectDetails.vue'
import { PROJECTS } from '~/lib/data'

definePageMeta({
  layout: 'default'
})

// Get route params (Nuxt auto exposes them)
const route = useRoute()
const slug = route.params.slug as string

// Find project by slug
const project = PROJECTS.find(p => p.slug === slug)

// Handle not found
if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Project Not Found' })
}

// Set page metadata
useHead({
  title: `${project.title} - ${project.techStack.slice(0, 3).join(', ')}`,
  meta: [
    { name: 'description', content: project.description },
  ],
})
</script>

<template>
  <ProjectDetails v-if="project" :project="project" />
</template>
