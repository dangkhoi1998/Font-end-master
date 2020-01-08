<template>
<material-card
    color="green"
    class="animated rotateInUpRight"
  >
    <template v-slot:header>
      <v-row>
        <v-col class="ml-4" cols="12" sm="10">
          <h4>Thông tin tài khoản</h4>
        </v-col>
      </v-row>
    </template>
    <v-container fill-height fluid>
     <transition
      appear
      enter-class=""
      enter-active-class="animated fadeInLeftBig slow">
        <v-row justify="center">
          <v-col
            cols="12"
            md="8"
          >
            <router-view></router-view>
          </v-col>
          <v-col cols="12" md="4">
            <material-card class="my-0 py-0 v-card-profile">
              <v-avatar
                slot="offset"
                class="mx-auto d-block elevation-6"
                size="130"
              >
                <img
                  src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
                >
              </v-avatar>
              <v-card-text class="text-center">
                <h4 class="font-weight-light">
                  Super Admin
                </h4>

                <p class="font-weight-light">
                  Admin
                </p>
                <v-btn :to="'/admin/'+  $route.params.idEmpl + '/thong-tin-tai-khoan/cap-nhat-ho-so'" style="text-decoration:none" color="success">Cập nhật hồ sơ</v-btn>
              </v-card-text>
            </material-card>
          </v-col>
        </v-row>
      </transition>
    </v-container>
</material-card>
</template>

<script>
  export default {
  }
</script>
