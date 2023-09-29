<template>
    <button @click="toggleMobileNav" class="mobile-nav-toggle">
        <i :class="iconClass"></i>
    </button>
</template>

<script setup>
    const isMobileNavActive = ref(false);

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
</script>