<template>
  <div id="skillsets" class="flex flex-col justify-center bg-gradient-to-b from-slate-50 to-pink-100">
    <div class="flex flex-col flex-grow pt-16 pb-20">
      <div class="flex items-center">
          <div class="w-3/2 mx-auto">
            <h2 class="text-5xl font-bold mb-4 text-left">uwu</h2>
            <p class="mb-8 text-left">owo</p>
          </div>
          <div class="w-3/1 mx-auto">
            <canvas ref="polygonCanvas" class="w-full" style="height: 180px;"></canvas>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Chart, RadarController, CategoryScale, PointElement, LineElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';

  Chart.register(RadarController, CategoryScale, PointElement, LineElement, Tooltip, Legend, RadialLinearScale);

  export default {
    mounted() {
      this.createChart();
    },
    methods: {
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
              // label: '',
              data: [70, 74, 55, 66, 38],
              // pointRadius: 1,
              backgroundColor: 'rgba(75, 192, 192, 0.4)', //point color
              borderColor: 'rgba(255, 192, 192, 1)', //line color
              pointBackgroundColor: 'rgba(255, 192, 192, 1)', //color inside the point\
              // hitRadius: 5,
              // pointBorderColor: '#fff', //color of the boarder of the point
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
              // position: 'bottom',
              // labels: {
              //   generateLabels: function(chart) {
              //     const original = Chart.overrides[chart.config.type].plugins.legend.labels.generateLabels;
              //     const labels = original(chart);

              //     labels.forEach(function(label) {
              //       label.pointStyle = 'none';
              //     });

              //     return labels;
              //   },
              // labels: {
              //   usePointStyle: "none",
              //   // point: {
              //   //   display: false,
              //   // },
              //   // },
              // },
            },  
            tooltip: {
              // enabled: false,
              // external: false,
              backgroundColor: 'rgba(35, 21, 34, 0.8)',
              titleColor: '#fff',
              // bodyColor: '#fff',
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
  canvas {
    max-width: 100%;
    height: auto;
  }
</style>