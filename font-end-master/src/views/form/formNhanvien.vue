<template>
 
    <v-card>
        <material-card class="card-tabs" color="green">
          <template v-slot:header>
            <v-tabs v-model="tabs" background-color="transparent" slider-color="white">
              <span
                class="subheading font-weight-light mx-3"
                style="align-self: center"
              >Nhân viên</span>
            </v-tabs>
          </template>
          <v-form ref="formNhanvien" lazy-validation >
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="6" class="py-0">
                    <v-text-field v-model="nhanvien.name_empl" label="Họ và tên" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" class="py-0">
                    <v-text-field v-model="nhanvien.phone_num" label="Số điện thoại" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <v-text-field v-model="nhanvien.addresss" label="Địa chỉ" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" class="py-0">
                    <v-text-field v-model="nhanvien.email" label="Email" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" class="py-0">
                    <datetime-picker :lableName="`Năm sinh`" v-model="nhanvien.date_of_birth" @date="nhanvien.date_of_birth=$event"></datetime-picker>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" class="py-0">
                    <v-combobox v-model="nhanvien.level" height="30" :items="items" outlined  label="Chức vụ"></v-combobox>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" class="py-0">
                    <v-text-field v-model="nhanvien.id_department" label="Phòng ban" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" class="py-0">
                    <v-text-field v-model="nhanvien.pass" label="Mật khẩu" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" class="py-0">
                    <v-combobox v-model="nhanvien.stt" height="30" :items="stt" outlined  label="Trạng thái"></v-combobox>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
              <v-btn color="blue darken-1"  @click="btnThoat"><span style="color:white;">Thoát</span></v-btn>
              <v-btn color="orange darken-1" v-if="btnNhanvien" @click="Add"><span style="color:white;">Lưu lại</span></v-btn>
              <v-btn color="orange darken-1" v-else @click="Update"><span style="color:white;">Sửa</span></v-btn>
          </v-card-actions>
        </v-form>
        </material-card>
    </v-card>
</template>
<script>
import datetimePicker from '../DatetimePicker'
import api from '../../api/http'
export default {
  data() {
    return {
      tabs: '',
      items: ['Trưởng phòng', 'Nhân viên'],
      nhanvien: {},
      btnNhanvien: true,
      stt: ['Đang hoạt động', 'Tạm ngừng hoạt động', 'Ngừng hoạt động']
    }
  },
  components: {
    datetimePicker
  },
  methods: {
    Add () {
      if (this.$refs.formNhanvien.validate()) {
        this.$emit('Datanhanvien', this.nhanvien)
        api
        .post('employee', {
          name_empl: this.nhanvien.name_empl,
          phone_num: this.nhanvien.phone_num,
          addresss: this.nhanvien.addresss,
          date_of_birth: this.nhanvien.date_of_birth,
          email: this.nhanvien.email,
          level: this.nhanvien.level,
          stt: this.nhanvien.stt,
          id_department: this.nhanvien.id_department
        })
          .then(response => {
          })
          .catch(error => {
          })
        this.nhanvien = {}
        this.$emit('btnThoat', this.dialog3 = false )
      }
    },
    Update () {
      if (this.$refs.formNhanvien.validate()) {
        api
        .put('employee/' + this.nhanvien.id , {
          name_empl: this.nhanvien.name_empl,
          phone_num: this.nhanvien.phone_num,
          addresss: this.nhanvien.addresss,
          date_of_birth: this.nhanvien.date_of_birth,
          email: this.nhanvien.email,
          level: this.nhanvien.level,
          stt: this.nhanvien.stt,
          id_department: this.nhanvien.id_department
        })
          .then(response => {
            let item = response.data
          })
          .catch(error => {
            console.log(error)
          })
        this.nhanvien = {}
        this.$emit('btnThoat', this.dialog3 = false )
      }
    },
    btnThoat () {
      this.$emit('btnThoat', this.dialog3 = false )
    }
  },
  props: {
    btnNhanvien: {
      type: Boolean,
      default: {}
    },
    nhanvien: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  // watch: {
  //   nhanviens (item) {
  //     this.nhanvien = item
  //   }
  // },
}
</script>
<style scoped>
  .v-input__slot {
    height: 30px!important;
  }
</style>
