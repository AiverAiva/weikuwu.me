<template>
    <div class="fixed top-4 right-4 z-50">
        <button @click="toggleTheme" aria-label="Toggle dark mode" class="theme-switcher-button"
            :class="{ 'dark-mode-button': currentTheme === 'dark', 'light-mode-button': currentTheme === 'light' }">
            <i class="bx" :class="{ 'bx-sun': currentTheme === 'light', 'bx-moon': currentTheme === 'dark' }"></i>
        </button>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const currentTheme = ref('dark');

function toggleTheme() {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
}

watch(currentTheme, (newValue) => {
    console.log(newValue)
    if (newValue == "dark") {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});
</script>
  
<style scoped>
.theme-switcher-button {
    background-color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.dark-mode-button {
    background-color: #2d3748;
    color: #ffffff;
}

.dark-mode-button:hover {
    background-color: #3B4556;
}

.light-mode-button {
    background-color: #ffffff;
    color: #2d3748;
}

.light-mode-button:hover {
    background-color: #f1f1f1;
}
</style>
