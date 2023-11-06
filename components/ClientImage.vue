<template>
    <ClientOnly>
      <img :src="src" :class="class" />
    </ClientOnly>
  </template>
  
  <script>
  export default {
    props: {
      src: {
        type: String,
        default: "",
      },
      class: {
        type: String,
        default: "",
      }
    },
  };
  </script>