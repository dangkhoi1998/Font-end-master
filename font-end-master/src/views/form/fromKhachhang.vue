<template>
 
    <v-card>
        <material-card class="card-tabs" color="green">
          <template v-slot:header>
            <v-tabs v-model="tabs" background-color="transparent" slider-color="white">
              <span
                class="subheading font-weight-light mx-3"
                style="align-self: center"
              >Khách hàng</span>
            </v-tabs>
          </template>
          <v-form ref="form" lazy-validation >
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" class="py-0">
                    <v-text-field v-model="customer.name_cus" label="Họ và tên" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <v-text-field v-model="customer.email" label="Số điện thoại" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <v-text-field v-model="customer.phone_num" label="Email" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <v-text-field v-model="customer.user" label="Tên đăng nhập" placeholder="Email / Số điện thoại/ Tên đăng nhập" outlined ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" class="py-0">
                    <v-text-field v-model="customer.pass" type="password" label="Mật khẩu" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" class="py-0">
                      <v-combobox v-model="customer.stt" height="30" :items="stt" outlined  label="Trạng thái"></v-combobox>
                  </v-col>
                </v-row>
              </v-container>
              <!-- <small>*indicates required field</small> -->
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="blue darken-1"  @click="btnThoat" ><span style="color: white;">Thoát</span></v-btn>
              <v-btn color="orange" v-if="btnOmnichanel" ><span style="color: white;" @click="save">Lưu lại</span></v-btn>
              <v-btn color="orange" else ><span style="color: white;" @click="Edit">Sửa</span></v-btn>
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
      btnOmnichanel: true,
      tabs: '',
      customer: {},
      stt: ['Đang hoạt động', 'Chờ kích hoạt', 'Ngừng hoạt động'],
      dialog: true
    }
  },
  methods: {
    save () {
      var vm = this
      if (vm.$refs.form.validate()) {
        api
        .post('Omninchannel', {
          name_cus: vm.customer.name_cus,
          email: vm.customer.email,
          phone_num: vm.customer.phone_num,
          user: vm.customer.user,
          pass: vm.customer.pass,
          stt: vm.customer.stt,
        })
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
      }
      this.customer = {}
      this.$emit('btnThoat', this.dialog = false )
    },
    updateRecord(){
      this.updateApi(this.item[this.idField],this.item)
      console.log('sssssssssss', this.item[this.idField], this.item)
        .then(response =>{
          let item = response.data
          this.$set(this.list,this.item.index,item)
          this.item = {}
        })
        .catch(err =>{
          if(err.response.status === 422){
            this.message = err.response.data
          }
        })
    },
    btnThoat () {
      this.$emit('btnThoat', this.dialog= false )
    }
  },
  props: {
    customer: {
      type: [Object, Array],
      default: {}
    },
    btnOmnichanel: {
      type: Boolean
    }
  },
  watch: {
  }
}
</script>
<style scoped>
  .v-input__slot {
    height: 30px!important;
  }
</style>