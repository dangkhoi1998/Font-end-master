<template>
  <div>
    <app-timeline
    :items="items"></app-timeline>
  </div>
</template>

<script>
import Timeline from '../../../components/Shared/Thong_tin_tai_khoan/timeline'
export default {
  data: () => ({
    items: [
      {
        name_empl: 'Nghĩa cu te',
        email: 'ad@gmail.com',
        phone_num: '0976543223  ',
        addresss: 'Hát Môn - Phúc Thọ - Hà Nội',
        date_of_birth: '20/11/2019',
        level: 'Nhân viên',
        id_department: 'Phòng Kinh Doanh',
        pass: '12345678',
        stt: 'Đang hoạt động'
      }
    ]
  }),
  components: {
    appTimeline: Timeline,
  }
}
</script>
