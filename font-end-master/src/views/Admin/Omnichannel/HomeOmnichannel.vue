<template>
  <div>
    <transition
    appear
    enter-class=""
    enter-active-class="animated jackInTheBox">
      <app-omnichannel
      :headers="headers"
      :list-api="getKhachhang"
      :update-api="updateOmninchannelApi"
      :add-api="PostKhachhang">
        <template v-slot:formOmnichannel="{ item }" >

          <v-container>
              <v-row>
                <v-col cols="12" class="py-0">
                  <v-text-field 
                  v-model="item.nameCus" 
                  label="Họ và tên" 
                  :rules="[v => !!v || 'Thông tin bắng buộc']"
                  outlined 
                  required></v-text-field>
                </v-col>
                <v-col cols="12" class="py-0">
                  <v-text-field 
                  v-model="item.phoneNum" 
                  label="Số điện thoại" 
                  :rules="phone"
                  outlined required></v-text-field>
                </v-col>
                <v-col cols="12" class="py-0">
                  <v-text-field 
                  v-model="item.email" 
                  label="Email" :rules="[v => !!v || 'Thông tin bắt buộc ', v => /.+@gmail.+/.test(v)  || 'Bạn nhập sai email']" 
                  outlined 
                  required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" class="py-0">
                  <v-text-field 
                  v-model="item.userCus" 
                  label="Tên đăng nhập" 
                  placeholder="Email / Số điện thoại/ Tên đăng nhập" 
                  :rules="[v => !!v || 'Thông tin bắng buộc']" 
                  outlined ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="py-0">
                  <v-text-field 
                  v-model="item.passCus" 
                  type="password" 
                  label="Mật khẩu" 
                  :rules="[rules.password, rules.length(6)]"
                  outlined
                  required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="py-0">
                    <v-combobox v-model="item.stt" height="30" :items="stt" outlined  label="Trạng thái"></v-combobox>
                </v-col>
              </v-row>
            </v-container>
     
        </template>
      </app-omnichannel>
    </transition>
  </div>
</template>

<script>
  import Omnichannel from '../../../components/Admin/table/Omnichannel'
  import { getKhachhang, updateOmninchannelApi } from '../../../api/GetApi/getApiAdmin'
  import { PostKhachhang } from '../../../api/PostApi/PostAdmin'
  export default {
    data() {
      return {
        getKhachhang,
        updateOmninchannelApi,
        PostKhachhang,
        rules: {
          email: v => (v || '').match(/@/) || 'Please enter a valid email',
          length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
          password: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
            'Mật khẩu phải chứa chữ in hoa, ký tự số và ký tự đặc biệt',
          required: v => !!v || 'This field is required',
        },
        stt: ['Tạm ngừng hoạt động', 'Chờ kích hoạt', 'Đang hoạt động'],
        headers: [
          { text: 'Họ và Tên', align: 'left', sortable: false, value: 'nameCus' },
          { text: 'Số điện thoại', align: 'left', value: 'phoneNum' },
          { text: 'Email', align: 'left', value: 'email' },
          { text: 'User', align: 'left', value: 'userCus' },
          { text: 'Pass', align: 'left', value: 'passCus' },
          { text: 'Trạng thái', align: 'left', value: 'stts' },
          { text: 'Actions', align: 'left', value: 'actions' },
        ],
      }
    },
    components: {
      appOmnichannel: Omnichannel
    },
    computed: {
      phone () {
        return this.$store.state.phone
      }
    }
  }
</script>
