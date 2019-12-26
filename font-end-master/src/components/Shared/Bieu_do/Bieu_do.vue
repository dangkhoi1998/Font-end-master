<template>
  <section id="dashboard">
    <section>
      <mdb-row class="my-0 py-0">
          <mdb-col md="12" class="mb-4">
              <mdb-card>
                  <mdb-card-body>
                      <div style="display: block">
                        <mdb-bar-chart :data="barChartData" :options="barChartOptions" :height="500"/>
                      </div>
                  </mdb-card-body>
              </mdb-card>
          </mdb-col>
      </mdb-row>
    </section>
  </section>
</template>
<script>
import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbBarChart } from 'mdbvue'

export default {
  name: 'Dashboard',
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbBarChart,
  },
  data: () => ({
  }),
  props: {
    barChartData: {
      require: true,
      type: [Object, Array],
      default: null
    },
    barChartOptions: {
      require: true,
      type: [Object, Array],
      default: null
    }
  }
}
</script>