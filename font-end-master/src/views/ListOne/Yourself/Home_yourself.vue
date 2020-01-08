<template>
  <div>
    <app-timeline
    :items="items"></app-timeline>
  </div>
</template>

<script>
import Timeline from '../../../components/Shared/Thong_tin_tai_khoan/timeline'
import { getThongtintaikhoan } from '../../../api/ListOne/getApi'
import axios from 'axios'
export default {
  data: () => ({
    getThongtintaikhoan,
    items: {},
  }),
  components: {
    appTimeline: Timeline,
  },
  created () {
    this.getItem()
  },
  methods: {
    getItem () {
      getThongtintaikhoan(this.$route.params.idEmpl)
      axios.get('http://localhost:8081/truongphong/thongtinkhoan/' + this.$route.params.idEmpl)
        .then(response => {
          this.items = response.data
        })
    }
  }
}
</script>
