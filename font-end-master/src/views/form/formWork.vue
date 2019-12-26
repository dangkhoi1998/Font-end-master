<template>
  <v-row>
    <v-col cols="12" sm="8">
      <material-card class="card-tabs" color="green">
        <template v-slot:header>
          <v-tabs background-color="transparent" slider-color="white">
            <span
              class="subheading font-weight-light mx-3"
              style="align-self: center"
            >Thêm công việc</span>
          </v-tabs>
        </template>
        <v-form ref="formCongvien" lazy-validation >
          <v-card-text>
            <v-container>
                <v-row>
                  <v-col cols="12"  class="py-0">
                    <v-text-field v-model="congviec.work_name" label="Tiêu đề công việc" outlined required ></v-text-field>
                  </v-col>
                  <v-col cols="12"   class="py-0">
                    <v-combobox v-model="congviec.id_department" :items="department_name" outlined dense label="Phòng ban" multiple chips ></v-combobox>
                  </v-col>
                  <v-col cols="12" sm="6" md="8" class="py-0">
                    <v-combobox v-model="congviec.id_empl" :items="name_empl" outlined dense  label="Người thực hiện" multiple chips ></v-combobox>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" class="py-0">
                    <v-combobox  v-model="congviec.prioritize" height="30" :items="mucdo" :rules="[v => !!v || 'Thông tin bắt buộc ']" dense  outlined  label="Mức độ ưu tiên" ></v-combobox>
                  </v-col>
                  <v-col clos="12" class="py-0">
                    <v-textarea
                      v-model="congviec.noidung"
                      outlined
                      name="input-7-4"
                      label="Chi tiết công việc"
                      value=""
                      rows="10"
                      loading="true"
                    ></v-textarea>
                  </v-col>
                </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
              <v-btn v-if="dialog2" color="green darken-1" @click="reset()"><span style="color:white;">Làm mới</span></v-btn>
              <v-btn color="blue darken-1"  @click="btnThoat()"><span style="color:white;">Quay lại</span></v-btn>
              <v-btn v-if="dialog1" color="orange darken-1" @click="btnSave()"><span style="color:white;">Lưu lại</span></v-btn>
              <v-btn v-else color="orange darken-1" @click="Edit()"><span style="color:white;">Lưu lại</span></v-btn>
          </v-card-actions>
        </v-form>
      </material-card>
    </v-col>
    <!-- ------------------------------------------------------------ -->
    <v-col cols="12" sm="4">
      <material-card class="card-tabs" color="green">
        <template v-slot:header>
          <v-tabs background-color="transparent" slider-color="white">
            <span
              class="subheading font-weight-light mx-3"
              style="align-self: center"
            >List công việc</span>
          </v-tabs>
        </template>
        <v-list nava-item style="border-bottom: 1px solid #EEEEEE;" v-for="item in listWorks">
          <v-list-item class="mx-0 px-0">
            <v-list-item-icon class="mx-0 px-0">
              <v-icon size="40">arrow_right</v-icon>
              </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{item.work_name}}</v-list-item-title>
                <v-list-item-subtitle>
                  {{item.date}}
                </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar>
              <v-icon size="20" color="blue" @click="editItem(item)">edit</v-icon>
              <v-icon size="20" color="red" @click="deleteItem(item)">delete</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-list>
      </material-card>
    </v-col>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline">Bạn có chắc chẵn xóa thông tin?</v-card-title>
        <v-card-text>{{congviec.work_name}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Thoát</v-btn>
          <v-btn color="green darken-1" text @click="Delete()">Xóa</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import api from '../../api/http'
import {getEmployeeApi, getDepartmentApi, getworkApi} from '../../api/getApi'
export default {
  data() {
    return {
      dialog: false,
      dialog1: true,
      dialog2: false,
      department_name: [],
      name_empl: [],
      mucdo: ['Trung bình', 'Khẩn cấp'],
      congviec: {
        date: new Date().toISOString().substr(0, 10),
      },
      listWorks: {},
    }
  },
  created () {
    this.listEmploee()
    this.listgetDepartment()
    this.listWork()
  },
  methods: {
    listEmploee () {
      getEmployeeApi()
        .then(response => {
          for(const i in response.data ) {
            this.name_empl.push(response.data[i]['name_empl'])
          }
        })
    },
    listgetDepartment () {
      getDepartmentApi()
        .then(response => {
          for(const i in response.data) {
            this.department_name.push(response.data[i]['department_name'])
          }
        })
    },
    listWork () {
      getworkApi()
        .then(response => {
          this.listWorks = response.data
        })
    },
    editItem (index) {
      this.congviec = {...index}
      this.dialog1 = false
      this.dialog2 = true
    },
    deleteItem (index) {
      this.congviec = {...index}
      this.dialog = true
    },
    Delete () {
      api
      .delete('work/' + this.congviec.id, {
      })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
      this.$router.push('/admin/ban-tin')
    },
    btnSave () {
      var vm = this
      if (vm.$refs.formCongvien.validate()) {
        api
        .post('work', {
          work_name: vm.congviec.work_name,
          id_department: vm.congviec.id_department,
          id_empl: vm.congviec.id_empl,
          prioritize: vm.congviec.prioritize,
          noidung: vm.congviec.noidung,
          date: vm.congviec.date
        })
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
        this.$router.push('/admin/ban-tin')
      }
    },
    Edit () {
       var vm = this
      if (vm.$refs.formCongvien.validate()) {
        api
        .put('work/' + this.congviec.id, {
          work_name: vm.congviec.work_name,
          id_department: vm.congviec.id_department,
          id_empl: vm.congviec.id_empl,
          prioritize: vm.congviec.prioritize,
          noidung: vm.congviec.noidung,
          date: vm.congviec.date
        })
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
        this.$router.push('/admin/ban-tin')
      }
    },
    btnThoat () {
      this.$router.push('/admin/ban-tin')
    },
    reset () {
      this.congviec = {}
      this.dialog2 = false
      this.dialog1 = true
    }
  }
}
</script>