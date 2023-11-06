<template>
  <CustomHeader />

  <Hero id="hero"/>
  <About />
</template>

<script>
  import Hero from './Hero.vue'
  import About from './About.vue';

  import CustomHeader from '~/components/CustomHeader.vue';

  export default {
    name: 'index',
    components: { 
      About,
      Hero,
    },
  }
</script>
