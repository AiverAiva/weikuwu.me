
<template>
    <nav id="navbar" class="navbar nav-menu">
        <ul>
            <li><a :class="{ active: activeSection === 'hero' }" @click="scrollToSection('hero')"><i class="bx bx-home"></i>
                    <span>Home</span></a></li>
            <li><a :class="{ active: activeSection === 'about' }" @click="scrollToSection('about')"><i
                        class='bx bx-id-card'></i><span>About</span></a></li>
        </ul>
    </nav>
</template>
  
<script>
export default {
    data() {
        return {
            activeSection: 'hero',
            sectionIds: ['hero', 'about'],
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            for (const sectionId of this.sectionIds) {
                const section = document.querySelector(`#${sectionId}`);
                if (this.isScrolledIntoView(section)) {
                    this.activeSection = sectionId;
                    break;
                }
            }
        },
        isScrolledIntoView(el) {
            if (!el) return false;
            const rect = el.getBoundingClientRect();
            return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        },
        scrollToSection(section) {
            const targetElement = document.querySelector(`#${section}`);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                });
                this.activeSection = section;
            }
        },
    },
};
</script>