x<template>
  <v-app id="app">
    <v-container >
      <v-row row class="mt-10 pt-10" >
        <v-col cols="12" sm="7" color="white" class="my-auto">
          <v-list-item style="width: 322px">
              <v-img  src="@/assets/logos.png" height="150" contain />
          </v-list-item>
            <p class="text-left display-1 ml-5" style="color:white">Welcome Back1</p>
            <p class="text-left ml-5" style="color:white">Giải pháp Dropshipping tại thị trường Việt Nam</p>
            
            <p class="text-left ml-5" style="color:white;width:400px">Bạn không cần phải phụ thuộc hoặc thuê những chuyên gia về Business Analytist nghiên cứu sản phẩm.</p>
            <p class="text-left ml-5" style="color:white;width:400px">Chỉ với thời gian 30 giây mọi thứ bạn cần tìm kiếm đã có ngay trước mắt của bạn. Media Soft giải pháp công nghệ hàng đầu Việt Nam.</p>
        </v-col>
        <v-col cols="12" sm="5" class="mx-auto my-auto">
          <v-card
            class="mx-auto"
            style="max-width: 500px;"
          >
            <material-chart-card
              class="dangnhap"
              color="#1867c0" 
              title="ĐĂNG NHẬP"
              type="Line"
            >
              <v-form
                ref="form"
                v-model="form"
                class="pa-4 pt-6"
              >
                <v-text-field
                  v-model="input.username"
                  placeholder="Email / Số điện thoại/ Tên đăng nhập"
                  :rules="[v => !!v || 'Thông tin bắt buộc ']"
                  color="deep-purple"
                  label="Tên đăng nhập"
                  required
                  outlined
                  style="min-height: 96px"
                ></v-text-field>
                <v-text-field
                  v-model="input.password"
                  :rules="[v => !!v || 'Thông tin bắt buộc ']"
                  required
                  outlined
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
                  placeholder="Password"
                  color="deep-purple"
                  label="Password"
                ></v-text-field>
                  <template>
                    Bạn chưa có tài khoản&nbsp;
                    <a href="#" @click.stop.prevent="dialog = true">tạo tài khoản</a>*
                  </template>
              </v-form>
              <v-divider class="my-0 py-0"></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="!form"
                  :loading="isUpdating"
                  class="white--text"
                  color="deep-purple accent-4"
                  depressed
                  @click="isUpdating = true"
                >Đăng nhập </v-btn>
              </v-card-actions>
            </material-chart-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar v-model="snackbar" color="blue" top dark >
      <v-icon color="white" class="mr-3">mdi-bell-plus</v-icon>
      <div> Bạn đăng ký thành công </div>
      <v-btn icon  @click="snackbar = false" >
        <v-icon>mdi-close-circle</v-icon>
      </v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackbar1" color="red" top dark >
      <v-icon color="white" class="mr-3">mdi-bell-plus</v-icon>
      <div> {{text}}</div>
      <v-btn icon  @click="snackbar1 = false" >
        <v-icon>mdi-close-circle</v-icon>
      </v-btn>
    </v-snackbar>
    <v-dialog v-model="dialog" max-width="700">
        <app-dangky @snackbar="snackbar=$event" @btnThoat="dialog=$event"></app-dangky>
    </v-dialog>
  </v-app>
</template>

<script>
import Dangky from '../views/form/formDangKy'
export default {
  name: "Login",
  data() {
    return {
      form: false,
      isLoading: false,
      show1: false,
      password: undefined,
      phone: undefined,
      text: '',
      isUpdating: false,
      form: false,
      level: { level1: '1', level2: '2', level3: '3', level4: '4'},
      input: {
        username: '',
        password: '',
      },
      name: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
      dialog: false,
      snackbar: false,
      snackbar1: false,
    }
  },
  components: {
    appDangky: Dangky
  },
  methods: {
    login() {
      this.snackbar1=true
      if (this.input.username !== '' && this.input.password !== '' && this.level.level1 !== '' && this.level.level2 !== '' ) {
        for (const i in this.$parent.mockAccount) {
          if (
            this.input.username === this.$parent.mockAccount[i].username &&
            this.input.password === this.$parent.mockAccount[i].password &&
            this.level.level1 === this.$parent.mockAccount[i].level1
          ) {
            this.$emit('authenticated', true)
            this.$router.push('admin/ban-tin')
          } else if (
            this.input.username === this.$parent.mockAccount[i].username &&
            this.input.password === this.$parent.mockAccount[i].password &&
            this.level.level2 === this.$parent.mockAccount[i].level2
          ) {
            this.$emit('authenticated', true)
            this.$router.push('/list-one/trang-chu')
          } else if (
            this.input.username === this.$parent.mockAccount[i].username &&
            this.input.password === this.$parent.mockAccount[i].password &&
            this.level.level3 === this.$parent.mockAccount[i].level3
          ) {
            this.$emit('authenticated', true)
            this.$router.push('/list-two/trang-chu')
          } else {
            this.text= 'Bạn nhập sai tài khoản hoặc mật khẩu'
          }
        }
      } else {
        this.text= 'Không được để trống tên User và Password'
      }
    },
  },
  watch: {
    isUpdating (val) {
      if (val) {
        setTimeout(() => (this.login(), this.isUpdating = false), 3000)
      }
    },
  },
}
</script>
<style>
.px-3 {
  margin: 26px !important;
  font-weight: 600 !important;
}
.dangnhap .px-3 h4{
  font-weight: 800 !important;
  color: white !important;
}
@media(min-width: 905px){
  #app{
    background-image: url(../assets/dangnhap.jpg) !important;
  background-repeat: no-repeat !important;
  background-size: 100%;
  }
  .text-login{
    margin-left:115px;
  }
}
#app{
  background-image: url(../assets/dangnhap.jpg) !important;
  background-repeat: no-repeat !important;
}
</style>
