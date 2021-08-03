<script>
  import { Line } from 'vue3-chart-v2'

  export default {
    name: 'Chart',

    extends: Line,

    props: {
      dataTable: {
        required: true,
        type: Array,
      },
    },

    data () {
      return {
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: true
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        },

        color: [
          'rgba(96, 9, 198, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(217, 112, 8, 1)',
          'rgba(37, 84, 255, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(237, 14, 61, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      }
    },

    methods: {
      chart() {
        //If the chart has been drawn, then clear the area for a new chart drawing
        if (this.$data.state.chartObj && this.$data.state.chartObj.destroy) {
          this.$data.state.chartObj.destroy()
        }

        //This function generates parameters for the chart from dataTable
        var dataChart = () => {
          var datasets = []

          for (var k = 0; k < this.dataTable[0].reach.length; k++) {
            let item = {}
            let reach =[]

            for (var j of this.dataTable) {
              reach.push(j.reach[k])
            }

            item = {
              label: `Reach%${k+1}+`,
              data: reach,
              fill: false,
              borderColor: this.color[k],
              backgroundColor: this.color[k],
              borderWidth: 1
            }
            datasets.push(item)
          }
          return datasets
        }

        //Render chart
        this.renderChart({
          labels: this.dataTable.map(i => i.unit),

          datasets: dataChart()
        }, this.options)
      },
    },

    mounted() {
      this.chart()
    },

    beforeUnmount() {
      if (this.$data.state.chartObj && this.$data.state.chartObj.destroy) {
        this.$data.state.chartObj.destroy()
      }
    },
  }
</script>
