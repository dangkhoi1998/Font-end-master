<template>
  <div>
    <cap-nhat
    :items="items"
    :to="to"
    />
  </div>
</template>

<script>
import CapNhat from '../../../components/Shared/Thong_tin_tai_khoan/from'
export default {
  data: () => ({
    items: [
      {
        name_empl: 'Nguyễn Thành Trung',
        email: 'ad@gmail.com',
        phone_num: '0976543223  ',
        addresss: 'Hát Môn - Phúc Thọ - Hà Nội',
        date_of_birth: '20/11/2019',
        level: 'Nhân viên',
        id_department: 'Phòng Kinh Doanh',
        pass: '12345678',
        stt: 'Đang hoạt động'
      }
    ],
    to: '/admin/thong-tin-tai-khoan'
  }),
  components: {
    CapNhat,
  }
}
</script>