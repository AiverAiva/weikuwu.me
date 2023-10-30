<template>
    <div class="fixed top-0 left-0 mt-4 ml-4 z-50">
        <nuxt-link to="/" aria-label="Home">
            <img :src="avatarImage" :alt="altText" :class="{ 'large-avatar': large, 'small-avatar': !large }"
                class="rounded-full bg-zinc-100 dark:bg-zinc-800 object-cover" priority /> 
        </nuxt-link>
    </div>
</template>
  
<script>

export default {
    props: {
        large: {
            type: Boolean,
            default: false,
        },
        altText: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            avatarImage: '/img/Avatar.png',
        };
    },
};
</script>
  
<style scoped>
.floating-avatar {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 999;
}

.large-avatar {
    width: 5rem;
    height: 5rem;
}

.small-avatar {
    width: 3rem;
    height: 3rem;
}
</style>
  