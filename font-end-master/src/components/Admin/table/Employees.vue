<template>
  <transition
    appear
    enter-class=""
    enter-active-class="animated fadeInLeft fast">
      <material-card class="nhanvien" title="Quản lý nhân viên" color="orange" text>
      <template v-slot:header></template>
      <v-layout row class="my-0 py-0 mx-2" >
        <div class="hvr-float-shadow">
          <v-btn class="ma-2" @click="addItem" color="secondary">
            <v-icon left>mdi-account-plus-outline</v-icon>THÊM NHÂN VIÊN 
          </v-btn>
        </div>
        <div class="hvr-float-shadow">
          <v-btn @click="search = 'Chờ xét duyệt'" class="ma-2" tile outlined color="blue">
            <v-icon left>mdi-apps</v-icon>CHỜ XÉT DUYỆT
          </v-btn>
        </div>
        <div class="hvr-float-shadow">
          <v-btn @click="search = 'Đang hoạt động'" class="ma-2" tile outlined color="green">
            <v-icon left>mdi-apps</v-icon>ĐANG HOẠT ĐỘNG
          </v-btn>
        </div>
        <div class="hvr-float-shadow">
          <v-btn @click="search = 'Tạm ngừng hoạt động'" class="ma-2" tile outlined color="orange">
            <v-icon left>mdi-apps</v-icon>TẠM NGỪNG HOẠT ĐỘNG
          </v-btn>
        </div>
        <div class="hvr-float-shadow">
          <v-btn @click="search = 'Ngừng hoạt động'" class="ma-2" tile outlined color="red">
            <v-icon left>mdi-apps</v-icon>NGỪNG HOẠT ĐỘNG
          </v-btn>
        </div>
        <v-col class="shrink" style="margin-top:-13px">
        </v-col>
        <v-text-field
          class="mt-1"
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
          filled
          dense
          ></v-text-field>
      </v-layout>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :expanded.sync="expanded"
        item-key="idEmpl"
        show-expand
        :search="search"
        no-data-text="Không có dữ liệu"
        class="elevation-1 mt-5"
      >
      <!-- comments -->
        <template v-slot:expanded-item="{item}">
          <td :colspan="10">
            <v-row row class="my-0 py-0">
              <v-col cols="12" sm="5" class="my-0 py-0">
                <app-comment
                @commentAdd="commentAdd=$event"
                :editCommet="editCommet"
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
          {{item.idDepartment.departmentName}}
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
      <v-dialog
        v-model="dialog"
        width="600"
        persistent
      >
        <material-card class="card-tabs" color="green">
            <template v-slot:header>
              <v-tabs background-color="transparent" slider-color="white">
                <span
                  class="subheading font-weight-light mx-3"
                  style="align-self: center"
                >Khách hàng</span>
              </v-tabs>
            </template>
            <v-card-text>
              <v-form ref="form" v-model="form">
                <slot name="formEmployees" :item="item"></slot>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="blue darken-1"  @click="dialog=false" ><span style="color: white;">Thoát</span></v-btn>
              <v-btn color="green" v-if="addUpdate"  :loading="isUpdating" ><span style="color: white;" @click="saveItem()">Lưu lại</span></v-btn>
              <v-btn color="orange" v-else ><span style="color: white;" @click="updateItem()">Sửa</span></v-btn>
            </v-card-actions>
        </material-card>
      </v-dialog>
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
      <v-dialog v-model="dialog2" persistent max-width="500px">
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
                  <td>{{ item.nameEmpl }}</td>
                  <td>{{ item.phoneNum }}</td>
                  <td>{{ item.email }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="dialog2 = false" > Thoát </v-btn>

            <v-btn color="green darken-1" text @click="Delete()" > Xóa </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!--  -->
      <v-snackbar v-model="snackbar1" color="green" top dark >
        <v-icon color="white" class="mr-3">mdi-bell-plus</v-icon>
        <div>{{text}}</div>
        <v-btn icon  @click="snackbar1 = false" >
          <v-icon >mdi-close-circle</v-icon>
        </v-btn>
      </v-snackbar>
      <!--  -->
    </material-card>
  </transition>
</template>
<script>
  import { PostEmployee } from '../../../api/PostApi/PostAdmin'
  import { UpdateNhanvien } from '../../../api/updateApi/updateAdmin'
  import { DeleteNhanvien } from '../../../api/deleteApi/deleteAdmin'
  import { getComment } from  '../../../api/GetApi/getApiAdmin'
  import axios from 'axios'
  export default {
    data () {
      return {
        expanded: [],
        form: true,
        search: '',
        singleExpand: false,
        item: {},
        dialog: false,
        dialog1: false,
        dialog2: false,
        desserts: [],
        editedIndex: -1,
        addUpdate: true,
        snackbar1: false,
        text: '',
        form: false,
        list: {},
        commentAdd: {},
        isUpdating: false,
        editCommet: {},
      }
    },
    props: {
      headers: {
        require: true,
        type: Array,
        default: null
      },
      listApi: {
        require: true,
        type: Function
      },
    },
    created () {
      this.getList()
    },
    methods: {
      LisComment () {
        getComment()
          .then(response=> {
            this.list = response.data
          })
      },
      
      getList(){
        this.listApi()
          .then(response=>{
            this.desserts = response.data
          })
      },

      editItem (index) {
        this.editedIndex = this.desserts.indexOf(index)
        this.item = Object.assign({}, index)
        this.dialog = true
        this.addUpdate = false
      },

      addItem () {
        this.dialog = true
        this.addUpdate = true
        this.item = {}
      },

      saveItem () {
        PostEmployee(this.item)
        .then(response => {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
        this.desserts.push(this.item)
        this.snackbar()
        this.text = 'Thêm mới thành công !'
        this.dialog = false
      },

      updateItem(){
        UpdateNhanvien(this.item)
        .then(response => {
        })
        .catch(function (error) {
          console.log(error)
        })
        Object.assign(this.desserts[this.editedIndex], this.item)
        this.snackbar()
        this.text = 'Sửa thành công !'
        this.dialog = false
      },

      deleteItem (index) {
        this.item = index
        this.dialog2 = true
      },

      Delete () {
        DeleteNhanvien(this.item)
        .then(response => {
        })
        .catch(function (error) {
          console.log(error)
        })
        const index = this.desserts.indexOf(this.item)
        this.desserts.splice(index, 1)
        this.snackbar()
        this.text = 'Xóa thành công !'
        this.dialog2 = false
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

    },
  }
</script>
