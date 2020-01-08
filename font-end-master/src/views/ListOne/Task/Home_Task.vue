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
          <td :colspan="10">
            <v-row row class="my-0 py-0">
              <v-col cols="12" sm="5" class="my-0 py-0">
                <app-comment
                @commentAdd="commentAdd=$event"
                :editCommet="editCommet"
                :post-comment="PostCommentCohoi"
                :id-nhanvien="item.idEmpl"
                @Edit="editCommet=$event"></app-comment>
              </v-col>
          
              <v-col cols="12" sm="7">
                <list-comment
                :commentAdd="commentAdd"
                :listComment="item.commCollection"
                @editCommet="editCommet=$event"></list-comment>
              </v-col>
            </v-row>
          </td>
        </template>
        <template v-slot:item.iddepartment="{item}">
          {{item.id_department}}
        </template>

        <template v-slot:item.stt="{item}">
          <v-icon size="16" :color="getColorstt(item.stt)">fiber_manual_record</v-icon>{{item.stt}}
        </template>
        <template v-slot:item.actions="{item}">
          <v-row>
            <v-icon small class="mr-2" @click="editItem(item)" > edit  </v-icon>
            <v-icon small @click="deleteItem(item)" > delete </v-icon>
          </v-row>
        </template>
      </v-data-table>
      <v-dialog v-model="dialog1" persistent width="600">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title > Privacy Policy</v-card-title>
          
          <v-card-text>
            {{item}}
          </v-card-text>

          <v-divi der></v-divi>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="XoaItem()"> I accept</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- xóa -->
      <!--  -->
      <v-snackbar v-model="snackbar1" color="green" top dark >
        <v-icon color="white" class="mr-3">mdi-bell-plus</v-icon>
        <div>{{text}}</div>
        <v-btn icon  @click="snackbar1 = false" >
          <v-icon >mdi-close-circle</v-icon>
        </v-btn>
      </v-snackbar>
    </material-card>
  </transition>
</template>
<script>
  import { getCongviec } from '../../../api/ListOne/getApi'
  import { PostCommentCohoi } from "../../../api/ListOne/postApi"
  export default {
    data: () => ({
      getCongviec,
      PostCommentCohoi,
      search: '',
      dialog2: false,
      list: {},
      dialog1: false,
      snackbar1: false,
      text: '',
      commentAdd: {},
      item:{},
      editCommet: {},
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
            console.log('dddđ',response)
            this.desserts = response.data
          })
      },
      getColorstt (stt) {
        if (stt === 'Đang hoạt động') return 'green'
        else if (stt === 'Tạm ngừng hoạt động') return 'orange'
        else if (stt === 'Chờ xét duyệt') return 'blue'
        else return 'red'
      },

      getColorComments (color) {
        if (color === 'mdi-email') return 'green'
        else if (color === 'mdi-phone') return 'orange'
        else if (color === 'mdi-bell') return 'red'
        else if (color === 'mdi-account-multiple') return 'blue'
        else return 'red'
      },
      snackbar () {
        this.snackbar1 = true
      },
    }
  }
</script>
