<template>
    <div class="fixed top-4 left-4 z-50">
        <button @click="toggleTheme" aria-label="Toggle dark mode" class="theme-switcher-button"
            :class="{ 'dark-mode-button': currentTheme === 'dark', 'light-mode-button': currentTheme === 'light' }">
            <i class="bx" :class="{ 'bx-sun': currentTheme === 'light', 'bx-moon': currentTheme === 'dark' }"></i>
        </button>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const currentTheme = ref('light');

function toggleTheme() {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
}

watch(currentTheme, (newValue) => {
    console.log(newValue)
    if (newValue == "dark") {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});
</script>
  
