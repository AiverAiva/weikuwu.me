<template>
  <CustomHeader />

  <Hero id="hero"/>
  <About />
  <!-- <Experience /> -->
</template>

<script>
  import Hero from '~/components/placeholder/Hero.vue'
  import About from '~/components/placeholder/About.vue';
  // import Experience from '~/components/placeholder/Experience.vue';

  import CustomHeader from '~/components/CustomHeader.vue';

  export default {
    name: 'index',
    components: { 
      About,
      Hero,
      // Experience
    },
  }
</script>
