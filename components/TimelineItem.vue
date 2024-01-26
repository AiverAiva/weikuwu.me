<template>
    <div class="timeline-item-content">
      <p class="text-gray-700">{{ event.date }}</p>
      <h3 class="text-lg font-semibold">{{ event.title }}</h3>
      <p class="text-gray-500">{{ event.description }}</p>
    </div>
  </template>
  
  <script setup>
  const { props } = defineProps(['event']);
  </script>
  
  <style scoped>
  .timeline-item-content {
    background-color: white;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  </style>
  