<!-- //
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               佛祖保佑         永無BUG
//
// -->

<template>
  <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
  <div id="header" class="flex flex-col justify-center">
    <nav id="navbar" class="navbar nav-menu">
      <ul>
        <li><a href="#hero" :class="{active: activeSection === 'hero'}"><i class="bx bx-home"></i> <span>Home</span></a></li>
        <li><a href="#skillsets" :class="{active: activeSection === 'skillsets'}"><i class='bx bx-id-card'></i><span>Skillsets</span></a></li>
        <!-- <li><a href="#games" :class="{active: activeSection === 'games'}"><i class='bx bx-joystick'></i><span>Games</span></a></li> -->
      </ul>
    </nav>
  </div>

  <hero id="hero"/>
  <skillsets id="skillsets"/>
  <!-- <games id="games"/> -->
</template>

<script>
  import games from './games.vue'
  import hero from './hero.vue'
  import skillsets from './skillsets.vue'

  export default {
    name: 'index',
    components: { 
      games,
      hero,
      skillsets
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
        const skillsets = document.querySelector('#skillsets')

        if (this.isScrolledIntoView(hero)) {
          this.activeSection = 'hero'
        } else if (this.isScrolledIntoView(skillsets)) {
          this.activeSection = 'skillsets'
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

