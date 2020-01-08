<template>
  <div>
    <cap-nhat
    :get-api="listItem"
    :update-api="UpdateThongtintaikhoan"
    :to="to"
    />
  </div>
</template>

<script>
import CapNhat from '../../../components/Shared/Thong_tin_tai_khoan/from'
import { getBanthan } from '../../../api/ListTwo/getApi'
import { UpdateThongtintaikhoan } from '../../../api/ListTwo/updateApi'
import axios from 'axios'
export default {
  data: () => ({
    getBanthan,
    UpdateThongtintaikhoan,
    to: '/admin/thong-tin-ban-than',
    listItem: {}
  }),
  components: {
    CapNhat,
  },
  created() {
    this.getItem()
  },
  methods: {
    getItem () {
      axios.get('http://localhost:8081/nhanvien/thongtintaikhoan/' + this.$route.params.idEmpl)
        .then(response => {
          this.listItem = response.data
        })
    }
  }
}
</script>