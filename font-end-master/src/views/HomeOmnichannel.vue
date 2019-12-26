<template>
  <div>
    <app-omnichannel
    :fields="fields"
    :list-api="getOmninchannelApi"
    :update-api="updateOmninchannelApi"
    :add-api="addOmninchannelApi">
      <template v-slot:form="{ item }" >
          <form>
             <v-container>
                <v-row>
                  <v-col cols="12" class="py-0">
                    <v-text-field v-model="item.name_cus" label="Họ và tên" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <v-text-field v-model="item.email" label="Số điện thoại" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <v-text-field v-model="item.phone_num" label="Email" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <v-text-field v-model="item.user" label="Tên đăng nhập" placeholder="Email / Số điện thoại/ Tên đăng nhập" outlined ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" class="py-0">
                    <v-text-field v-model="item.pass" type="password" label="Mật khẩu" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" class="py-0">
                      <v-combobox v-model="item.stt" height="30" :items="stt" outlined  label="Trạng thái"></v-combobox>
                  </v-col>
                </v-row>
              </v-container>
          </form>
      </template>
    </app-omnichannel>
  </div>
</template>

<script>
  import Omnichannel from '../table/Omnichannel'
  import { getOmninchannelApi, updateOmninchannelApi, addOmninchannelApi } from '../../api/khachang'
  export default {
    data() {
      return {
        getOmninchannelApi,
        updateOmninchannelApi,
        addOmninchannelApi,
        stt: ['Tạm ngừng hoạt động', 'Chờ kích hoạt', 'Đang hoạt động'],
        fields: [
          { key: 'index', label: 'Số TT', class: 'text-center', id: true },
          { key: 'name_cus', label: 'Họ và Tên', sortable: true, sortDirection: 'desc' },
          { key: 'phone_num', label: 'Số điện thoại', sortable: true, class: 'text-center' },
          { key: 'email', label: 'Email', sortable: true, class: 'text-center' },
          { key: 'user', label: 'User', sortable: true, class: 'text-center' },
          { key: 'pass', label: 'PassWord', sortable: true, class: 'text-center' },
          { key: 'stts', label: 'Trạng thái', sortable: true, class: 'text-center' },
          { key: 'actions', label: 'Actions', class: 'text-right' }
        ]
      }
    },
    components: {
      appOmnichannel: Omnichannel
    },
  }
</script>
