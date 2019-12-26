<template>
  <div>
    <div class="lds-hourglass" v-if="isLoading"></div>
    <app-opportunity
    v-if="!isLoading"
    :headers="headers"
    :list-api="getOpportunityApi"
    :update-api="updateOpportunityApi"
>
      <template v-slot:formOpportunity="{ item }" >
        <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="6" class="py-0">
            <v-text-field v-model="item.cus_Name" label="Họ và Tên" :rules="[v => !!v || 'Thông tin bắt buộc ']"   outlined required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6" class="py-0">
            <v-text-field v-model="item.phone_Num" type="number" label="Số điện thoại" :rules="phone"   outlined required></v-text-field>
          </v-col>
          <v-col cols="12" class="py-0">
            <v-text-field v-model="item.pro_Name" label="Tiên sản phẩm" :rules="[v => !!v || 'Thông tin bắt buộc ']"   outlined required></v-text-field>
          </v-col>
          <v-col cols="12" class="py-0">
            <v-text-field v-model="item.email" label="Email " :rules="[v => !!v || 'Thông tin bắt buộc ', v => /.+@gmail.+/.test(v)  || 'Bạn nhập sai email']"  outlined required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4" class="py-0">
            <v-text-field v-model="item.amountt" type="number" label="Số lượng" :rules="[v => !!v || 'Thông tin bắt buộc ']"   outlined required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4" class="py-0">
              <v-text-field v-model="item.price" type="number" label="Giá" :rules="[v => !!v || 'Thông tin bắt buộc ']"   outlined required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4" class="py-0">
            <datetime-picker :lableName="lable = 'Ngày mua'" v-model="item.date_of_purchase" @date="item.date_of_purchase=$event"></datetime-picker>
          </v-col>
          <v-col cols="12" sm="6" md="6" class="py-0">
            <v-combobox v-model="item.id_empl" :items="id_empl" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" label="Nhân viên" outlined required></v-combobox>
          </v-col>
          <v-col cols="12" sm="6" md="6" class="py-0">
            <v-combobox v-model="item.delivery" :items="id_empl" label="Giao vận" :rules="[v => !!v || 'Thông tin bắt buộc ']"   outlined required></v-combobox>
          </v-col>
          <v-col cols="12" sm="6" md="8" class="py-0">
            <v-combobox v-model="item.source" label="Nguồn" :rules="[v => !!v || 'Thông tin bắt buộc ']"   outlined required></v-combobox>
          </v-col>
          <v-col cols="12" sm="6" md="4" class="py-0">
            <v-combobox  v-model="item.status" height="30" :items="stt" :rules="[v => !!v || 'Thông tin bắt buộc ']"   outlined  label="Trạng thái" ></v-combobox>
          </v-col>
        </v-row>
      </v-container>
      </template>
    </app-opportunity>
  </div>
</template>

<script>
  import Opportunity from '../../../components/Admin/table/Opportunity'
  import datetimePicker from '../../DatetimePicker'
  import { getOpportunityApi, updateOpportunityApi} from '../../../api/Opportunity'
  import {getEmployeeApi} from '../../../api/getApi'
  import {loading} from '../../../mixins/loading.mixin'
  export default {
    mixins: [loading],
    data() {
      return {
        getOpportunityApi,
        updateOpportunityApi,
        status: [],
        id_empl: [],
        stt: ['Tạm ngừng hoạt động', 'Chờ kích hoạt', 'Đang hoạt động'],
        headers: [
          { text: 'Họ và Tên', align: 'left', sortable: false, value: 'cus_Name' },
          { text: 'Số điện thoại', align: 'left', value: 'phone_Num' },
          { text: 'Tên sản phẩm', align: 'left', value: 'pro_Name' },
          { text: 'Email', align: 'left', value: 'email' },
          { text: 'Số lượng', align: 'left', value: 'amountt' },
          { text: 'Giá', align: 'left', value: 'price' },
          { text: 'Ngày mua', align: 'left', value: 'date_of_purchase' },
          { text: 'Tên nhân viên', align: 'left', value: 'id_empl' },
          { text: 'Giao vận', align: 'left', value: 'delivery' },
          { text: 'Nguồn', align: 'left', value: 'source' },
          { text: 'Actions', align: 'left', value: 'actions' },
        ],
      }
    },
    components: {
      appOpportunity: Opportunity,
      datetimePicker
    },
    created () {
      this.getItem()
    },
    methods: {
      getItem () {
        this.isLoading = true
        getEmployeeApi ()
          .then(response=>{
            for (const i in response.data) {
              this.id_empl.push(response.data[i]['name_empl'])
            }
          })
          .finally(() => {
            this.isLoading = false
          })
      }
    },
    computed: {
      phone () {
        return this.$store.state.phone
      }
    }
  }
</script>
