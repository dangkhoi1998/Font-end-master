<template>
 
    <v-card>
        <material-card class="card-tabs" color="green">
          <template v-slot:header>
            <v-tabs background-color="transparent" slider-color="white">
              <span
                class="subheading font-weight-light mx-3"
                style="align-self: center"
              >Đăng ký tài khoản</span>
            </v-tabs>
          </template>
          <v-form ref="formNhanvien" lazy-validation >
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="7" class="py-0">
                    <v-text-field v-model="nhanvien.name_empl" label="Họ và tên" :rules="[v => !!v || 'Thông tin bắt buộc ']" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="5" class="py-0">
                    <v-text-field v-model="nhanvien.phone_num" label="Số điện thoại2222" :rules="phone" outlined required></v-text-field>
                    dddddđ{{phone}}
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <v-text-field v-model="nhanvien.addresss" label="Địa chỉ" :rules="[v => !!v || 'Thông tin bắt buộc ']" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" class="py-0">
                    <v-text-field v-model="nhanvien.email" label="Email" :rules="emailRules" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" class="py-0">
                    <v-text-field v-model="nhanvien.date_of_birth" label="Năm sinh" :rules="[v => !!v || 'Thông tin bắt buộc ']" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" class="py-0">
                    <v-text-field v-model="nhanvien.userr" label="Tên đăng nhập" :rules="[v => !!v || 'Thông tin bắt buộc ']" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" class="py-0">
                    <v-text-field
                      v-model="nhanvien.pass"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      placeholder="Password"
                      label="Mật khẩu"
                      counter
                      required
                      outlined
                      :rules="[v => !!v || 'Thông tin bắt buộc ']"
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="warning darken-1" dark @click="btnThoat">Thoát</v-btn>
              <v-btn color="secondary darken-1" dark @click="addDangky">Đăng ký</v-btn>
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
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      nhanvien: [],
      level: '',
      snackbar: false,
      stt: 'Chờ xét duyệt',
      show1: false,
    }
  },
  methods: {
    addDangky () {
      var vm = this
      if (vm.$refs.formNhanvien.validate()) {
        api
        .post('employee', {
          name_empl: this.nhanvien.name_empl,
          phone_num: this.nhanvien.phone_num,
          addresss: this.nhanvien.addresss,
          date_of_birth: this.nhanvien.date_of_birth,
          email: this.nhanvien.email,
          userr: this.nhanvien.userr,
          pass: this.nhanvien.pass,
          stt: this.stt
        })
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
        this.$emit('snackbar', this.snackbar=true)
        vm.nhanvien = []
        vm.$emit('btnThoat', vm.dialog = false)
      }
    },
    btnThoat () {
      this.$emit('btnThoat', this.dialog = false)
    },
    computed: {
      phone () {
        return this.$store.state.phone
      }
    }
  }
}
</script>
<style scoped>
  .v-input__slot {
    height: 30px!important;
  }
</style>