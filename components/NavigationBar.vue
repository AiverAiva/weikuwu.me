<template>
    <nav id="navbar" class="navbar nav-menu">
        <ul>
            <li><a href="#hero" :class="{ active: activeSection === 'hero' }"><i class="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about" :class="{ active: activeSection === 'about' }"><i class='bx bx-id-card'></i><span>About</span></a></li>
            <!-- <li><a href="#games" :class="{active: activeSection === 'games'}"><i class='bx bx-joystick'></i><span>Games</span></a></li> -->
        </ul>
    </nav>
</template>


<script>

export default {
    data() {
        return {
            activeSection: "hero",
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            const hero = document.querySelector('#hero')
            const skillsets = document.querySelector('#about')

            if (this.isScrolledIntoView(hero)) {
                this.activeSection = 'hero'
            } else if (this.isScrolledIntoView(skillsets)) {
                this.activeSection = 'about'
            }
        },
        isScrolledIntoView(el) {
            const rect = el.getBoundingClientRect()
            const elemTop = rect.top
            const elemBottom = rect.bottom

            const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight
            return isVisible
        },
    },
}
</script>
