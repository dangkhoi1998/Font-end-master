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
          item-key="idEmpl"
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
          <template v-slot:item.stts="{item}">
            <v-icon size="16" :color="getColorstt(item.stt)">fiber_manual_record</v-icon>{{item.stt}}
          </template>
          <template v-slot:item.actions="{item}">
            <v-icon small class="mr-2" @click="editItem(item)" color="blue" > edit  </v-icon>
            <v-icon small @click="deleteItem(item)" color="red"> delete </v-icon>
          </template>
      </v-data-table>
        <!-- xóa -->
      <v-dialog v-model="dialog1" persistent max-width="500px">
        <v-card>
          <v-card-title class="headline">Bạn có chắc chẵn xóa?</v-card-title>

          <v-simple-table class="mx-5">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Họ và tên</th>
                  <th class="text-left">Số điện thoại</th>
                  <th class="text-left">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ item.cusName }}</td>
                  <td>{{ item.phoneNum }}</td>
                  <td>{{ item.email }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="dialog1 = false" > Thoát </v-btn>

            <v-btn color="green darken-1" text @click="Delete()" > Xóa </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
import { PostCommentCohoi } from "../../api/ListOne/postApi"

  export default {
    data: () => ({
      search: '',
      stt: ['Đã chốt', 'Đã đăng ký', 'Liên hệ sau'],
      desserts: [],
      PostCommentCohoi,
      text: '',
      commentAdd: {},
      dialog1: false,
      snackbar1: false,
      editCommet: {},
    }),
    created () {
      this.getItem()
    },
    props: {
      headers: {
        require: true,
        type: Array,
        default: null
      },
      getApi: {
        require: true,
        type: Function,
        default: null
      },
      updateApi: {
        require: true,
        type: Function,
        default: null
      }
    },
    methods: {
      getItem () {
        this.getApi(this.$route.params.idEmpl)
          .then(response => {
            this.desserts = response.data
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      editStt (item) {
        console.log('ddddđ', item)
      }
    }
  }
</script>
