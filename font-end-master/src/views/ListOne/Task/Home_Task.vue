<template>
  <transition
    appear
    enter-class=""
    enter-active-class="animated fadeInLeftBig ">
    <material-card class="nhanvien" color="orange" text>
      <template v-slot:header>
        <h4 class="ml-4" >Quản lý công việc</h4>
        <v-col cols="12" sm="4"></v-col>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          class="mx-6"
          hide-details
          filled
          dense
        ></v-text-field>
      </template>
        <v-data-table
          :headers="headers"
          :items="desserts"
          item-key="idOpportunity"
          show-expand
          :search="search"
          no-data-text="Không có dữ liệu"
          class="elevation-1 mt-5"
        >
          <template v-slot:expanded-item="{item}">
            <td :colspan="12">
              <v-row row class="my-0 py-0">
                <v-col cols="12" sm="5" class="my-0 py-0">
                  <app-comment
                  @commentAdd="commentAdd=$event"
                  :editCommet="editCommet"></app-comment>
                </v-col>
                <v-col cols="12" sm="7">
                  <list-comment
                  :commentAdd="commentAdd"
                  @editCommet="editCommet=$event"></list-comment>
                </v-col>
              </v-row>
            </td>
          </template>
          <template v-slot:item.stts="{item}">
            <v-icon size="16" :color="getColorstt(item.stt)">fiber_manual_record</v-icon>{{item.stt}}
          </template>
          <template v-slot:item.actions="{item}">
            <v-icon small class="mr-2" @click="editItem(item)" color="blue" > edit  </v-icon>
            <v-icon color="red" small @click="deleteItem(item)" > delete </v-icon>
          </template>
        </v-data-table>
        <!-- xóa -->
        <!--  -->
        <v-snackbar v-model="snackbar1" color="green" top dark >
          <v-icon color="white" class="mr-3">mdi-bell-plus</v-icon>
          <div>{{text}}</div>
          <v-btn icon  @click="snackbar1 = false" >
            <v-icon>mdi-close-circle</v-icon>
          </v-btn>
        </v-snackbar>
    </material-card>
  </transition>
</template>
<script>
  import { getCongviec } from '../../../api/ListOne/getApi'
  export default {
    data: () => ({
      getCongviec,
      search: '',
      stt: ['Đã chốt', 'Đã đăng ký', 'Liên hệ sau'],
      headers: [
        { text: 'Họ và Tên', align: 'left', sortable: false, value: 'cusName' },
        { text: 'Số điện thoại', align: 'left', value: 'phoneNum' },
        { text: 'Tên sản phẩm', align: 'left', value: 'proName' },
        { text: 'Email', align: 'left', value: 'email' },
        { text: 'Số lượng', align: 'left', value: 'amountt' },
        { text: 'Giá', align: 'left', value: 'price' },
        { text: 'Ngày mua', align: 'left', value: 'dateOfPurchase' },
        { text: 'Giao vận', align: 'left', value: 'delivery' },
        { text: 'Nguồn', align: 'left', value: 'sources' },
        { text: 'Trạng thái', align: 'center', value: 'stt' },
      ],
      desserts: [],
    }),
    created () {
      this.getItem()
    },
    methods: {
      getItem () {
        getCongviec(this.$route.params.idEmpl)
          .then(response => {
            this.desserts = response.data
          })
      }
    }
  }
</script>
