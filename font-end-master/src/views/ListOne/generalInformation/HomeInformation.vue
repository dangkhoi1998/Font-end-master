<template>
  <v-container fluid>
    <so-luong-cong-viec
    :material="material"></so-luong-cong-viec>
    <v-row>
      <v-col cols="12" lg="8">
        <list-cong-viec
        :list-api="getworkApi"></list-cong-viec> 
      </v-col>
      <v-col cols="12" lg="4">
        <app-dsnv
        :text="text"
        :headers="headers"
        :get-api="getRevenueApi"></app-dsnv>
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
    data () {
      return {
        getworToDokApi,
        DeleteWorkToDoApi,
        UpdatetWorkToDo,
        getworkApi,
        PostWorkToDo,
        getRevenueApi,
        text: 'Doanh số nhân viên theo tháng',
        headers: [
          { text: 'Họ và tên', value: 'name_empl', align: 'left'},
          { text: 'Doanh thu', value: 'doanhthu', align: 'left'},
        ],
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
      }
    },
    components: {
      soLuongCongViec: () => import ('../../../components/Shared/TrangChu/so_luong_cong_viec'),
      listCongViec: () => import ('../../../components/Shared/TrangChu/List_cong_viec'),
      appDsnv: () => import('../../../components/Shared/TrangChu/simpleData'),
      viecCanLam: () => import ('../../../components/Shared/TrangChu/viec_can_lam'),
    },
  }
</script>
