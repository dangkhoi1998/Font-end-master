<template>
  <div>
    <app-timeline
    :items="items"></app-timeline>
  </div>
</template>

<script>
import Timeline from '../../../components/Shared/Thong_tin_tai_khoan/timeline'
import { getThongtintaikhoan } from '../../../api/GetApi/getApiAdmin'
export default {
  data: () => ({
    items: []
  }),
  created () {
    this.listApi()
  },
  methods: {
    listApi () {
      getThongtintaikhoan()
        .then(response => {
          this.items = response.data
        })
    }
  },
  components: {
    appTimeline: Timeline,
  }
}
</script>
