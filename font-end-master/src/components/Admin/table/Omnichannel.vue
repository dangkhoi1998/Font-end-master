<template>
  <material-card class="nhanvien"  color="orange" text>
    <template v-slot:header>
      <v-btn text class="ml-4 hvr-float-shadow" @click="addItem">
         <v-icon class="mr-2" dense>mdi-account-plus-outline</v-icon> Thêm khách hàng</v-btn>
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
    <v-divider></v-divider>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :expanded.sync="expanded"
      item-key="id"
      show-expand
      :search="search"
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
    <template>
      <v-dialog v-model="dialog" persistent width="600" >
        <material-card class="card-tabs" color="green">
            <template v-slot:header>
              <v-tabs background-color="transparent" slider-color="white">
                <span
                  class="subheading font-weight-light mx-3"
                  style="align-self: center"
                >Khách hàng</span>
              </v-tabs>
            </template>
            <v-card-text >
              <v-form ref="form" v-model="form">
                <slot name="formOmnichannel" :item="item"></slot>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="blue darken-1"  @click="dialog=false" ><span style="color: white;">Thoát</span></v-btn>
              <v-btn color="green" v-if="addUpdate" :disabled="!form" ><span style="color: white;" @click="saveItem()">Lưu lại</span></v-btn>
              <v-btn color="orange" v-else :disabled="!form"><span style="color: white;" @click="updateItem()">Lưu lại</span></v-btn>
            </v-card-actions>
        </material-card>
      </v-dialog>
    </template>
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
                <td>{{ item.nameCus }}</td>
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
        <v-icon>mdi-close-circle</v-icon>
      </v-btn>
    </v-snackbar>
    <!--  -->
</material-card>
</template>
<script>
  import api from '../../../api/http'
  import { PostKhachhang } from '../../../api/PostApi/PostAdmin'
  import { UpdateKhachhang } from '../../../api/updateApi/updateAdmin'
  import { DeleteKhachhang } from '../../../api/deleteApi/deleteAdmin'
  export default {
    data () {
      return {
        expanded: [],
        form: false,
        search: '',
        singleExpand: false,
        hai: ['Shopee'],
        item: {},
        listItem: {},
        dialog: false,
        dialog1: false,
        dialog2: false,
        desserts: [],
        editedIndex: -1,
        addUpdate: true,
        snackbar1: false,
        text: '',
        isUpdating: true,
        commentAdd: {},
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
      updateApi: {
        require: true,
        type: Function
      }
    },
    created () {
      this.getList()
    },
    methods: {
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
        PostKhachhang(this.item)
        .then(response => {
        })
        .catch(function (error) {
          console.log(error)
        })
        this.desserts.push(this.item)
        this.text = 'Thêm mới thành công !'
        this.snackbar()
        this.dialog = false
      },

      updateItem(){
        UpdateKhachhang(this.item)
        .then(response => {
        })
        .catch(function (error) {
          console.log(error)
        })
        Object.assign(this.desserts[this.editedIndex], this.item)
        this.dialog = false
        this.snackbar()
        this.text = 'Sửa thành công !'
      },

      deleteItem (index) {
        this.item = index
        this.dialog2 = true
      },

      Delete () {
        DeleteKhachhang(this.item)
        .then(response => {
        })
        .catch(function (error) {
          console.log(error)
        })
        const index = this.desserts.indexOf(this.item)
        this.desserts.splice(index, 1)
        this.dialog2 = false
        this.snackbar()
        this.text = 'Bạn xóa thành công !'
      },

      getColorstt (stt) {
        if (stt === 'Đang hoạt động') return 'green'
        else if (stt === 'Chờ kích hoạt') return 'orange'
        else return 'red'
      },

      snackbar () {
        this.snackbar1 = true
      }
    },
  }
</script>
<style>
  .hvr-rectangle-in {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  background: #2098D1;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-rectangle-in:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #e1e1e1;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-rectangle-in:hover, .hvr-rectangle-in:focus, .hvr-rectangle-in:active {
  color: white;
}
.hvr-rectangle-in:hover:before, .hvr-rectangle-in:focus:before, .hvr-rectangle-in:active:before {
  -webkit-transform: scale(0);
  transform: scale(0);
}
</style>
