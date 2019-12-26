<template>
  <v-container fill-height fluid>
    <transition
      appear
      enter-class=""
      enter-active-class="animated fadeInLeftBig slow">
        <v-row justify="center">
          <v-col cols="12" >
            <material-card color="orange" title="Hồ sơ bản thân">
              <v-row row>
                <v-col cols="12" md="8">
                  <router-view></router-view>
                </v-col>
                <v-col cols="12" md="4">
                  <v-avatar slot="offset" class="mx-auto d-block elevation-6  " size="300">
                    <img src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg">
                  </v-avatar>
                  <v-card-text class="text-center">
                    <v-btn color="blue-grey" class="ma-2 white--text btn btn-3">
                      Thay đổi ảnh đại diện
                      <v-icon right dark>mdi-cloud-upload</v-icon>
                    </v-btn>
                  </v-card-text>
                  <v-card-text class="text-center" style="height: 133px;">
                    <p class="">
                      Câu nói tôi yêu thích nhất đó là: "Đừng để người khác quyết định số phận của mình"
                    </p>
                  </v-card-text>
                  <v-card-text class="text-right">
                    <router-link tag="a" to="/list-two/thong-tin-ban-than/cap-nhat">Cập nhật thông tin bản thân</router-link>
                  </v-card-text>
                </v-col>
              </v-row>
            </material-card>
          </v-col>
        </v-row>
    </transition>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          name_empl: 'Doanh nhân hảo',
          email: 'ad@gmail.com',
          phone_num: '0976543223  ',
          addresss: 'Hát Môn - Phúc Thọ - Hà Nội',
          date_of_birth: '20/11/2019',
          level: 'Nhân viên',
          id_department: 'Phòng Kinh Doanh',
          pass: '12345678',
          stt: 'Đang hoạt động',
        },
      ],
    }),
  }
</script>
