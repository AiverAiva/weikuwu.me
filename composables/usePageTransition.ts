import { nextTick } from 'vue'
import gsap from 'gsap'

export async function usePageTransition(transition: HTMLElement | null, inner: HTMLElement | null) {
  await nextTick()
  if (!transition || !inner) return

  const tl = gsap.timeline()
  gsap.set(transition, { yPercent: 0 })
  gsap.set(inner, { yPercent: 100 })

  tl.to(inner, { yPercent: 0, duration: 0.25 })
    .to(inner, { yPercent: -100, duration: 0.25 })
    .to(transition, { yPercent: -100 })
}
