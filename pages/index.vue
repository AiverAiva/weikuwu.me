<template>
  <CustomHeader />

  <Hero id="hero"/>
  <SkillPlaceholder />
</template>

<script>
  import Hero from './Hero.vue'
  import SkillPlaceholder from './SkillPlaceholder.vue';

  import CustomHeader from '~/components/CustomHeader.vue';

  export default {
    name: 'index',
    components: { 
      SkillPlaceholder,
      Hero,
    },
  }
</script>
