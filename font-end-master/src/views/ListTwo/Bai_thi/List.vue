<template>
  <material-card class="nhanvien" title="Quản lý nhân viên" color="orange" text>
    <v-card>
      <v-row class="mx-5 my-0 py-0">
        <v-col cols="12" sm="6" class="mb-0 pb-0">
          <v-btn @click="addItem()" class="ma-2" outlined color="indigo">Thêm mới {{so1 + so2}}</v-btn>
        </v-col>
        <v-col cols="12" sm="6" class="mb-0 pb-0">
          <v-text-field v-model="search" append-icon="search" label="Search" outlined required></v-text-field>
        </v-col>
      </v-row>
      
      <v-spacer></v-spacer>
      
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
      >
        <template v-slot:item.tinhtrang="{ item }">
          <!-- <material-card class="nhanvien" :title="getText(item.tuoi)" text>
          </material-card> -->
          <p v-text="getText(item.tuoi)"></p>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)" >edit</v-icon>
          <v-icon small @click="deleteItem(item)"> delete</v-icon>
        </template>
      </v-data-table>
    </v-card>
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
            <v-col cols="12" class="py-0">
              <v-text-field v-model="item.manv" :rules="[v => !!v || 'Thông tin bắt buộc ']"  label="Mã nhân viên" outlined required></v-text-field>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-text-field v-model="item.tennhanvien" :rules="[v => !!v || 'Thông tin bắt buộc ']"  label="Tên nhân viên" outlined required></v-text-field>
            </v-col>
             <v-col cols="12" class="py-0">
              <v-text-field v-model="item.tenphongban" :rules="[v => !!v || 'Thông tin bắt buộc ']"  label="Tên phòng ban" outlined required></v-text-field>
            </v-col>
             <v-col cols="12" class="py-0">
               <v-combobox
                v-model="item.gioitinh"
                :items="items"
                chips
                label="Giới tính"
                :rules="[v => !!v || 'Thông tin bắt buộc ']" 
                outlined required
              ></v-combobox>
              <!-- <v-text-field v-model="item.gioitinh" label="Giới tính" outlined required></v-text-field> -->
            </v-col>
             <v-col cols="12" class="py-0">
              <v-text-field v-model="item.tuoi" label="Tuổi" :rules="[v => !!v || 'Thông tin bắt buộc ']"  type="number" outlined required></v-text-field>
            </v-col>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="blue darken-1"  @click="dialog=false" ><span style="color: white;">Thoát</span></v-btn>
            <v-btn color="orange" v-if="addUpdate" ><span style="color: white;" @click="saveItem()">Thêm</span></v-btn>
            <v-btn color="orange" v-else ><span style="color: white;" @click="updateItem()">Sửa</span></v-btn>
          </v-card-actions>
      </material-card>
    </v-dialog>
    <!-- xoa -->
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
                <td>{{ item.ten }}</td>
                <td>{{ item.hsl }}</td>
                <td>{{ item.ngay }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog1 = false" > Thoát</v-btn>

          <v-btn color="green darken-1" text @click="Delete()" > Xóa </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar1" color="green" top dark >
      <v-icon color="white" class="mr-3">mdi-bell-plus</v-icon>
      <div>{{text}}</div>
      <v-btn icon  @click="snackbar1 = false" >
      <v-icon>mdi-close-circle</v-icon>
      </v-btn>
    </v-snackbar>
  </material-card>
</template>

<script>
  import datetimePicker from '../../DatetimePicker'
  import { getApi, PostApi, UpdateApi, DeleteApi } from './api'
  export default {
    data () {
      return {
        search: '',
        item: {},
        so1: '',
        so2: '',
        addUpdate: true,
        snackbar1: false,
        dialog: false,
        editedIndex: -1,
        dialog1: false,
        text: '',
        items: ['Nam', 'Nữ'],
        headers: [
          { text: 'Mã nhân viên', align: 'left', sortable: false, value: 'manv' },
          { text: 'Tên nhân viên', value: 'tennhanvien' },
          { text: 'Tên phòng ban', value: 'tenphongban' },
          { text: 'Giới tính', value: 'gioitinh' },
          { text: 'Tuổi', value: 'tuoi' },
          { text: 'Tình trạng', value: 'tinhtrang' },
          { text: 'Actions', align: 'left', value: 'actions' },
        ],
        desserts: [],
      }
    },
    components: {
      datetimePicker,
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        getApi()
        .then(response => {
          this.desserts = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
      },

      addItem () {
        this.dialog = true
        this.addUpdate = true 
        this.item = {}
      },

      editItem (index) {
        this.editedIndex = this.desserts.indexOf(index)
        this.item = Object.assign({}, index)
        this.dialog = true
        this.addUpdate = false 
      },

      deleteItem (index) {
        this.item = index
        this.dialog1 = true
      },

      Delete () {
        DeleteApi(this.item)
        const index = this.desserts.indexOf(this.item)
        this.desserts.splice(index, 1)
        this.snackbar()
        this.text = 'Xóa thành công !'
        this.dialog1 = false
      },

      updateItem(){
        UpdateApi(this.item)
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

      saveItem () {
        PostApi(this.item)
        .then(response => {
        })
        .catch(function (error) {
          console.log(error)
        })
        this.desserts.push(this.item)
        this.snackbar()
        this.text = 'Thêm mới thành công !'
        this.dialog = false
        this.item = {}
      },

      snackbar () {
        this.snackbar1 = true
      },

      getText (tuoi) {
        if (tuoi > 35) return 'Cao tuổi'
        else if (20 << tuoi < 35) return 'Trung niên'
         else return 'Trẻ'
      },
    }
  }
</script>
