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
export default {
  components: {
    CircleStatistic,
  },
  data: () => ({
    color: Material,
    trending: [
      {
        subheading: "Đã chốt",
        headline: "15+",
        caption: "email opens",
        percent: 15,
        icon: {
          label: "mdi-briefcase-minus",
          color: "primary"
        },
        linear: {
          value: 15,
          color: "primary"
        }
      },
      {
        subheading: "Hẹn gọi lại",
        headline: "15+",
        caption: "email opens",
        percent: 15,
        icon: {
          label: "mdi-phone-classic",
          color: "info"
        },
        linear: {
          value: 15,
          color: "info"
        }
      },
      {
        subheading: "Chưa liệu hệ",
        headline: "90%",
        caption: "tasks completed.",
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
  }
}
</script>
