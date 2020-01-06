<template>
  <div>
    <cap-nhat
    :get-api="getThongtintaikhoan"
    :update-api="UpdateThongtintaikhoan"
    :to="to"
    />
  </div>
</template>

<script>
import CapNhat from '../../../components/Shared/Thong_tin_tai_khoan/from'
import { getThongtintaikhoan } from '../../../api/GetApi/getApiAdmin'
import { UpdateThongtintaikhoan } from '../../../api/updateApi/updateAdmin'
export default {
  data: () => ({
    getThongtintaikhoan,
    UpdateThongtintaikhoan,
    to: '/admin/thong-tin-tai-khoan'
  }),
  components: {
    CapNhat,
  }
}
</script>