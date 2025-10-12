<template>
    <RouterLink v-bind="$attrs" :to="props.to || ''" custom v-slot="{ navigate }">
        <a href="#" @click.prevent="handleLinkClick(navigate)">
            <slot />
        </a>
    </RouterLink>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import gsap from 'gsap'

interface Props {
    to?: string
    back?: boolean
}

const props = defineProps<Props>()
const router = useRouter()

function handleLinkClick(navigate: () => void) {
    gsap.set('.page-transition', { yPercent: 100 })
    gsap.set('.page-transition--inner', { yPercent: 100 })

    gsap.to('.page-transition', {
        yPercent: 0,
        duration: 0.3,
        onComplete: () => {
            if (props.back) router.back()
            else if (props.to) navigate() // equivalent to router.push(props.to)
        },
    })
}
</script>
