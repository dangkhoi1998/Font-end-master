<template>
  <v-container fluid>
    <so-luong-cong-viec
    :getApi="getDSNgayApi"
    :getApiTuan="getDSThangApi"
    :getApiThang="getDSNamApi"></so-luong-cong-viec>
    <v-row>
      <v-col cols="12" lg="8">
        <list-cong-viec
        :getApi="getCongvecNV"></list-cong-viec>
      </v-col>
      <v-col cols="12" sm="4">
        <trang-thai
        :locationData="locationData"></trang-thai>
        <viec-can-lam
          :list-api="getworToDokApi"
          :post-api="PostWorkToDo"
          :put-api="UpdatetWorkToDo"
          :delete-api="DeleteWorkToDoApi">
        </viec-can-lam>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { getRevenueApi, getworkApi, getworToDokApi } from '../../../api/getApi'
  import { PostWorkToDo } from '../../../api/PostApi/PostAdmin'
  import { DeleteWorkToDoApi } from '../../../api/deleteApi/deleteAdmin'
  import { UpdatetWorkToDo } from '../../../api/updateApi/updateAdmin'
  import { getDSNgayApi,getDSThangApi, getDSNamApi, getCongvecNV } from '../../../api/ListTwo/getApi'
export default {
  data: () => ({
    getworToDokApi,
    PostWorkToDo,
    getCongvecNV,
    DeleteWorkToDoApi,
    UpdatetWorkToDo,
    getworkApi,
    getDSThangApi,
    getDSNamApi,
    getDSNgayApi,
    // wordEmp:[
    //   {
    //     title:'Công việc theo tuần',
    //     icon:'mdi-finance',
    //     value:'50',
    //     class:'warning',
    //   },
    //   {
    //     title:'Công việc theo tháng',
    //     icon:'mdi-chart-pie',
    //     value:'70',
    //     class:'light-blue lighten-1',
    //   },
    //   {
    //     title:'Công việc theo tuần',
    //     icon:'mdi-chart-bar',
    //     value:'60',
    //     class:'red accent-2',
    //   }
    // ],
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
    bieuDo: () => import ('../../../components/Shared/Bieu_do/Bieu_do')
  },
}
</script>

<style>

</style>