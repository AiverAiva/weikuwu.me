<template>
  <Hero />
  <div class="custom-bg">
    <About />
    <GamePlaceholder />
    <PostsPlaceholder />
  </div>
  
  <!-- <Experience /> -->
</template>

<script>
</script>

<style scoped>
.custom-bg {
  background: 
    url('/img/background-pattern.png'), 
    linear-gradient(to bottom, #f8fafc 0%, #fecdd3 100%);
  background-repeat: repeat;
  background-size: auto; /* or specify a size if needed */
  background-blend-mode:color-burn;
}

</style>  
