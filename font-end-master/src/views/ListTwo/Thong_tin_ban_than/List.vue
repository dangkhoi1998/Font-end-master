<template>
  <div>
    <app-timeline
    :items="items"></app-timeline>
  </div>
</template>

<script>
import Timeline from '../../../components/Shared/Thong_tin_tai_khoan/timeline'
import { getBanthan } from '../../../api/ListTwo/getApi'
import axios from 'axios'
export default {
  data: () => ({
    getBanthan,
    items: {}
  }),
  components: {
    appTimeline: Timeline,
  },
  created () {
    this.getItem()
  },
  methods: {
    getItem () {
      getBanthan(this.$route.params.idEmpl)
      axios.get('http://localhost:8081/nhanvien/thongtintaikhoan/' + this.$route.params.idEmpl)
        .then(response => {
          this.items = response.data
        })
    }
  }
}
</script>
