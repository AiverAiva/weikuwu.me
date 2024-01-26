<template>
    <div class="timeline">
      <div class="timeline-line">
        <div v-for="(month, index) in months" :key="index" class="timeline-point" @mouseover="showItem(index)">
          <div class="timeline-marker"></div>
        </div>
      </div>
      <div v-if="showItemIndex !== null" class="timeline-item">
        <TimelineItem :event="events[showItemIndex]" />
      </div>
    </div>
  </template>
  
  <script setup>
  import TimelineItem from '@/components/TimelineItem.vue';
  
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const events = [
    { date: '2021-01-01', title: 'Event 1', description: 'Description of Event 1' },
    { date: '2021-07-01', title: 'Event 2', description: 'Description of Event 2' },
    { date: '2021-12-01', title: 'Event 3', description: 'Description of Event 3' },
    { date: '2022-03-01', title: 'Event 4', description: 'Description of Event 4' },
    { date: '2022-06-01', title: 'Event 5', description: 'Description of Event 5' },
    { date: '2022-09-01', title: 'Event 6', description: 'Description of Event 6' },
    { date: '2022-12-01', title: 'Event 7', description: 'Description of Event 7' },
    { date: '2023-03-01', title: 'Event 8', description: 'Description of Event 8' },
  ];
  
  let showItemIndex = null;
  
  const showItem = (index) => {
    showItemIndex = index;
  };
  
  const hideItem = () => {
    showItemIndex = null;
  };
  </script>
  
  <style scoped>
  .timeline {
    position: relative;
    margin-bottom: 2rem;
  }
  
  .timeline-line {
    display: flex;
    align-items: center;
  }
  
  .timeline-point {
    position: relative;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
  
  .timeline-marker {
    width: 1rem;
    height: 1rem;
    background-color: #4a90e2; /* Use your preferred marker color */
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .timeline-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }
  </style>
  