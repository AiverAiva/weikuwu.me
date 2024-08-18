<template>
    <!-- mobileview -->
    <button @click="toggleMobileNav" class="mobile-nav-toggle">
        <i :class="iconClass"></i>
    </button>
    <!-- desktopview -->
    <div id="header" class="flex flex-col justify-center">
        <nav id="navbar" class="navbar nav-menu ">
            <ul>
                <li v-for="section in sections" :key="section.id">
                    <a :class="{ active: activeSection === section.id }" @click="scrollToSection(section.id)">
                        <i :class="section.icon"></i>
                        <span>{{ section.name }}</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';

export default {
    setup() {
        const isMobileNavActive = ref(false);
        const activeSection = ref('hero');
        const sections = ref([
            { id: 'hero', name: 'Home', icon: 'bx bx-home' },
            { id: 'about', name: 'About', icon: 'bx bx-id-card' },
            { id: 'posts', name: 'Posts', icon: 'bx bx-align-left' },
        ]);

        const toggleMobileNav = () => {
            isMobileNavActive.value = !isMobileNavActive.value;
        };

        watch(isMobileNavActive, (newValue) => {
            if (newValue) {
                document.body.classList.add('mobile-nav-active');
            } else {
                document.body.classList.remove('mobile-nav-active');
            }
        });

        const iconClass = computed(() => {
            return isMobileNavActive.value ? 'bx bx-x' : 'bx bx-list-ul';
        });

        const handleScroll = () => {
            for (const section of sections.value) {
                const el = document.querySelector(`#${section.id}`);
                if (isScrolledIntoView(el)) {
                    activeSection.value = section.id;
                    break;
                }
            }
        };

        const isScrolledIntoView = (el) => {
            if (!el) return false;
            const rect = el.getBoundingClientRect();
            return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        };

        const scrollToSection = (sectionId) => {
            const targetElement = document.querySelector(`#${sectionId}`);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                activeSection.value = sectionId;
                // Close the mobile nav after clicking a link
                isMobileNavActive.value = false;
            }
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onBeforeUnmount(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            isMobileNavActive,
            toggleMobileNav,
            iconClass,
            activeSection,
            sections,
            handleScroll,
            scrollToSection,
        };
    },
};
</script>
