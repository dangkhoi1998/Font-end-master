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
import { getThongtintaikhoan } from '../../../api/ListOne/getApi'
import { UpdateThongtintaikhoan } from '../../../api/ListTwo/updateApi'
import axios from 'axios'
export default {
  data: () => ({
    listItem: {},
    getThongtintaikhoan,
    UpdateThongtintaikhoan,
    to: '/list-one/thong-tin-ban-than'
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