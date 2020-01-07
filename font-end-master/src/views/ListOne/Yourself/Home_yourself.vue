<template>
  <div>
    <app-timeline
    :items="items"></app-timeline>
  </div>
</template>

<script>
import Timeline from '../../../components/Shared/Thong_tin_tai_khoan/timeline'
import { getThongtintaikhoan } from '../../../api/GetApi/getTruongphong'
export default {
  data: () => ({
    items: {}
  }),
  created () {
    this.listApi()
  },
  methods: {
    listApi () {
      console.log('sssssssssss', this.$route.params.idEmpl)
      getThongtintaikhoan(this.$route.params.idEmpl)
        .then(response => {
          console.log('dddddđ', response.data)
          this.items = response.data
        })
    }
  },
  components: {
    appTimeline: Timeline,
  }
}
</script>
