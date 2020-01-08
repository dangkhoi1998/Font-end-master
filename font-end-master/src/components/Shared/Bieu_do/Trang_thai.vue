<template>
 <material-card color="orange" title="Trạng thái" text>
   <v-widget title="Top Location" content-bg="white">
    <div slot="widget-content">
      <e-chart
        :path-option="[
          ['dataset.source', locationData],
          ['legend.bottom', '0'],
          [
            'color',
            [
              color.red.base,
              color.pink.base,
              color.green.base,
              color.cyan.base,
            ]
          ],
          ['xAxis.show', false],
          ['yAxis.show', false],
          ['series[0].type', 'pie'],
          ['series[0].avoidLabelOverlap', true],
          ['series[0].radius', ['50%', '70%']]
        ]"
        height="400px"
        width="100%"
      >
      </e-chart>
    </div>
  </v-widget>
 </material-card>
</template>

<script>
import EChart from '../../../store/echart'
import Material from "vuetify/es5/util/colors"
export default {
  components: {
    EChart,
  },
  data: () => ({
    color: Material,
  }),
  props: {
    locationData: {
      require: true,
      type: [Object, Array],
      default: null
    }
  }
}
</script>
