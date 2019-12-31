<template>
  <v-container fluid>
    <so-luong-cong-viec
    :wordEmp="wordEmp"></so-luong-cong-viec>
    <v-row>
      <v-col cols="12" lg="8">
        <bieu-do :barChartData="barChartData" :barChartOptions="barChartOptions" ></bieu-do>

        <list-cong-viec
        :list-api="getworkApi"></list-cong-viec> 
      </v-col>
      <v-col cols="12" sm="4">
        <trang-thai
        :locationData="locationData"></trang-thai>

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
        ],
        wordEmp:[
          {
            title:'Công việc theo tuần',
            icon:'mdi-finance',
            value:'50',
            class:'warning',
          },
          {
            title:'Công việc theo tháng',
            icon:'mdi-chart-pie',
            value:'70',
            class:'light-blue lighten-1',
          },
          {
            title:'Công việc theo tuần',
            icon:'mdi-chart-bar',
            value:'60',
            class:'red accent-2',
          }
        ],
        barChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
          {
            label: 'Doanh số theo tuần',
            data: [12, 39, 3, 50, 2, 32, 84,10,11,45,76,34],
            backgroundColor: 'rgba(245, 74, 85, 0.5)',
            borderWidth: 1
          }, {
            label: 'Doanh số theo tháng',
            data: [56, 24, 5, 16, 45, 24, 8,50,34,54,23,18],
            backgroundColor: 'rgba(90, 173, 246, 0.5)',
            borderWidth: 1
          }, {
            label: 'Doanh số theo năm',
            data: [12, 25, 54, 3, 15, 44, 3,40,48,25,36,12],
            backgroundColor: 'rgba(245, 192, 50, 0.5)',
            borderWidth: 1
          }
        ],
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            barPercentage: 1,
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
              beginAtZero: true
            }
          }]
        }
      },
    }
  },
    components: {
      soLuongCongViec: () => import ('../../../components/Shared/TrangChu/so_luong_cong_viec'),
      listCongViec: () => import ('../../../components/Shared/TrangChu/List_cong_viec'),
      appDsnv: () => import('../../../components/Shared/TrangChu/simpleData'),
      viecCanLam: () => import ('../../../components/Shared/TrangChu/viec_can_lam'),
      bieuDo: () => import ('../../../components/Shared/Bieu_do/Bieu_do'),
      trangThai: () => import ('../../../components/Shared/Bieu_do/Trang_thai'),
    },
  }
</script>
