<template>
  <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
  <div id="header" class="flex flex-col justify-center">
    <nav id="navbar" class="navbar nav-menu">
      <ul>
        <li><a href="#hero" :class="{active: activeSection === 'hero'}"><i class="bx bx-home"></i> <span>Home</span></a></li>
        <!-- <li><a href="#games" :class="{active: activeSection === 'games'}"><i class='bx bx-joystick'></i><span>Games</span></a></li> -->
      </ul>
    </nav>
  </div>

  
  <hero id="hero"/>
  <!-- <games id="games"/> -->
</template>

<script>
  import games from './games.vue'
  import hero from './hero.vue'

  export default {
    name: 'index',
    components: { 
      games,
      hero,
    },
    data() {
      return {
        activeSection: "hero",
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll() {
        const hero = document.querySelector('#hero')
        const games = document.querySelector('#games')

        if (this.isScrolledIntoView(hero)) {
          this.activeSection = 'hero'
        } else if (this.isScrolledIntoView(games)) {
          this.activeSection = 'games'
        }
      },
      isScrolledIntoView(el) {
        const rect = el.getBoundingClientRect()
        const elemTop = rect.top
        const elemBottom = rect.bottom

        const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight
        return isVisible
      },
    },
  }
</script>