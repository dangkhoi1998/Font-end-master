<template>
  <div>
    <v-row class="mx-4">
      <v-col cols="12" lg="4">
        <material-chart-card
          :data="dailySalesChart.data"
          :options="dailySalesChart.options"
          color="info"
          type="Line"
        >
          <h4 class="title font-weight-light">Doanh số theo ngày</h4>
        </material-chart-card>
      </v-col>

      <v-col cols="12" lg="4">
        <material-chart-card
          :data="emailsSubscriptionChart.data"
          :options="emailsSubscriptionChart.options"
          :responsive-options="emailsSubscriptionChart.responsiveOptions"
          color="red"
          type="Bar"
        >
          <h4 class="title font-weight-light">Doanh số theo tháng</h4>
        </material-chart-card>
      </v-col>
      
      <v-col cols="12" lg="4">
        <material-chart-card
          :data="dataCompletedTasksChart.data"
          :options="dataCompletedTasksChart.options"
          color="green"
          type="Line"
        >
          <h3 class="title font-weight-light">Doanh số theo năm</h3>
        </material-chart-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dailySalesChart: {
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [[20, 17, 7, 17, 23, 18, 38]]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: [
            'Ja',
            'Fe',
            'Ma',
            'Ap',
            'Mai',
            'Ju',
            'Jul',
            'Au',
            'Se',
            'Oc',
            'No',
            'De'
          ],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          [
            'screen and (max-width: 640px)',
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      },
      tabs: 0,
      list: {
        0: false,
        1: false,
        2: false
      }
    }
  },
}
</script>
