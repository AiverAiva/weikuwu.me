<template>
  <div id="about" class="flex flex-col flex-grow pt-16 pb-20 justify-center">
    <!-- <div class="flex items-center"> -->
    <div class="container mx-auto px-10 md:px-20">
      <!-- start from here -->
      <div class="flex flex-col md:flex-row gap-5 mb-4 md:gap-10">
        <div>
          <h1 class="text-4xl font-bold text-center">About Me</h1>
        </div>
      </div>
      <!-- md:gap-5 -->
      <div class="flex flex-col md:flex-row gap-5 ">
        <div class="w-full md:w-1/3 ">
          <Card title="Languages">
            <canvas ref="polygonCanvas" class="w-full h-full"></canvas>
            <!-- <div class="flex flex-col gap-2 mt-3">
              <div class="w=1/2">

              </div>
              
            </div> -->
          </Card>
        </div>
        <Card title="依綾超可愛">
          <div class="flex flex-col gap-2 mt-3">
            <img src="https://cdn.discordapp.com/emojis/1227305381760340049.png?size=96&quality=lossless" alt="catbo"  class="w-24 h-24">
          </div>
        </Card>
        <!-- <div class="w-2/3" >
          
        </div> -->


      </div>

      <!-- <div class="flex flex-col md:flex-row gap-5 md:gap-y-10">
        <Card class="p-4">
          <ClientImage
            :src="'https://github-readme-stats.vercel.app/api?username=AiverAiva&show_icons=true&theme=dracula&border_radius=8&icon_color=df648c&text_color=718096&hide_title=true&hide_border=true&bg_color=none'"
            class="rounded-xl" />
        </Card>
        <Card class="p-4">
          <div class="flex items-center h-full">
            <ClientImage
              :src="'https://github-readme-stats-jrzz.vercel.app/api/top-langs?username=AiverAiva&layout=compact'"
              class="rounded-xl w-full" />
          </div>
        </Card>
      </div> -->

      <!-- <div class="flex flex-col md:flex-row gap-5 md:gap-10"> -->



      <!-- </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>
  
<script>
import { Chart, RadarController, PointElement, LineElement, Tooltip, Legend, RadialLinearScale } from 'chart.js/auto';
import Card from '~/components/Card.vue'
import ClientImage from '~/components/ClientImage.vue'
import StackedCard from '~/components/StackedCard.vue'

Chart.register(RadarController, PointElement, LineElement, Tooltip, Legend, RadialLinearScale);

export default {
  // components: {
  //   Card
  // },
  mounted() {
    this.createChart();
    // window.addEventListener('resize', this.resizeCanvas);
    // this.resizeCanvas();
  },
  // beforeDestroy() {
  //   window.removeEventListener('resize', this.resizeCanvas);
  // },

  methods: {
    // resizeCanvas() {
    //   const canvas = this.$refs.polygonCanvas;
    //   const card = canvas.parentElement;
    //   canvas.width = card.clientWidth;
    //   canvas.height = card.clientHeight;

    //   this.createChart()
    // },
    createChart() {
      const canvas = this.$refs.polygonCanvas;
      if (!canvas) {
        console.error('Chart canvas element not found.');
        return;
      }
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        console.error('Failed to get 2D context for the chart canvas.');
        return;
      }

      new Chart(ctx, {
        type: RadarController.id,
        data: {
          labels: ['Python', 'JavaScript', 'Kotlin', 'C++', "Rust"],
          datasets: [
            {
              data: [70, 74, 55, 66, 38],
              backgroundColor: 'rgba(255, 192, 192, 0.4)', //point color
              borderColor: 'rgba(255, 192, 192, 1)', //line color
              pointBackgroundColor: 'rgba(255, 192, 192, 1)', //color inside the point\
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(255, 192, 192, 1)',
            },
          ],
        },
        options: {
          scales: {
            r: {
              angleLines: {
                display: false,
              },
              suggestedMin: 0,
              suggestedMax: 100,
              ticks: {
                stepSize: 20,
                font: {
                  size: 0,
                },
                backdropColor: 'rgba(255, 255, 255, 0)',
              },
              grid: {
                color: 'rgba(255, 191, 214, 0.6)',
              },
            },
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(35, 21, 34, 0.8)',
              titleColor: '#fff',
              padding: 10,
              displayColors: false,
              titleMarginBottom: 0,
              titleFont: {
                size: 20,
              },
              bodyFont: {
                size: 0,
              },
            },
          },
        },
      });
    }
  },
};
</script>
  
<style>
/* canvas {
  max-width: 100%;
  height: auto;
} */
</style>