<template>
    <div>
      <transition
        appear
        enter-class=""
        enter-active-class="animated fadeInLeftBig">
          <app-bieudo></app-bieudo>
      </transition>
      <v-row class="mx-4">
        <!-- .......................................... -->
        <v-col cols="12" lg="8" class="my-0 py-0">
          <app-congviecnhanvien></app-congviecnhanvien>

          <app-congviec></app-congviec>
          
          <app-doanhso></app-doanhso>
        </v-col>
        
        <v-col cols="12" lg="4" class="my-0 py-0">
          <app-dsnv
          :getApi="getDoanhsonhanvienthang"
          :headers="headers"
          :text="textDoanhSo"></app-dsnv>

          <app-phongban></app-phongban>

          <app-tientrinhcongviec></app-tientrinhcongviec>

          <app-vieccanlam
          :list-api="getworkApi"
          :post-api="PostOpportunityApi"></app-vieccanlam>
        </v-col>
        <!-- .......................................... -->
      </v-row>
    </div>
</template>

<script>
import { getworkApi, getDoanhsonhanvienthang } from '../../../api/GetApi/getApiAdmin'
import { PostOpportunityApi } from '../../../api/PostApi/PostAdmin'
export default {
  data: () => ({
    getDoanhsonhanvienthang,
    PostOpportunityApi,
    getworkApi,
    headers: [
      { text: 'Họ và tên', value: 'nameEmpl', align: 'left'},
      { text: 'Doanh thu', value: 'totalSale', align: 'left'},
    ],
    textDoanhSo: 'Doanh số nhân viên trong tháng'
  }),
  components: {
    appCongviecnhanvien: () => import('../../../components/Admin/Trang_chu/congviecnhanvien'),
    appDoanhso: () => import('../../../components/Admin/Trang_chu/doanhso'),
    appVieccanlam: () => import('../../../components/Admin/Trang_chu/viecCanLam'),
    appCongviec: () => import('../../../components/Admin/Trang_chu/listCongviec'),
    appPhongban: () => import('./Department'),
    appTientrinhcongviec: () => import('../../../components/Admin/Trang_chu/tientrinhcongviec'),
    appBieudo: () => import('../../../components/Admin/Trang_chu/Bieu_do'),
    appDsnv: () => import('../../../components/Shared/TrangChu/simpleData'),
  },
  methods: {
  }
}
</script>
