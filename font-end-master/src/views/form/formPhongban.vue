<template>
  <v-card>
    <material-card class="card-tabs" color="green">
      <template v-slot:header>
        <v-tabs background-color="transparent" slider-color="white">
          <span
            class="subheading font-weight-light mx-3"
            style="align-self: center"
          >Phòng ban</span>
        </v-tabs>
      </template>
      <v-form ref="formPhongban" lazy-validation >
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" class="py-0">
                <v-text-field v-model="phongban.department_name" label="Tên phòng ban" outlined required></v-text-field>
              </v-col>
              <v-col cols="12" class="py-0">
                <v-text-field v-model="phongban.id_department" label="Mã phòng ban" outlined required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
            <v-btn color="blue darken-1"  @click="btnThoat"><span style="color:white;">Thoát</span></v-btn>
            <v-btn color="orange darken-1" @click="AddDepartment" v-if="btnPhongban"><span style="color:white;">Lưu lại</span></v-btn>
            <v-btn color="orange darken-1" @click="EditDepartment" v-else><span style="color:white;">Sửa</span></v-btn>
        </v-card-actions>
      </v-form>
    </material-card>
  </v-card>
</template>
<script>
import api from '../../api/http'
export default {
  data() {
    return {
      phongban: [],
      btnPhongban: [],
      dialog: true,
      test: ''
    }
  },
  methods: {
    AddDepartment () {
      var vm = this
      if (vm.$refs.formPhongban.validate()) {
        api
        .post('department', {
          department_name: vm.phongban.department_name,
          id_department: vm.phongban.id_department,
        })
          .then(response => {
            this.$emit('addphongban', this.nhanvien='ddddddddddđ')
            console.log('ddddđsssss', response.data)
          })
          .catch(error => {
            console.log(error)
          })
      }
      this.$emit('btnThoat', this.dialog = false )
      this.phongban = {}
    },
    EditDepartment () {
      var vm = this
        if (vm.$refs.formPhongban.validate()) {
          api
          .put('department/' + vm.phongban.id, {
            department_name: vm.phongban.department_name,
            id_department: vm.phongban.id_department,
          })
            .then(response => {
              console.log(response)
            })
            .catch(error => {
            })
        }
      this.phongban = {}
      this.$emit('btnThoat', this.dialog = false )
    },
    btnThoat () {
      this.$emit('btnThoat', this.dialog = false )
    }
  },
  props: {
    phongban: {
      type: [Boolean, Object ],
      default: {}
    },
    btnPhongban: {
      type: [Boolean, Object ],
      default: {}
    }
  },
  watch: {
  }
}
</script>
