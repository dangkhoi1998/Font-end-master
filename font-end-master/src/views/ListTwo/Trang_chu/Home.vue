<template>
  <v-container fluid>
    <so-luong-cong-viec
    :material="material"></so-luong-cong-viec>
    <v-row>
      <v-col cols="12" lg="8">
        <bieu-cot></bieu-cot>
        <list-cong-viec
        :list-api="getworkApi"></list-cong-viec> 
      </v-col>
      <v-col cols="12" sm="4">
        <trang-thai
        :locationData="locationData"></trang-thai>
        <viec-can-lam
          :list-api="getworToDokApi"
          :post-api="PostWorkToDo"
          :put-api="UpdatetWorkToDo"
          :delete-api="DeleteWorkToDoApi"></viec-can-lam>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { getRevenueApi, getworkApi, getworToDokApi } from '../../../api/getApi'
  import { PostWorkToDo } from '../../../api/PostApi/PostAdmin'
  import { DeleteWorkToDoApi } from '../../../api/deleteApi/deleteAdmin'
  import { UpdatetWorkToDo } from '../../../api/updateApi/updateAdmin'
export default {
  data: () => ({
    getworToDokApi,
    PostWorkToDo,
    DeleteWorkToDoApi,
    UpdatetWorkToDo,
    getworkApi,
    material: [
      {
        title: 'Tổng số lượng công việc trong năm',
        icon: 'mdi-store',
        color: 'green',
        value: '50$'
      },
      {
        title: 'Công việc trong tháng',
        icon: 'mdi-content-copy',
        color: 'orange',
        value: '50$'
      },
      {
        title: 'Công việc trong tuần',
        icon: 'mdi-information-outline',
        color: 'red',
        value: '50$'
      }
    ],
    locationData: [
      {
        value: 25,
        name: "Chưa liên hệ được"
      },
      {
        value: 35,
        name: "Đã đăng ký"
      },
      {
        value: 25,
        name: "Đang tham khảo"
      },
      {
        value: 25,
        name: "Hẹn gọi lại sau"
      },
      {
        value: 10,
        name: "Không có nhu cầu"
      }
    ]
  }),
  components: {
    soLuongCongViec: () => import ('../../../components/Shared/TrangChu/so_luong_cong_viec'),
    listCongViec: () => import ('../../../components/Shared/TrangChu/List_cong_viec'),
    viecCanLam: () => import ('../../../components/Shared/TrangChu/viec_can_lam'),
    trangThai: () => import ('../../../components/Shared/Bieu_do/Trang_thai'),
  },
}
</script>

<style>

</style>