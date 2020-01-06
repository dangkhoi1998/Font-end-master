<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid class="mx-0 px-0">
      <v-layout row wrap class="mt-1">
        
        <v-flex lg6 sm12 xs12 v-for="(item, index) in trending" :key="'c-trending' + index">
          <circle-statistic
            :title="item.subheading"
            :sub-title="item.headline"
            :caption="item.caption"
            :icon="item.icon.label"
            :color="item.linear.color"
            :value="item.linear.value"
          >
          </circle-statistic>
        </v-flex>
        <!-- acitivity/chat widget -->
        
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Material from "vuetify/es5/util/colors"
import CircleStatistic from "./CircleStatistic"
import { getChot, getHengoilai, getChuachot } from '../../../api/GetApi/getApiAdmin'
export default {
  components: {
    CircleStatistic,
  },
  data: () => ({
    color: Material,
    trending: [
      {
        subheading: "Đã chốt",
        headline: "",
        caption: "Cơ hội đã chốt",
        percent: '',
        icon: {
          label: "mdi-briefcase-minus",
          color: "primary"
        },
        linear: {
          value: '',
          color: "primary"
        }
      },
      {
        subheading: "Hẹn gọi lại",
        headline: "",
        caption: "Hẹn gọi lại",
        percent: '',
        icon: {
          label: "mdi-phone-classic",
          color: "info"
        },
        linear: {
          value: '',
          color: "info"
        }
      },
      {
        subheading: "Chưa liệu hệ",
        headline: "",
        caption: "Chưa liên hệ",
        icon: {
          label: "mdi-vector-difference-ba",
          color: "orange lighten-2"
        },
        linear: {
          value: 30,
          color: "orange lighten-2"
        }
      },
      {
        subheading: "Không có nhu cầu",
        headline: "100%",
        caption: "issues fixed.",
        percent: 100,
        icon: {
          label: "bug_report",
          color: "primary"
        },
        linear: {
          value: 100,
          color: "error"
        }
      }
    ]
  }),
  computed: {
  },
  created () {
    this.listChot()
    this.listhengoilai()
    this.listchuachot()
  },
  methods: {
    listChot () {
      getChot()
      .then (response => {
        for (const i in this.trending) {
          this.trending[0]['linear']['value'] = response.data.length
          this.trending[0]['percent'] = response.data.length
          this.trending[0]['headline'] = response.data.length
        }
      })
    },
    listhengoilai  () {
      getHengoilai ()
      .then (response => {
        for (const i in this.trending) {
          this.trending[1]['linear']['value'] = response.data.length
          this.trending[1]['percent'] = response.data.length
          this.trending[1]['headline'] = response.data.length
        }
      })
    },
    listchuachot  () {
      getChuachot ()
      .then (response => {
        for (const i in this.trending) {
          this.trending[2]['linear']['value'] = response.data.length
          this.trending[2]['percent'] = response.data.length
          this.trending[2]['headline'] = response.data.length
        }
      })
    }
  }
}
</script>
